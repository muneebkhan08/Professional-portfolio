import React from 'react'
import Link from "next/link";
import { MdMiscellaneousServices } from "react-icons/md";
import { GrProjects } from "react-icons/gr";

const AboutLink = () => {
  return (
    <div className="flex flex-col items-center justify-center px-6 text-center text-white mt-[10rem] mb-[12rem]">

      {/* Title */}
      <div className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-200 my-3 max-w-md md:max-w-3xl lg:max-w-5xl">
        Transforming concepts into seamless <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-purple-500">User Experiences</span>
      </div>

      {/* Description */}
      <p className="text-gray-400 text-lg md:text-xl lg:text-2xl max-w-md md:max-w-xl lg:max-w-2xl mt-3 ">
      I build scalable web applications and integrate generative AI to create intelligent, world-class solutions that drive innovation and efficiency.
      </p>

      {/* Call-to-Action Button */}
      <div className='mt-6 flex flex-row items-center gap-3'>
        <Link href="/services">
        <button className="px-6 py-3 transition-all flex items-center gap-2 rounded-3xl bg-purple-950 border-2 dark:border-gray-600 border-transparent text-white text-xl hover:text-white hover:border-white">
          Services
          <MdMiscellaneousServices />
        </button>

        </Link>
        <Link href="/projects">
        <button className="px-6 py-3 transition-all flex items-center gap-3 rounded-3xl bg-purple-950 border-2 dark:border-gray-600 border-transparent text-white text-xl hover:text-white hover:border-white">
          Projects
          <GrProjects />
        </button>
        </Link>
      </div>
      
    </div>

  )
}

export default AboutLink;