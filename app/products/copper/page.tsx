import React from 'react'

import Footer from '@/app/components/Footer';
import Navbarwhite from '@/app/components/Navbarwhite';
const dynamicImage = "/images/Copper-Heading-Page.png";

import Image from 'next/image';

const page = () => {
  return (
    <div>
      <div
        className="min-v-screen bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url("${dynamicImage}")` }}
      >
        <div>
          <Navbarwhite />
          <div className="flex flex-col justify-center my-32 sm:m-32 p-10 text-white gap-22">
            <h1 className="text-5xl md:text-6xl leading-36 my-4 text-center sm:text-left">
              Copper <b>Solutions</b> <br />
              
            </h1>
            <p className="text-xl leading-24 my-4 font-normal text-center sm:text-left">
              Welcome to the Zen of business—where growth is nurtured, and <br></br>
              sustainability is the essence of all our endeavors.
            </p>
            <br></br>
            <button className=" bg-emerald-500 sm:w-3/12 w-auto hover:bg-Secondary-2/70 hover:drop-shadow-xl p-4 rounded-md">
              CONTACT US
            </button>            
          </div>
        </div>

        
      </div>

      <div>
          <div className='flex flex-col gap-8 p-4 justify-center'>
          <p className='font-normal text-sm text-accent-3/30 text-center'>Products & Services</p>
          <h2 className='font-bold text-3xl md:text-5xl text-center text-accent-3/100'>Global <span className='text-Primary-1/70 underline'>Copper</span> Ecosystem</h2>
          <p className='font-thin text-sm text-accent-3/30 text-center'> Explanatory nores on Global Copper Ecosystem</p>
          </div>
          <div className='mx-8 p-2'>
          <div className='bg-Secondary-2/10 p-10 sm:px-40'> <p className='font-normal text-md text-accent-3/70 text-center'> Copper plays an important role in power generation and transmission, wiring in buildings, electronic equipment and new energy in Electric Vehicles (EV), bringing a comfortable, convenience and quality life we enjoy today used by all nations in a variety of applications in day-to-day life. </p>
          </div>

          <div className='bg-[#FFDECC80] p-10 sm:px-40'> <p className='font-normal text-md text-accent-3/70 text-center'> Copper is an important global Industrial Metal with a long history used in the modern industry.
          Featuring malleability, corrosion and high temperature resistance and recycled utilization.  It has superior electrical and thermal conductivity. </p>
          </div>

          <div className='bg-Secondary-2/10 p-10 sm:px-40'> <p className='font-normal text-md text-accent-3/70 text-center'> The global copper ecosystem explains how Primary copper minerals are harvested from copper mines in copper producing countries, how they are beneficiated to improve the copper content by concentrating, how they are refined with high purity for ordinary industrial applications (4N – 99.99% Copper), distributed to other major copper consuming and refining nations.  </p>
          </div>

          <div className='bg-[#FFDECC80] p-10 sm:px-40'> <p className='font-normal text-md text-accent-3/70 text-center'> High purity copper (6N – 99.9999% Copper content) is used in the manufacture of semiconductors, printed circuit boards and Artificial Intelligence (AI) applications. Used copper can be recycled to manufacture new products in the Secondary scrap copper market. </p>
          </div>
          </div>
      </div>


      <div className='md:m-20 m-8 flex flex-col sm:flex-row md:gap-4 rounded-xl'>
        <div className='md:p-20 p-4 m-2 gap-4 md:w-1/2 flex flex-col justify-center'>
        <h2 className='text-2xl md:text-left text-center'>Global Copper ecosystem</h2>
          <p className='md:text-left text-center'>Zencorp is a trading company that operates in selected value chains of the global copper ecosystem with our connections with the upstream mineral mining, mineral processing and raw material refining companies.  Zencorp also has distribution arrangements with selected downstream manufacturing companies.</p>
        </div>

        <div className='p-4 m-2 md:w-1/2'>
         <Image src="/images/copper-10.png" width={961} height={761} alt="copper"/>

        </div>

        
      </div>
      

      <div className='md:m-20 m-8 flex flex-col sm:flex-row md:gap-4 rounded-xl '>        

        <div className='p-4 m-2 md:w-1/2'>
         <Image src="/images/copper-11.png" width={961} height={761} alt="copper"/>
        </div>

        <div className='md:p-20 p-4 m-2 gap-4 md:w-1/2 flex flex-col justify-center'>
          <h2 className='text-2xl md:text-left text-center'>Copper Mining</h2>
          <p className='md:text-left text-center'>With more than ten years’ experience in the copper ecosystem, Zencorp facilitate investments on copper mines, copper minerals trading – copper ores, copper concentrates, copper blister/ Pregnant Leach Solutions, Copper anodes, Solvent extraction and Electrowinning.  Finally Zencorp also trade in copper cathode of various LME brands and LME equivalent qualities</p>
        </div>

        
      </div>

      <div className='md:m-20 m-8 flex flex-col sm:flex-row md:gap-4 rounded-xl '>   

        <div className='md:p-20 p-4 m-2 gap-4 md:w-1/2 flex flex-col justify-center'>
          <h2 className='text-2xl md:text-left text-center'>Primary Copper Minerals</h2>
          <h3 className='text-xl md:text-left text-center'>Copper Mines</h3>
          <p className='md:text-left text-center'>Primary Copper minerals are extracted from copper mines after geological studies in relation to estimated copper content in the selected mines.  The greenish copper oxide will be found approximately up to 10 meters deep from the surface of the copper mine and copper sulphides will be found below 10 meters in the copper mine.  Large copper bearing rocks are blasted and crushed to copper ores.    Zencorp trades in copper ores specially from Africa.</p>
        </div>     

        <div className='p-4 m-2 md:w-1/2'>
         <Image src="/images/copper-12.png" width={961} height={761} alt="copper"/>
        </div>    

        
      </div>

      <div className='md:m-20 m-8 flex flex-col sm:flex-row md:gap-4 rounded-xl '>        

        <div className='p-4 m-2 flex items-center md:w-1/2'>
         <Image src="/images/copper-13.png" width={961} height={761} alt="copper"/>
        </div>

        <div className='md:p-20 p-4 m-2 gap-4 md:w-1/2 flex flex-col justify-center'>
        <h2 className='text-2xl md:text-left text-center'>Copper Ores</h2>
        <h3 className='text-xl md:text-left text-center'>Copper Mines</h3>
        <p className='md:text-left text-center'>Copper ores are produced through the process of mining where large copper mineral bearing stones are crushed using jaw crushers to produce smaller size ores.  The dirt in the ore is washed and the graded materials are collected at a single location through a conveyor belts.  
          <br></br>
          <br></br>
          Copper ores of different sizes and grades based on the average copper content is traded.  Zencorp facilitates trading of copper ores among the neighbourhood beneficiation plants.   A typical copper ore would have approximately 0.7% to 5% copper content.  Copper concentrates are produced from copper ores.</p>
        </div>

        
      </div>


      <div className='px-4 m-6 flex items-center bg-Secondary-2/20 justify-center '>
         <Image src="/images/copper-14.png" width={751} height={500} alt="copper"/>
        </div>  

      <div className='md:m-20 m-8 flex flex-col sm:flex-row md:gap-4 rounded-xl '>

        <div className='md:p-20 p-4 m-2 gap-4 md:w-1/2 flex flex-col justify-center'>
          <h2 className='text-2xl md:text-left text-center'>Features of Copper Concentrates Trade</h2>
          <p className='md:text-left text-center '>Copper concentrates are produced by the beneficiation, or upgrading, of copper ore. Where the copper mine and crushing plants are far away, copper ores will be transported from the mine to the crushing plants.  A typical copper concentrate would grade around 15% to 35% of copper content. Zencorp trades in copper concentrates from Africa, CIS countries, Chile, and Peru.
          <br></br><br></br>
          Copper concentrates are either smelted and refined in-house or sold to custom smelters. The concentrate may be smelted to produce blister copper for sale to a custom refinery, or the blister copper may be refined to cathode, which is then sold into the market.</p>
        </div>     

        <div className='p-4 m-2 md:w-1/2'>
         <Image src="/images/copper-15.png" width={961} height={761} alt="copper"/>
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