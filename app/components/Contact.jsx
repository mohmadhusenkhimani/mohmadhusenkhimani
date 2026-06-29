// import { assets } from '@/assets/assets';
// import Image from 'next/image';
// import React, { useState } from 'react'
// import { motion } from "motion/react"

// const Contact = ({ isDarkMode }) => {

//   const [result, setResult] = React.useState("");

//   const onSubmit = async (event) => {
//     event.preventDefault();
//     setResult("Sending....");
//     const formData = new FormData(event.target);

//     formData.append("access_key", "bec45a09-7af9-4c84-94a8-6aba864b4491");

//     const response = await fetch("https://api.web3forms.com/submit", {
//       method: "POST",
//       body: formData
//     });

//     const data = await response.json();

//     if (data.success) {
//       setResult("Form Submitted Successfully");
//       event.target.reset();
//     } else {
//       console.log("Error", data);
//       setResult(data.message);
//     }
//   };

//   return (
//     <motion.div
//     initial={{opacity: 0}}
//     whileInView={{opacity: 1}}
//     transition={{duration: 1}}
//       id='contact'
//       className='w-full px-[12%] py-10 scroll-mt-20 bg-no-repeat bg-center bg-[length:90%_auto]'
//       style={{ backgroundImage: isDarkMode ? 'none' : "url('/footer-bg-color.png')" }}
//     >
//        <motion.h4
//               initial={{y: -20, opacity: 0}}
//               whileInView={{y: 0, opacity: 1}}
//               transition={{delay: 0.3, duration: 0.5}}
//               className='text-center mb-2 text-lg font-Ovo'
//             >
//               Connect with me 
//             </motion.h4>
      
//             <motion.h2
//               initial={{y: -20, opacity: 0}}
//               whileInView={{y: 0, opacity: 1}}
//               transition={{delay: 0.5, duration: 0.5}}
//               className='text-center text-5xl font-Ovo'
//             >
//              Get In Touch
//             </motion.h2>
      
//         <motion.p 
//     initial={{opacity: 0}}
//     whileInView={{opacity: 1}}
//     transition={{delay: 0.7, duration: 0.5}} 
//     className='text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo'>
//             I'd love to hear from you! If you have any questions, comments, or feedback, please use the form below.
//         </motion.p>

//         <motion.form 
//     initial={{opacity: 0}}
//     whileInView={{opacity: 1}}
//     transition={{delay: 0.9, duration: 0.5}} 
//     onSubmit={onSubmit} className='max-w-2xl mx-auto'>
//           <div className='grid grid-cols-auto gap-6 mt-10 mb-8'>

//             <motion.input 
//     initial={{x: -50, opacity: 0}}
//     whileInView={{x: 0, opacity: 1}}
//     transition={{delay: 1.1, duration: 0.6}}
//     type="text" placeholder='Enter your name' required className='flex-1 p-3 outline-none border-[0.5px] border-gray-400 rounded-md bg-white dark:bg-darkHover/30 dark:border-white/90' name='name'/>

//             <motion.input 
//     initial={{x: 50, opacity: 0}}
//     whileInView={{x: 0, opacity: 1}}
//     transition={{delay: 1.1, duration: 0.6}}
//     type="email" placeholder='Enter your email' required className='flex-1 p-3 outline-none border-[0.5px] border-gray-400 rounded-md bg-white dark:bg-darkHover/30 dark:border-white/90' name='email'/>

//           </div>
//           <motion.textarea 
//     initial={{y: 100, opacity: 0}}
//     whileInView={{y: 0, opacity: 1}}
//     transition={{delay: 1.3, duration: 0.6}}
//     rows='6' placeholder='Enter your message' required className='w-full p-4 outline-none border-[0.5px] border-gray-400 rounded-md bg-white mb-6 dark:bg-darkHover/30 dark:border-white/90' name='message'></motion.textarea>

