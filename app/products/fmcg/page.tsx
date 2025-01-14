import React from 'react'

import Footer from '@/app/components/Footer';
import Navbar from '@/app/components/Navbar';
const dynamicImage = "/images/fmcg.jpg";

import Image from 'next/image';

const page = () => {
  return (
    <div>
      <div
        className="min-v-screen bg-cover bg-center bg-no-repeat rounded-bl-[100px]"
        style={{ backgroundImage: `url("${dynamicImage}")` }}
      >
        <Navbar />
        <div className='backdrop-blur-sm bg-gradient-to-b from-Secondary-2/60/[.2] via-Secondary-2/80/[.6] to-black rounded-bl-[100px]'>
          
          <div className="lg:w-1/2 flex flex-col lg:justify-start justify-center items-center lg:items-start py-32 lg:m-24  lg:my-0 lg:py-60 p-6 lg:pb-28 text-white gap-22">
            <h1 className="text-5xl md:text-6xl leading-36 my-4 text-center sm:text-left">
              <b>Your FMCG Partner of Choice </b> <span className='text-3xl'> &#40;Fast-Moving Consumer Goods&#41;</span> <br />
              
            </h1>
            <p className="text-xl leading-24 my-4 font-normal text-center lg:text-left">
            High-Quality Consumer Goods Delivered with Excellence and Efficiency
            </p>
            <p className=' lg:text-left text-center'>Welcome to Zencorp Trading&apos;s FMCG Division, your trusted partner for sourcing high-quality, fast-moving consumer goods. From essential daily items to premium packaged goods, we offer a wide range of FMCG products tailored to meet the needs of retailers, wholesalers, and distributors. With an emphasis on quality, affordability, and timely delivery, we ensure your business stays competitive and your customers stay satisfied.</p>
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
                <p>Enhance your customers&apos; daily routines with premium personal care items:</p>
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
                 <li><span className='font-bold'>Paper Products: </span><span className='text-sm'>Tissue rolls, paper towels, and napkins.</span></li>
                 <br />
                   <hr></hr>
                   <br />
                 <li><span className='font-bold'>Air Fresheners: </span><span className='text-sm'>Sprays, plug-ins, and candles for fresh environments.</span></li>

                 <br />
                   <hr></hr>
                   <br />
                 <li><span className='font-bold'>Kitchen Supplies: </span><span className='text-sm'>Aluminum foil, cling film, and storage bags.</span></li>
                 </ul> 
                 </div>
                 
              </div>             
            </div>

            <div className='flex flex-col lg:w-1/2 bg-Primary-1/20 p-4 rounded-2xl '>
              <div className='lg:p-2'> 
                <p className='text-xl text-left font-bold py-3'>4. Baby & Child Care</p>
                <p>Provide families with safe and reliable products for their little ones:</p>
                <hr></hr>
                   <br />
                <div >
                 <ul className='list-disc p-2 mx-2'>             
                 <li><span className='font-bold'>Baby Food: </span><span className='text-sm'>Formula, purees, and snacks.</span></li>
                 <br />
                   <hr></hr>
                   <br />
                 <li><span className='font-bold'>Baby Care Products: </span><span className='text-sm'>Diapers, wipes, powders, and lotions.</span></li>
                 <br />
                   <hr></hr>
                   <br />
                 <li><span className='font-bold'>Toys & Accessories:  </span><span className='text-sm'>Safe, educational, and engaging toys.</span></li>
                 <br />
                   <hr></hr>
                   <br />
                 </ul> 
                 </div>
                 
              </div>             
            </div>

            <div className='flex flex-col lg:w-1/2 bg-Secondary-2/10 p-4 rounded-2xl '>
              <div className='lg:p-2'> 
                <p className='text-xl text-left font-bold py-3'>5. Health & Wellness</p>
                <p>Support healthy lifestyles with our range of wellness products:</p>
                <hr></hr>
                   <br />
                <div >
                 <ul className='list-disc p-2 mx-2'>             
                 <li><span className='font-bold'>Vitamins & Supplements: </span><span className='text-sm'>Essential nutrients for all age groups.</span></li>
                 <br />
                   <hr></hr>
                   <br />
                 <li><span className='font-bold'>Health Drinks: </span><span className='text-sm'>Energy drinks, protein powders, and herbal teas.</span></li>
                 <br />
                   <hr></hr>
                   <br />
                 <li><span className='font-bold'>Over-the-Counter Products: </span><span className='text-sm'>Pain relievers, antiseptics, and first-aid supplies.</span></li>
                
                 </ul>
                 </div>
                 
              </div>             
            </div>
            </div>        
          </div>
          </div>
        </div>

        

        
      </div>
      

      

      <div className='md:m-20 m-8 flex flex-col sm:flex-row md:gap-4 rounded-xl bg-white rounded-2xl '>   

        <div className='md:p-20 p-4 m-2 gap-4 md:w-1/2 flex flex-col justify-center dark:text-gray-800'>
          <h2 className='text-5xl font-bold md:text-left text-center'>Industries We Serve</h2>
          
          <p className='md:text-left text-center'>Our FMCG products cater to a wide range of businesses, including:</p>
          <div className='p-4 bg-white rounded-2xl'>
                 <ul className='list-disc p-2 mx-2'>
                   <li><span className='font-bold py-2'>Supermarkets and Hypermarkets  </span> </li>
                   <li><span className='font-bold py-2'>Convenience Stores </span></li>
                   <li><span className='font-bold py-2'>Wholesalers and Distributors  </span> </li>
                   <li><span className='font-bold py-2'>Online Retailers  </span> </li>
                   <li><span className='font-bold py-2'>Cafés and Restaurants  </span> </li>
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
        <h2 className='text-5xl md:text-left text-center font-bold'>Why FMCG Matters to Your Business</h2>
        <p>Fast-moving consumer goods are essential for daily life and play a vital role in driving consumer loyalty and satisfaction. With Zencorp Trading as your FMCG partner, you gain access to a steady supply of products that match evolving market demands, ensuring your business stays ahead of the competition.</p>
        </div>

        
      </div>


      <div className=' flex items-center bg-Secondary-2/20 justify-center '>
         <Image src="/images/african-women-laptop1.jpg" width={1600} height={300} alt="copper"/>
        </div>  

      <div className='md:m-20 m-8 flex flex-col sm:flex-row md:gap-4 rounded-xl '>

        <div className='md:p-20 p-4 m-2 gap-4 md:w-1/2 flex flex-col justify-center'>
          <h2 className='text-5xl font-bold md:text-left text-center'>Partner With Us</h2>
          <p className='md:text-left text-center '>At Zencorp Trading, we understand the dynamic nature of the FMCG market. We work closely with you to understand your specific requirements and deliver solutions that add value to your business.</p>
          <p className='md:text-left text-center '> Whether you&#41;re looking to expand your product range or optimize your supply chain, Zencorp Trading is here to help. Let us be your partner in growth and success.</p>
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