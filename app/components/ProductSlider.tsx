'use client';

import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Mousewheel } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/free-mode';
import Image from 'next/image';
import Link from 'next/link';
import { products } from '../data/products';
import { useCart } from '../context/CartContext';

const formatPrice = (amount: number) =>
  new Intl.NumberFormat('en-CA', { style: 'currency', currency: 'CAD' }).format(amount);

export default function ProductSlider() {
  const { addItem } = useCart();
  const [addedId, setAddedId] = useState<number | null>(null);

  const handleAdd = (product: typeof products[0]) => {
    addItem(product);
    setAddedId(product.id);
    setTimeout(() => setAddedId(null), 1400);
  };

  return (
    <Swiper
      modules={[FreeMode, Mousewheel]}
      slidesPerView="auto"
      freeMode={{ enabled: true, momentum: true }}
      mousewheel={{ forceToAxis: true }}
      spaceBetween={20}
      className="product-swiper !px-6 md:!px-16"
    >
      {products.map((product) => (
        <SwiperSlide key={product.id} style={{ width: '260px' }}>
          <div className="group border border-stone-800/70 hover:border-stone-600/80 transition-colors duration-500 overflow-hidden">
            {/* Image */}
            <div className="relative w-full overflow-hidden bg-stone-900" style={{ aspectRatio: '3/4' }}>
              <Image
                src={product.image}
                alt={product.name}
                fill
                sizes="260px"
                className="object-cover group-hover:scale-[1.04] transition-transform duration-700 ease-out opacity-90 group-hover:opacity-100"
              />
            </div>

            {/* Info */}
            <div className="p-5 bg-transparent">
              <p className="font-montserrat text-stone-600 text-[9px] tracking-[0.3em] uppercase mb-2">
                {product.category}
              </p>
              <h3
                className="font-cormorant text-white leading-tight mb-3"
                style={{ fontSize: '1.4rem', fontWeight: 400 }}
              >
                {product.name}
              </h3>
              <div className="flex items-center justify-between">
                <span className="font-montserrat text-stone-300 text-sm font-light tracking-wider">
                  {formatPrice(product.price)}
                </span>
                <button
                  onClick={() => handleAdd(product)}
                  aria-label={`Add ${product.name} to cart`}
                  className={`font-montserrat text-[9px] tracking-[0.25em] uppercase border px-4 py-2 transition-all duration-300 cursor-pointer ${
                    addedId === product.id
                      ? 'border-white/50 text-white/90'
                      : 'border-white/20 text-white/60 hover:border-white/50 hover:text-white/90'
                  }`}
                >
                  {addedId === product.id ? '✓' : 'Add to Cart'}
                </button>
              </div>
            </div>
          </div>
        </SwiperSlide>
      ))}

      {/* Final CTA slide */}
      <SwiperSlide style={{ width: '200px' }}>
        <Link
          href="/collection"
          className="flex h-full min-h-[360px] flex-col items-center justify-center border border-stone-800/70 hover:border-stone-600/80 transition-colors duration-500 px-8 text-center group"
        >
          <span
            className="font-cormorant text-white text-2xl mb-3 group-hover:italic transition-all duration-500"
            style={{ fontWeight: 300 }}
          >
            View All
          </span>
          <span className="font-montserrat text-stone-600 text-[9px] tracking-[0.3em] uppercase">
            {products.length} pieces →
          </span>
        </Link>
      </SwiperSlide>
    </Swiper>
  );
}
