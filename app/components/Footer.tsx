import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import NewsSection from './NewsSection'

const Footer = () => {
return (
    <div >
        <NewsSection/>
        <div className='flex flex-col md:flex-row bg-zencorp-green'>
            <div className='m-2 p-8 flex flex-col items-center md:justify-center p-2 md:w-3/12 gap-4'>  
                <a href="#" className="text-2xl font-bold"> <Image src="/images/logo-zencorp.svg" width={249} height={40} alt="zencorp" /></a>
                <p className='text-xs text-white w-9/12 '>At ZENCORP, we are committed to fostering growth and development in Africa&#39;s infrastructure, food, healthcare, and other key industries. By leveraging Africa&#39;s immense potential, we work with partners and clients to create a brighter future for the continent. </p>
            </div >
            <div className='flex flex-row md:w-1/2 shrink'>
            <div className=' md:w-1/2 m-2 md:p-8 items-center flex flex-col justify-self text-white '>
                <ul >
                    <li className='px-2 py-2 bg-[#287340]' >COMPANY</li>
                    <li><Link rel="stylesheet" href="/#" className="mx-2 p-6 hover:text-emerald-500 text-xs">HOME</Link></li>
            
                    <li><Link rel="stylesheet" href="/about" className="mx-2 p-6 hover:text-emerald-500 text-xs" >ABOUT</Link></li>
            
                    <li><Link rel="stylesheet" href="/news" className="mx-2 p-6 hover:text-emerald-500 text-xs" >NEWS</Link></li>
                
                    <li><Link rel="stylesheet" href="/blog" className="mx-2 p-6 hover:text-emerald-500 text-xs" >BLOG</Link></li>

                    <li><Link rel="stylesheet" href="/career" className="mx-2 p-6 hover:text-emerald-500 text-xs" >CAREER</Link></li>
            
                    <li><Link rel="stylesheet" href="/contact" className="mx-2 p-6 hover:text-emerald-500 text-xs" >CONTACT</Link></li>
                </ul>            

            </div>
            
            <div className=' md:w-1/2 m-2 md:p-8 items-center flex flex-col text-left  text-white'>
                <ul>
                    <li className='px-4 py-2 bg-[#287340]'>PRODUCTS</li>
                    <li><Link rel="stylesheet" href="/products/copper" className="m-2 hover:text-emerald-500 text-xs">Copper Products</Link></li>
            
                    <li><Link rel="stylesheet" href="/products/shipping" className="m-2 hover:text-emerald-500 text-xs" >Shipping logistics</Link></li>
            
                    <li><Link rel="stylesheet" href="/products/investment" className="m-2 hovezr:text-emerald-500 text-xs" >Investment sourcing</Link></li>
                
                    <li><Link rel="stylesheet" href="/products/medical" className="m-2 hover:text-emerald-500 text-xs" >Medical clinics & equipment</Link></li>

                    <li><Link rel="stylesheet" href="/products/transportation" className="m-2 hover:text-emerald-500 text-xs" >Transportation consulting</Link></li>
            
                    <li><Link rel="stylesheet" href="/products/interior" className="m-2 hover:text-emerald-500 text-xs" >Interior fitout</Link></li>
                </ul>            

            </div>
            </div>
            <div className=' md:w-3/12 items-center md:items-start m-2 p-8 flex flex-col text-left  text-white'>
                
                    <p className='px-8 py-2 bg-[#287340]'>CONTACT</p>
                    <p className='m-2  text-xs'><span className='font-bold'>Address:</span> ZENCORP Trading CO. LLC</p>
                        <p className='mx-16 text-xs'>A2205, The Four A Block</p>
                        <p className='mx-16 text-xs'>Al Nahda-1, Dubai, UAE</p>
                        <p className='mx-16 my-2 text-xs'><span className='font-bold'>TRN:</span> 100315782100003 </p>
                        <button type="button" className="px-5 py-2.5 my-4 text-sm w-9/12 font-medium text-white flex items-center bg-Secondary-2/70 hover:bg-lime-800 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-telephone" viewBox="0 0 16 16">
                    <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.6 17.6 0 0 0 4.168 6.608 17.6 17.6 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.68.68 0 0 0-.58-.122l-2.19.547a1.75 1.75 0 0 1-1.657-.459L5.482 8.062a1.75 1.75 0 0 1-.46-1.657l.548-2.19a.68.68 0 0 0-.122-.58zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.68.68 0 0 0 .178.643l2.457 2.457a.68.68 0 0 0 .644.178l2.189-.547a1.75 1.75 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.6 18.6 0 0 1-7.01-4.42 18.6 18.6 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877z"/>
                    </svg> &nbsp;
                    +971 123 456 789
                </button>
                <button type="button" className="px-5 py-2.5 text-sm w-9/12 font-medium text-white inline-flex items-center bg-Secondary-2/70 hover:bg-lime-800 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                    <svg className="w-3.5 h-3.5 text-white me-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 16">
                    <path d="m10.036 8.278 9.258-7.79A1.979 1.979 0 0 0 18 0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z"/>
                    <path d="M11.241 9.817c-.36.275-.801.425-1.255.427-.428 0-.845-.138-1.187-.395L0 2.6V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2.5l-8.759 7.317Z"/>
                    </svg> &nbsp;
                    info@zencorp
                </button>  

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
