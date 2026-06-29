// import { assets, workData } from '@/assets/assets'
// import Image from 'next/image'
// import React from 'react'
// import { motion } from "motion/react"

// const Work = ({isDarkMode}) => {
//   return (
//     <motion.div
//     initial={{opacity: 0}}
//     whileInView={{opacity: 1}}
//     transition={{duration: 1}}
//      id='work' className='w-full px-[12%] py-10 scroll-mt-20'>
//        <motion.h4
//               initial={{y: -20, opacity: 0}}
//               whileInView={{y: 0, opacity: 1}}
//               transition={{delay: 0.3, duration: 0.5}}
//               className='text-center mb-2 text-lg font-Ovo'
//             >
//               My Latest work
//             </motion.h4>
      
//             <motion.h2
//               initial={{y: -20, opacity: 0}}
//               whileInView={{y: 0, opacity: 1}}
//               transition={{delay: 0.5, duration: 0.5}}
//               className='text-center text-5xl font-Ovo'
//             >
//               Projects
//             </motion.h2>
      
//       <motion.p 
//     initial={{opacity: 0}}
//     whileInView={{opacity: 1}}
//     transition={{delay: 0.7, duration: 0.5}} 
//     className='text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo'>
//         Welcome to my web development poortfolio! Explore a collection of projects showcasing my expertise in front-end development.
//       </motion.p>

//     <motion.div 
//     initial={{opacity: 0}}
//     whileInView={{ opacity: 1}}
//     transition={{delay: 0.9, duration: 0.6}}
//     className='grid grid-cols-auto my-10 gap-5 dark:text-black'>
//         {workData.map((project, index)=>(
//           <a 
//           key={index}
//           href={project.link}
//           target='_blank'
//           rel='noopener noreferrer'>
//             <motion.div 
//             whileHover={{scale: 1.05}}
//             key={index}
//             className='aspect-square bg-no-repeat bg-cover bg-center rounded-lg relative cursor-pointer group'
//             style={{backgroundImage: `url(${project.bgImage})`}}>
//                 <div className='bg-white w-10/12 rounded-md absolute bottom-5 left-1/2 -translate-x-1/2 py-3 px-5 flex items-center justify-between duration-500 group-hover:bottom-7'>
//                     <div>
//                         <h2 className='font-semibold'>{project.title}</h2>
//                         <p className='text-sm text-gray-700'>{project.description}</p>
//                     </div>
//                     <div className='border rounded-full border-black w-9 aspect-square flex items-center justify-center shadow-[2px_2px_0_#000] group-hover:bg-lime-300 transition'>
//                         <Image src={assets.send_icon} alt='send icon' className='w-5'/>
//                     </div>
//                 </div>
//             </motion.div>
//             </a>
//         ))}
//     </motion.div>
//     <motion.a 
//     initial={{opacity: 0}}
//     whileInView={{opacity: 1}}
//     transition={{delay: 1.1, duration: 0.5}}
//     href="https://github.com/mohmadhusenkhimani" className='w-max flex items-center justify-center gap-2 text-gray-700 border-[0.5px] border-gray-700 rounded-full py-3 px-10 mx-auto my-20 hover:bg-lightHover duration-500 dark:text-white dark:border-white dark:hover:bg-darkHover' target='_blank'> 
//         Show more <Image  src={ isDarkMode ? assets.right_arrow_bold_dark : assets.right_arrow_bold} alt='Right arrow' className='w-4'/>
//     </motion.a>
//     </motion.div>
//   )
// }

// export default Work; 


import { assets, workData } from "@/assets/assets";
import Image from "next/image";
import React from "react";
import { motion } from "motion/react";

