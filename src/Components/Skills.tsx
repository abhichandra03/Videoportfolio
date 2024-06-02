import { FC } from 'react'
import { BiLogoGmail } from "react-icons/bi";
import { FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import googleWork from './../../assests/google.png'
import googleAnalytics from './../../assests/googleAnalytics.png'
import cms from './../../assests/cms.png'
import canva from './../../assests/canva.png'
import meta from './../../assests/Meta.png'
import afterEffects from './../../assests/adobeAfter.png'
import adobrCretive from './../../assests/adobeCreative.png'
import Image from 'next/image';

interface SkillsProps {
  
}

const Skills: FC<SkillsProps> = ({}) => {
  return (
    <div id='skills' className='flex flex-col w-full h-screen justify-center items-center'>
        <div className='max-w-[1000px] w-full flex justify-center items-center'>
            <p className='text-4xl font-bold inline border-b-4 border-pink-400'>Skills</p>          
        </div>

        <div className='max-w-[1000px] h-auto flex flex-col p-4 justify-around items-center'>
            
            <div className='flex w-full h-auto justify-center items-center p-4 -translate-x-1'>
            
            <div
              id={"slider"}  
              className="flex flex-nowrap items-center w-full h-full text-center  overflow-x-scroll scroll-smooth no-scrollbar"
            >
            <div className="flex flex-col justify-center items-center min-w-[300px] lg:min-w-[300px] shadow-md shadow-[0_3px_10px_rgb(0,0,0,0.2)] hover:scale-110 duration-500 mx-8 p-2">
                <Image
                src={canva}
                className='object-contain w-1/2 h-1/2 p-2'
                alt=''
                />
                <p>Canva</p>
            </div>
            <div className="flex flex-col justify-center items-center min-h-[120px] min-w-[300px] lg:min-w-[300px] shadow-md shadow-[0_3px_10px_rgb(0,0,0,0.2)] hover:scale-110 duration-500 mx-8 p-2"> 
                <Image
                src={googleWork}
                className='object-contain w-1/2 h-1/2 p-2'
                alt=''
                />
                <p>Google Workspace</p> 
            </div>
            <div className="flex flex-col justify-center items-center min-w-[300px] lg:min-w-[300px] shadow-md shadow-[0_3px_10px_rgb(0,0,0,0.2)] hover:scale-110 duration-500 mx-8 p-2">
                <Image
                src={cms}
                className='object-contain w-1/2 h-1/2 p-2'
                alt=''
                />
                <p>Content Management System</p>
            </div>
            <div className="flex flex-col justify-center items-center min-w-[300px] lg:min-w-[300px] shadow-md shadow-[0_3px_10px_rgb(0,0,0,0.2)] hover:scale-110 duration-500 mx-8 p-2">
                <Image
                src={afterEffects}
                className='object-contain w-1/2 h-1/2 p-2'
                alt=''
                />
                <p>Adobe After Effects</p>
            </div>
            <div className="flex flex-col justify-center items-center min-w-[300px] lg:min-w-[300px] shadow-md shadow-[0_3px_10px_rgb(0,0,0,0.2)] hover:scale-110 duration-500 mx-8 p-2">
                <Image
                src={adobrCretive}
                className='object-contain w-1/2 h-1/2 p-2'
                alt=''
                />
                <p>Adobe Creative Suite</p>
            </div>
            <div className="flex flex-col justify-center items-center min-w-[300px] lg:min-w-[300px] shadow-md shadow-[0_3px_10px_rgb(0,0,0,0.2)] hover:scale-110 duration-500 mx-8 p-2">
                <Image
                src={googleAnalytics}
                className='object-contain w-1/2 h-1/2 p-2'
                alt=''
                />
                <p>Google Analytics</p>
            </div>
            <div className="flex flex-col justify-center items-center min-w-[300px] lg:min-w-[300px] shadow-md shadow-[0_3px_10px_rgb(0,0,0,0.2)] hover:scale-110 duration-500 mx-8 p-2">
                <Image
                src={meta}
                className='object-contain w-1/2 h-1/2 p-2'
                alt=''
                />
                <p>Meta Business Suite</p>
            </div>
            </div>
          </div>
        </div>
            

    </div>
  )
}

export default Skills