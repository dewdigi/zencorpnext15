"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import NewsSection from "./NewsSection";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa6";
import { FiMail, FiMapPin, FiPhone } from "react-icons/fi";

const companyLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "News", href: "/news" },
  { label: "Blog", href: "/blog" },
  { label: "Career", href: "/career" },
  { label: "Contact", href: "/contact" },
];

const productLinks = [
  { label: "Copper Ecosystem", href: "/products/copper" },
  { label: "Shipping & Logistics", href: "/products/shipping" },
  { label: "Healthcare Accessibility", href: "/products/healthcare_accessibility" },
  { label: "Building Materials", href: "/products/building" },
  { label: "Hospitality Supplies", href: "/products/hospitality_supplies" },
  { label: "FMCG", href: "/products/fmcg" },
  { label: "Aircraft Refueling Truck (18,000L)", href: "/products/aircraft-refueling-truck" },
];

const Footer = () => {
  return (
    <footer>
      <NewsSection />

      <div className="bg-[#081b11] text-white">
        <div className="mx-auto max-w-7xl px-6 pb-10 pt-14 lg:px-10">
          <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
            <div>
              <Link href="/" className="inline-block">
                <Image src="/images/logo-zencorp.svg" width={240} height={40} alt="zencorp" />
              </Link>
              <p className="mt-5 max-w-sm text-sm leading-7 text-white/75">
                At ZENCORP, we are committed to growth across Africa&apos;s infrastructure, food,
                healthcare, and key industries through dependable trading and long-term partnerships.
              </p>
              <div className="mt-6 flex items-center gap-3">
                <a
                  href="https://www.facebook.com"
                  className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/25 bg-white/5 transition hover:border-white/40 hover:bg-white/10"
                  aria-label="Facebook"
                >
                  <FaFacebookF />
                </a>
                <a
                  href="https://www.instagram.com"
                  className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/25 bg-white/5 transition hover:border-white/40 hover:bg-white/10"
                  aria-label="Instagram"
                >
                  <FaInstagram />
                </a>
                <a
                  href="https://www.twitter.com"
                  className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/25 bg-white/5 transition hover:border-white/40 hover:bg-white/10"
                  aria-label="Twitter"
                >
                  <FaTwitter />
                </a>
                <a
                  href="https://www.linkedin.com"
                  className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/25 bg-white/5 transition hover:border-white/40 hover:bg-white/10"
                  aria-label="LinkedIn"
                >
                  <FaLinkedinIn />
                </a>
              </div>
            </div>

            <div>
              <h3 className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-white/80">Company</h3>
              <ul className="space-y-2.5">
                {companyLinks.map((item) => (
                  <li key={item.href}>
                    <Link href={item.href} className="text-sm text-white/75 transition hover:text-white">
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-white/80">Products</h3>
              <ul className="space-y-2.5">
                {productLinks.map((item) => (
                  <li key={item.href}>
                    <Link href={item.href} className="text-sm text-white/75 transition hover:text-white">
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-white/80">Contact</h3>
              <div className="space-y-4">
                <div className="rounded-xl border border-white/15 bg-white/5 p-4">
                  <p className="flex items-start gap-2 text-sm text-white/80">
                    <FiMapPin className="mt-0.5 shrink-0" />
                    ZENCORP TRADING CO. LLC, AL KHABEESI BLDG - Office No3, Dubai, UAE
                  </p>
                  <p className="mt-2 text-xs text-white/60">TRN: 100315782100003</p>
                </div>

                <Link
                  href="tel:+971564466924"
                  className="flex items-center gap-2 rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-sm transition hover:border-white/30 hover:bg-white/10"
                >
                  <FiPhone />
                  +971 564466924
                </Link>

                <Link
                  href="mailto:info@zencorp.ae?subject=Inquiry&body=Hello, I would like to know more about..."
                  className="flex items-center gap-2 rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-sm transition hover:border-white/30 hover:bg-white/10"
                >
                  <FiMail />
                  info@zencorp.ae
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10">
          <div className="mx-auto flex max-w-7xl flex-col justify-between gap-2 px-6 py-4 text-xs text-white/65 lg:flex-row lg:px-10">
            <p>Copyright &copy; All Rights Reserved Zencorp Trading Co. LLC</p>
            <p>Powered by Socialnear.com</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
