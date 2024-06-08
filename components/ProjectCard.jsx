"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const ProjectCard = ({ props }) => {
  return (
    <div className="flex gap-5 mt-10">
      <div className="w-[500px] h-[550px] flex flex-col gap-5 bg-[#111827] rounded-lg shadow-colorful">
        <h1 className="text-lg pl-10 mt-5">{props.name}</h1>
        <div className="flex justify-center ">
          <Image src={props.photo} width={400} height={500} alt="" />
        </div>
        <div className="flex gap-5 pl-10">
          <p>Basic</p>
          <Link href={props.codeUrl} target="_blank">
            GitHub
          </Link>
          <Link href={props.liveUrl} target="_blank">
            Live
          </Link>
        </div>
      </div>

    </div>
  );
};

export default ProjectCard;
