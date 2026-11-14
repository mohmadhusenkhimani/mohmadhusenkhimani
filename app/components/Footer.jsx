"use client";

import React from "react";
import { motion } from "motion/react";
import {
  Mail,
  Github,
  Linkedin,
  Instagram,
  ArrowUp,
  ArrowUpRight,
  Code2,
} from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/mohmadhusen-khimani",
      icon: Linkedin,
      hoverClass: "hover:text-blue-500",
    },
    {
      name: "GitHub",
      href: "https://github.com/mohmadhusenkhimani",
      icon: Github,
      hoverClass: "hover:text-gray-900 dark:hover:text-white",
    },
    {
      name: "Instagram",
      href: "https://www.instagram.com/mohmadhusen.khimani",
      icon: Instagram,
      hoverClass: "hover:text-pink-500",
    },
  ];

  const footerLinks = [
    { name: "Home", href: "#top" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Experience", href: "#experience" },
    { name: "Projects", href: "#work" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <footer
      id="footer"
      className="relative mt-20 overflow-hidden border-t border-gray-200 dark:border-white/10 bg-gray-50 dark:bg-[#080d16] transition-colors duration-300"
    >
      {/* Decorative Background */}
      <div
        className="absolute -top-32 left-1/2 -translate-x-1/2 w-96 h-96 rounded-full bg-red-500/5 dark:bg-red-500/10 blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-14">

        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-16">

          {/* Footer Identity */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex flex-col items-center md:items-start text-center md:text-left"
          >
            <a
              href="#top"
              aria-label="Return to the top of the portfolio"
              className="inline-flex items-center gap-2"
            >
              <span className="w-10 h-10 flex items-center justify-center rounded-xl bg-red-600 text-white">
                <Code2 size={23} />
              </span>

              <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white">
                Mohmadhusen
                <span className="text-red-600 dark:text-red-500">.</span>
              </h2>
            </a>

            <p className="mt-5 text-sm font-semibold text-red-600 dark:text-red-400">
              Full Stack MERN Developer
            </p>

            <p className="mt-3 max-w-sm text-sm leading-7 text-gray-600 dark:text-gray-400">
              Building modern web applications with clean interfaces,
              scalable backend solutions, and practical software engineering.
            </p>

            <a
              href="mailto:khimanimohmadhusen@gmail.com"
              aria-label="Send an email"
              className="mt-6 inline-flex items-center gap-3 text-sm text-gray-600 dark:text-gray-300 hover:text-red-600 dark:hover:text-red-400 transition-colors"
            >
              <Mail size={18} />
              <span className="break-all">
                khimanimohmadhusen@gmail.com
              </span>
              <ArrowUpRight size={15} />
            </a>
          </motion.div>

          {/* Quick Navigation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            viewport={{ once: true }}
            className="flex flex-col items-center md:items-start"
          >
            <h3 className="text-lg font-bold text-gray-900 dark:text-white">
              Quick Links
            </h3>

            <div className="w-10 h-1 rounded-full bg-red-600 mt-3 mb-6" />

            <nav
              aria-label="Footer navigation"
              className="grid grid-cols-2 gap-x-10 gap-y-4"
            >
              {footerLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-sm text-gray-600 dark:text-gray-400 hover:text-red-600 dark:hover:text-red-400 transition-colors duration-300"
                >
                  {link.name}
                </a>
              ))}
            </nav>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="flex flex-col items-center md:items-start"
          >
            <h3 className="text-lg font-bold text-gray-900 dark:text-white">
              Let's Connect
            </h3>

            <div className="w-10 h-1 rounded-full bg-red-600 mt-3 mb-6" />

            <p className="text-sm text-center md:text-left leading-7 text-gray-600 dark:text-gray-400 max-w-xs">
              Connect with me for software development discussions,
              professional networking, and collaboration.
            </p>

            <nav
              aria-label="Social media links"
              className="flex items-center gap-4 mt-6"
            >
              {socialLinks.map(({ name, href, icon: Icon, hoverClass }) => (
                <motion.a
                  key={name}
                  whileHover={{ y: -5, scale: 1.08 }}
                  whileTap={{ scale: 0.95 }}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Visit my ${name} profile`}
                  title={name}
                  className={`w-11 h-11 rounded-xl flex items-center justify-center border border-gray-200 dark:border-white/10 bg-white dark:bg-[#111a28] text-gray-600 dark:text-gray-300 transition-all duration-300 hover:border-red-500/40 ${hoverClass}`}
                >
                  <Icon size={20} />
                </motion.a>
              ))}
            </nav>
          </motion.div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-200 dark:border-white/10 my-12" />

        {/* Bottom Footer */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">

          {/* Copyright */}
          <p className="text-sm text-center text-gray-500 dark:text-gray-400">
            © {currentYear}{" "}
            <span className="font-semibold text-gray-800 dark:text-white">
              Mohmadhusen Khimani.
            </span>{" "}
            All Rights Reserved.
          </p>

          {/* Footer Message */}
          <p className="text-sm text-gray-500 dark:text-gray-400 text-center">
            Designed & Developed with{" "}
            <span className="text-red-600 dark:text-red-500">♥</span>
            {" "}by Mohmadhusen
          </p>

          {/* Back to Top */}
          <motion.a
            whileHover={{
              y: -5,
              scale: 1.08,
            }}
            whileTap={{ scale: 0.95 }}
            href="#top"
            aria-label="Back to top"
            title="Back to top"
            className="w-12 h-12 rounded-xl bg-red-600 hover:bg-red-700 text-white flex items-center justify-center shadow-lg shadow-red-600/20 transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-2"
          >
            <ArrowUp size={21} />
          </motion.a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
