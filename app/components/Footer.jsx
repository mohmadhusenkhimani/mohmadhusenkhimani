// import { assets } from '@/assets/assets'
// import Image from 'next/image'
// import React from 'react'
// import { motion } from "motion/react"

// const Footer = ({isDarkMode}) => {
//   return (
//     <div className='mt-20'>
//       <div className='text-center'>
//         <a href="#top" className="flex items-center justify-center">
//         <span className={`h-10 flex items-center text-2xl font-bold ${
//             isDarkMode ? "text-white" : "text-black"
//         }`}>
//             Mohmadhusen<span className="text-red-500">.</span>
//         </span>
//         </a>
//         <a href="mailto:khimanimohmadhusen@gmail.com"  className="flex items-center justify-center">
//         <div className='w-max flex items-center gap-2 mx-auto'>
//             <Image src={isDarkMode ? assets.mail_icon_dark :  assets.mail_icon} alt='' className='w-6'/>
//             khimanimohmadhusen@gmail.com
//         </div>
//         </a>
//       </div>

//       <div className='text-center sm:flex items-center justify-between border-t border-gray-400 mx-[10%] mt-12 py-6'>
//         <p>&copy; 2026 Mohmadhusen Khimani. All rights reserved.</p>
//         <ul className='flex items-center gap-10 justify-center mt-4  sm:mt-0'>
//             <li><a target='_blank' href="linkedin.com/in/mohmadhusen-khimani/">LinkedIn</a></li>
//             <li><a target='_blank' href="https://github.com/mohmadhusenkhimani">Github</a></li>
//             <li><a target='_blank' href="https://www.instagram.com/mohmadhusen.khimani/">Instagram</a></li>
//         </ul>
//       </div>
//     </div>
//   )
// }

// export default Footer

import React from "react";
import { motion } from "motion/react";
import {
  Mail,
  Github,
  Linkedin,
  Instagram,
  ArrowUp,
} from "lucide-react";

const Footer = ({ isDarkMode }) => {
  return (
    <footer className="mt-24 border-t border-gray-300 dark:border-gray-700">

      <div className="max-w-7xl mx-auto px-6 md:px-12 py-12">

        {/* Logo */}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-col items-center"
        >
          <a href="#top">
            <h2 className="text-3xl font-bold">
              Mohmadhusen
              <span className="text-red-500">.</span>
            </h2>
          </a>

          <a
            href="mailto:khimanimohmadhusen@gmail.com"
            className="mt-5 flex items-center gap-3 text-gray-600 dark:text-gray-300 hover:text-indigo-600 transition"
          >
            <Mail size={20} />
            <span>khimanimohmadhusen@gmail.com</span>
          </a>
        </motion.div>

        {/* Divider */}

        <div className="border-t border-gray-300 dark:border-gray-700 my-10"></div>

        {/* Bottom */}

        <div className="flex flex-col md:flex-row items-center justify-between gap-6">

          {/* Copyright */}

          <p className="text-sm text-center text-gray-600 dark:text-gray-400">
            © {new Date().getFullYear()} Mohmadhusen Khimani.
            All Rights Reserved.
          </p>

          {/* Social Links */}

          <div className="flex items-center gap-6">

            <motion.a
              whileHover={{ scale: 1.15 }}
              whileTap={{ scale: 0.95 }}
              href="https://www.linkedin.com/in/mohmadhusen-khimani"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-blue-600 dark:text-gray-300 transition"
            >
              <Linkedin size={22} />
            </motion.a>

            <motion.a
              whileHover={{ scale: 1.15 }}
              whileTap={{ scale: 0.95 }}
              href="https://github.com/mohmadhusenkhimani"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-gray-900 dark:text-gray-300 transition"
            >
              <Github size={22} />
            </motion.a>

            <motion.a
              whileHover={{ scale: 1.15 }}
              whileTap={{ scale: 0.95 }}
              href="https://www.instagram.com/mohmadhusen.khimani"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-pink-500 dark:text-gray-300 transition"
            >
              <Instagram size={22} />
            </motion.a>

          </div>

          {/* Back to Top */}

          <motion.a
            whileHover={{
              y: -4,
              scale: 1.1,
            }}
            whileTap={{ scale: 0.95 }}
            href="#top"
            className="w-11 h-11 rounded-full bg-black text-white dark:bg-white dark:text-black flex items-center justify-center shadow-lg"
          >
            <ArrowUp size={20} />
          </motion.a>

        </div>

      </div>

    </footer>
  );
};

export default Footer;