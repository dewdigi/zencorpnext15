import React from 'react'
import Link from 'next/link'
import Image from 'next/image';

const Navbarwhite = () => {
  return (
    <nav className=" text-white p-4 sm:p-6 md:flex md:justify-center md:items-center">
        <div className="container mx-auto flex justify-between items-center">
            <a href="#" className="text-2xl font-bold"> <Image src="/images/logo-zencorp.svg" width={249} height={40} alt="zencorp" /></a>
            <div className='bg-emerald-50 p-4 rounded-md text-slate-600 hidden md:flex'>
                <Link rel="stylesheet" href="/#" className="mx-2 p-2 hover:text-emerald-500">HOME</Link>
            
                <Link rel="stylesheet" href="/about" className="mx-2 p-2 hover:text-emerald-500" >ABOUT</Link>

                <Link rel="stylesheet" href="/products" className="mx-2 p-2 hover:text-emerald-500" >PRODUCTS</Link>
            
                <Link rel="stylesheet" href="/news" className="mx-2 p-2 hover:text-emerald-500" >NEWS</Link>
                
                <Link rel="stylesheet" href="/blog" className="mx-2 p-2 hover:text-emerald-500" >BLOG</Link>
            
                <Link rel="stylesheet" href="/career" className="mx-2 p-2 hover:text-emerald-500" >CAREER</Link>
            
                <Link rel="stylesheet" href="/contact" className="mx-2 p-2 hover:text-emerald-500" >CONTACT</Link>
            </div>
            <button className='bg-emerald-500 m-2 p-4 hover:bg-emerald-800 rounded-md'>CONTACT US</button>             
        </div>
    </nav>
  );
};

export default Navbarwhite

