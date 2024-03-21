import { BigButton } from "../../../components/ReusableComponents"
import React from "react"
import Image from "next/image"

const page = () => {
  return (
    <div className="w-full">
      <div className="relative">
        <Image
          src="/about-head.png"
          alt="abouthead"
          width={3000}
          height={400}
          className="w-full"
        />
        <h2 className="absolute top-1/2 left-1/4 transform -translate-x-1/2 -translate-y-1/2 text-xl sm:text-2xl md:text-4xl lg:text-6xl md:top-20 lg:top-36 text-center w-full">
          Contact Us
        </h2>
      </div>

      <div className="w-full md:flex mt-20 px-4 md:px-8 gap-4 ">
        <div className="md:w-1/2 mb-10">
          <h2 className="font-poppins text-[48px] font-[700] leading-[60px] max-sm:leading-tight max-sm:text-[35px]">
            <span className="text-[#FF7119]">Have you got </span> <br /> a
            question for us?
          </h2>
          <h4 className="font-poppins font-[500] text-[20px] my-6  ">
            Questions or special inquiries? Fill out a form and we’ll be in
            touch as soon as possible.
          </h4>

          <div className="mt-12">
            <div className="w-full flex">
              <div className="flex items-center">
                <Image src="/location.png" alt="" width={50} height={50} />
              </div>
              <div className="ml-4 pl-4 border-l-2 border-[#A7A8AB]">
                <p className="font-poppins font-[500] text-[20px]">Location </p>
                <p className="font-poppins font-[400] text-[15px] w-[85%]">
                  108 house , 234 street, fast lane, beside neighbours, City,
                  State 560000
                </p>
              </div>
            </div>

            <div className="w-full flex ">
              <div className="flex items-center">
                <Image src="/clock.png" alt="" width={50} height={50} />
              </div>
              <div className="ml-4 pl-4 border-l-2 border-[#A7A8AB]">
                <p className="font-poppins font-[500] text-[20px]">Timings </p>
                <p className="font-poppins font-[400] text-[15px] w-[85%]">
                  108 house , 234 street, fast lane, beside neighbours, City,
                  State 560000
                </p>
              </div>
            </div>

            <div className="w-full flex ">
              <div className="flex items-center">
                <Image src="/phone.png" alt="" width={50} height={50} />
              </div>
              <div className="ml-4 pl-4 border-l-2 border-[#A7A8AB]">
                <p className="font-poppins font-[500] text-[20px]">Phone </p>
                <p className="font-poppins font-[400] text-[15px] w-[85%]">
                  108 house , 234 street, fast lane, beside neighbours, City,
                  State 560000
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="md:w-1/2 ">
          <div className="bg-white h-full rounded-2xl md:p-16 p-4">
            <p className="font-poppins font-[500] text-[36px]">Get in touch</p>
            <input
              type="text"
              placeholder="Your Name"
              className="border border-[#A7A8AB] p-2 rounded-3xl focus:outline-none focus:border-orange-500 pl-4 w-[100%] mt-8"
            />
            <input
              type="text"
              placeholder="Your Email"
              className="border border-[#A7A8AB] p-2 rounded-3xl focus:outline-none focus:border-orange-500 pl-4 w-[100%] my-8"
            />
            <textarea
              rows={5}
              placeholder="Message"
              className="border border-[#A7A8AB] p-2 rounded-3xl focus:outline-none focus:border-orange-500 pl-4 w-[100%]  mb-8"
            />
            <div className="w-[40%]">
              <BigButton content="Buy Now" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default page
