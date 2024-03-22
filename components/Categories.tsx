import React from "react"
import { CategoriesCard } from "./ReusableComponents"
import Image from "next/image"

const Categories = () => {
  return (
    <div className=" w-full flex flex-col justify-center mt-20 px-2 md:px-8">
      <div className="w-full h-[123px] flex flex-col items-center justify-center ">
        <div>
          <Image src="/leaf.png" alt="leaf" width={65} height={45} />
        </div>
        <p className="font-poppins text-[34px] font-[500] text-center max-sm:text-[28px]">
          Categories
        </p>
      </div>
      <div className="w-full gap-4 mt-12 justify-center flex flex-wrap  hover:rotate-0 mb-10 ">
        <div className="w-1/6 min-w-[140px] ">
        <CategoriesCard text="Khichdi Mix" />
        </div>
        <div className="w-1/6 min-w-[140px]">
        <CategoriesCard text="Ragi Mix" />
        </div>
        <div className="w-1/6 min-w-[140px]">
        <CategoriesCard text="Cereal Mix" />
        </div>
        <div className="w-1/6 min-w-[140px]">
        <CategoriesCard text="Sattu Mix" />
        </div>
        <div className="w-1/6 min-w-[140px]">
        <CategoriesCard text="Pulses Mix" />
        </div>
        </div>
      <div className="w-auto mt-10">
        <Image src="/add-banner.png" alt="banner" width={3000} height={200} />
      </div>
    </div>
  )
}

export default Categories
