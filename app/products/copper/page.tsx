import React from 'react'

import Footer from '@/app/components/Footer';
import Navbarwhite from '@/app/components/Navbarwhite';
const dynamicImage = "/images/Copper-Heading-Page.png";

import Image from 'next/image';

const page = () => {
  return (
    <div>
      <div
        className="min-v-screen bg-cover bg-center bg-no-repeat rounded-bl-[100px]"
        style={{ backgroundImage: `url("${dynamicImage}")` }}
      >
        <div>
          <Navbarwhite />
          <div className="flex flex-col lg:justify-start justify-center items-center lg:items-start my-32 lg:m-24 lg:my-32 p-6 lg:pb-28 text-white gap-22">
            <h1 className="text-5xl md:text-6xl leading-36 my-4 text-center sm:text-left">
              Copper <b>Ecosystem</b> <br />
              
            </h1>
            <p className="text-xl leading-24 my-4 font-normal text-left">
            Welcome to Zencorp: Your Partner in the Copper Ecosystem
            </p>
            <p className='lg:mr-80 lg:text-left text-center'>Zencorp is a trusted global player in the copper industry, seamlessly connecting the upstream, midstream, and downstream value chains. With over a decade of experience, we offer innovative solutions across mining, refining, manufacturing, and recycling to meet the diverse demands of industries worldwide.</p>
            <br></br>
            <button className=" bg-emerald-500 sm:w-3/12 lg:w-auto w-1/2 hover:bg-Secondary-2/70 hover:drop-shadow-xl p-4 rounded-md">
              CONTACT US
            </button>            
          </div>
        </div>

        
      </div>

      <div className='flex lg:flex-row flex-col lg:gap-20 lg:m-20 items-center justify-center'>
          <div className='lg:w-1/2'>
          <div className='flex flex-col gap-8 p-12'>
          <p className='font-normal text-sm text-accent-3/30 '>Products & Services</p>
          <h2 className='font-bold text-3xl md:text-5xl  text-accent-3/100'>The <span className='text-Primary-1/70 underline'>Copper</span> Advantage</h2>
          <p className='font-thin text-sm text-accent-3/30 '>Shaping a Sustainable Future with Copper: Powering Innovation in Energy and Electronics</p>
          </div>
          
          <div className=' px-10 lg:px-12'> <p className='font-normal text-md text-accent-3/70 '>Copper is more than just a metal. Its unparalleled electrical and thermal conductivity, corrosion resistance, and malleability make it indispensable for power generation, electronics, and new energy technologies like electric vehicles (EVs). Our work ensures this critical resource powers a sustainable and efficient future.</p>
          </div>

          
          </div>

          <div className='flex lg:w-1/2 p-8 items-center '>
          <Image
                src="/images/copper-10.png"
                width={600}
                height={600}
                alt="copper image"
              />
          </div>
          

          
          
      </div>


      <div className='md:m-10 m-8 flex flex-col sm:flex-row md:gap-4 rounded-xl'>
        <div className='md:p-20 p-4 m-2 gap-4 md:w-1/2 flex flex-col justify-center'>
        <h2 className='text-2xl lg:text-left text-center'>Our Expertise</h2>
          <p className='md:text-left text-center'>Upstream Copper Raw Materials</p>
          <ul>
            <li>We source and trade:</li>
            <li>Copper Ores: Mined from top locations like Africa and processed into concentrates.</li>
            <li>Copper Concentrates: Graded at 15-35% copper content for smelting and refining.</li>
            <li>Copper Blister: Produced at 90-95% purity for manufacturing copper anodes.</li>
            <li>Copper Cathodes: Electrolytic copper (99.99% pure) traded globally</li>
          </ul>
          <p className='md:text-left text-center'>Downstream Copper Products</p>
          <ul>
            <li>Our partnerships extend to manufacturers and distributors of:</li>
            <li>Copper Ores: Mined from top locations like Africa and processed into concentrates.</li>
            <li>Copper Concentrates: Graded at 15-35% copper content for smelting and refining.</li>
            <li>Copper Blister: Produced at 90-95% purity for manufacturing copper anodes.</li>
            <li>Copper Cathodes: Electrolytic copper (99.99% pure) traded globally</li>
          </ul>
        </div>

        <div className='p-4 m-2 md:w-1/2'>
         <Image src="/images/copper-11.png" width={961} height={761} alt="copper"/>

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