import React from "react";
import { Link } from "react-router-dom";
import ReshitaFooter from "../assets/reshitasfooterLogo.svg";
import Facebook from "../assets/facebook.png";
import Linkedin from "../assets/linkedin.png";
import Instagram from "../assets/instagram.png";

const Footer = () => {
  return (
    <>
      <div className="flex p-10 h-full xl:h-[350px] text-white bg-gradient-to-b from-[#2E7583] to-[#000214]">
        <div className="container max-w-7xl  mx-auto grid grid-cols-2  xl:grid-cols-4  gap-6 font-PlusJakartaSans">

          {/* Logo and Description */}
          <div className="col-span-2 sm:col-span-2 xl:col-span-1">
            <img src={ReshitaFooter} alt="Reshita_Footer-Logo" className=" w-[85px] h-[45px]  sm:w-[146px] sm:h-[77.25px]" />
            <p className="text-sm sm:text-base font-normal w-[264px] h-[52px] mt-4 ml-3">
              Elegant, affordable, and efficient IT solutions for local businesses.
            </p>

            <div className="mt-6 ml-3 hidden xl:block">
              <h1 className="text-[#2E7583] text-sm sm:text-base font-semibold">Follow Us</h1>
              <div className="flex space-x-4 mt-4">
                <Link to="https://www.facebook.com/people/Doc-Aid/61556015829406/?is_tour_completed=true" className="bg-white border border-[#FFFFFF] hover:border-gray-600 rounded-full "
                target="_blank"
                rel="noopener noreferrer">
                  <img src={Facebook} alt="facebook" />
                </Link>
                <Link to="https://www.linkedin.com/company/reshita/" className="bg-white border border-[#FFFFFF] hover:border-gray-600 rounded-full "
                target="_blank"
                rel="noopener noreferrer">
                  <img src={Linkedin} alt="linkedin" />
                </Link>
                <Link to="https://www.instagram.com/reshita.docaid/" className="bg-white border border-[#FFFFFF] hover:border-gray-600 rounded-full" 
                target="_blank"
                    rel="noopener noreferrer">
                  <img src={Instagram} alt="instagram" />
                </Link>
              </div>
            </div>

          </div>

          {/* Quick Links */}
          <div className="xl:ml-52 text-base text-[#E0E0E0]  sm:col-span-1 xl:col-span-1">
            <h2 className="text-sm sm:text-base text-[#3C97A9] font-semibold sm:py-7">Quick Links</h2>
            <ul className="space-y-3 ">
              <li>
                <Link to="/" className="hover:underline hover:text-white ">Home</Link>
              </li>
              <li>
                <Link to="/about" className="hover:underline hover:text-white">About Us</Link>
              </li>
              <li>
                <Link to="/products" className="hover:underline hover:text-white">Products</Link>
              </li>
              <li>
                <Link to="/careers" className="hover:underline hover:text-white">Careers</Link>
              </li>
              <li>
                <Link to="/media" className="hover:underline hover:text-white">Contact Us</Link>
              </li>
            </ul>
          </div>

          {/* Policy Links */}
          <div className="xl:ml-24 ml-5 md:ml-36 text-base  sm:col-span-1 xl:col-span-1">
            <h2 className="text-[#3C97A9] text-sm sm:text-base font-semibold sm:py-7">Policy</h2>
            <ul className="space-y-3 text-[#E0E0E0] font-light text-sm sm:text-base ">
              <li>
                <Link to="/termsCondition" className="hover:underline hover:text-white">Terms & Conditions</Link>
              </li>
              <li>
                <Link to="/cancellation&RefundPolicy" className="hover:underline hover:text-white">Cancellation Policy</Link>
              </li>
              <li>
                <Link to="privacyPolicy" className="hover:underline hover:text-white">Privacy Policy</Link>
              </li>
              <li>
                <Link to="/cancellation&RefundPolicy" className="hover:underline hover:text-white">Refund Policy</Link>
              </li>
            </ul>
          </div>

          {/* Address */}
          <div className="xl:ml-8 text-[#E0E0E0] text-sm sm:text-base col-span-2 sm:col-span-1 xl:col-span-1">
            <h2 className="sm:text-base text-[#3C97A9] font-semibold sm:py-7">Address</h2>
            <p className="text-sm  sm:text-base hover:text-white">
              Flat no. 33 Mangaldeep Apartment<br />
              Patliputra Colony, Patna, 800013
            </p>
            <p className="text-sm sm:text-base mt-2 hover:text-white">Office: 0612–4061095</p>
          </div>


          <div className="block xl:hidden md:ml-36">
            <h1 className="text-[#2E7583] text-sm font-semibold">Follow Us</h1>
            <div className="flex space-x-4 mt-4">
              <a
                href="https://www.facebook.com/people/Doc-Aid/61556015829406/?is_tour_completed=true"
                className="bg-white border border-[#FFFFFF] hover:border-gray-600 rounded-full"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={Facebook} alt="facebook" />
              </a>
              <a
                href="https://www.linkedin.com/company/reshita/"
                className="bg-white border border-[#FFFFFF] hover:border-gray-600 rounded-full"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={Linkedin} alt="linkedin" />
              </a>
              <a
                href="https://www.instagram.com/reshita.docaid/"
                className="bg-white border border-[#FFFFFF] hover:border-gray-600 rounded-full"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={Instagram} alt="instagram" />
              </a>
            </div>
          </div>




        </div>
      </div>

      {/* Bottom */}
      <div className="h-[50px] bg-[#2E7583] items-center justify-center py-4 font-PlusJakartaSans ">
        <p className="text-center text-white text-xs sm:text-sm">
          © 2024 Design. All Rights Reserved.
        </p>
      </div>


    </>

  );
};

export default Footer;
