import { NextResponse } from 'next/server';
import { products } from '../../data/products';

// SSRF protection: only allow these two Clover hostnames
const ALLOWED_CLOVER_BASES = new Set([
  'https://apisandbox.dev.clover.com',
  'https://api.clover.com',
]);

type RequestItem = { id: number; quantity: number };

export async function POST(req: Request) {
  const privateKey = process.env.CLOVER_PRIVATE_KEY;
  const merchantId = process.env.CLOVER_MERCHANT_ID;

  if (!privateKey || !merchantId) {
    return NextResponse.json(
      { error: 'Payment service is not configured.' },
      { status: 500 }
    );
  }

  // SSRF allowlist check
  const rawBase = process.env.CLOVER_API_BASE_URL ?? 'https://apisandbox.dev.clover.com';
  if (!ALLOWED_CLOVER_BASES.has(rawBase)) {
    console.error('[checkout] Blocked disallowed CLOVER_API_BASE_URL');
    return NextResponse.json({ error: 'Payment service misconfigured.' }, { status: 500 });
  }

  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL ?? 'http://localhost:3000';

  // Parse body — never trust client-provided prices or names
  let requestItems: RequestItem[];
  try {
    const body = await req.json();
    if (!Array.isArray(body?.items) || body.items.length === 0) {
      return NextResponse.json({ error: 'Cart is empty.' }, { status: 400 });
    }
    requestItems = body.items;
  } catch {
    return NextResponse.json({ error: 'Invalid request.' }, { status: 400 });
  }

  // Resolve prices server-side from the authoritative product catalogue
  const productMap = new Map(products.map((p) => [p.id, p]));
  const lineItems: { name: string; price: number; unitQty: number }[] = [];

  for (const reqItem of requestItems) {
    const product = productMap.get(Number(reqItem.id));
    if (!product) {
      return NextResponse.json({ error: 'Invalid item in cart.' }, { status: 400 });
    }
    const qty = Math.max(1, Math.floor(Number(reqItem.quantity) || 1));
    lineItems.push({
      name: product.name,
      price: product.price * 100, // Clover expects cents
      unitQty: qty,
    });
  }

  try {
    const res = await fetch(
      `${rawBase}/invoicingcheckoutservice/v1/checkouts`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
          'X-Clover-Merchant-Id': merchantId,
          Authorization: `Bearer ${privateKey}`,
        },
        body: JSON.stringify({
          customer: {},
          redirectUrls: {
            success: `${baseUrl}/success`,
            failure: `${baseUrl}/#shop`,
          },
          shoppingCart: { lineItems },
        }),
      }
    );

    if (!res.ok) {
      // Log detail server-side only — never expose to client
      console.error('[checkout] Clover error:', res.status, await res.text());
      return NextResponse.json(
        { error: 'Payment service unavailable. Please try again.' },
        { status: 502 }
      );
    }

    const data = await res.json();
    return NextResponse.json({ url: data.href });
  } catch (err) {
    console.error('[checkout] Fetch error:', err);
    return NextResponse.json(
      { error: 'Unable to reach payment service. Please try again.' },
      { status: 502 }
    );
  }
}
