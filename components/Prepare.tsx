import React from 'react';

const Prepare = () => {
  return (
    <div className=" mt-20 container">
      <div>
        <div>
          <img src="/leaf.png" alt="leaf" className="mx-auto" />
        </div>
        <h3 className="font-poppins text-[34px] font-[500] text-center max-sm:text-[28px]">
          How to prepare
        </h3>
      </div>

      <div className="flex justify-between max-md:flex-col max-md:mx-auto ">
        <div>
          <div>
            <img src="/step1.png" alt="" className="max-md:mx-auto" />
          </div>
          <p className="font-poppins font-[500] text-[20px] text-center max-sm:text-[14px]">
            Empty packet in a bowl and add warm water.{' '}
          </p>
        </div>
        <div>
          <div>
            <img src="/step2.png" alt="" className="max-md:mx-auto" />
          </div>
          <p className="font-poppins font-[500] text-[20px] text-center max-sm:text-[14px]">
            Empty packet in a bowl and add warm water.{' '}
          </p>
        </div>
        <div>
          <div>
            <img src="/step3.png" alt="" className="max-md:mx-auto" />
          </div>
          <p className="font-poppins font-[500] text-[20px] text-center max-sm:text-[14px]">
            Empty packet in a bowl and add warm water.{' '}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Prepare;
