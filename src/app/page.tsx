import React from "react"
import Categories from "../../components/Categories"
import BestSeller from "../../components/BestSeller"
import HealthyRoots from "../../components/HealthyRoots"
import FollowUs from "../../components/FollowUs"
import Recipies from "../../components/Recipies"
import BigButton from "../../components/BigButton"
import Image from "next/image"
import Blogs from "../../components/Blogs"
import Prepare from "../../components/Prepare"
import Link from 'next/link';

const App = () => {
  return (
    <>
      <div className='w-full h-auto flex justify-between flex-wrap items-center mt-10 mb-20'>
      <div className="px-4 md:px-8 lg:px-20 flex flex-col h-[400px] justify-around font-yatra w-full md:w-1/2">
        <h1 className="text-5xl font-bold font-yatra-one text-[#5E381A]">Traditional Indian Food for Little Ones</h1>
        <div className="flex">
          <Image src='/SVG.png' alt='SVG' width={100} height={100} />
          <div className="flex flex-col justify-center px-4 border-l-2 border-l-[black] border-solid;">
            <p className="text-base font-bold font-poppins">100% natural</p>
            <p className="text-sm font-poppins">All our ingredients come from trusted partner farms who are certified organic.</p>
          </div>
          </div>
          <div className="w-[113px]">
          <Link href='/aboutUs'>
          <BigButton content='Shop Now' />
          </Link>
          </div>
      </div>
      <div className=" w-[700px] md:w-1/2 min-w-[350px]">
      <Image src='/heroimg.png' alt='hero' width={2000} height={600} />
      </div>
    </div>
      <BestSeller />
      <Categories />
      <HealthyRoots />
      <Prepare />
      <FollowUs />
      <Recipies />
      <Blogs />
    </>
  )
}

export default App
