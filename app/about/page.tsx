import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Image from 'next/image'


const dynamicImage = "/images/about-1.jpg";



const page = () => {
  return (

    <div className='' >
      
    <div className="min-v-screen bg-cover bg-center bg-no-repeat "
      style={{ backgroundImage: `url("${dynamicImage}")` }}>

      

    <div className='backdrop-blur-2xl  bg-gradient-to-b from-Secondary-2/60/[.2] via-Secondary-2/80/[.6] to-black '>

      
    <Navbar />

    <div className='flex flex-col lg:m-20 mx-10 my-8 md:p-10 '>   

    <div className='flex flex-col p-8 gap-8 items-center lg:flex-row justify-center '> 
    <div className='lg:w-1/2 p-4 flex flex-col gap-8'>
    <h1 className='text-6xl font-bold text-Primary-1/80 p-4 bg-Secondary-2/10 rounded-xl'> Our Story </h1>
    <p className='text-md  font-normal text-accent-3/20'> ZENCORP Trading LLC is more than a trading house; it is a sanctuary of sustainable innovation and ethical business practices. Rooted in Dubai, UAE, we extend our reach to the Middle East and Africa, providing high-quality products and services to diverse industries. 
      </p>
      <p className='text-lg font-bold text-Secondary-2/30'>Core Values</p>
      <ul className='mx-5 list-disc text-accent-3/20'>
        <li>Innovation: Embracing the new and transformative.</li>
        <li>Sustainability: Prioritizing the well-being of our planet and future generations.</li>
        <li>Integrity: Conducting our business with honesty and transparency.</li>
        <li>Quality: Ensuring excellence in every facet of our operations.</li>
        <li>Customer Focus: Building lasting relationships founded on trust and mutual respect.</li>
      </ul>
    </div>
    <div className='lg:w-1/2  flex p-4 flex-col gap-8  '> 
      
    <Image className='p-2 rounded-2xl' src='/images/about-15.jpg' width={700} height={400} alt='maintenance' ></Image></div>
    </div>

    </div>

    



    <div className='flex flex-col bg-white p-8 gap-16 items-start lg:me-20 lg:rounded-r-xl lg:flex-row justify-center '> 

    <div className='lg:w-1/2 flex flex-col gap-8 lg:px-40 lg:rounded-r-xl text-gray-800 hover:text-Secondary-2/10 lg:py-32 bg-white hover:bg-Primary-1/90 lg:bg-Secondary-2/10'> 
      <h2 className='text-6xl font-bold  '> Vision </h2>
      <p className='text-md  font-normal  '> To be a beacon of sustainability and innovation, leading the way in global trade with solutions that transcend industries and uplift communities..</p>
   </div>

   
    

    <div className='lg:w-1/2 flex flex-col lg:px-40 lg:py-10 text-gray-800  hover:text-Secondary-2/10 lg:rounded-r-xl gap-8 bg-white hover:bg-Primary-1/90 lg:bg-Primary-1/10 '>
    <h1 className='text-6xl font-bold  '> Mission </h1>
    <p className='text-md  font-normal text-accent-2/70 '> We commit to offering the highest quality products and services, tailored to meet the unique needs of our clients. Leveraging our expertise and strong partnerships with leading manufacturers and suppliers, we strive to exceed expectations while upholding the highest ethical standards. Our mission is also to foster sustainable development and social welfare in the communities where we operate.</p>
    </div>

    </div>
    </div>

    

    
    </div>
    
    

    <Footer/>
    </div>
  )
}

export default page