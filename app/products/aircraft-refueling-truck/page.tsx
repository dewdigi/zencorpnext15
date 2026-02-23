import Image from "next/image";
import type { ReactNode } from "react";

import Footer from "@/app/components/Footer";
import Navbar from "@/app/components/Navbar";
import AircraftRefuelerCtas from "@/app/components/products/AircraftRefuelerCtas";
import AircraftRefuelerLeadForm from "@/app/components/products/AircraftRefuelerLeadForm";

type ProductImage = {
  src: string;
  alt: string;
  orientation: "landscape" | "portrait";
};

type SectionImageKey = "delivery" | "export" | "trust" | "audience";
type CoreSectionImageKey = "reality" | "solution" | "technical" | "safety";

const keyBenefits = [
  "2500 L/min high-flow fueling",
  "Full aviation filtration and safety system",
  "Inspection available immediately",
  "Global export support",
];

const operatorChallenges = [
  "Lost revenue from grounded aircraft",
  "Risk of failing fueling contracts",
  "Delayed airport or mining operations",
  "No backup when existing refuelers fail",
];

const immediateSolution = ["Immediate inspection", "Immediate shipment", "Rapid operational deployment"];
const immediateDeliveryWins = [
  "Avoid contract penalties",
  "Maintain flight schedules",
  "Support operational growth",
  "Replace failed refuelers quickly",
  "Protect revenue streams",
];

const technicalSpecs = [
  { label: "Tank Capacity", value: "18,000 Liters" },
  { label: "Pumping System", value: "2500 L/min" },
  { label: "Filtration System", value: "Aviation-grade filter separator" },
  { label: "Engine Power", value: "336 HP turbocharged" },
  { label: "Drive Type", value: "6x4 left-hand drive" },
  { label: "Tank Material", value: "Aluminum alloy (5182)" },
  { label: "Transmission", value: "10 forward + 2 reverse" },
];

const safetySystems = [
  "Deadman control system",
  "Overfill prevention system",
  "Explosion-proof electrical junction box",
  "Oil and gas recovery system",
  "Static conductive grounding system",
  "Differential pressure monitoring",
  "High liquid level protection",
  "Subsea valve control",
  "Dual fire extinguishers",
];

const operationalAdvantages = [
  {
    title: "Faster Aircraft Turnaround",
    detail: "High-flow fueling system reduces service time per aircraft.",
  },
  {
    title: "Immediate Fleet Expansion",
    detail: "Deploy fueling capacity without waiting months for production.",
  },
  {
    title: "Contract Protection",
    detail: "Ensure fueling availability for commercial or industrial operations.",
  },
  {
    title: "Reliable Heavy-Duty Performance",
    detail: "Built for continuous high-demand operations.",
  },
];

const inspectItems = [
  "Filtration and pumping system",
  "Control and monitoring panel",
  "Tank and access system",
  "Safety systems",
  "Full operational configuration",
];

const deliveryTerms = ["EXW", "FOB Jebel Ali", "CIF destination port"];

const deliverySupport = [
  "Third-party inspection (SGS / BV)",
  "Export documentation assistance",
  "Global shipping coordination",
];

const trustPoints = [
  "Brand new equipment",
  "Aviation-grade construction",
  "Independent inspection available",
  "Export ready",
  "Full technical documentation provided",
];

const audiences = [
  "Airport fuel operations",
  "Aviation fuel distributors",
  "Ground handling companies",
  "Oil and gas aviation contractors",
  "Mining aviation operators",
];

const faq = [
  {
    q: "Is the unit available now?",
    a: "Yes. Ready stock in Dubai.",
  },
  {
    q: "Can we inspect before purchase?",
    a: "Yes. On-site inspection or live video inspection.",
  },
  {
    q: "Do you support international shipping?",
    a: "Yes. Multiple export delivery terms available.",
  },
  {
    q: "Can third-party inspection be arranged?",
    a: "Yes. SGS or Bureau Veritas.",
  },
  {
    q: "How fast can delivery happen?",
    a: "Typically within weeks after confirmation and shipping arrangements.",
  },
];

