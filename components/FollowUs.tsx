import React from 'react';

const FollowUs = () => {
  const images = [
    '/image1.png',
    '/image2.png',
    '/image2.png',
    '/image3.png',
    '/image1.png',
    '/image3.png',
    '/image2.png',
  ];

  return (
    <div className=" mt-20 container">
      <div>
        <div>
          <img src="camera.png" alt="leaf" className="mx-auto" />
        </div>
        <h3 className="font-poppins text-[34px] font-[500] text-center max-sm:text-[28px]">
          Follow Us On
        </h3>
      </div>

      <div className="flex space-x-4 overflow-x-auto p-4 no-scrollbar">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt=""
            className="w-60 h-60 object-cover rounded-lg"
          />
        ))}
      </div>
    </div>
  );
};

export default FollowUs;
