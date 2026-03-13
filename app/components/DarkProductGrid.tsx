'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { products, CATEGORIES } from '../data/products';
import { useCart } from '../context/CartContext';

export default function DarkProductGrid() {
  const [activeCategory, setActiveCategory] = useState<string>('All');
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
            className={`px-5 py-1.5 text-[10px] font-medium tracking-[0.2em] uppercase transition-all duration-200 cursor-pointer ${
              activeCategory === cat
                ? 'bg-white text-black'
                : 'border border-stone-700 text-stone-500 hover:border-stone-400 hover:text-white'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-stone-900">
        {filtered.map((product, i) => (
          <ProductCard key={product.id} product={product} index={i} onAdd={addItem} />
        ))}
      </div>

      <p className="text-stone-700 text-[10px] mt-10 tracking-[0.3em] uppercase">
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
  product: (typeof products)[0];
  index: number;
  onAdd: (p: (typeof products)[0]) => void;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

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
        <p className="text-stone-600 text-[9px] tracking-[0.3em] uppercase mb-1.5">
          {product.category}
        </p>
        <h3
          className="text-white leading-snug mb-4"
          style={{
            fontFamily: 'var(--font-cormorant)',
            fontSize: '1.4rem',
            fontWeight: 400,
          }}
        >
          {product.name}
        </h3>
        <div className="flex items-center justify-between">
          <span
            className="text-stone-300 text-sm tracking-wider"
            style={{ fontFamily: 'var(--font-montserrat)' }}
          >
            ${product.price}
          </span>
          <button
            onClick={() => onAdd(product)}
            className="text-[9px] font-medium tracking-[0.25em] uppercase border border-white/20 px-5 py-2 text-white/70 hover:bg-white hover:text-black hover:border-white transition-all duration-200 cursor-pointer active:scale-95"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}
