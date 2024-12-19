import React from "react";
import Image from "next/image";

export default function GetInTuch(){
    return(
        <>
         <div className="container relative md:mt-24 mt-16">
                <div className="grid md:grid-cols-2 grid-cols-1 items-center gap-[30px]">
                    <Image src="/images/contact.svg" width={0} height={0} sizes="100vw" style={{width:"100%", height:"auto"}} alt=""/>

                    <div className="lg:ms-5">
                        <div className="bg-white dark:bg-slate-900 rounded-xl shadow dark:shadow-gray-700 p-6">
                            <h3 className="mb-6 text-2xl leading-normal font-medium">Get in touch !</h3>

                            <form>
                                <div className="grid lg:grid-cols-12 lg:gap-6">
                                    <div className="lg:col-span-6 mb-5">
                                        <label htmlFor="name" className="form-label font-medium">Your Name:</label>
                                        <input name="name" id="name" type="text" className="form-input w-full py-2 px-3 h-10 bg-transparent border border-inherit dark:border-gray-800 dark:bg-slate-900 dark:text-slate-200 rounded-xl outline-none focus:border-orange-500/50 dark:focus:border-orange-500/50 focus:ring-0 mt-2" placeholder="Name :"/>
                                    </div>
    
                                    <div className="lg:col-span-6 mb-5">
                                        <label htmlFor="email" className="form-label font-medium">Your Email:</label>
                                        <input name="email" id="email" type="email" className="form-input w-full py-2 px-3 h-10 bg-transparent border border-inherit dark:border-gray-800 dark:bg-slate-900 dark:text-slate-200 rounded-xl outline-none focus:border-orange-500/50 dark:focus:border-orange-500/50 focus:ring-0 mt-2" placeholder="Email :"/>
                                    </div>
                                </div>

                                <div className="grid grid-cols-1">
                                    <div className="mb-5">
                                        <label htmlFor="subject" className="form-label font-medium">Your Question:</label>
                                        <input name="subject" id="subject" className="form-input w-full py-2 px-3 h-10 bg-transparent border border-inherit dark:border-gray-800 dark:bg-slate-900 dark:text-slate-200 rounded-xl outline-none focus:border-orange-500/50 dark:focus:border-orange-500/50 focus:ring-0 mt-2" placeholder="Subject :"/>
                                    </div>

                                    <div className="mb-5">
                                        <label htmlFor="comments" className="form-label font-medium">Your Comment:</label>
                                        <textarea name="comments" id="comments" className="form-input w-full py-2 px-3 bg-transparent border border-inherit dark:border-gray-800 dark:bg-slate-900 dark:text-slate-200 rounded-xl outline-none focus:border-orange-500/50 dark:focus:border-orange-500/50 focus:ring-0 mt-2 textarea h-28" placeholder="Message :"></textarea>
                                    </div>
                                </div>
                                <button type="submit" id="submit" name="send" className="py-2 px-5 inline-block font-normal tracking-wide border align-middle transition duration-500 ease-in-out text-base text-center bg-orange-500 hover:bg-orange-600 border-orange-500 hover:border-orange-600 text-white rounded-xl">Send Message</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}