"use client";

import React, { useState } from "react";
import { motion } from "motion/react";
import {
  Mail,
  MapPin,
  Linkedin,
  ArrowUpRight,
  Send,
  LoaderCircle,
  CheckCircle2,
  AlertCircle,
} from "lucide-react";

const Contact = ({ isDarkMode }) => {
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);

  const onSubmit = async (event) => {
    event.preventDefault();

    if (loading) return;

    setLoading(true);
    setResult("");

    const form = event.currentTarget;
    const formData = new FormData(form);

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

      if (response.ok && data.success) {
        setResult("success");
        form.reset();
      } else {
        setResult("error");
      }
    } catch (error) {
      setResult("network-error");
    } finally {
      setLoading(false);
    }
  };

  const contactCards = [
    {
      title: "Email",
      value: "khimanimohmadhusen@gmail.com",
      icon: Mail,
      link: "mailto:khimanimohmadhusen@gmail.com",
      linkText: "Send an Email",
    },
    {
      title: "Location",
      value: "Ahmedabad, Gujarat, India",
      icon: MapPin,
      link: null,
      linkText: null,
    },
    {
      title: "LinkedIn",
      value: "Let's connect professionally",
      icon: Linkedin,
      link: "https://www.linkedin.com/in/mohmadhusen-khimani",
      linkText: "View My Profile",
    },
  ];

  return (
    <motion.section
      id="contact"
      aria-labelledby="contact-heading"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="relative w-full px-6 sm:px-8 lg:px-12 py-24 scroll-mt-20 overflow-hidden bg-white dark:bg-[#080d16] transition-colors duration-300"
    >
      {/* Background Decorations */}
      <div
        className="absolute top-20 left-0 w-72 h-72 bg-red-500/5 dark:bg-red-500/10 rounded-full blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      <div
        className="absolute bottom-0 right-0 w-72 h-72 bg-red-500/5 dark:bg-red-500/10 rounded-full blur-3xl pointer-events-none"
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
            Connect With Me
          </p>

          <h2
            id="contact-heading"
            className="text-4xl sm:text-5xl lg:text-6xl font-bold mt-4 text-gray-900 dark:text-white tracking-tight"
          >
            Get In{" "}
            <span className="text-red-600 dark:text-red-500">
              Touch.
            </span>
          </h2>

          <p className="max-w-3xl mx-auto mt-6 text-gray-600 dark:text-gray-400 leading-8 text-base sm:text-lg">
            Have a software project, development opportunity, or collaboration
            in mind? I'd be happy to connect. Send me a message and let's
            discuss how we can build something valuable together.
          </p>
        </motion.div>

        {/* Contact Information */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto mt-16 mb-16">
          {contactCards.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.article
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ y: -8 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.12,
                }}
                viewport={{ once: true }}
                className="group rounded-2xl border border-gray-200 dark:border-white/10 bg-gray-50 dark:bg-[#111a28] backdrop-blur-md p-8 text-center shadow-sm hover:shadow-xl hover:shadow-red-500/5 hover:border-red-500/40 transition-all duration-300"
              >
                <div className="w-16 h-16 mx-auto mb-5 rounded-2xl flex items-center justify-center bg-red-50 dark:bg-red-500/10 text-red-600 dark:text-red-400 group-hover:bg-red-600 group-hover:text-white transition-colors duration-300">
                  <Icon size={27} />
                </div>

                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                  {item.title}
                </h3>

                <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 break-words">
                  {item.value}
                </p>

                {item.link && (
                  <a
                    href={item.link}
                    target={
                      item.link.startsWith("https://") ? "_blank" : undefined
                    }
                    rel={
                      item.link.startsWith("https://")
                        ? "noopener noreferrer"
                        : undefined
                    }
                    className="inline-flex items-center gap-2 mt-5 text-sm font-semibold text-red-600 dark:text-red-400 hover:text-red-700 dark:hover:text-red-300 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-500 rounded"
                  >
                    {item.linkText}
                    <ArrowUpRight size={16} />
                  </a>
                )}
              </motion.article>
            );
          })}
        </div>

        {/* Contact Form Section */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-14 items-start max-w-6xl mx-auto">

          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <p className="text-sm font-semibold uppercase tracking-widest text-red-600 dark:text-red-500">
              Let's Talk
            </p>

            <h3 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mt-4 leading-tight">
              Let's Build Something{" "}
              <span className="text-red-600 dark:text-red-500">
                Great.
              </span>
            </h3>

            <p className="mt-5 text-gray-600 dark:text-gray-400 leading-8">
              I'm interested in connecting with developers, teams, and
              organizations working on meaningful software products and
              technology solutions.
            </p>

            <div className="mt-8 space-y-4">
              {[
                "Full Stack MERN Development",
                "Web Application Development",
                "Backend & REST API Development",
                "AI-Powered Application Ideas",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3 text-sm sm:text-base text-gray-700 dark:text-gray-300"
                >
                  <CheckCircle2
                    size={19}
                    className="text-red-500 shrink-0"
                  />
                  {item}
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right Contact Form */}
          <motion.form
            onSubmit={onSubmit}
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            aria-label="Contact form"
            className="lg:col-span-3 rounded-3xl border border-gray-200 dark:border-white/10 bg-gray-50 dark:bg-[#111a28] p-6 sm:p-8 shadow-lg"
          >
            <div className="mb-7">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                Send Me a Message
              </h3>

              <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
                Fill in the details below. I'll get back to you.
              </p>
            </div>

            {/* Name & Email */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label
                  htmlFor="contact-name"
                  className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2"
                >
                  Full Name
                </label>

                <input
                  id="contact-name"
                  type="text"
                  name="name"
                  required
                  minLength={2}
                  maxLength={100}
                  autoComplete="name"
                  placeholder="Enter your full name"
                  className="w-full rounded-xl border border-gray-300 dark:border-white/10 bg-white dark:bg-[#080d16] text-gray-900 dark:text-white placeholder:text-gray-400 px-4 py-4 outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-all"
                />
              </div>

              <div>
                <label
                  htmlFor="contact-email"
                  className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2"
                >
                  Email Address
                </label>

                <input
                  id="contact-email"
                  type="email"
                  name="email"
                  required
                  autoComplete="email"
                  placeholder="Enter your email"
                  className="w-full rounded-xl border border-gray-300 dark:border-white/10 bg-white dark:bg-[#080d16] text-gray-900 dark:text-white placeholder:text-gray-400 px-4 py-4 outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-all"
                />
              </div>
            </div>

            {/* Subject */}
            <div className="mt-5">
              <label
                htmlFor="contact-subject"
                className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2"
              >
                Subject
              </label>

              <input
                id="contact-subject"
                type="text"
                name="subject"
                required
                minLength={3}
                maxLength={150}
                placeholder="What would you like to discuss?"
                className="w-full rounded-xl border border-gray-300 dark:border-white/10 bg-white dark:bg-[#080d16] text-gray-900 dark:text-white placeholder:text-gray-400 px-4 py-4 outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-all"
              />
            </div>

            {/* Message */}
            <div className="mt-5">
              <label
                htmlFor="contact-message"
                className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2"
              >
                Your Message
              </label>

              <textarea
                id="contact-message"
                name="message"
                rows={6}
                required
                minLength={10}
                maxLength={3000}
                placeholder="Tell me about your project, opportunity, or idea..."
                className="w-full rounded-xl border border-gray-300 dark:border-white/10 bg-white dark:bg-[#080d16] text-gray-900 dark:text-white placeholder:text-gray-400 px-4 py-4 outline-none resize-y focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-all"
              />
            </div>

            {/* Submit Button */}
            <motion.button
              whileHover={!loading ? { scale: 1.02 } : undefined}
              whileTap={!loading ? { scale: 0.98 } : undefined}
              type="submit"
              disabled={loading}
              aria-busy={loading}
              className={`mt-7 w-full sm:w-auto flex items-center justify-center gap-3 px-8 py-4 rounded-xl text-white font-semibold transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-2 ${
                loading
                  ? "bg-gray-500 cursor-not-allowed"
                  : "bg-red-600 hover:bg-red-700 shadow-lg shadow-red-600/20"
              }`}
            >
              {loading ? (
                <>
                  <LoaderCircle size={19} className="animate-spin" />
                  Sending Message...
                </>
              ) : (
                <>
                  <Send size={18} />
                  Send Message
                  <ArrowUpRight size={18} />
                </>
              )}
            </motion.button>

            {/* Form Status */}
            {result && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                role="status"
                aria-live="polite"
                className={`mt-6 flex items-start gap-3 rounded-xl p-4 text-sm font-medium ${
                  result === "success"
                    ? "bg-green-50 dark:bg-green-500/10 text-green-700 dark:text-green-400"
                    : "bg-red-50 dark:bg-red-500/10 text-red-700 dark:text-red-400"
                }`}
              >
                {result === "success" ? (
                  <CheckCircle2 size={20} className="shrink-0" />
                ) : (
                  <AlertCircle size={20} className="shrink-0" />
                )}

                <span>
                  {result === "success" &&
                    "Your message has been sent successfully. Thank you for contacting me!"}

                  {result === "error" &&
                    "Unable to send your message. Please check the details and try again."}

                  {result === "network-error" &&
                    "Network error. Please check your internet connection and try again."}
                </span>
              </motion.div>
            )}
          </motion.form>
        </div>

      </div>
    </motion.section>
  );
};

export default Contact;
