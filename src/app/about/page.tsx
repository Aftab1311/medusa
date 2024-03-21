import React from 'react';

const page = () => {
  return (
    <div>
      <div className=" relative">
        <img
          src="/about-head.png"
          alt=""
          className=" w-[100%] max-sm:h-[20vh]"
        />
        <h2
          className="absolute top-32 font-poppins font-[700] text-[48px]  ml-32 z-0
          max-lg:top-20 max-lg:text-[30px]
           max-md:ml-20 max-md:top-12
           max-sm:ml-4 max-sm:text-[24px]
        "
        >
          About Us
        </h2>
      </div>
      <div className="flex items-center  mt-20 max-md:flex-col max-sm:mt-6">
        <div className="  w-[50%] max-md:w-[100%]">
          <img src="/aboutUs-img.png" alt="" />
        </div>

        <div className="w-[50%] max-md:w-[100%] max-md:container">
          <div>
            <img src="/leaf.png" alt="leaf" className="mb-2" />
          </div>
          <h3 className="font-poppins text-[34px] font-[500]  max-sm:text-[28px] mb-4 ">
            About Us
          </h3>
          <p className="w-[80%]">
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

      <div className="container mt-20">
        <div>
          <img src="/leaf.png" alt="leaf" className="mb-2 mx-auto" />
        </div>
        <h3 className=" font-poppins text-[34px] font-[500] text-center max-sm:text-[28px] mb-6 ">
          Meet the Team
        </h3>
        <div className="flex justify-center gap-[5%]">
          <AboutUsCard name="Founder Name" />
          <AboutUsCard name="Mr Founder Name" />
          <AboutUsCard name="Mrs. Founder Name" />
        </div>
      </div>

      <div className="my-20">
        <div>
          <img src="/leaf.png" alt="leaf" className="mb-2 mx-auto" />
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
  );
};

export default page;

interface AbouUsCardProps {
  name: string;
}

const AboutUsCard: React.FC<AbouUsCardProps> = ({ name }) => {
  return (
    <div className="w-[320px] h-auto bg-white pt-4 overflow-hidden rounded-3xl">
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
  );
};
