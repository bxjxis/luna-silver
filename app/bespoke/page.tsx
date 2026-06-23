import type { Metadata } from "next";
import Header from "../components/Header";
import CalBookingCards from "./CalEmbed";

export const metadata: Metadata = {
  title: "Bespoke Atelier | Soulfood",
  description:
    "Book a private consultation to design a one-of-a-kind piece, or bring a piece in for repair.",
};

const DASH = "–";

export default function BespokePage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Header />

      <div className="max-w-7xl mx-auto px-6 md:px-16 pt-44 pb-24">

        {/* Page header */}
        <div className="mb-16">
          <p
            className="font-montserrat text-stone-500 uppercase mb-5"
            style={{ fontSize: "0.6rem", letterSpacing: "0.35em" }}
          >
            Private Consultations
          </p>
          <h1
            className="font-cormorant text-white font-light leading-none mb-10"
            style={{ fontSize: "clamp(3rem, 8vw, 6rem)" }}
          >
            Bespoke Atelier
          </h1>
          <p
            className="font-cormorant text-stone-400 max-w-xl"
            style={{ fontSize: "1.15rem", lineHeight: "1.9" }}
          >
            Every piece begins with a conversation. Share your vision {DASH} an
            heirloom to pass down, a symbol of a moment, a form only you can
            imagine {DASH} and we will craft it in sterling silver, by hand.
          </p>
        </div>

        {/* Booking cards */}
        <CalBookingCards />

      </div>
    </main>
  );
}
