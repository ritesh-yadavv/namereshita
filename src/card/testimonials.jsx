import React, { useRef, useState } from "react";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import Sameer from "../assets/sameer.png";
import Niraj from "../assets/niraj.png";
import Ritik from "../assets/ritik.png";

const testimonials = [
  {
    name: "Dr. Sameer Anand",
    color: "#EC963F",
    image: Sameer,
    text: "I'm thoroughly impressed with Doc-Aid. It streamlines patient records, enhances the overall experience, and significantly reduces administrative workload. The user-friendly interface enhances the overall experience.",
  },
  {
    name: "Dr. Niraj Walia",
    color: "#2B2E40",
    image: Niraj,
    text: "I'm thoroughly impressed with Doc-Aid. It streamlines patient records, enhances the overall experience, and significantly reduces administrative workload. The user-friendly interface, seamless appointment scheduling, billing, and robust security measures instill trust among staff and patients.",
  },
  {
    name: "Dr. Ritik Singh",
    color: "#5F9BA1",
    image: Ritik,
    text: "I'm thoroughly impressed with Doc-Aid. It streamlines patient records, enhances the overall experience, and significantly reduces administrative workload. The user-friendly interface enhances the overall experience.",
  },
];

const Testimonials = () => {
  const swiperRef = useRef(null); // Ref to store Swiper instance
  const [activeIndex, setActiveIndex] = useState(0);

  // Handles moving to the previous slide
  const handlePrev = () => {
    if (swiperRef.current) {
      swiperRef.current.slidePrev();
     
    } 
  };


  return (
    <div className="flex flex-col items-center bg-[#E8E8E8] -mt-10 sm:-mt-0 xl:py-10">
      {/* Header Section */}
      <div className="flex items-center max-w-7xl py-10 w-full gap-4 p-6">
        <hr className="flex-grow border-t border-[#42689C]" />
        <h2 className="text-2xl md:text-5xl font-medium mx-2 sm:mx-4 text-gradient">
          Testimonials
        </h2>
        <hr className="flex-grow border-t border-[#42689C]" />
      </div>

      {/* Swiper Section */}
      <Swiper
        initialSlide={1} 
        centeredSlides={true}
        // centeredSlidesBounds={true}
        slidesPerView="auto"
     

        onSwiper={(swiper) => {
          swiperRef.current = swiper; 
          
        }}
        onSlideChange={(swiper) => {
          setActiveIndex(swiper.realIndex); 
        }}
        spaceBetween={30}
      
        centeredSlidesBounds={true}
        // centeredSlides={true}
        loop={true}
        breakpoints={{
          0: { slidesPerView: 1 }, 
          768: { slidesPerView: 3 }, 
          1280: { slidesPerView: 3 }, 
        }}
        className="w-full max-w-7xl relative"
      >
        {testimonials.map((testimonial, index) => (
          <SwiperSlide key={index} className="flex justify-center ml-3 xl:ml-2">
            <div
              style={{
                backgroundColor: testimonial.color,
                opacity: index === activeIndex ? 1 : 0.5, // Highlight active slide
              }}
              className="shadow-lg rounded-lg p-6 text-center w-[300px] md:w-[260px] xl:w-[390px] h-[380px] transition-all duration-300"
            >
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="w-16 h-16 rounded-full mx-auto mb-4"
              />
              <h3 className="text-lg font-medium mb-2">{testimonial.name}</h3>
              <p className="text-gray-200">{testimonial.text}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Manual Navigation Section */}
      <div className="flex justify-center items-center space-x-28 py-7">
        <button
          onClick={handlePrev}
          className="bg-white border-2 border-black text-black text-2xl w-[43px] h-[43px] rounded-full shadow-md hover:bg-[#42689C]"
        >
          &lt;
        </button>
        <button
          onClick={handlePrev}
          className="bg-white border-2 border-black text-black text-2xl w-[43px] h-[43px] rounded-full shadow-md hover:bg-[#42689C]"
        >
          &gt;
        </button>
      </div>
    </div>
  );
};

export default Testimonials;
