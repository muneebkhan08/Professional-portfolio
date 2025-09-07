import React from 'react'
import Link from "next/link";
import { FiArrowUpRight } from "react-icons/fi";

const Connect = () => {
  return (
    <div className="flex flex-col items-center justify-center px-6 text-center text-white mt-[8rem] mb-[6rem]">

      {/* Title */}
      <div className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-400 animate-pulse">
        Want to <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-purple-500">Build</span> something new?
      </div>
      <div className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-200 my-3">
        Drive Tomorrow&apos;s Possibilities
      </div>
      <div className="text-2xl font-semibold md:text-3xl lg:text-4xl text-gray-300 mt-3">
      I help companies redefine the future through technology.
      </div>

      {/* Description */}
      <p className="text-gray-400 text-base md:text-lg lg:text-xl max-w-md md:max-w-xl lg:max-w-2xl mt-8 ">
        Let&apos;s develop a new world of 3D visuals, user interfaces, and web applications with Gen AI
      </p>

      {/* Call-to-Action Button */}
      <Link href="/contact">
      <button className="mt-14 px-6 py-3 transition-all flex items-center gap-2 rounded-3xl bg-purple-950 border-2 dark:border-gray-600 border-transparent text-white text-2xl hover:text-white hover:border-white">
        Get in Touch
        <FiArrowUpRight />
      </button>
      </Link>
    </div>

  )
}

export default Connect