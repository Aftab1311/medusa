import React from "react"
import { BestSellerCard } from "./ReusableComponents"
import Image from "next/image"

const BestSeller = () => {
  return (
    <div className="w-full py-10 px-2 md:px-8">
      <div>
        <div className="w-full flex justify-center">
        <Image src="/leaf.png" alt="leaf" width={65} height={45} />
        </div>
        <p className="font-poppins text-[34px] font-[500] text-center">
          Best Sellers
        </p>
        <p className="font-poppins font-[400] text-[15px] text-center">
          Wide selection of organic and plant-based snacks, meals, finger foods
          and purées.
        </p>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 items-center mt-12">
        <BestSellerCard content="Instant Millet Mix 228g" />
        <BestSellerCard content="Instant Millet Mix 229g" />
        <BestSellerCard content="Instant Millet Mix 223g" />
        <BestSellerCard content="Instant Millet Mix 220g" />
      </div>
    </div>
  )
}

export default BestSeller
