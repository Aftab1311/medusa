import React from 'react';
import { RootsCard } from './ReusableComponents';
import Image from 'next/image';

const HealthyRoots = () => {
  return (
    <div className="w-full mt-20 px-2 md:px-8">
      <div className='w-full flex flex-col items-center'>
        <div>
          <Image src="/leaf.png" alt='leaf' width={65} height={45}/>
        </div>
        <p className="font-poppins text-[34px] font-[500] text-center max-sm:text-[28px]">
          Our Healthy roots
        </p>
      </div>
      <div className="w-full gap-6 mt-8 justify-center flex flex-wrap">
        <div className="w-[15%] min-w-[163px]">
          <RootsCard text="Small Local Farmers" />
        </div>
        <div className="w-[15%] min-w-[163px]">
          <RootsCard text="Small Local Farmers" />
        </div>
        <div className="w-[15%] min-w-[163px]">
          <RootsCard text="Small Local Farmers" />
        </div>
        <div className="w-[15%] min-w-[163px]">
          <RootsCard text="Small Local Farmers" />
        </div>
        <div className="w-[15%] min-w-[163px]">
          <RootsCard text="Small Local Farmers" />
        </div>
        <div className="w-[15%] min-w-[163px]">
          <RootsCard text="Small Local Farmers" />
        </div>
      </div>
    </div>
  );
};

export default HealthyRoots;
