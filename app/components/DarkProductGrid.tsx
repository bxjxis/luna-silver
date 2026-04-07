'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { products, CATEGORIES, type Product } from '../data/products';
import { useCart } from '../context/CartContext';

const formatPrice = (amount: number) =>
  new Intl.NumberFormat('en-CA', { style: 'currency', currency: 'CAD' }).format(amount);

type Category = typeof CATEGORIES[number];

export default function DarkProductGrid() {
  const [activeCategory, setActiveCategory] = useState<Category>('All');
  const { addItem } = useCart();

  const filtered =
    activeCategory === 'All'
      ? products
      : products.filter((p) => p.category === activeCategory);

  return (
    <div>
      {/* Category Filters */}
      <div className="flex flex-wrap gap-3 mb-14">
        {CATEGORIES.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            aria-pressed={activeCategory === cat}
            className={`font-montserrat px-5 py-1.5 text-[9px] tracking-[0.25em] uppercase transition-all duration-300 cursor-pointer ${
              activeCategory === cat
                ? 'bg-white text-black'
                : 'border border-stone-800 text-stone-500 hover:border-stone-500 hover:text-stone-300'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Product Grid — key resets animation when category changes */}
      <div key={activeCategory} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-stone-900">
        {filtered.map((product, i) => (
          <ProductCard key={product.id} product={product} index={i} onAdd={addItem} />
        ))}
      </div>

      <p className="font-montserrat text-stone-700 text-[9px] mt-10 tracking-[0.35em] uppercase">
        {filtered.length} of {products.length} pieces
      </p>
    </div>
  );
}

function ProductCard({
  product,
  index,
  onAdd,
}: {
  product: Product;
  index: number;
  onAdd: (p: Product) => void;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const [added, setAdded] = useState(false);

  const handleAdd = () => {
    onAdd(product);
    setAdded(true);
    setTimeout(() => setAdded(false), 1400);
  };

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(el);
        }
      },
      { threshold: 0.1 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className="group bg-black animate-fade-in-up"
      style={{
        animationDelay: `${(index % 3) * 80}ms`,
        opacity: visible ? undefined : 0,
        animation: visible ? undefined : 'none',
      }}
    >
      {/* Image */}
      <div className="relative overflow-hidden bg-stone-950" style={{ aspectRatio: '4/5' }}>
        <Image
          src={product.image}
          alt={product.name}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover opacity-85 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 ease-out"
        />
      </div>

      {/* Info */}
      <div className="px-5 py-5">
        <p className="font-montserrat text-stone-600 text-[9px] tracking-[0.3em] uppercase mb-1.5">
          {product.category}
        </p>
        <h3
          className="font-cormorant text-white leading-snug mb-4"
          style={{ fontSize: '1.4rem', fontWeight: 400 }}
        >
          {product.name}
        </h3>
        <div className="flex items-center justify-between">
          <span className="font-montserrat text-stone-300 text-sm tracking-wider">
            {formatPrice(product.price)}
          </span>
          <button
            onClick={handleAdd}
            aria-label={`Add ${product.name} to cart`}
            className={`font-montserrat text-[9px] tracking-[0.25em] uppercase border px-5 py-2 transition-all duration-300 cursor-pointer active:scale-95 ${
              added
                ? 'border-white/50 text-white/90'
                : 'border-white/20 text-white/60 hover:border-white/50 hover:text-white/90'
            }`}
          >
            {added ? '✓ Added' : 'Add to Cart'}
          </button>
        </div>
      </div>
    </div>
  );
}
