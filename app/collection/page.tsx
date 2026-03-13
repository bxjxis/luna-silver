import type { Metadata } from 'next';
import Header from '../components/Header';
import DarkProductGrid from '../components/DarkProductGrid';

export const metadata: Metadata = {
  title: 'Collection | Soulfood',
  description: 'Browse the full Soulfood collection of handcrafted sterling silver jewelry.',
};

export default function CollectionPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Header />

      {/* Page header */}
      <div className="pt-40 pb-10 px-6 md:px-16 max-w-7xl mx-auto">
        <p
          className="text-stone-600 text-[10px] tracking-[0.5em] uppercase mb-4"
          style={{ fontFamily: 'var(--font-montserrat)' }}
        >
          Handcrafted S925 Sterling Silver
        </p>
        <h1
          className="text-white leading-none mb-2"
          style={{
            fontFamily: 'var(--font-cormorant)',
            fontSize: 'clamp(3.5rem, 10vw, 8rem)',
            fontWeight: 300,
          }}
        >
          Collection
        </h1>
        <div className="mt-6 h-px bg-stone-800 w-full" />
      </div>

      {/* Product grid */}
      <div className="px-6 md:px-16 pb-32 max-w-7xl mx-auto">
        <DarkProductGrid />
      </div>
    </div>
  );
}
