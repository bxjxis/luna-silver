'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Mousewheel } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/free-mode';
import Image from 'next/image';
import Link from 'next/link';
import { products } from '../data/products';
import { useCart } from '../context/CartContext';

export default function ProductSlider() {
  const { addItem } = useCart();

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
          <div className="group border border-stone-800 hover:border-stone-600 transition-colors duration-300 overflow-hidden">
            {/* Image */}
            <div className="relative w-full overflow-hidden bg-stone-900" style={{ aspectRatio: '3/4' }}>
              <Image
                src={product.image}
                alt={product.name}
                fill
                sizes="260px"
                className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out opacity-90 group-hover:opacity-100"
              />
            </div>

            {/* Info */}
            <div className="p-5 bg-transparent">
              <p className="text-stone-600 text-[9px] tracking-[0.3em] uppercase mb-2">
                {product.category}
              </p>
              <h3
                className="text-white leading-tight mb-3"
                style={{ fontFamily: 'var(--font-cormorant)', fontSize: '1.35rem', fontWeight: 400 }}
              >
                {product.name}
              </h3>
              <div className="flex items-center justify-between">
                <span className="text-stone-400 text-sm font-light tracking-wider">
                  ${product.price}
                </span>
                <button
                  onClick={() => addItem(product)}
                  className="text-[9px] font-medium tracking-[0.25em] uppercase border border-white/25 px-4 py-2 text-white/80 hover:bg-white hover:text-black hover:border-white transition-all duration-200 cursor-pointer"
                >
                  Add
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
          className="flex h-full min-h-[360px] flex-col items-center justify-center border border-stone-800 hover:border-stone-500 transition-colors duration-300 px-8 text-center group"
        >
          <span
            className="text-white text-2xl mb-3 group-hover:italic transition-all duration-300"
            style={{ fontFamily: 'var(--font-cormorant)', fontWeight: 300 }}
          >
            View All
          </span>
          <span className="text-stone-600 text-[9px] tracking-[0.3em] uppercase">
            {products.length} pieces →
          </span>
        </Link>
      </SwiperSlide>
    </Swiper>
  );
}
