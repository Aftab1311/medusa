import React from "react"
import { BlogCard } from "./ReusableComponents"
import Image from "next/image"

const Blogs = () => {
  return (
    <div className="w-full my-20 px-2 md:px-8">
      <div>
        <div className="w-full flex justify-center">
          <Image src="/leaf.png" alt="leaf" width={65} height={45} />
        </div>
        <p className="font-poppins text-[34px] font-[500] text-center max-sm:text-[28px]">
          Blogs
        </p>
        <div className="flex gap-10 flex-wrap justify-around">
          <div className="w-[350px]">
            <BlogCard date="9th" />
          </div>
          <div className="w-[350px]">
            <BlogCard date="19th" />
          </div>
          <div className="w-[350px]">
            <BlogCard date="29th" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Blogs
