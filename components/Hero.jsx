import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <div className=" flex justify-between  bg-[#0E1630] h-[75vh] text-white w-[81%] mx-auto">
      <div className="mt-[100px] flex flex-col gap-6 w-1/2 ">
        <h1 className="text-2xl"> Hello</h1>
        <h2 className="text-3xl">I&apos;m Bivek Yadav</h2>
        <div className="text-[#6A8BAD] text-lg">
          <p>Fullstack Developer</p>
          <p>
            Hi there! My name is Bivek Yadav and I’m a software engineer
            specializing in the MERN stack. With extensive experience in
            fullstack development, I am passionate about all things tech and
            coding.
          </p>
        </div>
        <div className="mt-8 w-[300px] h-[85px] bg-[#111827] shadow-colorful flex items-center justify-center rounded-lg">
          <p>Connect with me</p>
        </div>
      </div>
      <div className="w-[500px] mt-[80px] mr-[100px]">
        <Image
          className="rounded-[50%]"
          src={"/profile.jpg"}
          width={500}
          height={500}
          alt=""
        />
      </div>
    </div>
  );
};

export default Hero;
