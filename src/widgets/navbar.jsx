import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import ReshitaLogo from "../assets/reshitalogo.svg";
import BackgroundColor from "../assets/backgroundColor.svg";


const Navbar = () => {

  const [open, setOpen] = useState(false);

  const handleNavLinkClick = () => {
    setOpen(false); // Close the menu when a NavLink is clicked
  };
  return (
    <nav className="bg-gray-800 backdrop-blur-md p-6  py-4  fixed top-0 left-0 w-full z-50 font-PlusJakartaSans">
      <div className="flex items-center justify-between max-w-7xl mx-auto">
        {/* Logo Section */}
        <div className="flex items-center">
          <Link to="/">
          <img
            src={ReshitaLogo}
            className="h-11  md:h-14 lg:h-[60px] sm:w-auto"
            alt="Reshita Logo"
          />
          </Link>
          

        </div>

        {/* Navigation Links (Desktop) */}
        <div className="hidden md:flex space-x-8 text-[#C0C0C0] text-base font-semibold font-PlusJakartaSans">
          <NavLink
            to="/"
            onClick={handleNavLinkClick}
            className={({ isActive }) =>
              isActive
                ? "text-[#FFFFFF] border-b-2 border-[#FFFFFF] "
                : "hover:text-[#FFFFFF]"
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            onClick={handleNavLinkClick}
            className={({ isActive }) =>
              isActive
                ? "text-[#FFFFFF] border-b-2 border-[#FFFFFF]"
                : "hover:text-[#FFFFFF]"
            }
          >
            About Us
          </NavLink>
          <NavLink
            to="/products"
            onClick={handleNavLinkClick}
            className={({ isActive }) =>
              isActive
                ? "text-[#FFFFFF] border-b-2 border-[#FFFFFF]"
                : "hover:text-[#FFFFFF]"
            }
          >
            Products
          </NavLink>
          <NavLink
            to="/careers"
            onClick={handleNavLinkClick}
            className={({ isActive }) =>
              isActive
                ? "text-[#FFFFFF] border-b-2 border-[#FFFFFF]"
                : "hover:text-[#FFFFFF]"
            }
          >
            Careers
          </NavLink>
          <NavLink
            to="/media"
            onClick={handleNavLinkClick}
            className={({ isActive }) =>
              isActive
                ? "text-[#FFFFFF] border-b-2 border-[#FFFFFF]"
                : "hover:text-[#FFFFFF]"
            }
          >
            Media
          </NavLink>
        </div>
        {/* Contact Us Button */}
        <a href="/contact">
          <button className="hidden md:block bg-white text-[#14509F] font-normal text-base py-2 xl:py-3 px-6 xl:px-8 rounded-full hover:bg-[#42689C] hover:text-[#FFFFFF] transition duration-1000">
            Contact Us
          </button>
        </a>

        {/* Mobile Menu Toggle */}
        <button
          className="block md:hidden text-white"
          onClick={() => setOpen(!open)}
        >
          {open ? (
            <div className="text-3xl"></div>
          ) : (
            <svg
              className="w-6 h-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`fixed inset-0   bg-cover bg-no-repeat bg-[#192029] h-screen text-white flex flex-col items-start space-y-6 p-6   transform ${open ? "translate-x-0" : "-translate-x-full "
          } transition-transform duration-300 ease-in-out  md:hidden`}
        style={{ backgroundImage: `url(${BackgroundColor})` }}>
        <button
          onClick={handleNavLinkClick}
          className=" self-end "
        >
          <div className="text-4xl font-PlusJakartaSans font-thin -mt-3">×</div>
        </button>
        <NavLink
          to="/"
          onClick={handleNavLinkClick}
          className={({ isActive }) =>
            isActive
              ? "text-blue-400 text-lg font-semibold ml-5"
              : "hover:text-blue-300 ml-5"
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/about"
          onClick={handleNavLinkClick}
          className={({ isActive }) =>
            isActive
              ? "text-blue-400 text-lg font-semibold ml-5"
              : "hover:text-blue-300 ml-5"
          }
        >
          About Us
        </NavLink>
        <NavLink
          to="/products"
          onClick={handleNavLinkClick}
          className={({ isActive }) =>
            isActive
              ? "text-blue-400 text-lg font-semibold ml-5"
              : "hover:text-blue-300 ml-5"
          }
        >
          Products
        </NavLink>
        <NavLink
          to="/careers"
          onClick={handleNavLinkClick}
          className={({ isActive }) =>
            isActive
              ? "text-blue-400 text-lg font-semibold ml-5"
              : "hover:text-blue-300 ml-5"
          }
        >
          Careers
        </NavLink>
        <NavLink
          to="/media"
          onClick={handleNavLinkClick}
          className={({ isActive }) =>
            isActive
              ? "text-blue-400 text-lg font-semibold ml-5"
              : "hover:text-blue-300 ml-5"
          }
        >
          Media
        </NavLink>
        <NavLink
          to="/contact"
          onClick={handleNavLinkClick}
          className={({ isActive }) =>
            isActive
              ? "text-blue-400 text-lg font-semibold ml-5"
              : "hover:text-blue-300 ml-5"
          }
        >
          Contact
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
