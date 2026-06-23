import Header from "../components/Header";

export const metadata = {
  title: "Contact | Soulfood",
  description: "Visit us, book an appointment, or become a Soulfood reseller.",
};

const DASH = "–";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      <Header />

      <section className="pt-40 pb-24 px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">

          {/* Left — Book an Appointment */}
          <div className="relative w-full" style={{ aspectRatio: "1/1", background: "#141414" }}>
            <div className="absolute inset-0 flex items-center justify-center">
              <p
                className="font-montserrat uppercase tracking-[0.3em] text-white"
                style={{ fontSize: "0.7rem" }}
              >
                Book an Appointment
              </p>
            </div>
          </div>

          {/* Middle — Become a Reseller */}
          <div className="relative w-full" style={{ aspectRatio: "1/1", background: "#1A1A1A" }}>
            <div className="absolute inset-0 flex items-center justify-center">
              <p
                className="font-montserrat uppercase tracking-[0.3em] text-white"
                style={{ fontSize: "0.7rem" }}
              >
                Become a Reseller
              </p>
            </div>
          </div>

          {/* Right — Contact info, no background, vertically centered */}
          <div className="flex flex-col justify-center px-4" style={{ aspectRatio: "1/1" }}>
            <p
              className="font-montserrat uppercase tracking-[0.4em] mb-10"
              style={{ fontSize: "0.65rem", color: "#8E8E93" }}
            >
              Find Us
            </p>

            <div className="space-y-8">
              <p
                className="font-cormorant text-white leading-relaxed"
                style={{ fontSize: "1.25rem", fontWeight: 300 }}
              >
                200{DASH}8600 Cambie Rd.<br />
                Richmond, BC V6X 4J9<br />
                Canada
              </p>

              <p
                className="font-montserrat leading-loose"
                style={{ fontSize: "0.82rem", color: "#8E8E93", letterSpacing: "0.04em" }}
              >
                <a href="mailto:info@soulfood.ca" className="hover:text-white transition-colors">
                  info@soulfood.ca
                </a>
                <br />
                <a href="tel:+16048344388" className="hover:text-white transition-colors">
                  +1 (604) 834-4388
                </a>
              </p>

              <p
                className="font-montserrat leading-loose"
                style={{ fontSize: "0.78rem", color: "#8E8E93", letterSpacing: "0.06em" }}
              >
                Monday {DASH} Thursday&nbsp;&nbsp;13{DASH}19h<br />
                Saturday&nbsp;&nbsp;15{DASH}19h<br />
                <span style={{ color: "#555" }}>By appointment only</span>
              </p>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}
