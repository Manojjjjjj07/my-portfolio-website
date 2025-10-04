"use client";

import { motion } from "framer-motion";
import { ArrowDown, Download, Linkedin, Github } from "lucide-react";
import { personalInfo } from "@/data/portfolio";
import ParticleBackground from "@/components/ParticleBackground";
import Image from "next/image";

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden py-20">
      <ParticleBackground />
      
      <motion.div
        className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Profile Image */}
            <motion.div
              variants={itemVariants}
              className="flex justify-center lg:justify-end order-1 lg:order-2"
            >
              <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96">
                <div className="absolute inset-0 bg-gradient-primary rounded-full blur-2xl opacity-20 animate-glow" />
                <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-primary/30 shadow-2xl bg-gradient-to-br from-primary/20 to-primary/5">
                  <Image
                    src="/profile.jpg"
                    alt={personalInfo.name}
                    fill
                    className="object-cover"
                    priority
                    sizes="(max-width: 768px) 256px, (max-width: 1024px) 320px, 384px"
                  />
                </div>
              </div>
            </motion.div>

            {/* Text Content */}
            <div className="text-center lg:text-left order-2 lg:order-1">
              {/* Greeting */}
              <motion.div variants={itemVariants} className="mb-4">
                <span className="text-primary text-lg md:text-xl font-medium">
                  Hi, I am
                </span>
              </motion.div>

              {/* Name */}
              <motion.h1
                variants={itemVariants}
                className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4"
              >
                <span className="text-gradient">
                  {personalInfo.name}
                </span>
              </motion.h1>

              {/* Title */}
              <motion.h2
                variants={itemVariants}
                className="text-xl md:text-2xl lg:text-3xl font-semibold text-gray-300 mb-3"
              >
                {personalInfo.title}
              </motion.h2>

              {/* Subtitle */}
              <motion.p
                variants={itemVariants}
                className="text-base md:text-lg text-gray-400 mb-8"
              >
                {personalInfo.subtitle}
              </motion.p>

              {/* CTA Buttons */}
              <motion.div
                variants={itemVariants}
                className="flex flex-col sm:flex-row items-center lg:items-start lg:justify-start justify-center gap-4"
              >
                <motion.a
                  href="#projects"
                  className="group relative px-6 py-3 bg-gradient-primary rounded-lg font-semibold text-white overflow-hidden w-full sm:w-auto"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="relative z-10">View My Work</span>
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-primary-dark to-primary"
                    initial={{ x: "-100%" }}
                    whileHover={{ x: 0 }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.a>

                <motion.a
                  href={personalInfo.resumeUrl}
                  download
                  className="group px-6 py-3 glass-effect glow-border rounded-lg font-semibold text-gray-300 hover:text-white transition-colors flex items-center gap-2 w-full sm:w-auto justify-center"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Download size={18} />
                  Download Resume
                </motion.a>
              </motion.div>

              {/* Social Links */}
              <motion.div
                variants={itemVariants}
                className="flex items-center justify-center lg:justify-start gap-6 mt-8"
              >
                <motion.a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-primary transition-colors"
                  whileHover={{ y: -5 }}
                >
                  <Github size={28} />
                </motion.a>
                <motion.a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-primary transition-colors"
                  whileHover={{ y: -5 }}
                >
                  <Linkedin size={28} />
                </motion.a>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator - Moved outside content area */}
        <motion.div
          className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-20"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.6 }}
        >
          <motion.a
            href="#about"
            className="flex flex-col items-center gap-2 text-gray-400 hover:text-primary transition-colors"
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
          >
            <span className="text-sm">Scroll Down</span>
            <ArrowDown size={20} />
          </motion.a>
        </motion.div>
      </motion.div>
    </section>
  );
}
