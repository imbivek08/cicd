"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const ProjectCard = ({ props }) => {
  const techColors = [
    "border-[#79c0ff]/50 bg-[#79c0ff]/10 text-[#79c0ff]",
    "border-[#7ee787]/50 bg-[#7ee787]/10 text-[#7ee787]",
    "border-[#d2a8ff]/50 bg-[#d2a8ff]/10 text-[#d2a8ff]",
    "border-[#f9d876]/50 bg-[#f9d876]/10 text-[#f9d876]",
    "border-[#ff9c9c]/50 bg-[#ff9c9c]/10 text-[#ff9c9c]",
  ];

  return (
    <div className="group h-full">
      <div className="relative h-full flex flex-col terminal-window transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl hover:shadow-green-500/10">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/0 via-purple-600/0 to-pink-600/0 group-hover:from-blue-600/10 group-hover:via-purple-600/10 group-hover:to-pink-600/10 transition-all duration-500 z-10 pointer-events-none"></div>

        <div className="relative w-full h-48 sm:h-56 overflow-hidden bg-[#161b22]">
          <Image
            src={props.photo}
            fill
            className="object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
            alt={props.name}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0d1117] via-transparent to-transparent opacity-70"></div>
        </div>

        <div className="relative flex flex-col gap-3 flex-grow px-4 sm:px-6 py-4 z-20">
          <p className="text-xs text-[#7ee787]">$ cat ./{props.name.toLowerCase().replaceAll(" ", "-")}/README.md</p>
          <h1 className="text-lg sm:text-xl font-bold text-white group-hover:text-[#7ee787] transition-colors duration-300">{props.name}</h1>
          <p className="text-xs sm:text-sm text-[#8b949e] leading-relaxed flex-grow">{props.description}</p>

          <div className="pt-2">
            <p className="mb-2 text-[10px] font-semibold uppercase tracking-[0.18em] text-[#8b949e]">
              Tools & Stack
            </p>
            <div className="flex gap-2 flex-wrap">
              {(props.tech || ["React", "Node.js", "MongoDB"]).map((item, index) => (
                <span
                  key={`${props.id}-${item}`}
                  className={`inline-flex items-center rounded-full border px-2.5 py-1 text-[10px] font-medium tracking-wide ${techColors[index % techColors.length]}`}
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="relative flex gap-3 px-4 sm:px-6 pb-4 pt-2 z-20">
          <Link
            href={props.codeUrl}
            target="_blank"
            className="flex-1 flex items-center justify-center gap-2 glass-effect hover:bg-[#21262d] text-white px-3 py-2.5 rounded-md text-sm font-semibold transition-all duration-300"
          >
            <FaGithub size={18} />
            <span className="hidden sm:inline">Code</span>
          </Link>
          <Link
            href={props.liveUrl || "#"}
            target={props.liveUrl ? "_blank" : undefined}
            rel={props.liveUrl ? "noreferrer" : undefined}
            className={`flex-1 flex items-center justify-center gap-2 rounded-md text-sm font-semibold transition-all duration-300 ${
              props.liveUrl && props.liveUrl !== "#"
                ? "bg-[#238636] hover:bg-[#2ea043] text-white"
                : "bg-[#21262d] text-[#8b949e] cursor-not-allowed opacity-70"
            } px-3 py-2.5`}
            aria-disabled={!(props.liveUrl && props.liveUrl !== "#")}
            onClick={(e) => {
              if (!(props.liveUrl && props.liveUrl !== "#")) e.preventDefault();
            }}
          >
            <FaExternalLinkAlt size={16} />
            <span className="hidden sm:inline">Live Demo</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
