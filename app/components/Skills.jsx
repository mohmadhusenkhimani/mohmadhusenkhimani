"use client";

import { skillsData } from "@/assets/assets";
import Image from "next/image";
import React from "react";
import { motion } from "motion/react";
import {
  Code2,
  FolderKanban,
  Award,
  BriefcaseBusiness,
} from "lucide-react";

const statistics = [
  {
    number: "15+",
    title: "Technologies",
    icon: Code2,
  },
  {
    number: "10+",
    title: "Projects",
    icon: FolderKanban,
  },
  {
    number: "6+",
    title: "Certifications",
    icon: Award,
  },
  {
    number: "6 Months",
    title: "MERN Internship",
    icon: BriefcaseBusiness,
  },
];

const Skills = ({ isDarkMode }) => {
  return (
    <section
      id="skills"
      aria-labelledby="skills-heading"
      className="relative w-full scroll-mt-24 overflow-hidden bg-white px-6 py-24 text-gray-900 transition-colors duration-300 dark:bg-[#080d16] dark:text-white sm:px-8 lg:px-12"
    >
      {/* Background Effects */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute left-0 top-20 h-72 w-72 rounded-full bg-red-500/5 blur-[120px]" />

        <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-red-600/5 blur-[130px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl">

        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: -25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="mx-auto max-w-3xl text-center"
        >
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-red-600 dark:text-red-400 sm:text-base">
            My Technical Expertise
          </p>

          <h2
            id="skills-heading"
            className="mt-3 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl"
          >
            Skills &{" "}
            <span className="text-red-600 dark:text-red-500">
              Technologies
            </span>
          </h2>

          <div className="mx-auto mt-5 h-1 w-20 rounded-full bg-red-600" />

          <p className="mt-6 text-sm leading-8 text-gray-600 dark:text-gray-400 sm:text-base">
            I specialize in building modern full-stack web applications
            using the MERN Stack and related JavaScript technologies.
            My technical expertise includes frontend development,
            backend development, REST APIs, databases, authentication,
            and responsive UI development. I am also expanding my
            knowledge of Artificial Intelligence and Machine Learning.
          </p>
        </motion.div>

        {/* Professional Statistics */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="mt-14 mb-20 grid grid-cols-2 gap-4 sm:gap-6 md:grid-cols-4"
        >
          {statistics.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.article
                key={item.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ y: -7 }}
                transition={{
                  duration: 0.4,
                  delay: index * 0.1,
                }}
                viewport={{ once: true }}
                className="group rounded-2xl border border-gray-200 bg-white/70 p-5 text-center shadow-sm backdrop-blur-md transition-all duration-300 hover:border-red-500/40 hover:shadow-xl hover:shadow-red-500/5 dark:border-white/10 dark:bg-white/[0.03] sm:p-7"
              >
                <div className="mx-auto flex h-11 w-11 items-center justify-center rounded-xl bg-red-500/10 text-red-600 transition-all duration-300 group-hover:bg-red-600 group-hover:text-white dark:text-red-400">
                  <Icon size={21} />
                </div>

                <h3 className="mt-4 text-2xl font-bold text-gray-900 dark:text-white sm:text-3xl">
                  {item.number}
                </h3>

                <p className="mt-2 text-xs font-medium text-gray-500 dark:text-gray-400 sm:text-sm">
                  {item.title}
                </p>
              </motion.article>
            );
          })}
        </motion.div>

        {/* Skills Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-9"
        >
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white sm:text-3xl">
            My Development Skills
          </h3>

          <p className="mt-2 text-sm leading-7 text-gray-500 dark:text-gray-400 sm:text-base">
            Technologies and tools I use to develop modern software
            applications.
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid gap-6 sm:grid-cols-2 sm:gap-7 lg:grid-cols-3 xl:grid-cols-4">
          {skillsData.map(
            ({ icon, icon_dark, title, description }, index) => (
              <motion.article
                key={`${title}-${index}`}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{
                  y: -8,
                  scale: 1.02,
                }}
                transition={{
                  duration: 0.5,
                  delay: (index % 4) * 0.08,
                }}
                viewport={{ once: true, amount: 0.15 }}
                className="group relative overflow-hidden rounded-2xl border border-gray-200 bg-white/80 p-7 shadow-sm backdrop-blur-md transition-all duration-300 hover:border-red-500/50 hover:shadow-xl hover:shadow-red-500/5 dark:border-white/10 dark:bg-white/[0.03] sm:p-8"
              >
                {/* Top Hover Accent */}
                <div
                  aria-hidden="true"
                  className="absolute left-0 top-0 h-1 w-0 bg-red-600 transition-all duration-500 group-hover:w-full"
                />

                {/* Skill Icon */}
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-gray-200 bg-gray-100 transition-all duration-300 group-hover:border-red-500/30 group-hover:bg-red-500/10 dark:border-white/10 dark:bg-white/5">
                  <Image
                    src={isDarkMode ? icon_dark : icon}
                    alt={`${title} icon`}
                    width={40}
                    height={40}
                    className="h-10 w-10 object-contain transition-transform duration-300 group-hover:scale-110"
                  />
                </div>

                {/* Skill Title */}
                <h3 className="mt-6 text-xl font-bold text-gray-900 transition-colors duration-300 group-hover:text-red-600 dark:text-white dark:group-hover:text-red-400">
                  {title}
                </h3>

                {/* Skill Description */}
                <p className="mt-4 text-sm leading-7 text-gray-600 dark:text-gray-400">
                  {description}
                </p>

                {/* Bottom Accent */}
                <div className="mt-6 h-1 w-10 rounded-full bg-red-600 transition-all duration-300 group-hover:w-16" />
              </motion.article>
            )
          )}
        </div>

        {/* Technical Keywords */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="mt-16 rounded-2xl border border-gray-200 bg-gray-50/80 p-6 text-center dark:border-white/10 dark:bg-white/[0.03] sm:p-8"
        >
          <h3 className="text-lg font-bold text-gray-900 dark:text-white">
            Technical Technologies & Tools
          </h3>

          <p className="mx-auto mt-4 max-w-5xl text-sm leading-8 text-gray-600 dark:text-gray-400">
            HTML5 · CSS3 · JavaScript ES6+ · React.js · Redux ·
            React Router · Bootstrap · Tailwind CSS · Node.js ·
            Express.js · MongoDB · Mongoose · MySQL · SQL ·
            REST APIs · JWT Authentication · Git · GitHub ·
            Python · Pandas · NumPy · Scikit-learn · AI Integration
          </p>
        </motion.div>

        {/* Closing Statement */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <p className="text-sm font-medium leading-7 text-gray-500 dark:text-gray-400 sm:text-base">
            Continuously learning, improving, and building better software
            through practical development and new technologies.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