const productImages: ProductImage[] = [
  {
    src: "/images/products/aircraft-refueler-real/01-side-profile.jpg",
    alt: "Aircraft refueling truck side profile on neutral background",
    orientation: "landscape",
  },
  {
    src: "/images/products/aircraft-refueler-real/02-front-angle.jpg",
    alt: "Aircraft refueling truck front three-quarter view",
    orientation: "landscape",
  },
  {
    src: "/images/products/aircraft-refueler-real/03-badge-closeup.jpg",
    alt: "Closeup of aircraft refueling truck front badge and grille",
    orientation: "portrait",
  },
  {
    src: "/images/products/aircraft-refueler-real/04-rear-angle-studio.jpg",
    alt: "Aircraft refueling truck rear angle on studio background",
    orientation: "landscape",
  },
  {
    src: "/images/products/aircraft-refueler-real/05-yard-side-wide.jpg",
    alt: "Aircraft refueling truck side view in Dubai yard",
    orientation: "landscape",
  },
  {
    src: "/images/products/aircraft-refueler-real/06-service-compartment-vertical.jpg",
    alt: "Aircraft refueling truck service compartment and tank side",
    orientation: "portrait",
  },
  {
    src: "/images/products/aircraft-refueler-real/07-yard-rear-angle.jpg",
    alt: "Aircraft refueling truck rear angle in operational yard",
    orientation: "landscape",
  },
  {
    src: "/images/products/aircraft-refueler-real/08-compartment-front.jpg",
    alt: "Aircraft refueling truck equipment compartment front view",
    orientation: "portrait",
  },
  {
    src: "/images/products/aircraft-refueler-real/09-tank-rear-closeup.jpg",
    alt: "Aircraft refueling truck rear tank section close view",
    orientation: "landscape",
  },
];

const supportSectionImages: Record<SectionImageKey, { src: string; alt: string }> = {
  delivery: {
    src: "/images/products/aircraft-refueler-support/immediate-delivery.jpg",
    alt: "Aircraft refueling activity on airport apron showing immediate operational support",
  },
  export: {
    src: "/images/products/aircraft-refueler-support/export-support.jpg",
    alt: "Container logistics and export operations support imagery",
  },
  trust: {
    src: "/images/products/aircraft-refueler-support/trust-assurance.jpg",
    alt: "Close-up quality detail of aircraft refueling truck front badge and grille",
  },
  audience: {
    src: "/images/products/aircraft-refueler-real/07-yard-rear-angle.jpg",
    alt: "Aircraft refueling truck in yard for aviation ground operations",
  },
};

const coreSectionImages: Record<CoreSectionImageKey, { src: string; alt: string }> = {
  reality: {
    src: "/images/products/aircraft-refueler-real/05-yard-side-wide.jpg",
    alt: "Aircraft refueling truck ready for immediate field deployment",
  },
  solution: {
    src: "/images/products/aircraft-refueler-real/02-front-angle.jpg",
    alt: "Brand new aircraft refueling truck ready for immediate deployment",
  },
  technical: {
    src: "/images/products/aircraft-refueler-real/01-side-profile.jpg",
    alt: "Aircraft refueling truck side profile showing technical configuration",
  },
  safety: {
    src: "/images/products/aircraft-refueler-real/08-compartment-front.jpg",
    alt: "Aircraft refueling truck safety and control compartment",
  },
};

function FeatureCard({ title, value, detail }: { title: string; value?: string; detail?: string }) {
  return (
    <article className="group rounded-2xl border border-[#ccd5dd] bg-white p-5 shadow-[0_10px_30px_-24px_rgba(15,23,42,0.8)] transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_14px_36px_-24px_rgba(15,23,42,0.55)]">
      <p className="text-[11px] uppercase tracking-[0.14em] text-[#546171]">{title}</p>
      {value ? <p className="mt-2 text-lg font-semibold text-[#0f1b29]">{value}</p> : null}
      {detail ? <p className="mt-2 text-sm text-[#3c4d60]">{detail}</p> : null}
    </article>
  );
}

function InfoBand({
  title,
  children,
  tone = "neutral",
}: {
  title: string;
  children: ReactNode;
  tone?: "neutral" | "accent" | "urgent";
}) {
  const toneClasses =
    tone === "accent"
      ? "border-[#9fb8aa] bg-[#edf4f0]"
      : tone === "urgent"
        ? "border-[#f4c38a] bg-[#fff6ec]"
        : "border-[#d5dde5] bg-[#f7fafc]";

  return (
    <section className={`rounded-3xl border p-7 lg:p-10 ${toneClasses}`}>
      <h2 className="text-2xl font-semibold tracking-tight text-[#101f30]">{title}</h2>
      <div className="mt-4 text-[#304356]">{children}</div>
    </section>
  );
}

