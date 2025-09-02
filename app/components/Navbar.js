"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaCodeBranch, FaBars, FaTimes, FaGithub } from "react-icons/fa";
import Link from "next/link";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#projects", label: "Projects" },
    { href: "#skills", label: "Skills" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <header className="fixed top-0 left-0 w-full bg-black/70 backdrop-blur-md shadow-md z-50">
      <div className="container mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <Link href="#home" className="flex items-center text-xl font-bold text-white">
          <FaCodeBranch className="text-white-500 mr-2" />
          Khristine
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link, index) => (
            <motion.a
              key={index}
              href={link.href}
              className="text-gray-300 hover:text-orange-400 transition"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              {link.label}
            </motion.a>
          ))}
          <a
            href="https://github.com/khristine-g"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-orange-400 transition"
          >
            <FaGithub size={22} />
          </a>
        </nav>

        {/* Mobile Hamburger */}
        <div className="md:hidden text-gray-300" onClick={toggleMenu}>
          {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.4 }}
            className="fixed top-0 right-0 w-3/4 h-screen bg-gray-900 flex flex-col items-center justify-center gap-8 md:hidden z-40"
          >
            {navLinks.map((link, index) => (
              <motion.a
                key={index}
                href={link.href}
                className="text-gray-200 text-lg hover:text-orange-400 transition"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
              </motion.a>
            ))}
            <a
              href="https://github.com/khristine-g"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-200 hover:text-orange-400 transition"
            >
              <FaGithub size={24} />
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
