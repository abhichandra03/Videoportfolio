'use client'
import Image from 'next/image';
import { FC, useRef, useState } from 'react'
import { HiMiniSpeakerWave } from "react-icons/hi2";
import { HiMiniSpeakerXMark } from "react-icons/hi2";
import brandlogo from "./../../assests/brand logo.jpg"
import efxpfp from "./../../assests/efx pfp.png"
import channelArt from "./../../assests/channel art.jpg"
import banner from "./../../assests/LinkedIn banner.jpg"

// import video1 from '../../assests/video1.mp4'
// import video2 from '../../assests/video2.mp4'

interface workProps {
}

const Work: FC<workProps> = ({}) => {
    const videoRef = useRef<HTMLVideoElement[]>([])
    const [isMuted, setIsMuted] = useState(true)
    const reels = ["reel1.mp4", "reel2.mp4"]
    const videos = ['video1.mp4']
    const n = reels.length
    const [isHovering, setIsHovering] = useState<boolean[]>(new Array(videos.length+reels.length).fill(false))
    

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
    <div id='work' className='max-w-screen flex flex-col justify-evenly items-center h-auto bg-[#607274] text-[#FAEED1]  overflow-x-hidden poppins'>
        <div className='flex'>
            <p className='font-bold inline text-4xl border-b-4 border-pink-400'>My Work</p>
        </div>
        <div className='max-w-[1000px] w-full flex items-center justify-start p-4'>
            <p className='font-bold inline text-3xl border-b-4 border-pink-400'>Reels</p>
        </div>
        <div className='max-w-[1000px] h-auto flex flex-col sm:grid grid-cols-2 gap-16 p-4 justify-around items-center'>
            {
                reels.map((video, id) => (
                    <div key={id} className='relative flex w-full h-[100%] rounded-3xl hover:opacity-[90%]  duration-400 overflow-hidden' 
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

        <div className='max-w-[1000px] w-full flex items-center justify-start p-4'>
            <p className='font-bold inline text-3xl border-b-4 border-pink-400'>Editing</p>
        </div>
        <div className='max-w-[1000px] h-auto flex flex-col sm:grid grid-cols-2 gap-16 p-4 justify-around items-center'>
            
            {
                videos.map((video, id) => (
                    <div key={id} className='relative flex flex-col w-full h-[100%]'
                        >  
                        
                        <div className='relative flex rounded-3xl hover:opacity-[90%]  duration-400 overflow-hidden'>
                        {isHovering[n+id]? 
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
                                onClick={()=>handleMute(n+id)}
                                onMouseEnter={() =>onMouseEnter(n+id)}
                                onMouseLeave={() =>onMouseLeave(n+id)}
                                muted/>
                            </div>
                        </div>
                ))
            }
        </div>

        <div className='max-w-[1000px] w-full flex items-center justify-start p-4'>
            <p className='font-bold inline text-3xl border-b-4 border-pink-400'>Banners</p>
        </div>
        <div className='max-w-[1000px] h-auto flex flex-col sm:grid grid-cols-2 gap-16 p-4 justify-between items-center'>
            <div className='relative flex max-w-full max-h-1/2 p-4 items-center justify-center'>
                <Image 
                src={brandlogo}
                className=' object-contain w-1/2 h-1/2'
                alt=''
                />
            </div>
            <div className='relative flex max-w-full max-h-1/2 p-4 items-center justify-center'>
                <Image 
                src={efxpfp}
                className=' object-contain w-1/2 h-1/2'
                alt=''
                />
            </div>
            <div className='relative flex max-w-full max-h-1/2 p-4 items-center justify-center'>
                <Image 
                src={channelArt}
                className=' object-contain w-1/2 h-1/2'
                alt=''
                />
            </div>
            <div className='relative flex max-w-full max-h-1/2 p-4 items-center justify-center'>
                <Image 
                src={banner}
                className=' object-contain w-1/2 h-1/2'
                alt=''
                />
            </div>
        </div>
    </div>
    )
}

export default Work