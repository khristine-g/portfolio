"use client";

import { motion } from "framer-motion";
import {
  FaJs,
  FaReact,
  FaCss3Alt,
  FaPython,
  FaHtml5,
  FaLaptopCode,
} from "react-icons/fa";
import {
  DiBootstrap,
  DiDjango,
  DiRuby,
  DiGithubBadge,
  DiGit,
} from "react-icons/di";
import { MdApi } from "react-icons/md";
import { SiMysql, SiPostgresql, SiSqlite } from "react-icons/si";

// Skills Data
const skills = [
  { name: "JavaScript", icon: <FaJs /> },
  { name: "React", icon: <FaReact /> },
  { name: "CSS", icon: <FaCss3Alt /> },
  { name: "Python", icon: <FaPython /> },
  { name: "HTML", icon: <FaHtml5 /> },
  { name: "Bootstrap", icon: <DiBootstrap /> },
  { name: "Django", icon: <DiDjango /> },
  { name: "Ruby on Rails", icon: <DiRuby /> },
  { name: "Git", icon: <DiGit /> },
  { name: "GitHub", icon: <DiGithubBadge /> },
  { name: "API Development (REST)", icon: <MdApi /> },
  { name: "Full Stack Development", icon: <FaLaptopCode /> },
  { name: "MySQL", icon: <SiMysql /> },
  { name: "PostgreSQL", icon: <SiPostgresql /> },
  { name: "SQLite", icon: <SiSqlite /> },
];

// Animation Variants
const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1, // each child animates one after another
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 50, scale: 0.8, rotate: -10 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    rotate: 0,
    transition: { type: "spring", stiffness: 80, damping: 12 },
  },
};

export default function Skills() {
  return (
    <section
      id="skills"
      className="py-24 bg-black text-white relative overflow-hidden"
    >
      <div className="relative container mx-auto px-6 md:px-12 text-center">
        {/* Section Title */}
        <motion.h2
          initial={{ opacity: 0, y: -40, scale: 0.8 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-4xl md:text-4xl font-extrabold mb-16 text-white-500 drop-shadow-[0_0_12px_rgba(249,115,22,0.7)]"
        >
          My Skills
        </motion.h2>

        {/* Skills Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-10"
        >
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{
                scale: 1.3,
                rotate: [0, -10, 10, -5, 5, 0],
                transition: { duration: 0.6 },
              }}
              className="flex flex-col items-center gap-3 cursor-pointer"
            >
              <motion.div
                animate={{ y: [0, -6, 0] }} // floating animation
                transition={{ repeat: Infinity, duration: 2, delay: index * 0.2 }}
                className="text-6xl text-white drop-shadow-[0_0_15px_rgba(249,115,22,0.6)]"
              >
                {skill.icon}
              </motion.div>
              <p className="text-sm font-medium text-gray-300 group-hover:text-orange-400">
                {skill.name}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Hire Me Section */}
        <motion.div
          initial={{ opacity: 0, y: 80, scale: 0.9 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          viewport={{ once: false }}
          className="mt-24 max-w-4xl mx-auto text-center bg-black/60 p-10 rounded-3xl shadow-[0_0_25px_rgba(249,115,22,0.4)] border border-orange-500/40"
        >
          <motion.h3
            initial={{ opacity: 0, scale: 0.7 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            viewport={{ once: false }}
            className="text-3xl font-bold text-white-400 mb-6 drop-shadow-[0_0_8px_rgba(249,115,22,0.7)]"
          >
            Why Hire Me For Your Next Project?
          </motion.h3>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            viewport={{ once: false }}
            className="text-gray-300 leading-relaxed mb-4"
          >
            I bring a strong foundation in front-end development with expertise
            in JavaScript, React, and other modern frameworks to create
            intuitive and engaging user interfaces.
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            viewport={{ once: false }}
            className="text-gray-300 leading-relaxed"
          >
            My ability to seamlessly integrate front-end and back-end
            technologies — including{" "}
            MySQL, PostgreSQL, and SQLite{" "}
            — ensures a cohesive and efficient development process. With a
            passion for problem-solving and delivering high-quality solutions,
            I’m dedicated to helping your projects succeed.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
