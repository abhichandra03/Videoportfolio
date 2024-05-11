import { FC } from 'react'
import { SiGmail } from "react-icons/si";
import { FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";

interface AboutProps {
  
}

const About: FC<AboutProps> = ({}) => {
  return (
    <div className='w-full flex h-screen bg-[#607274] text-[#FAEED1] cedarville-curvise'>
        <div className='w-1/3 h-full flex justify-center items-center '>
            <h1 className='text-8xl cedarville-curvise font-bold'>About</h1>
            
        </div>

        <div className='w-2/3 flex flex-col text-[#FAEED1] p-2'>
            <div className='flex justify-center items-center w-full h-2/5'>
                <h1>About section</h1>
            </div>
            <div className='flex w-full h-3/5'>
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
                        <p className='flex w-full p-4 '><SiGmail className='mr-4'/>somegmail@gmail.com</p>
                        <p className='flex w-full p-4'><FaLinkedinIn className='mr-4'/>Linkedin</p>
                        <p className='flex w-full p-4'><FaInstagram className='mr-4'/>Instgram</p>
                    </div>
                </div>
            </div>
        </div>
    </div>)
}

export default About