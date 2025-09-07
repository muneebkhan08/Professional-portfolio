"use client"

import React from 'react';
import { FlipWords } from "@/components/ui/flip-words";
import {motion} from 'framer-motion';
import { slideInFromLeft, slideInFromRight, slideInFromTop } from '@/utils/motion';
import { SparklesIcon } from '@heroicons/react/16/solid';
import Image from 'next/image';

const HeroContainer = () => {

    const words = ["Full Stack", "AI agents", "UI/UX", "Web Applications", "Generative-AI", "MERN with nextJS", "Modern Web-Apps", "Web-3.O", "projects", "advanced AI"];

  return (
    <motion.div initial="hidden" animate="visible" className='flex flex-row items-center justify-center px-20 mt-40 w-full z-[20]'>
        <div className='h-full w-full flex flex-col gap-5 justify-center m-auto text-start'>
            <motion.div variants={slideInFromTop} className='Welcome-box py-[8px] px-5 border border-[#7042f88b] opacity-[0.9]'>
                <SparklesIcon className='text-white mr-[10px] h-5 w-5'/>

                <h1 className='Welcome-text text-[20px] text-white '>Hello! I am <span className='font-extrabold'>Muneeb</span></h1>

            </motion.div>

            <motion.div variants={slideInFromLeft(0.5)} className='flex flex-col gap-6 mt-6 text-6xl font-bold text-white max-w-[600px] w-auto h-auto'>
                <span className='text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500'>
                    Providing the best 
                    <span >
                        <FlipWords words={words} /><br/>
                    </span> 
                    experience
                </span>
            </motion.div>

            <motion.p variants={slideInFromLeft(0.8)} className='text-lg text-gray-400 my-5 max-w-[600px]'>
                I&apos;m a Full-Stack software Engineer with experience in Website, Mobile, Generative AI, AI agents and Software developement. Check out my projects and skills
            </motion.p>

            <motion.a variants={slideInFromLeft(1)} className='py-3 button-primary text-center text-gray-100 font-bold cursor-pointer rounded-lg max-w-[250px] transition-all'>
                BOOK A FREE CONSULTATION
            </motion.a>
        </div>

        <motion.div variants={slideInFromRight(0.8)} className='w-full h-full flex justify-center items-center'>
            <Image src="./mainIconsDark.svg" alt='work Icons' width={650} height={650}/>

        </motion.div>

    </motion.div>
  )
}

export default HeroContainer