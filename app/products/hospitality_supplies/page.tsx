import React from 'react'

import Footer from '@/app/components/Footer';
import Navbarwhite from '@/app/components/Navbarwhite';
const dynamicImage = "/images/hospitality_services.jpg";

import Image from 'next/image';

const page = () => {
  return (
    <div>
      <div
        className="min-v-screen bg-cover bg-center bg-no-repeat rounded-bl-[100px]"
        style={{ backgroundImage: `url("${dynamicImage}")` }}
      >
        <Navbarwhite />
        <div className='backdrop-blur-sm bg-gradient-to-b from-Secondary-2/60/[.2] via-Secondary-2/80/[.6] to-black rounded-bl-[100px]'>
          
          <div className="flex flex-col lg:justify-start justify-center items-center lg:items-start my-32 lg:m-24 lg:my-0 lg:py-60 p-6 lg:pb-28 text-white gap-22">
            <h1 className="text-5xl md:text-6xl leading-36 my-4 text-center sm:text-left">
              Hospitality<b> Supplies</b> <br />
              
            </h1>
            <p className="text-xl leading-24 my-4 font-normal text-center lg:text-left">
            Elevate Hospitality Excellence
            </p>
            <p className='lg:mr-80 lg:text-left text-center'>Welcome to Zencorp Trading's Hospitality Supplies, your one-stop destination for premium-quality products designed to elevate guest experiences and streamline operations in the hospitality industry. Whether you're managing a luxury hotel, an intimate boutique resort, or a bustling restaurant, our curated collection of hospitality supplies ensures your establishment meets the highest standards of comfort, efficiency, and elegance.</p>
            <br></br>
            <button className=" bg-emerald-500 sm:w-3/12 lg:w-auto w-1/2 hover:bg-Secondary-2/70 hover:drop-shadow-xl p-4 rounded-md">
              CONTACT US
            </button>            
          </div>
        </div>

        
      </div>

      <div className='flex lg:flex-row flex-col lg:gap-20 lg:m-20 items-center  justify-center'>
          <div className='lg:w-1/2 '>
          <div className='flex flex-col gap-4 p-12'>
          <p className='font-normal text-sm text-accent-3/30 '>Products & Services</p>
          <h2 className='font-bold text-4xl md:text-5xl dark:text-white text-accent-3/100'>Why Choose Zencorp Trading for <span className='text-Primary-1/70 underline'>Hospitality </span> Supplies?</h2>
          <p className='font-thin text-xl text-accent-3/30 '>Quality, Customization, and Sustainability Tailored for Exceptional Hospitality</p>
          <p className='font-normal text-2xl text-accent-3/70 '>Why Choose Zencorp Trading for Hospitality Supplies?</p>
          <ul className='list-disc text-md list-outside ps-4'>
            <li className='text-sm'><span className='font-bold '> Uncompromising Quality: </span> <span className='text-gray-400'>Partnering with trusted manufacturers, we ensure durable and reliable products meet global standards.</span></li>
            <li className='text-sm'><span className='font-bold '> Diverse Product Range: </span> <span className='text-gray-400'>From room essentials to food service equipment, our inventory is tailored to the unique needs of the hospitality sector.</span></li>
            <li className='text-sm'><span className='font-bold '> Custom Solutions: </span> <span className='text-gray-400'>Tailor your supplies to match your brand identity with customizable options for linens, uniforms, and more.</span></li>
            <li className='text-sm'><span className='font-bold '> Competitive Pricing: </span> <span className='text-gray-400'>We combine affordability with quality, ensuring you get the best value for your investment.</span></li>
            <li className='text-sm'><span className='font-bold '> Sustainability Focus: </span> <span className='text-gray-400'>Many of our products are eco-friendly, supporting your sustainability goals without compromising on performance or aesthetics.</span></li>
          </ul>
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

      <div className='md:m-10 m-8 flex flex-col sm:flex-row md:gap-4 bg-Primary-1/10 rounded-[20px] dark:text-gray-800'>
        <div className='md:p-20 p-4 m-2 gap-8 flex flex-col justify-center'>
          <div className='flex gap-4 flex-col'>
            <h2 className='text-5xl font-bold lg:text-left text-center'>Our Product Portfolio</h2>
            
          </div>

          <div className='flex lg:flex-row flex-col gap-8 leading-6 '>
            
            
          <div className='flex lg:flex-col flex-col gap-10 '>
            <div className='flex lg:flex-row gap-8 '>
            <div className='flex flex-col lg:w-1/2  bg-Secondary-2/10  p-4 rounded-2xl '>
              <div className='lg:p-2'> 
                <p className='text-xl text-left font-bold py-3'>1. Guest Room Essentials</p>
                <p>Create a sanctuary of comfort for your guests with our thoughtfully designed room supplies: </p>
                <hr></hr>
                   <br />
                
                <div >
                 <ul className='list-disc p-2 mx-2'>             
                   <li><span className='font-bold '>Bedding & Linens: </span><span className='text-sm'>Luxurious sheets, duvets, pillowcases, and mattress protectors.</span></li>
                   <br />
                   <hr></hr>
                   <br />
                   <li><span className='font-bold'>Bath Accessories: </span><span className='text-sm'>Plush towels, bathrobes, slippers, and high-quality toiletries.</span></li>
                   <br />
                   <hr></hr>
                   <br />
                  <li><span className='font-bold'>Decor & Furnishings: </span><span className='text-sm'>Curtains, cushions, and elegant furniture that enhance your room's ambiance.</span></li>
                                  
                 </ul> 
                 </div>
                 
              </div>             
            </div>

            <div className='flex flex-col lg:w-1/2 bg-Primary-1/20 p-4 rounded-2xl '>
              <div className='lg:p-2'> 
                <p className='text-xl text-left font-bold py-3'>2. Food & Beverage Supplies</p>
                <p>Equip your dining areas and kitchens with premium products that cater to your guests' culinary experiences:</p>
                <hr></hr>
                   <br />
                
                <div >
                 <ul className='list-disc p-2 mx-2'>             
                 
                 
                   
                <li><span className='font-bold'>Tableware: </span><span className='text-sm'>Durable and stylish plates, glasses, cutlery, and serving dishes.</span></li>
                <br />
                   <hr></hr>
                   <br />
                 <li><span className='font-bold'>Kitchen Tools & Appliances: </span><span className='text-sm'>Professional-grade cookware, utensils, and equipment.</span></li>  
                 <br />
                   <hr></hr>
                   <br />
                 <li><span className='font-bold'>Bar Supplies: </span><span className='text-sm'>Cocktail shakers, ice buckets, and wine accessories.</span></li>
                 <br />
                   <hr></hr>
                   <br />
                 <li><span className='font-bold'>Packaging:  </span><span className='text-sm'>Eco-friendly takeaway containers and customizable packaging solutions.</span></li>                              
                 </ul> 
                 </div>
                 
              </div>             
            </div>
            </div>
            <div className='flex lg:flex-row gap-8 '>
            <div className='flex flex-col lg:w-1/2 bg-Secondary-2/10 p-4 rounded-2xl '>
              <div className='lg:p-2'> 
                <p className='text-xl text-left font-bold py-3'>3. Cleaning & Maintenance Suppliess</p>
                <p>Maintain pristine environments with our efficient cleaning solutions:</p>
                
                   <hr></hr>
                   <br />
                
                <div >
                 <ul className='list-disc p-2 mx-2'>             
                 <li><span className='font-bold'>Paints and Coatings: </span><span className='text-sm'>Cleaning carts, mops, and vacuum cleaners.</span></li>
                 <br />
                   <hr></hr>
                   <br />
                 <li><span className='font-bold'>Cleaning Products: </span><span className='text-sm'>Environmentally friendly detergents and sanitizers.</span></li>
                 <br />
                   <hr></hr>
                   <br />
                 <li><span className='font-bold'>Waste Management: </span><span className='text-sm'>Trash bins and recycling solutions.</span></li>
                                    
                 </ul> 
                 </div>
                 
              </div>             
            </div>

            <div className='flex flex-col lg:w-1/2 bg-Primary-1/20 p-4 rounded-2xl '>
              <div className='lg:p-2'> 
                <p className='text-xl text-left font-bold py-3'>4. Front Desk & Lobby Supplies</p>
                <p>Ensure seamless guest interactions with high-quality reception essentials:</p>
                <hr></hr>
                   <br />
                <div >
                 <ul className='list-disc p-2 mx-2'>             
                 <li><span className='font-bold'>Signage & Displays: </span><span className='text-sm'>Clear and professional signs, menus, and digital displays.</span></li>
                 <br />
                   <hr></hr>
                   <br />
                 <li><span className='font-bold'>Stationery: </span><span className='text-sm'>Custom-branded pens, notepads, and brochures.</span></li>
                 <br />
                   <hr></hr>
                   <br />
                 <li><span className='font-bold'>Waiting Area Furnishings:  </span><span className='text-sm'>Comfortable seating, decorative plants, and lighting solutions.</span></li>
                 <br />
                   <hr></hr>
                   <br />
                 
                                    
                 </ul> 
                 </div>
                 
              </div>             
            </div>

            <div className='flex flex-col lg:w-1/2 bg-Secondary-2/10 p-4 rounded-2xl '>
              <div className='lg:p-2'> 
                <p className='text-xl text-left font-bold py-3'>5. Uniforms & Staff Supplies</p>
                <p>Present a cohesive and professional image with our range of staff attire:</p>
                <hr></hr>
                   <br />
                <div >
                 <ul className='list-disc p-2 mx-2'>             
                 <li><span className='font-bold'>Uniforms:  </span><span className='text-sm'>Stylish and functional uniforms for housekeeping, kitchen, and front office staff.</span></li>
                 <br />
                   <hr></hr>
                   <br />
                 <li><span className='font-bold'>Name Badges:   </span><span className='text-sm'>Personalized name tags for clear identification.</span></li>
                 <br />
                   <hr></hr>
                   <br />
                 <li><span className='font-bold'>Shoes & Accessories:   </span><span className='text-sm'>Comfortable and durable options for long shifts.</span></li>
                
                 </ul> 
                 </div>
                 
              </div>             
            </div>
            </div>
             


            

          </div>
          </div>
        </div>

        

        
      </div>


      
      

      

      <div className='md:m-20 m-8 flex flex-col sm:flex-row md:gap-4 rounded-xl bg-white rounded-2xl dark:text-gray-600 '>   

        <div className='md:p-20 p-4 m-2 gap-4 md:w-1/2 flex flex-col justify-center'>
          <h2 className='text-5xl font-bold md:text-left text-center'>Industries We Serve</h2>
          
          <p className='md:text-left text-center'>Our hospitality supplies cater to a wide range of businesses, including:</p>
          <div className='p-4 bg-white rounded-2xl'>
                 <ul className='list-disc p-2 mx-2' >             
                   <li><span className='font-bold py-2'>Hotels and Resorts   </span> </li>
                   <li><span className='font-bold py-2'>Restaurants and Cafés </span> </li>
                   <li><span className='font-bold py-2'>Event Venues and Banquet Halls  </span> </li>
                   <li><span className='font-bold py-2'>Spas and Wellness Centers  </span> </li>
                   <li><span className='font-bold py-2'>Cruise Ships  </span> </li>
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
        <p>At Zencorp Trading, we’re committed to being more than just a supplier. We aim to be your partner in success, helping you deliver unforgettable guest experiences.</p>
        <p>Ready to enhance your operations with top-tier hospitality supplies? Contact us today for a personalized consultation or to request a product catalog. Let us help you take your business to the next level.</p>
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

      
      <div className='flex justify-center'>
      {/**<button type='button' className='px-8 py-4 m-2 bg-Primary-1/70 rounded-md text-center text-Primary-1/10 hover:bg-Secondary-2/70'>Learn More</button> */}
      </div>

      



    <Footer/>
    </div>
  )
}

export default page