import React from 'react'

import Footer from '@/app/components/Footer';
import Navbarwhite from '@/app/components/Navbarwhite';
const dynamicImage = "/images/fmcg.jpg";

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
          
          <div className="lg:w-1/2 flex flex-col lg:justify-start justify-center items-center lg:items-start py-32 lg:m-24  lg:my-0 lg:py-60 p-6 lg:pb-28 text-white gap-22">
            <h1 className="text-5xl md:text-6xl leading-36 my-4 text-center sm:text-left">
              <b>Your FMCG Partner of Choice </b> <span className='text-3xl'> &#40;Fast-Moving Consumer Goods&#41;</span> <br />
              
            </h1>
            <p className="text-xl leading-24 my-4 font-normal text-center lg:text-left">
            High-Quality Consumer Goods Delivered with Excellence and Efficiency
            </p>
            <p className=' lg:text-left text-center'>Welcome to Zencorp Trading's FMCG Division, your trusted partner for sourcing high-quality, fast-moving consumer goods. From essential daily items to premium packaged goods, we offer a wide range of FMCG products tailored to meet the needs of retailers, wholesalers, and distributors. With an emphasis on quality, affordability, and timely delivery, we ensure your business stays competitive and your customers stay satisfied.</p>
            <br></br>
            <button className=" bg-emerald-500 sm:w-3/12 lg:w-auto w-1/2 hover:bg-Secondary-2/70 hover:drop-shadow-xl p-4 rounded-md">
              CONTACT US
            </button>            
          </div>
        </div>
        <div className='lg:w-1/2 lg:hidden'></div>

        
      </div>

      <div className='flex lg:flex-row flex-col lg:gap-20 lg:m-20 items-center  justify-center'>
                <div className='lg:w-1/2 '>
                <div className='flex flex-col gap-4 p-12'>
                <p className='font-normal text-sm text-accent-3/30 '>Products & Services</p>
                <h2 className='font-bold text-4xl md:text-5xl dark:text-white text-accent-3/100'>Your Trusted <span className='text-Primary-1/70 underline'>FMCG </span> Partner</h2>
                <p className='font-thin text-xl text-accent-3/30 '>Quality, Affordability, and Efficiency Tailored to Your Business Needs</p>
                <p className='font-normal text-2xl text-accent-3/70 '>Why Choose Zencorp Trading for FMCG Solutions?</p>
                <ul className='list-disc text-md list-outside ps-4'>
                  <li className='text-sm py-2'><span className='font-bold '> Wide Product Portfolio: </span> <span className='text-gray-400'>Extensive selection of FMCG products, including food, beverages, personal care, and household essentials from trusted brands.</span></li>
                  <li className='text-sm py-2'><span className='font-bold '> Commitment to Quality: </span> <span className='text-gray-400'>Every product meets international quality and safety standards, ensuring reliability and customer satisfaction.</span></li>
                  <li className='text-sm py-2'><span className='font-bold '> Competitive Pricing: </span> <span className='text-gray-400'>Strategic partnerships allow us to offer unbeatable prices without compromising on quality.</span></li>
                  <li className='text-sm py-2'><span className='font-bold '> Customizable Solutions: </span> <span className='text-gray-400'>Tailored product offerings, packaging, and branding to align with your business requirements.</span></li>
                  <li className='text-sm py-2'><span className='font-bold '> Efficient Supply Chain: </span> <span className='text-gray-400'>Streamlined logistics ensure timely delivery to keep your operations running smoothly.</span></li>
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
            <h2 className='text-5xl font-bold lg:text-left text-center'>Our FMCG Categories</h2>
            
          </div>

          <div className='flex lg:flex-row flex-col gap-8 leading-6 '>
            
            
          <div className='flex lg:flex-col flex-col gap-10 '>
            <div className='flex lg:flex-row gap-8 '>
            <div className='flex flex-col lg:w-1/2  bg-Secondary-2/10  p-4 rounded-2xl '>
              <div className='lg:p-2'> 
                <p className='text-xl text-left font-bold py-3'>1. Food & Beverages</p>
                <p>We supply a wide range of consumables that cater to diverse consumer preferences: </p>
                <hr></hr>
                   <br />
                
                <div >
                 <ul className='list-disc p-2 mx-2'>             
                   <li><span className='font-bold '>Packaged Foods: </span><span className='text-sm'>Biscuits, snacks, cereals, and ready-to-eat meals.</span></li>
                   <br />
                   <hr></hr>
                   <br />
                   <li><span className='font-bold'>Beverages: </span><span className='text-sm'>Juices, soft drinks, tea, coffee, and bottled water.</span></li>
                   <br />
                   <hr></hr>
                   <br />
                  <li><span className='font-bold'>Dairy Products: </span><span className='text-sm'>Milk, cheese, butter, and yogurt.</span></li>
                  <br />
                   <hr></hr>
                   <br />
                  <li><span className='font-bold'>Canned Goods: </span><span className='text-sm'>Vegetables, fruits, fish, and meat.</span></li><br />
                   <hr></hr>
                   <br />
                  <li><span className='font-bold'>Spices & Condiments: </span><span className='text-sm'>High-quality spices, sauces, and spreads.</span></li>
                                  
                 </ul> 
                 </div>
                 
              </div>             
            </div>

            <div className='flex flex-col lg:w-1/2 bg-Primary-1/20 p-4 rounded-2xl '>
              <div className='lg:p-2'> 
                <p className='text-xl text-left font-bold py-3'>2. Personal Care Products</p>
                <p>Enhance your customers' daily routines with premium personal care items:</p>
                <hr></hr>
                   <br />
                
                <div >
                 <ul className='list-disc p-2 mx-2'>             
                 
                 
                   
                <li><span className='font-bold'>Skin Care: </span><span className='text-sm'>Lotions, creams, soaps, and sunscreens.</span></li>
                <br />
                   <hr></hr>
                   <br />
                 <li><span className='font-bold'>Kitchen Tools & Appliances: </span><span className='text-sm'>Shampoos, conditioners, hair oils, and styling products.</span></li>  
                 <br />
                   <hr></hr>
                   <br />
                 <li><span className='font-bold'>Bar Supplies: </span><span className='text-sm'>Toothpaste, toothbrushes, and mouthwashes.</span></li>
                 <br />
                   <hr></hr>
                   <br />
                 <li><span className='font-bold'>Packaging:  </span><span className='text-sm'>Sanitary napkins, wipes, and deodorants.</span></li>                              
                 </ul> 
                 </div>
                 
              </div>             
            </div>
            </div>
            <div className='flex lg:flex-row gap-8 '>
            <div className='flex flex-col lg:w-1/2 bg-Secondary-2/10 p-4 rounded-2xl '>
              <div className='lg:p-2'> 
                <p className='text-xl text-left font-bold py-3'>3. Household Essentials</p>
                <p>Equip households with trusted cleaning and maintenance products:</p>
                
                   <hr></hr>
                   <br />
                
                <div >
                 <ul className='list-disc p-2 mx-2'>             
                 <li><span className='font-bold'>Cleaning Supplies: </span><span className='text-sm'>Cleaning carts, mops, and vacuum cleaners.</span></li>
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

        <div className='md:p-20 p-4 m-2 gap-4 md:w-1/2 flex flex-col justify-center dark:text-gray-800'>
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