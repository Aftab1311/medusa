import React from "react"
import { RecipiesCard } from "./ReusableComponents"
import Image from "next/image"

const Recipies = () => {
  return (
    <div className="w-ful my-20 px-2 md:px-8">
        <div className="w-full flex justify-center">
          <Image src="/leaf.png" alt="leaf" width={65} height={45} />
        </div>
        <h3 className="font-poppins text-[34px] font-[500] text-center max-sm:text-[28px]">
          Mom Certified Recipes
        </h3>
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-10 mt-8 ">
        <RecipiesCard recipie="Ragi Paratha" />
        <RecipiesCard recipie="Ragi Paratha" />
        <RecipiesCard recipie="Ragi Paratha" />
      </div>
    </div>
  )
}

export default Recipies
