import React, { useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import Rectangle from "../assets/rectangle.svg";
import Appointments from "../assets/appointments.svg";
import DocAidLogo from "../assets/docaidlogo.svg";
import Enquiry from '../email/enquiry';
import Testimonials from "../card/testimonials";

function Home() {
  const { pathname } = useLocation();

  const section3Ref = React.useRef(null);

  const scrolltoSection3 = () => {
    section3Ref.current.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    window.scrollTo({ top: 0});
  }, [pathname]);
  return (
    <>
      {/* section-1 */}
      {/* Main Container */}
      <div className="flex flex-col items-center justify-center min-h-screen font-PlusJakartaSans bg-gradient-to-b from-[#2E7583] to-[#000214] px-4">
        <div className="text-center text-white max-w-6xl mt-20 ">

          {/* Heading Section with Image on Same Row */}
          <h1 className="text-sm md:text-base font-normal">
            RESHITA Presents You
          </h1>
          <h2 className="text-2xl md:text-6xl font-normal mb-2">
            A Clinic Management Solution For{" "}
          </h2>

          {/* Flex container for text and image */}
          <div className="flex items-center justify-center">
            <h2 className="text-teal-300 text-2xl md:text-6xl font-semibold mb-12">
              Private Practitioners
            </h2>
            <img
              src={Rectangle}
              alt="Rectangle"
              className="w-24 h-24 md:block hidden"
            />
          </div>

        </div>
        {/* Button Section */}
        <button
          onClick={scrolltoSection3}
          className="mt-14 w-[196px] h-[56px] bg-[#14509F] rounded-full hover:bg-[#42689C] transition-all text-white font-medium text-sm md:text-base">
          Learn more
        </button>
      </div>


      {/* section-2 */}
      <div className="flex flex-col items-center justify-center h-auto lg:h-[780px] bg-[#E8E8E8] px-4">
        <div className="text-center text-white max-w-8xl -mt-24 lg:-mt-20">
          <img src={Appointments} alt="Appointments" className="w-full md:w-auto" />
        </div>
      </div>

      {/* section-3 */}
      <div
        ref={section3Ref}
        className="bg-[#E8E8E8] px-6    h-full  font-PlusJakartaSans">
        {/* Title with Horizontal Lines */}
        <div className="flex items-center justify-center max-w-7xl mx-auto lg:py-4 gap-4">
          <hr className="flex-grow border-t border-[#42689C] md:ml-12 lg:ml-0" />
          <h2 className="text-2xl md:text-4xl font-semibold text-gradient text-center">
            About Doc-Aid
          </h2>
          <hr className="flex-grow border-t border-[#42689C] md:mr-12 lg:mr-0" />
        </div>

        {/* Content Section */}
        <div className="max-w-7xl xl:p-14 mx-auto mt-8 xl:mt-16  flex flex-col xl:flex-row items-center space-y-12 xl:space-y-0 xl:space-x-16">
          {/* Left Column: Animated Circle with Logo */}
          <div className="relative flex justify-center items-center w-full md:w-1/2">
            <div className="absolute w-[240px] md:w-[340px] md:h-[340px] lg:w-[500px] h-[240px] lg:h-[500px] rounded-full bg-gradient-to-b from-[#07A0A500] via-[#07A0A5] to-[#D8453C] animate-spinslow"></div>
            <div className="relative w-[220px] md:w-[320px] md:h-[320px] lg:w-[440px] h-[220px] lg:h-[440px] rounded-full bg-gradient-to-b from-[#2E7583] to-[#192029] flex items-center justify-center">
              <img
                src={DocAidLogo}
                alt="Doc-Aid Logo"
                className="w-[120px] md:w-[200px] object-contain"
              />
            </div>
          </div>

          {/* Right Column: Text Content */}
          <div className="text-center md:p-8 xl:p-0 xl:text-left xl:w-1/2">
            <h2 className="text-lg md:text-3xl xl:text-2xl font-medium text-[#156356] mb-6">
              Doc-Aid provides you an Elegant & Efficient solution for Clinic
              Management in a modern world.
            </h2>
            <p className="text-[#333333] text-sm md:text-base leading-relaxed mb-8">
              In today’s fast-paced healthcare landscape, digitalization is not just
              an option, it’s a necessity. Doc-Aid offers the ideal solution for
              seamlessly managing doctor appointments, prescriptions, and payments
              for modern clinics. Tailored for doctors with consultations at multiple
              locations, our portal streamlines your workflow and enhances
              efficiency.
            </p>
            <Link to="https://doc-aid.in/"
            target="_blank"
            rel="noopener noreferrer">
            
            <button className="w-[140px] md:w-[160px] h-[50px] md:h-[60px] bg-[#14509F] text-white text-sm md:text-base font-medium rounded-full hover:bg-[#42689C] transition">
              Sign Up
            </button>
            </Link>
 
          </div>
        </div>
      </div>


      {/* section-4 */}
      <div className="bg-[#E8E8E8] py-12 lg:py-6 justify-center">
        {/* Section Title */}
        <div className="flex max-w-full xl:max-w-7xl mx-8 xl:mx-auto items-center py-2 gap-2 xl:gap-5">
          <hr className="flex-grow border-t border-[#42689C]  md:ml-12 lg:ml-0 " />
          <h2 className="text-2xl sm:h-[70px] md:text-5xl font-medium text-gradient">Why Choose Us</h2>
          <hr className="flex-grow border-t border-[#42689C]  md:mr-12 lg:mr-0  " />
        </div>

        {/* Cards Section */}
        <div className="bg-[#E8E8E8] py-0 sm:py-12 md:p-0 -mt-6 sm:-mt-0  flex justify-center">
          {/* Cards Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 max-w-7xl mx-8 lg:mx-auto py-12 font-PlusJakartaSans">
            {/* Card 1 */}
            <div className="flex flex-col p-6 group bg-white border rounded-lg shadow-lg w-full h-[180px] md:h-[230px] hover:h-[270px] group-hover:scale-y-110 hover:bg-blue-700 hover:text-white transition-all duration-300 ease-in-out">
              <h1 className="text-5xl font-medium text-[#14509F] group-hover:text-white transition-all duration-300 ease-in-out">1.</h1>
              <p className="mt-4 text-xl md:text-2xl font-medium text-[#14509F] group-hover:text-white transition-all duration-300 ease-in-out">
                Multi-Platform Accessibility
              </p>
              {/* Additional Description */}
              <p className="mt-4 text-sm font-light opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out">
                Manage appointments, prescriptions, and payments from any device, anytime, anywhere.
              </p>
            </div>

            {/* Card 2 */}
            <div className="flex flex-col p-6 group bg-white border rounded-lg shadow-lg w-full h-[180px] md:h-[230px] hover:h-[270px] group-hover:scale-y-110 hover:bg-blue-700 hover:text-white transition-all duration-300 ease-in-out">
              <h1 className="text-5xl font-medium text-[#14509F] group-hover:text-white transition-all duration-300 ease-in-out">2.</h1>
              <p className="mt-4 text-xl md:text-2xl font-medium text-[#14509F] group-hover:text-white transition-all duration-300 ease-in-out">
                Effortless Scheduling
              </p>
              {/* Additional Description */}
              <p className="mt-4 text-sm font-light opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out">
                Streamline patient onboarding and prescription management, optimizing your time for accurate diagnoses.
              </p>
            </div>

            {/* Card 3 */}
            <div className="flex flex-col p-6 group bg-white border rounded-lg shadow-lg w-full h-[180px] md:h-[230px] hover:h-[270px] group-hover:scale-y-110 hover:bg-blue-700 hover:text-white transition-all duration-300 ease-in-out">
              <h1 className="text-5xl font-medium text-[#14509F] group-hover:text-white transition-all duration-300 ease-in-out">3.</h1>
              <p className="mt-4 text-xl md:text-2xl font-medium text-[#14509F] group-hover:text-white transition-all duration-300 ease-in-out">
                Data Security And Privacy
              </p>
              {/* Additional Description */}
              <p className="mt-4 text-sm font-light opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out">
                Operates within Ayushman Bharat Digital Program protocols, ensuring data security.
              </p>
            </div>

            {/* Card 4 */}
            <div className="flex flex-col p-6 group bg-white border rounded-lg shadow-lg w-full h-[180px] md:h-[230px] hover:h-[270px] group-hover:scale-y-110 hover:bg-blue-700 hover:text-white transition-all duration-300 ease-in-out">
              <h1 className="text-5xl font-medium text-[#14509F] group-hover:text-white transition-all duration-300 ease-in-out">4.</h1>
              <p className="mt-4 text-xl md:text-2xl font-medium text-[#14509F] group-hover:text-white transition-all duration-300 ease-in-out">
                Maintenance Of Accounts
              </p>
              {/* Additional Description */}
              <p className="mt-4 text-sm font-light opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out">
                Beyond scheduling, gain valuable insights into per-clinic visits and earnings effortlessly.
              </p>
            </div>
          </div>
        </div>

      </div>

      {/* section-5 */}
      <Testimonials />

      {/* section-6 */}
      <Enquiry />
    </>
  );
}

export default Home;
