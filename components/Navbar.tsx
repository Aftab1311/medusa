"use client"
import Link from "next/link"
import React, { useState } from "react"
import Image from "next/image"

const Navbar = () => {
  const [showNav, setShowNav] = useState(false)

  const toggleNavbar = () => {
    setShowNav(!showNav)
  }
  return (
    <div className="w-full flex items-center justify-between h-[101px] shadow-md px-4 md:px-8 lg:px-16">
      <p className="font-yatra-one font-[400] text-[32px] text-[#5E381A] md:max-lg:text-[28px]">
        Balvvardhak
      </p>
      {showNav ? (
        <span onClick={toggleNavbar}>✕</span>
      ) : (
        // <img

        //   src="/menuicon.png"
        //   alt="menuicon"
        //   className="w-8 h-8 lg:hidden"
        // />
        <div className="relative">
          <svg
            width="20px"
            height="20px"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            onClick={toggleNavbar}
            className="w-8 h-8 lg:hidden z-50"
          >
            <path
              d="M4 6H20M4 12H20M4 18H20"
              stroke="#000000"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
      )}

      {showNav && (
        <div className="w-full flex flex-col gap-4 absolute top-24 cursor-pointer text-base font-poppins text-center pb-10 left-0 h-auto bg-white rounded-md z-10 ">
          <Link href="/">Home</Link>
        <Link href="/ourstory">Our Story</Link>
        <Link href="/recipes">Our Recipes</Link>
        <Link href="/blogs">Blogs</Link>
        <Link href="/grains">Our Grains</Link>
        <Link href="/contact">Contact Us</Link>
        </div>
      )}

      <div className="hidden lg:flex gap-8 text-base  leading-6 items-center font-poppins">
        <Link href="/">Home</Link>
        <Link href="/ourstory">Our Story</Link>
        <Link href="/our-recipes">Our Recipes</Link>
        <Link href="/blogs">Blogs</Link>
        <Link href="/our-grains">Our Grains</Link>
        <Link href="/contact">Contact Us</Link>
        <Image
          src="/cart.png"
          alt="Picture of the author"
          width={50}
          height={50}
        />
      </div>
    </div>
  )
}

export default Navbar
