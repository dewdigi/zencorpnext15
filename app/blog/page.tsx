import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Image from 'next/image'

const page = () => {
  return (
    <div>
      <Navbar />

      <div className='flex flex-col items-center m-8 gap-6'>
          <h1 className='text-6xl font-bold text-Secondary-2/70'> BLOG </h1>
          <h2 className='text-4xl'> Coming Soon </h2>
          <Image src='/images/maintenance.jpg' width={751} height={400} alt='maintenance' ></Image>
          </div>

          <section>
      <div className="container mx-auto">
        <div className="lg:flex">
          {/* First Feature */}
          <div className="lg:flex">
            <Image
              className="object-cover w-full h-56 rounded-lg lg:w-64"
              src="https://images.unsplash.com/photo-1530099486328-e021101a494a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1547&q=80"
              alt="Feature 1"
              width={256}
              height={224}
            />
            <div className="flex flex-col justify-between py-6 lg:mx-6">
              <a
                href="#"
                className="text-xl font-semibold text-gray-800 hover:underline dark:text-white"
              >
                All the features you want to know
              </a>
              <span className="text-sm text-gray-500 dark:text-gray-300">
                On: 30 September 2020
              </span>
            </div>
          </div>

          {/* Second Feature */}
          <div className="lg:flex">
            <Image
              className="object-cover w-full h-56 rounded-lg lg:w-64"
              src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1484&q=80"
              alt="Feature 2"
              width={256}
              height={224}
            />
            <div className="flex flex-col justify-between py-6 lg:mx-6">
              <a
                href="#"
                className="text-xl font-semibold text-gray-800 hover:underline dark:text-white"
              >
                Minimal workspace for your inspirations
              </a>
              <span className="text-sm text-gray-500 dark:text-gray-300">
                On: 13 October 2019
              </span>
            </div>
          </div>

          {/* Third Feature */}
          
        </div>
      </div>
    </section>

      <Footer/>
    </div>
  )
}

export default page