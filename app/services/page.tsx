"use client"
import React from 'react'
import {motion} from 'framer-motion';
import { slideInFromLeft } from '@/utils/motion';
import { ServiceCards } from '@/components/sub/Services';
import Skills from '@/components/sub/Skills';
import Encryption from '@/components/sub/Encryption';
import Footer from '@/components/sub/Footer';
import Connect from '@/components/sub/Connect';


const Services = () => {
  return (
    <div>    <motion.div initial="hidden" animate="visible" className='flex flex-col px-20 mt-[8rem] w-full z-[20]'>
      <motion.div variants={slideInFromLeft(0.5)} className='flex flex-col mt-6 text-4xl font-extrabold text-white max-w-[600px] w-auto h-auto'>
          <span className='text-purple-500 pb-2'>
            Skills & Services
          </span>
      </motion.div>

      <motion.div variants={slideInFromLeft(0.6)}>
        <ServiceCards />
      </motion.div>
      
    <Skills />
    <Encryption />

    </motion.div>

    <div className='mt-[30rem] mb-[9rem]'>
    <Connect />
    </div>

    <Footer />

    </div>
  )
}

export default Services