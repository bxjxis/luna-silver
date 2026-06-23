import type { Metadata } from "next";
import Header from "../components/Header";
import DarkProductGrid from "../components/DarkProductGrid";
import CollectionHeroCTA from "../components/CollectionHeroCTA";

export const metadata: Metadata = {
  title: "Collection | Soulfood",
  description: "Browse the full Soulfood collection of handcrafted sterling silver jewelry.",
};

export default function CollectionPage() {
  return (
    <div className="min-h-screen text-white" style={{ background: "#111111" }}>
      <Header />

      {/* ── Hero / Category Banner ──────────────────────────────────────────── */}
      <section
        className="px-6 md:px-16 pt-44 pb-16"
        style={{ borderBottom: "1px solid #2C2C2E" }}
      >
        <div className="max-w-7xl mx-auto">
          <p
            className="font-montserrat text-[10px] tracking-[0.45em] uppercase mb-5"
            style={{ color: "#8E8E93" }}
          >
            Hand Made With Love · Since 2025
          </p>

          <h1
            className="font-cormorant leading-none mb-10"
            style={{
              fontSize: "clamp(3rem, 9vw, 7rem)",
              fontWeight: 300,
              color: "#FFFFFF",
            }}
          >
            The Collection
          </h1>

        </div>
      </section>

      {/* ── Product grid ───────────────────────────────────────────────────── */}
      <section id="products" className="px-6 md:px-16 py-16 max-w-7xl mx-auto">
        <DarkProductGrid />
      </section>
    </div>
  );
}
