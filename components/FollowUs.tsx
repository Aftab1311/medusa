import React from 'react';

const FollowUs = () => {
  const images = [
    '/image1.png',
    '/image2.png',
    '/image2.png',
    '/image3.png',
    '/image1.png',
  ];

  return (
    <div className="w-full mt-20 bg-[#ffe2c3] py-10">
        <div className='bg-[#ffe2c3]'>
          <img src="camera.png" alt="leaf" className=" bg-[#ffe2c3] mx-auto" />
        </div>
        <h3 className=" bg-[#ffe2c3] font-poppins text-[34px] font-[500] text-center max-sm:text-[28px]">
          Follow Us On
        </h3>
        <p className=' bg-[#ffe2c3] text-center text-xl font-bold py-4'>@balvvardhakbabyfood</p>
      <div className="bg-[#ffe2c3] w-full flex justify-around mt-10">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt=""
            className=" bg-[#ffe2c3] w-1/6  object-cover rounded-lg"
          />
        ))}
      </div>
    </div>
  );
};

export default FollowUs;
