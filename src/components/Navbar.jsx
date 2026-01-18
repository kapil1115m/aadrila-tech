// src/components/Navbar.jsx
import React, { useState } from "react";
// import { MenuIcon, XIcon } from "@heroicons/react/24/outline";
import logo from '../assets/images/logo.png';
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-transparent sticky top-0 z-50 backdrop-blur-sm">

      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="text-2xl font-bold text-gray-800">
          <img src={logo} alt="Maurya Logo" className="h-[50px] w-[150px] w-auto" />
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8 text-gray-700">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                `cursor-pointer ${isActive ? "text-[#3E6EB4] font-normal" : "hover:text-[#3E6EB4]"
                }`
              }
            >
              Home
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/industries"
              className={({ isActive }) =>
                `cursor-pointer ${isActive ? "text-[#3E6EB4] font-normal" : "hover:text-[#3E6EB4]"
                }`
              }
            >
              Industries
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/products"
              className={({ isActive }) =>
                `cursor-pointer ${isActive ? "text-[#3E6EB4] font-normal" : "hover:text-[#3E6EB4]"
                }`
              }
            >
              Products
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/blog"
              className={({ isActive }) =>
                `cursor-pointer ${isActive ? "text-[#3E6EB4] font-normal" : "hover:text-[#3E6EB4]"
                }`
              }
            >
              Blog
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                `cursor-pointer ${isActive ? "text-[#3E6EB4] font-normal" : "hover:text-[#3E6EB4]"
                }`
              }
            >
              Contact Us
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/aboutus"
              className={({ isActive }) =>
                `cursor-pointer ${isActive ? "text-[#3E6EB4] font-normal" : "hover:text-[#3E6EB4]"
                }`
              }
            >
              About
            </NavLink>
          </li>
        </ul>

        <button className="bg-blue-700 text-white px-4 py-2 w-[162px] h-[52px] rounded-3xl" style={{ backgroundColor: '#3E6EB4' }}>
          <p className="font-[Raleway] text-white">Get a Demo</p>
        </button>

        {/* <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? (
              <XIcon className="h-6 w-6 text-gray-700" />
            ) : (
              <MenuIcon className="h-6 w-6 text-gray-700" />
            )}
          </button>
        </div> */}
      </div>


    </nav>
  );
};

export default Navbar;
