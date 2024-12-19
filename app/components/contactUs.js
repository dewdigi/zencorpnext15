import React from "react";
import Link from "next/link";
import {FiPhone} from "../assets/icons/vander"

export default function ContactUs(){
    return(
        <>
        <div className="container relative md:mt-24 mt-16">
            <div className="grid grid-cols-1 text-center">
                <span className="text-slate-400 dark:text-white/60 mb-4">Available for freelance projects</span>
                <h3 className="md:text-3xl text-2xl md:leading-normal leading-normal font-semibold">Do you have designing project? <br/> Let us talk.</h3>

                <div className="mt-6">
                    <Link href="/contactus" className="py-2 px-5 inline-flex items-center font-medium tracking-wide border align-middle duration-500 text-[15px] text-center bg-orange-500 hover:bg-orange-600 border-orange-500 hover:border-orange-600 text-white rounded-xl"><FiPhone className="h-[15px] w-[15px] me-2"/> Contact us</Link>
                </div>
            </div>
        </div> 
        </>
    )
}