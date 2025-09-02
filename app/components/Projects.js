"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { FaExternalLinkAlt, FaGithub, FaChevronLeft, FaChevronRight } from "react-icons/fa";

const projects = [
  {
    title: "Ecommerce Website",
    description:
      "A modern e-commerce platform for beauty products, featuring seamless checkout and product filtering.",
    techStack: "Next js",
    link: "https://truebeauty-tan.vercel.app/",
    github: "https://github.com/khristine-g/Beauty-store",
    image: "images/Screenshot5.png",
  },
  {
    title: "Job Tracker",
    description:
      "An intuitive real estate platform for browsing, buying, selling, and renting properties.",
    techStack: "Next js, Firebase",
    link: "https://realty-taupe.vercel.app/",
    github: "https://github.com/khristine-g/Real-estate",
    image: "images/Screenshot7.png",
  },
  {
    title: "Crypto Dashboard",
    description:
      "A platform to support and fund innovative projects, empowering creators to bring ideas to life.",
    techStack: "Next js",
    link: "https://empowerher-two.vercel.app/",
    github: "https://github.com/khristine-g/Empowerher",
    image: "images/Screenshot8.png",
  },
  {
    title: "Portfolio Website",
    description:
      "A personal portfolio showcasing my web development projects and skills.",
    techStack: "React, CSS",
    link: "https://khristineportfolio.vercel.app/",
    github: "https://github.com/khristine-g/Portfolio-website",
    image: "/Screenshot2.png",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 60, scale: 0.9 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { type: "spring", stiffness: 70, damping: 15 },
  },
};

export default function Projects() {
  const [current, setCurrent] = useState(0);

  const nextProject = () => {
    setCurrent((prev) => (prev + 1) % projects.length);
  };

  const prevProject = () => {
    setCurrent((prev) => (prev - 1 + projects.length) % projects.length);
  };

  return (
    <section
      id="projects"
      className="relative py-20 bg-black text-white overflow-hidden"
    >
      <div className="container mx-auto px-6 md:px-12">
        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: false }}
          className="text-4xl md:text-4xl text-center font-extrabold mb-16 drop-shadow-[0_0_12px_rgba(249,115,22,0.7)]"
        >
          My Projects
        </motion.h2>

        {/* Desktop Grid */}
        <div className="hidden md:grid md:grid-cols-4 md:gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false }}
              whileHover={{ scale: 1.05 }}
              className="group relative overflow-hidden rounded-xl bg-black/70 backdrop-blur-md border border-orange-500/30 shadow-[0_0_20px_rgba(249,115,22,0.2)] hover:shadow-orange-500/40 transition-all"
            >
              {/* Image */}
              <div className="relative h-48 w-full overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition duration-500"
                />
              </div>

              {/* Content */}
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2 group-hover:text-orange-400 transition">
                  {project.title}
                </h3>
                <p className="text-gray-300 text-sm mb-2">{project.description}</p>
                <p className="text-xs text-gray-400 mb-4">
                  <span className="font-semibold text-orange-400">Tech Stack:</span>{" "}
                  {project.techStack}
                </p>
                <div className="flex gap-3">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-orange-500 hover:bg-orange-600 transition text-white text-xs font-medium"
                  >
                    Live Demo <FaExternalLinkAlt size={12} />
                  </a>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-gray-800 hover:bg-gray-700 transition text-white text-xs font-medium"
                  >
                    GitHub <FaGithub size={13} />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Mobile Carousel */}
        <div className="relative md:hidden">
          <motion.div
            key={current}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5 }}
            className="group relative overflow-hidden rounded-xl bg-black/70 backdrop-blur-md border border-orange-500/30 shadow-[0_0_20px_rgba(249,115,22,0.2)] hover:shadow-orange-500/40 transition-all"
          >
            <div className="relative h-48 w-full overflow-hidden">
              <img
                src={projects[current].image}
                alt={projects[current].title}
                className="w-full h-full object-cover transform group-hover:scale-110 transition duration-500"
              />
            </div>
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-2 group-hover:text-orange-400 transition">
                {projects[current].title}
              </h3>
              <p className="text-gray-300 text-sm mb-2">
                {projects[current].description}
              </p>
              <p className="text-xs text-gray-400 mb-4">
                <span className="font-semibold text-orange-400">Tech Stack:</span>{" "}
                {projects[current].techStack}
              </p>
              <div className="flex gap-3">
                <a
                  href={projects[current].link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-orange-500 hover:bg-orange-600 transition text-white text-xs font-medium"
                >
                  Live Demo <FaExternalLinkAlt size={12} />
                </a>
                <a
                  href={projects[current].github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-gray-800 hover:bg-gray-700 transition text-white text-xs font-medium"
                >
                  GitHub <FaGithub size={13} />
                </a>
              </div>
            </div>
          </motion.div>

          {/* Arrows */}
          <button
            onClick={prevProject}
            className="absolute top-1/2 left-2 -translate-y-1/2 bg-black/50 p-2 rounded-full hover:bg-orange-500 transition"
          >
            <FaChevronLeft />
          </button>
          <button
            onClick={nextProject}
            className="absolute top-1/2 right-2 -translate-y-1/2 bg-black/50 p-2 rounded-full hover:bg-orange-500 transition"
          >
            <FaChevronRight />
          </button>
        </div>
      </div>
    </section>
  );
}
