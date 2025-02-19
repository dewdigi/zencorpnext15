import React from 'react';
import { FaFacebookF } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa6";
import Link from 'next/link';

const TopNavbar = () => {
  return (
    <div className='p-2 bg-white/50 backdrop-blur-md text-Primary-1/100 flex justify-center lg:justify-end gap-4 items-center lg:px-28 mb-2 rounded-xl'>

      <div>
        <Link href="mailto:info@zencorp.ae">
        <p className='text-sm'>
        📧 Info@zencorp.ae 
        </p>
        </Link>
      </div>
      <p>|</p>
      <div className='flex space-x-4'>
        <a href='https://www.facebook.com' className='hover:text-blue-500' aria-label='Facebook'>
          <FaFacebookF />
        </a>
        <a href='https://www.instagram.com' className='hover:text-pink-500' aria-label='Instagram'>
          <FaInstagram />
        </a>
        <a href='https://www.twitter.com' className='hover:text-blue-400' aria-label='Twitter'>
          <FaTwitter />
        </a>
        <a href='https://www.linkedin.com' className='hover:text-blue-400' aria-label='Twitter'>
                                  <FaLinkedinIn />
        </a>
      </div>
    </div>
  );
};

export default TopNavbar;
