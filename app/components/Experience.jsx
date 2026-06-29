import React from "react";
import { motion } from "motion/react";
import { Briefcase, Calendar, MapPin } from "lucide-react";

const experienceData = [
  {
    role: "MERN Stack Developer Intern",
    company: "Maxgen Technologies Pvt. Ltd.",
    type: "Internship",
    duration: "Jan 2026 - Present",
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
      "Developing scalable full-stack web applications using the MERN Stack (MongoDB, Express.js, React.js, and Node.js).",
      "Designing responsive and modern user interfaces with React.js, Tailwind CSS, and reusable components.",
      "Building secure REST APIs, authentication systems using JWT, and backend business logic.",
      "Managing MongoDB databases, CRUD operations, and optimized data models for real-world applications.",
      "Collaborating with mentors and developers while following clean coding standards and Git-based workflows.",
      "Debugging applications, improving performance, and solving real-world software development challenges.",
    ],
  },
];

const Experience = () => {
  return (
    <section
      id="experience"
      className="w-full px-6 md:px-[12%] py-20 scroll-mt-20"
    >
      <motion.h4
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center text-lg font-Ovo mb-2"
      >
        My Journey
      </motion.h4>

      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="text-center text-5xl font-Ovo mb-16"
      >
        Work Experience
      </motion.h2>

      <div className="relative">

        {/* Timeline */}
        <div className="absolute left-5 md:left-1/2 md:-translate-x-1/2 h-full w-[3px] bg-gray-300 dark:bg-gray-700"></div>

        {experienceData.map((exp, index) => (
          <div
            key={index}
            className={`relative flex mb-16 ${
              index % 2 === 0
                ? "md:justify-start"
                : "md:justify-end"
            }`}
          >
            {/* Timeline Icon */}
            <div
              className="absolute left-5 md:left-1/2 md:-translate-x-1/2
              w-12 h-12 rounded-full bg-white dark:bg-[#1f1f2f]
              border border-gray-300 dark:border-gray-600
              shadow-lg flex items-center justify-center z-10"
            >
              <Briefcase size={22} />
            </div>

            {/* Card */}
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
                duration: 0.6,
              }}
              viewport={{ once: true }}
              className="ml-16 md:ml-0 md:w-[45%]
              bg-white dark:bg-[#1f1f2f]
              border border-gray-200 dark:border-gray-700
              rounded-2xl shadow-lg p-8
              hover:shadow-2xl transition-all duration-300"
            >
              <h3 className="text-2xl font-bold">
                {exp.role}
              </h3>

              <p className="mt-1 text-lg font-semibold text-indigo-600 dark:text-indigo-400">
                {exp.company}
              </p>

              <div className="flex flex-wrap gap-4 text-gray-500 dark:text-gray-400 text-sm mt-4">

                <div className="flex items-center gap-2">
                  <Calendar size={16} />
                  {exp.duration}
                </div>

                <div className="flex items-center gap-2">
                  <MapPin size={16} />
                  {exp.location}
                </div>

                <div className="flex items-center gap-2">
                  💼 {exp.type}
                </div>

              </div>

              {/* Tech Stack */}

              <div className="flex flex-wrap gap-2 mt-6">
                {exp.technologies.map((tech, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 rounded-full text-sm
                    bg-indigo-100 text-indigo-700
                    dark:bg-indigo-900/40
                    dark:text-indigo-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Responsibilities */}

              <ul className="mt-6 space-y-3">
                {exp.points.map((point, i) => (
                  <li
                    key={i}
                    className="flex gap-3 text-gray-700 dark:text-gray-300"
                  >
                    <span className="text-green-500 mt-1">✔</span>

                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;