const Work = ({ isDarkMode }) => {
  return (
    <section
      id="work"
      className="w-full px-6 sm:px-8 lg:px-12 py-20 scroll-mt-20"
    >
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <motion.h4
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center text-lg font-Ovo text-indigo-600"
        >
          Featured Projects
        </motion.h4>

        

        <motion.h2
          initial={{ opacity: 0, y: -25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          viewport={{ once: true }}
          className="text-center text-4xl sm:text-5xl font-bold mt-2"
        >
          My Latest Work
        </motion.h2>



        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center mt-6 text-gray-600 dark:text-gray-300 leading-8"
        >
          Explore some of my featured projects built using modern technologies
          including React.js, Next.js, Node.js, Express.js, MongoDB,
          authentication systems, payment gateways, and AI-powered features.
          These projects reflect my passion for building scalable and
          user-friendly applications.
        </motion.p>

{/* ===========================
      Portfolio Statistics
=========================== */}

<motion.div
  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.7 }}
  viewport={{ once: true }}
  className="grid grid-cols-2 lg:grid-cols-4 gap-6 mt-14 mb-16"
>

  {/* Projects */}
  <motion.div
    whileHover={{ y: -8 }}
    className="rounded-2xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-[#161616] p-6 text-center shadow-md hover:shadow-xl transition-all duration-300"
  >
    <h2 className="text-4xl font-bold text-indigo-600">
      10+
    </h2>

    <p className="mt-2 text-gray-600 dark:text-gray-300">
      Projects Completed
    </p>
  </motion.div>

  {/* Internship */}
  <motion.div
    whileHover={{ y: -8 }}
    className="rounded-2xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-[#161616] p-6 text-center shadow-md hover:shadow-xl transition-all duration-300"
  >
    <h2 className="text-4xl font-bold text-indigo-600">
      1+
    </h2>

    <p className="mt-2 text-gray-600 dark:text-gray-300">
      Internship Experience
    </p>
  </motion.div>

  {/* Certificates */}
  <motion.div
    whileHover={{ y: -8 }}
    className="rounded-2xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-[#161616] p-6 text-center shadow-md hover:shadow-xl transition-all duration-300"
  >
    <h2 className="text-4xl font-bold text-indigo-600">
      6+
    </h2>

    <p className="mt-2 text-gray-600 dark:text-gray-300">
      Professional Certifications
    </p>
  </motion.div>

  {/* Technologies */}
  <motion.div
    whileHover={{ y: -8 }}
    className="rounded-2xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-[#161616] p-6 text-center shadow-md hover:shadow-xl transition-all duration-300"
  >
    <h2 className="text-4xl font-bold text-indigo-600">
      15+
    </h2>

    <p className="mt-2 text-gray-600 dark:text-gray-300">
      Technologies Used
    </p>
  </motion.div>

</motion.div>

        {/* Projects Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 mt-16"
        >

          {workData.map((project, index) => (
  <motion.div
    key={index}
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    whileHover={{ y: -10 }}
    transition={{
      duration: 0.5,
      delay: index * 0.1,
    }}
    viewport={{ once: true }}
    className="group overflow-hidden rounded-2xl bg-white dark:bg-[#161616] border border-gray-200 dark:border-gray-700 shadow-md hover:shadow-2xl transition-all duration-500"
  >
    {/* Project Image */}
    <div className="relative overflow-hidden h-60">
      <Image
        src={project.bgImage}
        alt={project.title}
        fill
        className="object-cover group-hover:scale-110 transition duration-700"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>

      {/* Category */}
      <div className="absolute top-4 left-4">
        <span className="px-3 py-1 rounded-full bg-indigo-600 text-white text-xs font-semibold">
          {project.category || "Full Stack"}
        </span>
      </div>
    </div>

    {/* Card Content */}
    <div className="p-6">

      <h3 className="text-2xl font-bold text-gray-800 dark:text-white">
        {project.title}
      </h3>

      <p className="mt-3 text-gray-600 dark:text-gray-300 leading-7">
        {project.description}
      </p>

      {/* Tech Stack */}
      <div className="flex flex-wrap gap-2 mt-5">
        {(project.techStack || [
          "React",
          "Node.js",
          "MongoDB",
        ]).map((tech, i) => (
          <span
            key={i}
            className="px-3 py-1 rounded-full bg-gray-100 dark:bg-[#232323] text-sm"
          >
            {tech}
          </span>
        ))}
      </div>

      {/* Features */}
      <div className="mt-6">

        <h4 className="font-semibold text-gray-800 dark:text-white mb-3">
          Key Features
        </h4>

        <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">

          {(project.features || [
            "Responsive UI",
            "REST APIs",
            "Authentication",
          ]).map((feature, i) => (
            <li
              key={i}
              className="flex items-center gap-2"
            >
              <span className="text-green-500">✔</span>
              {feature}
            </li>
          ))}

        </ul>

      </div>

      {/* Buttons */}
      <div className="flex gap-3 mt-8">

        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 text-center bg-indigo-600 hover:bg-indigo-700 text-white py-3 rounded-xl font-semibold transition"
        >
          Live Demo
        </a>

        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 text-center border border-gray-300 dark:border-gray-600 py-3 rounded-xl font-semibold hover:bg-gray-100 dark:hover:bg-[#232323] transition"
        >
          GitHub
        </a>

      </div>

    </div>
  </motion.div>
))}

        </motion.div>

    {/* ===========================
      More Projects
=========================== */}

<motion.div
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.7 }}
  viewport={{ once: true }}
  className="mt-24"
>
  <div className="max-w-4xl mx-auto rounded-3xl border border-gray-200 dark:border-gray-700 bg-gradient-to-r from-indigo-50 via-white to-indigo-50 dark:from-[#161616] dark:via-[#1d1d1d] dark:to-[#161616] p-10 shadow-xl text-center">

    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
      Want to See More?
    </h2>

    <p className="mt-5 text-gray-600 dark:text-gray-300 leading-8 max-w-2xl mx-auto">
      Explore <span className="font-semibold text-indigo-600">10+ additional projects</span>,
      coding practice, open-source contributions, MERN Stack applications,
      AI experiments, university projects, and my continuous learning journey
      on GitHub.
    </p>  

    {/* Highlights */}

    <div className="flex flex-wrap justify-center gap-3 mt-8">

      {[
        "MERN Stack",
        "Next.js",
        "React",
        "Node.js",
        "Express.js",
        "MongoDB",
        "JavaScript",
        "AI/ML",
        "Open Source",
      ].map((item, index) => (
        <span
          key={index}
          className="px-4 py-2 rounded-full bg-white dark:bg-[#232323] border border-gray-200 dark:border-gray-700 text-sm font-medium"
        >
          {item}
        </span>
      ))}

    </div>

    {/* GitHub Button */}

    <motion.a
      whileHover={{
        scale: 1.05,
      }}
      whileTap={{
        scale: 0.97,
      }}
      href="https://github.com/mohmadhusenkhimani"
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-3 mt-10 px-8 py-4 rounded-full bg-black text-white dark:bg-white dark:text-black font-semibold shadow-lg hover:shadow-xl transition-all"
    >
      Visit My GitHub

      <Image
        src={
          isDarkMode
            ? assets.right_arrow_bold_dark
            : assets.right_arrow_white
        }
        alt="Arrow"
        className="w-4"
      />
    </motion.a>

  </div>
</motion.div>

      </div>
    </section>
  );
};

export default Work;