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
            <p>{`This is a portfolio website.`}<br/>{`Please take a look around.`}</p>
          </div>
          <div>
            <p>
            {`Hey there! 👋 Welcome
              👋 I'm a computer science graduate specializing in video editing, graphic design, and digital marketing. 
              I use AI on social media to boost brand engagement and create eye-catching visuals and content. Let's connect to elevate your brand  strategies. 🚀`}
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