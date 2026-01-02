"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const ProjectCard = ({ props }) => {
  return (
    <div className="group h-full">
      <div className="relative h-full flex flex-col glass-effect rounded-2xl overflow-hidden transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl hover:shadow-blue-500/20">
        {/* Gradient overlay on hover */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/0 via-purple-600/0 to-pink-600/0 group-hover:from-blue-600/10 group-hover:via-purple-600/10 group-hover:to-pink-600/10 transition-all duration-500 z-10 pointer-events-none"></div>
        
        {/* Image section */}
        <div className="relative w-full h-48 sm:h-56 overflow-hidden bg-gradient-to-br from-blue-900/20 to-purple-900/20">
          <Image 
            src={props.photo} 
            fill
            className="object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
            alt={props.name} 
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0A0E27] via-transparent to-transparent opacity-60"></div>
        </div>
        
        {/* Content section */}
        <div className="relative flex flex-col gap-3 flex-grow px-4 sm:px-6 py-4 z-20">
          <h1 className="text-lg sm:text-xl font-bold text-white group-hover:text-blue-400 transition-colors duration-300">{props.name}</h1>
          <p className="text-xs sm:text-sm text-gray-400 leading-relaxed flex-grow">Full-stack application showcasing modern web development with clean architecture and best practices</p>
          
          {/* Tech stack badges */}
          <div className="flex gap-2 pt-2 flex-wrap">
            <span className="px-3 py-1 bg-gradient-to-r from-blue-600/20 to-blue-600/10 border border-blue-500/30 text-blue-400 text-xs rounded-full font-semibold backdrop-blur-sm">React</span>
            <span className="px-3 py-1 bg-gradient-to-r from-green-600/20 to-green-600/10 border border-green-500/30 text-green-400 text-xs rounded-full font-semibold backdrop-blur-sm">Node.js</span>
            <span className="px-3 py-1 bg-gradient-to-r from-purple-600/20 to-purple-600/10 border border-purple-500/30 text-purple-400 text-xs rounded-full font-semibold backdrop-blur-sm">MongoDB</span>
          </div>
        </div>
        
        {/* Action buttons */}
        <div className="relative flex gap-3 px-4 sm:px-6 pb-4 pt-2 z-20">
          <Link 
            href={props.codeUrl} 
            target="_blank"
            className="flex-1 flex items-center justify-center gap-2 glass-effect hover:bg-white/10 text-white px-3 py-2.5 rounded-xl text-sm font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg"
          >
            <FaGithub size={18} />
            <span className="hidden sm:inline">Code</span>
          </Link>
          <Link 
            href={props.liveUrl} 
            target="_blank"
            className="flex-1 flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-3 py-2.5 rounded-xl text-sm font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/50"
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
