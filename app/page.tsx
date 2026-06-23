import Link from 'next/link';
import Image from 'next/image';
import Header from './components/Header';
import ProductSlider from './components/ProductSlider';
import ScrollReveal from './components/ScrollReveal';
import { products } from './data/products';

export default function Home() {
  return (
    <div className="bg-black text-white overflow-x-hidden">

      <Header />

      {/* ── Hero — purely immersive ────────────────────────────────────────── */}
      <section className="relative h-screen flex flex-col items-center justify-center overflow-hidden">

        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-stone-950 via-black to-stone-950" />

        {/* Subtle noise overlay */}
        <div
          className="absolute inset-0 opacity-15 pointer-events-none"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
            backgroundSize: '200px 200px',
          }}
        />

        {/* Content */}
        <div className="relative z-10 text-center px-6 select-none">
          <p className="font-montserrat text-stone-600 text-xs tracking-[0.5em] uppercase mb-10">
            Hand Made With Love · Since 2025
          </p>

          <div className="mb-10 flex justify-center">
            <Image
              src="/logo-wordmark.png"
              alt="Soulfood"
              width={700}
              height={261}
              className="w-full max-w-[min(700px,85vw)] object-contain"
              priority
            />
          </div>

          <p className="font-montserrat text-stone-500 text-sm tracking-[0.15em] normal-case mb-14 max-w-lg mx-auto leading-loose">
            &ldquo;Man shall not live by bread alone, but by every word<br />
            that comes from the mouth of God.&rdquo;<br />
            <span className="text-stone-600 tracking-[0.12em]">— Matthew 4:4</span>
          </p>

          <a
            href="#products"
            className="font-montserrat inline-block border border-white/25 text-white/60 text-[9px] tracking-[0.35em] uppercase px-10 py-4 hover:border-white/60 hover:text-white/90 transition-all duration-500"
          >
            Find Your Soulfood
          </a>
        </div>

        {/* Scroll indicator */}
        <div aria-hidden="true" className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-30">
          <div className="w-px h-12 bg-white animate-pulse" />
        </div>
      </section>

      {/* ── About Our Name ────────────────────────────────────────────────── */}
      <section className="relative bg-stone-950 min-h-screen flex flex-col justify-start px-6 md:px-16 pt-32 pb-24">
        <ScrollReveal>
          {/* Label — far left */}
          <h2 className="font-montserrat text-stone-300 tracking-[0.3em] uppercase mb-40"
            style={{ fontSize: 'clamp(1rem, 2vw, 1.25rem)', fontWeight: 400 }}
          >
            About Our Name
          </h2>

          {/* Centred content */}
          <div className="max-w-2xl mx-auto text-center">
            <p className="font-montserrat text-stone-500 text-sm tracking-[0.15em] normal-case leading-loose mb-16">
              In faith, &ldquo;food&rdquo; has never referred only to the needs of<br />
              the body, but also to the sustenance of the soul.
            </p>

            <p className="font-montserrat text-stone-500 text-sm tracking-[0.15em] normal-case leading-loose mb-16">
              &ldquo;Man shall not live by bread alone, but by every word<br />
              that comes from the mouth of God.&rdquo;<br />
              <span className="text-stone-600 tracking-[0.12em]">— Matthew 4:4</span>
            </p>

            <p
              className="font-cormorant text-white font-light leading-tight mb-20"
              style={{ fontSize: 'clamp(1.8rem, 4vw, 3rem)' }}
            >
              To live by his word — this is Soulfood.
            </p>

            <a
              href="/#about"
              className="font-montserrat inline-block border border-white/25 text-white/60 text-[9px] tracking-[0.35em] uppercase px-10 py-4 hover:border-white/60 hover:text-white/90 transition-all duration-500"
            >
              Learn More About Soulfood
            </a>
          </div>
        </ScrollReveal>
      </section>

      {/* ── Our Products — horizontal Swiper ──────────────────────────────── */}
      <section id="products" className="py-24 bg-black">
        <ScrollReveal>
          <div className="px-6 md:px-16 mb-10 flex items-end justify-between max-w-none">
            <h2
              className="font-montserrat text-stone-300 tracking-[0.3em] uppercase"
              style={{ fontSize: 'clamp(1rem, 2vw, 1.25rem)', fontWeight: 400 }}
            >
              Find Your Soulfood
            </h2>
            <Link
              href="/collection"
              className="font-montserrat hidden md:block text-[9px] text-stone-500 tracking-[0.3em] uppercase hover:text-white transition-colors pb-2"
            >
              View all →
            </Link>
          </div>
        </ScrollReveal>

        {/* Swiper slider — next card partially visible signals scrollability */}
        <ProductSlider />

        {/* Mobile "View all" — desktop shows it in the header above */}
        <div className="md:hidden px-6 mt-8">
          <Link
            href="/collection"
            className="font-montserrat text-[9px] text-stone-500 tracking-[0.3em] uppercase hover:text-white transition-colors"
          >
            View all {products.length} pieces →
          </Link>
        </div>
      </section>

      {/* ── Customize Your Soulfood ───────────────────────────────────────── */}
      <section
        id="about"
        className="relative bg-black min-h-screen flex flex-col justify-center px-6 md:px-16 py-24"
      >
        <ScrollReveal>
          <h2 className="font-montserrat text-stone-300 tracking-[0.3em] uppercase mb-16"
            style={{ fontSize: 'clamp(1rem, 2vw, 1.25rem)', fontWeight: 400 }}
          >
            Customize Your Soulfood
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">

            {/* Left — placeholder image */}
            <div
              className="w-full bg-stone-900 flex items-center justify-center text-stone-700 font-montserrat text-[9px] tracking-[0.3em] uppercase"
              style={{ aspectRatio: '4/5' }}
            >
              Photo Coming Soon
            </div>

            {/* Right — copy */}
            <div>
              <p className="font-montserrat text-stone-500 text-sm tracking-[0.15em] leading-loose mb-12">
                Every piece of Soulfood jewellery begins with you. Whether you want to
                put your own touch on an existing design or build something entirely new,
                we make it possible.
              </p>

              <div className="space-y-10">
                <div>
                  <p className="font-montserrat text-white text-[10px] tracking-[0.35em] uppercase mb-3">
                    Half-Customize
                  </p>
                  <p className="font-montserrat text-stone-500 text-sm tracking-[0.1em] leading-loose">
                    Choose your chain, pendant, stone, and finish from our curated parts.
                    Mix and match to assemble a piece that is uniquely yours — no design
                    experience needed.
                  </p>
                </div>

                <div>
                  <p className="font-montserrat text-white text-[10px] tracking-[0.35em] uppercase mb-3">
                    Fully Bespoke
                  </p>
                  <p className="font-montserrat text-stone-500 text-sm tracking-[0.1em] leading-loose">
                    Bring us a sketch, a feeling, or just an idea. We work with you
                    from concept to finished piece — entirely handmade in sterling silver,
                    built around your story.
                  </p>
                </div>
              </div>

              <Link
                href="/bespoke"
                className="font-montserrat inline-block border border-white/25 text-white/60 text-[9px] tracking-[0.35em] uppercase px-10 py-4 hover:border-white/60 hover:text-white/90 transition-all duration-500 mt-14"
              >
                Start Your Custom Piece
              </Link>
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* ── Footer ────────────────────────────────────────────────────────── */}
      <footer
        id="contact"
        className="bg-black border-t border-stone-900 pt-16 pb-10 px-6 md:px-16"
      >
        <div className="max-w-7xl mx-auto">

          <div className="flex flex-col md:flex-row gap-16">

            {/* Left — Logo + socials */}
            <div className="flex flex-col items-center gap-5 shrink-0">
              <Image
                src="/logo-wordmark.png"
                alt="Soulfood"
                width={700}
                height={261}
                className="h-[72px] w-auto object-contain object-left block"
              />
              <div className="flex gap-5 items-center">
                <a href="#" aria-label="Instagram" className="text-stone-600 hover:text-white transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none"/>
                  </svg>
                </a>
                <a href="#" aria-label="Facebook" className="text-stone-600 hover:text-white transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
                  </svg>
                </a>
                <a href="#" aria-label="Xiaohongshu" className="text-stone-600 hover:text-white transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-7 h-7" fill="currentColor">
                    <rect x="1" y="1" width="22" height="22" rx="5" ry="5"/>
                    <text x="12" y="10.5" textAnchor="middle" fontSize="6" fontWeight="bold" fontFamily="Arial,sans-serif" fill="black" letterSpacing="0.5">RED</text>
                    <text x="12" y="17.5" textAnchor="middle" fontSize="5.5" fontWeight="bold" fontFamily="Arial,sans-serif" fill="black">note</text>
                  </svg>
                </a>
              </div>
            </div>

            {/* Right — Nav columns */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-10 flex-1">
            <div>
              <h4 className="font-montserrat text-stone-300 text-xs tracking-[0.3em] uppercase border-b border-stone-800 pb-3 mb-5">Customer Care</h4>
              <ul className="space-y-3 font-montserrat text-sm text-stone-600">
                {['Care Card', 'Size Guide', 'Shipping', 'FAQ'].map(item => (
                  <li key={item}><a href="#" className="hover:text-white transition-colors">{item}</a></li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="font-montserrat text-stone-300 text-xs tracking-[0.3em] uppercase border-b border-stone-800 pb-3 mb-5">Policies</h4>
              <ul className="space-y-3 font-montserrat text-sm text-stone-600">
                {['Exchange & Repair', 'Identity Card & Authenticity', 'Legal & Privacy'].map(item => (
                  <li key={item}><a href="#" className="hover:text-white transition-colors">{item}</a></li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="font-montserrat text-stone-300 text-xs tracking-[0.3em] uppercase border-b border-stone-800 pb-3 mb-5">Contact</h4>
              <ul className="space-y-3 font-montserrat text-sm text-stone-600">
                <li><a href="mailto:info@soulfood.ca" className="hover:text-white transition-colors">info@soulfood.ca</a></li>
                <li><a href="tel:+16048344388" className="hover:text-white transition-colors">+1 (604) 834-4388</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-montserrat text-stone-300 text-xs tracking-[0.3em] uppercase border-b border-stone-800 pb-3 mb-5">Location</h4>
              <address className="not-italic font-montserrat text-sm text-stone-600 leading-relaxed space-y-1">
                <p>200-8600 Cambie Rd.</p>
                <p>Richmond, BC V6X 4J9</p>
                <p>Canada</p>
              </address>
            </div>{/* end Location */}
          </div>{/* end right grid */}
          </div>{/* end flex row */}

        </div>{/* end max-w-7xl */}

        <div className="max-w-7xl mx-auto mt-14 pt-6 border-t border-stone-900 text-center text-[10px] text-stone-700 tracking-[0.3em] uppercase">
          © 2026 Soulfood. All rights reserved.
        </div>
      </footer>

    </div>
  );
}
