'use client'
import { FC, useEffect, useRef, useState } from 'react'
import { HiMiniSpeakerWave } from "react-icons/hi2";
import { HiMiniSpeakerXMark } from "react-icons/hi2";
// import video1 from '../../assests/video1.mp4'
// import video2 from '../../assests/video2.mp4'

interface workProps {
}

const work: FC<workProps> = ({}) => {
    const videoRef = useRef<HTMLVideoElement[]>([])
    const [isMuted, setIsMuted] = useState(true)
    const allVideos = ['video1.mp4', "video2.mp4"]
    const n = allVideos.length
    const [isHovering, setIsHovering] = useState<boolean[]>(new Array(allVideos.length).fill(false))
    

    const onMouseEnter = (id:number) => {
        const newArray = [...isHovering]
        newArray[id] = true
        setIsHovering(newArray)
    }
    const onMouseLeave = (id:number) => {
        const newArray = [...isHovering]
        newArray[id] = false
        setIsHovering(newArray)
    }
    

    const  handleMute = (id:number) => {
        const videoEle = videoRef.current[id]
        setIsMuted((prev) => {
            if (videoRef) {
             videoEle!.muted = !prev;
             }
      
          return !prev;
          });
   };



  return (
    <div className='max-w-screen flex justify-evenly items-center h-screen bg-[#607274] text-[#FAEED1] cedarville-curvise overflow-x-hidden'>
        <div className='flex justify-evenly items-center w-screen h-fit rounded-3xl'>
            
            {
                allVideos.map((video,id) => (
                    <div key={id} className='relative flex w-1/4 h-[100%] rounded-3xl hover:opacity-[90%]  duration-400 overflow-hidden' 
                        >   
                        {isHovering[id]? 
                        (   isMuted?
                            <HiMiniSpeakerWave size={40} className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'/>:
                            <HiMiniSpeakerXMark size={40} className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2' />
                        )
                        :
                        ("")
                        }
                            <video
                            ref={(el) => {
                                if (el && !videoRef.current.includes(el)) {
                                  videoRef.current.push(el);
                                }}}
                            key={id} src={require(`../../assests/${video}`)} controls={false} autoPlay loop
                            onClick={()=>handleMute(id)}
                            onMouseEnter={() =>onMouseEnter(id)}
                            onMouseLeave={() =>onMouseLeave(id)}
                            muted/>
                            </div>
                ))
            }
        </div>
    </div>
    )
}

export default work