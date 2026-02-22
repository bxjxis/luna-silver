'use client';

import { useState } from 'react';
import Image from 'next/image';
import { products, CATEGORIES } from '../data/products';
import { useCart } from '../context/CartContext';

export default function ProductGrid() {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const { addItem } = useCart();

  const filtered =
    activeCategory === 'All'
      ? products
      : products.filter((p) => p.category === activeCategory);

  return (
    <div>
      {/* Category Filters */}
      <div className="flex flex-wrap gap-3 justify-center mb-10">
        {CATEGORIES.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-6 py-2 rounded-full text-sm font-medium tracking-wide transition-all duration-200 cursor-pointer ${
              activeCategory === cat
                ? 'bg-stone-800 text-white shadow-sm'
                : 'bg-white text-stone-600 border border-stone-300 hover:border-stone-500 hover:text-stone-800'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {filtered.map((product) => (
          <div
            key={product.id}
            className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 border border-stone-100"
          >
            <div className="relative aspect-square overflow-hidden bg-stone-50">
              <Image
                src={product.image}
                alt={product.name}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="p-5">
              <span className="text-xs font-medium text-stone-400 uppercase tracking-widest">
                {product.category}
              </span>
              <h3 className="mt-1 text-stone-800 font-semibold leading-snug">
                {product.name}
              </h3>
              <div className="mt-4 flex items-center justify-between">
                <span className="text-lg font-bold text-stone-800">
                  ${product.price}
                </span>
                <button
                  onClick={() => addItem(product)}
                  className="px-4 py-2 text-sm font-medium bg-stone-800 text-white rounded-full hover:bg-stone-700 active:scale-95 transition-all cursor-pointer"
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <p className="text-center text-stone-400 text-sm mt-10">
        Showing {filtered.length} of {products.length} pieces
      </p>
    </div>
  );
}
