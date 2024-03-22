'use client';
import { BestSellerCard } from '../../../components/ReusableComponents';
import React, { useState } from 'react';
import Image from 'next/image';

const Page = () => {
  const [sortBy, setSortBy] = useState<string>('');

  const handleSortChange = (option: { label: string; value: string }) => {
    setSortBy(option.value);
  };

  const sortOptions: { label: string; value: string }[] = [
    { label: 'Sort By', value: 'Sort By' },
    { label: 'Price: Low to High', value: 'lowToHigh' },
    { label: 'Price: High to Low', value: 'highToLow' },
  ];

  return (
    <div className='w-full'>
      <div className="relative">
        <Image
          src="/about-head.png"
          alt="abouthead"
          width={3000}
          height={400}
          className="w-full"
        />
        <h2 className="absolute top-1/2 left-1/4 transform -translate-x-1/2 -translate-y-1/2 text-xl sm:text-2xl md:text-4xl lg:text-6xl md:top-20 lg:top-36 text-center w-full">
          Ragi-sattva
        </h2>
      </div>

      <div className="w-full px-4 md:px-10 mt-24 flex gap-10">
        <div className="w-[20%] mt-20 max-md:hidden">
          <div className="flex justify-between">
            <p className="font-[500] font-poppins text-[20px]">Filter</p>
            <p className="text-[#FF7119] font-[500] font-poppins text-[15px]">
              Clear
            </p>
          </div>

          <div className="mt-4">
            <p className="font-[400] font-poppins text-[15px]"> By Age</p>
            <div className="flex items-center mt-2">
              <input
                id="default-checkbox"
                type="checkbox"
                value=""
                className="w-4 h-4 text-blue-600 bg-white border-gray-300 rounded accent-[#FF7119]"
              />
              <label
                 htmlFor="default-checkbox"
                className="ms-2 text-[15px] font-[400] text-black font-poppins"
              >
                6 Months +
              </label>
            </div>
            <div className="flex items-center mt-2">
              <input
                id="default-checkbox"
                type="checkbox"
                value=""
                className="w-4 h-4 text-blue-600 bg-white border-gray-300 rounded accent-[#FF7119]"
              />
              <label
                htmlFor="default-checkbox" // Replace ' htmlFor' with 'htmlFor'
                className="ms-2 text-[15px] font-[400] text-black font-poppins"
              >
                7 Months +
              </label>
            </div>
            <div className="flex items-center mt-2">
              <input
                id="default-checkbox"
                type="checkbox"
                value=""
                className="w-4 h-4 text-blue-600 bg-white border-gray-300 rounded accent-[#FF7119]"
              />
              <label
                 htmlFor="default-checkbox"
                className="ms-2 text-[15px] font-[400] text-black font-poppins"
              >
                8 Months +
              </label>
            </div>
            <div className="flex items-center mt-2">
              <input
                id="default-checkbox"
                type="checkbox"
                value=""
                className="w-4 h-4 text-blue-600 bg-white border-gray-300 rounded accent-[#FF7119]"
              />
              <label
                 htmlFor="default-checkbox"
                className="ms-2 text-[15px] font-[400] text-black font-poppins"
              >
                9 Months +
              </label>
            </div>
            <div className="flex items-center mt-2">
              <input
                id="default-checkbox"
                type="checkbox"
                value=""
                className="w-4 h-4 text-blue-600 bg-white border-gray-300 rounded accent-[#FF7119]"
              />
              <label
                 htmlFor="default-checkbox"
                className="ms-2 text-[15px] font-[400] text-black font-poppins"
              >
                11 Months +
              </label>
            </div>

            <p className="font-[400] font-poppins text-[15px] mt-4">
              {' '}
              By Mixes
            </p>
            <div className="flex items-center mt-2">
              <input
                id="default-checkbox"
                type="checkbox"
                value=""
                className="w-4 h-4 text-blue-600 bg-white border-gray-300 rounded accent-[#FF7119]"
              />
              <label
                 htmlFor="default-checkbox"
                className="ms-2 text-[15px] font-[400] text-black font-poppins"
              >
                Khichdi Mix
              </label>
            </div>
            <div className="flex items-center mt-2">
              <input
                id="default-checkbox"
                type="checkbox"
                value=""
                className="w-4 h-4 text-blue-600 bg-white border-gray-300 rounded accent-[#FF7119]"
              />
              <label
                 htmlFor="default-checkbox"
                className="ms-2 text-[15px] font-[400] text-black font-poppins"
              >
                Ragi Mix
              </label>
            </div>
            <div className="flex items-center mt-2">
              <input
                id="default-checkbox"
                type="checkbox"
                value=""
                className="w-4 h-4 text-blue-600 bg-white border-gray-300 rounded accent-[#FF7119]"
              />
              <label
                 htmlFor="default-checkbox"
                className="ms-2 text-[15px] font-[400] text-black font-poppins"
              >
                Cereal Mix
              </label>
            </div>
            <div className="flex items-center mt-2">
              <input
                id="default-checkbox"
                type="checkbox"
                value=""
                className="w-4 h-4 text-blue-600 bg-white border-gray-300 rounded accent-[#FF7119]"
              />
              <label
                 htmlFor="default-checkbox"
                className="ms-2 text-[15px] font-[400] text-black font-poppins"
              >
                Sattu Mix
              </label>
            </div>
            <div className="flex items-center mt-2">
              <input
                id="default-checkbox"
                type="checkbox"
                value=""
                className="w-4 h-4 text-blue-600 bg-white border-gray-300 rounded accent-[#FF7119]"
              />
              <label
                 htmlFor="default-checkbox"
                className="ms-2 text-[15px] font-[400] text-black font-poppins"
              >
                Pluses Mix
              </label>
            </div>
          </div>
        </div>

        <div className="w-[75%]  max-md:w-[100%] ">
          <div className="md:flex md:justify-between md:items-center">
            <p className="font-[300] font-poppins text-[20px] max-md:ml-2">
              Showing 1–9 of 12 results
            </p>
            <div className="flex justify-between items-center max-md:mt-4 max-md:ml-2">
              <SortDropdown
                options={sortOptions}
                defaultOption={sortOptions[0]}
                onSortChange={handleSortChange}
              />

              <div className="md:hidden ">
                <img src="/filter.png" alt="" />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-4 max-lg:grid-cols-2 mt-12 max-md:mt-8">
            <BestSellerCard content="Instant Millet Mix 228g" />
            <BestSellerCard content="Instant Millet Mix 228g" />
            <BestSellerCard content="Instant Millet Mix 228g" />
            <BestSellerCard content="Instant Millet Mix 228g" />
            <BestSellerCard content="Instant Millet Mix 228g" />
            <BestSellerCard content="Instant Millet Mix 228g" />
            <BestSellerCard content="Instant Millet Mix 228g" />
            <BestSellerCard content="Instant Millet Mix 228g" />
            <BestSellerCard content="Instant Millet Mix 228g" />
            <BestSellerCard content="Instant Millet Mix 228g" />
            <BestSellerCard content="Instant Millet Mix 228g" />
            <BestSellerCard content="Instant Millet Mix 228g" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;

const SortDropdown: React.FC<{
  options: { label: string; value: string }[];
  defaultOption: { label: string; value: string };
  onSortChange: (option: { label: string; value: string }) => void;
}> = ({ options, defaultOption, onSortChange }) => {
  const [selectedOption, setSelectedOption] = useState(defaultOption);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleOptionClick = (option: { label: string; value: string }) => {
    setSelectedOption(option);
    setIsDropdownOpen(false);
    onSortChange(option);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className="w-[250px] border-2 border-[#E0DDD6] rounded-2xl py-1 px-3">
      <div
        className="selected-option flex justify-between items-center"
        onClick={toggleDropdown}
      >
        <span className="font-[300] font-poppins text-[20px]">
          {selectedOption.label}
        </span>
        <i className={`dropdown-icon ${isDropdownOpen ? 'open' : ''}`}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            className="cursor-pointer"
          >
            <path
              d="M2.36726 6.70357C1.97674 6.31304 1.34357 6.31304 0.953049 6.70357C0.562525 7.09409 0.562525 7.72726 0.953049 8.11778L2.36726 6.70357ZM0.953049 8.11778L8.02412 15.1888L9.43833 13.7746L2.36726 6.70357L0.953049 8.11778Z"
              fill="black"
            />
            <path
              d="M15.1446 7.89595C15.5351 7.50543 15.5351 6.87226 15.1446 6.48174C14.7541 6.09121 14.1209 6.09121 13.7304 6.48174L15.1446 7.89595ZM13.7304 6.48174L6.73039 13.4817L8.14461 14.8959L15.1446 7.89595L13.7304 6.48174Z"
              fill="black"
            />
          </svg>
        </i>
      </div>
      {isDropdownOpen && (
        <ul className="options font-[300] font-poppins text-[20px] cursor-pointer">
          {options.map((option) => (
            <li key={option.value} onClick={() => handleOptionClick(option)}>
              {option.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