//           <motion.button 
//           whileHover={{scale: 1.05}}
//           transition={{duration: 0.3}}
//           type='submit' className='py-3 px-8 w-max flex items-center justify-between gap-2 bg-black/80 text-white rounded-full mx-auto hover:bg-black duration-500 dark:bg-transparent dark:border-[0.5px] dark:hover:bg-darkHover'>
//             Submit now <Image src={assets.right_arrow_white} alt='' className='w-4'/>
//           </motion.button>

//           <p className='mt-4'>{result}</p>
//         </motion.form>
//     </motion.div>
//   )
// }

// export default Contact;

import { assets } from "@/assets/assets";
import Image from "next/image";
import React, { useState } from "react";
import { motion } from "motion/react";

const Contact = ({ isDarkMode }) => {
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);

  const onSubmit = async (event) => {
    event.preventDefault();

    setLoading(true);
    setResult("");

    const formData = new FormData(event.target);

    formData.append(
      "access_key",
      "bec45a09-7af9-4c84-94a8-6aba864b4491"
    );

    try {
      const response = await fetch(
        "https://api.web3forms.com/submit",
        {
          method: "POST",
          body: formData,
        }
      );

      const data = await response.json();

      if (data.success) {
        setResult("✅ Your message has been sent successfully.");
        event.target.reset();
      } else {
        setResult("❌ Something went wrong. Please try again.");
      }
    } catch (error) {
      setResult("❌ Network error. Please try again later.");
    }

    setLoading(false);
  };

  return (
    <motion.section
      id="contact"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
      className="w-full px-6 md:px-[12%] py-20 scroll-mt-20 bg-no-repeat bg-center bg-[length:90%_auto]"
      style={{
        backgroundImage: isDarkMode
          ? "none"
          : "url('/footer-bg-color.png')",
      }}
    >
      {/* Section Heading */}

      <motion.h4
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="text-center text-lg font-Ovo mb-2"
      >
        Connect With Me
      </motion.h4>

      <motion.h2
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="text-center text-4xl md:text-5xl font-Ovo"
      >
        Get In Touch
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
        className="text-center max-w-3xl mx-auto mt-6 text-gray-600 dark:text-gray-300 leading-7"
      >
        Whether you're looking for a Full Stack MERN Developer,
        discussing a project, exploring internship opportunities,
        collaborating on exciting ideas, or simply want to connect,
        I'd be happy to hear from you. Let's build something amazing
        together.
      </motion.p>



              {/* Contact Cards */}

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
        className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto mt-14 mb-14"
      >
        {/* Email Card */}

        <motion.div
          whileHover={{ y: -8 }}
          className="rounded-2xl border border-gray-300 dark:border-gray-700 bg-white/80 dark:bg-[#161616]/70 backdrop-blur-md p-8 text-center shadow-md hover:shadow-xl transition-all duration-300"
        >
          <div className="text-4xl mb-4">📧</div>

          <h3 className="text-xl font-semibold mb-2">
            Email
          </h3>

          <p className="text-gray-600 dark:text-gray-300 break-all">
            khimanimohmadhusen@gmail.com
          </p>
        </motion.div>

        {/* Location Card */}

        <motion.div
          whileHover={{ y: -8 }}
          className="rounded-2xl border border-gray-300 dark:border-gray-700 bg-white/80 dark:bg-[#161616]/70 backdrop-blur-md p-8 text-center shadow-md hover:shadow-xl transition-all duration-300"
        >
          <div className="text-4xl mb-4">📍</div>

          <h3 className="text-xl font-semibold mb-2">
            Location
          </h3>

          <p className="text-gray-600 dark:text-gray-300">
            Ahmedabad, Gujarat, India
          </p>
        </motion.div>

        {/* LinkedIn Card */}

        <motion.div
          whileHover={{ y: -8 }}
          className="rounded-2xl border border-gray-300 dark:border-gray-700 bg-white/80 dark:bg-[#161616]/70 backdrop-blur-md p-8 text-center shadow-md hover:shadow-xl transition-all duration-300"
        >
          <div className="text-4xl mb-4">💼</div>

          <h3 className="text-xl font-semibold mb-2">
            LinkedIn
          </h3>

          <a
            href="https://www.linkedin.com/in/mohmadhusen-khimani"
            target="_blank"
            rel="noopener noreferrer"
            className="text-indigo-600 hover:underline font-medium"
          >
            View My Profile
          </a>
        </motion.div>
      </motion.div>

      {/* Contact Form */}

      <motion.form
        onSubmit={onSubmit}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 1 }}
        viewport={{ once: true }}
        className="max-w-3xl mx-auto"
      >
        {/* Name & Email */}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <motion.input
            initial={{ x: -40, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ delay: 1.1 }}
            viewport={{ once: true }}
            type="text"
            name="name"
            required
            placeholder="Full Name"
            className="w-full rounded-xl border border-gray-300 dark:border-gray-700 bg-white/80 dark:bg-[#161616]/70 backdrop-blur-md px-5 py-4 outline-none focus:ring-2 focus:ring-indigo-500 transition-all"
          />

          <motion.input
            initial={{ x: 40, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ delay: 1.2 }}
            viewport={{ once: true }}
            type="email"
            name="email"
            required
            placeholder="Email Address"
            className="w-full rounded-xl border border-gray-300 dark:border-gray-700 bg-white/80 dark:bg-[#161616]/70 backdrop-blur-md px-5 py-4 outline-none focus:ring-2 focus:ring-indigo-500 transition-all"
          />
        </div>

        {/* Subject */}

        <motion.input
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ delay: 1.3 }}
          viewport={{ once: true }}
          type="text"
          name="subject"
          required
          placeholder="Subject"
          className="w-full mt-6 rounded-xl border border-gray-300 dark:border-gray-700 bg-white/80 dark:bg-[#161616]/70 backdrop-blur-md px-5 py-4 outline-none focus:ring-2 focus:ring-indigo-500 transition-all"
        />

        {/* Message */}

        <motion.textarea
          initial={{ y: 40, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ delay: 1.4 }}
          viewport={{ once: true }}
          name="message"
          rows={7}
          required
          placeholder="Tell me about your project, internship opportunity, or how I can help you..."
          className="w-full mt-6 rounded-xl border border-gray-300 dark:border-gray-700 bg-white/80 dark:bg-[#161616]/70 backdrop-blur-md px-5 py-4 outline-none resize-none focus:ring-2 focus:ring-indigo-500 transition-all"
        >
        </motion.textarea>

                {/* Submit Button */}

        <motion.button
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5 }}
          viewport={{ once: true }}
          whileHover={{
            scale: 1.05,
          }}
          whileTap={{
            scale: 0.98,
          }}
          type="submit"
          disabled={loading}
          className={`mt-8 mx-auto flex items-center justify-center gap-3 px-8 py-4 rounded-full text-white transition-all duration-300
          ${
            loading
              ? "bg-gray-500 cursor-not-allowed"
              : "bg-black hover:bg-gray-800 dark:bg-white dark:text-black dark:hover:bg-gray-200"
          }`}
        >
          {loading ? (
            <>
              <svg
                className="w-5 h-5 animate-spin"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                ></circle>

                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                ></path>
              </svg>

              Sending...
            </>
          ) : (
            <>
              Send Message

              <Image
                src={assets.right_arrow_white}
                alt="Arrow"
                className="w-4 dark:invert"
              />
            </>
          )}
        </motion.button>

        {/* Success / Error Message */}

        {result && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className={`mt-6 text-center font-medium ${
              result.includes("✅")
                ? "text-green-600 dark:text-green-400"
                : "text-red-600 dark:text-red-400"
            }`}
          >
            {result}
          </motion.p>
        )}
      </motion.form>
    </motion.section>
  );
};

export default Contact; 