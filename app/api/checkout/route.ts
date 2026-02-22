import { NextResponse } from 'next/server';

type CartItem = {
  id: number;
  name: string;
  price: number;
  quantity: number;
};

type CloverCheckoutResponse = {
  href: string;
  checkoutSessionId: string;
  createdTime: number;
  expirationTime: number;
};

export async function POST(req: Request) {
  const privateKey = process.env.CLOVER_PRIVATE_KEY;
  const merchantId = process.env.CLOVER_MERCHANT_ID;

  if (!privateKey || !merchantId) {
    return NextResponse.json(
      {
        error:
          'Clover is not configured. Add CLOVER_PRIVATE_KEY and CLOVER_MERCHANT_ID to .env.local',
      },
      { status: 500 }
    );
  }

  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL ?? 'http://localhost:3000';
  const cloverApiBase =
    process.env.CLOVER_API_BASE_URL ?? 'https://apisandbox.dev.clover.com';

  const { items }: { items: CartItem[] } = await req.json();

  if (!items || items.length === 0) {
    return NextResponse.json({ error: 'Cart is empty' }, { status: 400 });
  }

  const res = await fetch(
    `${cloverApiBase}/invoicingcheckoutservice/v1/checkouts`,
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
        shoppingCart: {
          lineItems: items.map((item) => ({
            name: item.name,
            price: item.price * 100, // Clover uses cents (e.g. $299 → 29900)
            unitQty: item.quantity,
          })),
        },
      }),
    }
  );

  if (!res.ok) {
    const errText = await res.text();
    console.error('Clover API error:', errText);
    return NextResponse.json(
      { error: `Clover error: ${res.status} ${res.statusText} — ${errText}` },
      { status: 500 }
    );
  }

  const data: CloverCheckoutResponse = await res.json();
  return NextResponse.json({ url: data.href });
}
