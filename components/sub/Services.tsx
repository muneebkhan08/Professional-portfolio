"use client";
import React from "react";
import { PinContainer } from "@/components/ui/3d-pin";

export function ServiceCards() {
  return (
    <div className="h-[30rem] w-full flex gap-2 flex-col items-center justify-center md:flex-row">

      <PinContainer
        title="Discuss about a new website"
        href="/contact"
      >
        <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[20rem]">
          <h3 className="max-w-xs !pb-2 !m-0 font-bold text-3xl text-slate-100">
            Web Development
          </h3>
          <div className="text-base !m-0 !p-0 font-normal">
            <span className="text-slate-500">
              Anybody can build you a website. We build for scale. Our web development services future-proof your product from Day 1.
            </span>
          </div>
          {/* Image inside the last div */}
          <div className="flex flex-1 w-full rounded-lg mt-4 overflow-hidden">
            <img
              src="/webDev.jpeg" // Replace with the actual image path
              alt="Web Development"
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
        </div>
      </PinContainer>

      <PinContainer
        title="Lets talk AI"
        href="/contact"
      >
        <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[20rem]">
          <h3 className="max-w-xs !pb-2 !m-0 font-bold text-3xl text-slate-100">
            Generative AI
          </h3>
          <div className="text-base !m-0 !p-0 font-normal">
            <span className="text-slate-500">
            Having trouble keeping up with how fast AI is changing our world? This is where we come in. Let&apos;s figure out how to get GenAI to work for you.
            </span>
          </div>
          {/* Image inside the last div */}
          <div className="flex flex-1 w-full rounded-lg mt-4 overflow-hidden">
            <img
              src="/GenAI.jpg" // Replace with the actual image path
              alt="Web Development"
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
        </div>
      </PinContainer>

      <PinContainer
        title="Re-design the Design"
        href="/contact"
      >
        <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[20rem]">
          <h3 className="max-w-xs !pb-2 !m-0 font-bold text-3xl text-slate-100">
          UI/UX
          </h3>
          <div className="text-base !m-0 !p-0 font-normal">
            <span className="text-slate-500">
            Specialize in crafting intuitive, compelling, and functional UI/UX designs that enhance user engagement and drive business success.
            </span>
          </div>
          {/* Image inside the last div */}
          <div className="flex flex-1 w-full rounded-lg mt-4 overflow-hidden">
            <img
              src="/UIUX.png" // Replace with the actual image path
              alt="Web Development"
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
        </div>
      </PinContainer>

      <PinContainer
        title="Let's build a new Software"
        href="/contact"
      >
        <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[20rem]">
          <h3 className="max-w-xs !pb-2 !m-0 font-bold text-3xl text-slate-100">
            Custom Software Development
          </h3>
          <div className="text-base !m-0 !p-0 font-normal">
            <span className="text-slate-500">
            Building scalable and bespoke software tailored to address specific business challenges. Lets turn your vision into reality.
            </span>
          </div>
          {/* Image inside the last div */}
          <div className="flex flex-1 w-full rounded-lg mt-4 overflow-hidden">
            <img
              src="/CusSoft.avif" // Replace with the actual image path
              alt="Web Development"
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
        </div>
      </PinContainer>


    </div>
  );
}

// "use client";
// import React from "react";
// import { PinContainer } from "@/components/ui/3d-pin";

// export function ServiceCards() {
//   return (
//     <div className="w-full py-12 flex flex-col items-center">
//       {/* Responsive container with grid layout */}
//       <div className="w-full max-w-7xl px-4 mx-auto">
//         {/* Title section */}
//         <div className="text-center mb-12">
//           <h2 className="text-3xl md:text-4xl font-bold text-slate-100 mb-4">Our Services</h2>
//           <p className="text-slate-400 max-w-2xl mx-auto">Solutions tailored to your business needs</p>
//         </div>
        
