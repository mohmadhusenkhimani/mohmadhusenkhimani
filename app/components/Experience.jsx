"use client";

import React from "react";
import { motion } from "motion/react";
import {
  Briefcase,
  Calendar,
  MapPin,
  CheckCircle2,
  Code2,
} from "lucide-react";

const experienceData = [
  {
    role: "MERN Stack Developer",
    company: "BrainyBeam Technologies Pvt. Ltd.",
    type: "Full-Time",
    duration: "Nov 2026 - Present",
    location: "Ahmedabad, Gujarat, India",
    technologies: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "JavaScript",
      "Tailwind CSS",
      "REST APIs",
      "JWT",
      "Git",
    ],
    points: [
      "Developing practical full-stack web development skills using the MERN stack.",
      "Working with React.js to build responsive and reusable user interface components.",
      "Developing backend knowledge and functionality using Node.js and Express.js.",
      "Working with MongoDB for database management and CRUD operations.",
      "Understanding REST API development, authentication, and frontend-backend integration.",
      "Improving problem-solving, debugging, and professional software development practices.",
    ],
  },
  {
    role: "MERN Stack Developer Intern",
    company: "Maxgen Technologies Pvt. Ltd.",
    type: "Internship",
    duration: "Jan 6, 2026 - Jul 6, 2026",
    location: "Ahmedabad, Gujarat, India",
    technologies: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "JavaScript",
      "Tailwind CSS",
      "REST APIs",
      "JWT",
      "Git",
    ],
    points: [
      "Developed and contributed to full-stack web applications using MongoDB, Express.js, React.js, and Node.js (MERN).",
      "Designed responsive and modern user interfaces using React.js, Tailwind CSS, and reusable components.",
      "Built REST APIs, JWT-based authentication systems, and backend business logic.",
      "Managed MongoDB databases, CRUD operations, and data models for web applications.",
      "Collaborated with mentors and developers while following clean coding standards and Git-based workflows.",
      "Debugged applications and worked on solving software development challenges.",
    ],
  },
];

