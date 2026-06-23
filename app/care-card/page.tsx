import Header from "../components/Header";
import Link from "next/link";

export const metadata = {
  title: "Care Card | Soulfood",
  description: "How to care for your Soulfood sterling silver jewelry.",
};

export default function CareCardPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Header />

      <section className="flex flex-col items-center justify-center min-h-screen text-center px-6">
        <p
          className="font-montserrat uppercase tracking-[0.4em] mb-8"
          style={{ fontSize: "0.65rem", color: "#8E8E93" }}
        >
          Care Guide
        </p>
        <h1
          className="font-cormorant font-light mb-6"
          style={{ fontSize: "clamp(2.5rem, 6vw, 5rem)", color: "#FFFFFF" }}
        >
          Coming Soon
        </h1>
        <p
          className="font-montserrat mb-12 max-w-sm leading-loose"
          style={{ fontSize: "0.75rem", color: "#8E8E93", letterSpacing: "0.05em" }}
        >
          Our full care guide for S925 sterling silver is being crafted.
          Check back soon.
        </p>
        <Link
          href="/collection"
          className="font-montserrat uppercase tracking-[0.3em] border border-stone-700 px-8 py-3.5 text-stone-400 hover:text-white hover:border-stone-400 transition-colors"
          style={{ fontSize: "0.65rem" }}
        >
          Browse the Collection
        </Link>
      </section>
    </div>
  );
}
