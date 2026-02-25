'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Mousewheel } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/free-mode';
import Image from 'next/image';
import { products } from '../data/products';
import { useCart } from '../context/CartContext';

export default function HeroSlider() {
  const { addItem } = useCart();

  return (
    <div className="absolute bottom-0 left-0 right-0 pb-10 pt-16 bg-gradient-to-t from-black/80 to-transparent pointer-events-none">
      <p className="text-stone-400 text-[10px] font-medium tracking-[0.25em] uppercase px-6 mb-3 pointer-events-none">
        Featured Pieces
      </p>
      <Swiper
        modules={[FreeMode, Mousewheel]}
        slidesPerView="auto"
        freeMode={{ enabled: true, momentum: true }}
        mousewheel={{ forceToAxis: true }}
        spaceBetween={12}
        className="hero-swiper !px-6 pointer-events-auto"
      >
        {products.map((product) => (
          <SwiperSlide key={product.id} style={{ width: '150px' }}>
            <button
              onClick={() => addItem(product)}
              className="group w-full text-left rounded-xl overflow-hidden border border-white/10 bg-white/8 backdrop-blur-md hover:border-white/30 hover:bg-white/15 transition-all duration-300 cursor-pointer"
            >
              <div className="relative h-36 w-full overflow-hidden">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  sizes="150px"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-2.5">
                <p className="text-white text-[11px] font-medium leading-tight line-clamp-2">
                  {product.name}
                </p>
                <p className="text-stone-400 text-[11px] mt-1 font-light">
                  ${product.price}
                </p>
              </div>
            </button>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
