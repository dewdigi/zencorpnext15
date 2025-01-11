import React from 'react'

import Footer from '@/app/components/Footer';
import Navbarwhite from '@/app/components/Navbarwhite';
const dynamicImage = "/images/shipping.jpg";
const dynamicImage1 = "/images/shipping.jpg";

import Image from 'next/image';

const page = () => {
  return (
    <div>
      <div
        className="min-v-screen bg-cover bg-center bg-no-repeat rounded-bl-[100px]"
        style={{ backgroundImage: `url("${dynamicImage}")` }}
      >
        <div className='backdrop-blur-sm bg-gradient-to-b from-Secondary-2/60/[.2] via-Secondary-2/80/[.6] to-black rounded-bl-[100px]'>
          <Navbarwhite />
          <div className="flex flex-col gap-8 lg:justify-start justify-center items-center lg:items-start my-32 lg:m-24 lg:my-0 lg:py-80  p-6 lg:pb-28 text-white gap-22">
            <h1 className="text-5xl md:text-6xl leading-36 my-4 text-center sm:text-left">
              <b>Shipping & Logistics Services</b>
            </h1>
            <p className='lg:mr-80 lg:text-left text-center'>
              At ZenCorp Trading Co. LLC, we understand that efficient shipping and logistics are critical to the success of any business. Our specialized Shipping & Logistics Division is dedicated to delivering tailored transportation and supply chain solutions that meet the dynamic demands of businesses across the Middle East and Africa. With a commitment to reliability, speed, and cost-effectiveness, we ensure that your goods are transported safely and on time.
            </p>

            <button className=" bg-emerald-500 sm:w-3/12 lg:w-auto w-1/2 hover:bg-Secondary-2/70 hover:drop-shadow-xl p-4 rounded-md">
              CONTACT US
            </button> 
          </div>
        </div>
        
      </div>

      <div className='flex lg:flex-row flex-col lg:m-32 gap-32'>
              <div className=' lg:w-1/2  p-14 flex flex-col gap-4  p-4 rounded-xl justify-center'>
                <h2 className='text-5xl font-bold text-Primary-1/70'>Our Mission</h2>
                <p>Our mission is to enable seamless trade and commerce by providing innovative logistics solutions that enhance connectivity and reduce operational complexity. Through strategic partnerships and cutting-edge technology, we strive to optimize supply chains, ensuring our clients can focus on their core business activities.</p>
              </div>
              <div className=' lg:w-1/2 m-2'>
                <Image src="/images/shipping1.jpg" width={1000} height={1000} alt='shipping' />
              </div>
            </div>


      <div className='lg:py-20 lg:mx-20 md:m-10 m-8 flex flex-col sm:flex-row md:gap-4 bg-Primary-1/10 rounded-[20px]'>


      <div className='flex lg:w-1/2 p-8 items-center rounded-2xl'>
        <Image
                src="/images/copper-products.jpg"
                width={600}
                height={600}
                alt="copper image"
              />
        </div>

        <div className='lg:w-1/2  lg:p-20 p-4 m-2 gap-8 flex flex-col justify-center'>
          <div className='flex gap-4 flex-col dark:text-gray-700'>
            <h2 className='text-5xl font-bold lg:text-left text-center'>Core Services</h2>
            
            <ul className='list-disc p-2 mx-2'>
                   <li ><span className='font-bold py-2 '>Freight Transportation:  </span> <span className='text-sm'>We offer air, sea &#40;FCL & LCL&#41;, and land freight services to move goods worldwide efficiently.</span></li>
                   <li><span className='font-bold py-2'>Warehousing & Distribution: </span> <span className='text-sm'>We provide state-of-the-art storage solutions, inventory management, and temperature-controlled storage. </span></li>
                   <li ><span className='font-bold py-2'>Customs Clearance: </span> <span className='text-sm'>We assist with documentation, tariffs, and compliance to make your shipments smoother.</span></li>
                   <li><span className='font-bold py-2'>Supply Chain Solutions : </span> <span className='text-sm'>Our services include integrated management, real-time tracking, and vendor coordination.</span></li>
                   <li><span className='font-bold py-2'>Specialized Cargo Services : </span> <span className='text-sm'>We handle oversized goods, hazardous materials, and provide custom packaging solutions.</span></li>
                   <li><span className='font-bold py-2'>E-commerce Logistics : </span> <span className='text-sm'>We offer last-mile delivery, platform integration, and reverse logistics for e-commerce businesses.</span></li>
                 </ul>
          </div>          
        </div>
        

        

        
      </div>
      

      <div className='md:m-20 m-8 flex flex-col sm:flex-row md:gap-4 rounded-xl '>        

        

        <div className='md:p-20 p-4 m-2 gap-4 md:w-1/2 flex flex-col justify-center'>
          <h2 className='text-5xl font-bold md:text-left text-center'>Industries We Serve</h2>
          
          <ul className='list-disc p-2 mx-2'>
                   <li ><span className='font-bold py-2 '>Healthcare:  </span> <span className='text-sm'>Secure transportation of medical equipment and pharmaceuticals for healthcare providers.</span></li>
                   <li><span className='font-bold py-2'>Construction: </span> <span className='text-sm'>Efficient delivery of raw materials and heavy machinery to construction sites. </span></li>
                   <li ><span className='font-bold py-2'>Retail & E-commerce: </span> <span className='text-sm'>Providing warehousing solutions and last-mile delivery for retail and e-commerce businesses.</span></li>
                   <li><span className='font-bold py-2'>Automotive: </span> <span className='text-sm'>Shipping of parts and finished vehicles for automotive industry players.</span></li>
                   <li><span className='font-bold py-2'>FMCG: </span> <span className='text-sm'>Efficient transportation and distribution of fast-moving consumer goods.</span></li>
                   
                 </ul>
        </div>

        <div className='lg:my-20 p-4 m-2 md:w-1/2'>
         <Image src="/images/resize-sorting-metal.png" width={961} height={761} alt="copper"/>
        </div>
      </div>

      <div className='md:m-20 m-8 flex flex-col sm:flex-row md:gap-4 rounded-xl bg-white rounded-2xl dark:text-gray-700'>  

        <div className='p-4 m-2 md:w-1/2 flex items-center justify-center'>
         <Image src="/images/ev-car.jpg" width={961} height={761} alt="copper"/>
        </div>     

        <div className='md:p-20 lg:py-20 p-4 m-2 gap-4 md:w-1/2 flex flex-col justify-center'>
          <h2 className='text-5xl font-bold md:text-left text-center'>Why Choose ZenCorp Shipping & Logistics?</h2>          
          <div className='p-4 bg-white rounded-2xl'>
                 <ul className='list-disc p-2 mx-2' >             
                   <li><span className='font-bold py-2'>Global Network:   </span> <span className='text-sm'>Partnerships with carriers, ports, and warehouses for seamless connectivity.</span></li>
                   <li><span className='font-bold py-2'>Technology-Driven Solutions: </span> <span className='text-sm'>Real-time tracking and data-driven insights for optimization.</span></li>
                   <li><span className='font-bold py-2'>Tailored Services:  </span> <span className='text-sm'>Customizable logistics plans for businesses of all sizes.</span></li>
                   <li><span className='font-bold py-2'>Sustainability Commitment:  </span> <span className='text-sm'>Eco-friendly logistics practices and packaging.</span></li>
                   <li><span className='font-bold py-2'>24/7 Support:  </span> <span className='text-sm'>Dedicated team for issue resolution and proactive communication.</span></li>
                   
                 </ul> 
                 </div>
        </div>     

        

        
      </div>

      <div className=" rounded-2xl min-v-screen bg-cover bg-center bg-no-repeat rounded-bl-[100px]"
        style={{ backgroundImage: `url("${dynamicImage}")` }}>
          
        <div className='py-12 lg:p-32 px-6 p-20 backdrop-blur-xl bg-gradient-to-b from-Secondary-2/60/[.2] via-Secondary-2/80/[.6] to-black rounded-bl-[100px]'>

          <h2 className="text-5xl font-bold text-center mb-6">How We Add Value</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="flex flex-col items-center py-32 px-12 border border-gray-200 rounded-lg gap-6">
              <h3 className="font-semibold text-xl">Cost Efficiency</h3>
              <p className="text-center">Optimized logistics solutions to reduce expenses.</p>
            </div>
            <div className="flex flex-col items-center py-32 px-12 border border-gray-200 rounded-lg gap-6">
              <h3 className="font-semibold text-xl">Reliability</h3>
              <p className="text-center">Timely and secure delivery of goods.</p>
            </div>
            <div className="flex flex-col items-center py-32 px-12 border border-gray-200 rounded-lg gap-6">
              <h3 className="font-semibold text-xl">Scalability</h3>
              <p className="text-center">Flexible services to grow with your business.</p>
            </div>
          </div>
        </div>
      </div>

      <div className='md:m-20 m-8 flex flex-col sm:flex-row md:gap-4 '>        

        

        <div className='md:p-20 p-4 m-2 gap-4 md:w-1/2 flex flex-col justify-center leading-10'>
        <h2 className='text-5xl md:text-left text-center font-bold'>Our Process</h2>
           

          <ul className='list-disc p-2 mx-2' >             
                   <li><span className='font-bold py-2'>Consultation:   </span> <span className='text-sm'>Understanding your logistics requirements and business goals.</span></li>
                   <li><span className='font-bold py-2'>Planning: </span> <span className='text-sm'>Designing a customized logistics plan.</span></li>
                   <li><span className='font-bold py-2'>Implementation:  </span> <span className='text-sm'>Executing the plan with attention to detail.</span></li>
                   <li><span className='font-bold py-2'>Monitoring:  </span> <span className='text-sm'>Real-time updates and performance tracking.</span></li>
                   <li><span className='font-bold py-2'>Optimization:  </span> <span className='text-sm'>Refining logistics operations for maximum efficiency.</span></li>
                   
                 </ul> 
        </div>

        <div className='p-4 m-2 flex items-center md:w-1/2'>
         <Image src="/images/africa-map.jpg" width={961} height={761} alt="copper"/>
        </div>

        
      </div>


      <div className=' flex items-center bg-Secondary-2/20 justify-center '>
         <Image src="/images/african-women-laptop1.jpg" width={1600} height={300} alt="copper"/>
        </div>  

      
      <div className='flex justify-center'>
      {/**<button type='button' className='px-8 py-4 m-2 bg-Primary-1/70 rounded-md text-center text-Primary-1/10 hover:bg-Secondary-2/70'>Learn More</button> */}
      </div>
    <Footer/>
    </div>
  )
}

export default page