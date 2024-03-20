import React from 'react';
import { CategoriesCard } from './ReusableComponents';

const Categories = () => {
  return (
    <div className="mt-20 container">
      <div>
        <div>
          <img src="leaf.png" alt="leaf" className="mx-auto" />
        </div>
        <p className="font-poppins text-[34px] font-[500] text-center max-sm:text-[28px]">
          Categories
        </p>
      </div>
      <div className="  gap-4 mt-12 justify-center flex max-md:inline-block max-md:w-[100%]">
        <div className="flex gap-4 max-md:justify-center ">
          <CategoriesCard text="Khichdi Mix" />
          <CategoriesCard text="Ragi Mix" />
        </div>
        <div className="flex gap-4 max-md:my-4 max-md:justify-center">
          <CategoriesCard text="Cereal Mix" />
          <CategoriesCard text="Sattu Mix" />
        </div>
        <div className="max-md:w-[40%]  max-md:mx-auto max-sm:w-[50%]">
          <CategoriesCard text="Pulses Mix" />
        </div>
      </div>
      <div className="mt-10">
        <img src="add-banner.png" alt="" />
      </div>
    </div>
  );
};

export default Categories;
