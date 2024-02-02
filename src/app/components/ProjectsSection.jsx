"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "Za Warudo",
    description: "A simple time-in/time-out system.",
    image: "/images/projects/1.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/charlestacda/Za-Warudo",
    previewUrl: "/images/projects/1.png",
  },
  {
    id: 2,
    title: "Anime Experience",
    description: "My personal Anime Blog.",
    image: "/images/projects/2.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/images/projects/2.png",
  },
  {
    id: 3,
    title: "COVAX-READY",
    description: "A COVID Vaccination Appointment.",
    image: "/images/projects/3.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/images/projects/3.png",
  },
  {
    id: 4,
    title: "CamShaft",
    description: "A Car Review Website.",
    image: "/images/projects/4.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 5,
    title: "Charlie Portfolio",
    description: "My old Video/Audio edit portfolio.",
    image: "/images/projects/5.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/charlestacda/Old-Portfolio",
    previewUrl: "/images/projects/5.png",
  },
  {
    id: 6,
    title: "Book Borrow Admin",
    description: "An admin system for approving and declining book borrow request.",
    image: "/images/projects/6.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/charlestacda/Book-Borrow-Admin",
    previewUrl: "/images/projects/6.png",
  },
  {
    id: 7,
    title: "LAYAG Mobile Application",
    description: "An assistan mobile application for LPU - Cavite.",
    image: "/images/projects/7.png",
    tag: ["All", "Mobile"],
    gitUrl: "https://github.com/charlestacda/LAYAG-Mobile-App",
    previewUrl: "/images/projects/7.png",
  },
  {
    id: 8,
    title: "LAYAG CMS V1.0",
    description: "The old version of the LAYAG CMS created using PHP.",
    image: "/images/projects/8.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/charlestacda/LAYAG-CMS-V1.0",
    previewUrl: "/images/projects/7.png",
  },
  {
    id: 7,
    title: "LAYAG CMS V2.0",
    description: "The current version of LAYAG CMS created using FireCMS.",
    image: "/images/projects/9.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/charlestacda/LAYAG-CMS-App",
    previewUrl: "/images/projects/9.png",
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Web"
          isSelected={tag === "Web"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Mobile"
          isSelected={tag === "Mobile"}
        />
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;