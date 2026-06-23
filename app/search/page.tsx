import Header from "../components/Header";
import Image from "next/image";
import Link from "next/link";
import { products } from "../data/products";

export const metadata = {
  title: "Search | Soulfood",
};

const formatPrice = (amount: number) =>
  new Intl.NumberFormat("en-CA", { style: "currency", currency: "CAD" }).format(amount);

interface Props {
  searchParams: Promise<{ query?: string }>;
}

export default async function SearchPage({ searchParams }: Props) {
  const { query = "" } = await searchParams;
  const q = query.trim().toLowerCase();

  const results = q
    ? products.filter(
        (p) =>
          p.name.toLowerCase().includes(q) ||
          p.description.toLowerCase().includes(q) ||
          p.category.toLowerCase().includes(q)
      )
    : [];

  const featured = products.slice(0, 4);
  const hasResults = results.length > 0;

  return (
    <div className="min-h-screen text-white" style={{ background: "#111111" }}>
      <Header />

      <section className="px-6 md:px-16 pt-44 pb-24 max-w-7xl mx-auto">

        {/* Header row */}
        <div className="mb-16" style={{ borderBottom: "1px solid #2C2C2E", paddingBottom: "2rem" }}>
          <p
            className="font-montserrat uppercase tracking-[0.4em] mb-4"
            style={{ fontSize: "0.6rem", color: "#8E8E93" }}
          >
            {hasResults ? `${results.length} ${results.length === 1 ? "result" : "results"} for` : "No results for"}
          </p>
          <h1
            className="font-cormorant font-light"
            style={{ fontSize: "clamp(2rem, 5vw, 4rem)", color: "#FFFFFF" }}
          >
            &ldquo;{query}&rdquo;
          </h1>
        </div>

        {/* No results state */}
        {!hasResults && (
          <div className="mb-20">
            <p
              className="font-montserrat mb-10"
              style={{ fontSize: "0.78rem", color: "#8E8E93", letterSpacing: "0.05em", lineHeight: 2 }}
            >
              Sorry, we couldn&apos;t find any results for &ldquo;{query}&rdquo;.<br />
              Try a different search, or browse the full collection below.
            </p>
            <div className="flex gap-4 flex-wrap">
              <Link
                href="/collection"
                className="font-montserrat uppercase tracking-[0.3em] px-8 py-3.5 transition-colors"
                style={{ background: "#FFFFFF", color: "#000000", fontSize: "0.65rem" }}
              >
                Browse All Products
              </Link>
              <Link
                href="/"
                className="font-montserrat uppercase tracking-[0.3em] px-8 py-3.5 border border-stone-700 text-stone-400 hover:text-white hover:border-stone-400 transition-colors"
                style={{ fontSize: "0.65rem" }}
              >
                Go Back Home
              </Link>
            </div>
          </div>
        )}

        {/* Grid — results or featured */}
        <div>
          {!hasResults && (
            <p
              className="font-montserrat uppercase tracking-[0.4em] mb-10"
              style={{ fontSize: "0.6rem", color: "#8E8E93" }}
            >
              You may also like
            </p>
          )}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-12">
            {(hasResults ? results : featured).map((product) => (
              <Link key={product.id} href={`/collection?category=${product.category}`} className="group block">
                <div
                  className="relative overflow-hidden mb-0"
                  style={{ aspectRatio: "4/5", background: "#1C1C1E" }}
                >
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-cover opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
                  />
                </div>
                <div
                  className="px-4 py-4"
                  style={{ background: "#1C1C1E", borderTop: "1px solid #2C2C2E" }}
                >
                  <p
                    className="font-montserrat text-[9px] tracking-[0.35em] uppercase mb-2"
                    style={{ color: "#8E8E93" }}
                  >
                    {product.category}
                  </p>
                  <h3
                    className="font-cormorant leading-snug mb-1"
                    style={{ fontSize: "1.15rem", fontWeight: 400, color: "#FFFFFF" }}
                  >
                    {product.name}
                  </h3>
                  <span
                    className="font-montserrat text-xs tracking-wider"
                    style={{ color: "#A1A1A5" }}
                  >
                    {formatPrice(product.price)}
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>

      </section>
    </div>
  );
}
