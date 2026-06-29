// // import { assets, infoList, toolsData } from '@/assets/assets'
// // import Image from 'next/image'
// // import React from 'react'
// // import { motion } from "motion/react"

// // const About = ({isDarkMode}) => {
// //   return (
// //     <motion.div id='about' className='w-full px-[12%] py-10 scroll-mt-20'
// //     initial={{opacity: 0}}
// //     whileInView={{opacity: 1}}
// //     transition={{duration: 1}}
// //     >
// //       <motion.h4
// //              initial={{y: -20, opacity: 0}}
// //              whileInView={{y: 0, opacity: 1}}
// //              transition={{delay: 0.3, duration: 0.5}}
// //              className='text-center mb-2 text-lg font-Ovo'
// //            >
// //             Get To Know Me
// //            </motion.h4>
     
// //            <motion.h2
// //              initial={{y: -20, opacity: 0}}
// //              whileInView={{y: 0, opacity: 1}}
// //              transition={{delay: 0.5, duration: 0.5}}
// //              className='text-center text-5xl font-Ovo'
// //            >
// //              About me
// //            </motion.h2>
     

// //       <motion.div 
// //     initial={{opacity: 0}}
// //     whileInView={{opacity: 1}}
// //     transition={{duration: 0.8}}
// //     className='flex w-full flex-col lg:flex-row items-center gap-20 my-20'>
// //         <motion.div 
// //     initial={{opacity: 0, scale: 0.9}}
// //     whileInView={{opacity: 1, scale:1}}
// //     transition={{duration: 0.6}}
// //     className='w-64 sm:w-80 rounded-3xl max-w-none'>
// //           <Image src={assets.newhalfphoto} alt='user' className='w-full rounded-3xl' />
// //         </motion.div>

// //         <motion.div 
// //     initial={{opacity: 0}}
// //     whileInView={{opacity: 1}}
// //     transition={{duration: 0.6, delay: 0.8}}
// //     className='flex-1'>
// //           <p className='mb-10 max-w-2xl font-ovo'>Hello! I'm Mohmadhusen Khimani, an MCA student at LJ University and a passionate Full Stack MERN Developer with hands-on experience in building scalable, responsive, and user-centric web applications.

// // I specialize in developing modern applications using MongoDB, Express.js, React.js, Node.js, JavaScript, Next.js, and REST APIs. My experience includes authentication systems, eCommerce platforms, admin dashboards, payment gateway integration, and AI-powered applications.

// // Beyond web development, I am actively learning Artificial Intelligence, Machine Learning, Data Science, and Data Structures & Algorithms to become a well-rounded Software Development Engineer (SDE).

// // Currently, I am working as a MERN Stack Developer Intern at Maxgen Technologies while continuously building real-world projects, improving my problem-solving skills, and preparing for software engineering opportunities.</p>
// //           <motion.ul 
// //     initial={{opacity: 0}}
// //     whileInView={{opacity: 1}}
// //     transition={{duration: 0.8,delay: 1}}
// //     className='grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl'>
// //             {infoList.map(({ icon, iconDark, title, description }, index) => (
// //               <motion.li 
// //     whileInView={{y: -8, scale: 1.03}}
// //     className='border-[0.5px] border-gray-400 rounded-xl p-6 cursor-pointer hover:bg-lightHover hover:-translate-y-1 duration-500 hover:shadow-black dark:border-white dark:hover:shadow-white dark:hover:bg-darkHover/50' key={index}>
// //                 <Image src={ isDarkMode ? iconDark : icon} alt={title} className='w-7 mt-3' />
// //                 <h3 className='my-4 font-semibold text-gray-700 dark:text-white'>{title}</h3>
// //                 <p className='text-gray-600 text-sm dark:text-white/80 whitespace-pre-line break-words'>{description}</p>
// //               </motion.li>
// //             ))}
// //           </motion.ul>
// //           <motion.h4 
// //     initial={{y: 20, opacity: 0}}
// //     whileInView={{y: 0, opacity: 1}}
// //     transition={{duration: 1.3, duration: 0.5}}
// //     className='my-6 text-gray-700 font-Ovo dark:text-white/80'>Development Tools</motion.h4>
// //           <motion.ul 
// //     initial={{opacity: 0}}
// //     whileInView={{opacity: 1}}
// //     transition={{delay: 1.5,duration: 0.6}}
// //     className='flex items-center gap-3 sm:gap-5'> 
// //             {toolsData.map((tool,index)=>(
// //               <motion.li 
// //               whileHover={{scale: 1.04, rotate: -2}}
// //               className='flex items-center justify-center w-12 sm:w-14 aspect-square border border-gray-400 rounded-lg cursor-pointer hover:-translate-y-1 duration-500' key={index}>
// //                 <Image src={tool} alt='Tool' className='w-5 sm:w-7'/>
// //               </motion.li>
// //             ))}
// //           </motion.ul>
// //         </motion.div>
// //       </motion.div>
// //     </motion.div>
// //   )
// // }

