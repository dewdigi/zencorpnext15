"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // Mobile menu state
  const [isSubMenuOpen, setIsSubMenuOpen] = useState(false); // Submenu state
  const [hasScrolled, setHasScrolled] = useState(false); // Scroll state
  const [theme, setTheme] = useState<"light" | "dark">("light"); // Theme state

  // Handle menu visibility
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleSubMenu = () => {
    setIsSubMenuOpen(!isSubMenuOpen);
  };

  // Handle theme detection
  useEffect(() => {
    const isDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    setTheme(isDark ? "dark" : "light");

    const listener = (e: MediaQueryListEvent) => {
      setTheme(e.matches ? "dark" : "light");
    };

    window
      .matchMedia("(prefers-color-scheme: dark)")
      .addEventListener("change", listener);

    return () =>
      window
        .matchMedia("(prefers-color-scheme: dark)")
        .removeEventListener("change", listener);
  }, []);

  // Update scroll state on window scroll
  useEffect(() => {
    const handleScroll = () => {
      setHasScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 p-4 md:p-6 shadow transition-all duration-300 ${
        hasScrolled
          ? "bg-white/50 backdrop-blur-md text-black"
          : "bg-transparent text-white"
      }`}
    >
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link href="/">
          <Image
            src={
              theme === "dark"
                ? "/images/zencorp_White.svg" // Dark mode logo
                : "/images/zencorp_Black.svg" // Light mode logo
            }
            width={249}
            height={40}
            alt="zencorp"
            className="cursor-pointer"
          />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden lg:flex bg-Primary-1/10 p-4 rounded-md text-slate-600">
          <Link href="/" className="mx-2 p-2 hover:text-emerald-500">
            HOME
          </Link>
          <Link href="/about" className="mx-2 p-2 hover:text-emerald-500">
            ABOUT
          </Link>
          <div className="relative group py-2">
            <Link href="#" className="mx-2 p-4 hover:text-emerald-500">
              PRODUCTS
            </Link>
            <div className="absolute left-0 top-full hidden group-hover:block bg-emerald-50 text-slate-600 shadow-xl rounded-md w-96">
              <Link
                href="/products/copper"
                className="block px-4 py-2 hover:text-emerald-500"
              >
                Copper Ecosystem
              </Link>
              <Link
                href="/products/building"
                className="block px-4 py-2 hover:text-emerald-500"
              >
                Building Materials
              </Link>
              <Link
                href="/products/healthcare_accessibility"
                className="block px-4 py-2 hover:text-emerald-500"
              >
                Healthcare Accessibility & Equipment
              </Link>
              <Link
                  href="/products/shipping"
                  className="block px-4 py-2 hover:text-emerald-500"
                >
                  Shipping & Logistics Services
                </Link>
                <Link
                  href="/products/hospitality_supplies"
                  className="block px-4 py-2 hover:text-emerald-500"
                >
                  Hospitality Supplies
                </Link>
                <Link
                  href="/products/fmcg"
                  className="block px-4 py-2 hover:text-emerald-500"
                >
                  FMCG
                </Link>
            </div>
          </div>
          <Link href="/blog" className="mx-2 p-2 hover:text-emerald-500">
            BLOG
          </Link>
          <Link href="/contact" className="mx-2 p-2 hover:text-emerald-500">
            CONTACT
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          onClick={toggleMenu}
          className="lg:hidden text-emerald-500 focus:outline-none"
        >
          {isMenuOpen ? (
            <svg
              className="w-8 h-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              className="w-8 h-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          )}
        </button>

        {/* Contact Us Button */}
        <button className="bg-emerald-50 text-emerald-500 m-2 p-4 hover:bg-emerald-800 rounded-md hidden lg:block">
          CONTACT US
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="absolute top-full right-0 w-3/4 bg-emerald-50 text-slate-600 m-2 rounded-xl shadow-lg z-10 lg:hidden">
          <Link href="/" className="block p-4 hover:text-emerald-500">
            HOME
          </Link>
          <Link href="/about" className="block p-4 hover:text-emerald-500">
            ABOUT
          </Link>
          <div>
            <button
              onClick={toggleSubMenu}
              className="block w-full text-left p-4 hover:text-emerald-500"
            >
              PRODUCTS
            </button>
            {isSubMenuOpen && (
              <div className="pl-4">
                <Link
                  href="/products/copper"
                  className="block px-4 py-2 hover:text-emerald-500"
                >
                  Copper Ecosystem
                </Link>
                <Link
                  href="/products/building"
                  className="block px-4 py-2 hover:text-emerald-500"
                >
                  Building Materials
                </Link>
                <Link
                  href="/products/healthcare_accessibility"
                  className="block px-4 py-2 hover:text-emerald-500"
                >
                  Healthcare Accessibility & Equipment
                </Link>
                <Link
                  href="/products/shipping"
                  className="block px-4 py-2 hover:text-emerald-500"
                >
                  Shipping & Logistics Services
                </Link>
                <Link
                  href="/products/hospitality_supplies"
                  className="block px-4 py-2 hover:text-emerald-500"
                >
                  Hospitality Supplies
                </Link>
                <Link
                  href="/products/fmcg"
                  className="block px-4 py-2 hover:text-emerald-500"
                >
                  FMCG
                </Link>
              </div>
            )}
          </div>
          <Link href="/blog" className="block p-4 hover:text-emerald-500">
            BLOG
          </Link>
          <Link href="/contact" className="block p-4 hover:text-emerald-500">
            CONTACT
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
