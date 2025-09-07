"use client"
import React from 'react'
import {motion} from 'framer-motion';
import { slideInFromLeft } from '@/utils/motion';
import { AnimatedTestimonials } from '@/components/ui/animated-testimonials';
import Footer from '@/components/sub/Footer';

const Projects = () => {
    const testimonials = [
        {
          key: 1,
          quote:
            "The attention to detail and innovative features have completely transformed our workflow. This is exactly what we've been looking for.",
          name: "Sarah Chen",
          designation: "Product Manager at TechFlow",
          src: "/ss.png",
        },
        {
            key: 2,
          quote:
            "Implementation was seamless and the results exceeded our expectations. The platform's flexibility is remarkable.",
          name: "Michael Rodriguez",
          designation: "CTO at InnovateSphere",
          src: "/ts.png",
        },
      ];

  return (
    <div>
    <motion.div initial="hidden" animate="visible" className='flex flex-col px-20 mt-[8rem] w-full z-[20]'>
        <motion.div variants={slideInFromLeft(0.5)} className='flex flex-col gap-6 mt-6 text-6xl font-extrabold text-white max-w-[600px] w-auto h-auto'>
                        <span className='text-purple-500 pb-10 mb-10'>
                            Projects
                        </span>
        </motion.div>
        
        <motion.div variants={slideInFromLeft(0.8)} className='flex flex-col items-center border-[1px] bg-[#140b21] border-gray-700 rounded-xl z-[30] md:mx-[5rem] mb-10'>
            <div className='flex flex-col items-center text-4xl mt-[5rem]'>
            <motion.div variants={slideInFromLeft(0.8)} className='font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300 pb-5'>
                Interview AI
            </motion.div>
            <motion.p variants={slideInFromLeft(0.8)} className='text-xl text-gray-400 max-w-[1000px]'>
                            I&apos;m a Full-Stack software Engineer with experience in Website, Mobile, Generative AI, AI agents and Software developement. Check out my projects and skills
            </motion.p>
            </div>            
            <AnimatedTestimonials testimonials={testimonials} />
        </motion.div>

        <motion.div variants={slideInFromLeft(0.8)} className='mb-10 flex flex-col items-center border-[1px] bg-[#140b21] border-gray-700 rounded-xl z-[30] md:mx-[5rem]'>
            <div className='flex flex-col items-center text-4xl mt-[5rem]'>
            <motion.div variants={slideInFromLeft(0.8)} className='font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300 pb-5'>
                Gamex
            </motion.div>
            <motion.p variants={slideInFromLeft(0.8)} className='text-xl text-gray-400 max-w-[1000px]'>
                            I&apos;m a Full-Stack software Engineer with experience in Website, Mobile, Generative AI, AI agents and Software developement. Check out my projects and skills
            </motion.p>
            </div>            
            <AnimatedTestimonials testimonials={testimonials} />
        </motion.div>

        <motion.div variants={slideInFromLeft(0.8)} className='mb-10 flex flex-col items-center border-[1px] bg-[#140b21] border-gray-700 rounded-xl z-[30] md:mx-[5rem]'>
            <div className='flex flex-col items-center text-4xl mt-[5rem]'>
            <motion.div variants={slideInFromLeft(0.8)} className='font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300 pb-5'>
                Personal 3D portfolio
            </motion.div>
            <motion.p variants={slideInFromLeft(0.8)} className='text-xl text-gray-400 max-w-[1000px]'>
                            I&apos;m a Full-Stack software Engineer with experience in Website, Mobile, Generative AI, AI agents and Software developement. Check out my projects and skills
            </motion.p>
            </div>            
            <AnimatedTestimonials testimonials={testimonials} />
        </motion.div>

        <motion.div variants={slideInFromLeft(0.8)} className='mb-10 flex flex-col items-center border-[1px] bg-[#140b21] border-gray-700 rounded-xl z-[30] md:mx-[5rem]'>
            <div className='flex flex-col items-center text-4xl mt-[5rem]'>
            <motion.div variants={slideInFromLeft(0.8)} className='font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300 pb-5'>
                Dynamic chating app- Whatsapp
            </motion.div>
            <motion.p variants={slideInFromLeft(0.8)} className='text-xl text-gray-400 max-w-[1000px]'>
                            I&apos;m a Full-Stack software Engineer with experience in Website, Mobile, Generative AI, AI agents and Software developement. Check out my projects and skills
            </motion.p>
            </div>            
            <AnimatedTestimonials testimonials={testimonials} />
        </motion.div>

        <motion.div variants={slideInFromLeft(0.8)} className='mb-20 flex flex-col items-center border-[1px] bg-[#140b21] border-gray-700 rounded-xl z-[30] md:mx-[5rem]'>
            <div className='flex flex-col items-center text-4xl mt-[5rem]'>
            <motion.div variants={slideInFromLeft(0.8)} className='font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300 pb-5'>
                CRM 360&deg; with AI
            </motion.div>
            <motion.p variants={slideInFromLeft(0.8)} className='text-xl text-gray-400 max-w-[1000px]'>
                            I&apos;m a Full-Stack software Engineer with experience in Website, Mobile, Generative AI, AI agents and Software developement. Check out my projects and skills
            </motion.p>
            </div>            
            <AnimatedTestimonials testimonials={testimonials} />
        </motion.div>
        
        
    </motion.div> 
    
    <Footer />
    
    </div>   
  )
}

export default Projects