"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Mousewheel } from "swiper/modules";
import "swiper/css";
import "swiper/css/free-mode";
import Image from "next/image";
import Link from "next/link";
import { products } from "../data/products";

export default function ProductSlider() {
  return (
    <Swiper
      modules={[FreeMode, Mousewheel]}
      slidesPerView="auto"
      freeMode={{ enabled: true, momentum: true }}
      mousewheel={{ forceToAxis: true }}
      spaceBetween={40}
      className="product-swiper !px-6 md:!px-16"
    >
      {products.map((product) => (
        <SwiperSlide key={product.id} style={{ width: "320px" }}>
          <Link href={`/collection`} className="block group">
            <div
              className="relative overflow-hidden bg-stone-900 transition-transform duration-500 ease-out group-hover:-translate-y-3 group-hover:shadow-[0_24px_48px_rgba(0,0,0,0.6)]"
              style={{ aspectRatio: "1/1" }}
            >
              <Image
                src={product.image}
                alt={product.name}
                fill
                sizes="320px"
                className="object-cover group-hover:scale-[1.04] transition-transform duration-700 ease-out opacity-90 group-hover:opacity-100"
              />
              {/* Name overlay at bottom */}
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent pt-12 pb-5 px-5">
                <h3
                  className="font-cormorant text-white leading-tight"
                  style={{ fontSize: "1.3rem", fontWeight: 400 }}
                >
                  {product.name}
                </h3>
              </div>
            </div>
          </Link>
        </SwiperSlide>
      ))}

      {/* Final CTA slide */}
      <SwiperSlide style={{ width: "200px" }}>
        <Link
          href="/collection"
          className="flex items-center justify-center border border-stone-800/70 hover:border-stone-600/80 transition-colors duration-500 px-8 text-center group"
          style={{ aspectRatio: "1/1" }}
        >
          <div>
            <span
              className="font-cormorant text-white text-2xl mb-3 block group-hover:italic transition-all duration-500"
              style={{ fontWeight: 300 }}
            >
              View All
            </span>
            <span className="font-montserrat text-stone-600 text-[9px] tracking-[0.3em] uppercase">
              {products.length} pieces →
            </span>
          </div>
        </Link>
      </SwiperSlide>
    </Swiper>
  );
}
