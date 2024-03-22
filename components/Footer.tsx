import React from "react"

const Footer = () => {
  return (
    <div
      className="w-full bg-cover bg-center bg-no-repeat bg-[#FF7119] relative"
      style={{ backgroundImage: "url('/footer-bg.png')" }}
    >
      <div className="w-full mx-auto pt-36 pb-10 px-4 sm:px-6 lg:px-8">
        <div className="md:hidden w-full flex justify-center mb-4">
          <h1 className="text-5xl text-white font-bold font-yatra-one">Balvvardhak</h1>
        </div>
        <div className="flex flex-col items-center">
          <div className="flex w-full max-w-[700px]">
            <p className="text-xl text-white">Newsletter</p>
          </div>
          <div className="w-full flex justify-center items-center">
            <div className="flex w-full max-w-[700px]">
              <input
                type="email"
                placeholder="Your Email"
                className="px-4 py-2 w-full md:h-[59px] h-[40px] border focus:outline-none rounded-l-3xl rounded-br-3xl"
              />
              <button className="border-[#FF7119] w-[114px] md:w-[137px]  h-[40px] md:h-[59px] border-2 bg-[#FF7119] text-white px-6 py-2 rounded-l-3xl rounded-br-3xl ml-2 focus:outline-none">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        <div className="flex justify-center mt-10 md:justify-between items-center flex-wrap md:flex-col gap-8 md:gap-10 lg:flex-row">
          <div className="flex flex-col ">
            <p className="hidden md:block  font-yatra-one font-bold text-4xl text-white">
              Balvvardhak
            </p>
            <div className="flex gap-4">
              <img src="/insta.png" alt="Instagram" className="w-12" />
              <img src="/fb.png" alt="Facebook" className="w-12" />
              <img src="/youtube.png" alt="YouTube" className="w-12" />
              <img src="x.png" alt="Placeholder" className="w-12" />
            </div>
          </div>

          <div className="w-full lg:w-[70%] flex flex-col md:flex-row justify-around">
            <div className="">
              <p className="font-poppins font-[500] text-lg text-white mb-4">
                Popular Categories
              </p>
              <div>
                <p className="font-poppins font-[400] text-base mb-2 text-white text-white">Shop</p>
                <p className="font-poppins font-[400] text-base mb-2 text-white text-white">
                  Our Story
                </p>
                <p className="font-poppins font-[400] text-base text-white text-white">Blog</p>
              </div>
            </div>
            <div className="">
              <p className="font-poppins font-[500] text-lg text-white mb-4">
                Quick Links
              </p>
              <div>
                <p className="font-poppins font-[400] text-base mb-2 text-white">Shop</p>
                <p className="font-poppins font-[400] text-base mb-2 text-white">
                  Our Story
                </p>
                <p className="font-poppins font-[400] text-base text-white">Blog</p>
              </div>
            </div>
            <div className="">
              <p className="font-poppins font-[500] text-lg text-white mb-4">
                Contact Details
              </p>
              <div>
                <div className="flex items-center mb-2">
                  <img src="/Mail.png" alt="Email" className="w-6 mr-2" />
                  <p className="font-poppins font-[400] text-base text-white">
                    Email@website.com
                  </p>
                </div>
                <div className="flex items-center mb-2">
                  <img src="/Call.png" alt="Phone" className="w-6 mr-2" />
                  <p className="font-poppins font-[400] text-base text-white">
                    98765443210
                  </p>
                </div>
                <div className="flex items-center">
                  <img src="/loc.png" alt="Location" className="w-6 mr-2" />
                  <p className="font-poppins font-[400] text-base text-white">
                    Address, Street, City, India - 567890
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <p className="text-center text-white mt-8 text-lg font-[500] font-poppins">
          2024 Balvvardhak. All rights reserved.
        </p>
      </div>
    </div>
  )
}

export default Footer
