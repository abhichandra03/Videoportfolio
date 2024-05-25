import { FC } from 'react'
import { BiLogoGmail } from "react-icons/bi";
import { FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";

interface SkillsProps {
  
}

const Skills: FC<SkillsProps> = ({}) => {
  return (
    <div id='skills' className='flex flex-col w-full h-screen justify-center items-center bg-[#607274] text-[#FAEED1] poppins'>
        <div className='max-w-[1000px] w-full flex justify-center items-center'>
            <p className='text-4xl font-bold inline border-b-4 border-pink-400'>Skills</p>          
        </div>

        <div className='flex max-w-[1000px] w-full justify-around p-4'>

            <div className='flex flex-col'>
                <p className='font-semibold text-xl py-2'>My Instagram</p>
            </div>

            <div className='flex flex-col'>
                <p className='font-semibold text-xl p-2'>Skills</p>
                <div className='flex flex-col w-full p-2 text-lg'>
                        <p className='py-1'>Shorts/Reels</p>
                        <p className='py-1'>Youtube Thumbnail</p>
                        <p className='py-1'>Youtube Channel art</p>
                        <p className='py-1'>Logo</p>
                        <p className='py-1'>Pfp</p>
                        <p className='py-1'>Linkedin Banner</p>
                        <p className='py-1'>Brand ads</p>
                    </div>
            </div>

        </div>

    </div>
  )
}

export default Skills