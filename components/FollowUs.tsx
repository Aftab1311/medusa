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
    <div className="w-full mt-20 bg-[#ffe2c3] pb-10">
      <div>
        <div>
          <img src="camera.png" alt="leaf" className="mx-auto" />
        </div>
        <h3 className="font-poppins text-[34px] font-[500] text-center max-sm:text-[28px]">
          Follow Us On
        </h3>
        <p className='text-center text-xl font-bold py-4'>@balvvardhakbabyfood</p>
      </div>

      <div className="w-full flex justify-around mt-10">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt=""
            className="w-1/6  object-cover rounded-lg"
          />
        ))}
      </div>
    </div>
  );
};

export default FollowUs;
