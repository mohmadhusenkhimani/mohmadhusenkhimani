import React from "react";
import { motion } from "motion/react";

const experienceData = [
  {
    role: "MERN Stack Developer Intern",
    company: "Maxgen Technologies",
    points: [
      "Developing full-stack web applications using MongoDB, Express.js, React.js, and Node.js.",
      "Building responsive user interfaces with React.js, Tailwind CSS, and modern JavaScript (ES6+).",
      "Designing RESTful APIs and integrating backend services with frontend applications.",
      "Working with MongoDB databases for data storage and management.",
      "Collaborating on real-world projects and improving debugging and problem-solving skills."
    ]
  }
];

const Experience = () => {
  return (
    <section id="experience" className="w-full px-6 md:px-[12%] py-16 scroll-mt-20">

      
            <motion.h4 
          initial={{y: -20, opacity: 0}}
          whileInView={{y: 0, opacity: 1}}
          transition={{delay: 0.3, duration: 0.5}}
          className='text-center mb-2 text-lg font-Ovo'>My Journey</motion.h4>
      
            <motion.h2 
          initial={{y: -20, opacity: 0}}
          whileInView={{y: 0, opacity: 1}}
          transition={{delay: 0.5, duration: 0.5}}
          className='text-center text-5xl font-Ovo mb-4'>Work Experience</motion.h2>

      <div className="relative">

        {/* Vertical Line */}
        <div className="absolute left-6 md:left-1/2 md:-translate-x-1/2 w-[3px] h-full bg-gray-300 dark:bg-gray-600"></div>

        {experienceData.map((exp, index) => (
          <div
            key={index}
            className={`mb-12 flex w-full md:items-center ${
              index % 2 === 0 ? "md:justify-start" : "md:justify-end"
            }`}
          >

            {/* Timeline Icon */}
            <div
              className="absolute left-6 md:left-1/2 md:-translate-x-1/2
              w-10 h-10 md:w-12 md:h-12
              flex items-center justify-center
              rounded-full text-lg md:text-xl
              bg-white dark:bg-[#1e1b3a]
              border border-gray-300 dark:border-gray-600
              shadow-md"
            >
              💼
            </div>

            {/* Card */}
            <motion.div
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="ml-14 md:ml-0
              w-full md:w-[45%]
              rounded-xl p-6 md:p-8 border shadow-lg
              bg-white border-gray-300
              dark:bg-[#1e1b3a] dark:border-gray-600"
            >

              <h3 className="text-xl md:text-2xl font-bold text-gray-800 dark:text-white">
                {exp.role}
              </h3>

              <p className="text-gray-500 dark:text-gray-300 mb-3 md:mb-4 font-semibold">
                {exp.company}
              </p>

              <ul className="list-disc ml-5 space-y-2 text-sm md:text-base text-gray-600 dark:text-gray-300">
                {exp.points.map((point, i) => (
                  <li key={i}>{point}</li>
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