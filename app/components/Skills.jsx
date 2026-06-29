// import { skillsData } from '@/assets/assets'
// import Image from 'next/image'
// import React from 'react'
// import { motion } from "motion/react"

// const Skills = ({isDarkMode}) => {
//   return (
//     <motion.div
//       initial={{opacity: 0}}
//       whileInView={{opacity: 1}}
//       transition={{duration: 1}}
//       id='skills'
//       className='w-full px-[12%] py-10 scroll-mt-20'
//     >

//       {/* Section Heading */}
//       <motion.h4
//         initial={{y: -20, opacity: 0}}
//         whileInView={{y: 0, opacity: 1}}
//         transition={{delay: 0.3, duration: 0.5}}
//         className='text-center mb-2 text-lg font-Ovo'
//       >
//         My Expertise
//       </motion.h4>

//       <motion.h2
//         initial={{y: -20, opacity: 0}}
//         whileInView={{y: 0, opacity: 1}}
//         transition={{delay: 0.5, duration: 0.5}}
//         className='text-center text-5xl font-Ovo'
//       >
//         Skills & Technologies
//       </motion.h2>

//       <motion.p
//         initial={{opacity: 0}}
//         whileInView={{opacity: 1}}
//         transition={{delay: 0.7, duration: 0.5}}
//         className='text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo'
//       >
//         I specialize in building modern, responsive, and scalable web applications
//         using the latest technologies in frontend and backend development.
//       </motion.p>

//       {/* Skills Grid */}
//       <motion.div
//         initial={{opacity: 0}}
//         whileInView={{opacity: 1}}
//         transition={{delay: 0.9, duration: 0.6}}
//         className='grid grid-cols-auto gap-6 my-10'
//       >

//         {skillsData.map(({icon, icon_dark, title, description}, index) => (
          
//           <motion.div
//             whileHover={{scale: 1.05}}
//             key={index}
//             className='border border-gray-400 rounded-lg px-8 py-12 hover:shadow-black cursor-pointer hover:bg-lightHover hover:-translate-y-1 duration-500 dark:hover:bg-darkHover dark:hover:shadow-white'
//           >

//          <Image src={isDarkMode ? icon_dark : icon} alt={title} className='w-10'/>

//             <h3 className='text-lg my-4 text-gray-700 dark:text-white'>
//               {title}
//             </h3>

//             <p className='text-sm text-gray-600 leading-5 dark:text-white/80'>
//               {description}
//             </p>

//           </motion.div>

//         ))}

//       </motion.div>

//     </motion.div>
//   )
// }

// export default Skills;

import { skillsData } from "@/assets/assets";
import Image from "next/image";
import React from "react";
import { motion } from "motion/react";

const Skills = ({ isDarkMode }) => {
  return (
    <section
      id="skills"
      className="w-full px-6 sm:px-8 lg:px-12 py-20 scroll-mt-20"
    >
      <div className="max-w-7xl mx-auto">

        {/* Section Heading */}
        <motion.h4
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center text-lg font-Ovo text-indigo-600"
        >
          My Expertise
        </motion.h4>

        <motion.h2
          initial={{ opacity: 0, y: -25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center text-4xl sm:text-5xl font-bold mt-2"
        >
          Skills & Technologies
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center mt-6 text-gray-600 dark:text-gray-300 leading-8"
        >
          I build scalable, modern, and high-performance web applications using
          industry-standard technologies. My expertise spans frontend,
          backend, databases, authentication, cloud deployment, and
          continuously evolving AI/ML technologies.
        </motion.p>

        {/* Statistics */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-14 mb-16"
        >
          {[
            { number: "15+", title: "Technologies" },
            { number: "10+", title: "Projects" },
            { number: "20+", title: "Certifications" },
            { number: "1+", title: "Internship" },
          ].map((item, index) => (
            <motion.div
              key={index}
              whileHover={{
                y: -6,
                scale: 1.04,
              }}
              className="rounded-xl border border-gray-200 dark:border-gray-700 p-6 text-center shadow-sm hover:shadow-xl transition-all"
            >
              <h3 className="text-3xl font-bold text-indigo-600">
                {item.number}
              </h3>

              <p className="mt-2 text-gray-600 dark:text-gray-300">
                {item.title}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Skills */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          viewport={{ once: true }}
          className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
        >
          {skillsData.map(
            ({ icon, icon_dark, title, description }, index) => (
              <motion.div
                key={index}
                whileHover={{
                  y: -8,
                  scale: 1.03,
                }}
                transition={{ duration: 0.3 }}
                className="group relative overflow-hidden rounded-2xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-[#161616] p-8 shadow-sm hover:shadow-2xl transition-all"
              >
                {/* Hover Line */}
                <div className="absolute top-0 left-0 h-1 w-0 bg-indigo-600 group-hover:w-full transition-all duration-500"></div>

                {/* Icon */}
                <div className="w-16 h-16 rounded-xl bg-indigo-50 dark:bg-indigo-900/20 flex items-center justify-center mb-6">
                  <Image
                    src={isDarkMode ? icon_dark : icon}
                    alt={title}
                    className="w-9 h-9"
                  />
                </div>

                {/* Title */}
                <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">
                  {title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 dark:text-gray-300 leading-7 text-sm">
                  {description}
                </p>
              </motion.div>
            )
          )}
        </motion.div>

      </div>
    </section>
  );
};

export default Skills;