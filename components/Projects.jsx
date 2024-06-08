"use client";

import React from "react";
import { project } from "@/data";
import ProjectCard from "./ProjectCard";
const Projects = () => {
  return (
    <div className="text-white mx-auto w-[81%]">
      <h1 className="text-3xl">Projects</h1>
      <div className="flex gap-5">
        {project.map((item) => {
          return <ProjectCard key={item.id} props={item} />;
        })}
      </div>
    </div>
  );
};

export default Projects;
