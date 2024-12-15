import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Image from 'next/image'

const page = () => {
  return (

    <div>
    <Navbar />

    <div className='flex md:flex-col gap-4 md:m-20 md:p-10'>   

    <div className='flex flex-col gap-8 items-center md:flex-row justify-center '> 
    <div className='w-1/2 flex flex-col gap-8 '>
    <h1 className='text-6xl font-bold text-Secondary-2/70 '> Our Story </h1>
    <p className='text-md fond-normal text-accent-2/70'> ZENCORP Trading LLC is more than a trading house; it is a sanctuary of sustainable innovation and ethical business practices. Rooted in Dubai, UAE, we extend our reach to the Middle East and Africa, providing high-quality products and services to diverse industries. 
      Core Values</p>
    </div>
    <div className='w-1/2 flex flex-col gap-8 '> 
      <h2 className='text-4xl '> Coming Soon </h2>
    <Image src='/images/maintenance.jpg' width={751} height={400} alt='maintenance' ></Image></div>
    </div>

    
    </div>

    <Footer/>
    </div>
  )
}

export default page