// // export default About

// import { assets, infoList, toolsData } from '@/assets/assets'
// import Image from 'next/image'
// import React from 'react'
// import { motion } from "motion/react"

// const About = ({isDarkMode}) => {
//   return (
//     <motion.div id='about' className='w-full px-[12%] py-10 scroll-mt-20'
//     initial={{opacity: 0}}
//     whileInView={{opacity: 1}}
//     transition={{duration: 1}}
//     >
//       <motion.h4
//              initial={{y: -20, opacity: 0}}
//              whileInView={{y: 0, opacity: 1}}
//              transition={{delay: 0.3, duration: 0.5}}
//              className='text-center mb-2 text-lg font-Ovo'
//            >
//             Get To Know Me
//            </motion.h4>
     
//            <motion.h2
//              initial={{y: -20, opacity: 0}}
//              whileInView={{y: 0, opacity: 1}}
//              transition={{delay: 0.5, duration: 0.5}}
//              className='text-center text-5xl font-Ovo'
//            >
//              About me
//            </motion.h2>
     

//       <motion.div 
//     initial={{opacity: 0}}
//     whileInView={{opacity: 1}}
//     transition={{duration: 0.8}}
//     className='flex w-full flex-col lg:flex-row items-center gap-20 my-20'>
//         <motion.div 
//     initial={{opacity: 0, scale: 0.9}}
//     whileInView={{opacity: 1, scale:1}}
//     transition={{duration: 0.6}}
//     className='w-64 sm:w-80 rounded-3xl max-w-none'>
//           <Image src={assets.newhalfphoto} alt='user' className='w-full rounded-3xl' />
//         </motion.div>

