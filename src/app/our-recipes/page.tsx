"use client"
import { RecipiesCard } from "../../../components/ReusableComponents"
import React, { useState } from "react"
import Image from "next/image"

const Page = () => {
  const [activeTab, setActiveTab] = useState(1)

  const handleTabClick = (tabNumber: number) => {
    setActiveTab(tabNumber)
  }

  return (
    <div className=" w-full">
      <div className="relative">
        <Image
          src="/recipe-head.png"
          alt=""
          width={3000}
          height={400}
          className="w-full"
        />
        <h2 className="absolute top-1/2 left-1/4 transform -translate-x-1/2 -translate-y-1/2 text-2xl md:text-3xl lg:text-5xl  text-center w-full z-10">
          Our Recipes
        </h2>
      </div>

      <div className="mt-20 w-full flex flex-col">
        <div className="w-full flex items-center">
        <Image src="/leaf.png" alt="leaf" width={65} height={45} className="mb-2 mx-auto" />
        </div>
        <h3 className="text-center font-poppins text-[34px] font-[500]  max-sm:text-[28px] mb-4 ">
          In Spotlight
        </h3>

        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-10  px-2 md:px-8 mt-8 ">
        <RecipiesCard recipie="Ragi Paratha" />
        <RecipiesCard recipie="Ragi Paratha" />
        <RecipiesCard recipie="Ragi Paratha" />
      </div>
      </div>

      <div className="mt-20 w-full">
        <div>
        <Image src="/leaf.png" alt="leaf" width={65} height={45} className="mb-2 mx-auto" />
        </div>
        <h3 className="text-center font-poppins text-[34px] font-[500]  max-sm:text-[28px] mb-4 ">
          Supergrain in every meal
        </h3>

        <div className="flex justify-center gap-3 px-2 md:px-8 pb-8">
          <div
            className={`tab ${
              activeTab === 1
                ? "font-poppins text-[20px] font-[500] text-black underline underline-[#FF7119] cursor-pointer decoration-[#FF7119]"
                : "text-[#A7A8AB] font-[500] font-poppins text-[20px] cursor-pointer hover:text-gray-500 duration-125"
            }`}
            onClick={() => handleTabClick(1)}
          >
            Breakfast
          </div>
          <div
            className={`tab ${
              activeTab === 2
                ? "font-poppins text-[20px] font-[500] text-black underline underline-[#FF7119] cursor-pointer decoration-[#FF7119]"
                : "text-[#A7A8AB] font-[500] font-poppins text-[20px] cursor-pointer hover:text-gray-500 duration-125"
            }`}
            onClick={() => handleTabClick(2)}
          >
            Lunch
          </div>
          <div
            className={`tab ${
              activeTab === 3
                ? "font-poppins text-[20px] font-[500] text-black underline underline-[#FF7119] cursor-pointer decoration-[#FF7119]"
                : "text-[#A7A8AB] font-[500] font-poppins text-[20px] cursor-pointer hover:text-gray-500 duration-125"
            }`}
            onClick={() => handleTabClick(3)}
          >
            Dinner
          </div>
          <div
            className={`tab ${
              activeTab === 4
                ? "font-poppins text-[20px] font-[500] text-black underline underline-[#FF7119] cursor-pointer decoration-[#FF7119]"
                : "text-[#A7A8AB] font-[500] font-poppins text-[20px] cursor-pointer hover:text-gray-500 duration-125"
            }`}
            onClick={() => handleTabClick(4)}
          >
            Snacks
          </div>
          {activeTab === 1 && ""}
          {activeTab === 2 && ""}
          {activeTab === 3 && ""}
          {activeTab === 4 && ""}
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-10 px-2 md:px-8 ">
        <RecipiesCard recipie="Ragi Paratha" />
        <RecipiesCard recipie="Ragi Paratha" />
        <RecipiesCard recipie="Ragi Paratha" />
      </div>
      </div>

      <div className="mt-20 w-full mb-20">
        <div>
            <Image src="/leaf.png" alt="leaf" width={65} height={45} className="mb-2 mx-auto" />
        </div>
        <h3 className="text-center font-poppins text-[34px] font-[500]  max-sm:text-[28px] mb-4 ">
          By Ingredients
        </h3>

        <div className="flex justify-center gap-3">
          <div
            className={`tab ${
              activeTab === 1
                ? "font-poppins text-[20px] font-[500] text-black underline underline-[#FF7119] cursor-pointer decoration-[#FF7119]"
                : "text-[#A7A8AB] font-[500] font-poppins text-[20px] cursor-pointer hover:text-gray-500 duration-125"
            }`}
            onClick={() => handleTabClick(1)}
          >
            Breakfast
          </div>
          <div
            className={`tab ${
              activeTab === 2
                ? "font-poppins text-[20px] font-[500] text-black underline underline-[#FF7119] cursor-pointer decoration-[#FF7119]"
                : "text-[#A7A8AB] font-[500] font-poppins text-[20px] cursor-pointer hover:text-gray-500 duration-125"
            }`}
            onClick={() => handleTabClick(2)}
          >
            Lunch
          </div>
          <div
            className={`tab ${
              activeTab === 3
                ? "font-poppins text-[20px] font-[500] text-black underline underline-[#FF7119] cursor-pointer decoration-[#FF7119]"
                : "text-[#A7A8AB] font-[500] font-poppins text-[20px] cursor-pointer hover:text-gray-500 duration-125"
            }`}
            onClick={() => handleTabClick(3)}
          >
            Dinner
          </div>
          <div
            className={`tab ${
              activeTab === 4
                ? "font-poppins text-[20px] font-[500] text-black underline underline-[#FF7119] cursor-pointer decoration-[#FF7119]"
                : "text-[#A7A8AB] font-[500] font-poppins text-[20px] cursor-pointer hover:text-gray-500 duration-125"
            }`}
            onClick={() => handleTabClick(4)}
          >
            Snacks
          </div>
          {activeTab === 1 && ""}
          {activeTab === 2 && ""}
          {activeTab === 3 && ""}
          {activeTab === 4 && ""}
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-10 px-2 md:px-8 mt-8 ">
        <RecipiesCard recipie="chilla Paratha" />
        <RecipiesCard recipie="chilla Paratha" />
        <RecipiesCard recipie="chilla Paratha" />
      </div>
      </div>
    </div>
  )
}

export default Page
