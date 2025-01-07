import React from 'react'

import Footer from '@/app/components/Footer';
import Navbarwhite from '@/app/components/Navbarwhite';
const dynamicImage = "/images/building_materials.jpg";

import Image from 'next/image';

const page = () => {
  return (
    <div>
      <div
        className="min-v-screen bg-cover  bg-center bg-no-repeat rounded-bl-[100px]"
        style={{ backgroundImage: `url("${dynamicImage}")` }}
      >
        <div className='backdrop-blur-sm bg-gradient-to-b from-Secondary-2/60/[.2] via-Secondary-2/80/[.6] to-black rounded-bl-[100px]'>
          <Navbarwhite />
          <div className="flex flex-col lg:justify-start justify-center items-center lg:items-start my-32 lg:m-24 lg:my-32 p-6 lg:pb-28 text-white gap-22">
            <h1 className="text-5xl md:text-6xl leading-36 my-4 text-center sm:text-left">
            Zencorp  <b>Building Materials</b> <br />
              
            </h1>
            <p className="text-xl leading-24 my-4 font-normal text-center lg:text-left">
            Building the Future, One Brick at a Time
            </p>
            <p className='lg:pe-80'>
            Zencorp offers high-quality, durable products that meet industry standards, a diverse range of specialized tools and equipment,
           and expert guidance tailored to your needs. With a strong focus on sustainability and eco-friendly solutions, 
           we help reduce environmental impact while providing premium quality at competitive prices.
            </p>
            
            <br></br>
            <button className=" bg-emerald-500 sm:w-3/12 lg:w-auto w-1/2 hover:bg-Secondary-2/70 hover:drop-shadow-xl p-4 rounded-md">
              CONTACT US
            </button>            
          </div>
        </div>

        
      </div>

      <div className='flex lg:flex-row flex-col lg:gap-20 lg:m-20 items-center  justify-center'>
          <div className='lg:w-1/2'>
          <div className='flex flex-col gap-8 p-12'>
          <p className='font-normal text-sm text-accent-3/30 '>Products & Services</p>
          <h2 className='font-bold text-3xl md:text-5xl  text-accent-3/100'>Why Choose <span className='text-Primary-1/70 underline'>Zencorp?</span>Building Materials</h2>
          
          </div>
          
          <div className=' px-10 lg:px-12'> 
          <ol className='list-decimal font-normal text-md text-accent-3/70 '>
            <li>High-Quality Products: Tested to meet industry standards for durability and reliability.


            </li>
            <li>
            Diverse Range: Specialized tools and equipment for every construction need.

            </li>
            <li>
            Expert Guidance: Tailored advice from professionals.

            </li>
            <li>
            Sustainability Focus: Eco-friendly solutions to reduce waste and environmental impact.

            </li>
            <li>
            Affordable Pricing: Premium quality at competitive prices.

            </li>
          </ol>
          </div>

          
          </div>

          

          

          <div className='flex lg:w-1/2 p-8 items-center rounded-2xl'>
          <Image
                src="/images/copper-products.jpg"
                width={600}
                height={600}
                alt="copper image"
              />
          </div>
          

          
          
      </div>


      <div className='md:m-10 m-8 flex flex-col sm:flex-row md:gap-4 bg-Primary-1/10 rounded-[20px]'>
        <div className='md:p-20 p-4 m-2 gap-8 flex flex-col justify-center'>
          <div className='flex gap-4 flex-col'>
            <h2 className='text-5xl font-bold lg:text-left text-center'>Our Expertise</h2>
            <h4 className='text-xl lg:text-left text-center'>From Mine to Market: Comprehensive Copper Solutions</h4>
          </div>

          <div className='flex lg:flex-row flex-col gap-8 '>
            <div className='flex flex-col lg:w-1/2 bg-gray-100 p-8 rounded-2xl '>
              <div className='lg:p-8'> 
                <p className='text-xl md:text-left text-center font-bold'>Upstream Copper Raw Materials</p>
                <p className='text-lg py-2'>We source and trade:</p>
                <div className='p-4 bg-white rounded-2xl'>
                 <ul className='list-disc p-2 mx-2 ' >             
                   <li ><span className='font-bold py-2 '>Copper Ores: </span> <span className='text-sm'>Mined from top locations like Africa and processed into concentrates.</span></li>
                   <li><span className='font-bold py-2'>Copper Concentrates: </span> <span className='text-sm'>Graded at 15-35% copper content for smelting and refining. </span></li>
                   <li ><span className='font-bold py-2'>Copper Blister: </span> <span className='text-sm'>Produced at 90-95% purity for manufacturing copper anodes.</span></li>
                   <li><span className='font-bold py-2'>Copper Cathodes: </span> <span className='text-sm'>Electrolytic copper (99.99% pure) traded globally</span></li>
                 </ul> 
                 </div>
              </div>
            
              <div className='p-4 m-2 '>
               <Image src="/images/upstream.avif" width={600} height={600} alt="copper"/>

              </div>
            </div>


            <div className='flex flex-col lg:w-1/2 bg-gray-100 p-8 rounded-2xl '>
              <div className='lg:p-8'> 
                <p className='text-xl md:text-left text-center font-bold'>Downstream Copper Products</p>
                <p className='text-lg py-2'>Our partnerships extend to manufacturers and distributors of:</p>
                <div className='p-4 bg-white rounded-2xl'>
                 <ul className='list-disc p-2 mx-2' >             
                   <li><span className='font-bold py-2'>Copper Rods:  </span> <span className='text-sm'>Electrolytic Tough Pitch (ETP) and Oxygen-Free Copper (OFC) rods in various sizes for electrical and industrial applications.</span></li>
                   <li><span className='font-bold py-2'>Copper Wires: </span> <span className='text-sm'>From fine domestic wires to heavy-duty armoured cables.</span></li>
                   <li><span className='font-bold py-2'>Copper Extrusions:  </span> <span className='text-sm'>Including busbars, strips, and profiles for transformers, switchgears, and other electrical systems.</span></li>
                   <li><span className='font-bold py-2'>Ultra-High Purity Copper:  </span> <span className='text-sm'>6N copper (99.9999%) for critical applications in semiconductors, solar cells, and medical devices.</span></li>
                 </ul> 
                 </div>
              </div>
            
              <div className='p-4 m-2 '>
               <Image src="/images/upstream.jpg" width={800} height={800} alt="copper"/>

              </div>
            </div>


          </div>
        </div>

        

        
      </div>
      

      <div className='md:m-20 m-8 flex flex-col sm:flex-row md:gap-4 rounded-xl '>        

        <div className='p-4 m-2 md:w-1/2'>
         <Image src="/images/resize-sorting-metal.png" width={961} height={761} alt="copper"/>
        </div>

        <div className='md:p-20 p-4 m-2 gap-4 md:w-1/2 flex flex-col justify-center'>
          <h2 className='text-5xl font-bold md:text-left text-center'>Recycling Copper for a Sustainable Future</h2>
          <p className='md:text-left text-center'>Zencorp is committed to environmental stewardship. We recover and recycle end-of-life copper products and factory waste, contributing to a circular economy. With the infrastructure to handle large volumes, we aim to recover 20% of copper raw materials that would otherwise end up in landfills.</p>
        </div>

        
      </div>

      <div className='md:m-20 m-8 flex flex-col sm:flex-row md:gap-4 rounded-xl bg-white rounded-2xl '>   

        <div className='md:p-20 p-4 m-2 gap-4 md:w-1/2 flex flex-col justify-center'>
          <h2 className='text-5xl font-bold md:text-left text-center'>Industries We Serve</h2>
          
          <p className='md:text-left text-center'>Zencorp supplies copper products to a wide range of sectors, including:</p>
          <div className='p-4 bg-white rounded-2xl'>
                 <ul className='list-disc p-2 mx-2' >             
                   <li><span className='font-bold py-2'>Power Systems & Utilities:   </span> <span className='text-sm'>Serving giants like ABB, Siemens, and GE.</span></li>
                   <li><span className='font-bold py-2'>Electric Vehicles: </span> <span className='text-sm'>Supporting EV innovation with advanced materials.</span></li>
                   <li><span className='font-bold py-2'>Semiconductors and Electronics:  </span> <span className='text-sm'>Delivering ultra-high purity copper for precision applications.</span></li>
                   <li><span className='font-bold py-2'>Construction:  </span> <span className='text-sm'>Providing durable copper solutions for wiring and infrastructure.</span></li>
                 </ul> 
                 </div>
        </div>     

        <div className='p-4 m-2 md:w-1/2 flex items-center justify-center'>
         <Image src="/images/ev-car.jpg" width={961} height={761} alt="copper"/>
        </div>    

        
      </div>

      <div className='md:m-20 m-8 flex flex-col sm:flex-row md:gap-4 '>        

        <div className='p-4 m-2 flex items-center md:w-1/2'>
         <Image src="/images/africa-map.jpg" width={961} height={761} alt="copper"/>
        </div>

        <div className='md:p-20 p-4 m-2 gap-4 md:w-1/2 flex flex-col justify-center'>
        <h2 className='text-5xl md:text-left text-center font-bold'>Why Choose Zencorp?</h2>
        <ul className='list-disc'>
        <li><p>Global Reach: Operations spanning MENA, Asia, Europe, and Africa.</p> </li>
        <li><p>Sustainability Focus: Prioritizing recycling and eco-friendly practices.</p></li>
        <li><p>Quality Assurance: Compliance with international standards for long-term partnerships. </p></li>
        <li><p>Customer-Centric Approach: Tailored solutions to meet your specific needs. </p></li>
        </ul>
        </div>

        
      </div>


      <div className=' flex items-center bg-Secondary-2/20 justify-center '>
         <Image src="/images/african-women-laptop1.jpg" width={1600} height={300} alt="copper"/>
        </div>  

      <div className='md:m-20 m-8 flex flex-col sm:flex-row md:gap-4 rounded-xl '>

        <div className='md:p-20 p-4 m-2 gap-4 md:w-1/2 flex flex-col justify-center'>
          <h2 className='text-5xl font-bold md:text-left text-center'>Join the Copper Revolution</h2>
          <p className='md:text-left text-center '>Whether you&#8217;re in need of raw materials, finished products, or recycling solutions, Zencorp is your gateway to the complete copper ecosystem. Let&#8217;s shape a brighter, more sustainable future together.</p>
        </div>     

        <div className='p-4 m-2 md:w-1/2'>
         <Image src="/images/father-carry.jpg" width={961} height={761} alt="copper"/>
        </div>  
        
      
      </div>
      <div className='flex justify-center'>
      {/**<button type='button' className='px-8 py-4 m-2 bg-Primary-1/70 rounded-md text-center text-Primary-1/10 hover:bg-Secondary-2/70'>Learn More</button> */}
      </div>

      



    <Footer/>
    </div>
  )
}

export default page