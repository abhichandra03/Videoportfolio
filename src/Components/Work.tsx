"use client";
import Image from "next/image";
import { FC, useEffect, useRef, useState } from "react";
import { HiMiniSpeakerWave } from "react-icons/hi2";
import { HiMiniSpeakerXMark } from "react-icons/hi2";
// import brandlogo from "../../brandLogo.jpg";
// import efx
// import channelArt from "../..public/channelArt.jpg";
// import banner from "../..public/LinkedInBanner.jpg";
// import post from "../..public/post1.png";
// import carousel2 from "../..public/Carouselslide02.png";
// import carousel3 from "../..public/Carouselslide03.png";
// import carousel4 from "../..public/Carouselslide04.png";
// import carousel1 from "../..public/Carouselslide01.png";
// import reel1 from "../../assests/reel1.mp4"
// import reel2 from "/assests/reel2.mp4"
// import video1 from "/assests/video1.mp4"



import { MdChevronLeft, MdChevronRight } from "react-icons/md";

interface workProps {}

const Work: FC<workProps> = ({}) => {
  const videoRef = useRef<HTMLVideoElement[]>([]);
  const [isMuted, setIsMuted] = useState(true);
  const reels = ["/editingSample1.mp4", "/editingSample2.mp4"];
  const videos = ["/ytEditing.mp4"];
  const n = videos.length;
  const [isHovering, setIsHovering] = useState<boolean[]>(
    new Array(videos.length + reels.length).fill(false)
  );
  const ref = useRef<HTMLDivElement>(null);

  const onMouseEnter = (id: number) => {
    const newArray = [...isHovering];
    newArray[id] = true;
    setIsHovering(newArray);
  };
  const onMouseLeave = (id: number) => {
    const newArray = [...isHovering];
    newArray[id] = false;
    setIsHovering(newArray);
  };

  const handleMute = (id: number) => {
    const videoEle = videoRef.current[id];
    setIsMuted((prev) => {
      if (videoRef) {
        videoEle!.muted = !prev;
      }

      return !prev;
    });
  };
  const scroll = (scrollOffset: number) => {
    if (ref.current != null) {
      ref.current.scrollLeft += scrollOffset;
    }
  };

  return (
    <div
      id="work"
      className="max-w-[100%] flex flex-col justify-evenly items-center h-auto overflow-x-hidden"
    >
      <div className="flex">
        <p className="font-bold inline text-4xl border-b-4 border-pink-400 bebas">
          My Work
        </p>
      </div>

      {/*Podcast*/}
      <div className="max-w-[1000px] w-full flex flex-col items-center justify-start p-4">
        <div className="w-full flex items-center justify-start p-4">
          <p className="font-bold inline text-3xl border-b-4 border-pink-400 bebas">
            Shorts
          </p>
        </div>
        <div className="max-w-[1000px] h-auto flex p-4 justify-center items-center">
          {videos.map((video, id) => (
            <div
              key={id}
              className="relative flex flex-col w-full h-full md:w-1/2 md:h-1/2"
            >
              <div className="relative bg-red-100 flex rounded-3xl hover:opacity-[90%]  duration-400 overflow-hidden">
                {isHovering[id] ? (
                  isMuted ? (
                    <HiMiniSpeakerWave
                      size={40}
                      className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                    />
                  ) : (
                    <HiMiniSpeakerXMark
                      size={40}
                      className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                    />
                  )
                ) : (
                  ""
                )}
                <video
                  ref={(el) => {
                    if (el && !videoRef.current.includes(el)) {
                      videoRef.current.push(el);
                    }
                  }}
                  key={id}
                  src={video}
                  controls={false}
                  autoPlay
                  loop
                  onClick={() => handleMute(id)}
                  onMouseEnter={() => onMouseEnter(id)}
                  onMouseLeave={() => onMouseLeave(id)}
                  muted
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/*Carousel*/}
      <div className="max-w-[1000px] w-full h-screen flex flex-col items-center justify-start p-4">
        <div className="w-full flex items-center justify-start p-4">
          <p className="font-bold inline text-3xl border-b-4 border-pink-400 bebas">
            Post / Carousel
          </p>
        </div>
        <div className="w-full h-full flex flex-col p-4 justify-around items-center">
          <div className=" relative flex w-full md:w-1/2 min-w-[250px] h-2/3 justify-center items-center min-h-[120px]  lg:min-w-[300px] shadow-md shadow-[0_3px_10px_rgb(0,0,0,0.2)] ">
            <Image
              src={"/post1.png"}
              className="object-cover w-auto h-full rounded-3xl p-2"
              alt=""
              fill
            />
          </div>

          <div className="flex w-full h-2/3  justify-center items-center p-4 lg:my-4 -translate-x-1">
            <div className="flex flex-nowrap items-center h-full w-full text-center m-4 py-4">
              <div
                ref={ref}
                id="container"
                className=" flex flex-nowrap items-center w-full h-full text-center p-0  overflow-x-scroll scroll-smooth no-scrollbar"
              >
                <div className="rounded-full bg-[#948979] text-black flex absolute left-0 top-50 z-10">
                  <button onClick={() => scroll(-250)}>
                    <MdChevronLeft size={30} />
                  </button>
                </div>

                <div className=" relative flex w-full h-full justify-center items-center min-h-[120px] min-w-[300px] lg:min-w-[300px] shadow-md shadow-[0_3px_10px_rgb(0,0,0,0.2)] mx-4">
                  <Image
                    src={"/Carouselslide01.png"}
                    className="object-cover w-auto h-full rounded-3xl p-4"
                    alt=""
                    fill
                  />
                </div>
                <div className="relative flex justify-center items-center w-full h-full min-h-[120px] min-w-[300px] lg:min-w-[300px] shadow-md shadow-[0_3px_10px_rgb(0,0,0,0.2)] mx-4">
                  <Image
                    src={"/Carouselslide02.png"}
                    className="object-cover  rounded-3xl p-2"
                    alt=""
                    fill
                  />
                </div>
                <div className="relative flex justify-center items-center w-full h-full min-h-[120px] min-w-[300px] lg:min-w-[300px] shadow-md shadow-[0_3px_10px_rgb(0,0,0,0.2)] mx-4">
                  <Image
                    src={"/Carouselslide03.png"}
                    className="object-cover  rounded-3xl p-2"
                    alt=""
                    fill
                  />
                </div>
                <div className="relative flex justify-center items-center w-full h-full min-h-[120px] min-w-[300px] lg:min-w-[300px] shadow-md shadow-[0_3px_10px_rgb(0,0,0,0.2)] mx-4">
                  <Image
                    src={"/Carouselslide04.png"}
                    className="object-cover  rounded-3xl p-2"
                    alt=""
                    fill
                  />
                </div>
                <div className="rounded-full bg-[#948979] text-black flex absolute right-0 top-50 z-10">
                  <button onClick={() => scroll(250)}>
                    <MdChevronRight size={30} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/*Banners*/}
      <div className="max-w-[1000px] w-full flex flex-col items-center justify-start p-4">
        <div className="w-full flex items-center justify-start p-4">
          <p className="font-bold inline text-3xl border-b-4 border-pink-400 bebas">
            Banners
          </p>
        </div>
        <div className="flex max-w-[1000px] w-full h-full flex flex-col sm:flex-row p-4 justify-between items-center">
          <div className="relative flex w-full sm:w-1/2 min-w-[250px] h-full min-h-[250px] items-center justify-center m-4">
            <Image
              src={"/channelArt.jpg"}
              className="object-cover rounded-xl"
              alt=""
              fill
            />
          </div>
          <div className="relative flex w-full sm:w-1/2 min-w-[250px] h-full min-h-[250px] p-4 items-center justify-center m-4">
            <Image
              src={"/LinkedInBanner.jpg"}
              className="object-cover rounded-xl"
              alt=""
              fill
            />
          </div>
        </div>
      </div>

      {/*Logo*/}
      <div className="max-w-[1000px] w-full flex flex-col items-center justify-start p-4">
        <div className="w-full flex items-center justify-start p-4">
          <p className="font-bold inline text-3xl border-b-4 border-pink-400 bebas">
            Logos
          </p>
        </div>
        <div className="w-full h-full flex flex-col md:flex-row justify-around items-center">
          <div className="relative flex  w-1/2 md:w-1/4 min-w-[250px] h-full min-h-[250px] p-4 items-center justify-center my-4">
            <Image
              src={"/brandLogo.jpg"}
              className="object-cover rounded-3xl"
              alt=""
              fill
            />
          </div>
          <div className="relative flex w-1/2 md:w-1/4 min-w-[250px] h-full min-h-[250px] p-4 items-center justify-center my-4">
            <Image
              src={"/efxPfp.png"}
              className="object-cover rounded-3xl"
              alt=""
              fill
            />
          </div>
        </div>
      </div>

      {/*Editing*/}
      <div className="max-w-[1000px] w-full flex flex-col items-center justify-start p-4">
        <div className="w-full flex items-center justify-start p-4">
          <p className="font-bold inline text-3xl border-b-4 border-pink-400 bebas">
            Editing
          </p>
        </div>
        <div className="max-w-[1000px] h-auto flex flex-col sm:grid grid-cols-2 gap-16 p-4 justify-around items-center">
          {reels.map((video:string, id) => (
            <div
              key={id}
              className="relative flex w-full h-[100%] rounded-3xl hover:opacity-[90%]  duration-400 overflow-hidden"
            >
              {isHovering[n+id] ? (
                isMuted ? (
                  <HiMiniSpeakerWave
                    size={40}
                    className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10"
                  />
                ) : (
                  <HiMiniSpeakerXMark
                    size={40}
                    className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10"
                  />
                )
              ) : (
                ""
              )}
              <video
                ref={(el) => {
                  if (el && !videoRef.current.includes(el)) {
                    videoRef.current.push(el);
                  }
                }}
                key={id}
                src ={video}
                // src ={require(`/${video}`)}
                // src={require('../../public/ig.jpeg')}
                controls={false}
                autoPlay
                loop
                onClick={() => handleMute(n + id)}
                onMouseEnter={() => onMouseEnter(n + id)}
                onMouseLeave={() => onMouseLeave(n + id)}
                muted
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;
