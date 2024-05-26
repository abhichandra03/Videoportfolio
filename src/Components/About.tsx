import { FC } from 'react'


interface AboutProps {
  
}

const About: FC<AboutProps> = ({}) => {
  return (
    <div id='about' className='flex w-full h-full bg-[#607274] text-[#FAEED1] poppins'>
        <div className="flex flex-col justify-center items-center w-full h-full">
        {/* Container div */}
        <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8 ">
          <div className="sm:text-right pb-8 pl-4">
            <p className="text-4xl font-bold inline border-b-4 border-pink-400">
              About
            </p>
          </div>
          <div></div>
        </div>
        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 py-6 px-4">
          <div className="sm:text-right text-4xl font-bold">
            <p>Hi, this is a portfolio website. Please take a look around.</p>
          </div>
          <div>
            <p>
            {`Hey there! 👋 I'm Gayatri, a dynamic video editor with an insatiable passion for crafting compelling visual narratives. 
            But my love for creativity doesn't stop there. 🌟 I'm equally obsessed with the ever-evolving world of social media and digital marketing. 
            I thrive on staying ahead of trends, mastering algorithms, and creating strategies that drive engagement and results.
            Let's collaborate and bring your vision to life! 🚀 Connect with me to discuss how we can elevate your brand through the synergy of video production, social media management, and digital marketing.`}
            </p>
          </div>
        </div>
      </div>

    </div>)
}

export default About