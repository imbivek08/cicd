"use client";

import Link from "next/link";
import React from "react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const ProjectCard = ({ props, index, featured = false }) => {
  const techColors = [
    "text-[#79c0ff]",
    "text-[#7ee787]",
    "text-[#d2a8ff]",
    "text-[#f9d876]",
    "text-[#ff9c9c]",
  ];

  return (
    <article
      className={`group relative border-b border-[#30363d] py-7 transition-colors duration-300 hover:border-[#7ee787]/60 ${
        featured
          ? "border-t border-[#30363d] py-8 sm:py-10"
          : "first:border-t"
      }`}
    >
      <div className="grid grid-cols-[3.5rem_1fr] gap-4 sm:grid-cols-[5rem_1fr_auto] sm:gap-6">
        <p className="pt-1 font-mono text-sm text-[#7ee787]">
          {String(index + 1).padStart(2, "0")}
        </p>

        <div className="min-w-0">
          <div className="mb-3 flex flex-wrap items-center gap-x-3 gap-y-1">
            {featured && (
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#f9d876]">
                Featured build
              </span>
            )}
            <span className="text-xs text-[#8b949e]">
              /{props.name.toLowerCase().replaceAll(" ", "-")}
            </span>
          </div>
          <h2 className={`font-bold text-white transition-colors duration-300 group-hover:text-[#7ee787] ${
            featured ? "text-2xl sm:text-4xl" : "text-xl sm:text-2xl"
          }`}>
            {props.name}
          </h2>
          <p className={`mt-3 max-w-2xl leading-relaxed text-[#8b949e] ${
            featured ? "text-sm sm:text-base" : "text-sm"
          }`}>
            {props.description}
          </p>

          <div className="mt-5 flex flex-wrap items-center gap-x-4 gap-y-2">
            {(props.tech || ["React", "Node.js", "MongoDB"]).map((item, techIndex) => (
              <span
                key={`${props.id}-${item}`}
                className={`text-[10px] font-semibold uppercase tracking-[0.12em] sm:text-xs ${
                  techColors[techIndex % techColors.length]
                }`}
              >
                {item}
              </span>
            ))}
          </div>
        </div>

        <div className="col-start-2 flex items-center gap-4 pt-2 sm:col-start-auto sm:row-span-1 sm:self-center sm:pt-0">
          <Link
            href={props.codeUrl}
            target="_blank"
            className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#d7e0d5] transition-colors hover:text-[#7ee787]"
          >
            <FaGithub size={18} />
            <span>Code</span>
          </Link>
          <Link
            href={props.liveUrl || "#"}
            target={props.liveUrl ? "_blank" : undefined}
            rel={props.liveUrl ? "noreferrer" : undefined}
            className={`inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider transition-colors ${
              props.liveUrl && props.liveUrl !== "#"
                ? "text-[#d7e0d5] hover:text-[#7ee787]"
                : "cursor-not-allowed text-[#8b949e] opacity-70"
            }`}
            aria-disabled={!(props.liveUrl && props.liveUrl !== "#")}
            onClick={(e) => {
              if (!(props.liveUrl && props.liveUrl !== "#")) e.preventDefault();
            }}
          >
            <FaExternalLinkAlt size={16} />
            <span>Demo</span>
          </Link>
        </div>
      </div>
    </article>
  );
};

export default ProjectCard;
