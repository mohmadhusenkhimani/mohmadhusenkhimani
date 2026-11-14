"use client";

import { assets, infoList } from "@/assets/assets";
import Image from "next/image";
import { motion } from "motion/react";

const About = ({ isDarkMode }) => {
  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="relative w-full scroll-mt-24 overflow-hidden bg-white px-6 py-24 text-gray-900 transition-colors duration-300 dark:bg-[#080d16] dark:text-white sm:px-10 lg:px-16 xl:px-24"
    >
      {/* Background Effects */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute left-0 top-40 h-72 w-72 rounded-full bg-red-500/5 blur-[120px]" />
        <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-red-600/5 blur-[120px]" />
      </div>

      {/* Section Heading */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="relative z-10 mx-auto max-w-3xl text-center"
      >
        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-red-600 dark:text-red-400 sm:text-base">
          Get To Know Me
        </p>

        <h2
          id="about-heading"
          className="mt-3 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl"
        >
          About <span className="text-red-600 dark:text-red-500">Me</span>
        </h2>

        <div className="mx-auto mt-5 h-1 w-20 rounded-full bg-red-600" />

        <p className="mt-6 text-sm leading-7 text-gray-600 dark:text-gray-400 sm:text-base">
          Discover my background, development experience, technical interests,
          and passion for building meaningful software solutions.
        </p>
      </motion.div>

      {/* Main About Content */}
      <div className="relative z-10 mx-auto mt-16 flex max-w-7xl flex-col items-center gap-12 lg:flex-row lg:items-start lg:gap-16">

        {/* Profile Image */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex w-full shrink-0 justify-center lg:w-[35%]"
        >
          <div className="group relative max-w-[400px]">
            {/* Decorative Background */}
            <div className="absolute -inset-3 rounded-3xl border border-red-500/20 transition-transform duration-500 group-hover:rotate-2" />

            <div className="relative overflow-hidden rounded-3xl border border-gray-200 bg-gray-100/50 p-2 shadow-xl shadow-gray-900/5 dark:border-white/10 dark:bg-white/[0.03] dark:shadow-black/20">
              <Image
                src={assets.newhalfphoto}
                alt="Mohmadhusen Khimani - Full Stack MERN Developer"
                width={600}
                height={700}
                className="h-auto w-full rounded-2xl object-contain transition-transform duration-700 group-hover:scale-[1.03]"
                priority
              />
            </div>

            {/* Image Accent */}
            <div className="absolute -bottom-4 -right-4 -z-10 h-24 w-24 rounded-2xl bg-red-600/20 blur-xl" />
          </div>
        </motion.div>

        {/* Professional Summary */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="w-full flex-1"
        >
          {/* Introduction */}
          <div className="space-y-5 text-base leading-8 text-gray-600 dark:text-gray-300 md:text-lg">

            <p>
              I'm{" "}
              <strong className="font-semibold text-gray-900 dark:text-white">
                Mohmadhusen Khimani
              </strong>
              , an MCA student at{" "}
              <strong className="font-semibold text-gray-900 dark:text-white">
                LJ University
              </strong>{" "}
              and a{" "}
              <strong className="font-semibold text-red-600 dark:text-red-400">
                Full Stack MERN Developer
              </strong>
              . I'm passionate about software development and building
              modern, responsive, and user-friendly web applications.
            </p>

            <p>
              My core development technologies include{" "}
              <strong className="font-semibold text-gray-900 dark:text-white">
                React.js, Node.js, Express.js, MongoDB, and JavaScript
              </strong>
              . I work with REST APIs, authentication, database operations,
              responsive UI development, and reusable components to develop
              complete full-stack applications.
            </p>

            <p>
              I completed a{" "}
              <strong className="font-semibold text-gray-900 dark:text-white">
                6-month MERN Stack Developer internship at Maxgen Technologies
              </strong>
              , where I gained practical experience in frontend and backend
              development, API integration, authentication, database
              management, and Git-based development workflows.
            </p>

            <p>
              Currently, I'm working full-time at{" "}
              <strong className="font-semibold text-red-600 dark:text-red-400">
                BrainyBeam Technologies Pvt. Ltd.
              </strong>
              , continuing to develop my professional experience and
              strengthen my software development skills.
            </p>

            <p>
              Beyond MERN Stack development, I'm expanding my knowledge of{" "}
              <strong className="font-semibold text-gray-900 dark:text-white">
                Artificial Intelligence, Machine Learning, Data Structures
                & Algorithms, and Software Engineering
              </strong>
              . My goal is to build scalable applications and intelligent
              software solutions that solve real-world problems.
            </p>
          </div>

          {/* Professional Highlights */}
          <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-3">
            {infoList.map(
              ({ icon, iconDark, title, description }, index) => (
                <motion.article
                  key={`${title}-${index}`}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  whileHover={{ y: -8, scale: 1.02 }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.12,
                  }}
                  viewport={{ once: true }}
                  className="group rounded-2xl border border-gray-200 bg-white/70 p-6 shadow-sm backdrop-blur-md transition-all duration-300 hover:border-red-500/50 hover:shadow-xl hover:shadow-red-500/5 dark:border-white/10 dark:bg-white/[0.03] dark:hover:border-red-500/40"
                >
                  {/* Card Icon */}
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-gray-200 bg-gray-100 transition-all duration-300 group-hover:border-red-500/30 group-hover:bg-red-500/10 dark:border-white/10 dark:bg-white/5">
                    <Image
                      src={isDarkMode ? iconDark : icon}
                      alt=""
                      width={32}
                      height={32}
                      className="h-8 w-8 object-contain"
                    />
                  </div>

                  {/* Card Content */}
                  <h3 className="mt-5 text-lg font-bold text-gray-900 transition-colors duration-300 group-hover:text-red-600 dark:text-white dark:group-hover:text-red-400">
                    {title}
                  </h3>

                  <p className="mt-3 whitespace-pre-line text-sm leading-7 text-gray-600 dark:text-gray-400">
                    {description}
                  </p>

                  {/* Bottom Accent */}
                  <div className="mt-5 h-1 w-10 rounded-full bg-red-600 transition-all duration-300 group-hover:w-16" />
                </motion.article>
              )
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
