import React from 'react';
import { RecipiesCard } from './ReusableComponents';

const Recipies = () => {
  return (
    <div className=" mt-20 container">
      <div>
        <div>
          <img src="/leaf.png" alt="leaf" className="mx-auto" />
        </div>
        <h3 className="font-poppins text-[34px] font-[500] text-center max-sm:text-[28px]">
          Mom Certified Recipes
        </h3>
      </div>

      <div className="flex justify-between mt-8 max-md:flex-col  ">
        <RecipiesCard recipie="Ragi Paratha" />
        <RecipiesCard recipie="Ragi Paratha" />

        <RecipiesCard recipie="Ragi Paratha" />
      </div>
    </div>
  );
};

export default Recipies;
