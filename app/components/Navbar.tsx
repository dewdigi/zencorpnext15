"use client"

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // Mobile menu state
  const [isSubMenuOpen, setIsSubMenuOpen] = useState(false); // Submenu state

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleSubMenu = () => {
    setIsSubMenuOpen(!isSubMenuOpen);
  };

  return (
    <nav className="text-white p-4 md:p-6 relative">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <a href="#" className="text-2xl font-bold">
          <Image src="/images/zencorp_Black.svg" width={249} height={40} alt="zencorp" />
        </a>

        {/* Desktop Menu */}
        <div className="hidden lg:flex bg-emerald-50 p-4 rounded-md text-slate-600">
          <Link href="/#" className="mx-2 p-2 hover:text-emerald-500">HOME</Link>
          <Link href="/about" className="mx-2 p-2 hover:text-emerald-500">ABOUT</Link>
          
          {/* Products Menu with Submenu */}
          <div className="relative group py-2">
            <Link href="#" className="mx-2 p-4 hover:text-emerald-500">
              PRODUCTS
            </Link>
            <div className="absolute left-0 top-full hidden group-hover:block bg-emerald-50 text-slate-600 shadow-xl rounded-md w-96">
              <Link href="/products/copper" className="block px-4 py-2 hover:text-emerald-500">Copper Ecosystem</Link>
              <Link href="/products/building" className="block px-4 py-2 hover:text-emerald-500">Building Materials</Link>
              <Link href="/products/investment" className="block px-4 py-2 hover:text-emerald-500">Investment & Finance</Link>
              <Link href="/products/medical" className="block px-4 py-2 hover:text-emerald-500">Healthcare Accessibility & Equipment</Link>
              <Link href="/products/shipping" className="block px-4 py-2 hover:text-emerald-500">Shipping & Logistics</Link>
              <Link href="/products/medical" className="block px-4 py-2 hover:text-emerald-500">Hospitality Supplies</Link>
                <Link href="/products/medical" className="block px-4 py-2 hover:text-emerald-500">FMCG</Link>

                            
            </div>
          </div>
          
          <Link href="/news" className="mx-2 p-2 hover:text-emerald-500">NEWS</Link>
          <Link href="/blog" className="mx-2 p-2 hover:text-emerald-500">BLOG</Link>
          <Link href="/career" className="mx-2 p-2 hover:text-emerald-500">CAREER</Link>
          <Link href="/contact" className="mx-2 p-2 hover:text-emerald-500">CONTACT</Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          onClick={toggleMenu}
          className="lg:hidden text-emerald-500 focus:outline-none"
        >
          {isMenuOpen ? (
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
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
        <div className="absolute top-full right-0 w-1/2 bg-emerald-50 text-slate-600 m-2 rounded-xl shadow-lg z-10 lg:hidden">
          <Link href="/#" className="block p-4 hover:text-emerald-500 hover:bg-Primary-1/70 rounded-sm">HOME</Link>
          <Link href="/about" className="block p-4 hover:text-emerald-500 hover:bg-Primary-1/70 rounded-sm">ABOUT</Link>
          <div>
            <button
              onClick={toggleSubMenu}
              className="block w-full text-left p-4 hover:text-emerald-500 hover:bg-Primary-1/70 rounded-sm"
            >
              PRODUCTS
              <svg
                className={`inline w-5 h-5 ml-2 transform ${isSubMenuOpen ? 'rotate-180' : ''}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {isSubMenuOpen && (
              <div className="pl-4">
                <Link href="/products/copper" className="block px-4 py-2 hover:bg-Secondary-2/70 rounded-sm">Copper Ecosystem</Link>
                <Link href="/products/shipping" className="block px-4 py-2 hover:bg-Secondary-2/70 rounded-sm">Shipping & Logistics</Link>
                <Link href="/products/building" className="block px-4 py-2 hover:text-emerald-500">Building Materials</Link>
                <Link href="/products/investment" className="block px-4 py-2 hover:bg-Secondary-2/70 rounded-sm">Investment & Finance</Link>
                <Link href="/products/medical" className="block px-4 py-2 hover:bg-Secondary-2/70 rounded-sm">Healthcare Accessibility & Equipment</Link>
                <Link href="/products/medical" className="block px-4 py-2 hover:bg-Secondary-2/70 rounded-sm">Hospitality Supplies</Link>
                <Link href="/products/medical" className="block px-4 py-2 hover:bg-Secondary-2/70 rounded-sm">FMCG</Link>
                
                
                
              </div>
            )}
          </div>
          <Link href="/news" className="block p-4 hover:bg-Primary-1/70 rounded-sm ">NEWS</Link>
          <Link href="/blog" className="block p-4 hover:bg-Primary-1/70 rounded-sm">BLOG</Link>
          <Link href="/career" className="block p-4 hover:bg-Primary-1/70 rounded-sm">CAREER</Link>
          <Link href="/contact" className="block p-4 hover:bg-Primary-1/70 rounded-sm">CONTACT</Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

