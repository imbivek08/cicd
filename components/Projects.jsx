import Image from "next/image";
import React from "react";

const Projects = () => {
  return (
    <div className="text-white mx-auto w-[81%]">
      <h1 className="text-3xl">Projects</h1>
      <div className="flex gap-5 mt-10">
        <div className="w-[500px] h-[550px] flex flex-col gap-5 bg-[#111827] rounded-lg shadow-colorful">
          <h1 className="text-lg pl-10 mt-5">Weather App</h1>
          <div className="flex justify-center ">
            <Image src={"/weather1.png"} width={400} height={500} alt="" />
          </div>
          <div className="flex gap-5 pl-10">
            <p>Basic</p>
            <p>GitHub</p>
            <p>Live</p>
          </div>
        </div>
        <div className="w-[500px]">Project 2</div>
        <div className="w-[500px]">Project 3</div>
      </div>
    </div>
  );
};

export default Projects;
