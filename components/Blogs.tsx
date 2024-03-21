import React from "react"
import { BlogCard } from "./ReusableComponents"

const Blogs = () => {
  return (
    <div className="w-full mt-20 mb-20">
      <div>
        <div>
          <img src="leaf.png" alt="leaf" className="mx-auto" />
        </div>
        <p className="font-poppins text-[34px] font-[500] text-center max-sm:text-[28px]">
          Blogs
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 px-4 md:px-8 lg:px-10">
          <div className="">
            <BlogCard date="9th" />
          </div>
          <div className="">
            <BlogCard date="19th" />
          </div>
          <div className="">
            <BlogCard date="29th" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Blogs
