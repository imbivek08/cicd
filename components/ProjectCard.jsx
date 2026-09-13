"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const ProjectCard = ({ props }) => {
  return (
    <div className="group h-full">
      <div className="relative h-full flex flex-col terminal-window transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl hover:shadow-green-500/10">
        {/* Gradient overlay on hover */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/0 via-purple-600/0 to-pink-600/0 group-hover:from-blue-600/10 group-hover:via-purple-600/10 group-hover:to-pink-600/10 transition-all duration-500 z-10 pointer-events-none"></div>
        
        {/* Image section */}
        <div className="relative w-full h-48 sm:h-56 overflow-hidden bg-[#161b22]">
          <Image 
            src={props.photo} 
            fill
            className="object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
            alt={props.name} 
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0d1117] via-transparent to-transparent opacity-70"></div>
        </div>
        
        {/* Content section */}
        <div className="relative flex flex-col gap-3 flex-grow px-4 sm:px-6 py-4 z-20">
          <p className="text-xs text-[#7ee787]">$ cat ./{props.name.toLowerCase().replaceAll(" ", "-")}/README.md</p>
          <h1 className="text-lg sm:text-xl font-bold text-white group-hover:text-[#7ee787] transition-colors duration-300">{props.name}</h1>
          <p className="text-xs sm:text-sm text-[#8b949e] leading-relaxed flex-grow">Full-stack application showcasing modern web development with clean architecture and best practices</p>
          
          {/* Tech stack badges */}
          <div className="flex gap-2 pt-2 flex-wrap">
            <span className="px-3 py-1 border border-[#30363d] text-[#79c0ff] text-xs rounded font-semibold">React</span>
            <span className="px-3 py-1 border border-[#30363d] text-[#7ee787] text-xs rounded font-semibold">Node.js</span>
            <span className="px-3 py-1 border border-[#30363d] text-[#d2a8ff] text-xs rounded font-semibold">MongoDB</span>
          </div>
        </div>
        
        {/* Action buttons */}
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
            href={props.liveUrl} 
            target="_blank"
            className="flex-1 flex items-center justify-center gap-2 bg-[#238636] hover:bg-[#2ea043] text-white px-3 py-2.5 rounded-md text-sm font-semibold transition-all duration-300"
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
