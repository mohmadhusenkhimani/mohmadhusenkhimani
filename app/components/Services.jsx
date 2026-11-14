"use client";

import React from "react";
import { motion } from "motion/react";
import {
  ArrowUpRight,
  Code2,
  Monitor,
  Server,
  Database,
  ShieldCheck,
  BrainCircuit,
  Layers3,
} from "lucide-react";

const services = [
  {
    title: "Full Stack Web Development",
    description:
      "Building complete, responsive web applications using MongoDB, Express.js, React.js, and Node.js with frontend and backend integration.",
    icon: Code2,
    technologies: ["React.js", "Node.js", "Express.js", "MongoDB"],
  },
  {
    title: "Frontend Development",
    description:
      "Developing responsive, interactive, and user-friendly web interfaces using React.js, JavaScript, Tailwind CSS, and reusable components.",
    icon: Monitor,
    technologies: ["React.js", "JavaScript", "Tailwind CSS", "Redux"],
  },
  {
    title: "Backend Development",
    description:
      "Creating backend functionality, server-side logic, CRUD operations, and scalable application structures using Node.js and Express.js.",
    icon: Server,
    technologies: ["Node.js", "Express.js", "JavaScript", "Mongoose"],
  },
  {
    title: "REST API Development",
    description:
      "Building and integrating REST APIs to connect frontend applications with backend services, manage data, and support application functionality.",
    icon: Layers3,
    technologies: ["REST APIs", "Express.js", "Axios", "JSON"],
  },
  {
    title: "Database Management",
    description:
      "Working with database structures, data models, CRUD operations, queries, and data management for web applications.",
    icon: Database,
    technologies: ["MongoDB", "Mongoose", "MySQL", "SQL"],
  },
  {
    title: "Authentication & Security",
    description:
      "Implementing user authentication, protected routes, password hashing, and secure access workflows for web applications.",
    icon: ShieldCheck,
    technologies: ["JWT", "Firebase Auth", "bcrypt", "Authorization"],
  },
  {
    title: "AI API Integration",
    description:
      "Integrating AI services into web applications to build intelligent features such as chatbots, recommendations, and text-based insights.",
    icon: BrainCircuit,
    technologies: ["Gemini API", "Groq API", "LLM Integration", "Python"],
  },
];

const Services = () => {
  return (
    <section
      id="services"
      aria-labelledby="services-heading"
      className="relative w-full px-6 sm:px-8 lg:px-12 py-24 scroll-mt-20 overflow-hidden bg-white dark:bg-[#080d16] transition-colors duration-300"
    >
      {/* Background Decorations */}
      <div
        className="absolute top-10 right-0 w-72 h-72 rounded-full bg-red-500/5 dark:bg-red-500/10 blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      <div
        className="absolute bottom-0 left-0 w-72 h-72 rounded-full bg-red-500/5 dark:bg-red-500/10 blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="text-sm sm:text-base font-semibold uppercase tracking-[0.25em] text-red-600 dark:text-red-500">
            What I Can Do
          </p>

          <h2
            id="services-heading"
            className="text-4xl sm:text-5xl lg:text-6xl font-bold mt-4 text-gray-900 dark:text-white tracking-tight"
          >
            My Development{" "}
            <span className="text-red-600 dark:text-red-500">
              Services.
            </span>
          </h2>

          <p className="max-w-3xl mx-auto mt-6 text-gray-600 dark:text-gray-400 leading-8 text-base sm:text-lg">
            I focus on full-stack web development, frontend and backend
            engineering, database management, API integration, authentication,
            and AI-powered features using modern development technologies.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mt-16">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <motion.article
                key={service.title}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ y: -8 }}
                transition={{
                  duration: 0.5,
                  delay: (index % 3) * 0.1,
                }}
                viewport={{ once: true }}
                className="group relative overflow-hidden rounded-2xl border border-gray-200 dark:border-white/10 bg-gray-50 dark:bg-[#111a28] p-7 sm:p-8 shadow-sm hover:shadow-xl hover:shadow-red-500/5 hover:border-red-500/40 transition-all duration-300"
              >
                {/* Top Accent */}
                <div className="absolute top-0 left-0 h-1 w-0 bg-red-600 group-hover:w-full transition-all duration-500" />

                {/* Decorative Number */}
                <span className="absolute top-6 right-7 text-5xl font-bold text-gray-200 dark:text-white/[0.04] select-none">
                  {String(index + 1).padStart(2, "0")}
                </span>

                {/* Service Icon */}
                <div className="relative w-16 h-16 rounded-2xl bg-red-50 dark:bg-red-500/10 flex items-center justify-center text-red-600 dark:text-red-400 group-hover:bg-red-600 group-hover:text-white transition-colors duration-300">
                  <Icon size={30} strokeWidth={1.8} />
                </div>

                {/* Service Content */}
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mt-7 group-hover:text-red-600 dark:group-hover:text-red-400 transition-colors duration-300">
                  {service.title}
                </h3>

                <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 leading-7 mt-4">
                  {service.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mt-6">
                  {service.technologies.map((technology) => (
                    <span
                      key={technology}
                      className="px-3 py-1.5 rounded-full text-xs font-medium bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 text-gray-600 dark:text-gray-300"
                    >
                      {technology}
                    </span>
                  ))}
                </div>

                {/* Bottom Accent */}
                <div className="absolute bottom-0 left-0 w-0 h-[2px] bg-red-600 group-hover:w-full transition-all duration-500" />
              </motion.article>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <p className="text-gray-600 dark:text-gray-400 text-base">
            Have a web development project or software idea?
          </p>

          <a
            href="#contact"
            className="inline-flex items-center gap-3 mt-5 px-8 py-4 rounded-full bg-red-600 hover:bg-red-700 text-white font-semibold shadow-lg shadow-red-600/20 transition-all duration-300 hover:-translate-y-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-2"
          >
            Let's Discuss Your Project
            <ArrowUpRight size={19} />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
