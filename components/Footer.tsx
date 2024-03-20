import React from 'react';

const Footer = () => {
  return (
    <div
      className=" w-[100%] bg-cover h-auto py-12"
      style={{ backgroundImage: "url('/footer-bg.png')" }}
    >
      <div className="container ">
        <div className=" flex flex-col justify-center w-[45%] mx-auto  pt-24 max-md:w-[100%]">
          <p className="text-[20px] font-[500] font-poppins text-white max-md:hidden">
            Newsletter
          </p>
          <p className="md:hidden font-yatra font-400 text-[48px] text-white text-center">
            Balvvardhak
          </p>
          <div className=" py-8 relative">
            <div className="max-w-4xl mx-auto flex items-center justify-center">
              <input
                type="email"
                placeholder="Your Email"
                className="px-4 py-2 w-full border  focus:outline-none  rounded-l-3xl rounded-br-3xl"
              />
              <button className="absolute right-0 border-[#FF7119] border-2 bg-[#FF7119] text-white px-6 py-2 rounded-l-3xl rounded-br-3xl   focus:outline-none">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        <div
          className="mt-20  text-white flex justify-between items-center
         max-md:flex-col max-md:mt-2"
        >
          <div className="w-[50%]">
            <p className="font-yatra font-400 text-[48px] text-white max-md:hidden">
              Balvvardhak
            </p>
            <div className="flex gap-4">
              <div>
                <img src="/insta.png" alt="" className="w-[3rem]" />
              </div>
              <div>
                <img src="/fb.png" alt="" className="w-[3rem]" />
              </div>
              <div>
                <img src="/youtube.png" alt="" className="w-[3rem]" />
              </div>
              <div>
                <img src="x.png" alt="" className="w-[3rem]" />
              </div>
            </div>
          </div>

          <div className="w-[50%] flex justify-between  max-md:w-[100%] max-sm:flex-col">
            <div className="mt-4 w-[33.3%] max-sm:w-[100%]">
              <p className=" font-poppins font-[500] text-[20px]">
                Popular Categories
              </p>
              <div className="mt-6">
                <p className="font-[400] font-poppins text-[15px]">Shop</p>
                <p className="font-[400] font-poppins text-[15px] my-2">
                  Our Story
                </p>
                <p className="font-[400] font-poppins text-[15px]">Blog</p>
              </div>
            </div>
            <div className="mt-4 w-[33.3%] max-sm:w-[100%]">
              <p className="font-poppins font-[500] text-[20px]">Quick Links</p>
              <div className="mt-6">
                <p className="font-[400] font-poppins text-[15px]">Shop</p>
                <p className="font-[400] font-poppins text-[15px] my-2">
                  Our Story
                </p>
                <p className="font-[400] font-poppins text-[15px]">Blog</p>
              </div>
            </div>
            <div className="mt-4 w-[33.3%] max-sm:w-[100%]">
              <p className="font-poppins font-[500] text-[20px]">
                Contact Details
              </p>
              <div className="mt-6">
                <div className="flex">
                  <div>
                    <img src="/Mail.png" alt="" />
                  </div>
                  <p className="ml-2 font-[400] font-poppins text-[15px]">
                    Email@website.com
                  </p>
                </div>
                <div className="flex my-2">
                  <div>
                    <img src="/Call.png" alt="" />
                  </div>
                  <p className="ml-2 font-[400] font-poppins text-[15px]">
                    98765443210
                  </p>
                </div>
                <div className="flex">
                  <div>
                    <img src="/loc.png" alt="" />
                  </div>
                  <p className=" ml-2 font-[400] font-poppins text-[15px]">
                    Address, Street, City, India - 567890
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <p className="text-center text-white mt-20 text-[20px] font-[500] font-poppins">
          2024 Balvvardhak. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
