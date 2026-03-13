import Link from 'next/link';
import Image from 'next/image';
import Header from './components/Header';
import ProductSlider from './components/ProductSlider';
import ScrollReveal from './components/ScrollReveal';

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
          <p
            className="text-stone-600 text-[9px] tracking-[0.6em] uppercase mb-10"
            style={{ fontFamily: 'var(--font-montserrat)' }}
          >
            Handcrafted S925 Sterling Silver
          </p>

          <h1
            className="text-white leading-none mb-8"
            style={{
              fontFamily: 'var(--font-cormorant)',
              fontSize: 'clamp(5rem, 18vw, 16rem)',
              fontWeight: 300,
              letterSpacing: '0.05em',
            }}
          >
            Soulfood
          </h1>

          <p
            className="text-stone-500 text-[10px] tracking-[0.4em] uppercase mb-14"
            style={{ fontFamily: 'var(--font-montserrat)' }}
          >
            Pure Silver · Pure Artistry
          </p>

          <a
            href="#products"
            className="inline-block border border-white/20 text-white/70 text-[10px] font-medium tracking-[0.3em] uppercase px-10 py-4 hover:bg-white hover:text-black hover:border-white transition-all duration-300"
            style={{ fontFamily: 'var(--font-montserrat)' }}
          >
            Explore
          </a>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-30">
          <div className="w-px h-12 bg-white animate-pulse" />
        </div>
      </section>

      {/* ── Story / Parallax ──────────────────────────────────────────────── */}
      {/* Replace the backgroundImage URL below with your own brand photography */}
      <section
        className="parallax-bg relative h-screen flex items-center justify-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=1920&q=80')",
        }}
      >
        <div className="absolute inset-0 bg-black/70" />
        <div className="relative z-10 text-center px-6 max-w-3xl mx-auto">
          <ScrollReveal>
            <p
              className="text-stone-500 text-[9px] tracking-[0.5em] uppercase mb-8"
              style={{ fontFamily: 'var(--font-montserrat)' }}
            >
              Our Craft
            </p>
            <h2
              className="text-white leading-tight mb-8"
              style={{
                fontFamily: 'var(--font-cormorant)',
                fontSize: 'clamp(2.5rem, 7vw, 5rem)',
                fontWeight: 300,
              }}
            >
              Made by Hand.<br />Made to Last.
            </h2>
            <p
              className="text-stone-400 text-sm font-light leading-relaxed max-w-xl mx-auto"
              style={{ fontFamily: 'var(--font-montserrat)' }}
            >
              Each piece is forged in our studio using traditional silversmithing
              techniques. No mass production — only intention, patience, and 925 sterling silver.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* ── Our Products — horizontal Swiper ──────────────────────────────── */}
      <section id="products" className="py-24 bg-black">
        <ScrollReveal>
          <div className="px-6 md:px-16 mb-10 flex items-end justify-between max-w-none">
            <div>
              <p
                className="text-stone-600 text-[9px] tracking-[0.5em] uppercase mb-3"
                style={{ fontFamily: 'var(--font-montserrat)' }}
              >
                Sterling Silver
              </p>
              <h2
                className="text-white leading-none"
                style={{
                  fontFamily: 'var(--font-cormorant)',
                  fontSize: 'clamp(2.5rem, 6vw, 5rem)',
                  fontWeight: 300,
                }}
              >
                Our Products
              </h2>
            </div>
            <Link
              href="/collection"
              className="hidden md:block text-[9px] text-stone-500 tracking-[0.3em] uppercase hover:text-white transition-colors pb-2"
              style={{ fontFamily: 'var(--font-montserrat)' }}
            >
              View all →
            </Link>
          </div>
        </ScrollReveal>

        {/* Swiper slider — next card partially visible signals scrollability */}
        <div className="overflow-hidden">
          <ProductSlider />
        </div>
      </section>

      {/* ── About ─────────────────────────────────────────────────────────── */}
      <section
        id="about"
        className="relative h-screen bg-stone-950 flex items-center justify-center px-6"
      >
        <div className="text-center max-w-2xl mx-auto">
          <ScrollReveal>
            <p
              className="text-stone-700 text-[9px] tracking-[0.5em] uppercase mb-10"
              style={{ fontFamily: 'var(--font-montserrat)' }}
            >
              Our Story
            </p>
            <blockquote
              className="text-white leading-snug mb-10"
              style={{
                fontFamily: 'var(--font-cormorant)',
                fontSize: 'clamp(1.8rem, 5vw, 3.5rem)',
                fontWeight: 300,
                fontStyle: 'italic',
              }}
            >
              &ldquo;We believe jewelry should be meaningful, lasting, and uniquely yours.&rdquo;
            </blockquote>
          </ScrollReveal>
          <ScrollReveal delay={200}>
            <p
              className="text-stone-500 text-sm font-light leading-relaxed"
              style={{ fontFamily: 'var(--font-montserrat)' }}
            >
              Soulfood was born from a deep love of traditional silversmithing.
              Founded in our small Canadian studio, we blend ancient techniques
              with modern sensibility — creating pieces that carry history and soul.
              Every item is handmade in small batches, never mass produced.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* ── Footer ────────────────────────────────────────────────────────── */}
      <footer
        id="contact"
        className="bg-black border-t border-stone-900 py-16 px-6 md:px-16"
      >
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
          <div>
            <h3
              className="text-white mb-4"
              style={{
                fontFamily: 'var(--font-cormorant)',
                fontSize: '1.5rem',
                fontWeight: 400,
              }}
            >
              Soulfood
            </h3>
            <p className="text-stone-600 text-xs font-light leading-relaxed tracking-wide">
              Handcrafted silver accessories made with care and passion.
            </p>
          </div>
          <div>
            <h4 className="text-stone-500 text-[9px] font-medium tracking-[0.3em] uppercase mb-5">
              Navigate
            </h4>
            <ul className="space-y-3 text-sm text-stone-600">
              <li><a href="#" className="hover:text-white transition-colors">Home</a></li>
              <li><Link href="/collection" className="hover:text-white transition-colors">Collection</Link></li>
              <li><a href="#about" className="hover:text-white transition-colors">About</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-stone-500 text-[9px] font-medium tracking-[0.3em] uppercase mb-5">
              Contact
            </h4>
            <ul className="space-y-3 text-sm text-stone-600">
              <li>hello@soulfood.ca</li>
              <li>+1 (555) 123-4567</li>
              <li>Handmade with love ♡</li>
            </ul>
          </div>
        </div>
        <div className="max-w-7xl mx-auto mt-14 pt-6 border-t border-stone-900 text-center text-[10px] text-stone-700 tracking-[0.3em] uppercase">
          © 2026 Soulfood. All rights reserved.
        </div>
      </footer>

    </div>
  );
}
