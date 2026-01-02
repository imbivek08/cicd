"use client";
import React from "react";
import { RiNodejsLine } from "react-icons/ri";
import { SiExpress, SiNextdotjs } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { DiMongodb } from "react-icons/di";
import { FaGitAlt } from "react-icons/fa";
import { SiKubernetes } from "react-icons/si";
import { FaDocker } from "react-icons/fa6";
import { FaAws } from "react-icons/fa";
import { FcLinux } from "react-icons/fc";
import { SiTailwindcss } from "react-icons/si";
import { DiPostgresql } from "react-icons/di";

const Skills = () => {
  const skillsData = [
    { name: "Node.js", icon: RiNodejsLine, color: "#68A063", level: 90, category: "Backend" },
    { name: "Express", icon: SiExpress, color: "#ffffff", level: 85, category: "Backend" },
    { name: "React", icon: FaReact, color: "#61DAFB", level: 92, category: "Frontend" },
    { name: "Next.js", icon: SiNextdotjs, color: "#ffffff", level: 88, category: "Frontend" },
    { name: "MongoDB", icon: DiMongodb, color: "#13AA52", level: 85, category: "Database" },
    { name: "PostgreSQL", icon: DiPostgresql, color: "#336791", level: 80, category: "Database" },
    { name: "Docker", icon: FaDocker, color: "#2496ED", level: 87, category: "DevOps" },
    { name: "Kubernetes", icon: SiKubernetes, color: "#326CE5", level: 75, category: "DevOps" },
    { name: "AWS", icon: FaAws, color: "#FF9900", level: 78, category: "DevOps" },
    { name: "Git", icon: FaGitAlt, color: "#F64D27", level: 90, category: "Tools" },
    { name: "Linux", icon: FcLinux, color: "#FCC624", level: 82, category: "Tools" },
    { name: "Tailwind", icon: SiTailwindcss, color: "#06B6D4", level: 93, category: "Frontend" },
  ];

  return (
    <div id="skills" className="relative text-white mx-auto w-full lg:w-[85%] xl:w-[80%] px-4 lg:px-0 py-16 lg:py-24">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-purple-500/5 rounded-full blur-3xl"></div>
      
      <div className="relative">
        <div className="text-center mb-12 lg:mb-16">
          <span className="text-blue-400 font-semibold tracking-wider uppercase text-sm">🛠️ Tech Stack</span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mt-3 mb-4">
            Skills &{" "}
            <span className="gradient-text">Technologies</span>
          </h1>
          <p className="text-gray-400 text-sm sm:text-base max-w-2xl mx-auto">
            Building modern applications with cutting-edge technologies
          </p>
        </div>
        
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-6 gap-4 lg:gap-6">
          {skillsData.map((skill, index) => {
            const IconComponent = skill.icon;
            return (
              <div 
                key={index}
                className="group relative glass-effect rounded-2xl p-4 sm:p-6 hover:scale-105 transition-all duration-500 hover:shadow-xl hover:shadow-blue-500/10"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                {/* Hover glow effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600/0 to-purple-600/0 group-hover:from-blue-600/10 group-hover:to-purple-600/10 rounded-2xl transition-all duration-500"></div>
                
                <div className="relative flex flex-col items-center gap-3">
                  <div className="p-3 rounded-xl bg-gradient-to-br from-blue-600/10 to-purple-600/10 group-hover:scale-110 transition-transform duration-300">
                    <IconComponent 
                      size={36} 
                      color={skill.color} 
                      className="group-hover:drop-shadow-lg transition-all duration-300"
                    />
                  </div>
                  <div className="text-center w-full">
                    <p className="text-xs sm:text-sm font-bold text-white mb-1">{skill.name}</p>
                    <span className="text-xs text-gray-500 font-medium">{skill.category}</span>
                    
                    {/* Progress bar */}
                    <div className="mt-2 w-full bg-gray-800 rounded-full h-1.5 overflow-hidden">
                      <div 
                        className="h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full transition-all duration-1000 ease-out group-hover:shadow-lg"
                        style={{ 
                          width: `${skill.level}%`,
                          transitionDelay: `${index * 50}ms`
                        }}
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Skills;
