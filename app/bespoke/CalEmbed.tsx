"use client";

import { getCalApi } from "@calcom/embed-react";
import { useEffect } from "react";

const USERNAME = "feng-eric-ur5lqz";

export const EVENTS = [
  {
    slug: "custom-design-1-hour",
    label: "Custom Design",
    duration: "1 hour",
    description:
      "Bring your vision. We design a one-of-a-kind piece in sterling silver together — from sketch to finished object.",
  },
  {
    slug: "repair-30-min",
    label: "Repair",
    duration: "30 min",
    description:
      "A broken clasp, a bent prong, a lost stone. Bring it in and we will assess and restore it with care.",
  },
] as const;

export default function CalBookingCards() {
  useEffect(() => {
    (async () => {
      const cal = await getCalApi({ namespace: "bespoke" });
      cal("ui", {
        theme: "dark",
        styles: { branding: { brandColor: "#ffffff" } },
        hideEventTypeDetails: false,
      });
    })();
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-px" style={{ border: "1px solid #2C2C2E" }}>
      {EVENTS.map((event) => (
        <div
          key={event.slug}
          className="flex flex-col justify-between p-10 md:p-14"
          style={{ background: "#111111", borderRight: "1px solid #2C2C2E" }}
        >
          <div>
            <p
              className="font-montserrat uppercase tracking-[0.4em] mb-6"
              style={{ fontSize: "0.6rem", color: "#8E8E93" }}
            >
              {event.duration}
            </p>
            <h2
              className="font-cormorant font-light mb-6"
              style={{ fontSize: "clamp(1.8rem, 3vw, 2.5rem)", color: "#FFFFFF" }}
            >
              {event.label}
            </h2>
            <p
              className="font-montserrat leading-loose mb-12"
              style={{ fontSize: "0.75rem", color: "#8E8E93", letterSpacing: "0.05em" }}
            >
              {event.description}
            </p>
          </div>

          <button
            data-cal-namespace="bespoke"
            data-cal-link={`${USERNAME}/${event.slug}`}
            data-cal-config='{"layout":"month_view"}'
            className="font-montserrat uppercase tracking-[0.3em] px-8 py-4 border border-stone-700 text-stone-400 hover:text-white hover:border-white transition-colors cursor-pointer self-start"
            style={{ fontSize: "0.65rem" }}
          >
            Book Appointment
          </button>
        </div>
      ))}
    </div>
  );
}
