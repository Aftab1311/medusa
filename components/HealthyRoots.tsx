import React from 'react';
import { RootsCard } from './ReusableComponents';

const HealthyRoots = () => {
  return (
    <div className=" mt-20 container">
      <div>
        <div>
          <img src="leaf.png" alt="leaf" className="mx-auto" />
        </div>
        <p className="font-poppins text-[34px] font-[500] text-center max-sm:text-[28px]">
          Our Healthy roots
        </p>
      </div>
      <div className=" gap-3 mt-8 justify-center flex max-md:inline-block max-md:w-[100%] max-sm:mt-6">
        <div className="flex gap-3 max-md:justify-center">
          <RootsCard text="Small Local Farmers" />
          <RootsCard text="Small Local Farmers" />
        </div>
        <div className="flex gap-3 max-md:justify-center">
          <RootsCard text="Small Local Farmers" />
          <RootsCard text="Small Local Farmers" />
        </div>
        <div className="flex gap-3 max-md:justify-center">
          <RootsCard text="Small Local Farmers" />
          <RootsCard text="Small Local Farmers" />
        </div>
      </div>
    </div>
  );
};

export default HealthyRoots;
