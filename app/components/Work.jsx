"use client";

import { assets, workData } from "@/assets/assets";
import Image from "next/image";
import React from "react";
import { motion } from "motion/react";
import {
  ArrowUpRight,
  Github,
  FolderKanban,
  BriefcaseBusiness,
  Award,
  Code2,
  CheckCircle2,
} from "lucide-react";

const statistics = [
  {
    number: "10+",
    title: "Projects Completed",
    icon: FolderKanban,
  },
  {
    number: "6 Months",
    title: "MERN Internship",
    icon: BriefcaseBusiness,
  },
  {
    number: "6+",
    title: "Certifications",
    icon: Award,
  },
  {
    number: "15+",
    title: "Technologies Used",
    icon: Code2,
  },
];

const technologyHighlights = [
  "MERN Stack",
  "React.js",
  "Node.js",
  "Express.js",
  "MongoDB",
  "JavaScript",
  "Python",
  "AI/ML",
  "REST APIs",
  "Git & GitHub",
];

const Work = ({ isDarkMode }) => {
  return (
    <section
      id="work"
      aria-labelledby="work-heading"
      className="w-full px-6 sm:px-8 lg:px-12 py-24 scroll-mt-20 bg-white dark:bg-[#080d16] transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto">

        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="text-sm sm:text-base font-semibold uppercase tracking-[0.25em] text-red-600 dark:text-red-500">
            Featured Projects
          </p>

          <h2
            id="work-heading"
            className="text-4xl sm:text-5xl lg:text-6xl font-bold mt-4 text-gray-900 dark:text-white tracking-tight"
          >
            My Latest{" "}
            <span className="text-red-600 dark:text-red-500">Work.</span>
          </h2>

          <p className="max-w-3xl mx-auto mt-6 text-gray-600 dark:text-gray-400 leading-8 text-base sm:text-lg">
            Explore my selected software development projects, featuring
            full-stack web applications, backend development, REST APIs,
            database management, authentication, responsive interfaces,
            and AI-powered solutions.
          </p>
        </motion.div>

        {/* Portfolio Statistics */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mt-16 mb-20"
        >
          {statistics.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.article
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ y: -7 }}
                transition={{
                  duration: 0.4,
                  delay: index * 0.1,
                }}
                viewport={{ once: true }}
                className="group rounded-2xl border border-gray-200 dark:border-white/10 bg-gray-50 dark:bg-[#111a28] p-5 sm:p-7 text-center shadow-sm hover:shadow-xl hover:shadow-red-500/5 hover:border-red-500/40 transition-all duration-300"
              >
                <div className="w-12 h-12 mx-auto rounded-xl flex items-center justify-center bg-red-50 dark:bg-red-500/10 text-red-600 dark:text-red-400 group-hover:bg-red-600 group-hover:text-white transition-colors duration-300">
                  <Icon size={23} />
                </div>

                <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mt-4">
                  {item.number}
                </h3>

                <p className="mt-2 text-sm sm:text-base text-gray-600 dark:text-gray-400">
                  {item.title}
                </p>
              </motion.article>
            );
          })}
        </motion.div>

        {/* Projects Heading */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-10">
          <div>
            <p className="text-red-600 dark:text-red-500 font-semibold text-sm uppercase tracking-widest">
              Selected Work
            </p>

            <h3 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mt-2">
              Projects I've Built
            </h3>
          </div>

          <p className="text-sm text-gray-500 dark:text-gray-400 max-w-sm">
            Practical projects demonstrating my development skills and
            problem-solving approach.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {workData.map((project, index) => (
            <motion.article
              key={`${project.title}-${index}`}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -8 }}
              transition={{
                duration: 0.5,
                delay: index * 0.08,
              }}
              viewport={{ once: true }}
              className="group overflow-hidden rounded-2xl bg-white dark:bg-[#111a28] border border-gray-200 dark:border-white/10 shadow-md hover:shadow-2xl hover:shadow-red-500/5 hover:border-red-500/40 transition-all duration-500"
            >
              {/* Project Image */}
              <div className="relative overflow-hidden h-60 bg-gray-100 dark:bg-[#172131]">
                <Image
                  src={project.bgImage}
                  alt={`${project.title} project preview`}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                />

                <div
                  className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"
                  aria-hidden="true"
                />

                {/* Project Category */}
                <div className="absolute top-4 left-4">
                  <span className="px-4 py-2 rounded-full bg-red-600 text-white text-xs font-semibold shadow-lg">
                    {project.category || "Full Stack"}
                  </span>
                </div>

                {/* Image Link */}
                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Open ${project.title} live demo`}
                    className="absolute bottom-4 right-4 w-11 h-11 flex items-center justify-center rounded-full bg-white text-black hover:bg-red-600 hover:text-white transition-colors duration-300"
                  >
                    <ArrowUpRight size={21} />
                  </a>
                )}
              </div>

              {/* Project Content */}
              <div className="p-6">

                {/* Project Title */}
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white group-hover:text-red-600 dark:group-hover:text-red-400 transition-colors duration-300">
                  {project.title}
                </h3>

                {/* Project Description */}
                <p className="mt-3 text-sm sm:text-base text-gray-600 dark:text-gray-400 leading-7">
                  {project.description}
                </p>

                {/* Technology Stack */}
                <div className="mt-6">
                  <h4 className="text-xs font-bold uppercase tracking-widest text-gray-500 dark:text-gray-400">
                    Technology Stack
                  </h4>

                  <div
                    className="flex flex-wrap gap-2 mt-3"
                    aria-label={`${project.title} technology stack`}
                  >
                    {(project.techStack || [
                      "React.js",
                      "Node.js",
                      "MongoDB",
                    ]).map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1.5 rounded-lg bg-gray-100 dark:bg-[#1b2738] border border-gray-200 dark:border-white/5 text-gray-700 dark:text-gray-300 text-xs sm:text-sm font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Key Features */}
                <div className="mt-6">
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-3">
                    Key Features
                  </h4>

                  <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                    {(project.features || [
                      "Responsive user interface",
                      "REST API integration",
                      "Authentication and database",
                    ]).map((feature) => (
                      <li
                        key={feature}
                        className="flex items-start gap-2 leading-6"
                      >
                        <CheckCircle2
                          size={17}
                          className="text-red-500 mt-0.5 shrink-0"
                        />

                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Project Links */}
                {(project.link || project.github) && (
                  <div className="flex flex-col sm:flex-row gap-3 mt-8">

                    {project.link && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`View live demo of ${project.title}`}
                        className="flex-1 inline-flex items-center justify-center gap-2 bg-red-600 hover:bg-red-700 text-white py-3 rounded-xl font-semibold text-sm transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-2"
                      >
                        Live Demo
                        <ArrowUpRight size={17} />
                      </a>
                    )}

                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`View ${project.title} source code on GitHub`}
                        className="flex-1 inline-flex items-center justify-center gap-2 border border-gray-300 dark:border-white/15 text-gray-800 dark:text-white py-3 rounded-xl font-semibold text-sm hover:bg-gray-100 dark:hover:bg-[#1b2738] transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-2"
                      >
                        <Github size={17} />
                        GitHub
                      </a>
                    )}
                  </div>
                )}
              </div>
            </motion.article>
          ))}
        </div>

        {/* More Projects / GitHub */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="mt-24"
        >
          <div className="relative overflow-hidden max-w-5xl mx-auto rounded-3xl border border-gray-200 dark:border-white/10 bg-gray-50 dark:bg-[#111a28] p-8 sm:p-12 shadow-xl text-center">

            {/* Decorative Background */}
            <div className="absolute -top-24 -right-20 w-64 h-64 rounded-full bg-red-500/10 blur-3xl pointer-events-none" />
            <div className="absolute -bottom-24 -left-20 w-64 h-64 rounded-full bg-red-500/10 blur-3xl pointer-events-none" />

            <div className="relative z-10">
              <div className="w-16 h-16 mx-auto rounded-2xl flex items-center justify-center bg-red-50 dark:bg-red-500/10 text-red-600 dark:text-red-400">
                <Github size={32} />
              </div>

              <h3 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mt-6">
                Want to See More?
              </h3>

              <p className="mt-5 text-gray-600 dark:text-gray-400 leading-8 max-w-2xl mx-auto">
                Explore more of my coding projects, university work,
                full-stack applications, AI experiments, and continuous
                software development journey on GitHub.
              </p>

              {/* Technology Highlights */}
              <div className="flex flex-wrap justify-center gap-3 mt-8">
                {technologyHighlights.map((item) => (
                  <span
                    key={item}
                    className="px-4 py-2 rounded-full bg-white dark:bg-[#1b2738] border border-gray-200 dark:border-white/10 text-sm font-medium text-gray-700 dark:text-gray-300 hover:border-red-500/50 hover:text-red-600 dark:hover:text-red-400 transition-colors duration-300"
                  >
                    {item}
                  </span>
                ))}
              </div>

              {/* GitHub CTA */}
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
                href="https://github.com/mohmadhusenkhimani"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit GitHub profile"
                className="inline-flex items-center gap-3 mt-10 px-8 py-4 rounded-full bg-red-600 hover:bg-red-700 text-white font-semibold shadow-lg shadow-red-600/20 transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-2"
              >
                Visit My GitHub
                <ArrowUpRight size={19} />
              </motion.a>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Work;
