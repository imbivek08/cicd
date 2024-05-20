import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <div className="bg-[#0E1630] h-[95vh] text-white w-[81%] mx-auto">
      <div className="">
        <h1>Hello</h1>
        <h2>I&apos;m Bivek Yadav</h2>
      </div>
      <div>
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
