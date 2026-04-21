import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Order Confirmed | Soulfood',
};

export default function SuccessPage() {
  return (
    <div className="min-h-screen bg-black flex items-center justify-center px-6">
      <div className="text-center max-w-md">

        {/* Checkmark */}
        <div className="mx-auto mb-8 flex h-20 w-20 items-center justify-center rounded-full border border-stone-700">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="white" className="w-9 h-9">
            <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
          </svg>
        </div>

        <p
          className="font-montserrat text-stone-500 uppercase mb-5"
          style={{ fontSize: '0.6rem', letterSpacing: '0.3em' }}
        >
          Order Confirmed
        </p>
        <h1 className="font-cormorant text-white font-light mb-5" style={{ fontSize: '2.8rem' }}>
          Thank you.
        </h1>
        <p className="font-montserrat text-stone-400 leading-relaxed mb-10" style={{ fontSize: '0.8rem' }}>
          Your handcrafted piece is being prepared with care.<br />
          A confirmation email is on its way to you.
        </p>

        <Link
          href="/"
          className="font-montserrat text-stone-500 hover:text-white transition-colors uppercase"
          style={{ fontSize: '0.6rem', letterSpacing: '0.25em' }}
        >
          ← Continue Shopping
        </Link>

      </div>
    </div>
  );
}
