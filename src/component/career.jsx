import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import backgroundImage2 from "../assets/backgroundImage2.svg";
import Collaborative from "../assets/collab.png";
import PurposeDriven from "../assets/purposeDriven.png";
import CuttingEdge from "../assets/cuttingEdge.png";
import BackgroundColor from "../assets/backgroundColor.svg";
import Careerform from "../email/careerform";



function Career() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0});
  }, [pathname]);
  return (
    <>
      <div
        className="h-screen bg-cover bg-center flex items-center justify-center font-PlusJakartaSans"
        style={{ backgroundImage: `url(${backgroundImage2})` }}
      >
        {/* Content */}
        <div className="relative z-10 text-center text-white px-4 sm:px-6 md:px-8 max-w-7xl sm:max-w-5xl w-full top-8 font-PlusJakartaSans">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 sm:mb-8 md:mb-10">
            Join Us At Reshita
          </h1>
          <p className="text-xl sm:text-2xl  leading-relaxed font-light mb-6 sm:mb-8">
            Join us to commit to maintaining the highest standards of quality and
            excellence in the development and deployment of technologies. See our
            openings on <a href="https://www.linkedin.com" className="underline font-medium">LinkedIn</a>.
          </p>
        </div>
      </div>


      {/* section-2 */}

      <div className="py-16 bg-[#E8E8E8] font-PlusJakartaSans">
        <div className="flex items-center justify-center space-x-4 mb-16">
          <h2 className="text-4xl h-[70px] md:text-5xl xl:text-6xl font-medium text-gradient bg-clip-text text-transparent">
            Why Choose Us
          </h2>
        </div>

        <div className="flex flex-col xl:flex-row -mt-10 sm:-mt-0 justify-center items-center gap-12 xl:gap-24 px-4">
          {/* Collaborative Culture */}
          <div className="bg-gradient-to-b from-[#DC9A52] to-[#A55703] text-white p-6 rounded-lg shadow-md flex-1 max-w-sm h-[285px]">
            <div className="flex items-center mb-6 xl:mb-7">
              <div className="w-16 sm:w-20 h-16 sm:h-20 bg-[#A55703] flex items-center justify-center rounded-full mr-4">
                <img src={Collaborative} alt="Collaborative" className="w-full h-full p-2 object-contain" />
              </div>
              <h3 className="font-semibold text-xl sm:text-2xl">Collaborative Culture</h3>
            </div>
            <p className="text-base sm:text-lg font-light">
              We aim to make the world a better place through innovation and collaboration.
            </p>
          </div>

          {/* Purpose-Driven Mission */}
          <div className="bg-gradient-to-b from-[#898DAE] to-[#2B2E40] text-white p-6 rounded-lg shadow-md flex-1 max-w-sm h-[285px]">
            <div className="flex items-center mb-6 sm:mb-7">
              <div className="w-16 sm:w-20 h-16 sm:h-20 bg-[#2B2E40] flex items-center justify-center rounded-full mr-4">
                <img src={PurposeDriven} alt="Purpose-Driven" className="w-full h-full p-3 object-contain" />
              </div>
              <h3 className="font-semibold text-xl sm:text-2xl">Purpose-Driven <br /> Mission</h3>
            </div>
            <p className="text-base sm:text-lg font-light">
              Contribute to Reshita with a clear mission to make a positive impact on global healthcare aligning your work with a greater purpose.
            </p>
          </div>

          {/* Cutting-Edge Research */}
          <div className="bg-gradient-to-b from-[#489DA2] to-[#045F62] text-white p-6 rounded-lg shadow-md flex-1 max-w-sm h-[285px]">
            <div className="flex items-center mb-6 sm:mb-7">
              <div className="w-16 sm:w-20 h-16 sm:h-20 bg-[#045F62] flex items-center justify-center rounded-full mr-4">
                <img src={CuttingEdge} alt="cuttingEdge" className="w-full h-full p-3 object-contain" />
              </div>
              <h3 className="font-semibold text-xl sm:text-2xl">Cutting-Edge <br />Research</h3>
            </div>
            <p className="text-base sm:text-lg font-light">
              We envision a world where technology is used to solve the most pressing issues facing humanity and improve people's lives.
            </p>
          </div>
        </div>
      </div>




      {/* section-3 */}

      <div className="flex items-center justify-center max-h-screen bg-[#E8E8E8] font-PlusJakartaSans">
        <div
          className="text-center p-7 sm:0 text-[#14509F] py-20 text-lg md:text-5xl font-normal  max-w-6xl  space-y-4" >

          {/* On small screens, show only the first paragraph */}
          <p className="sm:hidden">Explore a dynamic environment where innovation thrives, and discover endless opportunities for professional development. With a strategic focus on cutting-edge advancements in medical.Our platform propels your career forward in an ever-evolving industry.</p>
          {/* On larger screens, show all paragraphs */}
          <p className="hidden sm:block">Explore a dynamic environment where innovation</p>
          <p className="hidden sm:block">thrives, and discover endless opportunities for</p>
          <p className="hidden sm:block">professional development. With a strategic focus</p>
          <p className="hidden sm:block">on cutting-edge advancements in medical, our</p>
          <p className="hidden sm:block">evolving industry.</p>
        </div>
      </div>

      {/* section-4 */}

      <div className="min-h-screen bg-[#E8E8E8] p-5 sm:p-10 lg:p-20 flex items-center justify-center font-PlusJakartaSans">
  <div
    className="relative rounded-2xl  bg-cover bg-center text-white p-8 sm:p-12 xl:p-14 max-w-7xl mx-auto xl:h-[523px] h-auto flex flex-col xl:flex-row w-full"
    style={{ backgroundImage: `url(${BackgroundColor})` }}
  >
    {/* Header Section */}
<div className="flex flex-col w-full xl:w-[450px] mb-8 xl:mb-0 items-center xl:justify-center text-center xl:text-start">
  <h2 className="text-4xl sm:text-6xl font-medium mb-4">Join Our Team</h2>
  <p className="mb-6 text-[#FFFFFF] text-base sm:text-lg">
    Join us to commit to maintaining the highest standards of quality and excellence.
  </p>
</div>



    {/* Form Section */}
    <Careerform />
  </div>
</div>


    </>
  )
}

export default Career;
