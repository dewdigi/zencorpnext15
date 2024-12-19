import React from "react";
import Link from "next/link";
import Image from "next/image";

import {FiHexagon} from '../assets/icons/vander'

export default function Features({title}){
    const featuresData =[
        {
            image:"/images/icons/color-swatches.svg",
            title:'Grow Your Business',
            desc:"If the distribution of letters and words is random, the reader will not be distracted from making."
          },
          {
              image:"/images/icons/decent-work-and-economic-growth.svg",
              title:'Drive More Sales',
              desc:"If the distribution of letters and words is random, the reader will not be distracted from making."
            },
             {
            image:"/images/icons/flip-horizontal-arrow-1.svg",
            title:'Handled By Expert',
            desc:"If the distribution of letters and words is random, the reader will not be distracted from making."
          }, {
              image:"/images/icons/layers-1.svg",
              title:'Discussion For Idea',
              desc:"If the distribution of letters and words is random, the reader will not be distracted from making."
            },
            {
              image:"/images/icons/pictures-folder-memories.svg",
              title:'Increase Conversion',
              desc:"If the distribution of letters and words is random, the reader will not be distracted from making."
            },
            {
              image:"/images/icons/production-belt-time.svg",
              title:'Sales Growth Idea',
              desc:"If the distribution of letters and words is random, the reader will not be distracted from making."
            },

    ]
    return(
        <>
        <div className="container relative md:mt-24 mt-16">
            {title === false ? "" : 
                <div className="grid grid-cols-1 pb-6 text-center">
                    <h3 className="mb-6 md:text-2xl text-xl font-medium">What we do?</h3>

                    <p className="text-slate-400 dark:text-white/60 max-w-xl mx-auto">This is just a simple text made for this unique and awesome template, you can replace it with any text.</p>
                </div>
            }

                <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 mt-6 gap-6">
                   {featuresData.map((item, index) =>{
                    return(
                    <div className="group relative lg:px-6 transition duration-500 ease-in-out rounded-xl overflow-hidden text-center" key={index}>
                        <div className="relative overflow-hidden text-transparent -m-3">
                            <FiHexagon className="h-28 w-28 fill-orange-500/5 mx-auto rotate-[30deg]"/>
                            <div className="absolute top-2/4 -translate-y-2/4 start-0 end-0 mx-auto text-orange-500 rounded-xl transition duration-500 ease-in-out text-3xl flex align-middle justify-center items-center">
                                <Image src={item.image} width={32} height={32} className="h-8" alt=""/>
                            </div>
                        </div>

                        <div className="mt-6">
                            <Link href="/services" className="text-lg font-medium duration-500 hover:text-orange-500">{item.title}</Link>
                            <p className="text-slate-400 dark:text-white/60 text-[15px] duration-500 mt-3">{item.desc}</p>
                        </div>
                    </div>
                    )
                   })}
                    
                   
                </div>
            </div>
        </>
    )
}