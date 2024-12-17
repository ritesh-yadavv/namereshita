import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import backgroundImage3 from "../assets/backgrounImage3.svg";
import Pharmabiz from "../assets/pharmabiz.svg";
import Post2Pillar from "../assets/post2Pillar.svg";
import DarpanSamachar from "../assets/darpanSamachar.svg";
import BackgroundColor from "../assets/backgroundColor.svg";
import GalleryImage1 from "../assets/galleryImage1.svg";
import GalleryImage2 from "../assets/galleryImage2.svg";
import GalleryImage3 from "../assets/galleryImage3.svg";
import NewsPaper1 from "../assets/newspaper1.svg";
import NewsPaper2 from "../assets/newspaper2.svg";
import NewsPaper3 from "../assets/newspaper3.svg";
import NewsPaper4 from "../assets/newspaper4.svg";
import NewsPaper5 from "../assets/newspaper5.svg";





function Media() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, [pathname]);
  return (
    <>
      <div
        className="h-screen bg-cover bg-center  flex items-center justify-center font-PlusJakartaSans"
        style={{ backgroundImage: `url(${backgroundImage3})` }}
      >
        {/* Content */}
        <div className="relative z-10 text-center text-white px-4 max-w-5xl top-8 font-PlusJakartaSans">
          <div className="text-2xl sm:text-5xl leading-relaxed font-semibold font-PlusJakartaSans sm:space-y-4">
            <p>Revolutionizing private healthcare:</p>
            <p>Introducing Doc-Aid, clinic</p>
            <p>management solution for Digital India</p>

          </div>
        </div>
      </div>

      {/* section-2 */}

      <div className="flex flex-col justify-center bg-[#E8E8E8]">
        <div className="max-w-7xl w-full flex flex-col  py-10 xl:py-20 mx-auto">
          {/* Left Section: Header */}
          <div className="flex-1 flex justify-center mb-5 xl:mb-10">
            <div className=" text-2xl  sm:text-4xl xl:text-6xl space-y-6 font-medium text-gradient bg-clip-text text-transparent text-center">
              <p>Doc-Aid Is Seen On</p>
            </div>
          </div>

          {/* Cards Section */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-8 px-6 ">
            {/* PHARMABIZ */}
            <div className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center justify-center ">
              <Link
                target="_blank"
                to="https://www.pharmabiz.com/NewsDetails.aspx?aid=168528&sid=2" className="w-[280px] h-[135px] sm:w-full sm:h-full items-center text-center justify-cente">
                <img src={Pharmabiz} alt="PHARMABIZ" className="mt-12 xl:mt-12" />
              </Link>
            </div>
            {/* DARPAN SAMACHAR */}
            <div className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center justify-center">
              <Link
                to="https://www.darpansamachar.com/lander"
                target="_blank"
                className="w-[280px] h-[135px] sm:w-full sm:h-full items-center text-center justify-center"
              >

                <img src={DarpanSamachar} alt="DarpanSamachar" className="ml-14 sm:ml-4  xl:ml-24" />
              </Link>
            </div>

            {/*  POST2PILLAR */}
            <div className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center justify-center">
              <Link to="https://post2pillar.com/bihar/doc-ed-will-be-a-complete-solution-to-the-clinic-management-of-private-healthcare-doctors-ravi-shankar-prasad"
                target="_blank"
                className="w-[280px] h-[135px] sm:w-full sm:h-full items-center text-center justify-center "
              >
                <img src={Post2Pillar} alt="Post2Pillar" className="mt-12" />
              </Link>

            </div>


          </div>
        </div>
      </div>
      {/* section-3 */}

      <div className="overflow-hidden w-full bg-[#E8E8E8] py-16 -mt-16 sm:-mt-2">
        {/* Wrapper div */}
        <div className="flex overflow-hidden space-x-6 group w-[719px] h-[177px] sm:w-full sm:h-full">
          {/* First scrolling set */}
          <div className="flex space-x-6 animate-loop-scroll group-hover:paused">
            <img
              src={NewsPaper1}
              className="max-w-none w-[220px] h-[355px] object-cover"
              alt="NewsPaper1"
            />
            <img
              src={NewsPaper2}
              className="max-w-none w-[273px] h-[355px] object-cover"
              alt="NewsPaper2"
            />
            <img
              src={NewsPaper3}
              className="max-w-none w-[235px] h-[355px] object-cover"
              alt="NewsPaper3"
            />
            <img
              src={NewsPaper4}
              className="max-w-none w-[438px] h-[355px] object-cover"
              alt="NewsPaper4"
            />
            <img
              src={NewsPaper5}
              className="max-w-none w-[199px] h-[355px] object-cover"
              alt="NewsPaper5"
            />
          </div>
          {/* Duplicate set for seamless loop */}
          <div
            className="flex space-x-6 animate-loop-scroll group-hover:paused"
            aria-hidden="true"
          >
            <img
              src={NewsPaper1}
              className="max-w-none w-[220px] h-[355px] object-cover"
              alt="NewsPaper1"
            />
            <img
              src={NewsPaper2}
              className="max-w-none w-[273px] h-[355px] object-cover"
              alt="NewsPaper2"
            />
            <img
              src={NewsPaper3}
              className="max-w-none w-[235px] h-[355px] object-cover"
              alt="NewsPaper3"
            />
            <img
              src={NewsPaper4}
              className="max-w-none w-[438px] h-[355px] object-cover"
              alt="NewsPaper4"
            />
            <img
              src={NewsPaper5}
              className="max-w-none w-[199px] h-[355px] object-cover"
              alt="NewsPaper5"
            />
          </div>
        </div>
      </div>


      {/* section-4 */}

      <div className="bg-[#E8E8E8] py-5 xl:py-10">
        <div
          className="relative bg-cover bg-center text-white rounded-lg p-6 shadow-xl w-full h-full xl:h-[834px] max-w-7xl mx-auto flex flex-col"
          style={{ backgroundImage: `url(${BackgroundColor})` }}
        >
          <div className="top-2 container mx-auto p-4 font-PlusJakartaSans">
            {/* Heading */}
            <h2 className="relative text-center text-white text-6xl font-semibold mb-10">
              Our Gallery
            </h2>

            {/* Image Grid */}
            <div className="grid grid-cols-1 xl:grid-cols-3 gap-8 xl:gap-4 mb-16 xl:mb-12 justify-between xl:items-center xl:text-center">
              <img
                src={GalleryImage1}
                alt="GalleryImage"
                className="rounded-lg shadow-lg mx-auto w-full h-full"
              />
              <img
                src={GalleryImage2}
                alt="GalleryImage2"
                className="rounded-lg shadow-lg mx-auto w-full h-full"
              />
              <img
                src={GalleryImage3}
                alt="GalleryImage3"
                className="rounded-lg shadow-lg mx-auto w-full h-full"
              />
            </div>

            {/* Video Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 xl:gap-8 justify-center xl:mb-16">
              {/* YouTube Video 1 */}
              <div className="mb-6 xl:mb-12 flex justify-center">
                <iframe
                  className="rounded-lg shadow-lg w-[580px] h-[269px] -mt-6 sm:-mt-0 border border-[#42689C]"
                  src="https://www.youtube.com/embed/jad-RdGjUYs"
                  title="YouTube Video 1"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>

              {/* YouTube Video 2 */}
              <div className="flex justify-center">
                <iframe
                  className="rounded-lg shadow-lg w-[580px] h-[269px] -mt-6 sm:-mt-0 border border-[#42689C]"
                  src="https://www.youtube.com/embed/Bw6ytk6MTZ8"
                  title="YouTube Video 2"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>

    </>
  )
}

export default Media;
