import React from 'react'
import Footer from '@/app/components/Footer';
import Navbar from '@/app/components/Navbarwhite';
import Image from 'next/image'

const page = () => {
  return (
    <div>
      <Navbar/>
      

      <div className='flex flex-col items-center m-8 gap-6'>
                      <h1 className='text-6xl font-bold text-Secondary-2/70'> Medical </h1>
                      <h2 className='text-4xl'> Coming Soon </h2>
                      <Image src='/images/maintenance.jpg' width={751} height={400} alt='maintenance' ></Image>
                      </div>
      <Footer/>
      </div>

      
  )
}

export default page