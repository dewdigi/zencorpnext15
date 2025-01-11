import React from 'react'

import Footer from '@/app/components/Footer';
import Navbarwhite from '@/app/components/Navbarwhite';
const dynamicImage = "/images/medical.jpg";

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
          <div className="flex flex-col lg:justify-start justify-center items-center lg:items-start my-0 py-32 lg:m-24 lg:my-0 lg:py-60 p-6 lg:pb-28 text-white gap-22">
            <h1 className="text-5xl md:text-6xl leading-36 my-4 text-center sm:text-left">
              Healthcare Accessibility <b> & Equipment</b> <br />
              
            </h1>
            <p className="text-xl leading-24 my-4 font-normal text-center lg:text-left">
            Bridging Healthcare Gaps in Africa & the Middle East with Reliable Solutions
            </p>
            <p className='lg:mr-80 lg:text-left text-center'>At ZenCorp Trading Co. LLC, we are committed to improving healthcare accessibility in Africa and the Middle East. With a vision to bridge the gap in healthcare infrastructure, we provide high-quality medical equipment and essential healthcare supplies to regions where they are needed most. Our solutions are tailored to meet the unique needs of healthcare providers, ensuring that communities gain access to reliable and life-saving medical resources.</p>
            <br></br>
            <button className=" bg-emerald-500 sm:w-3/12 lg:w-auto w-1/2 hover:bg-Secondary-2/70 hover:drop-shadow-xl p-4 rounded-md">
              CONTACT US
            </button>            
          </div>
        </div>
        
      </div>

      <div className='flex lg:flex-row flex-col lg:gap-20 lg:my-40 lg:mx-20 items-center  justify-center'>
          <div className='lg:w-1/2'>
          <div className='flex flex-col gap-8 p-12'>
          <p className='font-normal text-sm text-accent-3/30 '>Mission</p>
          <h2 className='font-bold text-3xl md:text-5xl dark:text-white text-accent-3/100'>Empowering <span className='text-Primary-1/70 underline'>Healthcare</span> Systems</h2>
          <p className='font-thin text-sm text-accent-3/30 '>Enhancing healthcare with innovative solutions for Africa and the Middle East.</p>
          </div>
          
          <div className=' px-10 lg:px-12'> <p className='font-normal text-md text-accent-3/70 '>We aim to enhance healthcare delivery by supplying innovative and essential medical products that empower hospitals, clinics, and healthcare organizations. By addressing critical healthcare challenges, we strive to create healthier communities and support the development of robust healthcare systems across Africa and the Middle East.</p>
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
            <h2 className='text-5xl font-bold lg:text-left text-center'>Products We Supply</h2>
            <h4 className='text-xl lg:text-left text-center'>We specialize in the distribution of a wide range of medical equipment and supplies, including:</h4>
            <ul className='list-disc p-2 mx-2'>
                   <li ><span className='font-bold py-2 '>Diagnostic Equipment:  </span> <span className='text-sm'>X-Ray Machines, Ultrasound Systems, MRI and CT Scanners, Blood Testing Machines</span></li>
                   <li><span className='font-bold py-2'>Hospital and Clinic Essentials: </span> <span className='text-sm'>Hospital Beds and Furniture, Patient Monitors, Ventilators, Sterilization Equipment </span></li>
                   <li ><span className='font-bold py-2'>Surgical Instruments: </span> <span className='text-sm'>General Surgery Kits, Orthopedic Surgery Tools, Cardiovascular Surgical Instruments.</span></li>
                   <li><span className='font-bold py-2'>Personal Protective Equipment &#40;PPE&#41;: </span> <span className='text-sm'>Surgical Masks and Respirators, Medical Gloves, Protective Gowns and Face Shields</span></li>
                   <li><span className='font-bold py-2'>Consumables and Disposables : </span> <span className='text-sm'>Syringes and Needles, IV Bags and Tubing, Wound Care Products</span></li>
                   <li><span className='font-bold py-2'>Pharmaceutical Refrigeration : </span> <span className='text-sm'>Vaccine Storage Units, Blood Bank Refrigerators</span></li>
                 </ul>
          </div>          
        </div>
        

        

        
      </div>
      

      <div className='md:m-20 m-8 flex flex-col sm:flex-row md:gap-4 rounded-xl '>        

        

        <div className='md:p-20 p-4 m-2 gap-4 md:w-1/2 flex flex-col justify-center'>
          <h2 className='text-5xl font-bold md:text-left text-center'>Healthcare Services</h2>
          <p className='md:text-left text-center'>In addition to supplying medical equipment, we offer comprehensive services to ensure the effective deployment and use of our products:</p>
          <ul className='list-disc p-2 mx-2'>
                   <li ><span className='font-bold py-2 '>Logistics and Delivery:  </span> <span className='text-sm'>Efficient shipping across Africa and the Middle East, ensuring timely delivery even in remote locations.</span></li>
                   <li><span className='font-bold py-2'>Installation and Maintenance: </span> <span className='text-sm'>On-site installation and regular maintenance by our trained technicians. </span></li>
                   <li ><span className='font-bold py-2'>Training and Support: </span> <span className='text-sm'>Hands-on training for healthcare professionals on using advanced medical devices; 24/7 customer support to resolve technical issues.</span></li>
                   <li><span className='font-bold py-2'>Customized Solutions: </span> <span className='text-sm'>Tailored packages to meet the specific needs of hospitals, clinics, and NGOs operating in under-resourced areas.</span></li>
                   
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
          <h2 className='text-5xl font-bold md:text-left text-center'>Our Impact</h2>          
          <div className='p-4 bg-white rounded-2xl'>
                 <ul className='list-disc p-2 mx-2' >             
                   <li><span className='font-bold py-2'>Improved Healthcare Access:   </span> <span className='text-sm'>By delivering high-quality medical equipment, we empower healthcare providers to offer better diagnostic and treatment options.</span></li>
                   <li><span className='font-bold py-2'>Strengthened Health Systems: </span> <span className='text-sm'>Our products and services play a key role in building resilient healthcare infrastructures in underserved regions.</span></li>
                   <li><span className='font-bold py-2'>Saving Lives:  </span> <span className='text-sm'>From life-support equipment to diagnostic tools, our solutions ensure that patients receive timely and effective care.</span></li>
                   
                 </ul> 
                 </div>
        </div>     

        

        
      </div>

      <div className='md:m-20 m-8 flex flex-col sm:flex-row md:gap-4 '>        

        

        <div className='md:p-20 p-4 m-2 gap-4 md:w-1/2 flex flex-col justify-center'>
        <h2 className='text-5xl md:text-left text-center font-bold'>Why Choose Zencorp?</h2>
        <ul className='list-disc p-2 mx-2' >             
                   <li><span className='font-bold py-2'>Reliable Quality: </span> <span className='text-sm'>We partner with globally trusted manufacturers to ensure all products meet international standards.</span></li>
                   <li><span className='font-bold py-2'>Regional Expertise: </span> <span className='text-sm'>With extensive knowledge of the healthcare challenges in Africa and the Middle East, we offer solutions tailored to local needs.</span></li>
                   <li><span className='font-bold py-2'>Comprehensive Solutions:  </span> <span className='text-sm'>From supply to service, we provide end-to-end healthcare solutions.</span></li>
                   <li><span className='font-bold py-2'>Sustainability Focus:  </span> <span className='text-sm'>We aim to contribute to long-term health outcomes by offering durable, sustainable, and impactful products.</span></li>
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