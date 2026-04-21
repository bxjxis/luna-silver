import type { Metadata } from 'next';
import CalEmbed from './CalEmbed';

export const metadata: Metadata = {
  title: 'Bespoke Atelier | Soulfood',
  description: 'Book a private consultation to design a one-of-a-kind piece, just for you.',
};

const CAL_LINK = process.env.NEXT_PUBLIC_CAL_LINK ?? 'soulfood/consultation';

export default function BespokePage() {
  return (
    <main className="min-h-screen bg-black text-white pt-40 pb-24">
      <div className="max-w-7xl mx-auto px-6 md:px-16">

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-16">
          <div>
            <p
              className="font-montserrat text-stone-500 uppercase mb-4"
              style={{ fontSize: '0.6rem', letterSpacing: '0.3em' }}
            >
              Private Consultations
            </p>
            <h1
              className="font-cormorant text-white font-light leading-none"
              style={{ fontSize: 'clamp(3rem, 8vw, 6rem)' }}
            >
              Bespoke Atelier
            </h1>
          </div>

          <div className="md:text-right font-montserrat text-stone-400" style={{ fontSize: '0.7rem', letterSpacing: '0.12em' }}>
            <p className="mb-1">30 min · Video or In-person</p>
            <p className="mb-1">No obligation · Complimentary</p>
          </div>
        </div>

        {/* Description */}
        <p className="font-cormorant text-stone-300 max-w-xl mb-16" style={{ fontSize: '1.15rem', lineHeight: '1.8' }}>
          Every piece begins with a conversation. Share your vision — an heirloom to pass down,
          a symbol of a moment, a form only you can imagine — and we will craft it in sterling silver, by hand.
        </p>

        {/* Divider */}
        <div className="border-t border-stone-800 mb-16" />

        {/* Cal embed */}
        <div style={{ minHeight: '700px' }}>
          <CalEmbed calLink={CAL_LINK} />
        </div>

      </div>
    </main>
  );
}
