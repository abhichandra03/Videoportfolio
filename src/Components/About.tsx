import { FC } from 'react'


interface AboutProps {
  
}

const About: FC<AboutProps> = ({}) => {
  return (
    <div id='about' className='flex w-full h-full bg-[#607274] text-[#FAEED1] poppins'>
        {/* <div className='w-full h-full flex justify-center items-center md:w-1/3'>
            <h1 className='text-8xl cedarville-curvise font-bold'>About</h1>          
        </div>

        <div className='w-full h-screen flex flex-col text-[#FAEED1] p-2 md:w-2/3'>
            <div className='flex justify-center items-center w-full h-2/5'>
                <h1>About section</h1>
            </div>
            <div className='flex flex-col w-full h-fit justify-evenly sm:flex-row h-3/5 items-center'>
                <div className='w-1/2 h-full p-2 flex flex-col'>
                    <div className='flex justify-center'>
                        <h2 className='text-3xl'>My Work</h2>
                    </div>
                    <div className='flex flex-col w-full text-xl'>
                        <p className='p-2'>Shorts/Reels</p>
                        <p className='p-2'>Youtube Thumbnail</p>
                        <p className='p-2'>Youtube Channel art</p>
                        <p className='p-2'>Logo</p>
                        <p className='p-2'>Pfp</p>
                        <p className='p-2'>Linkedin Banner</p>
                        <p className='p-2'>Brand ads</p>
                    </div>
                    
                </div>
                <div className='w-1/2 h-full p-2 flex flex-col'>
                    <div className='flex justify-center'>
                        <h2 className='text-3xl'>Contact</h2>
                    </div>
                    <div className='flex flex-col w-full text-xl items-center justify-center'>
                        <p className='flex w-full p-4 '><BiLogoGmail  className='mr-4'/>somegmail@gmail.com</p>
                        <p className='flex w-full p-4'><FaLinkedinIn className='mr-4'/>Linkedin</p>
                        <p className='flex w-full p-4'><FaInstagram className='mr-4'/>Instgram</p>
                    </div>
                </div>
            </div>
        </div> */}
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
            Hey there! 👋 I'm Gayatri, a dynamic video editor with an insatiable passion for crafting compelling visual narratives. 
            But my love for creativity doesn't stop there. 🌟 I'm equally obsessed with the ever-evolving world of social media and digital marketing. 
            I thrive on staying ahead of trends, mastering algorithms, and creating strategies that drive engagement and results.
            Let's collaborate and bring your vision to life! 🚀 Connect with me to discuss how we can elevate your brand through the synergy of video production, social media management, and digital marketing.
            </p>
          </div>
        </div>
      </div>

    </div>)
}

export default About