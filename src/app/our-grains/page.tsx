import { BestSellerCard } from '../../../components/ReusableComponents';
import React from 'react';
import Image from 'next/image';
const Page = () => {
  return (
    <div className='w-full'>
        <Image src="/grains-head.png" alt="" width={3000} height={400} />
      <div className="w-full mt-20 flex flex-col items-center">
        <h1 className="font-yatra-one flex flex-wrap text-3xl md:text-5xl lg:text-7xl leading-[90px] ">
          Ragi or Finger Millet
        </h1>
        <h4 className="text-xl flex flex-wrap justify-center font-poppins w-2/3 py-4 mt-10">
          Locally Known as: Mandua/Mangal (Hindi, Machni (Marathi),
          Taidalu(Telangana))
        </h4>
        <p className="font-poppins flex flex-wrap md:text-base lg:text-xl w-2/3 justify-center mt-10">
          Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.Lorem ipsum
          dolor sit amet. Lorem ipsum dolor sit amet.Lorem ipsum dolor sit
          amet.Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.Lorem ipsum
          dolor sit amet.Lorem ipsum dolor sit amet.
          <br /> <br />
          Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.Lorem ipsum
          dolor sit amet. Lorem ipsum dolor sit amet.Lorem ipsum dolor sit
          amet.Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.Lorem ipsum
          dolor sit amet.Lorem ipsum dolor sit amet.
          <br /> <br />
          Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.Lorem ipsum
          dolor sit amet. Lorem ipsum dolor sit amet.Lorem ipsum dolor sit
          amet.Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.Lorem ipsum
          dolor sit amet.Lorem ipsum dolor sit amet.
        </p>

        <div className="w-full mt-20">
          <div className='relative w-full flex items-center'>
            <Image src="/stats.png" alt="leaf" width={800} height={45} className="mx-auto" />
          </div>
          <div>
            {/* <p className="absolute top-20 right-[48%] text-[36px] font-[500] font-poppins leading-10 text-white">
              7.3g <br />{' '}
              <span className="font-poppins text-[20px] ">Protein</span>
            </p>
            <p className="absolute top-20 right-[72%] text-[36px] font-[500] font-poppins leading-10 text-white">
              7.3g <br />{' '}
              <span className="font-poppins text-[20px] ">Protein</span>
            </p>
            <p className="absolute top-[45%] right-[88%] text-[36px] font-[500] font-poppins leading-10 text-white">
              7.3g <br />{' '}
              <span className="font-poppins text-[20px] ">Protein</span>
            </p>
            <p className="absolute bottom-20 right-[75%] text-[36px] font-[500] font-poppins leading-10 text-white">
              7.3g <br />{' '}
              <span className="font-poppins text-[20px] ">Protein</span>
            </p>
            <p className="absolute top-[45%] right-[35%] text-[36px] font-[500] font-poppins leading-10 text-white">
              7.3g <br />{' '}
              <span className="font-poppins text-[20px] ">Protein</span>
            </p>
            <p className="absolute bottom-20 right-[45%] text-[36px] font-[500] font-poppins leading-10 text-white">
              7.3g <br />{' '}
              <span className="font-poppins text-[20px] ">Protein</span>
            </p> */}
          </div>
        </div>

        <div className=" w-full flex items-center flex-col mt-20">
          <div>
            <Image src="/leaf.png" alt="leaf" width={65} height={45} className="mx-auto" />
          </div>
          <p className="font-poppins text-[34px] font-[500] text-center max-sm:text-[28px]">
            Benefits
          </p>
          <div className='w-full flex flex-col '>
          <div className="flex gap-3 mt-4 justify-center items-center ">
            <p className="w-8 h-8 bg-[#FF7119] rounded-3xl"></p>
            <p className="font-[400] font-poppins text-[15px]  w-2/3">
              Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.Lorem ipsum
              dolor sit amet. Lorem ipsum dolor sit amet.Lorem ipsum dolor sit
              amet.
            </p>
          </div>
          <div className="flex gap-3 mt-4 justify-center items-center">
            <p className="w-8 h-8 bg-[#FF7119] rounded-3xl"></p>
            <p className="font-[400] font-poppins text-[15px]  w-2/3">
              Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.Lorem ipsum
              dolor sit amet. Lorem ipsum dolor sit amet.Lorem ipsum dolor sit
              amet.
            </p>
          </div>
          <div className="flex gap-3 mt-4 justify-center items-center">
            <p className="w-8 h-8 bg-[#FF7119] rounded-3xl"></p>
            <p className="font-[400] font-poppins text-[15px]  w-2/3">
              Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.Lorem ipsum
              dolor sit amet. Lorem ipsum dolor sit amet.Lorem ipsum dolor sit
              amet.
            </p>
          </div>
          </div>
        </div>
        <div className="w-full mt-20">
          <div>
            <img src="/leaf.png" alt="leaf" className="mx-auto" />
          </div>
          <p className="font-poppins text-[34px] font-[500] text-center max-sm:text-[28px]">
            Our Products with Ragi
          </p>
          <p className="font-[400] font-poppins text-[15px] text-center my-6">
            Wide selection of organic and plant-based snacks, meals, finger
            foods and purées.
          </p>
          <div className="grid md:grid-cols-4 grid-cols-2 gap-2">
            <BestSellerCard content="Instant Millet Mix 228g" />
            <BestSellerCard content="Instant Millet Mix 228g" />
            <BestSellerCard content="Instant Millet Mix 228g" />
            <BestSellerCard content="Instant Millet Mix 228g" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
