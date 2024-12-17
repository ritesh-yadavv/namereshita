import React, { useRef, useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import AppointmentsTable from "../assets/appointmentstable.svg";
import BackgroundColor from "../assets/backgroundColor.svg";
import DemoVideo from "../assets/demovideo.mp4";
import DocAidLogo from "../assets/Doc-Aidicon.svg";
import Enquiry from '../email/enquiry';

function Products() {
  const { pathname } = useLocation();
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlayPause = () => {
    if (isPlaying) {
      videoRef.current.pause();
    } else {
      videoRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };
  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, [pathname]);

  return (
    <>
      <div className="bg-gradient-to-b from-[#2E7583] to-[#000214] h-screen font-PlusJakartaSans flex items-center justify-center">
        <div className="text-center sm:mt-10 mt-20 sm:px-6 px-4">
          <h1 className="text-3xl sm:text-6xl xl:text-[80px] text-white font-semibold sm:mb-8 mb-4 sm:px-8">
            Clinic Management Solution
          </h1>
          <p className="text-xl sm:text-3xl md:text-4xl xl:text-5xl text-[#FFFFFF] sm:mb-6 mb-12">
            Let’s Digitize!
          </p>
        </div>
      </div>


      {/* section-2 */}


      <div className="bg-[#E8E8E8] h-full xl:min-h-screen flex flex-col items-center justify-center p-4 sm:p-8">
        <div className="w-full h-full p-2 sm:p-8 max-w-full sm:max-w-5xl ">
          <div className="mt-6 sm:mt-8">
            <img
              src={AppointmentsTable}
              alt="Appointments Table"
              className="w-full h-full rounded-lg"
            />
          </div>
        </div>
      </div>

      {/* section-3 */}

      <div className="flex bg-[#E8E8E8] h-full lg:h-screen p-6 font-PlusJakartaSans">
        <div
          className="bg-cover bg-center text-white rounded-lg p-6 shadow-lg w-full h-full max-w-7xl mx-auto flex flex-col justify-center items-center"
          style={{ backgroundImage: `url(${BackgroundColor})` }}
        >
          <h2 className="relative text-2xl sm:text-4xl md:text-5xl font-semibold text-center text-white mb-6 sm:mb-12">
            Product Highlights
          </h2>

          <div className="flex justify-center items-center relative w-full">
            <div
              className={`w-full max-w-4xl aspect-w-16 aspect-h-9 transition-all duration-300 ${!isPlaying ? 'shadow-2xl' : ''}`}
            >
              <video
                ref={videoRef}
                className="rounded-lg w-full h-full object-cover"
                controls
                autoPlay={isPlaying}
                onPlay={() => setIsPlaying(true)}
                onPause={() => setIsPlaying(false)}
              >
                <source src={DemoVideo} type="video/mp4" />
                Your browser does not support the video tag.
              </video>

              {/* Play/Pause Button */}
              <button
                onClick={togglePlayPause}
                className={`absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 text-white rounded-lg transition-opacity duration-300 ${isPlaying ? "opacity-0" : "opacity-100"}`}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className=" w-8 sm:w-16  h-8 sm:h-16 text-black bg-[#FB921F] rounded-full"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  {isPlaying ? "" : (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1"
                      d="M8 5l10 7-10 7z"
                    />
                  )}
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>



      {/* section-4 */}

      <div className="bg-[#153C5D] flex flex-col h-full sm:min-h-screen font-PlusJakartaSans">
        {/* Main Content Section */}
        <div className="flex flex-col sm:flex-row max-w-8xl mx-auto p-6 sm:p-16 mt-5 w-full">
          {/* Left Column with Header and Image */}
          <div className="flex-1 flex flex-col text-white px-6 sm:mb-0 mb-10">
            <h1 className="text-4xl sm:text-7xl font-medium mb-4">
              How we get <br /> things <span className="font-semibold">done</span>
            </h1>
            <div className="relative top-8 sm:top-16">
              <img
                src={DocAidLogo}
                alt="DocAid Logo"
                className="w-[200px] h-[200px] sm:w-[372px] sm:h-[381px] mx-auto sm:mx-0"
              />
            </div>
          </div>

          {/* Right Column with Scrollable Text Content */}
          <div className="flex-1 relative p-4 sm:p-6 overflow-y-auto scrollbar-hidden sm:h-[600px] h-[200px] text-white font-PlusJakartaSans">
            <div className="space-y-8">
              {/* Section 0 */}
              <div className="sm:space-y-36">
                <h2 className="text-xl font-bold"></h2>
                <ul className="list-disc list-inside"></ul>
              </div>
              {/* Section 1 */}
              <div className="text-base font-light">
                <div className="flex space-x-4 items-center text-xl sm:text-3xl font-medium">
                  <h1>1</h1>
                  <h2>Understanding Client Needs</h2>
                </div>
                <ul className="list-disc list-inside p-4 sm:p-6 ml-1">
                  <li>
                    We start by deeply understanding your goals, challenges, and
                    requirements.
                  </li>
                  <li>Customized approach tailored to your unique needs.</li>
                  <li>
                    Transparent communication at every step of the process.
                  </li>
                </ul>
              </div>
              <hr className="border-t" />

              {/* Section 2 */}
              <div>
                <div className="flex space-x-4 items-center text-xl sm:text-3xl font-medium">
                  <h1>2</h1>
                  <h2>Research & Planning</h2>
                </div>
                <ul className="list-disc list-inside p-4 sm:p-6 ml-1">
                  <li>
                    Extensive market research to understand trends and best practices.
                  </li>
                  <li>
                    Strategic planning to lay a solid foundation for the project.
                  </li>
                </ul>
              </div>
              <hr className="border-t" />

              {/* Section 3 */}
              <div>
                <div className="flex space-x-4 items-center text-xl sm:text-3xl font-medium">
                  <h1>3</h1>
                  <h2>Design & Development</h2>
                </div>
                <ul className="list-disc list-inside p-4 sm:p-6 ml-1">
                  <li>
                    Innovative solutions crafted with precision and creativity.
                  </li>
                  <li>
                    Iterative design and development to ensure top quality.
                  </li>
                </ul>
              </div>
              <hr className="border-t" />

              {/* Section 4 */}
              <div>
                <div className="flex space-x-4 items-center text-xl sm:text-3xl font-medium">
                  <h1>4</h1>
                  <h2>Testing & Feedback</h2>
                </div>
                <ul className="list-disc list-inside p-4 sm:p-6 ml-1">
                  <li>Rigorous testing to guarantee performance and usability.</li>
                  <li>Gathering feedback and making necessary refinements.</li>
                </ul>
              </div>
              <hr className="border-t" />

              {/* Section 5 */}
              <div>
                <div className="flex space-x-4 items-center text-xl sm:text-3xl font-medium">
                  <h1>5</h1>
                  <h2>Launch & Delivery</h2>
                </div>
                <ul className="list-disc list-inside p-4 sm:p-6 ml-1">
                  <li>On-time delivery without compromising quality.</li>
                  <li>Continuous support to ensure smooth operation.</li>
                  <li>
                    Regular updates and maintenance for long-term success.
                  </li>
                </ul>
              </div>
              <hr className="border-t" />
            </div>
          </div>
        </div>
      </div>





      {/* section-5 */}
      <Enquiry />

    </>

  )
}

export default Products;
