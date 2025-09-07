// "use client"
// import Image from 'next/image';
// import { usePathname } from 'next/navigation';
// import React from 'react'

// const Navbar = () => {
//     const path = usePathname();
//   return (
//     <div className='bg-[#030014c9] w-full h-[65px] fixed top-0 shadow-lg shadow-[#03001417] back-drop-blur-md z-50 px-10'>
//         <div className='w-full h-full flex flex-row items-center justify-between m-auto px-[10px]'>
//             <a href="/" className='h-auto w-auto flex flex-row items-center'>
//                 <Image src="/profile.png" alt='logo' width={50} height={50} className='cursor-pointer hover:animate-slowspin rounded-full hover:blur-sm transition-all'/>
//                 <span className='font-bold text-xl ml-[10px] hidden md:block text-[#9a81e4ed] hover:text-[#8c71dcef] hover:bg transition-all'>Muhammad Muneeb Khan</span>
//             </a>

//             <div className='w-[500px] h-full flex flex-row items-center justify-between md:mr-20'>

//                 <div className='flex items-center justify-between w-full h-auto border border-[#7042f861] bg-[#030014e6] mr-[15px] px-[20px] py-[7px] rounded-full p-3 text-gray-200'> 
//                   <a 
//                     href="/about" 
//                     className={`hover:font-bold transition-all cursor-pointer relative px-6 py-1 ${path == '/about' && 'font-bold text-[#a385ff] after:absolute after:inset-0 after:border-[2px] after:border-[#a090fedc] after:rounded-full after:pointer-events-none'}`}
//                   >
//                     About Me
//                   </a>
//                   <a 
//                     href="/services" 
//                     className={`hover:font-bold transition-all cursor-pointer relative px-6 py-1 ${path == '/services' && 'font-bold text-[#a385ff] after:absolute after:inset-0 after:border-[2px] after:border-[#a090fedc] after:rounded-full after:pointer-events-none'}`}
//                   >
//                     Services
//                   </a>
//                   <a 
//                     href="/projects" 
//                     className={`hover:font-bold transition-all cursor-pointer relative px-6 py-1 ${path == '/projects' && 'font-bold text-[#a385ff] after:absolute after:inset-0 after:border-[2px] after:border-[#a090fedc] after:rounded-full after:pointer-events-none'}`}
//                   >
//                     Projects
//                   </a>

//                 </div>

//             </div>

//             <div className='flex flex-row gap-2'>
//                 <a href="#contact" className='bg-[#6134e6b1] cursor-pointer rounded-full text-white px-5 py-2 hover:bg-[#7749ff] transition-all'>Contact</a>
                
//                 {/* {Socials.map((social)=>(
//                     <Image src={social.src} alt={social.name} key={social.name} width={24} height={24}/>
//                 ))} */}

//                 {/* <Links /> */}

//             </div>

//         </div>
//     </div>
//   )
// }

// export default Navbar

"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const Navbar = () => {
  const path = usePathname();

  return (
    <div className="bg-[#030014c9] w-full h-[65px] fixed top-0 shadow-lg shadow-[#03001417] back-drop-blur-md z-50 px-10">
      <div className="w-full h-full flex flex-row items-center justify-between m-auto px-[10px]">
        <Link href="/" className="h-auto w-auto flex flex-row items-center">
          <Image
            src="/profile.png"
            alt="logo"
            width={50}
            height={50}
            className="cursor-pointer hover:animate-slowspin rounded-full hover:blur-sm transition-all"
          />
          <span className="font-bold text-xl ml-[10px] hidden md:block text-[#b49bff] hover:text-[#8c71dcef] hover:bg transition-all">
            Muhammad Muneeb Khan
          </span>
        </Link>

        <div className="w-[500px] h-full flex flex-row items-center justify-between md:mr-20">
          <div className="flex items-center justify-between w-full h-auto border border-[#7042f861] bg-[#030014e6] mr-[15px] px-[20px] py-[7px] rounded-full p-3 text-gray-200">
            <Link
              href="/about"
              className={`hover:font-bold transition-all cursor-pointer relative px-6 py-1 ${
                path == "/about" &&
                "font-bold text-purple-500 after:absolute after:inset-0 after:border-[2px] after:border-purple-500 after:rounded-full after:pointer-events-none"
              }`}
            >
              About Me
            </Link>
            <Link
              href="/services"
              className={`hover:font-bold transition-all cursor-pointer relative px-6 py-1 ${
                path == "/services" &&
                "font-bold text-purple-500 after:absolute after:inset-0 after:border-purple-500 after:border-[2px] after:rounded-full after:pointer-events-none"
              }`}
            >
              Services
            </Link>
            <Link
              href="/projects"
              className={`hover:font-bold transition-all cursor-pointer relative px-6 py-1 ${
                path == "/projects" &&
                "font-bold text-purple-500 after:absolute after:inset-0 after:border-[2px] after:border-purple-500 after:rounded-full after:pointer-events-none"
              }`}
            >
              Projects
            </Link>
          </div>
        </div>

        <div className="flex flex-row gap-2">
          <Link
            href="/contact"
            className="bg-[#7d52ffb1] cursor-pointer rounded-full text-white px-5 py-1 text-xl hover:bg-[#7749ff] transition-all"
          >
            Contact
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
