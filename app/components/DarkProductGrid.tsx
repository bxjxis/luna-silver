"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { products, CATEGORIES, type Product } from "../data/products";
import { useCart } from "../context/CartContext";

const formatPrice = (amount: number) =>
  new Intl.NumberFormat("en-CA", { style: "currency", currency: "CAD" }).format(amount);

type Category = (typeof CATEGORIES)[number];

/* ── Design tokens ── */
const C = {
  bg:        "#111111",
  card:      "#1C1C1E",
  border:    "#2C2C2E",
  textPrimary:   "#FFFFFF",
  textMuted:     "#8E8E93",
};

export default function DarkProductGrid() {
  const [activeCategory, setActiveCategory] = useState<Category>("All");
  const { addItem } = useCart();

  const filtered =
    activeCategory === "All"
      ? products
      : products.filter((p) => p.category === activeCategory);

  return (
    <div>
      {/* ── Filter bar ── */}
      <div
        className="flex flex-wrap items-center gap-x-8 gap-y-3 mb-14 pb-6"
        style={{ borderBottom: `1px solid ${C.border}` }}
      >
        {CATEGORIES.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            aria-pressed={activeCategory === cat}
            className="font-montserrat text-[10px] tracking-[0.35em] uppercase transition-all duration-300 cursor-pointer pb-0.5"
            style={{
              color: activeCategory === cat ? C.textPrimary : C.textMuted,
              borderBottom: activeCategory === cat ? `1px solid ${C.textPrimary}` : "1px solid transparent",
            }}
          >
            {cat}
          </button>
        ))}
        <span
          className="font-montserrat text-[10px] tracking-[0.3em] uppercase ml-auto"
          style={{ color: C.textMuted }}
        >
          {filtered.length} {filtered.length === 1 ? "piece" : "pieces"}
        </span>
      </div>

      {/* ── Product grid ── */}
      <div
        key={activeCategory}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-14"
      >
        {filtered.map((product, i) => (
          <ProductCard
            key={product.id}
            product={product}
            index={i}
            onAdd={addItem}
          />
        ))}
      </div>
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
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); observer.unobserve(el); } },
      { threshold: 0.08 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className="group cursor-pointer"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(24px)",
        transition: `opacity 0.55s ease ${(index % 3) * 80}ms, transform 0.55s ease ${(index % 3) * 80}ms`,
        borderRadius: "4px",
        overflow: "hidden",
      }}
    >
      {/* Image wrapper */}
      <div
        className="relative overflow-hidden mb-0"
        style={{ aspectRatio: "4/5", background: C.card }}
      >
        <Image
          src={product.image}
          alt={product.name}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500 ease-out"
        />

        {/* Hover overlay — Add to Cart */}
        <div
          className="absolute inset-0 flex items-end justify-center pb-6 opacity-0 group-hover:opacity-100 transition-opacity duration-400"
          style={{ background: "linear-gradient(to top, rgba(0,0,0,0.65) 0%, transparent 55%)" }}
        >
          <button
            onClick={handleAdd}
            aria-label={`Add ${product.name} to cart`}
            className="font-montserrat text-[9px] tracking-[0.3em] uppercase px-8 py-3 transition-all duration-300 cursor-pointer"
            style={{
              border: `1px solid ${added ? "#fff" : "rgba(255,255,255,0.7)"}`,
              color: "#fff",
              background: added ? "rgba(255,255,255,0.12)" : "transparent",
            }}
          >
            {added ? "✓ Added" : "Add to Cart"}
          </button>
        </div>
      </div>

      {/* Metadata */}
      <div
        className="px-4 py-4"
        style={{ background: C.card, borderTop: `1px solid ${C.border}` }}
      >
        <p
          className="font-montserrat text-[9px] tracking-[0.35em] uppercase mb-2"
          style={{ color: C.textMuted }}
        >
          {product.category} · S925 Sterling Silver
        </p>
        <h3
          className="font-cormorant leading-snug mb-1.5"
          style={{ fontSize: "1.25rem", fontWeight: 400, color: C.textPrimary }}
        >
          {product.name}
        </h3>
        <p
          className="font-montserrat text-xs leading-relaxed mb-3"
          style={{ color: C.textMuted, fontWeight: 300 }}
        >
          {product.description}
        </p>
        <span
          className="font-montserrat text-xs tracking-wider"
          style={{ color: "#A1A1A5" }}
        >
          {formatPrice(product.price)}
        </span>
      </div>
    </div>
  );
}
