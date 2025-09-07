"use client"
import React from 'react'
import Footer from '@/components/sub/Footer';
import AboutData from '@/components/sub/AboutData';
import { CanvasReveal } from '@/components/sub/CanvasReveal';
import AboutLink from '@/components/sub/AboutLink';

const About = () => {
  return (
    <div>
    {/* <motion.div initial="hidden" animate="visible" className='flex flex-col px-20 mt-[8rem] w-full z-[20]'>
        <motion.div variants={slideInFromLeft(0.5)} className='flex flex-col gap-6 mt-6 text-5xl font-bold text-white max-w-[600px] w-auto h-auto'>
                        <span className='text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-cyan-300 pb-10'>
                            About me
                        </span>
        </motion.div>


    </motion.div> */}
    {/* <> */}
      {/* <div className="py-20 flex flex-col lg:flex-row items-center justify-center bg-white dark:bg-black w-full gap-4 mx-auto px-8">
        <Card title="Sheetal is Nisha" icon={<AceternityIcon />}>
          <CanvasRevealEffect
            animationSpeed={5.1}
            containerClassName="bg-emerald-900"
          />
        </Card>
        <Card title="Nisha is Munni" icon={<AceternityIcon />}>
          <CanvasRevealEffect
            animationSpeed={3}
            containerClassName="bg-black"
            colors={[
              [236, 72, 153],
              [232, 121, 249],
            ]}
            dotSize={2}
          /> */}
          {/* Radial gradient for the cute fade */}
          {/* <div className="absolute inset-0 [mask-image:radial-gradient(400px_at_center,white,transparent)] bg-black/50 dark:bg-black/90" />
        </Card>
        <Card title="Munni is Aditi" icon={<AceternityIcon />}>
          <CanvasRevealEffect
            animationSpeed={3}
            containerClassName="bg-sky-600"
            colors={[[125, 211, 252]]}
          />
        </Card>
      </div>
    </> */}

    <AboutData />

    <CanvasReveal />

    <AboutLink />

    <Footer/>
    </div>
  )
}


export default About