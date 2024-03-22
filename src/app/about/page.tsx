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
          About Us
        </h2>
      </div>

      <div className="w-full flex items-center flex-col lg:flex-row  mt-20 gap-10">
        <div className="w-full lg:w-1/2 ">
          <Image src="/aboutUs-img.png" alt="" width={2000} height={400} />
        </div>

        <div className="w-full lg:w-1/2 flex-col  ">
          <div className="px-10  flex flex-col items-center lg:items-start">
            <Image src="/leaf.png" alt="leaf" width={65} height={45} />
            <h3 className="font-poppins text-[34px] font-[500]  max-sm:text-[28px] mb-4 ">
              About Us
            </h3>
          </div>

          <p className=" w-full px-10 ">
            Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.Lorem ipsum
            dolor sit amet. Lorem ipsum dolor sit amet.Lorem ipsum dolor sit
            amet.Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.Lorem
            ipsum dolor sit amet.Lorem ipsum dolor sit amet.
            <br />
            <br />
            Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.Lorem ipsum
            dolor sit amet. Lorem ipsum dolor sit amet.Lorem ipsum dolor sit
            amet.Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.Lorem
            ipsum dolor sit amet.Lorem ipsum dolor sit amet.
            <br />
            <br />
            Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.Lorem ipsum
            dolor sit amet. Lorem ipsum dolor sit amet.Lorem ipsum dolor sit
            amet.Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.Lorem
            ipsum dolor sit amet.Lorem ipsum dolor sit amet.
          </p>
        </div>
      </div>

      <div className="w-full mt-20">
        <div className="w-full flex justify-center">
          <Image src="/leaf.png" alt="leaf" width={65} height={45} />
        </div>
        <h3 className=" font-poppins text-[34px] font-[500] text-center max-sm:text-[28px] mb-6 ">
          Meet the Team
        </h3>
        <div className="w-full px-4 grid grid-cols-2 md:grid-cols-3 gap-5 gap-10 justify-center">
          <AboutUsCard name="Founder Name" />
          <AboutUsCard name="Mr Founder Name" />
          <AboutUsCard name="Mrs. Founder Name" />
        </div>
      </div>

      <div className="my-20">
        <div className="w-full flex justify-center">
        <Image src="/leaf.png" alt="leaf" width={65} height={45} />
        </div>
        <h3 className=" font-poppins text-[34px] font-[500] text-center max-sm:text-[28px] mb-6 ">
          Our Story
        </h3>
        <p className="w-[80%] mx-auto ">
          Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.Lorem ipsum
          dolor sit amet. Lorem ipsum dolor sit amet.Lorem ipsum dolor sit
          amet.Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.Lorem ipsum
          dolor sit amet.Lorem ipsum dolor sit amet.
          <br />
          <br />
          Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.Lorem ipsum
          dolor sit amet. Lorem ipsum dolor sit amet.Lorem ipsum dolor sit
          amet.Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.Lorem ipsum
          dolor sit amet.Lorem ipsum dolor sit amet.
          <br />
          <br />
          Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.Lorem ipsum
          dolor sit amet. Lorem ipsum dolor sit amet.Lorem ipsum dolor sit
          amet.Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.Lorem ipsum
          dolor sit amet.Lorem ipsum dolor sit amet.
        </p>
      </div>
    </div>
  )
}

export default page

interface AbouUsCardProps {
  name: string
}

const AboutUsCard: React.FC<AbouUsCardProps> = ({ name }) => {
  return (
    <div className="h-auto bg-white pt-4 overflow-hidden rounded-3xl">
      <p className="font-[400] text-[27px] font-paytone ml-4">{name}</p>
      <p className="font-poppins text-[20px] font-[500] my-4 ml-4">
        Designation
      </p>

      <img
        src="/founder.png"
        alt=""
        className="ml-4 -rotate-6 hover:rotate-0 origin-top-right duration-300 mt-6 cursor-pointer rounded-xl max-sm:w-[180px]"
      />
    </div>
  )
}
