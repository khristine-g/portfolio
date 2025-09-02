"use client";

import { motion } from "framer-motion";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

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

// Animation Variants
const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.2 }, // stagger each card
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 60, scale: 0.9, rotate: -5 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    rotate: 0,
    transition: { type: "spring", stiffness: 70, damping: 15 },
  },
};

export default function Projects() {
  return (
    <section
      id="projects"
      className="relative py-20 bg-black text-white overflow-x-hidden"
    >
      <div className="container mx-auto px-6 md:px-12">
        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: -40, scale: 0.8 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: false }}
          className="text-4xl md:text-4xl text-center font-extrabold mb-16 text-white-500 drop-shadow-[0_0_12px_rgba(249,115,22,0.7)]"
        >
          My Projects
        </motion.h2>

        {/* Projects Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
          className="flex gap-8 overflow-x-auto md:overflow-visible md:grid md:grid-cols-4 md:gap-8 scrollbar-thin scrollbar-thumb-orange-500/50 scrollbar-track-transparent"
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{
                scale: 1.07,
                rotate: [0, -2, 2, -1, 1, 0], // wiggle effect
                transition: { duration: 0.6 },
              }}
              className="group relative min-w-[300px] md:min-w-0 overflow-hidden rounded-xl bg-black/70 backdrop-blur-md border border-orange-500/30 shadow-[0_0_20px_rgba(249,115,22,0.2)] hover:shadow-orange-500/40 transition-all"
            >
              {/* Floating effect */}
              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{ repeat: Infinity, duration: 3, delay: index * 0.3 }}
                className="relative h-48 w-full overflow-hidden"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition duration-500"
                />
              </motion.div>

              {/* Project Content */}
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2 text-white group-hover:text-orange-400 transition">
                  {project.title}
                </h3>
                <p className="text-gray-300 text-sm mb-2">
                  {project.description}
                </p>
                <p className="text-xs text-gray-400 mb-4">
                  <span className="font-semibold text-orange-400">
                    Tech Stack:
                  </span>{" "}
                  {project.techStack}
                </p>

                {/* Links */}
                <div className="flex gap-3">
                  <motion.a
                    whileHover={{ scale: 1.1 }}
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-orange-500 hover:bg-orange-600 transition text-white text-xs font-medium"
                  >
                    Live Demo <FaExternalLinkAlt size={12} />
                  </motion.a>
                  <motion.a
                    whileHover={{ scale: 1.1 }}
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-gray-800 hover:bg-gray-700 transition text-white text-xs font-medium"
                  >
                    GitHub <FaGithub size={13} />
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
