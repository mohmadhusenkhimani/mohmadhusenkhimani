"use client";

import { motion } from "motion/react";
import { ArrowRight, Download } from "lucide-react";

const technologies = [
  "React.js",
  "Node.js",
  "Express.js",
  "MongoDB",
  "JavaScript",
  "REST APIs",
  "Tailwind CSS",
  "AI Integration",
];

const Header = () => {
  return (
    <section
      id="top"
      className="relative flex min-h-screen w-full flex-col items-center justify-center overflow-hidden bg-white px-5 pt-28 pb-16 text-gray-900 transition-colors duration-300 dark:bg-[#080d16] dark:text-white sm:px-8"
    >
      {/* Background Effects */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 left-1/2 h-[450px] w-[450px] -translate-x-1/2 rounded-full bg-red-500/10 blur-[130px]" />

        <div className="absolute bottom-0 right-0 h-[350px] w-[350px] rounded-full bg-red-600/10 blur-[120px]" />

        <div className="absolute inset-0 opacity-[0.035] [background-image:radial-gradient(#888_1px,transparent_1px)] [background-size:25px_25px]" />
      </div>

      {/* Main Content */}
      <div className="relative z-10 mx-auto flex w-full max-w-5xl flex-col items-center text-center">

        {/* Current Workplace Badge */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-7 inline-flex items-center gap-2 rounded-full border border-blue-500/20 bg-blue-500/10 px-4 py-2 text-xs font-semibold tracking-wide text-blue-600 dark:text-blue-400 sm:text-sm"
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-blue-500 opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-blue-500" />
          </span>

          CURRENTLY WORKING AT BRAINYBEAM TECHNOLOGIES PVT. LTD.
        </motion.div>

        {/* Greeting */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="mb-5 flex items-center gap-2 text-base font-medium text-gray-600 dark:text-gray-300 sm:text-lg"
        >
          <span>Hi, I'm Mohmadhusen Khimani</span>
          <span role="img" aria-label="waving hand">
            👋
          </span>
        </motion.div>

        {/* Main Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-4xl text-4xl font-bold leading-tight tracking-tight sm:text-5xl md:text-6xl lg:text-7xl"
        >
          Engineering Ideas into{" "}
          <span className="bg-gradient-to-r from-red-500 via-red-600 to-orange-500 bg-clip-text text-transparent">
            Powerful Software Solutions.
          </span>
        </motion.h1>

        {/* Developer Role */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-6 flex flex-col items-center gap-2"
        >
          <h2 className="text-xl font-bold text-gray-800 dark:text-gray-100 sm:text-2xl">
            Full Stack MERN Developer
          </h2>

          <p className="text-sm font-medium text-gray-500 dark:text-gray-400 sm:text-base">
            Software Developer | Web Application Developer | AI Enthusiast
          </p>
        </motion.div>

        {/* Introduction */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mx-auto mt-7 max-w-3xl text-sm leading-7 text-gray-600 dark:text-gray-400 sm:text-base sm:leading-8"
        >
          I'm an MCA student and Full Stack Developer with experience at
          Maxgen Technologies and currently working at BrainyBeam
          Technologies Pvt. Ltd. I build responsive, user-focused web
          applications using the MERN stack, REST APIs, authentication,
          and modern frontend technologies. I'm also exploring Artificial
          Intelligence and Machine Learning to create intelligent software
          solutions.
        </motion.p>

        {/* Technology Tags */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-8 flex max-w-3xl flex-wrap justify-center gap-2.5"
        >
          {technologies.map((technology) => (
            <span
              key={technology}
              className="rounded-full border border-gray-200 bg-gray-100/80 px-4 py-2 text-xs font-medium text-gray-700 transition-all duration-300 hover:border-red-500 hover:bg-red-500/10 hover:text-red-500 dark:border-white/10 dark:bg-white/5 dark:text-gray-300 dark:hover:border-red-500 dark:hover:bg-red-500/10 dark:hover:text-red-400 sm:text-sm"
            >
              {technology}
            </span>
          ))}
        </motion.div>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          {/* Contact Button */}
          <a
            href="#contact"
            className="group flex items-center gap-3 rounded-full bg-red-600 px-8 py-3.5 text-sm font-semibold text-white shadow-lg shadow-red-600/20 transition-all duration-300 hover:-translate-y-1 hover:bg-red-700 hover:shadow-red-600/40"
          >
            Contact Me

            <ArrowRight
              size={18}
              strokeWidth={2.2}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </a>

          {/* Resume Button */}
          <a
            href="/resume.pdf"
            download
            className="group flex items-center gap-3 rounded-full border border-gray-300 bg-white px-8 py-3.5 text-sm font-semibold text-gray-800 transition-all duration-300 hover:-translate-y-1 hover:border-red-500 hover:text-red-600 dark:border-white/20 dark:bg-white/5 dark:text-white dark:hover:border-red-500 dark:hover:text-red-400"
          >
            Download Resume

            <Download
              size={18}
              strokeWidth={2}
              className="transition-transform duration-300 group-hover:translate-y-0.5"
            />
          </a>
        </motion.div>

        {/* Professional Highlights */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="mt-14 grid w-full max-w-2xl grid-cols-1 gap-4 sm:grid-cols-3"
        >
          {[
            {
              title: "MCA Student",
              subtitle: "Postgraduate Education",
            },
            {
              title: "MERN Stack",
              subtitle: "Full Stack Development",
            },
            {
              title: "AI & ML",
              subtitle: "Exploring Intelligent Solutions",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="rounded-2xl border border-gray-200 bg-white/60 p-4 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-red-500/40 dark:border-white/10 dark:bg-white/[0.03]"
            >
              <h3 className="text-sm font-bold text-gray-900 dark:text-white">
                {item.title}
              </h3>

              <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">
                {item.subtitle}
              </p>
            </div>
          ))}
        </motion.div>

        {/* Scroll Indicator */}
        <motion.a
          href="#about"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, y: [0, 8, 0] }}
          transition={{
            opacity: { delay: 1 },
            y: { duration: 1.8, repeat: Infinity },
          }}
          className="mt-12 flex flex-col items-center gap-2 text-xs font-medium uppercase tracking-widest text-gray-400 transition-colors hover:text-red-500"
        >
          Scroll to explore

          <span className="h-8 w-5 rounded-full border-2 border-current p-1">
            <span className="mx-auto block h-2 w-1 rounded-full bg-current" />
          </span>
        </motion.a>
      </div>
    </section>
  );
};

export default Header;
