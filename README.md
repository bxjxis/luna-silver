# Luna Silver — Handcrafted Silver Accessories Store

A modern e-commerce storefront for handcrafted sterling silver jewelry, built with **Next.js 16**, **React 19**, **Tailwind CSS v4**, and **Stripe Checkout**.

## Features

- **Product catalog** — 15 handcrafted silver pieces across 4 categories (Necklaces, Bracelets, Earrings, Rings)
- **Category filtering** — filter the product grid live on the client
- **Shopping cart** — slide-in drawer with quantity controls and persistent state (localStorage)
- **Stripe Checkout** — secure hosted payment flow via Stripe
- **Success page** — confirmation page after payment
- **Responsive design** — mobile-first layout with Tailwind CSS

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | Next.js 16 (App Router) |
| UI | React 19 + Tailwind CSS v4 |
| Payments | Clover Hosted Checkout |
| Language | TypeScript |
| Font | Geist (via next/font) |

## Project Structure

```
app/
├── api/
│   └── checkout/route.ts   # Stripe checkout session API
├── components/
│   ├── CartDrawer.tsx       # Slide-in cart UI
│   ├── Header.tsx           # Sticky nav with cart badge
│   ├── ProductGrid.tsx      # Product grid with category filter
│   └── Providers.tsx        # Client-side context wrapper
├── context/
│   └── CartContext.tsx      # Global cart state (useReducer + localStorage)
├── data/
│   └── products.ts          # Product catalogue data
├── success/
│   └── page.tsx             # Post-payment success page
├── globals.css
├── layout.tsx
└── page.tsx                 # Homepage
public/
└── images/products/         # Product images (jewelry_1.jpg … jewelry_15.jpg)
```

## Getting Started

### 1. Install dependencies

```bash
npm install
```

### 2. Configure Clover

Create a `.env.local` file in the project root:

```env
# Clover Dashboard → Account & Setup → Ecommerce API Tokens
CLOVER_PRIVATE_KEY=your_private_key_here
CLOVER_MERCHANT_ID=your_merchant_id_here

# Sandbox for testing, production for live
CLOVER_API_BASE_URL=https://apisandbox.dev.clover.com

NEXT_PUBLIC_BASE_URL=http://localhost:3000
```

> Never commit `.env.local` — it is listed in `.gitignore`.
> Switch `CLOVER_API_BASE_URL` to `https://api.clover.com` when going live.

### 3. Run the development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Clover Test Cards

Use Clover's sandbox environment (`apisandbox.dev.clover.com`) during development. Clover provides test card numbers in their [sandbox documentation](https://docs.clover.com/dev/docs/test-card-numbers).

## Deployment

The easiest way to deploy is [Vercel](https://vercel.com). Add `CLOVER_PRIVATE_KEY`, `CLOVER_MERCHANT_ID`, `CLOVER_API_BASE_URL`, and `NEXT_PUBLIC_BASE_URL` as environment variables in the Vercel dashboard. Set `CLOVER_API_BASE_URL` to `https://api.clover.com` for production.

```bash
# Production build check
npm run build
```

## License

MIT
