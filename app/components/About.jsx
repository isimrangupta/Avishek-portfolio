import { assets, infoList } from "@/assets/assets";
import Image from "next/image";
import React from "react";

const About = () => {
  return (
    <div id="about" className="w-full px-[12%] py-10 scroll-mt-20">
      <h2 className="text-center text-5xl font-Ovo text-[purple]">About me</h2>
      <div className="flex w-full flex-col lg:flex-row items-center gap-20 my-20">
        <div className="w-64 sm:w-80 rounded-3xl max-w-none">
          <Image
            src={assets.user_image}
            alt="user"
            className="w-full rounded-3xl"
          />
        </div>
        <div className="flex-1">
          <p
          className="mb-10 max-w-2xl font-Ovo"
          >Hi, I'm Aviahek Gupta, a passionate videographer and video editor based in Siliguri. I love creating visually appealing content with smooth transitions, perfect color grading, and rhythmic edits that bring stories to life. Over time, I have worked on personal projects and collaborations that focus on capturing real moments and turning them into engaging videos. I enjoy experimenting with new techniques and always strive to make every video unique and impactful.</p>

          <ul className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl">
            {infoList.map(({icon, iconDark, title, description, index}) => (
                <li
                className="border-[0.5px] border-gray-400 rounded-xl p-6 cursor-pointer hover:bg-[#b152a0] hover:-translate-y-1 duration-500 hover:shadow-[3px_3px_0_#b46da8] hover:text-white"
                 key={index}>
                    <h3 className="my-4 font-semibold">{title}</h3>
                    <p className="text-sm">{description}</p>
                </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;
