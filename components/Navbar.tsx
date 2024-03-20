'use client';
import Link from 'next/link';
import React, { useState } from 'react';

const Navbar = () => {
  const [showNav, setShowNav] = useState(false);

  const toggleNavbar = () => {
    setShowNav(!showNav);
  };
  return (
    <div className="h-[12vh] w-[100%] bg-white drop-shadow-md max-md:h-[8vh] relative z-50">
      <div className="container h-full flex items-center justify-between ">
        <p className="font-yatra  font-[400] text-[32px] text-[#5E381A] md:max-lg:text-[28px]">
          Balvvardhak
        </p>
        {showNav ? (
          <span onClick={toggleNavbar}>✕</span>
        ) : (
          // <img

          //   src="/menuicon.png"
          //   alt="menuicon"
          //   className="w-8 h-8 lg:hidden"
          // />
          <div className="relative">
            <svg
              width="20px"
              height="20px"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              onClick={toggleNavbar}
              className="w-8 h-8 md:hidden z-50"
            >
              <path
                d="M4 6H20M4 12H20M4 18H20"
                stroke="#000000"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
        )}

        {showNav && (
          <div className="absolute top-24 left-0  w-full h-auto bg-white rounded-md p-2 flex flex-col z-50 max-md:top-16">
            <Link
              href="/"
              className="font-poppins font-[400] text-[15px] py-3 hover:bg-[#F0F7FF] cursor-pointer text-center"
            >
              Home
            </Link>
            <a className="font-poppins font-[400] text-[15px] py-3 hover:bg-[#F0F7FF] cursor-pointer text-center">
              Our Story
            </a>
            <a className="font-poppins font-[400] text-[15px] py-3 hover:bg-[#F0F7FF] cursor-pointer text-center">
              Our Recipes
            </a>
            <a className="font-poppins font-[400] text-[15px] py-3 hover:bg-[#F0F7FF] cursor-pointer text-center">
              Blogs
            </a>
            <a className="font-poppins font-[400] text-[15px] py-3 hover:bg-[#F0F7FF] cursor-pointer text-center">
              Our Grains
            </a>
            <a className="font-poppins font-[400] text-[15px] py-3 hover:bg-[#F0F7FF] cursor-pointer text-center">
              Contact Us
            </a>
          </div>
        )}

        <div className="flex gap-5 max-md:hidden md:max-lg:gap-3">
          <a className="font-poppins font-[400] text-[15px]">Home</a>
          <a className="font-poppins font-[400] text-[15px]">Our Story</a>
          <a className="font-poppins font-[400] text-[15px]">Our Recipes</a>
          <a className="font-poppins font-[400] text-[15px]">Blogs</a>
          <a className="font-poppins font-[400] text-[15px]">Our Grains</a>
          <a className="font-poppins font-[400] text-[15px]">Contact Us</a>
          <div className="ml-4 md:max-lg:ml-0">
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
