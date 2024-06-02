'use client'
import Image from 'next/image';
import { FC, useRef, useState } from 'react'
import { HiMiniSpeakerWave } from "react-icons/hi2";
import { HiMiniSpeakerXMark } from "react-icons/hi2";
import brandlogo from "./../../assests/brand logo.jpg"
import efxpfp from "./../../assests/efx pfp.png"
import channelArt from "./../../assests/channel art.jpg"
import banner from "./../../assests/LinkedIn banner.jpg"
import post from "./../../assests/post1.png"
import carousel1 from "./../../assests/Carouselslide01.png"
import carousel2 from "./../../assests/Carouselslide02.png"
import carousel3 from "./../../assests/Carouselslide03.png"
import carousel4 from "./../../assests/Carouselslide04.png"
import useSmoothHorizontalScroll from 'use-smooth-horizontal-scroll';
import { MdChevronLeft, MdChevronRight } from "react-icons/md";


interface workProps {
}

const Work: FC<workProps> = ({}) => {
    const videoRef = useRef<HTMLVideoElement[]>([])
    const [isMuted, setIsMuted] = useState(true)
    const reels = ["reel1.mp4", "reel2.mp4"]
    const videos = ['video1.mp4']
    const n = videos.length
    const [isHovering, setIsHovering] = useState<boolean[]>(new Array(videos.length+reels.length).fill(false))
    
  const {scrollContainerRef, scrollTo, handleScroll, isAtStart, isAtEnd} = useSmoothHorizontalScroll();


    

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
    <div id='work' className='max-w-[100%] flex flex-col justify-evenly items-center h-auto overflow-x-hidden'>
        <div className='flex'>
            <p className='font-bold inline text-4xl border-b-4 border-pink-400'>My Work</p>
        </div>

        {/*Podcast*/}
        <div className='max-w-[1000px] w-full flex flex-col items-center justify-start p-4'>
        <div className='w-full flex items-center justify-start p-4'>
            <p className='font-bold inline text-3xl border-b-4 border-pink-400'>Shorts</p>
        </div>
        <div className='max-w-[1000px] h-auto flex p-4 justify-center items-center'>
            {
                videos.map((video, id) => (
                    <div key={id} className='relative flex flex-col w-full h-full md:w-1/2 md:h-1/2'
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
                                onClick={()=>handleMute(id)}
                                onMouseEnter={() =>onMouseEnter(id)}
                                onMouseLeave={() =>onMouseLeave(id)}
                                muted/>
                            </div>
                        </div>
                ))
            }
        </div>
        </div>
        
        
        {/*Carousel*/}
        <div className='max-w-[1000px] w-full h-screen flex flex-col items-center justify-start p-4'>
            <div className='w-full flex items-center justify-start p-4'>
                <p className='font-bold inline text-3xl border-b-4 border-pink-400'>Post / Carousel</p>
            </div>
            <div className='max-w-[1000px] h-2/3 flex flex-col p-4 justify-around items-center'>
                <div className='flex w-full h-2/3 justify-center items-center'>
                    <Image 
                    src={post}
                    className='object-contain w-auto h-full rounded-3xl'
                    alt=''
                    />
                </div>


            <div className='flex w-full h-auto justify-center items-center p-4 lg:my-4 -translate-x-1'>    
            <div className="flex flex-nowrap items-center h-full w-full text-center m-4 py-4">

            
            <div
              id={"slider"}  
              className="flex flex-nowrap items-center w-full h-full text-center  overflow-x-scroll scroll-smooth no-scrollbar"
            >
              <div className="flex justify-center items-center  min-w-[300px] lg:min-w-[300px] shadow-md shadow-[0_3px_10px_rgb(0,0,0,0.2)] hover:scale-110 duration-500 mx-8 p-2">
               <Image 
                    src={carousel1}
                    className='object-contain w-3/4 h-2/3 rounded-3xl'
                    alt=''
                    />
              </div>
              <div className="flex justify-center items-center min-w-[300px] lg:min-w-[300px] shadow-md shadow-[0_3px_10px_rgb(0,0,0,0.2)] hover:scale-110 duration-500 mx-8 p-2"><Image 
                    src={carousel2}
                    className='object-contain w-3/4 h-2/3 rounded-3xl'
                    alt=''
                    />
              </div>
              <div className="flex justify-center items-center min-w-[300px] lg:min-w-[300px] shadow-md shadow-[0_3px_10px_rgb(0,0,0,0.2)] hover:scale-110 duration-500 mx-8 p-2">
                <Image 
                    src={carousel3}
                    className='object-contain w-3/4 h-2/3 rounded-3xl'
                    alt=''
                    />
              </div>
              <div className="flex justify-center items-center min-w-[300px] lg:min-w-[300px] shadow-md shadow-[0_3px_10px_rgb(0,0,0,0.2)] hover:scale-110 duration-500 mx-8 p-2">
                <Image 
                    src={carousel4}
                    className='object-contain w-3/4 h-2/3 rounded-3xl'
                    alt=''
                    />
              </div>
            </div>

          </div>
                </div>
            </div>
        </div>


        {/*Banners*/}
        <div className='max-w-[1000px] w-full flex flex-col items-center justify-start p-4'>
        <div className='w-full flex items-center justify-start p-4'>
            <p className='font-bold inline text-3xl border-b-4 border-pink-400'>Banners</p>
        </div>
        <div className='max-w-[1000px] h-auto flex flex-col sm:grid grid-cols-2 gap-16 p-4 justify-between items-center'>
            <div className='relative flex max-w-full max-h-full  items-center justify-center'>
                <Image 
                src={channelArt}
                className='object-contain w-full h-2/3 rounded-3xl'
                alt=''
                />
            </div>
            <div className='relative flex max-w-full max-h-1/2 p-4 items-center justify-center'>
                <Image 
                src={banner}
                className='object-contain w-full h-2/3 rounded-3xl'
                alt=''
                />
            </div>
        </div>
        </div>

        
        {/*Logo*/}
        <div className='max-w-[1000px] w-full flex flex-col items-center justify-start p-4'>
        <div className='w-full flex items-center justify-start p-4'>
            <p className='font-bold inline text-3xl border-b-4 border-pink-400'>Logos</p>
        </div>
        <div className='h-auto flex flex-col sm:grid grid-cols-2 gap-16 p-4 justify-between items-center'>
            <div className='relative flex max-w-full max-h-1/2 p-4 items-center justify-center'>
                <Image 
                src={brandlogo}
                className='object-contain w-2/3 h-2/3 rounded-3xl'
                alt=''
                />
            </div>
            <div className='relative flex max-w-full max-h-1/2 p-4 items-center justify-center'>
                <Image 
                src={efxpfp}
                className='object-contain w-2/3 h-2/3 rounded-3xl'
                alt=''
                />
            </div>
        </div>
        </div>

        {/*Editing*/}
        <div className='max-w-[1000px] w-full flex flex-col items-center justify-start p-4'>

        <div className='w-full flex items-center justify-start p-4'>
            <p className='font-bold inline text-3xl border-b-4 border-pink-400'>Editing</p>
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
                            onClick={()=>handleMute(n+id)}
                            onMouseEnter={() =>onMouseEnter(n+id)}
                            onMouseLeave={() =>onMouseLeave(n+id)}
                            muted/>
                            </div>
                ))
            }
            </div>
        </div>
    </div>
    )
}

export default Work