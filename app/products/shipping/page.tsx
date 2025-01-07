'use client'
import React, { useState } from 'react';
import Footer from '@/app/components/Footer';
import Navbarwhite from '@/app/components/Navbarwhite';
import Image from 'next/image';

const dynamicImage = "/images/shipping1.jpg";

const ShippingAndLogistics = () => {
  // Separate states for active tabs and image sources in Core Services and Industries We Serve
  const [activeCoreTab, setActiveCoreTab] = useState('core-services');
  const [activeIndustryTab, setActiveIndustryTab] = useState('healthcare');
  const [coreImageSrc, setCoreImageSrc] = useState('/images/core-services.jpg'); // Default image for Core Services
  const [industryImageSrc, setIndustryImageSrc] = useState('/images/healthcare.jpg'); // Default image for Industries We Serve

  const handleCoreTabClick = (tab: string, image: string) => {
    setActiveCoreTab(tab);
    setCoreImageSrc(image); // Update the image for Core Services
  };

  const handleIndustryTabClick = (tab: string, image: string) => {
    setActiveIndustryTab(tab);
    setIndustryImageSrc(image); // Update the image for Industries We Serve
  };

  return (
    <div>
      <div
        className="min-v-screen bg-cover bg-center bg-no-repeat rounded-bl-[100px]"
        style={{ backgroundImage: `url("${dynamicImage}")` }}
      >
        <div className='backdrop-blur-sm  bg-gradient-to-b from-Secondary-2/60/[.2] via-Secondary-2/80/[.6] to-black rounded-bl-[100px]'>
          <Navbarwhite />
          <div className="flex flex-col gap-8 lg:justify-start justify-center items-center lg:items-start my-32 lg:m-24 lg:my-32 p-6 lg:pb-28 text-white gap-22">
            <h1 className="text-5xl md:text-6xl leading-36 my-4 text-center sm:text-left">
              <b>Shipping & Logistics Services</b>
            </h1>
            <p className='lg:mr-80 lg:text-left text-center'>
              At ZenCorp Trading Co. LLC, we understand that efficient shipping and logistics are critical to the success of any business. Our specialized Shipping & Logistics Division is dedicated to delivering tailored transportation and supply chain solutions that meet the dynamic demands of businesses across the Middle East and Africa. With a commitment to reliability, speed, and cost-effectiveness, we ensure that your goods are transported safely and on time.
            </p>

            <button className=" bg-emerald-500 sm:w-3/12 lg:w-auto w-1/2 hover:bg-Secondary-2/70 hover:drop-shadow-xl p-4 rounded-md">
              CONTACT US
            </button> 
          </div>
        </div>
      </div>

      <div className='flex lg:flex-row flex-col lg:m-20'>
        <div className=' lg:w-1/2  p-14 flex flex-col gap-4  p-4 rounded-xl justify-center'>
          <h2 className='text-5xl font-bold text-Primary-1/70'>Our Mission</h2>
          <p>Our mission is to enable seamless trade and commerce by providing innovative logistics solutions that enhance connectivity and reduce operational complexity. Through strategic partnerships and cutting-edge technology, we strive to optimize supply chains, ensuring our clients can focus on their core business activities.</p>
        </div>
        <div className=' lg:w-1/2 m-2'>
          <Image src="/images/shipping1.jpg" width={1000} height={1000} alt='shipping' />
        </div>
      </div>

      {/* Core Services Tab */}
<div className="my-12 lg:m-32 px-6 bg-Primary-1/10 p-20 rounded-2xl">
  <h2 className="text-5xl font-bold text-center mb-6">Core Services</h2>

  {/* Desktop View */}
  <div className="hidden lg:flex gap-8">
    <div className="w-1/4 flex flex-col gap-4 bg-Secondary-2/10 p-4 rounded-xl">
      {/* Vertical Tabs for Core Services */}
      <button
        onClick={() => handleCoreTabClick('core-services', '/images/african-american.jpg')}
        className={`py-3 px-6 text-left rounded-lg ${activeCoreTab === 'core-services' ? 'bg-emerald-500 text-white' : 'bg-gray-200'}`}
      >
        Freight Transportation
      </button>
      <button
        onClick={() => handleCoreTabClick('warehousing', '/images/warehousing.jpg')}
        className={`py-3 px-6 text-left rounded-lg ${activeCoreTab === 'warehousing' ? 'bg-emerald-500 text-white' : 'bg-gray-200'}`}
      >
        Warehousing & Distribution
      </button>
      <button
        onClick={() => handleCoreTabClick('customs-clearance', '/images/african_customs.JPG')}
        className={`py-3 px-6 text-left rounded-lg ${activeCoreTab === 'customs-clearance' ? 'bg-emerald-500 text-white' : 'bg-gray-200'}`}
      >
        Customs Clearance
      </button>
      <button
        onClick={() => handleCoreTabClick('supply-chain', '/images/warehoue-2.jpg')}
        className={`py-3 px-6 text-left rounded-lg ${activeCoreTab === 'supply-chain' ? 'bg-emerald-500 text-white' : 'bg-gray-200'}`}
      >
        Supply Chain Solutions
      </button>
      <button
        onClick={() => handleCoreTabClick('specialized-cargo', '/images/black_girl_warehouse.jpg')}
        className={`py-3 px-6 text-left rounded-lg ${activeCoreTab === 'specialized-cargo' ? 'bg-emerald-500 text-white' : 'bg-gray-200'}`}
      >
        Specialized Cargo Services
      </button>
      <button
        onClick={() => handleCoreTabClick('ecommerce-logistics', '/images/ecommerce.jpg')}
        className={`py-3 px-6 text-left rounded-lg ${activeCoreTab === 'ecommerce-logistics' ? 'bg-emerald-500 text-white' : 'bg-gray-200'}`}
      >
        E-commerce Logistics
      </button>
    </div>

    {/* Content & Image Display for Core Services */}
    <div className="w-3/4">
      {activeCoreTab === 'core-services' && (
        <div >
          <h3 className="text-2xl font-bold">Freight Transportation</h3>
          <p>We offer air, sea (FCL & LCL), and land freight services to move goods worldwide efficiently.</p>
        </div>
      )}
      {activeCoreTab === 'warehousing' && (
        <div>
          <h3 className="text-2xl font-bold">Warehousing & Distribution</h3>
          <p>We provide state-of-the-art storage solutions, inventory management, and temperature-controlled storage.</p>
        </div>
      )}
      {activeCoreTab === 'customs-clearance' && (
        <div>
          <h3 className="text-2xl font-bold">Customs Clearance</h3>
          <p>We assist with documentation, tariffs, and compliance to make your shipments smoother.</p>
        </div>
      )}
      {activeCoreTab === 'supply-chain' && (
        <div>
          <h3 className="text-2xl font-bold">Supply Chain Solutions</h3>
          <p>Our services include integrated management, real-time tracking, and vendor coordination.</p>
        </div>
      )}
      {activeCoreTab === 'specialized-cargo' && (
        <div>
          <h3 className="text-2xl font-bold">Specialized Cargo Services</h3>
          <p>We handle oversized goods, hazardous materials, and provide custom packaging solutions.</p>
        </div>
      )}
      {activeCoreTab === 'ecommerce-logistics' && (
        <div>
          <h3 className="text-2xl font-bold">E-commerce Logistics</h3>
          <p>We offer last-mile delivery, platform integration, and reverse logistics for e-commerce businesses.</p>
        </div>
      )}

      {/* Dynamic Image Display for Core Services */}
      <div className="mt-6">
        <Image src={coreImageSrc} width={600} height={400} alt="Core Services Image" className="rounded-lg" />
      </div>
    </div>
  </div>

  {/* Mobile View */}
  <div className="lg:hidden flex flex-wrap gap-4 justify-center mb-8">
    <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4">
      {/* Cards for Core Services */}
      <button
        onClick={() => handleCoreTabClick('core-services', '/images/core-services.jpg')}
        className={`w-full py-4 px-6 text-left rounded-lg ${activeCoreTab === 'core-services' ? 'bg-emerald-500 text-white' : 'bg-gray-200'}`}
      >
        <h3 className="font-bold">Freight Transportation</h3>
        <p>We offer air, sea (FCL & LCL), and land freight services to move goods worldwide efficiently.</p>
      </button>
    </div>
    <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4">
      <button
        onClick={() => handleCoreTabClick('warehousing', '/images/warehousing.jpg')}
        className={`w-full py-4 px-6 text-left rounded-lg ${activeCoreTab === 'warehousing' ? 'bg-emerald-500 text-white' : 'bg-gray-200'}`}
      >
        <h3 className="font-bold">Warehousing & Distribution</h3>
        <p>We provide state-of-the-art storage solutions, inventory management, and temperature-controlled storage.</p>
      </button>
    </div>
    <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4">
      <button
        onClick={() => handleCoreTabClick('customs-clearance', '/images/customs-clearance.jpg')}
        className={`w-full py-4 px-6 text-left rounded-lg ${activeCoreTab === 'customs-clearance' ? 'bg-emerald-500 text-white' : 'bg-gray-200'}`}
      >
        <h3 className="font-bold">Customs Clearance</h3>
        <p>We assist with documentation, tariffs, and compliance to make your shipments smoother.</p>
      </button>
    </div>
    <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4">
      <button
        onClick={() => handleCoreTabClick('supply-chain', '/images/supply-chain.jpg')}
        className={`w-full py-4 px-6 text-left rounded-lg ${activeCoreTab === 'supply-chain' ? 'bg-emerald-500 text-white' : 'bg-gray-200'}`}
      >
        <h3 className="font-bold">Supply Chain Solutions</h3>
        <p>Our services include integrated management, real-time tracking, and vendor coordination.</p>
      </button>
    </div>
    <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4">
      <button
        onClick={() => handleCoreTabClick('specialized-cargo', '/images/specialized-cargo.jpg')}
        className={`w-full py-4 px-6 text-left rounded-lg ${activeCoreTab === 'specialized-cargo' ? 'bg-emerald-500 text-white' : 'bg-gray-200'}`}
      >
        <h3 className="font-bold">Specialized Cargo Services</h3>
        <p>We handle oversized goods, hazardous materials, and provide custom packaging solutions.</p>
      </button>
    </div>
    <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4">
      <button
        onClick={() => handleCoreTabClick('ecommerce-logistics', '/images/ecommerce-logistics.jpg')}
        className={`w-full py-4 px-6 text-left rounded-lg ${activeCoreTab === 'ecommerce-logistics' ? 'bg-emerald-500 text-white' : 'bg-gray-200'}`}
      >
        <h3 className="font-bold">E-commerce Logistics</h3>
        <p>We offer last-mile delivery, platform integration, and reverse logistics for e-commerce businesses.</p>
      </button>
    </div>
  </div>
</div>



     {/* Industries We Serve */}
<div className="my-12 lg:m-32 px-6 bg-Primary-1/10 p-20 rounded-2xl">
  <h2 className="text-3xl font-bold text-center mb-6">Industries We Serve</h2>
  
  {/* Horizontal Tabs for Industries with wrapping on mobile, center aligned */}
  <div className="flex flex-wrap gap-4 justify-center mb-8">
    <button
      onClick={() => handleIndustryTabClick('healthcare', '/images/healthcare.jpg')}
      className={`py-3 px-6 text-left rounded-lg ${activeIndustryTab === 'healthcare' ? 'bg-emerald-500 text-white' : 'bg-gray-200'}`}
    >
      Healthcare
    </button>
    <button
      onClick={() => handleIndustryTabClick('construction', '/images/construction.jpg')}
      className={`py-3 px-6 text-left rounded-lg ${activeIndustryTab === 'construction' ? 'bg-emerald-500 text-white' : 'bg-gray-200'}`}
    >
      Construction
    </button>
    <button
      onClick={() => handleIndustryTabClick('retail', '/images/commerce.jpg')}
      className={`py-3 px-6 text-left rounded-lg ${activeIndustryTab === 'retail' ? 'bg-emerald-500 text-white' : 'bg-gray-200'}`}
    >
      Retail & E-commerce
    </button>
    <button
      onClick={() => handleIndustryTabClick('automotive', '/images/automotive.jpg')}
      className={`py-3 px-6 text-left rounded-lg ${activeIndustryTab === 'automotive' ? 'bg-emerald-500 text-white' : 'bg-gray-200'}`}
    >
      Automotive
    </button>
    <button
      onClick={() => handleIndustryTabClick('fmcg', '/images/fncg.jpg')}
      className={`py-3 px-6 text-left rounded-lg ${activeIndustryTab === 'fmcg' ? 'bg-emerald-500 text-white' : 'bg-gray-200'}`}
    >
      FMCG
    </button>
  </div>

  <div className="flex flex-col lg:flex-row gap-8 justify-center">
    {/* Content & Image Display for Industries */}
    <div className="w-full lg:w-3/4">
      {activeIndustryTab === 'healthcare' && (
        <div>
          <h3 className="text-2xl font-bold">Healthcare</h3>
          <p>Secure transportation of medical equipment and pharmaceuticals for healthcare providers.</p>
        </div>
      )}
      {activeIndustryTab === 'construction' && (
        <div>
          <h3 className="text-2xl font-bold">Construction</h3>
          <p>Efficient delivery of raw materials and heavy machinery to construction sites.</p>
        </div>
      )}
      {activeIndustryTab === 'retail' && (
        <div>
          <h3 className="text-2xl font-bold">Retail & E-commerce</h3>
          <p>Providing warehousing solutions and last-mile delivery for retail and e-commerce businesses.</p>
        </div>
      )}
      {activeIndustryTab === 'automotive' && (
        <div>
          <h3 className="text-2xl font-bold">Automotive</h3>
          <p>Shipping of parts and finished vehicles for automotive industry players.</p>
        </div>
      )}
      {activeIndustryTab === 'fmcg' && (
        <div>
          <h3 className="text-2xl font-bold">FMCG</h3>
          <p>Efficient transportation and distribution of fast-moving consumer goods.</p>
        </div>
      )}

      {/* Dynamic Image Display for Industries */}
      <div className="mt-6">
        <Image src={industryImageSrc} width={600} height={400} alt="Industries Image" className="rounded-lg" />
      </div>
    </div>
  </div>
</div>


            {/* Why Choose ZenCorp Section */}
      <div className="my-12 lg:m-32 px-6  p-20 rounded-2xl">
        <h2 className="text-3xl font-bold text-center mb-6">Why Choose ZenCorp Shipping & Logistics?</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="flex flex-col items-center p-6 border border-gray-200 rounded-lg">
            <h3 className="font-semibold text-xl">Global Network</h3>
            <p className="text-center">Partnerships with carriers, ports, and warehouses for seamless connectivity.</p>
          </div>
          <div className="flex flex-col items-center p-6 border border-gray-200 rounded-lg">
            <h3 className="font-semibold text-xl">Technology-Driven Solutions</h3>
            <p className="text-center">Real-time tracking and data-driven insights for optimization.</p>
          </div>
          <div className="flex flex-col items-center p-6 border border-gray-200 rounded-lg">
            <h3 className="font-semibold text-xl">Tailored Services</h3>
            <p className="text-center">Customizable logistics plans for businesses of all sizes.</p>
          </div>
          <div className="flex flex-col items-center p-6 border border-gray-200 rounded-lg">
            <h3 className="font-semibold text-xl">Sustainability Commitment</h3>
            <p className="text-center">Eco-friendly logistics practices and packaging.</p>
          </div>
          <div className="flex flex-col items-center p-6 border border-gray-200 rounded-lg">
            <h3 className="font-semibold text-xl">24/7 Support</h3>
            <p className="text-center">Dedicated team for issue resolution and proactive communication.</p>
          </div>
        </div>
      </div>

      {/* How We Add Value Section */}
      <div className="my-12 lg:m-32 px-6 bg-Primary-1/10 p-20 rounded-2xl">
        <h2 className="text-3xl font-bold text-center mb-6">How We Add Value</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="flex flex-col items-center p-6 border border-gray-200 rounded-lg">
            <h3 className="font-semibold text-xl">Cost Efficiency</h3>
            <p className="text-center">Optimized logistics solutions to reduce expenses.</p>
          </div>
          <div className="flex flex-col items-center p-6 border border-gray-200 rounded-lg">
            <h3 className="font-semibold text-xl">Reliability</h3>
            <p className="text-center">Timely and secure delivery of goods.</p>
          </div>
          <div className="flex flex-col items-center p-6 border border-gray-200 rounded-lg">
            <h3 className="font-semibold text-xl">Scalability</h3>
            <p className="text-center">Flexible services to grow with your business.</p>
          </div>
        </div>
      </div>

      {/* Our Process Section */}
      <div className="my-12 lg:m-32 px-6  p-20 rounded-2xl">
        <h2 className="text-3xl font-bold text-center mb-6">Our Process</h2>
        <ol className="list-decimal pl-6 space-y-4">
          <li><strong>Consultation:</strong> Understanding your logistics requirements and business goals.</li>
          <li><strong>Planning:</strong> Designing a customized logistics plan.</li>
          <li><strong>Implementation:</strong> Executing the plan with attention to detail.</li>
          <li><strong>Monitoring:</strong> Real-time updates and performance tracking.</li>
          <li><strong>Optimization:</strong> Refining logistics operations for maximum efficiency.</li>
        </ol>
      </div>

      {/* Get Started with ZenCorp Logistics Section */}
      <div className="my-12 px-6 text-center bg-gray-100 p-8 rounded-lg">
        <h2 className="text-3xl font-bold mb-6">Get Started with ZenCorp Logistics</h2>
        <p className="mb-6">Ready to optimize your supply chain and streamline your logistics operations?
          <br></br> Let ZenCorp Trading Co. LLC be your trusted partner for all your shipping and logistics needs.</p>
        <p className="mb-2"><strong>Email:</strong> <a href="mailto:info@zencorp.ae" className="text-blue-600">info@zencorp.ae</a></p>
        <p className="mb-2"><strong>Phone:</strong> +971 (04) 451 6924</p>
        <p className="mb-2"><strong>Address:</strong> A2205, The Four A Block, Al Nahda-1, Dubai, UAE</p>
        <p className="mb-6"><strong>Website:</strong> <a href="https://zencorp.ae" className="text-blue-600">https://zencorp.ae</a></p>
      </div>





      {/* Footer */}
      <Footer />
    </div>
  );
};

export default ShippingAndLogistics;
