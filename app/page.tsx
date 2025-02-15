"use client";
import Navbar from "./components/Navbar";
import React, { useState } from "react";
import Image from "next/image";

import Footer from "./components/Footer";
import Link from "next/link";
const dynamicImage = "/images/hero-img.jpg";

const Page = () => {
  // State to manage the active tab
  const [activeTab, setActiveTab] = useState("infrastructure");

  // Function to render content based on the active tab
  const renderTabContent = () => {
    switch (activeTab) {
      
      case "infrastructure":
        return (
          <div>
              <div className="p-4 flex flex-col bg-gray-100 rounded-xl items-center sm:flex-row mx-4 gap-10 h-full">

                {/* Text Section */}
                <div className="flex flex-col gap-4 p-8 bg-white rounded-xl justify-center drop-shadow-2xl sm:w-1/2 h-full box-border">
                  <h3 className="text-left text-2xl font-bold">
                    Driving Growth Through Infrastructure and Resource Development
                  </h3>

                  <p className="text-left text-sm text-[#A3A3A3]">
                    Zencorp connects Africa to global markets by enhancing physical infrastructure that boosts productivity and fosters sustainable economic growth. By improving transportation, energy, and water systems, we serve as a catalyst for economic activity, empowering communities and advancing Africa&#8217;s economies.
                  </p>

                  <p className="text-left text-sm text-[#A3A3A3]">
                    In addition, Zencorp leverages Africa&#8217;s rich resources in metals and minerals, creating value through responsible sourcing, processing, and trade. Our efforts focus on sustainable mining practices, supply chain transparency, and supporting industries that drive innovation and infrastructure development. By integrating resource development with economic progress, Zencorp strengthens Africa&#8217;s position in the global economy while ensuring long-term environmental and social responsibility.
                  </p>

                  <Link href="/products/building">
                    <button type="button" className="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-emerald-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-Primary-1/100 dark:text-gray-300 dark:border-gray-600 dark:hover:text-gray-800 dark:hover:bg-gray-300">
                      Read More
                    </button>
                  </Link>
                </div>

                {/* Image Section */}
                <div className="sm:w-1/2 h-full flex">
                  <Image 
                    className="rounded-xl bg-white drop-shadow-2xl object-cover w-full h-full" 
                    src="/images/infrastructure.jpg" 
                    width={1000} 
                    height={1000} 
                    alt="infrastructure" 
                  />
                </div>
              </div>
            </div>

        );
      case "healthcare":
        return (
          
          <div><div className="p-4 flex flex-col bg-gray-100 rounded-xl items-center sm:flex-row mx-4 gap-14">
          <div className="flex flex-col gap-8 p-8 bg-white lg:h-96 rounded-xl justify-center drop-shadow-2xl sm:w-1/2 h-full">
            <h3 className="text-left text-2xl font-bold">Transforming Healthcare Access Across Africa
            </h3>
            <p className="text-left text-sm text-[#A3A3A3]">
            At Zencorp, we are committed to making quality healthcare accessible and affordable for all. 
            By partnering with governments, healthcare providers, and communities, we address critical challenges 
            in access, affordability, and quality of care. Through innovative solutions and strategic collaborations,
             we strive to build stronger healthcare systems that deliver effective, equitable, and sustainable healthcare
              across Africa. Together, we are paving the way for healthier communities and a brighter future.
            </p>
            <Link href="/products/healthcare_accessibility">
            <button type="button" className="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white  rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-emerald-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-Primary-1/100 dark:text-gray-300 dark:border-gray-600 dark:hover:text-gray-800 dark:hover:bg-gray-300">Read More</button>
            </Link>
          </div>
          <div className="sm:w-1/2 items-stretch flex h-full ">
            <Image className="rounded-xl drop-shadow-2xl object-cover w-full h-full" src="/images/healthcare.jpg" width={1000} height={1000} alt="Healthcare" />
          </div>
        </div>
          </div>
        );

        case "food":
        return (
          <div className="p-4 flex flex-col bg-gray-100 rounded-xl items-center sm:flex-row  mx-4 gap-14">
            <div className="flex flex-col gap-8 p-8 lg:h-96 bg-white rounded-xl justify-center drop-shadow-2xl sm:w-1/2 h-full">
                <h3 className="text-left text-2xl font-bold">Committed to Building a Food-Secure Future for Africa
                </h3>

                <p className="text-left text-sm text-[#A3A3A3]">
                At Zencorp, we are driven by a mission to enhance food security and 
                empower communities across Africa. With our expertise in agricultural 
                supply chains and market access, we collaborate closely with farmers to
                 provide high-quality inputs, advanced technology, and capacity-building
                  initiatives that boost productivity and sustainability.
                </p>
                <Link href="/products/fmcg">
                <button type="button" className="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white  rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-emerald-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-Primary-1/100 dark:text-gray-300 dark:border-gray-600 dark:hover:text-gray-800 dark:hover:bg-gray-300">Read More</button>
                </Link>
            </div>
            <div className="sm:w-1/2 flex h-full">
              <Image className="rounded-xl drop-shadow-2xl object-cover h-full w-full" src="/images/foodsecurity.jpg" width={1000} height={1000} alt="food security"/>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div>
      {/* Hero Section */}
      <div
  className="min-h-screen bg-cover bg-center bg-no-repeat pt-44"
  style={{ backgroundImage: `url("${dynamicImage}")` }}
>
  <div>
    <Navbar />
    <div className="m-2 sm:m-12 p-6 text-white gap-6 flex flex-col items-center sm:items-start">
      <h1 className="text-4xl sm:text-6xl leading-snug sm:leading-tight my-4 text-center sm:text-left">
        Sustainable <b>Solutions</b> <br />
        for a Changing World.
      </h1>
      <p className="text-lg sm:text-xl leading-normal sm:leading-relaxed my-4 font-normal text-center sm:text-left">
        Welcome to the Zen of business—where growth is nurtured, and <br />
        sustainability is the essence of all our endeavors.
      </p>
      <button className="bg-emerald-500 w-3/4 md:w-1/4 p-4 hover:bg-emerald-800 rounded-md">
        CONTACT US
      </button>
    </div>
  </div>
</div>

      {/* Tabs Section */}
      <div className="m-2 sm:m-24 flex flex-col justify-center text-center text-gray-800">
  <div className="m-12 gap-32">
    <h2 className="font-bold text-3xl sm:text-5xl dark:text-gray-300">
      Partnering for a <span className="text-emerald-800">Sustainable</span> Africa
    </h2>
    <br />
    <p className="font-normal dark:text-gray-300">
      At ZENCORP, we are committed to fostering growth and development in
      Africa&#8217;s infrastructure, food, healthcare, and other key
      industries. By leveraging Africa&#8217;s immense potential, we work
      with partners and clients to create a brighter future for the
      continent. Our extensive experience allows us to deliver innovative,
      sustainable, and reliable solutions that aim to address the
      challenges facing Africa today while paving the way for a prosperous
      tomorrow.
    </p>
  </div>

        {/* Tabs Navigation */}
  <div className="tabs flex flex-row sm:flex-row flex-wrap items-center lg:gap-20 justify-center sm:justify-center my-12 ">
    <button 
      className={`m-2 py-4 px-8 text-xs sm:text-base ${
        activeTab === "infrastructure"
          ? "bg-Primary-1/10 outline  outline-4 outline-Primary-1/90 text-black"
          : "bg-Primary-1/10 outline  outline-4 outline-white drop-shadow-2xl hover:bg-gray-200"
      } rounded-md`}
      onClick={() => setActiveTab("infrastructure")}
    >
      Infrastructure
    </button>
    <button
      className={`m-2 py-4 px-10 text-xs sm:text-base ${
        activeTab === "healthcare"
          ? "bg-Primary-1/10 outline  outline-4 outline-Primary-1/90 text-black"
          : "bg-Primary-1/10 outline  outline-4 outline-white drop-shadow-2xl hover:bg-gray-200"
      } rounded-md`}
      onClick={() => setActiveTab("healthcare")}
    >
      
      Healthcare
    </button>
    <button
      className={`m-2 py-4 px-8 text-xs sm:text-base ${
        activeTab === "food"
          ? "bg-Primary-1/10 outline  outline-4 outline-Primary-1/90 text-black"
          : "bg-Primary-1/10 outline  outline-4 outline-white drop-shadow-2xl hover:bg-gray-200"
      } rounded-md`}
      onClick={() => setActiveTab("food")}
    >
      
      Food Security
    </button>
  </div>

  {/* Tab Content */}
  <div className="tab-content">{renderTabContent()}</div>
</div>
      <Footer/>
      
    </div>
  );
};

export default Page;
