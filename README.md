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
| Payments | Stripe Checkout (hosted) |
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

### 2. Configure Stripe

Create a `.env.local` file in the project root:

```env
# Get your keys at https://dashboard.stripe.com/apikeys
STRIPE_SECRET_KEY=sk_test_YOUR_KEY_HERE
NEXT_PUBLIC_BASE_URL=http://localhost:3000
```

> Use test keys (`sk_test_...`) during development. Never commit `.env.local` — it is listed in `.gitignore`.

### 3. Run the development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Stripe Test Cards

Use these card numbers on the Stripe Checkout page during testing:

| Card | Number |
|---|---|
| Successful payment | `4242 4242 4242 4242` |
| Payment declined | `4000 0000 0000 0002` |

Use any future expiry date and any 3-digit CVC.

## Deployment

The easiest way to deploy is [Vercel](https://vercel.com). Add your `STRIPE_SECRET_KEY` and `NEXT_PUBLIC_BASE_URL` as environment variables in the Vercel dashboard.

```bash
# Production build check
npm run build
```

## License

MIT
