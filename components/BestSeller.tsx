import React from 'react';
import { Poppins } from 'next/font/google';
import { BestSellerCard, BigButton, SmallButton } from './ReusableComponents';

const BestSeller = () => {
  return (
    <div className="container">
      <div>
        <div>
          <img src="leaf.png" alt="leaf" className="mx-auto" />
        </div>
        <p className="font-poppins text-[34px] font-[500] text-center ">
          Best Sellers
        </p>
        <p className="font-poppins font-[400] text-[15px] text-center">
          Wide selection of organic and plant-based snacks, meals, finger foods
          and purées.
        </p>
      </div>

      <div className="mt-12 flex justify-center gap-2 max-md:flex-col">
        <div className="flex gap-2">
          <BestSellerCard content="Instant Millet Mix 228g" />
          <BestSellerCard content="Instant Millet Mix 229g" />
        </div>
        <div className="flex gap-2 max-md:mt-4">
          <BestSellerCard content="Instant Millet Mix 223g" />
          <BestSellerCard content="Instant Millet Mix 220g" />
        </div>
      </div>
    </div>
  );
};

export default BestSeller;