const Experience = () => {
  return (
    <section
      id="experience"
      aria-labelledby="experience-heading"
      className="relative w-full scroll-mt-24 overflow-hidden bg-white px-6 py-24 text-gray-900 transition-colors duration-300 dark:bg-[#080d16] dark:text-white md:px-[12%]"
    >
      {/* Background Effects */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute left-0 top-40 h-72 w-72 rounded-full bg-red-500/5 blur-[120px]" />
        <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-red-600/5 blur-[120px]" />
      </div>

      {/* Section Heading */}
      <div className="relative z-10 mx-auto mb-20 max-w-3xl text-center">
        <motion.p
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-sm font-semibold uppercase tracking-[0.25em] text-red-600 dark:text-red-400 sm:text-base"
        >
          My Professional Journey
        </motion.p>

        <motion.h2
          id="experience-heading"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="mt-3 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl"
        >
          Work <span className="text-red-600 dark:text-red-500">Experience</span>
        </motion.h2>

        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: 80 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="mx-auto mt-5 h-1 rounded-full bg-red-600"
        />

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-6 text-sm leading-7 text-gray-600 dark:text-gray-400 sm:text-base"
        >
          My professional experience, practical development journey, and
          technologies I've worked with as a Full Stack MERN Developer.
        </motion.p>
      </div>

      {/* Experience Timeline */}
      <div className="relative z-10 mx-auto max-w-6xl">

        {/* Timeline Line */}
        <div
          aria-hidden="true"
          className="absolute bottom-0 left-5 top-0 w-[2px] bg-gray-200 dark:bg-gray-700 md:left-1/2 md:-translate-x-1/2"
        />

        {experienceData.map((exp, index) => (
          <article
            key={`${exp.company}-${exp.role}`}
            className={`relative mb-16 flex last:mb-0 ${
              index % 2 === 0
                ? "md:justify-start"
                : "md:justify-end"
            }`}
          >
            {/* Timeline Icon */}
            <div
              aria-hidden="true"
              className="absolute left-5 top-8 z-20 flex h-11 w-11 -translate-x-1/2 items-center justify-center rounded-full border-2 border-red-500 bg-white text-red-600 shadow-lg shadow-red-500/10 dark:bg-[#111827] dark:text-red-400 md:left-1/2 md:h-12 md:w-12"
            >
              <Briefcase size={20} />
            </div>

            {/* Experience Card */}
            <motion.div
              initial={{
                opacity: 0,
                x: index % 2 === 0 ? -60 : 60,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              transition={{
                duration: 0.7,
                ease: "easeOut",
              }}
              viewport={{ once: true, amount: 0.15 }}
              className="ml-14 w-[calc(100%-3.5rem)] rounded-3xl border border-gray-200 bg-white/80 p-6 shadow-lg shadow-gray-900/5 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-red-500/40 hover:shadow-xl hover:shadow-red-500/5 dark:border-white/10 dark:bg-white/[0.03] dark:shadow-black/20 sm:p-8 md:ml-0 md:w-[44%]"
            >
              {/* Experience Header */}
              <div className="flex flex-wrap items-start justify-between gap-3">
                <div className="flex items-center gap-2 text-sm font-semibold text-red-600 dark:text-red-400">
                  <Code2 size={17} />
                  Professional Experience
                </div>

                <span
                  className={`rounded-full px-3 py-1 text-xs font-semibold ${
                    exp.type === "Full-Time"
                      ? "border border-blue-500/20 bg-blue-500/10 text-blue-600 dark:text-blue-400"
                      : "border border-red-500/20 bg-red-500/10 text-red-600 dark:text-red-400"
                  }`}
                >
                  {exp.type}
                </span>
              </div>

              {/* Role */}
              <h3 className="mt-5 text-xl font-bold leading-snug text-gray-900 dark:text-white sm:text-2xl">
                {exp.role}
              </h3>

              {/* Company */}
              <p className="mt-2 text-base font-semibold text-red-600 dark:text-red-400 sm:text-lg">
                {exp.company}
              </p>

              {/* Experience Details */}
              <div className="mt-5 flex flex-col gap-3 text-sm text-gray-500 dark:text-gray-400">
                <div className="flex items-center gap-2">
                  <Calendar
                    size={16}
                    className="shrink-0 text-red-500"
                    aria-hidden="true"
                  />
                  <span>{exp.duration}</span>
                </div>

                <div className="flex items-center gap-2">
                  <MapPin
                    size={16}
                    className="shrink-0 text-red-500"
                    aria-hidden="true"
                  />
                  <span>{exp.location}</span>
                </div>
              </div>

              {/* Divider */}
              <div className="my-6 h-px bg-gray-200 dark:bg-white/10" />

              {/* Technology Stack */}
              <div>
                <h4 className="text-sm font-bold text-gray-900 dark:text-white">
                  Technologies & Tools
                </h4>

                <div
                  className="mt-4 flex flex-wrap gap-2"
                  aria-label="Technologies used"
                >
                  {exp.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full border border-gray-200 bg-gray-100 px-3 py-1.5 text-xs font-medium text-gray-700 transition-all duration-300 hover:border-red-500/40 hover:bg-red-500/10 hover:text-red-600 dark:border-white/10 dark:bg-white/5 dark:text-gray-300 dark:hover:text-red-400 sm:text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Responsibilities */}
              <div className="mt-7">
                <h4 className="text-sm font-bold text-gray-900 dark:text-white">
                  Key Responsibilities & Learning
                </h4>

                <ul className="mt-4 space-y-3">
                  {exp.points.map((point) => (
                    <li
                      key={point}
                      className="flex items-start gap-3 text-sm leading-7 text-gray-600 dark:text-gray-300"
                    >
                      <CheckCircle2
                        size={17}
                        className="mt-1 shrink-0 text-red-500"
                        aria-hidden="true"
                      />

                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Bottom Accent */}
              <div className="mt-7 h-1 w-12 rounded-full bg-red-600 transition-all duration-300 hover:w-20" />
            </motion.div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Experience;
