"use client";
import { FC, useRef } from "react";
import { BiLogoGmail } from "react-icons/bi";
import { FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
// import googleWork from "../../public/assests/google.png";
// import googleAnalytics from "../../public/assests/googleAnalytics.png";
// import cms from "../../public/assests/cms.png";
// import canva from '../../public/assests/canva.png';
// import meta from "../../public/pfp.jpeg";
// import afterEffects from '../../public/assests/adobeAfter.png';
// import adobrCretive from '../.. /assests/adobeCreative.png';
import Image from "next/image";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";

interface SkillsProps {}

const Skills: FC<SkillsProps> = ({}) => {
  const ref = useRef<HTMLDivElement>(null);

  const scroll = (scrollOffset: number) => {
    if (ref.current != null) {
      ref.current.scrollLeft += scrollOffset;
    }
  };

  return (
    <div
      id="skills"
      className="max-w-[1200px] flex flex-col w-full h-screen justify-center items-center"
    >
      <div className="max-w-[1200px] w-full flex justify-center items-center">
        <p className="text-4xl font-bold inline border-b-4 border-pink-400 bebas">
          Skills
        </p>
      </div>

      <div className="w-full h-auto flex flex-col p-4 justify-around items-center">
        <div className="flex w-full h-auto justify-center items-center p-4 -translate-x-1">
          <div
            ref={ref}
            className="flex flex-nowrap items-center max-w-[1000px] w-full h-full text-center  overflow-x-scroll scroll-smooth no-scrollbar"
          >
            <div className="rounded-full bg-[#948979] text-black flex absolute left-0 top-50 z-10">
              <button onClick={() => scroll(-500)}>
                <MdChevronLeft size={30} />
              </button>
            </div>
            <div className=" w-full h-full flex flex-col justify-center items-center min-h-[150px] min-w-[300px] lg:min-w-[300px] shadow-md shadow-[0_3px_10px_rgb(0,0,0,0.2)] hover:scale-110 duration-500 mx-8 p-2">
              <div className="relative w-full h-full">
                <Image
                  src={"/canva.png"}
                  className="object-contain p-2"
                  alt=""
                  fill
                />
              </div>
              <p>Canva</p>
            </div>
            <div className="w-full h-full flex flex-col justify-center items-center min-h-[150px] min-w-[300px] lg:min-w-[300px] shadow-md shadow-[0_3px_10px_rgb(0,0,0,0.2)] hover:scale-110 duration-500 mx-8 p-2">
              <div className="relative w-full h-full">
                <Image
                  src={"/google.png"}
                  className="object-contain w-1/2 h-1/2 p-2"
                  alt=""
                  fill
                />
              </div>
              <p>Google Workspace</p>
            </div>
            <div className="w-full h-full flex flex-col justify-center items-center min-h-[150px] min-w-[300px] lg:min-w-[300px] shadow-md shadow-[0_3px_10px_rgb(0,0,0,0.2)] hover:scale-110 duration-500 mx-8 p-2">
              <div className="relative w-full h-full">
                <Image
                  src={"/cms.png"}
                  className="object-contain w-1/2 h-1/2 p-2"
                  alt=""
                  fill
                />
              </div>
              <p>Content ManagementSystem</p>
            </div>
            <div className="w-full h-full flex flex-col justify-center items-center min-h-[150px] min-w-[300px] lg:min-w-[300px] shadow-md shadow-[0_3px_10px_rgb(0,0,0,0.2)] hover:scale-110 duration-500 mx-8 p-2">
              <div className="relative w-full h-full">
                <Image
                  src={"/adobeAfter.png"}
                  className="object-contain w-1/2 h-1/2 p-2"
                  alt=""
                  fill
                />
              </div>
              <p>Adobe After Effects</p>
            </div>
            <div className="w-full h-full flex flex-col justify-center items-center min-h-[150px] min-w-[300px] lg:min-w-[300px] shadow-md shadow-[0_3px_10px_rgb(0,0,0,0.2)] hover:scale-110 duration-500 mx-8 p-2">
              <div className="relative w-full h-full">
                <Image
                  src={"/adobeCreative.png"}
                  className="object-contain w-1/2 h-1/2 p-2"
                  alt=""
                  fill
                />
              </div>
              <p>Adobe Creative Suite</p>
            </div>
            <div className="w-full h-full flex flex-col justify-center items-center min-h-[150px] min-w-[300px] lg:min-w-[300px] shadow-md shadow-[0_3px_10px_rgb(0,0,0,0.2)] hover:scale-110 duration-500 mx-8 p-2">
              <div className="relative w-full h-full">
                <Image
                  src={"/googleAnalytics.png"}
                  className="object-contain w-1/2 h-1/2 p-2"
                  alt=""
                  fill
                />
              </div>
              <p>Google Analytics</p>
            </div>
            <div className="w-full h-full flex flex-col justify-center items-center min-h-[150px] min-w-[300px] lg:min-w-[300px] shadow-md shadow-[0_3px_10px_rgb(0,0,0,0.2)] hover:scale-110 duration-500 mx-8 p-2">
              <div className="relative w-full h-full">
                <Image
                  src={"/Meta.png"}
                  className="object-contain w-1/2 h-1/2 p-2"
                  alt=""
                  fill
                />
              </div>
              <p>Meta Business Suite</p>
            </div>
            <div className="rounded-full bg-[#948979] text-black flex absolute right-0 top-50 z-10">
              <button onClick={() => scroll(500)}>
                <MdChevronRight size={30} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
