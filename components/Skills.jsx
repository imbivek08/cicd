import React from "react";
import { RiNodejsLine } from "react-icons/ri";
import { SiExpress } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { DiMongodb } from "react-icons/di";
import { FaGitAlt } from "react-icons/fa";

const Skills = () => {
  return (
    <div className="text-white mx-auto w-[81%] mt-20 h-[50vh]">
      <h1 className="text-3xl">Skills</h1>
      <div className="mt-10 relative">
        <div className="flex gap-2 items-center ">
          <h1 className="text-2xl font-semibold text-[#008000]">Node</h1>
          <RiNodejsLine color="green" size={50} />
        </div>
        <div className="flex gap-2 items-center">
          <h1 className="text-2xl font-semibold text-white">Express</h1>
          <SiExpress color="white" size={50} />
        </div>
        <div className="flex gap-2 items-center">
          <h1 className="text-2xl font-semibold text-white">React</h1>
          <FaReact color="#00FFFF" size={40} />
        </div>
        <div className="flex gap-2 items-center">
          <h1 className="text-2xl font-semibold text-white">MongoDB</h1>
          <DiMongodb color="green" size={50} />
        </div>
        <div className="flex gap-2 items-center">
          <h1 className="text-2xl font-semibold text-white">Git CLI</h1>
          <FaGitAlt color="#F64D27" size={50} />
        </div>
      </div>
    </div>
  );
};

export default Skills;
