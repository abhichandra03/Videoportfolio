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

        <div className='max-w-[1000px] h-auto flex flex-col p-4 justify-around items-center'>
            
            <div className='flex w-full h-auto justify-center items-center p-4 -translate-x-1'>
            
            <div
              id={"slider"}  
              className="flex flex-nowrap items-center w-full h-full text-center  overflow-x-scroll scroll-smooth no-scrollbar"
            >
            <div className="flex justify-center items-center min-w-[300px] lg:min-w-[300px] shadow-md shadow-[0_3px_10px_rgb(0,0,0,0.2)] hover:scale-110 duration-500 mx-8 p-2">
                <p>PPC Advertising</p>
            </div>
            <div className="flex justify-center items-center min-w-[300px] lg:min-w-[300px] shadow-md shadow-[0_3px_10px_rgb(0,0,0,0.2)] hover:scale-110 duration-500 mx-8 p-2"> 
                <p>Social Media Marketing</p> 
            </div>
            <div className="flex justify-center items-center min-w-[300px] lg:min-w-[300px] shadow-md shadow-[0_3px_10px_rgb(0,0,0,0.2)] hover:scale-110 duration-500 mx-8 p-2">
                <p>Analytics and Reporting</p>
            </div>
            <div className="flex justify-center items-center min-w-[300px] lg:min-w-[300px] shadow-md shadow-[0_3px_10px_rgb(0,0,0,0.2)] hover:scale-110 duration-500 mx-8 p-2">
                <p>Crm Tools</p>
            </div>
            <div className="flex justify-center items-center min-w-[300px] lg:min-w-[300px] shadow-md shadow-[0_3px_10px_rgb(0,0,0,0.2)] hover:scale-110 duration-500 mx-8 p-2">
                <p>SEO</p>
            </div>
            <div className="flex justify-center items-center min-w-[300px] lg:min-w-[300px] shadow-md shadow-[0_3px_10px_rgb(0,0,0,0.2)] hover:scale-110 duration-500 mx-8 p-2">
                <p>Canvas</p>
            </div>
            <div className="flex justify-center items-center min-w-[300px] lg:min-w-[300px] shadow-md shadow-[0_3px_10px_rgb(0,0,0,0.2)] hover:scale-110 duration-500 mx-8 p-2">
                <p>Branding</p>
            </div>
            <div className="flex justify-center items-center min-w-[300px] lg:min-w-[300px] shadow-md shadow-[0_3px_10px_rgb(0,0,0,0.2)] hover:scale-110 duration-500 mx-8 p-2">
                <p>Illustraions</p>
            </div>
            <div className="flex justify-center items-center min-w-[300px] lg:min-w-[300px] shadow-md shadow-[0_3px_10px_rgb(0,0,0,0.2)] hover:scale-110 duration-500 mx-8 p-2">
                <p>Adobe After Effects</p>
            </div>
            <div className="flex justify-center items-center min-w-[300px] lg:min-w-[300px] shadow-md shadow-[0_3px_10px_rgb(0,0,0,0.2)] hover:scale-110 duration-500 mx-8 p-2">
                <p>VFX and Composition</p>
            </div>
            
            
            </div>
          </div>
        </div>
            

    </div>
  )
}

export default Skills