import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Image from 'next/image'

import GetInTuch from '../components/getInTuch'

import Link from 'next/link'


const page = () => {
  return (
    <div>
      <Navbar/>
      
      <section className="relative table w-full py-32 lg:py-40 bg-no-repeat bg-top bg-cover" style={{backgroundImage:"url('/images/about-1.jpg')"}}>
            <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/80 to-black"></div>
            <div className="container relative">
                <div className="grid grid-cols-1 pb-8 text-center mt-10">
                    <h3 className="text-3xl leading-normal font-medium text-white">Contact Us</h3>
                </div>
            </div>
            
            
        </section>
        <div className="relative">
            <div className="shape absolute sm:-bottom-px -bottom-[2px] start-0 end-0 overflow-hidden z-1 text-white dark:text-slate-900">
                <svg className="w-full h-auto scale-[2.0] origin-top" viewBox="0 0 2880 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 48H1437.5H2880V0H2160C1442.5 52 720 0 720 0H0V48Z" fill="currentColor"></path>
                </svg>
            </div>
        </div>
        <section className="flex flex-col items-center justify-center md:pb-24 pb-16">
            <GetInTuch/>
            <div className="container relative lg:mt-24 mt-16">
                <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-[30px]">
                    <div className="text-center px-6">
                        <div className="relative overflow-hidden text-transparent -m-3">
                            <div className="h-28 w-28 fill-orange-500/5 mx-auto rotate-[30deg]"/>
                            <div className="absolute top-2/4 -translate-y-2/4 start-0 end-0 mx-auto text-orange-500 rounded-xl transition-all duration-500 ease-in-out text-3xl flex align-middle justify-center items-center">
                                <Image src="/images/icons/call-center-support-service.svg" width={32} height={32} className="h-8" alt=""/>
                            </div>
                        </div>

                        <div className="content mt-7">
                            <h5 className="title text-lg font-medium">Phone</h5>
                            <p className="text-slate-400 dark:text-white/60 mt-3">Need immediate assistance? Call us at:</p>
                            
                            <div className="mt-5">
                                <Link href="tel:+971564466924" className="text-orange-500 hover:text-orange-500 after:bg-orange-500 transition duration-500">+971 564466924</Link>
                            </div>
                        </div>
                    </div>

                    <div className="text-center px-6">
                        <div className="relative overflow-hidden text-transparent -m-3">
                            <div className="h-28 w-28 fill-orange-500/5 mx-auto rotate-[30deg]"/>
                            <div className="absolute top-2/4 -translate-y-2/4 start-0 end-0 mx-auto text-orange-500 rounded-xl transition-all duration-500 ease-in-out text-3xl flex align-middle justify-center items-center">
                                <Image src="/images/icons/mail-send-envelope.svg" width={32} height={32} className="h-8" alt=""/>
                            </div>
                        </div>

                        <div className="content mt-7">
                            <h5 className="title text-lg font-medium">Email</h5>
                            <p className="text-slate-400 dark:text-white/60 mt-3">Prefer to write to us? Drop us an email at:</p>
                            
                            <div className="mt-5">
                                <Link href="mailto:info@zencorp.ae" className="text-orange-500 hover:text-orange-500 after:bg-orange-500 transition duration-500">info@zencorp.ae</Link>
                            </div>
                        </div>
                    </div>

                    <div className="text-center px-6">
                        <div className="relative overflow-hidden text-transparent -m-3">
                            <div className="h-28 w-28 fill-orange-500/5 mx-auto rotate-[30deg]"/>
                            <div className="absolute top-2/4 -translate-y-2/4 start-0 end-0 mx-auto text-orange-500 rounded-xl transition-all duration-500 ease-in-out text-3xl flex align-middle justify-center items-center">
                                <Image src="/images/icons/location-pin-3.svg" width={32} height={32} className="h-8" alt=""/>
                            </div>
                        </div>

                        <div className="content mt-7">
                            <h5 className="title text-lg font-medium">Location</h5>
                            <p className="text-slate-400 dark:text-white/60 mt-3">ZENCORP TRADING CO. LLC
                             <br/>AL KHABEESI BLDG - Office No3, Dubai, UAE
                             <br/>TRN: 100315782100003</p>
                            
                            <div className="mt-5">
                                <Link href="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d39206.002432144705!2d-95.4973981212445!3d29.709510002925988!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8640c16de81f3ca5%3A0xf43e0b60ae539ac9!2sGerald+D.+Hines+Waterwall+Park!5e0!3m2!1sen!2sin!4v1566305861440!5m2!1sen!2sin"
                                data-type="iframe" className="video-play-icon read-more lightbox text-orange-500 hover:text-orange-500 after:bg-orange-500 transition duration-500">View on Google map</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <div className="container-fluid relative">
            <div className="grid grid-cols-1">
                <div className="w-full leading-[0] border-0">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d39206.002432144705!2d-95.4973981212445!3d29.709510002925988!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8640c16de81f3ca5%3A0xf43e0b60ae539ac9!2sGerald+D.+Hines+Waterwall+Park!5e0!3m2!1sen!2sin!4v1566305861440!5m2!1sen!2sin" style={{border:"0"}} title="my-frame" className="w-full h-[500px]" allowFullScreen></iframe>
                </div>
            </div>
        </div>
      
      <Footer/>
      </div>



    
    
  )
}

export default page
