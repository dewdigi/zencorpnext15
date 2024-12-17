import React from 'react'
import Image from 'next/image'

const NewsSection = () => {
  return (
    <div className='flex flex-col gap-8 mx-4 lg:mx-28 my-24 p-8 bg-white rounded-3xl drop-shadow-2xl'>

      <h3 className='font-normal text-4xl'>Latest <span className='text-zencorp-green underline'>News</span> from Zencorp</h3>
      <div className='flex flex-col md:flex-row gap-12'>
        {/*
        <div className='flex flex-row gap-4 md:w-1/2'>
          <div className='md:w-1/2'>
            <Image src='/images/News-1.png' width={309} height={537} alt='News-Post'></Image>
          </div>
          <div className='w-1/2'>
              <div className='flex flex-row mb-4 justify-between items-center'> 
                <button type="button" className="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-[#5AB778] focus:outline-none bg-[#F6FFF9] rounded-xl  border border-[#5AB778] hover:bg-gray-100 hover:text-emerald-600 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">TIPS</button>
                <p className='text-xs'>Date: Dec-1-2024</p>
              </div>
              <div className='flex flex-col gap-4'>
                <h4 className='text-xl'>Lorem ipsum dolor sit amet conse ctetur. Viverr</h4>
                <p className='text-xs text-accent-3/50'>Lorem ipsum dolor sit amet consectetur. Suspendisse tristique eros a aliquam tristique. Consectetur potenti convallis tellus semper.</p>  
                <p className='text-xs text-accent-3/50'>Lorem ipsum dolor sit amet consectetur. Suspendisse tristique eros a aliquam tristique. Consectetur potenti convallis tellus semper.</p>  
                <p className='text-xs text-Primary-1/80 hover:text-gray-600'>Read More</p>
              </div> 
          </div>
        </div>
          */}
          <div className='flex md:flex-row flex-col gap-12 Items-start md:w-full'>
            <div className='flex flex-col gap-4 Items-center justify-center w-full md:w-2/6 md:m-2 md:p-2'>
              <Image className='rounded-xl flex items-center' src='/images/foodsecure.webp' width={290} height={283} alt='blogimage'></Image>
              <div className='flex flex-row flex-wrap mb-4 justify-between items-center'> 
                <button type="button" className="py-2.5 px-5 me-2 mb-2 text-xs font-medium text-[#5AB778] focus:outline-none bg-[#F6FFF9] rounded-xl  border border-[#5AB778] hover:bg-gray-100 hover:text-emerald-600 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">ARTICLES</button>
                <p className='text-xs'>Date: Dec-1-2024</p>                
              </div>
              <p>Lorem ipsum dolor sit amet consectetur. </p>
              <p className='text-xs text-Primary-1/80 hover:text-gray-600'>Read More</p>
            </div>

            <div className='flex flex-col gap-4 Items-center justify-center w-full md:w-2/6 md:m-2 md:p-2'>
              <Image className='rounded-xl' src='/images/foodsecure.webp' width={279} height={283} alt='blogimage'></Image>
              <div className='flex flex-row flex-wrap mb-4 justify-between items-center'> 
                <button type="button" className="py-2.5 px-5 me-2 mb-2 text-xs font-medium text-[#5AB778] focus:outline-none bg-[#F6FFF9] rounded-xl  border border-[#5AB778] hover:bg-gray-100 hover:text-emerald-600 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">ARTICLES</button>
                <p className='text-xs'>Date: Dec-1-2024</p>
              </div>
              <p>Lorem ipsum dolor sit amet consectetur. </p>
              <p className='text-xs text-Primary-1/80 hover:text-gray-600'>Read More</p>
            </div>

            <div className='flex flex-col gap-4 Items-center justify-center w-full md:w-2/6 md:m-2 md:p-2'>
              <Image className='rounded-xl' src='/images/foodsecure.webp' width={279} height={283} alt='blogimage'></Image>
              <div className='flex flex-row  flex-wrap mb-4 justify-between items-center'> 
                <button type="button" className="py-2.5 px-5 me-2 mb-2 text-xs font-medium text-[#5AB778] focus:outline-none bg-[#F6FFF9] rounded-xl  border border-[#5AB778] hover:bg-gray-100 hover:text-emerald-600 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">ARTICLES</button>
                <p className='text-xs'>Date: Dec-1-2024</p>
              </div>
              <p>Lorem ipsum dolor sit amet consectetur. </p>
              <p className='text-xs text-Primary-1/80 hover:text-gray-600'>Read More</p>
            </div>
          </div>
        

      </div>
    </div>
  )
}

export default NewsSection