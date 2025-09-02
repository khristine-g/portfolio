"use client";

import { motion } from "framer-motion";
import { FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa";

export default function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="w-full bg-black text-gray-400 py-10 px-6 border-t border-orange-500/20 shadow-[0_0_20px_rgba(249,115,22,0.2)]"
    >
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Logo / Name */}
        <motion.h1
          whileHover={{ scale: 1.05 }}
          className="text-xl font-bold text-white tracking-wide drop-shadow-[0_0_10px_rgba(249,115,22,0.6)]"
        >
          Khristine<span className="text-orange-500">.</span>
        </motion.h1>

        {/* Navigation / Links */}
        <div className="flex gap-6 text-sm">
          <a
            href="#about"
            className="hover:text-orange-400 transition-colors hover:drop-shadow-[0_0_6px_rgba(249,115,22,0.6)]"
          >
            About
          </a>
          <a
            href="#projects"
            className="hover:text-orange-400 transition-colors hover:drop-shadow-[0_0_6px_rgba(249,115,22,0.6)]"
          >
            Projects
          </a>
          <a
            href="#contact"
            className="hover:text-orange-400 transition-colors hover:drop-shadow-[0_0_6px_rgba(249,115,22,0.6)]"
          >
            Contact
          </a>
        </div>

        {/* Social Icons */}
        <div className="flex gap-5 text-lg">
          <motion.a
            whileHover={{ scale: 1.2 }}
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-orange-400 transition hover:drop-shadow-[0_0_8px_rgba(249,115,22,0.8)]"
          >
            <FaLinkedin />
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.2 }}
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-orange-400 transition hover:drop-shadow-[0_0_8px_rgba(249,115,22,0.8)]"
          >
            <FaGithub />
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.2 }}
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-orange-400 transition hover:drop-shadow-[0_0_8px_rgba(249,115,22,0.8)]"
          >
            <FaTwitter />
          </motion.a>
        </div>
      </div>

      {/* Copyright */}
      <div className="mt-8 text-center text-sm text-gray-500">
        © {new Date().getFullYear()}{" "}
       Khristine Portfolio. All rights
        reserved.
      </div>
    </motion.footer>
  );
}
