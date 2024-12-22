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
        <div>
          <Navbarwhite />
          <div className="flex flex-col lg:justify-start justify-center items-center lg:items-start my-32 lg:m-24 lg:my-32 p-6 lg:pb-28 text-white gap-22">
            <h1 className="text-5xl md:text-6xl leading-36 my-4 text-center sm:text-left">
              <b>Shipping & Logistics Services</b>
            </h1>
            <p className='lg:mr-80 lg:text-left text-center'>
              At ZenCorp Trading Co. LLC, we understand that efficient shipping and logistics are critical to the success of any business. Our specialized Shipping & Logistics Division is dedicated to delivering tailored transportation and supply chain solutions that meet the dynamic demands of businesses across the Middle East and Africa. With a commitment to reliability, speed, and cost-effectiveness, we ensure that your goods are transported safely and on time.
            </p>
          </div>
        </div>
      </div>

      <div className='flex flex-row lg:m-20'>
        <div className=' w-1/2  p-14 flex flex-col gap-4  p-4 rounded-xl justify-center'>
          <h2 className='text-5xl font-bold text-Primary-1/70'>Our Mission</h2>
          <p>Our mission is to enable seamless trade and commerce by providing innovative logistics solutions that enhance connectivity and reduce operational complexity. Through strategic partnerships and cutting-edge technology, we strive to optimize supply chains, ensuring our clients can focus on their core business activities.</p>
        </div>
        <div className=' w-1/2'>
          <Image src="/images/shipping1.jpg" width={1000} height={1000} alt='shipping' />
        </div>
      </div>

      {/* Core Services Tab */}
      <div className="my-12 lg:m-32 px-6 bg-Primary-1/10 p-20 rounded-2xl">
        <h2 className="text-5xl font-bold text-center mb-6">Core Services</h2>
        <div className="flex gap-8">
          <div className="w-1/4 flex flex-col gap-4 bg-Secondary-2/10 p-4 rounded-xl">
            {/* Vertical Tabs for Core Services */}
            <button
              onClick={() => handleCoreTabClick('core-services', '/images/core-services.jpg')}
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
              onClick={() => handleCoreTabClick('customs-clearance', '/images/customs-clearance.jpg')}
              className={`py-3 px-6 text-left rounded-lg ${activeCoreTab === 'customs-clearance' ? 'bg-emerald-500 text-white' : 'bg-gray-200'}`}
            >
              Customs Clearance
            </button>
            <button
              onClick={() => handleCoreTabClick('supply-chain', '/images/supply-chain.jpg')}
              className={`py-3 px-6 text-left rounded-lg ${activeCoreTab === 'supply-chain' ? 'bg-emerald-500 text-white' : 'bg-gray-200'}`}
            >
              Supply Chain Solutions
            </button>
            <button
              onClick={() => handleCoreTabClick('specialized-cargo', '/images/specialized-cargo.jpg')}
              className={`py-3 px-6 text-left rounded-lg ${activeCoreTab === 'specialized-cargo' ? 'bg-emerald-500 text-white' : 'bg-gray-200'}`}
            >
              Specialized Cargo Services
            </button>
            <button
              onClick={() => handleCoreTabClick('ecommerce-logistics', '/images/ecommerce-logistics.jpg')}
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
      </div>

      {/* Industries We Serve */}
      <div className="my-12 px-6">
        <h2 className="text-3xl font-bold text-center mb-6">Industries We Serve</h2>
        <div className="flex gap-8">
          <div className="w-1/4 flex flex-col gap-4">
            {/* Vertical Tabs for Industries */}
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
              onClick={() => handleIndustryTabClick('retail', '/images/retail.jpg')}
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
              onClick={() => handleIndustryTabClick('fmcg', '/images/fmcg.jpg')}
              className={`py-3 px-6 text-left rounded-lg ${activeIndustryTab === 'fmcg' ? 'bg-emerald-500 text-white' : 'bg-gray-200'}`}
            >
              FMCG
            </button>
          </div>

          {/* Content & Image Display for Industries */}
          <div className="w-3/4">
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

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default ShippingAndLogistics;
