
// import { assets } from "@/assets/assets";
// import { motion } from "motion/react";
// import Image from "next/image";
// import React from "react";

// const Header = () => {
//   return (
//     <section className="w-full min-h-screen flex items-center justify-center px-6 sm:px-8 lg:px-12">
//       <div className="max-w-5xl mx-auto text-center flex flex-col items-center">

//         {/* Profile Image */}
//         <motion.div
//           initial={{ scale: 0 }}
//           whileInView={{ scale: 1 }}
//           whileHover={{
//             scale: 1.05,
//             rotate: -2,
//           }}
//           transition={{
//             duration: 0.8,
//             type: "spring",
//             stiffness: 100,
//           }}
//           viewport={{ once: true }}
//         >
//           <Image
//             src={assets.newphoto}
//             alt="Mohmadhusen Khimani"
//             className="rounded-full w-32 sm:w-36 md:w-40 lg:w-44 border-4 border-white shadow-2xl"
//           />
//         </motion.div>

//         {/* Greeting */}
//         <motion.h3
//           initial={{ y: -20, opacity: 0 }}
//           whileInView={{ y: 0, opacity: 1 }}
//           transition={{ delay: 0.3, duration: 0.5 }}
//           viewport={{ once: true }}
//           className="flex flex-wrap justify-center items-center gap-2 text-lg sm:text-xl md:text-2xl mt-6"
//         >
//           Hi, I'm Mohmadhusen Khimani
//           <Image
//             src={assets.hand_icon}
//             alt="wave"
//             className="w-5 sm:w-6"
//           />
//         </motion.h3>

//         {/* Heading */}
//         <motion.h1
//           initial={{ y: -30, opacity: 0 }}
//           whileInView={{ y: 0, opacity: 1 }}
//           transition={{ delay: 0.5, duration: 0.7 }}
//           viewport={{ once: true }}
//           className="mt-4 font-bold leading-tight tracking-tight"
//         >
//           <span className="block text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
//             Full Stack MERN
//           </span>

//           <span className="block text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
//             Developer
//           </span>

//           <span className="block mt-2 text-xl sm:text-2xl md:text-3xl lg:text-4xl text-indigo-600 dark:text-indigo-400 font-semibold">
//             AI & Machine Learning Enthusiast
//           </span>
//         </motion.h1>

//         {/* Internship Badge */}
//         <motion.div
//           initial={{ opacity: 0 }}
//           whileInView={{ opacity: 1 }}
//           transition={{ delay: 0.7 }}
//           viewport={{ once: true }}
//           className="mt-6"
//         >
//           <span className="px-4 py-2 rounded-full bg-green-100 text-green-700 dark:bg-green-900/40 dark:text-green-300 text-sm font-medium">
//             🟢 Available for SDE Internships
//           </span>
//         </motion.div>

//         {/* Description */}
//         <motion.p
//           initial={{ opacity: 0 }}
//           whileInView={{ opacity: 1 }}
//           transition={{ delay: 0.8, duration: 0.6 }}
//           viewport={{ once: true }}
//           className="max-w-3xl mt-6 text-base sm:text-lg leading-7 text-gray-700 dark:text-gray-300"
//         >
//           I'm an MCA student and Full Stack MERN Developer passionate about
//           building scalable, responsive, and user-centric web applications.
//           I specialize in React.js, Node.js, Express.js, MongoDB, REST APIs,
//           and modern frontend technologies while actively expanding my expertise
//           in Artificial Intelligence, Machine Learning, Data Structures &
//           Algorithms, and Software Development.
//         </motion.p>

//         {/* Buttons */}
//         <motion.div
//           initial={{ opacity: 0 }}
//           whileInView={{ opacity: 1 }}
//           transition={{ delay: 1 }}
//           viewport={{ once: true }}
//           className="flex flex-col sm:flex-row items-center gap-4 mt-8"
//         >
//           <a
//             href="#contact"
//             className="px-8 py-3 rounded-full bg-black text-white border border-black flex items-center gap-2 hover:scale-105 transition-all duration-300 dark:bg-transparent dark:border-white"
//           >
//             Contact Me
//             <Image
//               src={assets.right_arrow_white}
//               alt=""
//               className="w-4"
//             />
//           </a>

//           <a
//             href="/resume.pdf"
//             download
//             className="px-8 py-3 rounded-full border border-gray-500 flex items-center gap-2 hover:scale-105 transition-all duration-300 dark:bg-white dark:text-black"
//           >
//             Download Resume
//             <Image
//               src={assets.download_icon}
//               alt=""
//               className="w-4"
//             />
//           </a>
//         </motion.div>

//       </div>
//     </section>
//   );
// };

// export default Header;

import { assets } from "@/assets/assets";
import { motion } from "motion/react";
import Image from "next/image";
import React from "react";

const Header = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 lg:px-10 pt-20">
      <div className="max-w-5xl mx-auto text-center">

        {/* Greeting */}
        <motion.h3
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="flex justify-center items-center gap-2 text-lg md:text-xl font-medium"
        >
          Hi, I'm Mohmadhusen Khimani

          <Image
            src={assets.hand_icon}
            alt="wave"
            className="w-6"
          />
        </motion.h3>

        {/* Hero Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          viewport={{ once: true }}
          className="font-bold leading-[1.05] mt-3"
        >
          <span className="block text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
            Full Stack MERN
          </span>

          <span className="block text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
            Developer
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-3 text-xl sm:text-2xl md:text-3xl font-semibold text-indigo-600 dark:text-indigo-400"
        >
          AI & Machine Learning Enthusiast
        </motion.h2>

        {/* Badge */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-5"
        >
          <span className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-green-100 text-green-700 font-medium">
            🟢 Available for SDE Internships
          </span>
        </motion.div>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto mt-5 text-gray-600 dark:text-gray-300 text-base leading-8"
        >
          I'm an MCA student and Full Stack MERN Developer passionate about
          building scalable, responsive, and user-centric web applications.
          I specialize in React.js, Node.js, Express.js, MongoDB, REST APIs,
          and modern frontend technologies while expanding my expertise in AI,
          Machine Learning, DSA, and Software Development.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
          viewport={{ once: true }}
          className="mt-7 flex flex-col sm:flex-row justify-center items-center gap-4"
        >
          <a
            href="#contact"
            className="flex items-center gap-2 bg-black text-white px-8 py-3 rounded-full hover:scale-105 transition"
          >
            Contact Me

            <Image
              src={assets.right_arrow_white}
              alt=""
              className="w-4"
            />
          </a>

          <a
            href="/resume.pdf"
            download
            className="flex items-center gap-2 border border-gray-400 px-8 py-3 rounded-full hover:bg-gray-100 dark:hover:bg-white dark:hover:text-black transition"
          >
            Download Resume

            <Image
              src={assets.download_icon}
              alt=""
              className="w-4"
            />
          </a>
        </motion.div>

      </div>
    </section>
  );
};

export default Header;