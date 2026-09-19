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
import { SiGo } from "react-icons/si";

const Skills = () => {
  const skillsData = [
    { name: "Node.js", icon: RiNodejsLine, color: "#68A063", category: "Backend" },
    { name: "Express", icon: SiExpress, color: "#ffffff", category: "Backend" },
    { name: "Go", icon: SiGo, color: "#00ADD8", category: "Backend" },
    { name: "React", icon: FaReact, color: "#61DAFB", category: "Frontend" },
    { name: "Next.js", icon: SiNextdotjs, color: "#ffffff", category: "Frontend" },
    { name: "Tailwind", icon: SiTailwindcss, color: "#06B6D4", category: "Frontend" },
    { name: "MongoDB", icon: DiMongodb, color: "#13AA52", category: "Database" },
    { name: "PostgreSQL", icon: DiPostgresql, color: "#336791", category: "Database" },
    { name: "Docker", icon: FaDocker, color: "#2496ED", category: "DevOps" },
    { name: "Kubernetes", icon: SiKubernetes, color: "#326CE5", category: "DevOps" },
    { name: "AWS", icon: FaAws, color: "#FF9900", category: "DevOps" },
    { name: "Git", icon: FaGitAlt, color: "#F64D27", category: "Tools" },
    { name: "Linux", icon: FcLinux, color: "#FCC624", category: "Tools" },
  ];

  const categories = ["Frontend", "Backend", "Database", "DevOps", "Tools"];

  return (
    <div id="skills" className="relative text-white mx-auto w-full lg:w-[85%] xl:w-[80%] px-4 lg:px-0 py-16 lg:py-24">
      <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-purple-500/5 rounded-full blur-3xl"></div>

      <div className="relative">
        <div className="text-center mb-12 lg:mb-16">
          <span className="text-[#7ee787] font-semibold tracking-wider uppercase text-sm">$ command -v skills</span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mt-3 mb-4">
            Skills & <span className="gradient-text">Technologies</span>
          </h1>
          <p className="text-[#8b949e] text-sm sm:text-base max-w-2xl mx-auto">
            I build with modern tooling across frontend, backend, databases, and cloud infrastructure.
          </p>
        </div>

        <div className="space-y-8 lg:space-y-10">
          {categories.map((category) => {
            const categorySkills = skillsData.filter((skill) => skill.category === category);

            return (
              <div key={category} className="space-y-4">
                <div className="flex items-center gap-3">
                  <span className="inline-block h-px flex-1 bg-[#30363d]"></span>
                  <p className="text-[10px] sm:text-xs font-semibold uppercase tracking-[0.22em] text-[#7ee787]">
                    {category}
                  </p>
                  <span className="inline-block h-px flex-1 bg-[#30363d]"></span>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-5 gap-4 lg:gap-5">
                  {categorySkills.map((skill, index) => {
                    const IconComponent = skill.icon;

                    return (
                      <div
                        key={`${category}-${skill.name}`}
                        className="group relative overflow-hidden rounded-xl border border-[#30363d] bg-[#0d1117]/70 p-4 transition-all duration-300 hover:-translate-y-1 hover:border-[#7ee787]/60 hover:shadow-xl hover:shadow-green-500/5"
                        style={{ animationDelay: `${index * 60}ms` }}
                      >
                        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/0 via-purple-600/0 to-pink-600/0 group-hover:from-blue-600/10 group-hover:via-purple-600/10 group-hover:to-pink-600/10 transition-all duration-500"></div>

                        <div className="relative flex items-center gap-3">
                          <div className="flex h-11 w-11 items-center justify-center rounded-lg border border-[#30363d] bg-[#161b22]">
                            <IconComponent size={22} color={skill.color} />
                          </div>

                          <div className="min-w-0">
                            <p className="text-sm font-semibold text-white">{skill.name}</p>
                            <p className="text-[10px] uppercase tracking-[0.15em] text-[#8b949e]">{skill.category}</p>
                          </div>
                        </div>
                      </div>
                    );
                  })}
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
