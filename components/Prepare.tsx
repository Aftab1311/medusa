import React from "react"
import Image from "next/image"

const Prepare = () => {
  return (
    <div className="w-full mt-20 px-2 md:px-8">
      <div className="flex flex-col items-center">
        <div>
          <Image src="/leaf.png" alt="leaf" width={65} height={45} />
        </div>
        <h3 className="font-poppins text-[34px] font-[500] text-center max-sm:text-[28px]">
          How to prepare
        </h3>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mt-6">
        <div className="">
          <div className="max-w-[400px] mx-auto">
            <Image src="/step1.png" alt="" width={400} height={100} />
          </div>
          <p className="font-poppins font-[500] text-[20px] text-center max-sm:text-[14px]">
            Empty packet in a bowl and add warm water.{" "}
          </p>
        </div>
        <div className="">
          <div className="max-w-[400px] mx-auto">
            <Image src="/step2.png" alt="" width={400} height={100} />
          </div>
          <p className="font-poppins font-[500] text-[20px] text-center max-sm:text-[14px]">
            Empty packet in a bowl and add warm water.{" "}
          </p>
        </div>
        <div className="">
          <div className="max-w-[400px] mx-auto">
            <Image src="/step3.png" alt="" width={400} height={100} />
          </div>
          <p className="font-poppins font-[500] text-[20px] text-center max-sm:text-[14px]">
            Empty packet in a bowl and add warm water.{" "}
          </p>
        </div>
      </div>
    </div>
  )
}

export default Prepare
