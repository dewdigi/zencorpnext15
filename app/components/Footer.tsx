"use client";


import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import NewsSection from './NewsSection'
import { FaFacebookF } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa6";


const Footer = () => {
return (
    <div >
        <NewsSection/>
        <div className='bg-Primary-1/100'>
        <div className='flex flex-col lg:mx-20 lg:flex-row bg-Primary-1/100 '>
            <div className='m-2  p-8 flex flex-col items-center lg:items-start lg:justify-start p-2 lg:w-1/2 gap-4'>  
                <a href="#" className="text-2xl font-bold"> <Image src="/images/logo-zencorp.svg" width={249} height={40} alt="zencorp" /></a>
                <p className='text-xs text-white lg:w-9/12 lg:text-left text-center'>At ZENCORP, we are committed to fostering growth and development in Africa&#39;s infrastructure, food, healthcare, and other key industries. By leveraging Africa&#39;s immense potential, we work with partners and clients to create a brighter future for the continent. </p>
                <div className='flex space-x-4 text-white py-4'>
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
            </div >
            <div className='flex flex-row lg:w-1/2 place-content-center items-start'>

            <div className=' lg:w-1/2 m-2 lg:px-4 lg:py-8  rounded-md  flex flex-col justify-self text-white '>
                
                <ul className='px-4 rounded-md'>
                    <li className='p-2 lg:px-14 rounded-md bg-Primary-1/90' >COMPANY</li>
                    
                    <li><Link rel="stylesheet" href="/" className="mx-2   hover:text-emerald-500 text-xs">HOME</Link></li>
            
                    <li><Link rel="stylesheet" href="/about" className="mx-2   hover:text-emerald-500 text-xs" >ABOUT</Link></li>
            
                    <li><Link rel="stylesheet" href="/news" className="mx-2   hover:text-emerald-500 text-xs" >NEWS</Link></li>
                
                    <li><Link rel="stylesheet" href="/blog" className="mx-2  hover:text-emerald-500 text-xs" >BLOG</Link></li>

                    <li><Link rel="stylesheet" href="/career" className="mx-2  hover:text-emerald-500 text-xs" >CAREER</Link></li>
            
                    <li><Link rel="stylesheet" href="/contact" className="mx-2   hover:text-emerald-500 text-xs" >CONTACT</Link></li>
                </ul>            

            </div>
            
            <div className=' lg:w-1/2 m-2 lg:px-4 lg:py-8  rounded-md  flex flex-col  lg:text-left  text-white'>
                <ul className=' px-4 rounded-md   '>
                    <li className='lg:px-20 px-4 py-2 rounded-md bg-[#287340]'>PRODUCTS</li>
                    <li><Link rel="stylesheet" href="/products/copper" className="m-2  hover:text-emerald-500 text-xs">Copper Ecosystem</Link></li>
            
                    <li><Link rel="stylesheet" href="/products/shipping" className="m-2 hover:text-emerald-500 text-xs" >Shipping & Logistics</Link></li>
            
                    
                
                    <li><Link rel="stylesheet" href="/products/healthcare_accessibility" className="m-2  hover:text-emerald-500 text-xs" >Healthcare Accessibility</Link></li>
                    
                    <li><Link rel="stylesheet" href="/products/building" className="m-2  hover:text-emerald-500 text-xs" >Building Materials</Link></li>

                    <li><Link rel="stylesheet" href="/products/hospitality_supplies" className="m-2  hover:text-emerald-500 text-xs" >Hospitality Supplies</Link></li>

                    <li><Link rel="stylesheet" href="/products/fmcg" className="m-2  hover:text-emerald-500 text-xs" >FMCG</Link></li>
                                        
                </ul>            

            </div>
            </div>
            <div className=' lg:w-3/12  items-center rounded-md lg:items-start m-2 lg:px-4 lg:py-8 flex flex-col text-left  text-white'>
                
                    <p className='px-10 rounded-lg py-2 bg-[#287340] lg:text-left'>CONTACT</p>
                    <p className='m-2 text-xs text-center lg:text-left'><span className='font-bold'>Address: </span> </p>
                        <p className='lg:mx-2 text-xs text-center lg:text-left flex-wrap'>ZENCORP Trading CO. LLC, No.8, Bin Dasmal Building, Mezanine Floor, Al Garhoud,Airport Road, Dubai, UAE., <span className='font-bold'>TRN:</span> 100315782100003 </p>
                        
                        
            <button type="button" className="px-5 py-2.5 my-4 text-sm  font-medium text-white flex items-center bg-Secondary-2/70 hover:bg-lime-800 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg text-center dark:bg-Secondary-2/70 dark:hover:bg-Primary-1/70 dark:focus:ring-blue-800" onClick={() => window.location.href = 'tel:+971564466924'}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-telephone" viewBox="0 0 16 16">
                    <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.6 17.6 0 0 0 4.168 6.608 17.6 17.6 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.68.68 0 0 0-.58-.122l-2.19.547a1.75 1.75 0 0 1-1.657-.459L5.482 8.062a1.75 1.75 0 0 1-.46-1.657l.548-2.19a.68.68 0 0 0-.122-.58zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.68.68 0 0 0 .178.643l2.457 2.457a.68.68 0 0 0 .644.178l2.189-.547a1.75 1.75 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.6 18.6 0 0 1-7.01-4.42 18.6 18.6 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877z"/>
                    </svg> &nbsp;
                    +971 5644 66924
            </button>
            <button type="button" className="px-5 py-2.5 text-sm  font-medium text-white inline-flex items-center bg-Secondary-2/70 hover:bg-lime-800 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg text-center dark:bg-Secondary-2/70 dark:hover:bg-Primary-1/70 dark:focus:ring-blue-800" onClick={() => window.location.href = 'mailto:example@example.com?subject=Inquiry&body=Hello, I would like to know more about...'}>
                    <svg className="w-3.5 h-3.5 text-white me-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 16">
                    <path d="m10.036 8.278 9.258-7.79A1.979 1.979 0 0 0 18 0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z"/>
                    <path d="M11.241 9.817c-.36.275-.801.425-1.255.427-.428 0-.845-.138-1.187-.395L0 2.6V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2.5l-8.759 7.317Z"/>
                    </svg> &nbsp;
                    info@zencorp.ae
            </button>  

            </div>
        </div>
        </div>
        <div className='flex justify-between bg-black p-4 text-center text-white text-xs'>
            <p>Copyright &copy; | All Rights Reserved Zencorp Trading Co. LLC</p>
            <p>Powered by Socialnear.com</p>
        </div>


    </div>
    
)
}

export default Footer
