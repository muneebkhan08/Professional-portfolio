// "use client"
// import React from 'react'
// import {motion} from 'framer-motion';
// import { slideInFromLeft } from '@/utils/motion';
// import dynamic from "next/dynamic";
// import ContactForm from '@/components/sub/ContactForm';

// import { globeConfig, colors, sampleArcs,} from '@/constants/globeData'

// const World = dynamic(() => import("@/components/ui/globe").then((m) => m.World), {
//     ssr: false,
//   });

// const Contact = () => {
    

    
//   return (
//     <div className='mt-20'>
//         <div className="flex flex-row items-center justify-center py-20 h-screen md:h-auto dark:bg-black bg-white relative w-full">
//               <div className="max-w-7xl mx-auto w-full relative overflow-hidden h-full md:h-[40rem] ">
//                 <motion.div
//                   initial={{
//                     opacity: 0,
//                     y: 20,
//                   }}
//                   animate={{
//                     opacity: 1,
//                     y: 0,
//                   }}
//                   transition={{
//                     duration: 1,
//                   }}
//                   className="div"
//                 >
//                   <h2 className="text-center text-xl md:text-4xl font-bold text-black dark:text-white">
//                     We sell soap worldwide
//                   </h2>
//                   <p className="text-center text-base md:text-lg font-normal text-neutral-700 dark:text-neutral-200 max-w-md mt-2 mx-auto">
//                     This globe is interactive and customizable. Have fun with it, and
//                     don&apos;t forget to share it. :)
//                   </p>
//                 </motion.div>
//                 <div className="absolute w-full bottom-0 inset-x-0 h-40 bg-gradient-to-b pointer-events-none select-none from-transparent dark:to-black to-white z-40" />
//                 <div className="absolute w-full -bottom-20 h-72 md:h-full z-10">
//                   <World data={sampleArcs} globeConfig={globeConfig} />
//                 </div>
//               </div>
//             </div>
        
//         {/* <motion.div initial="hidden" animate="visible" className='flex flex-col px-20 mt-[8rem] w-full z-[20]'>
//             <motion.div variants={slideInFromLeft(0.5)} className='flex flex-col gap-6 mt-6 text-5xl font-bold text-white max-w-[600px] w-auto h-auto'>
//                 <span className='text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-cyan-300 pb-10'>
//                     Contact me
//                 </span>
//             </motion.div>
//         </motion.div> */}
        
//         <div className='flex flex-col'>
//             <div></div>
//             <div><ContactForm /></div>
//         </div>
        
//     </div>
//   )
// }

// export default Contact















"use client";
import React from "react";
import ContactForm from "@/components/sub/ContactForm";
import { GoArrowUpRight } from "react-icons/go";



const Contact = () => {
  return (
    // <div className="mt-20">
    //   {/* Additional sections, e.g., contact form */}
    //    <div className="flex flex-row">
        
    //     <div className="w-full h-full">
    //       <div className="w-full h-full flex items-center justify-center bg-cover">
    //         <video
    //         className="w-full h-auto"
    //         preload="false"
    //         playsInline
    //         loop
    //         muted
    //         autoPlay
    //         src="/cards-video.webm"
    //         />
    //       </div>
    //     </div>

    //     <div>
    //       <ContactForm />
    //     </div>
    //   </div> 
    // </div>
    <div className="mt-20">
  {/* Main container - row on desktop, column on mobile */}
  <div className="flex flex-col md:flex-row w-full">
    
    {/* Video div - full width on mobile, 50% on desktop */}
    <div className="w-full md:w-1/2 h-full mt-10">

      <div className="flex flex-col items-start text-white mx-10">
        {/* Title */}
        <div className="text-lg md:text-lg lg:text-xl font-bold text-gray-400 animate-pulse">
          <span className="text-purple-500">Contact</span> me
        </div>
        <div className="flex flex-row gap-2 text-2xl md:text-3xl lg:text-4xl font-extrabold text-gray-200 my-3">
        Let&apos;s discuss your project
        <GoArrowUpRight />
        </div>
        <div className="flex items-start text-gray-200 text-base md:text-lg lg:text-lg mt-4">
        We are committed to understanding your requirements and crafting a tailored solution that aligns with your goals.
        </div>
      
        {/* Description */}
        <p className="text-gray-400 text-base md:text-lg lg:text-lg mt-1">
        Have a question or want to work together? Fill out the form below and I&apos;ll get back to you as soon as possible.
        </p>
      </div>

      <div className="w-full h-full flex items-center justify-center bg-cover">
        <video
          className="w-full h-auto"
          preload="false"
          playsInline
          loop
          muted
          autoPlay
          src="/cards-video.webm"
        />
      </div>
    </div>

    {/* Contact form div - full width on mobile, 50% on desktop */}
    <div className="bg-[#30104bdd] rounded-3xl w-full md:w-1/2 py-10 mr-7">
      <ContactForm />
    </div>
  </div> 
</div>
  );
};

export default Contact;
