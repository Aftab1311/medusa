import React from 'react';
import { BigButton, SmallButton } from './ReusableComponents';
import Image from 'next/image';

const Hero = () => {
  return (
    <div className="w-[100%] h-auto xl:mb-20 max-xl:mb-12 ">
      <div className="flex items-center max-md:flex-col">
        <div className="w-[50%]  container mt-32 max-md:mt-12 max-md:w-[100%] ">
          <h1
            className=" ml-20 w-[90%] font-yatra font-[400] text-[70px] leading-[90px] text-[#282828]
          max-sm:text-[40px] max-sm:leading-[50px] max-sm:w-[100%] max-sm:ml-0
          "
          >
            Traditional Indian Food for Little Ones
          </h1>
          <div className=" ml-20 max-md:hidden">
            <div className="flex">
              <div className="mr-3 my-auto">
                <Image src="/SVG.png" alt="Picture of the author" width={100} height={1000}/>
              </div>
              <div className="border-l-[1px] border-[#282828] px-4">
                <p className="font-[600] text-[20px] text-[#282828] font-poppins">
                  100% natural
                </p>
                <p className="font-[400] text-[15px] font-poppins w-[80%]">
                  All our ingredients come from trusted partner farms who are
                  certified organic.
                </p>
              </div>
            </div>
            <div className=" mt-12">
              <SmallButton content="Shop Now" />
            </div>
          </div>
        </div>
        <div className="w-[50]   max-md:w-[100%] ">
          <img src="/heroimg.png" alt="hero img" className="ml-auto  " />
        </div>
        <div className=" px-auto md:hidden ">
          <div className="flex mx-auto w-[60%] max-sm:w-[80%] max-sm:mt-2">
            <div className="mr-3 my-auto">
              <img src="/SVG.png" alt="" className="w-[10rem] " />
            </div>
            <div className="border-l-[1px] border-[#282828] px-4">
              <p className="font-[600] text-[20px] text-[#282828] font-poppins">
                100% natural
              </p>
              <p className="font-[400] text-[15px] font-poppins">
                All our ingredients come from trusted partner farms who are
                certified organic.
              </p>
            </div>
          </div>
          <div className=" mt-6 w-[50%] mx-auto">
            <BigButton content="Shop Now" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
