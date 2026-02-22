import Header from './components/Header';
import ProductGrid from './components/ProductGrid';

export default function Home() {
  return (
    <div className="min-h-screen bg-stone-50 text-stone-800">

      <Header />

      {/* ── Hero ───────────────────────────────────────────────── */}
      <section className="bg-stone-800 text-white py-28 px-6 text-center">
        <p className="text-stone-400 text-xs font-semibold tracking-[0.35em] uppercase mb-5">
          Handcrafted with Love
        </p>
        <h1 className="text-5xl md:text-6xl font-bold tracking-tight leading-tight mb-6">
          Pure Silver.<br />Pure Artistry.
        </h1>
        <p className="text-stone-300 text-lg max-w-xl mx-auto mb-10 leading-relaxed">
          Every piece tells a story — forged by hand from sterling silver,
          designed to be worn for a lifetime.
        </p>
        <a
          href="#shop"
          className="inline-block bg-white text-stone-800 font-semibold px-8 py-3 rounded-full hover:bg-stone-100 transition-colors"
        >
          Shop the Collection
        </a>
      </section>

      {/* ── Features Strip ─────────────────────────────────────── */}
      <div className="bg-white border-b border-stone-100">
        <div className="max-w-6xl mx-auto px-6 py-6 grid grid-cols-1 sm:grid-cols-3 gap-4 text-center text-sm text-stone-500">
          <div className="flex items-center justify-center gap-2">
            <span>✦</span><span>S925 Sterling Silver</span>
          </div>
          <div className="flex items-center justify-center gap-2">
            <span>✦</span><span>Handcrafted in Small Batches</span>
          </div>
          <div className="flex items-center justify-center gap-2">
            <span>✦</span><span>Free Shipping over $150</span>
          </div>
        </div>
      </div>

      {/* ── Product Collection ─────────────────────────────────── */}
      <section id="shop" className="max-w-6xl mx-auto px-6 py-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-stone-800">Our Collection</h2>
          <p className="text-stone-500 mt-2 text-sm">
            Explore handcrafted pieces made from S925 sterling silver
          </p>
        </div>
        <ProductGrid />
      </section>

      {/* ── About ──────────────────────────────────────────────── */}
      <section id="about" className="bg-white py-20 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-stone-400 text-xs font-semibold tracking-[0.3em] uppercase mb-4">Our Story</p>
          <h2 className="text-3xl font-bold text-stone-800 mb-6">
            Made by Hand. Made to Last.
          </h2>
          <p className="text-stone-500 leading-relaxed text-lg">
            Luna Silver was born from a deep love of traditional silversmithing.
            Each piece is handcrafted in our small studio using 925 sterling silver,
            blending ancient techniques with modern sensibility. We believe jewelry
            should be meaningful, lasting, and uniquely yours.
          </p>
        </div>
      </section>

      {/* ── Footer ─────────────────────────────────────────────── */}
      <footer id="contact" className="bg-stone-800 text-stone-400 py-14 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
          <div>
            <h3 className="text-white font-bold text-lg tracking-widest uppercase mb-3">
              Luna Silver
            </h3>
            <p className="text-sm leading-relaxed">
              Handcrafted silver accessories made with care and passion.
            </p>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-3">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">Home</a></li>
              <li><a href="#shop" className="hover:text-white transition-colors">Shop</a></li>
              <li><a href="#about" className="hover:text-white transition-colors">About</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-3">Contact</h4>
            <ul className="space-y-2 text-sm">
              <li>hello@lunasilver.com</li>
              <li>+1 (555) 123-4567</li>
              <li>Handmade with love ♡</li>
            </ul>
          </div>
        </div>
        <div className="max-w-6xl mx-auto mt-10 pt-6 border-t border-stone-700 text-center text-xs">
          © 2026 Luna Silver. All rights reserved.
        </div>
      </footer>

    </div>
  );
}
