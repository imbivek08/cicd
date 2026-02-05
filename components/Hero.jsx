"use client";
import Image from "next/image";
import React from "react";
import { FaGithub, FaLinkedin, FaDownload } from "react-icons/fa";
import Link from "next/link";

const Hero = () => {
  return (
    <div className="relative overflow-hidden min-h-screen lg:min-h-[90vh] flex items-center">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>
      
      <div className="relative flex flex-col lg:flex-row justify-between items-center w-full lg:w-[85%] xl:w-[80%] mx-auto px-4 lg:px-0 py-12 lg:py-0 gap-12 lg:gap-8">
        <div className="flex flex-col gap-6 w-full lg:w-1/2 animate-slide-up">
          <div className="inline-block">
            <span className="text-sm sm:text-base text-blue-400 font-semibold tracking-wider uppercase">👋 Welcome to my portfolio</span>
          </div>
          
          <div className="space-y-4">
            <h1 className="text-3xl sm:text-4xl lg:text-6xl xl:text-7xl font-bold leading-tight">
              Hi, I&apos;m{" "}
              <span className="gradient-text inline-block animate-float">
                Bivek Yadav
              </span>
            </h1>
            <h2 className="text-xl sm:text-2xl lg:text-3xl text-gray-300 font-light">
              Fullstack Engineer
            </h2>
          </div>
          
          <p className="text-gray-400 text-sm sm:text-base lg:text-lg leading-relaxed max-w-xl">
            Full-stack developer with a strong DevOps skill. I build scalable APIs, 
            cloud-native systems, and production-ready infrastructure using TypeScript, Go, React, 
            Docker, Kubernetes, and AWS. I care about clean code, smooth deployments, 
            and systems that actually work in the real world.
          </p>
          
          <div className="flex flex-wrap gap-4 pt-4">
            <Link 
              href="#projects"
              className="group relative px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full font-semibold text-sm sm:text-base overflow-hidden transition-all hover:scale-105 hover:shadow-lg hover:shadow-blue-500/50"
            >
              <span className="relative z-10 flex items-center gap-2">
                View My Work
              </span>
            </Link>
            
            <Link
              href="/contact"
              className="group px-6 sm:px-8 py-3 sm:py-4 glass-effect rounded-full font-semibold text-sm sm:text-base hover:bg-white/10 transition-all hover:scale-105 flex items-center gap-2"
            >
              Get In Touch
            </Link>
          </div>
          
          <div className="flex gap-4 pt-4">
            <Link href="https://github.com/imbivek08" target="_blank" className="p-3 glass-effect rounded-full hover:bg-white/10 hover:scale-110 transition-all glow-blue">
              <FaGithub size={24} />
            </Link>
            <Link href="https://linkedin.com" target="_blank" className="p-3 glass-effect rounded-full hover:bg-white/10 hover:scale-110 transition-all glow-blue">
              <FaLinkedin size={24} />
            </Link>
          </div>
        </div>
        
        <div className="w-full lg:w-1/2 flex justify-center lg:justify-end animate-fade-in">
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-full blur-2xl opacity-75 group-hover:opacity-100 transition duration-1000 animate-pulse"></div>
            <div className="relative w-56 h-56 sm:w-72 sm:h-72 lg:w-96 lg:h-96">
              <div className="absolute inset-0 rounded-full overflow-hidden border-4 border-white/10">
                <Image
                  className="object-cover hover:scale-110 transition-transform duration-500"
                  src="/profile.jpg"
                  fill
                  alt="Bivek Yadav"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
