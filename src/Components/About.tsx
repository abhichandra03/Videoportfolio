'use client'
import { FC, useRef } from 'react'
import Image from 'next/image'


interface AboutProps {
  
} 

const About: FC<AboutProps> = ({}) => {


  return (
    <div id='about' className='flex w-full h-full  poppins'>
        {/* Container div */}
        <div className="flex flex-col justify-center items-center w-full h-full">
        <div  className="max-w-[1000px] w-full grid grid-cols-2 gap-8 ">
          <div className="sm:text-right pb-8 pl-4">
            <p className="text-4xl font-bold inline border-b-4 border-pink-400 bebas">
              {`About`}
            </p>
          </div>
        </div>
        <div className="max-w-[1000px] w-full h-auto grid sm:grid-cols-2 gap-8 sm:gap-y-16 py-6  px-4">
          <div className="sm:text-right text-3xl font-bold">
            <p>{`Hi, this is a portfolio website.`}<br/>{`Please take a look around.`}</p>
          </div>
          <div>
            <p>
            {`Hey there! 👋 Welcome
              I'm tech-savvy computer science graduate with a passion for video editing and creating stunning visual stories.
              But my creative journey doesn't end there. I'm a social media and digital marketing enthusiast and harnessing AI on Facebook, Instagram, and LinkedIn to ignite brand engagement. 📈
              In addition, I'm skilled in graphic design, content creation, and social media management. I craft eye-catching visuals, produce engaging content, and manage digital platforms to maximize reach and impact. 
              🚀 Connect with me to discuss how we can elevate your brand through video production, graphic design, content creation, social media management, and digital marketing.`}
            </p>
          </div>
          <div className='relative  flex justify-center items-center w-full h-[200px]'>
          <Image
                src={'/ig.jpeg'}
                className='object-contain h-full'
                alt=''
                fill
                />
          </div>
          <div className='flex justify-center items-center w-full h-full'>
          <p>{`As a passionate creator and editor, I've established an engaging presence on Instagram through my editing page.`}</p>
          </div>
        </div>
      </div>
    </div>

    )
}

export default About