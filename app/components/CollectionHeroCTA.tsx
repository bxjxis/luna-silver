"use client";

import Link from "next/link";

export default function CollectionHeroCTA() {
  return (
    <div className="flex flex-wrap gap-4">
      <a
        href="#products"
        className="font-montserrat text-[10px] tracking-[0.3em] uppercase px-8 py-3.5 transition-colors duration-300 cursor-pointer"
        style={{ background: "#FFFFFF", color: "#000000" }}
        onMouseEnter={e => { e.currentTarget.style.background = "#E5E5E5"; }}
        onMouseLeave={e => { e.currentTarget.style.background = "#FFFFFF"; }}
      >
        Browse All
      </a>
      <Link
        href="/bespoke"
        className="font-montserrat text-[10px] tracking-[0.3em] uppercase px-8 py-3.5 transition-colors duration-300 cursor-pointer"
        style={{ background: "transparent", color: "#FFFFFF", border: "1px solid rgba(255,255,255,0.4)" }}
        onMouseEnter={e => { e.currentTarget.style.borderColor = "#FFFFFF"; }}
        onMouseLeave={e => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.4)"; }}
      >
        Order Bespoke
      </Link>
    </div>
  );
}
