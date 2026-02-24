import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FiMail, FiMapPin, FiPhoneCall } from "react-icons/fi";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import GetInTuch from "../components/getInTuch";

const page = () => {
  return (
    <div className="bg-[#f6f8f6]">
      <Navbar />

      <section
        className="relative overflow-hidden bg-cover bg-center pt-36 pb-20"
        style={{ backgroundImage: "url('/images/about-1.jpg')" }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-[#03140a]/85 via-[#0e2b1a]/75 to-[#165029]/70" />
        <div className="absolute -top-32 -left-24 h-72 w-72 rounded-full bg-white/10 blur-3xl" />
        <div className="absolute -bottom-24 right-0 h-72 w-72 rounded-full bg-orange-400/20 blur-3xl" />

        <div className="container relative mx-auto px-6 lg:px-12">
          <div className="max-w-3xl">
            <p className="mb-4 inline-flex rounded-full border border-white/30 px-4 py-1 text-xs tracking-[0.18em] text-white/90">
              ZENCORP TRADING CO. LLC
            </p>
            <h1 className="text-4xl font-semibold leading-tight text-white sm:text-5xl">
              Contact Our Dubai Team
            </h1>
            <p className="mt-5 max-w-2xl text-sm leading-7 text-white/85 sm:text-base">
              Reach us directly for inquiries, partnerships, and product information.
              We respond quickly with the right team for your request.
            </p>
          </div>
        </div>
      </section>

      <section className="container relative z-10 mx-auto -mt-10 px-6 pb-14 lg:px-12">
        <div className="grid gap-4 md:grid-cols-3">
          <div className="rounded-2xl border border-[#d7e1da] bg-white p-6 shadow-[0_14px_35px_-26px_rgba(12,26,18,0.7)]">
            <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-full bg-[#165029]/10 text-[#165029]">
              <FiPhoneCall className="text-lg" />
            </div>
            <p className="text-xs uppercase tracking-[0.15em] text-[#5f7468]">Phone</p>
            <Link href="tel:+971564466924" className="mt-2 block text-lg font-semibold text-[#12271d]">
              +971 564466924
            </Link>
          </div>

          <div className="rounded-2xl border border-[#d7e1da] bg-white p-6 shadow-[0_14px_35px_-26px_rgba(12,26,18,0.7)]">
            <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-full bg-[#165029]/10 text-[#165029]">
              <FiMail className="text-lg" />
            </div>
            <p className="text-xs uppercase tracking-[0.15em] text-[#5f7468]">Email</p>
            <Link href="mailto:info@zencorp.ae" className="mt-2 block text-lg font-semibold text-[#12271d]">
              info@zencorp.ae
            </Link>
          </div>

          <div className="rounded-2xl border border-[#d7e1da] bg-white p-6 shadow-[0_14px_35px_-26px_rgba(12,26,18,0.7)]">
            <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-full bg-[#165029]/10 text-[#165029]">
              <FiMapPin className="text-lg" />
            </div>
            <p className="text-xs uppercase tracking-[0.15em] text-[#5f7468]">Office</p>
            <p className="mt-2 text-sm font-medium leading-6 text-[#12271d]">
              AL KHABEESI BLDG - Office No3
              <br />
              Dubai, UAE
            </p>
          </div>
        </div>
      </section>

      <section className="container mx-auto grid gap-6 px-6 pb-16 lg:grid-cols-5 lg:px-12">
        <div className="overflow-hidden rounded-2xl border border-[#d7e1da] bg-white text-sm text-[#1b3327] shadow-[0_20px_40px_-30px_rgba(10,30,20,0.7)] lg:col-span-2">
          <div className="relative h-52 w-full">
            <Image src="/images/warehousing.jpg" alt="Business details" fill className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#10271b]/70 to-transparent" />
          </div>
          <div className="px-5 py-5">
            <h2 className="text-xl font-semibold text-[#0f261b]">Business Details</h2>
            <p className="mt-2 leading-7 text-[#344a3d]">
              ZENCORP TRADING CO. LLC serves clients across multiple sectors with a responsive and structured team.
            </p>
            <p className="mt-3 font-semibold">TRN: 100315782100003</p>
            <Link
              href="https://maps.google.com/?q=AL+KHABEESI+BLDG+Office+No3+Dubai+UAE"
              className="mt-1 inline-block text-[#165029] underline underline-offset-4"
            >
              Open in Google Maps
            </Link>
            <div className="mt-5">
              <p className="text-sm font-semibold text-[#0f261b]">Our Products</p>
              <div className="mt-2 grid grid-cols-1 gap-1 text-sm">
                <Link href="/products/copper" className="text-[#165029] hover:underline">
                  Copper Ecosystem
                </Link>
                <Link href="/products/shipping" className="text-[#165029] hover:underline">
                  Shipping & Logistics
                </Link>
                <Link href="/products/healthcare_accessibility" className="text-[#165029] hover:underline">
                  Healthcare Accessibility
                </Link>
                <Link href="/products/building" className="text-[#165029] hover:underline">
                  Building Materials
                </Link>
                <Link href="/products/hospitality_supplies" className="text-[#165029] hover:underline">
                  Hospitality Supplies
                </Link>
                <Link href="/products/fmcg" className="text-[#165029] hover:underline">
                  FMCG
                </Link>
                <Link href="/products/aircraft-refueling-truck" className="text-[#165029] hover:underline">
                  18000L Aircraft Refueling Truck (Ready Stock)
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="rounded-3xl border border-[#d7e1da] bg-white p-2 shadow-[0_20px_40px_-30px_rgba(10,30,20,0.7)] lg:col-span-3">
          <GetInTuch />
        </div>
      </section>

      <section className="container mx-auto px-6 pb-20 lg:px-12">
        <div className="overflow-hidden rounded-3xl border border-[#d7e1da] bg-white p-2 shadow-[0_20px_40px_-30px_rgba(10,30,20,0.7)]">
          <iframe
            src="https://maps.google.com/maps?q=AL+KHABEESI+BLDG+Office+No3+Dubai+UAE&output=embed"
            style={{ border: "0" }}
            title="zencorp-location-map"
            className="h-[420px] w-full rounded-2xl"
            allowFullScreen
            loading="lazy"
          ></iframe>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default page;
