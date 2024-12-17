import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import BackgroundImage from "../assets/backgroundImage.svg"; // Import the background image
import MedTech from "../assets/medtech.png";
import Contactemail from "../email/contactemail";

function About() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, [pathname]);
  return (
    <>
      <div
        className="relative h-screen bg-fixed bg-center bg-cover bg-no-repeat font-PlusJakartaSans"
        style={{ backgroundImage: `url(${BackgroundImage})` }} // Set background image dynamically
      >
        {/* Overlay */}
        <div className="absolute inset-0 flex items-center justify-center">
          {/* Content Section */}
          <div className="w-full max-w-4xl px-6 py-8 overflow-y-auto max-h-[80vh]">
            <h1 className="text-3xl sm:text-6xl font-semibold text-center text-[#FFFFFF] mb-5">
              About Us
            </h1>
            <p className="text-center text-[#FFFFFF] text-2xl sm:text-xl font-light">
              At Reshita, we are dedicated to fostering growth and innovation for local businesses and individuals
              <span className="hidden sm:inline font-light ml-2">in Bihar.</span>
              <span className="font-semibold sm:hidden ml-2">in Bihar.</span>
            </p>
          </div>
        </div>
      </div>



      {/* section-2 */}


      <div className="flex items-center justify-center text-center font-PlusJakartaSans h-screen bg-gradient-to-b from-[#000214] to-[#2E7583]">
        <div className="px-6 sm:mx-20 max-w-8xl text-[#DEDEDE] text-lg sm:text-2xl md:text-4xl lg:text-5xl font-medium sm:space-y-4">
          {/* On small screens, show only the first paragraph */}
          <p className="sm:hidden">In the world, where technology is an essential integration in our regular life. The need for smart solutions is a necessity. Reshita envisions to provide an elegant, affordable, and efficient IT solutions to local businesses.</p>

          {/* On larger screens, show all paragraphs */}
          <p className="hidden sm:block">In the world, where technology is an essential integration</p>

          <p className="hidden sm:block">in our regular life. The need for smart solutions is a</p>

          <p className="hidden sm:block">necessity. Reshita envisions to provide an elegant,</p>

          <p className="hidden sm:block">affordable, and efficient IT solutions to local businesses.</p>
        </div>
      </div>




      {/* section-3 */}
      <div className="bg-[#E8E8E8] py-16 px-6 lg:px-12 font-PlusJakartaSans">
        {/* Main Container */}
        <div className="max-w-7xl mx-auto grid gap-8 md:gap-12 lg:gap-0 font-PlusJakartaSans">
          {/* Left Text Section (Mobile only) */}
          <div className="text-3xl sm:text-5xl md:text-7xl font-medium text-gradient leading-tight justify-center text-center lg:hidden">
            <h1>Shaping a </h1>
            <h1 className="font-semibold">Better Tomorrow</h1>
            <h1> With Reshita</h1>
          </div>

          {/* First Row: Centered Card */}
          <div className="flex justify-center ">
            <div className="bg-white shadow-lg rounded-lg p-6 w-full sm:w-[344px] xl:w-[400px] h-[218px]">
              <h2 className="text-3xl font-semibold text-[#14509F]">Our Mission</h2>
              <p className="text-[#42689C] text-base font-light mt-6 m-2">
                We aim to capture the essence of empowering local businesses and
                individuals by enhancing their digital presence.
              </p>
            </div>
          </div>

          {/* Second Row: Split Columns */}
          <div className=" grid grid-cols-1 lg:grid-cols-2  items-end ">
            {/* Left Text Section (Tablet and above) */}
            <div className="hidden lg:block text-3xl  sm:text-5xl md:text-6xl font-medium text-gradient leading-tight space-y-4">
              <h1>Shaping a </h1>
              <h1 className="font-semibold">Better Tomorrow With</h1>
              <h1>Reshita</h1>
            </div>

            {/* Right Card Section */}
            <div className="hidden lg:block relative bg-white md:mb-7 xl:mb-0  md:left-[24%] xl:left-[30%] shadow-lg rounded-lg p-6 w-full sm:w-[344px] xl:w-[400px]  h-[218px]">
              <h2 className="text-3xl font-semibold text-[#14509F]">Our Vision</h2>
              <p className="text-[#42689C] text-base font-light mt-6 m-2">
                We aim to get everyone on board in this fast-changing digital ecosystem.
              </p>
            </div>
          </div>
          {/* Second Row: Centered Card (Mobile and Tablet*/}
          <div className="lg:hidden flex justify-center -mt-12">
            <div className="bg-white shadow-lg rounded-lg p-6 w-full sm:w-[344px] xl:w-[400px] h-[218px]">
              <h2 className="text-3xl font-semibold text-[#14509F]">Our Vision</h2>
              <p className="text-[#42689C] text-base font-light mt-6 m-2">
                We aim to get everyone on board in this fast-changing digital ecosystem.
              </p>
            </div>
          </div>

          {/* Third Row: Centered Card */}
          <div className="flex justify-center">
            <div className="bg-white shadow-lg rounded-lg p-6 w-full sm:w-[344px] xl:w-[400px] h-[218px]">
              <h2 className="text-3xl font-semibold text-[#14509F]">Our Values</h2>
              <p className="text-[#42689C] text-base font-light mt-6 m-2">
                We believe in creating meaningful experiences that empower our customers
                and foster lasting relationships.
              </p>
            </div>
          </div>
        </div>
      </div>



      {/* section-4 */}

      <div className="bg-[#E8E8E8] h-full xl:h-screen   py-5 sm:py-10  px-6 sm:px-12">
        <div className="max-w-7xl mx-auto bg-white rounded-lg shadow-md overflow-hidden flex flex-col lg:flex-row">

          {/* Right Image (on smaller screens, it will appear first, on larger screens, it will be on the right) */}
          <div className="w-full lg:w-1/2 bg-[#153C5D] order-1 lg:order-2">
            <img
              src={MedTech}
              alt="Med-Tech"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Left Content (on smaller screens, it will appear after the image, on larger screens, it will be on the left) */}
          <div className="p-6 lg:p-16 lg:w-1/2 bg-[#153C5D] text-white items-center justify-center text-center flex flex-col lg:justify-center font-PlusJakartaSans order-2 lg:order-1">
            <h2 className="hidden sm:block text-2xl sm:text-6xl font-semibold mb-12">Med-Tech</h2>
            <h2 className="sm:hidden text-2xl text-center sm:text-6xl font-semibold py-3">Med-Tech</h2>
            <p className="text-sm sm:text-2xl py-5 sm:py-0 text-[#FFFFFF] font-light leading-relaxed  ">
              Medical Science in recent time has grown exponentially with the
              integration of improved and upgraded equipment and infrastructure.
              But, when COVID struck, the need for digitalization became prominent.
            </p>
          </div>
        </div>
      </div>

      {/* section-5 */}


      <div
        className="relative h-full bg-fixed bg-center bg-cover bg-no-repeat font-PlusJakartaSans"
        style={{ backgroundImage: `url(${BackgroundImage})` }}
      >
        <div className="py-10 lg:py-16 px-6 lg:px-12 ">
          <div className="max-w-7xl mx-auto grid grid-cols-1 mr-3 xl:mr-8 lg:grid-cols-2 gap-8  items-center">
            {/* Left Text Section */}
            <div className="text-center lg:text-left xl:ml-10 w-full xl:w-[460px] font-PlusJakartaSans">
              <div className="text-3xl sm:text-6xl font-medium text-[#FFFFFF]">
                <h2 className="mb-6 lg:mb-10">
                  Claim Your Exclusive Quote Today!
                </h2>
              </div>

              <p className="text-[#FFFFFF] font-light text-sm sm:text-base">
                Let us partner to discuss how we can help you achieve your goals and
                drive success in the digital landscape. Contact us to get your quote
                today!
              </p>
            </div>

            {/* Right Form Section */}
            <Contactemail />
          </div>
        </div>
      </div>

    </>


  );
}

export default About;