//         {/* Cards grid - responsive across all screen sizes */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          
//           {/* Web Development Card */}
//           <div className="flex justify-center">
//             <PinContainer
//               title="Discuss about a new website"
//               href="/contact"
//             >
//               <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 w-full h-[20rem]">
//                 <h3 className="max-w-xs !pb-2 !m-0 font-bold text-2xl md:text-3xl text-slate-100">
//                   Web Development
//                 </h3>
//                 <div className="text-sm md:text-base !m-0 !p-0 font-normal">
//                   <span className="text-slate-500">
//                     Anybody can build you a website. We build for scale. Our web development services future-proof your product from Day 1.
//                   </span>
//                 </div>
//                 <div className="flex flex-1 w-full rounded-lg mt-4 overflow-hidden">
//                   <img
//                     src="/webDev.jpeg"
//                     alt="Web Development"
//                     className="w-full h-full object-cover rounded-lg"
//                   />
//                 </div>
//               </div>
//             </PinContainer>
//           </div>
          
//           {/* Generative AI Card */}
//           <div className="flex justify-center">
//             <PinContainer
//               title="Lets talk AI"
//               href="/contact"
//             >
//               <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 w-full h-[20rem]">
//                 <h3 className="max-w-xs !pb-2 !m-0 font-bold text-2xl md:text-3xl text-slate-100">
//                   Generative AI
//                 </h3>
//                 <div className="text-sm md:text-base !m-0 !p-0 font-normal">
//                   <span className="text-slate-500">
//                     Having trouble keeping up with how fast AI is changing our world? This is where we come in. Let's figure out how to get GenAI to work for you.
//                   </span>
//                 </div>
//                 <div className="flex flex-1 w-full rounded-lg mt-4 overflow-hidden">
//                   <img
//                     src="/GenAI.jpg"
//                     alt="Generative AI"
//                     className="w-full h-full object-cover rounded-lg"
//                   />
//                 </div>
//               </div>
//             </PinContainer>
//           </div>
          
//           {/* UI/UX Card */}
//           <div className="flex justify-center">
//             <PinContainer
//               title="Re-design the Design"
//               href="/contact"
//             >
//               <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 w-full h-[20rem]">
//                 <h3 className="max-w-xs !pb-2 !m-0 font-bold text-2xl md:text-3xl text-slate-100">
//                   UI/UX
//                 </h3>
//                 <div className="text-sm md:text-base !m-0 !p-0 font-normal">
//                   <span className="text-slate-500">
//                     Specialize in crafting intuitive, compelling, and functional UI/UX designs that enhance user engagement and drive business success.
//                   </span>
//                 </div>
//                 <div className="flex flex-1 w-full rounded-lg mt-4 overflow-hidden">
//                   <img
//                     src="/UIUX.png"
//                     alt="UI/UX Design"
//                     className="w-full h-full object-cover rounded-lg"
//                   />
//                 </div>
//               </div>
//             </PinContainer>
//           </div>
          
//           {/* Custom Software Development Card */}
//           <div className="flex justify-center">
//             <PinContainer
//               title="Let's build a new Software"
//               href="/contact"
//             >
//               <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 w-full h-[20rem]">
//                 <h3 className="max-w-xs !pb-2 !m-0 font-bold text-2xl md:text-3xl text-slate-100">
//                   Custom Software
//                 </h3>
//                 <div className="text-sm md:text-base !m-0 !p-0 font-normal">
//                   <span className="text-slate-500">
//                     Building scalable and bespoke software tailored to address specific business challenges. Lets turn your vision into reality.
//                   </span>
//                 </div>
//                 <div className="flex flex-1 w-full rounded-lg mt-4 overflow-hidden">
//                   <img
//                     src="/CusSoft.avif"
//                     alt="Custom Software Development"
//                     className="w-full h-full object-cover rounded-lg"
//                   />
//                 </div>
//               </div>
//             </PinContainer>
//           </div>
          
//         </div>
//       </div>
//     </div>
//   );
// }