function HandList({ items, className }: { items: string[]; className?: string }) {
  return (
    <ul className={className}>
      {items.map((item) => (
        <li key={item} className="flex items-start gap-2">
          <span aria-hidden className="mt-0.5 text-[#1f5a48]">
            &#9758;
          </span>
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

export default function AircraftRefuelingTruckPage() {
  const heroImage = productImages[1];
  const mediaStrip = [productImages[0], productImages[3], productImages[6]];
  const inspectionGallery = [productImages[0], productImages[1], productImages[3], productImages[4], productImages[6], productImages[8]];

  return (
    <div className="bg-[#f3f6f8] text-[#0f1d2d]">
      <div className="relative overflow-hidden bg-[radial-gradient(ellipse_at_top_left,#e2ecf7_0%,#d3dde8_36%,#c4d0dc_58%,#b7c4d1_100%)]">
        <div className="pointer-events-none absolute inset-0 bg-[repeating-linear-gradient(140deg,rgba(15,27,41,0.03)_0px,rgba(15,27,41,0.03)_1px,transparent_1px,transparent_8px)]" />
        <Navbar />
        <section className="relative mx-auto grid max-w-7xl gap-8 px-6 pb-20 pt-36 lg:grid-cols-[45%_55%] lg:items-end lg:pt-40">
          <div>
            <p className="inline-flex items-center rounded-full border border-[#7b8ea3] bg-white/75 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-[#1f3a54]">
              Ready Stock - Dubai, UAE
            </p>
            <h1 className="mt-4 max-w-xl text-4xl font-semibold leading-tight tracking-tight text-[#0e1f31] sm:text-5xl lg:text-[3.3rem]">
              Immediate Aircraft Refueler Available. No 6-Month OEM Waiting.
            </h1>
            <p className="mt-5 max-w-lg text-base leading-relaxed text-[#29425a]">
              Brand new 18,000L aviation refueling truck ready for export from Dubai. Deploy within weeks, not months.
            </p>
            <HandList items={keyBenefits} className="mt-6 grid gap-2 text-sm text-[#32495f]" />
            <AircraftRefuelerCtas />
            <p className="mt-4 text-sm text-[#335067]">Availability: Ready Stock - Dubai, UAE</p>
          </div>

          <div className="grid gap-4">
            <div className="overflow-hidden rounded-3xl border border-[#b5c2cf] bg-white p-2 shadow-[0_28px_65px_-38px_rgba(15,23,42,0.75)]">
              <Image
                src={heroImage.src}
                alt={heroImage.alt}
                width={1600}
                height={1100}
                className="h-full w-full rounded-2xl object-cover"
                priority
              />
            </div>
            <div className="grid gap-3 sm:grid-cols-3">
              {mediaStrip.map((image) => (
                <div key={image.src} className="group overflow-hidden rounded-2xl border border-[#c5d0da] bg-white p-1.5">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    width={1200}
                    height={900}
                    className="h-28 w-full rounded-xl object-cover transition duration-300 group-hover:scale-[1.02] group-hover:opacity-90"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>

      <main className="mx-auto max-w-7xl space-y-12 px-6 py-14">
        <section className="grid gap-6 rounded-3xl border border-[#cfd9e2] bg-white p-3 lg:grid-cols-[1.05fr_0.95fr] lg:p-4">
          <InfoBand title="The Reality Operators Face">
            <p>
              Aircraft grounded due to fueling delays costs money. Expansion projects stall without fueling capacity. OEM
              production lead times can exceed 4-6 months.
            </p>
            <p className="mt-4 font-semibold text-[#142c43]">That means:</p>
            <HandList items={operatorChallenges} className="mt-2 grid gap-2" />
            <p className="mt-4">When operations cannot wait, procurement delays become operational risk.</p>
          </InfoBand>
          <div className="group overflow-hidden rounded-2xl border border-[#d1dae3] bg-white p-2">
            <Image
              src={coreSectionImages.reality.src}
              alt={coreSectionImages.reality.alt}
              width={1600}
              height={1000}
              className="h-[18rem] w-full rounded-xl object-cover transition duration-300 group-hover:scale-[1.015] group-hover:opacity-90 lg:h-full lg:min-h-[22rem]"
            />
          </div>
        </section>

        <section className="grid gap-6 rounded-3xl border border-[#cfd9e2] bg-white p-3 lg:grid-cols-[0.95fr_1.05fr] lg:p-4">
          <div className="group order-2 overflow-hidden rounded-2xl border border-[#d1dae3] bg-white p-2 lg:order-1">
            <Image
              src={coreSectionImages.solution.src}
              alt={coreSectionImages.solution.alt}
              width={1600}
              height={1000}
              className="h-[18rem] w-full rounded-xl object-cover transition duration-300 group-hover:scale-[1.015] group-hover:opacity-90 lg:h-full lg:min-h-[22rem]"
            />
          </div>
          <div className="order-1 lg:order-2">
            <InfoBand title="The Immediate Solution" tone="accent">
              <p>ZENCORP offers a brand new, export-ready aircraft refueling truck available now.</p>
              <p className="mt-3">No manufacturing delay. No production queue. No uncertainty.</p>
              <p className="mt-3 font-semibold text-[#142c43]">Just:</p>
              <HandList items={immediateSolution} className="mt-2 grid gap-2" />
              <p className="mt-4">Your aircraft fueling capacity can be operational in weeks.</p>
            </InfoBand>
          </div>
        </section>

        <section className="grid gap-6 rounded-3xl border border-[#cfd9e2] bg-white p-3 lg:grid-cols-[0.95fr_1.05fr] lg:p-4">
          <div className="group order-2 overflow-hidden rounded-2xl border border-[#d1dae3] bg-white p-2 lg:order-1">
            <Image
              src={coreSectionImages.technical.src}
              alt={coreSectionImages.technical.alt}
              width={1600}
              height={1000}
              className="h-[18rem] w-full rounded-xl object-cover transition duration-300 group-hover:scale-[1.015] group-hover:opacity-90 lg:h-full lg:min-h-[22rem]"
            />
          </div>
          <div className="order-1 lg:order-2">
            <InfoBand title="Technical Overview">
              <p>Designed for high-efficiency airport and airfield fueling operations.</p>
              <div className="mt-5 grid gap-3 sm:grid-cols-2">
                {technicalSpecs.map((spec) => (
                  <FeatureCard key={spec.label} title={spec.label} value={spec.value} />
                ))}
              </div>
              <p className="mt-5 text-sm text-[#304356]">
                Built on a heavy-duty chassis engineered for demanding aviation environments.
              </p>
            </InfoBand>
          </div>
        </section>

        <section className="grid gap-6 rounded-3xl border border-[#cfd9e2] bg-white p-3 lg:grid-cols-[0.95fr_1.05fr] lg:p-4">
          <div className="group order-2 overflow-hidden rounded-2xl border border-[#d1dae3] bg-white p-2 lg:order-1">
            <Image
              src={coreSectionImages.safety.src}
              alt={coreSectionImages.safety.alt}
              width={1200}
              height={1600}
              className="h-[18rem] w-full rounded-xl object-cover transition duration-300 group-hover:scale-[1.015] group-hover:opacity-90 lg:h-full lg:min-h-[22rem]"
            />
          </div>
          <div className="order-1 lg:order-2">
            <InfoBand title="Aviation Safety and Control Systems">
              <p>Engineered for operational safety and compliance.</p>
              <div className="mt-5 grid gap-3 sm:grid-cols-2">
                {safetySystems.map((item) => (
                  <FeatureCard key={item} title="Safety Feature" detail={item} />
                ))}
              </div>
              <p className="mt-5 text-[#304356]">Designed for aviation fueling reliability and safety assurance.</p>
            </InfoBand>
          </div>
        </section>

        <section className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="rounded-3xl border border-[#cfd9e2] bg-white p-7 lg:p-10">
            <h2 className="text-2xl font-semibold tracking-tight">Operational Advantages</h2>
            <div className="mt-5 grid gap-3 md:grid-cols-2">
              {operationalAdvantages.map((item) => (
                <FeatureCard key={item.title} title={item.title} detail={item.detail} />
              ))}
            </div>
          </div>
          <div className="overflow-hidden rounded-3xl border border-[#cfd9e2] bg-white p-2">
            <Image
              src={productImages[0].src}
              alt={productImages[0].alt}
              width={1400}
              height={900}
              className="h-full min-h-[280px] w-full rounded-2xl object-cover"
            />
          </div>
        </section>

        <section className="rounded-3xl border border-[#cfd9e2] bg-white p-4 lg:p-5">
          <div className="rounded-2xl border border-[#d6dfe7] bg-[linear-gradient(145deg,#f8fbff_0%,#eef3f8_100%)] p-6 lg:p-8">
            <div className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr] lg:items-end">
              <div>
                <p className="inline-flex rounded-full border border-[#b8c8d8] bg-white px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-[#2c4a67]">
                  Verified Inventory
                </p>
                <h2 className="mt-3 text-2xl font-semibold tracking-tight lg:text-3xl">
                  Real Equipment - Ready for Inspection
                </h2>
                <p className="mt-3 max-w-2xl text-[#304356]">
                  This is not conceptual inventory. The unit is physically available and can be inspected immediately.
                </p>
              </div>
              <div className="grid gap-2 sm:grid-cols-3 lg:grid-cols-1">
                <div className="rounded-xl border border-[#cfd9e2] bg-white px-3 py-2 text-sm font-medium text-[#20364d]">
                  On-site inspection
                </div>
                <div className="rounded-xl border border-[#cfd9e2] bg-white px-3 py-2 text-sm font-medium text-[#20364d]">
                  Live video review
                </div>
                <div className="rounded-xl border border-[#cfd9e2] bg-white px-3 py-2 text-sm font-medium text-[#20364d]">
                  Immediate verification
                </div>
              </div>
            </div>

            <p className="mt-6 font-semibold text-[#162e45]">You can inspect:</p>
            <HandList items={inspectItems} className="mt-2 grid gap-2 text-[#304356] md:grid-cols-2" />
            <p className="mt-4 text-[#304356]">Inspection available in Dubai or via live video.</p>
          </div>

          <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {inspectionGallery.map((image) => (
              <div key={image.src} className="group overflow-hidden rounded-2xl border border-[#d1dae3] bg-white p-2">
                <Image
                  src={image.src}
                  alt={image.alt}
                  width={1400}
                  height={950}
                  className="aspect-[4/3] w-full rounded-xl object-cover transition duration-300 group-hover:scale-[1.015] group-hover:opacity-90"
                />
              </div>
            ))}
          </div>
        </section>

        <section className="grid gap-6 rounded-3xl border border-[#cfd9e2] bg-white p-3 lg:grid-cols-[1.05fr_0.95fr] lg:p-4">
          <InfoBand title="Why Immediate Delivery Matters">
            <p>Waiting months for equipment can cost more than the equipment itself.</p>
            <p className="mt-3 font-semibold text-[#162e45]">Immediate deployment helps you:</p>
            <HandList items={immediateDeliveryWins} className="mt-2 grid gap-2 md:grid-cols-2" />
            <p className="mt-4 font-semibold text-[#162e45]">Time saved = revenue protected.</p>
          </InfoBand>
          <div className="group overflow-hidden rounded-2xl border border-[#d1dae3] bg-white p-2">
            <Image
              src={supportSectionImages.delivery.src}
              alt={supportSectionImages.delivery.alt}
              width={1600}
              height={1000}
              className="h-[18rem] w-full rounded-xl object-cover transition duration-300 group-hover:scale-[1.015] group-hover:opacity-90 lg:h-full lg:min-h-[22rem]"
            />
          </div>
        </section>

        <section className="grid gap-6 rounded-3xl border border-[#cfd9e2] bg-white p-3 lg:grid-cols-[0.95fr_1.05fr] lg:p-4">
          <div className="group order-2 overflow-hidden rounded-2xl border border-[#d1dae3] bg-white p-2 lg:order-1">
            <Image
              src={supportSectionImages.export.src}
              alt={supportSectionImages.export.alt}
              width={1600}
              height={1000}
              className="h-[18rem] w-full rounded-xl object-cover transition duration-300 group-hover:scale-[1.015] group-hover:opacity-90 lg:h-full lg:min-h-[22rem]"
            />
          </div>
          <div className="order-1 lg:order-2">
            <InfoBand title="Export and Delivery Support" tone="accent">
              <p>Located in Dubai, a global logistics hub.</p>
              <p className="mt-3 font-semibold text-[#162e45]">Delivery options available:</p>
              <HandList items={deliveryTerms} className="mt-2 grid gap-2 md:grid-cols-2" />
              <p className="mt-4 font-semibold text-[#162e45]">Additional support:</p>
              <HandList items={deliverySupport} className="mt-2 grid gap-2" />
            </InfoBand>
          </div>
        </section>

        <section className="grid gap-5 rounded-3xl border border-[#cfd9e2] bg-white p-3 lg:grid-cols-[1.2fr_0.8fr] lg:items-start lg:p-4">
          <InfoBand title="Trust and Assurance">
            <HandList items={trustPoints} className="grid gap-2.5" />
            <p className="mt-4 text-[#304356]">This unit is physically available, not future production.</p>
          </InfoBand>
          <div className="group w-full max-w-[440px] justify-self-end overflow-hidden rounded-2xl border border-[#d1dae3] bg-white p-2 shadow-[0_12px_30px_-24px_rgba(15,23,42,0.7)]">
            <Image
              src={supportSectionImages.trust.src}
              alt={supportSectionImages.trust.alt}
              width={1200}
              height={900}
              className="h-52 w-full rounded-xl object-cover object-center transition duration-300 group-hover:scale-[1.015] group-hover:opacity-90 lg:h-64"
            />
          </div>
        </section>

        <section className="grid gap-6 rounded-3xl border border-[#cfd9e2] bg-white p-3 lg:grid-cols-[0.95fr_1.05fr] lg:p-4">
          <div className="group order-2 overflow-hidden rounded-2xl border border-[#d1dae3] bg-white p-2 lg:order-1">
            <Image
              src={supportSectionImages.audience.src}
              alt={supportSectionImages.audience.alt}
              width={1600}
              height={1000}
              className="h-[18rem] w-full rounded-xl object-cover transition duration-300 group-hover:scale-[1.015] group-hover:opacity-90 lg:h-full lg:min-h-[22rem]"
            />
          </div>
          <div className="order-1 lg:order-2">
            <InfoBand title="Who This Is For">
              <p>This aircraft refueler is ideal for operators where fueling capacity affects uptime.</p>
              <HandList items={audiences} className="mt-3 grid gap-2 md:grid-cols-2" />
            </InfoBand>
          </div>
        </section>

        <InfoBand title="Limited Availability" tone="urgent">
          <p>
            This is a ready stock unit. Once reserved, delivery advantage is lost. Immediate deployment is only possible
            while inventory is available.
          </p>
        </InfoBand>

        <section id="request-offer" className="rounded-3xl border border-[#cfd9e2] bg-white p-7 lg:p-10">
          <div className="grid gap-6 lg:grid-cols-[1.45fr_0.55fr]">
            <div>
              <h2 className="text-2xl font-semibold tracking-tight">Request Technical Details</h2>
              <p className="mt-3 text-[#304356]">Get full technical specifications, pricing, and delivery terms.</p>
              <div className="mt-6">
                <AircraftRefuelerLeadForm />
              </div>
            </div>
            <div className="rounded-2xl border border-[#d2dce4] bg-[#f8fafc] p-6 lg:p-7">
              <h3 className="text-2xl font-semibold tracking-tight">Direct Contact</h3>
              <p className="mt-3 text-[#304356]">ZENCORP TRADING CO. LLC</p>
              <p className="text-[#304356]">Dubai, United Arab Emirates</p>
              <p className="mt-3 text-[#304356]">
                Inspection available upon request. Commercial terms available immediately.
              </p>
            </div>
          </div>
        </section>

        <section className="rounded-3xl border border-[#cfd9e2] bg-white p-7 lg:p-10">
          <h2 className="text-2xl font-semibold tracking-tight">Frequently Asked Questions</h2>
          <div className="mt-4 grid gap-3">
            {faq.map((item) => (
              <article key={item.q} className="rounded-2xl border border-[#d2dce4] bg-[#f8fafc] p-4">
                <h3 className="font-semibold">{item.q}</h3>
                <p className="mt-1.5 text-sm text-[#304356]">{item.a}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="rounded-3xl border border-[#123049] bg-[linear-gradient(140deg,#0f2639_0%,#153651_42%,#1f4d42_100%)] p-8 text-white lg:p-12">
          <h2 className="text-3xl font-semibold tracking-tight">Deploy Aircraft Refueling Capacity Without Waiting Months</h2>
          <p className="mt-3 max-w-2xl text-[#d3ebdf]">Secure immediate fueling capability today.</p>
          <AircraftRefuelerCtas />
        </section>
      </main>

      <Footer />
    </div>
  );
}



