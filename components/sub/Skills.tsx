import { AI_tools, Backend_skill, Frontend_skill, Full_stack, Other_AI} from '@/constants/index'
import React from 'react'
import SkillDataProvider from './SkillDataProvider'


const Skills = () => {
  return (
    <section id='skills' className='flex flex-col items-center justify-center gap-3 h-full relative overflow-hidden pb-[390px] py-[6rem]' style={{transform: "scale(0.9)"}}>

        <h2 className=" text-6xl pb-5 font-extrabold items-center justify-center text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">Skills and Technologies</h2>

        <div  className='text-xl font-bold text-gray-400 mt-16 text-center mb-[10px]'>
            Making Web Apps with Modern Technologies and with exceptional 3D designs
        </div>

        <div className='flex flex-row justify-around flex-wrap mt-4 gap-5 items-center'>
            {Frontend_skill.map((image, index)=>(
                <SkillDataProvider key={index} src={image.Image} width={image.width} height={image.width} index={index} />
            ))}
        </div>
        
        <div className='flex flex-row justify-around flex-wrap mt-4 gap-5 items-center'>
            {Backend_skill.map((image, index)=>(
                <SkillDataProvider key={index} src={image.Image} width={image.width} height={image.width} index={index} />
            ))}
        </div>
        
        <div className='flex flex-row justify-around flex-wrap mt-4 gap-5 items-center'>
            {Full_stack.map((image, index)=>(
                <SkillDataProvider key={index} src={image.Image} width={image.width} height={image.width} index={index} />
            ))}
        </div>


        <div  className='text-xl font-bold  mt-[40px] text-center mb-[10px] text-gray-400'>
        Harnessing AI & Generative Technology in My Development Journey
        </div>
        <div className='flex flex-row justify-around flex-wrap mt-4 gap-5 items-center'>
            {AI_tools.map((image, index)=>(
                <SkillDataProvider key={index} src={image.Image} width={image.width} height={image.width} index={index} />
            ))}
        </div>

        <div className='flex flex-row justify-around flex-wrap mt-4 gap-5 items-center pb-10'>
            {Other_AI.map((image, index)=>(
                <SkillDataProvider key={index} src={image.Image} width={image.width} height={image.width} index={index} />
            ))}
        </div>

    </section>
  )
}

export default Skills