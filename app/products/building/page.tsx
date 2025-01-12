import React from 'react'

import Footer from '@/app/components/Footer';
import Navbar from '@/app/components/Navbar';
const dynamicImage = "/images/building_materials.jpg";

import Image from 'next/image';

const page = () => {
  return (
    <div>
      <div
        className="min-v-screen bg-cover  bg-center bg-no-repeat rounded-bl-[100px]"
        style={{ backgroundImage: `url("${dynamicImage}")` }}
      >
        <Navbar />
        <div className='backdrop-blur-sm bg-gradient-to-b from-Secondary-2/60/[.2] via-Secondary-2/80/[.6] to-black rounded-bl-[100px]'>
          
          <div className="flex flex-col lg:justify-start justify-center items-center lg:items-start py-32 my-0 lg:m-24 lg:my-0 lg:py-60 p-6 lg:pb-28 text-white gap-22">
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

      <div className='flex lg:flex-row flex-col lg:gap-20 lg:m-20 items-center lg:py-20  justify-center'>
          <div className='lg:w-1/2'>
          <div className='flex flex-col gap-8 p-12 '>
          <p className='font-normal text-sm text-accent-3/30 '>Products & Services</p>
          <h2 className='font-bold text-3xl md:text-5xl dark:text-white  text-accent-3/100'>Why Choose <span className='text-Primary-1/70 underline'>Zencorp?</span>Building Materials</h2>
          
          </div>
          
          <div className=' px-10 lg:px-12'> 
          <ul className='list-disc font-normal text-md text-accent-3/70 dark:text-white px-2 leading-6'>
            <li className='dark:text-gray-400'><span className='font-bold dark:text-gray-300'>High-Quality Products:</span> Tested to meet industry standards for durability and reliability.</li>
            <li className='dark:text-gray-400'><span className='font-bold dark:text-gray-300'>Diverse Range:</span> Specialized tools and equipment for every construction need.</li>
            <li className='dark:text-gray-400'><span className='font-bold dark:text-gray-300'>Expert Guidance:</span> Tailored advice from professionals.</li>
            <li className='dark:text-gray-400'><span className='font-bold dark:text-gray-300'>Sustainability Focus:</span> Eco-friendly solutions to reduce waste and environmental impact.</li>
            <li className='dark:text-gray-400'><span className='font-bold dark:text-gray-300'>Affordable Pricing:</span> Premium quality at competitive prices.</li>
            
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

          <div className='flex lg:flex-row flex-col gap-8 leading-10 '>
            
            <div className='flex flex-col lg:w-1/2 bg-Primary-1/20 p-4 rounded-2xl '>
              <div className='lg:p-2 '> 
                <p className='text-xl text-left font-bold'>1. Concrete Equipment and Tools</p>
                
                <div >
                 <ul className='list-disc p-2 mx-2'>             
                   <li><span className='text-sm'>Mixers</span></li>
                   <li><span className='text-sm'>Vibrators</span></li>
                   <li><span className='text-sm'>Trowels</span></li>
                   <li><span className='text-sm'>Screeds</span></li>                   
                 </ul> 
                 </div>
                 
              </div>             
            </div>

            <div className='flex flex-col lg:w-1/2 bg-Secondary-2/10 p-4 rounded-2xl '>
              <div className='lg:p-2'> 
                <p className='text-xl text-left font-bold'>2. Hand Tools</p>
                
                <div >
                 <ul className='list-disc p-2 mx-2'>             
                   <li><span className='text-sm'>Hammers and Mallets</span></li>
                   <li><span className='text-sm'>Wrenches and Screwdrivers</span></li>
                   <li><span className='text-sm'>Measuring Tools</span></li>
                   <li><span className='text-sm'>Cutting Tools</span></li>                   
                 </ul> 
                 </div>
                 
              </div>             
            </div>

            <div className='flex flex-col lg:w-1/2 bg-Primary-1/20 p-4 rounded-2xl '>
              <div className='lg:p-2'> 
                <p className='text-xl text-left font-bold'>3. Masonry Equipment</p>
                
                <div >
                 <ul className='list-disc p-2 mx-2'>             
                   <li><span className='text-sm'>Brick Laying Tools</span></li>
                   <li><span className='text-sm'>Mortar Mixers</span></li>
                   <li><span className='text-sm'>Plastering Tools</span></li>
                   <li><span className='text-sm'>Scaffolding Systems</span></li>                   
                 </ul> 
                 </div>
                 
              </div>             
            </div>

            <div className='flex flex-col lg:w-1/2 bg-Secondary-2/10 p-4 rounded-2xl '>
              <div className='lg:p-2'> 
                <p className='text-xl text-left font-bold'>4. Ceiling Work Tools and Equipment</p>
                
                <div >
                 <ul className='list-disc p-2 mx-2'>             
                   <li><span className='text-sm'>Suspension Systems</span></li>
                   <li><span className='text-sm'>Drywall Tools</span></li>
                   <li><span className='text-sm'>Lifting Equipment</span></li>
                   <li><span className='text-sm'>Sanding Tools</span></li>                   
                 </ul> 
                 </div>
                 
              </div>             
            </div>

            <div className='flex flex-col lg:w-1/2 bg-Primary-1/20 p-4 rounded-2xl '>
              <div className='lg:p-2'> 
                <p className='text-xl text-left font-bold'>5. Electrical Tools and Equipment</p>
                
                <div >
                 <ul className='list-disc p-2 mx-2'>             
                   <li><span className='text-sm'>Cabling Tools</span></li>
                   <li><span className='text-sm'>Power Drills and Drivers</span></li>
                   <li><span className='text-sm'>Testing Devices</span></li>
                   <li><span className='text-sm'>Lighting Solutions</span></li>                   
                 </ul> 
                 </div>
                 
              </div>             
            </div>
             


            


          </div>

          <div className='flex lg:flex-row flex-col gap-8 '>
            
            <div className='flex flex-col lg:w-1/2  bg-Secondary-2/10  p-4 rounded-2xl '>
              <div className='lg:p-2'> 
                <p className='text-xl text-left font-bold py-3'>6. Flooring Products</p>
                <hr></hr>
                   <br />
                
                <div >
                 <ul className='list-disc p-2 mx-2'>             
                   <li><span className='font-bold '>Tiles: </span><span className='text-sm'>Ceramic, porcelain, and vinyl tiles.</span></li>
                   <br />
                   <hr></hr>
                   <br />
                   <li><span className='font-bold'>Adhesives and Grouts: </span><span className='text-sm'>High-strength bonding materials.</span></li>
                   <br />
                   <hr></hr>
                   <br />
                  <li><span className='font-bold'>Floor Preparation Tools: </span><span className='text-sm'>Levelers and underlayment solutions.</span></li>
                                  
                 </ul> 
                 </div>
                 
              </div>             
            </div>

            <div className='flex flex-col lg:w-1/2 bg-Primary-1/20 p-4 rounded-2xl '>
              <div className='lg:p-2'> 
                <p className='text-xl text-left font-bold py-3'>7. Sanitary Products</p>
                <hr></hr>
                   <br />
                
                <div >
                 <ul className='list-disc p-2 mx-2'>             
                 
                 
                   
                <li><span className='font-bold'>Fixtures: </span><span className='text-sm'>Wash basins, toilets, and urinals.</span></li>
                <br />
                   <hr></hr>
                   <br />
                 <li><span className='font-bold'>Faucets and Shower Systems: </span><span className='text-sm'>Durable and stylish options.</span></li>  
                 <br />
                   <hr></hr>
                   <br />
                 <li><span className='font-bold'>Plumbing Accessories: </span><span className='text-sm'>Pipes, fittings, and traps.</span></li>               
                 </ul> 
                 </div>
                 
              </div>             
            </div>

            <div className='flex flex-col lg:w-1/2 bg-Secondary-2/10 p-4 rounded-2xl '>
              <div className='lg:p-2'> 
                <p className='text-xl text-left font-bold py-3'>8. Finishing and Décor Products</p>
                
                   <hr></hr>
                   <br />
                
                <div >
                 <ul className='list-disc p-2 mx-2'>             
                 <li><span className='font-bold'>Paints and Coatings: </span><span className='text-sm'>Interior and exterior finishes.</span></li>
                 <br />
                   <hr></hr>
                   <br />
                 <li><span className='font-bold'>Wall Panels: </span><span className='text-sm'>Decorative and acoustic panels.</span></li>
                 <br />
                   <hr></hr>
                   <br />
                 <li><span className='font-bold'>Moldings and Trims: </span><span className='text-sm'>Stylish additions for any décor.</span></li>
                                    
                 </ul> 
                 </div>
                 
              </div>             
            </div>

            <div className='flex flex-col lg:w-1/2 bg-Primary-1/20 p-4 rounded-2xl '>
              <div className='lg:p-2'> 
                <p className='text-xl text-left font-bold py-3'>9. Plumbing Products</p>
                <hr></hr>
                   <br />
                <div >
                 <ul className='list-disc p-2 mx-2'>             
                 <li><span className='font-bold'>Pipes and Fittings: </span><span className='text-sm'>High-quality PVC, CPVC, and PPR pipes.</span></li>
                 <br />
                   <hr></hr>
                   <br />
                 <li><span className='font-bold'>Valves: </span><span className='text-sm'>Ball valves, gate valves, and check valves.</span></li>
                 <br />
                   <hr></hr>
                   <br />
                 <li><span className='font-bold'>Water Heaters:  </span><span className='text-sm'>Energy-efficient heaters for residential and commercial use.</span></li>
                 <br />
                   <hr></hr>
                   <br />
                 <li><span className='font-bold'>Pumps:  </span><span className='text-sm'>Submersible and pressure booster pumps.</span></li>
                                    
                 </ul> 
                 </div>
                 
              </div>             
            </div>

            <div className='flex flex-col lg:w-1/2 bg-Secondary-2/10 p-4 rounded-2xl '>
              <div className='lg:p-2'> 
                <p className='text-xl text-left font-bold py-3'>10. HVAC Products</p>
                <hr></hr>
                   <br />
                <div >
                 <ul className='list-disc p-2 mx-2'>             
                 <li><span className='font-bold'>Air Conditioning Systems:  </span><span className='text-sm'>Split, central, and ducted units.</span></li>
                 <br />
                   <hr></hr>
                   <br />
                 <li><span className='font-bold'>Ventilation Solutions:   </span><span className='text-sm'>Fans, exhaust systems, and ducts.</span></li>
                 <br />
                   <hr></hr>
                   <br />
                 <li><span className='font-bold'>Insulation Materials:   </span><span className='text-sm'>Thermal and acoustic insulation for HVAC systems.</span></li>
                 <br />
                   <hr></hr>
                   <br />
                 <li><span className='font-bold'>Thermostats and Controls:   </span><span className='text-sm'>Advanced controls for efficient climate management.</span></li>
                 
                 </ul> 
                 </div>
                 
              </div>             
            </div>
             


            


          </div>
        </div>

        

        
      </div>
      

      <div className='lg:mx-20 lg:my-40 m-8 flex flex-col sm:flex-row md:gap-2 rounded-xl '>        

        

        <div className='md:p-20 p-4 m-2 gap-4 md:w-1/2 flex flex-col justify-center'>
          <h2 className='text-5xl font-bold md:text-left text-center'>Prominent Brands We Supply</h2>
          <p className='md:text-left text-center'>Zencorp partners with globally trusted and renowned brands to deliver exceptional quality and reliability:</p>
        </div>

        <div className='flex flex-col gap-4'>

        <div className='flex flex-row gap-2'>
          <div className='bg-white p-10'> <Image src='/images/' width={40} height={40} alt='bosch'/></div>  <div  className='bg-white p-10'> <Image src='/images/' width={40} height={40} alt='bosch'/> </div> <div  className='bg-white p-10'><Image src='/images/' width={40} height={40} alt='bosch'/></div> <div  className='bg-white p-10'> <Image src='/images/' width={40} height={40} alt='bosch'/></div> <div  className='bg-white p-10'> <Image src='/images/' width={40} height={40} alt='bosch'/></div>
        </div>

        <div className='flex flex-row gap-2'>
          <div className='bg-white p-10'> <Image src='/images/' width={40} height={40} alt='bosch'/></div> <div  className='bg-white p-10'> <Image src='/images/' width={40} height={40} alt='bosch'/></div> <div  className='bg-white p-10'><Image src='/images/' width={40} height={40} alt='bosch'/></div> <div  className='bg-white p-10'><Image src='/images/' width={40} height={40} alt='bosch'/></div> <div  className='bg-white p-10'><Image src='/images/' width={40} height={40} alt='bosch'/></div>
        </div>

        <div className='flex flex-row gap-2'>
          <div className='bg-white p-10'><Image src='/images/' width={40} height={40} alt='bosch'/></div> <div  className='bg-white p-10'><Image src='/images/' width={40} height={40} alt='bosch'/></div> <div  className='bg-white p-10'><Image src='/images/' width={40} height={40} alt='bosch'/></div> <div  className='bg-white p-10'><Image src='/images/' width={40} height={40} alt='bosch'/></div> <div  className='bg-white p-10'><Image src='/images/' width={40} height={40} alt='bosch'/></div>
        </div>

        </div>

        
      </div>

      <div className='md:m-20 m-8 flex flex-col sm:flex-row md:gap-4 rounded-xl bg-white rounded-2xl dark:text-gray-800 '>   

        <div className='md:p-20 p-4 m-2 gap-4 md:w-1/2 flex flex-col justify-center'>
          <h2 className='text-5xl font-bold md:text-left text-center'>Industries We Serve</h2>
          
          <p className='md:text-left text-center'>Zencorp supplies copper products to a wide range of sectors, including:</p>
          <div className='p-4 bg-white rounded-2xl'>
                 <ul className='list-disc p-2 mx-2' >             
                   <li><span className='font-bold py-2'>Residential Construction:   </span> <span className='text-sm'>For durable and elegant homes.</span></li>
                   <li><span className='font-bold py-2'>Commercial Projects: </span> <span className='text-sm'>Reliable tools for complex needs.</span></li>
                   <li><span className='font-bold py-2'>Industrial Development:  </span> <span className='text-sm'>Advanced equipment for large-scale projects.</span></li>
                   <li><span className='font-bold py-2'>Infrastructure Projects:  </span> <span className='text-sm'>Specialized tools for roads, bridges, and public works.</span></li>
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
        <h2 className='text-5xl md:text-left text-center font-bold'>Our Commitment to Excellence</h2>
        <p>Zencorp delivers innovation and sustainability to simplify construction processes, transforming the industry into a more efficient and eco-friendly space.</p>
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