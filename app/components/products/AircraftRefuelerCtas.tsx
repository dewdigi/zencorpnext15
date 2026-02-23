"use client";

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

type Props = {
  compact?: boolean;
};

export default function AircraftRefuelerCtas({ compact = false }: Props) {
  const track = (label: string) => {
    if (typeof window !== "undefined" && window.gtag) {
      window.gtag("event", "cta_click", {
        event_category: "aircraft_refueler_landing",
        event_label: label,
      });
    }
  };

  return (
    <div className={`flex flex-wrap gap-3 ${compact ? "" : "mt-6"}`}>
      <a
        href="#request-offer"
        onClick={() => track("request_offer")}
        className="rounded-xl bg-[#14532d] px-5 py-3 text-sm font-semibold text-white shadow-[0_14px_24px_-18px_rgba(20,83,45,0.9)] transition duration-300 hover:-translate-y-0.5 hover:bg-[#0f3f22] hover:shadow-[0_18px_32px_-16px_rgba(15,63,34,0.8)]"
      >
        Request Technical Specs & Commercial Offer
      </a>
    </div>
  );
}
