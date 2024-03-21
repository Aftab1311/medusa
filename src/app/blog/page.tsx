import React from "react"
import {
  BlogPageCard,
  BlogPageSideCard,
  SearchBox,
} from "../../../components/ReusableComponents"

const Page = () => {
  return (
    <div>
      <div className=" relative">
        <img
          src="/blog-head.png"
          alt=""
          className=" w-[100%] max-sm:h-[20vh] "
        />
        <h2
          className="absolute top-32 font-poppins font-[500] text-[36px]  ml-32 z-0 leading-[40px]
            max-lg:top-20 max-lg:text-[30px]
             max-md:ml-20 max-md:top-12
             max-sm:ml-4 max-sm:text-[24px]
          "
        >
          <span className="font-poppins font-[400] text-[15px]">Our Blogs</span>{" "}
          <br />
          Latest Posts
        </h2>
      </div>

      <div className="container mt-6 flex gap-5">
        <div className="w-[75%] max-md:w-[100%]">
          <div className="flex gap-2 mt-4">
            <div className="flex items-center ">
              <p className="w-2 h-2 rounded-xl bg-violet-600 mr-2"></p>
              <p className="uppercase font-[600] text-poppins text-[12px]">
                Kids
              </p>
            </div>
            <div className="flex items-center">
              <p className="w-2 h-2 rounded-xl bg-[#89A809] mr-2"></p>
              <p className="uppercase font-[600] text-poppins text-[12px]">
                Play area
              </p>
            </div>
          </div>
          <p className="font-[500] text-[48px] font-poppins max-sm:leading-tight max-sm:text-[35px]">
            Why are grains important for kids?
          </p>
          <p className="font-poppins font-[300] text-[20px] my-6">
            March 1, 2023 / By Mrs Mommy{" "}
          </p>
          <div>
            <img src="/kid.png" alt="" className="w-[100%]" />
          </div>
          <p className="font-poppins font-[400] text-[15px]  mt-6">
            Holistically pontificate installed base portals after maintainable
            products. Phosfluorescently engage worldwide methodologies with
            technology. Dynamically procrastinate B2C users after installed base
            benefits. Dramatically visualize customer directed convergence
            without revolutionary ROI. Holistically foster superior
            methodologies without market-driven best practices. Distinctively
            exploit optimal alignments for intuitive bandwidth. <br />
            Bring to the table win-win survival strategies to ensure proactive
            domination. At the end of the day, going forward, a new normal that
            has evolved from generation X is on the runway heading towards a
            streamlined cloud solution. User generated content in real-time will
            have multiple touch-points for offshoring. <br />
            Capitalize on low hanging fruit to identify a ballpark value added
            activity to beta test. Override the digital divide with additional
            clickthroughs from DevOps. Nanotechnology immersion along the
            information highway will close the loop on focusing solely on the
            bottom line. <br /> <br />
            Podcasting operational change management inside of workflows to
            establish a framework. Taking seamless key performance indicators
            offline to maximise the long tail. Keeping your eye on the ball
            while performing a deep dive on the start-up mentality to derive
            convergence on cross-platform integration.
          </p>
          <div>
            <img src="/quote.png" alt="" className="my-6" />
          </div>
          <p className="font-[500] font-poppins text-[20px]">
            Collaboratively administrate empowered markets via plug-and-play
            networks. Dynamically procrastinate B2C users after installed base
            benefits. Dramatically visualize customer directed convergence
            without revolutionary ROI.
          </p>
          <p className="font-poppins font-[400] text-[15px]  mt-6">
            Holistically pontificate installed base portals after maintainable
            products. Phosfluorescently engage worldwide methodologies with
            technology. Dynamically procrastinate B2C users after installed base
            benefits. Dramatically visualize customer directed convergence
            without revolutionary ROI. Holistically foster superior
            methodologies without market-driven best practices. Distinctively
            exploit optimal alignments for intuitive bandwidth. <br />
            Bring to the table win-win survival strategies to ensure proactive
            domination. At the end of the day, going forward, a new normal that
            has evolved from generation X is on the runway heading towards a
            streamlined cloud solution. User generated content in real-time will
            have multiple touch-points for offshoring. <br />
            Capitalize on low hanging fruit to identify a ballpark value added
            activity to beta test. Override the digital divide with additional
            clickthroughs from DevOps. Nanotechnology immersion along the
            information highway will close the loop on focusing solely on the
            bottom line. <br /> <br />
            Podcasting operational change management inside of workflows to
            establish a framework. Taking seamless key performance indicators
            offline to maximise the long tail. Keeping your eye on the ball
            while performing a deep dive on the start-up mentality to derive
            convergence on cross-platform integration.
          </p>
          <div className="flex gap-4 mt-2 justify-center  py-6 border-b-2 border-[#D9D9D9B2]">
            <p className="w-8 h-8 bg-[#89A809] rounded-3xl"></p>
            <p className="w-8 h-8 bg-[#89A809] rounded-3xl"></p>
            <p className="w-8 h-8 bg-[#89A809] rounded-3xl"></p>
            <p className="w-8 h-8 bg-[#89A809] rounded-3xl"></p>
          </div>

          <div className="flex justify-between max-md:flex-col">
            <div className="flex gap-2 mt-6 pt-6 w-[30%] max-md:w-[100%]">
              <div className=" w-[50%] ">
                <img src="/kid.png" alt="" className="h-full rounded-xl" />
              </div>
              <div className="">
                <h4 className="font-poppins font-[300] text-[18px] uppercase text-start">
                  previous
                </h4>
                <h4 className="font-[500] font-poppins text-[18px] mt-2 text-start">
                  Why are grains important for kids?
                </h4>
              </div>
            </div>

            <div className="flex gap-2 mt-6 pt-6 w-[30%] max-md:w-[100%]">
              <div className="">
                <h4 className="font-poppins font-[300] text-[18px] uppercase text-end">
                  next
                </h4>
                <h4 className="font-[500] font-poppins text-[18px] mt-2 text-end">
                  Why are grains important for kids?
                </h4>
              </div>
              <div className=" w-[50%]">
                <img src="/kid.png" alt="" className="h-full rounded-xl" />
              </div>
            </div>
          </div>
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
