import React from "react"
import { RecipiesCard } from "./ReusableComponents"
import Image from "next/image"

const Recipies = () => {
  return (
    <div className="w-full mt-20 mb-20">
      <div className="flex flex-col items-center">
        <div>
          <Image src="/leaf.png" alt="leaf" width={65} height={45} />
        </div>
        <h3 className="font-poppins text-[34px] font-[500] text-center max-sm:text-[28px]">
          Mom Certified Recipes
        </h3>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-10 lg:px-8 px-2 md:px-4 mt-8 ">
        <RecipiesCard recipie="Ragi Paratha" />
        <RecipiesCard recipie="Ragi Paratha" />
        <RecipiesCard recipie="Ragi Paratha" />
      </div>
    </div>
  )
}

export default Recipies
