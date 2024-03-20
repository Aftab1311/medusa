'use client';
import React, { useRef, useState } from 'react';

const Reviews = () => {
  const reviews = [
    { name: 'Mrs Mommy' },
    { name: 'Mrs Mommy' },
    { name: 'Mrs Mommy' },
    { name: 'Mrs Mommy' },
  ];

  const infiniteReviews = [...reviews, ...reviews];

  const [currentSlide, setCurrentSlide] = useState<number>(0);
  const slideRef = useRef<HTMLDivElement>(null);

  const changeSlide = (direction: number) => {
    const slideWidth = slideRef.current!.children[0].clientWidth;
    let newSlide = currentSlide + direction;

    if (newSlide < 0) {
      newSlide = reviews.length - 1;
    } else if (newSlide >= reviews.length) {
      newSlide = 0;
    }

    setCurrentSlide(newSlide);
    slideRef.current!.style.transform = `translateX(-${
      newSlide * slideWidth
    }px)`;
  };

  return (
    <div className="container relative overflow-hidden">
      <div className="mt-20">
        <div>
          <img src="/leaf.png" alt="leaf" className="mx-auto" />
        </div>
        <h3 className="font-poppins text-[34px] font-[500] text-center max-sm:text-[28px]">
          Hear From Moms
        </h3>
      </div>
      <div className="absolute top-1/2 left-0 flex justify-between items-center container z-50">
        <div>
          <img
            src="/prev.png"
            alt=""
            className="cursor-pointer max-sm:w-[1rem]"
            onClick={() => changeSlide(-1)}
          />
        </div>
        <div>
          <img
            src="/next.png"
            alt=""
            className="cursor-pointer max-sm:w-[1rem]"
            onClick={() => changeSlide(1)}
          />
        </div>
      </div>
      <div
        ref={slideRef}
        className="flex transition-transform duration-500 ease-in-out"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {infiniteReviews.map((review, index) => (
          <div key={index} className="w-full h-full flex-shrink-0">
            <ReviewsCard {...review} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Reviews;

interface ReviewProps {
  name: string;
}

const ReviewsCard: React.FC<ReviewProps> = ({ name }) => {
  return (
    <div>
      <div className="relative mx-2">
        <div className=" relative">
          <img src="/slider-bg.png" alt="" className="mx-auto " />
        </div>
        <div
          className="absolute top-16 left-[30%]  w-[40%] max-lg:top-8
          sm:max-md:left-[25%] sm:max-md:w-[50%]
          max-sm:top-4 max-sm:left-[25%] max-sm:w-[55%] "
        >
          <div>
            <img
              src="/Vector.png"
              alt=""
              className="sm:max-md:w-[30px] max-sm:w-[30px]"
            />
          </div>
          <p
            className=" text-[15px] font-[400] font-poppins mt-4 text-center
          max-lg:text-[12px]
          sm:max-md:text-[10px]
          max-sm:text-[8px] max-sm:mt-2
          "
          >
            Bring to the table win-win survival strategies to ensure proactive
            domination. At the end of the day, going forward, a new normal that
            has evolved from generation X is on the runway heading towards a
            streamlined cloud solution.
          </p>
          <div className="flex gap-3 justify-center items-center  mt-6  max-sm:mt-2">
            <div
              className="w-14 h-14 rounded-3xl overflow-hidden
            max-lg:w-12 max-lg:h-12
            max-sm:w-8 max-sm:h-8 
            "
            >
              <img src="/kid.png" alt="" className="w-full h-full my-auto" />
            </div>
            <div className="">
              <p
                className="font-poppins font-[500] text-[20px]
              max-lg:text-[16px] max-sm:text-[12px]
              "
              >
                {name}
              </p>
              <p className="font-poppins font-[400] text-[15px] max-sm:text-[10px]">
                Baby’s Mother
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