//         <motion.div 
//     initial={{opacity: 0}}
//     whileInView={{opacity: 1}}
//     transition={{duration: 0.6, delay: 0.8}}
//     className='flex-1'>
//           <p className='mb-10 max-w-2xl font-ovo'>I'm Mohmadhusen Khimani, an MCA student at LJ University and a passionate Full Stack MERN Developer. I enjoy building scalable, responsive, and user-friendly web applications using the MERN Stack, Next.js, and modern web technologies. Currently, I'm working as a MERN Stack Developer Intern at Maxgen Technologies while continuously improving my skills in AI, Machine Learning, Data Science, and DSA to become a well-rounded Software Development Engineer.
// </p>
//           <motion.ul 
//     initial={{opacity: 0}}
//     whileInView={{opacity: 1}}
//     transition={{duration: 0.8,delay: 1}}
//     className='grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl'>
//             {infoList.map(({ icon, iconDark, title, description }, index) => (
//               <motion.li 
//     whileInView={{y: -8, scale: 1.03}}
//     className='border-[0.5px] border-gray-400 rounded-xl p-6 cursor-pointer hover:bg-lightHover hover:-translate-y-1 duration-500 hover:shadow-black dark:border-white dark:hover:shadow-white dark:hover:bg-darkHover/50' key={index}>
//                 <Image src={ isDarkMode ? iconDark : icon} alt={title} className='w-7 mt-3' />
//                 <h3 className='my-4 font-semibold text-gray-700 dark:text-white'>{title}</h3>
//                 <p className='text-gray-600 text-sm dark:text-white/80 whitespace-pre-line break-words'>{description}</p>
//               </motion.li>
//             ))}
//           </motion.ul>
//           <motion.h4 
//     initial={{y: 20, opacity: 0}}
//     whileInView={{y: 0, opacity: 1}}
//     transition={{duration: 1.3, duration: 0.5}}
//     className='my-6 text-gray-700 font-Ovo dark:text-white/80'>Development Tools</motion.h4>
//           <motion.ul 
//     initial={{opacity: 0}}
//     whileInView={{opacity: 1}}
//     transition={{delay: 1.5,duration: 0.6}}
//     className='flex items-center gap-3 sm:gap-5'> 
//             {toolsData.map((tool,index)=>(
//               <motion.li 
//               whileHover={{scale: 1.04, rotate: -2}}
//               className='flex items-center justify-center w-12 sm:w-14 aspect-square border border-gray-400 rounded-lg cursor-pointer hover:-translate-y-1 duration-500' key={index}>
//                 <Image src={tool} alt='Tool' className='w-5 sm:w-7'/>
//               </motion.li>
//             ))}
//           </motion.ul>
//         </motion.div>
//       </motion.div>
//     </motion.div>
//   )
// }

// export default About


import { assets, infoList } from "@/assets/assets";
import Image from "next/image";
import React from "react";
import { motion } from "motion/react";

const About = ({ isDarkMode }) => {
  return (
    <section
      id="about"
      className="w-full px-6 sm:px-10 lg:px-16 xl:px-24 py-24 scroll-mt-24"
    >
      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center"
      >
        <p className="text-indigo-600 font-medium text-lg">
          Get To Know Me
        </p>

        <h2 className="text-4xl md:text-5xl font-bold mt-2">
          About Me
        </h2>
      </motion.div>

      {/* Content */}
      <div className="max-w-7xl mx-auto mt-16 flex flex-col lg:flex-row items-center lg:items-start gap-12">

        {/* Image */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="flex justify-center lg:w-[35%]"
        >
          <Image
            src={assets.newhalfphoto}
            alt="Mohmadhusen Khimani"
            className="w-72 sm:w-80 md:w-96 lg:w-[400px] object-contain"
            priority
          />
        </motion.div>

        {/* Right Side */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="flex-1"
        >
          <p className="text-gray-600 dark:text-gray-300 leading-8 text-lg">
            I'm <strong>Mohmadhusen Khimani</strong>, an MCA student at
            LJ University and a passionate Full Stack MERN Developer.

            <br /><br />

            I build responsive, scalable and user-friendly web
            applications using React.js, Next.js, Node.js,
            Express.js and MongoDB.

            <br /><br />

            Currently, I'm working as a MERN Stack Developer Intern at
            Maxgen Technologies while continuously improving my skills
            in Artificial Intelligence, Machine Learning, Data
            Structures & Algorithms, and Software Development.
          </p>

          {/* Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
            {infoList.map(
              ({ icon, iconDark, title, description }, index) => (
                <motion.div
                  key={index}
                  whileHover={{
                    y: -8,
                    scale: 1.02,
                  }}
                  transition={{ duration: 0.3 }}
                  className="border border-gray-300 dark:border-gray-600 rounded-2xl p-6 hover:shadow-xl duration-300"
                >
                  <Image
                    src={isDarkMode ? iconDark : icon}
                    alt={title}
                    className="w-8"
                  />

                  <h3 className="text-xl font-semibold mt-5">
                    {title}
                  </h3>

                  <p className="mt-4 text-gray-600 dark:text-gray-300 whitespace-pre-line leading-7 text-sm">
                    {description}
                  </p>
                </motion.div>
              )
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;