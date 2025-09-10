"use client";

import { motion } from "framer-motion";
import { Download, Github } from "lucide-react";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import About from "./components/About";

import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function Home() {
  const buttons = [
    {
      label: "Download CV",
      url: "/KHRISTINEGITHIGE-RESUME.docx",
      download: true,
      className:
        "bg-gradient-to-r from-orange-500 to-orange-600 text-white hover:shadow-[0_0_20px_rgba(249,115,22,0.6)]",
      icon: <Download size={18} />,
    },
    {
      label: "GitHub Link",
      url: "https://github.com/khristine-g",
      download: false,
      className:
        "border border-orange-400 text-orange-400 hover:bg-orange-600/20 hover:text-white hover:shadow-[0_0_15px_rgba(249,115,22,0.5)]",
      icon: <Github size={18} />,
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section
        id="home"
        className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-black via-gray-950 to-black text-white overflow-hidden"
      >
        {/* Animated orange blobs */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 0.5, scale: 1 }}
          transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
          className="absolute -top-32 -left-32 w-96 h-96 bg-orange-500/20 rounded-full blur-3xl"
        />
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 0.5, scale: 1 }}
          transition={{ duration: 2.5, delay: 0.5, repeat: Infinity, repeatType: "reverse" }}
          className="absolute bottom-0 right-0 w-[30rem] h-[30rem] bg-orange-600/20 rounded-full blur-3xl"
        />
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 0.4, scale: 1.1 }}
          transition={{ duration: 3, delay: 1, repeat: Infinity, repeatType: "reverse" }}
          className="absolute top-1/3 right-1/3 w-64 h-64 bg-orange-400/20 rounded-full blur-3xl"
        />

        {/* Content */}
        <div className="relative z-10 max-w-7xl px-6 grid md:grid-cols-2 gap-12 items-center">
          {/* Text Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6 text-center md:text-left"
          >
            <h1 className="text-5xl md:text-7xl font-extrabold leading-tight">
              Hello, I&apos;m
              <br />
              <span className="bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent drop-shadow-lg animate-pulse">
                Khristine
              </span>
            </h1>
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-300">
              Software Developer 💻
            </h2>
            <p className="text-gray-400 leading-relaxed max-w-lg mx-auto md:mx-0">
             I design and develop modern web applications  focusing on clean design, seamless functionality, and great user experiences.
            </p>

            {/* Buttons */}
            <div className="flex flex-wrap gap-4 justify-center md:justify-start">
              {buttons.map((btn, index) => (
                <motion.a
                  key={index}
                  whileHover={{ scale: 1.07 }}
                  whileTap={{ scale: 0.95 }}
                  href={btn.url}
                  className={`inline-flex items-center gap-2 px-6 py-3 rounded-xl font-medium transition backdrop-blur-sm ${btn.className}`}
                  {...(btn.download
                    ? { download: "KhristineGithige_Resume.docx" }
                    : { target: "_blank", rel: "noopener noreferrer" })}
                >
                  {btn.icon}
                  {btn.label}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Code Snippet Section */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            whileHover={{ scale: 1.03 }}
            className="relative bg-gradient-to-br from-gray-900/90 to-black/80 backdrop-blur-md p-6 rounded-2xl border border-orange-500/30 shadow-[0_0_25px_rgba(249,115,22,0.15)] overflow-hidden"
          >
            {/* Neon border glow */}
            <div className="absolute inset-0 rounded-2xl border border-orange-500/20 shadow-[inset_0_0_30px_rgba(249,115,22,0.15)] pointer-events-none" />

            {/* Code snippet header */}
            <div className="flex gap-2 mb-4 relative z-10">
              <span className="w-3 h-3 rounded-full bg-red-500"></span>
              <span className="w-3 h-3 rounded-full bg-yellow-500"></span>
              <span className="w-3 h-3 rounded-full bg-green-500"></span>
            </div>
            <pre className="text-sm text-gray-300 relative z-10 font-mono">
{`function makeApp() {
  const skills = ["React", "Ruby on Rails", "UI/UX Design"];
  const motto = "Transforming ideas into user-friendly web apps!";
  console.log("Your next web developer, ready to code! 💻");
  return { skills, motto };
}

makeApp();`}
            </pre>
          </motion.div>
        </div>
      </section>

      {/* Other Sections */}
      <Skills />
      <Projects />
      <About />
  
      <Contact />
      <Footer />
    </>
  );
}
