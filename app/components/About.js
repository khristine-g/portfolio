"use client";
import { useState, useEffect, useRef } from "react";
import { motion, useAnimation } from "framer-motion";
import { FaGraduationCap, FaBriefcase } from "react-icons/fa";

export default function About() {
  const [counts, setCounts] = useState({
    projectsCompleted: 0,
    technologiesLearned: 0,
    yearsOfExperience: 0,
    repositoriesCreated: 0,
  });

  const statsRef = useRef(null);
  const controls = useAnimation();

  // Detect viewport for stats
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          startCountUp();
        } else {
          resetCounts();
        }
      },
      { threshold: 0.5 }
    );

    if (statsRef.current) observer.observe(statsRef.current);

    return () => observer.disconnect();
  }, []);

  // Reset stats when out of view
  const resetCounts = () => {
    setCounts({
      projectsCompleted: 0,
      technologiesLearned: 0,
      yearsOfExperience: 0,
      repositoriesCreated: 0,
    });
  };

  // Start counting animation
  const startCountUp = () => {
    const targets = {
      projectsCompleted: 20,
      technologiesLearned: 10,
      yearsOfExperience: 2,
      repositoriesCreated: 100,
    };

    Object.keys(targets).forEach((key) => {
      let start = 0;
      const end = targets[key];
      const duration = 2000;
      const stepTime = Math.max(Math.floor(duration / end), 20);

      const timer = setInterval(() => {
        start += 1;
        setCounts((prev) => ({
          ...prev,
          [key]: Math.min(start, end),
        }));
        if (start >= end) clearInterval(timer);
      }, stepTime);
    });
  };

  // Animation variants
  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section id="about" className="py-20 bg-black text-white">
      <div className="max-w-6xl mx-auto px-6">
        {/* Title */}
        <motion.h2
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ amount: 0.4 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-4xl text-center font-extrabold mb-16 text-white"
        >
          About Me
        </motion.h2>

        {/* Bio Section */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ amount: 0.4 }}
          transition={{ duration: 0.8 }}
          className="bg-black/70 border border-orange-500/30 rounded-2xl p-10 shadow-[0_0_25px_rgba(249,115,22,0.25)] mb-16"
        >
          <p className="text-lg text-gray-300 leading-relaxed">
            I’m a Software Engineer with a passion for building impactful web
            applications and empowering others through technology. Beyond
            coding, I’ve been actively teaching software engineering and
            technology — not just to aspiring developers, but also to kids and
            young learners who are curious about tech.
          </p>
          <p className="text-lg text-gray-300 leading-relaxed mt-6">
            I believe technology should be accessible to everyone, and I enjoy
            breaking down complex concepts into simple, engaging lessons.
            Whether I’m working on projects, mentoring, or teaching, my goal is
            to inspire the next generation of innovators.
          </p>
        </motion.div>

        {/* Education & Experience */}
        <div className="grid md:grid-cols-2 gap-10 mb-20">
          {/* Education */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ amount: 0.3 }}
            transition={{ duration: 0.7 }}
            className="bg-black/70 rounded-2xl p-8 shadow-[0_0_15px_rgba(249,115,22,0.2)] border border-orange-500/30"
          >
            <h3 className="flex items-center gap-3 text-2xl font-semibold mb-6">
              <FaGraduationCap className="text-orange-400" /> Education
            </h3>
            <div className="space-y-6">
              <div>
                <span className="text-sm text-gray-400">2015 - 2022</span>
                <h4 className="text-lg font-medium text-white">
                  BSc Information Technology – JKUAT
                </h4>
              </div>
              <div>
                <span className="text-sm text-gray-400">Feb 2023 - Aug 2023</span>
                <h4 className="text-lg font-medium text-white">
                  Software Engineering – Moringa School
                </h4>
              </div>
            </div>
          </motion.div>

          {/* Experience */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ amount: 0.3 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="bg-black/70 rounded-2xl p-8 shadow-[0_0_15px_rgba(249,115,22,0.2)] border border-orange-500/30"
          >
            <h3 className="flex items-center gap-3 text-2xl font-semibold mb-6">
              <FaBriefcase className="text-orange-400" /> Experience
            </h3>
            <div className="space-y-6">
              <div>
                <span className="text-sm text-gray-400">2024 - Present</span>
                <h4 className="text-lg font-medium text-white">
                  Software Engineering Tutor – Mentoring students and kids in
                  coding & tech
                </h4>
              </div>
              <div>
                <span className="text-sm text-gray-400">2022</span>
                <h4 className="text-lg font-medium text-white">
                  Intern – Ministry of Public Service, Performance and Delivery
                  Management
                </h4>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Stats Section */}
        <div
          ref={statsRef}
          className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center"
        >
          {[
            { value: counts.projectsCompleted, label: "Projects Completed" },
            { value: counts.technologiesLearned, label: "Technologies Learned" },
            { value: counts.yearsOfExperience, label: "Years of Experience" },
            { value: counts.repositoriesCreated, label: "Repositories Created" },
          ].map((stat, index) => (
            <motion.div
              key={index}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ amount: 0.5 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="p-6 rounded-xl bg-black/60 border border-orange-500/30 shadow-[0_0_20px_rgba(249,115,22,0.2)] hover:scale-105 hover:shadow-orange-500/40 transition-transform"
            >
              <motion.h2
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="text-4xl md:text-5xl font-bold text-white"
              >
                {stat.value}
                <span className="text-orange-500">+</span>
              </motion.h2>
              <p className="mt-3 text-gray-300 text-lg">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
