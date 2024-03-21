import {
  BlogPageCard,
  BlogPageSideCard,
  SearchBox,
} from "../../../components/ReusableComponents"
import React from "react"
import Image from "next/image"

const Page = () => {
  return (
    <div className="w-full">
      <div className="relative">
        <Image
          src="/blog-head.png"
          alt="bloghead"
          width={3000}
          height={400}
          className="w-full"
        />
        <h2 className="absolute top-1/2 left-1/4 transform -translate-x-1/2 -translate-y-1/2 text-xl md:text-3xl lg:text-4xl  text-center w-full z-10">
          <span className="text-sm md:text-base lg:text-lg">Our Blogs</span>
          <br />
          Latest Posts
        </h2>
      </div>

      <div className="w-full mt-6 flex gap-5 px-10">
        <div className="w-[75%] max-md:w-[100%]">
          <BlogPageCard />
          <BlogPageCard />
          <BlogPageCard />
          <BlogPageCard />
        </div>

        <div className="w-[25%] max-md:hidden">
          <div>
            <SearchBox />
            <h3 className="mt-6 text-[36px] font-[500] font-poppins">
              Recent Posts
            </h3>
            <div className="divide-y-2 divide-[#A7A8AB] -mt-2">
              <BlogPageSideCard />
              <BlogPageSideCard />
              <BlogPageSideCard />
              <BlogPageSideCard />
              <BlogPageSideCard />
            </div>
          </div>

          <div className="mt-32">
            <h3 className="font-[500] text-[36px] font-poppins">Categories</h3>
            <div className="divide-y-2 divide-[#A7A8AB] mt-6">
              <p className="font-[400] text-[15px] font-poppins py-4">
                Kids Play
              </p>
              <p className="font-[400] text-[15px] font-poppins py-4">
                Kids Play
              </p>
              <p className="font-[400] text-[15px] font-poppins py-4">
                Kids Play
              </p>
              <p className="font-[400] text-[15px] font-poppins py-4">
                Kids Play
              </p>
              <p className="font-[400] text-[15px] font-poppins py-4">
                Kids Play
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Page
