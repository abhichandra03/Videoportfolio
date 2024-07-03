"use client";
import { FC, useRef } from "react";
import Image from "next/image";

interface AboutProps {}

const About: FC<AboutProps> = ({}) => {
  return (
    <div id="about" className="flex w-full h-full  poppins">
      {/* Container div */}
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8 ">
          <div className="sm:text-right pb-8 pl-4">
            <p className="text-4xl font-bold inline border-b-4 border-pink-400 bebas">
              {`About Me`}
            </p>
          </div>
        </div>
        <div className="max-w-[1000px] w-full h-auto flex flex-col">
          <div className="w-full h-auto py-6  px-4">
            <p className="text-xl">
              {`Hey there! 👋 I’m Gayatri, a computer science grad who’s all about that Digital Marketing, Social Media Management, and Video Editing life. 
              I love using AI to boost brand engagement and create visuals that pop. Want your social media to be as cool as the other side of the pillow? 
              Let's team up and make some magic! 🚀`}
            </p>
          </div>

          <div className="w-full h-auto grid sm:grid-cols-2 gap-8 sm:gap-y-16 py-6  px-4">
            <div className="relative  flex justify-center items-center w-full h-[200px]">
              <Image
                src={"/ig.jpeg"}
                className="object-contain h-full"
                alt=""
                fill
              />
            </div>
            <div className="flex justify-center items-center w-full h-full">
              <p>{`As a passionate creator and editor, I've established an engaging presence on Instagram through my editing page.`}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
