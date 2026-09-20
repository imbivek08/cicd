"use client";
import Image from "next/image";
import React from "react";
import { FaGithub, FaLinkedin, FaDownload } from "react-icons/fa";
import Link from "next/link";
import { useState } from "react";

const Hero = () => {
  const [command, setCommand] = useState("");
  const [output, setOutput] = useState(["fullstack engineer · devops enthusiast"]);

  const runCommand = (event) => {
    event.preventDefault();
    const value = command.trim().toLowerCase();
    if (!value) return;
    const responses = {
      help: "available: help, whoami, ls, clear",
      whoami: "bivek — fullstack engineer · devops enthusiast",
      ls: "about/  projects/  skills/  contact/",
    };
    setOutput((current) => [
      ...current,
      `$ ${value}`,
      responses[value] || `bash: ${value}: command not found`,
    ]);
    if (value === "clear") setOutput([]);
    setCommand("");
  };

  return (
    <div className="relative overflow-hidden min-h-screen lg:min-h-[90vh] flex items-center">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-green-500/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-orange-500/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>
      
      <div className="relative flex flex-col lg:flex-row justify-between items-center w-full lg:w-[85%] xl:w-[80%] mx-auto px-4 lg:px-0 py-12 lg:py-0 gap-12 lg:gap-8">
        <div className="flex flex-col gap-6 w-full lg:w-1/2 animate-slide-up">
          <div className="terminal-window w-full max-w-2xl">
            <div className="terminal-titlebar">
              <span className="terminal-dot bg-[#ff5f56]"></span><span className="terminal-dot bg-[#ffbd2e]"></span><span className="terminal-dot bg-[#27c93f]"></span>
              <span className="ml-2">bash -- 80x24</span>
            </div>
            <div className="p-4 text-xs sm:text-sm">
              {output.map((line, index) => (
                <p key={`${line}-${index}`} className={line.startsWith("$") ? "text-[#79c0ff]" : "mt-2 text-[#8b949e]"}>
                  {line}
                </p>
              ))}
              <form onSubmit={runCommand} className="flex mt-2">
                <span className="prompt">bivek@portfolio:~$&nbsp;</span>
                <input
                  value={command}
                  onChange={(event) => setCommand(event.target.value)}
                  aria-label="Terminal command"
                  className="min-w-0 flex-1 bg-transparent text-[#d7e0d5] outline-none"
                  placeholder="type help"
                />
              </form>
            </div>
          </div>
          
          <div className="space-y-4">
            <h1 className="text-3xl sm:text-4xl lg:text-6xl xl:text-7xl font-bold leading-tight">
              <span className="text-[#8b949e]">$ echo </span>
              <span className="gradient-text inline-block">Bivek Yadav</span>
            </h1>
            <h2 className="text-xl sm:text-2xl lg:text-3xl text-[#ffa657] font-light">
              Fullstack Engineer<span className="terminal-cursor"></span>
            </h2>
          </div>
          
          <p className="text-[#8b949e] text-sm sm:text-base lg:text-lg leading-relaxed max-w-xl">
            Full-stack developer with a strong DevOps skill. I build scalable APIs, 
            cloud-native systems, and production-ready infrastructure using TypeScript, Go, React, 
            Docker, Kubernetes, and AWS. I care about clean code, smooth deployments, 
            and systems that actually work in the real world.
          </p>
          
          <div className="flex flex-wrap gap-4 pt-4">
            <Link 
              href="#projects"
              className="group relative px-6 sm:px-8 py-3 sm:py-4 bg-[#238636] rounded-md font-semibold text-sm sm:text-base overflow-hidden transition-all hover:bg-[#2ea043]"
            >
              <span className="relative z-10 flex items-center gap-2">
                View My Work
              </span>
            </Link>
            
            <Link
              href="/contact"
              className="group px-6 sm:px-8 py-3 sm:py-4 glass-effect rounded-md font-semibold text-sm sm:text-base hover:bg-[#21262d] transition-all flex items-center gap-2"
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
            <div className="absolute -inset-1 bg-gradient-to-r from-green-600 via-emerald-600 to-orange-500 rounded-full blur-2xl opacity-40 group-hover:opacity-70 transition duration-1000 animate-pulse"></div>
            <div className="relative w-56 h-56 sm:w-72 sm:h-72 lg:w-96 lg:h-96">
              <div className="absolute inset-0 rounded-full overflow-hidden border-4 border-white/10">
                <Image
                  className="object-cover hover:scale-110 transition-transform duration-500"
                  src="/Profile.jpeg"
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
