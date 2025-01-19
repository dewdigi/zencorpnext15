import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Image from 'next/image'


const dynamicImage = "/images/about-1.jpg";



const page = () => {
  return (

    <div >
      
    <div className="min-h-screen bg-cover bg-center bg-no-repeat "
      style={{ backgroundImage: `url("${dynamicImage}")` }}>
        <Navbar />
        <div className='backdrop-blur-2xl  bg-gradient-to-b from-Secondary-2/60/[.2] via-Secondary-2/80/[.6] to-black '>

    <div className='flex flex-col py-20 lg:py-40 lg:px-20'>   

    <div className='flex flex-col p-8 gap-8 items-center lg:flex-row justify-center '> 
    <div className='lg:w-1/2 p-4 flex flex-col '>
    <h1 className='text-6xl font-bold text-Primary-1/80 p-4 bg-Secondary-2/10 rounded-xl'> Our Story </h1>
    <p className='text-md  font-normal my-10 text-accent-3/20'> ZENCORP Trading LLC, headquartered in Dubai, UAE, is a leading trading house with a proven track record of delivering exceptional products and services across the Middle East and Africa. We specialize in catering to diverse industries, including construction, hospitality, automobiles, healthcare, and FMCG, making us a trusted partner for governments and businesses alike. 
      </p>

      <p className='text-xl font-bold text-Primary-1/10 my-2'>Purpose: </p>
      <p>At ZENCORP, our purpose is to bridge gaps and connect communities by delivering exceptional products and services while actively contributing to societal and environmental well-being.</p>
    </div>
    <div className='lg:w-1/2  flex p-4 flex-col gap-8  '> 
      
    <Image className='p-2 rounded-2xl' src='/images/a-about-1.jpg' width={700} height={400} alt='maintenance' ></Image></div>
    </div>

    </div>

    



    <div className='flex flex-col bg-white p-8 gap-16 items-start lg:me-20 lg:rounded-r-xl lg:flex-row justify-center '> 

    <div className='lg:w-1/2 flex flex-col p-4 gap-8 lg:px-40 lg:rounded-r-xl text-gray-800 hover:text-Secondary-2/10 lg:py-32 bg-white hover:bg-Primary-1/90 lg:bg-Secondary-2/10'> 
      <h2 className='text-6xl font-bold  '> Vision </h2>
      <p className='text-md  font-normal  '> To become a leading global trade house recognized for innovative, sustainable, and reliable solutions across various industries.</p>
   </div>

   
    

    <div className='lg:w-1/2 flex flex-col p-4 lg:px-20 lg:py-10 text-gray-800  hover:text-Secondary-2/10 lg:rounded-r-xl  bg-white hover:bg-Primary-1/90 lg:bg-Primary-1/10 '>
    <h1 className='text-6xl font-bold my-4 '> Mission </h1>
    <p className='text-xl font-bold '>Our Mission is to:</p>
    <ul className='list-disc p-4'>
      <li>Deliver the highest quality products and services tailored to meet the unique needs of our clients.</li>
      <li>Leverage our expertise, experience, and partnerships with leading manufacturers and suppliers to exceed client expectations.</li>
      <li>Uphold the highest ethical standards while driving sustainable development and social welfare in the communities where we operate.</li>
    </ul>
    
    </div>

    </div>
    </div>    
    </div>

    <div className='flex lg:flex-row flex-col lg:m-24 my-10 p-10  lg:gap-32 gap-8'>

    <div className='lg:w-1/2'> <Image src='/images/a-about3.jpg' width={800} height={800} alt=''/></div>
      <div className='lg:w-1/2'>
        <h3 className='text-6xl font-bold my-4'>What We Do</h3>
        <p> With a deep understanding of industry-specific requirements, our team of experienced professionals ensures that we provide:</p>
        <ul className='list-disc p-4'>
          <li> <b>Customized Solutions:</b> <span className='text-gray-400'>Tailored products and services for construction, healthcare, FMCG, and more.</span>
          </li>
          <li>
          <b>Competitive Pricing with Quality Assurance:</b><span className='text-gray-400'> Sourcing from top manufacturers to offer the best value without compromising on quality.</span>
          </li>
          <li>
          <b> Deliveries:</b> <span className='text-gray-400'> On-time and within budget, consistently exceeding client expectations.</span>
          </li>

        </ul>
        <p>
        Our dedication to excellence and integrity has made ZENCORP a name synonymous with trust, reliability, and outstanding performance.</p>


      </div>


      

      
    
    
    
    
    
    </div>

      <div className='flex lg:flex-row flex-col lg:m-24 my-10 p-10  lg:gap-32 gap-8 '>
        

        
          <div className='lg:w-1/2'>
            <h3 className='text-6xl font-bold my-4'>Commitment to Africa</h3>
            <p> &#8216;Partnering for a Sustainable Africa&#8217; </p>
            
            <p>At ZENCORP Trading LLC, we are deeply committed to Africa&#8216;s growth and development. Our focus spans across key industries such as infrastructure, food, and healthcare, aiming to unlock the continent&#8216;s immense potential while driving sustainable change.</p>
            
            <p>Key Areas of Impact:</p>
            <ul className='list-disc p-4'>
              <li> <b>Infrastructure:</b> <span className='text-gray-400'>Partnering with governments and private entities to deliver projects that foster economic growth, create jobs, and uplift communities—all while ensuring environmental sustainability.</span>
              </li>
              <li>
              <b>Food Security:</b><span className='text-gray-400'> Collaborating with farmers, manufacturers, and retailers to build efficient supply chains, reduce food waste, and enhance food security</span>
              </li>
              <li>
              <b>Healthcare:</b> <span className='text-gray-400'> Improving access to affordable, quality healthcare services by working alongside governments and healthcare providers to address systemic challenges.</span>
              </li>

            </ul>
            <p>
            We see ourselves as partners in building a prosperous, equitable, and sustainable future for Africa.</p>


        </div>
        <div className='lg:w-1/2'> <Image src='/images/a-about-4.jpg' width={800} height={800} alt=''/></div>

        

      
      
      </div>

      <div className='flex lg:flex-row lg:m-24 p-10  lg:gap-32'>

      <div className='lg:w-1/2'> <Image src='/images/a-about2.jpg' width={800} height={800} alt=''/></div>
        
          <div className='lg:w-1/2'>
            <h3 className='text-6xl font-bold my-4'>Corporate Social Responsibility</h3>
            <p className='my-2 text-4xl text-Secondary-2/20 font-bold' > &#8216;Partnering for a Sustainable Africa&#8217; </p>
            
            <p>At ZENCORP, we take our corporate social responsibility seriously. We actively seek ways to:</p>
            <ul className='list-disc p-4'>
              <li> Promote sustainable development.
              </li>
              <li>Contribute to the welfare of the communities in which we operate.</li>
              

            </ul>
            <p>By fostering lasting relationships based on trust, integrity, and mutual respect, we aim to create a meaningful and positive impact beyond business.</p>
            <p className='my-4'>ZENCORP Trading LLC—bridging communities, delivering excellence, and shaping a sustainable future. Let us partner with you to achieve your business objectives and drive meaningful change.</p>


        </div>

        

      
      
      </div>


    
    

    <Footer/>
    </div>
  )
}

export default page