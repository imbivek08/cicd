"use client";

import React from "react";
import { project } from "@/data";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  return (
    <div id="projects" className="relative text-white mx-auto w-full lg:w-[85%] xl:w-[80%] px-4 lg:px-0 py-16 lg:py-24">
      {/* Background decoration */}
      <div className="absolute top-1/4 right-1/4 w-72 h-72 bg-blue-500/5 rounded-full blur-3xl"></div>
      
      <div className="relative">
        <div className="text-center mb-12 lg:mb-16">
          <span className="text-[#7ee787] font-semibold tracking-wider uppercase text-sm">$ ls ./projects</span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mt-3 mb-4">
            Featured{" "}
            <span className="gradient-text">Projects</span>
          </h1>
          <p className="text-[#8b949e] text-sm sm:text-base max-w-2xl mx-auto">
            Here are some of my recent projects showcasing my skills in full-stack development
          </p>
        </div>
        
        <div className="mx-auto max-w-6xl">
          {project.map((item, index) => {
            return (
              <ProjectCard
                key={item.id}
                props={item}
                index={index}
                featured={index === 0}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Projects;
