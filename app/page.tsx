"use client";
import Navbar from "./components/Navbar";
import React, { useState } from "react";
import Image from "next/image";

import Footer from "./components/Footer";

const dynamicImage = "/images/hero-img.jpg";

const Page = () => {
  // State to manage the active tab
  const [activeTab, setActiveTab] = useState("food");

  // Function to render content based on the active tab
  const renderTabContent = () => {
    switch (activeTab) {
      case "food":
        return (
          <div className="p-4 flex flex-col sm:flex-row  mx-4 gap-14">
            <div className="flex flex-col gap-8 p-8 bg-white rounded-xl justify-center drop-shadow-2xl sm:w-1/2">
                <h3 className="text-left text-2xl font-bold">Food Security</h3>

                <p className="text-left text-sm text-[#A3A3A3]">
                At ZENCORP, food security is at the heart of our mission. 
                By leveraging innovative farming techniques such as precision agriculture,
                vertical farming, and hydroponics, we ensure that food production is efficient,     
                sustainable, and scalable.
                </p>
                <p className="text-left text-sm text-[#A3A3A3]">
                Our cutting-edge technologies not only maximize yield but also minimize 
                environmental impact, promoting a harmonious balance between nature and agriculture.
                Through these advancements, we aim to meet the growing global demand for food while
                preserving the planet for future generations.
                </p>
                <button type="button" className="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-emerald-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">Read More</button>

            </div>
            <div className="sm:w-1/2">
              <Image className="rounded-xl drop-shadow-2xl" src="/images/foodsecure.webp" width={1000} height={1000} alt="food security"/>
            </div>
          </div>
        );
      case "infrastructure":
        return (
          <div><div className="p-4 flex flex-col sm:flex-row mx-4 gap-14">
            <div className="flex flex-col gap-8 p-8 bg-white rounded-xl justify-center drop-shadow-2xl sm:w-1/2">
              <h3 className="text-left text-2xl font-bold">Infrastructure</h3>

              <p className="text-left text-sm text-[#A3A3A3]"> 
              Building a greener tomorrow starts with reimagining how we construct the spaces we live and work in.
              At ZENCORP, we are committed to eco-friendly construction practices that minimize environmental impact
              while maximizing efficiency and sustainability. By incorporating sustainable materials, energy-efficient
              designs, and green building techniques, we ensure that every project contributes to a healthier planet.
              </p>
              
              <p className="text-left text-sm text-[#A3A3A3]"> From reducing waste during construction to optimizing buildings for long-term energy savings, 
                we aim to set new standards in environmentally responsible development.
              </p>
              <button type="button" className="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-emerald-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">Read More</button>

            </div>
            <div className="sm:w-1/2">
              <Image className="rounded-xl drop-shadow-2xl" src="/images/Green_Revolution.webp" width={1000} height={1000} alt="food security" />
            </div>
          </div>
            </div>
        );
      case "healthcare":
        return (
          
          <div><div className="p-4 flex flex-col sm:flex-row mx-4 gap-14">
          <div className="flex flex-col gap-8 p-8 bg-white rounded-xl justify-center drop-shadow-2xl sm:w-1/2">
            <h3 className="text-left text-2xl font-bold">Healthcare</h3>
            <p className="text-left text-sm text-[#A3A3A3]">
            Zencorp is redefining healthcare by combining advanced technology with compassionate care to bridge the gap in access and quality for underserved communities. 
            <br></br> <br></br>Our innovative solutions focus on delivering reliable, efficient, and patient-centered services that empower individuals and enhance well-being. 
            <br></br> <br></br> By addressing critical healthcare challenges with cutting-edge tools and a human touch, we are committed to creating healthier, more resilient communities worldwide.
            </p>
            <button type="button" className="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-emerald-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">Read More</button>

          </div>
          <div className="sm:w-1/2">
            <Image className="rounded-xl drop-shadow-2xl " src="/images/Healthcare.webp" width={1000} height={1000} alt="food security" />
          </div>
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
  className="min-h-screen bg-cover bg-center bg-no-repeat"
  style={{ backgroundImage: `url("${dynamicImage}")` }}
>
  <div>
    <Navbar />
    <div className="m-6 sm:m-12 p-6 text-white gap-6 flex flex-col items-center sm:items-start">
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
    <h2 className="font-bold text-3xl sm:text-5xl">
      Partnering for a <span className="text-emerald-800">Sustainable</span> Africa
    </h2>
    <br />
    <p className="font-normal">
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
  <div className="tabs flex flex-row sm:flex-row items-center justify-center sm:justify-center my-12 ">
    <button 
      className={`m-2 p-4 text-xs sm:text-base ${
        activeTab === "food"
          ? "bg-emerald-500 text-white"
          : "bg-gray-400 hover:bg-gray-200"
      } rounded-md`}
      onClick={() => setActiveTab("food")}
    >
      Infrastructure
    </button>
    <button
      className={`m-2 p-4 text-xs sm:text-base ${
        activeTab === "infrastructure"
          ? "bg-emerald-500 text-white"
          : "bg-gray-400 hover:bg-gray-200"
      } rounded-md`}
      onClick={() => setActiveTab("infrastructure")}
    >
      
      Healthcare
    </button>
    <button
      className={`m-2 p-4 text-xs sm:text-base ${
        activeTab === "healthcare"
          ? "bg-emerald-500 text-white"
          : "bg-gray-400 hover:bg-gray-200"
      } rounded-md`}
      onClick={() => setActiveTab("healthcare")}
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
