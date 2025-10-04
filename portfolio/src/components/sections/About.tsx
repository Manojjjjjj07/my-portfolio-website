"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { GraduationCap, MapPin, Calendar } from "lucide-react";
import { about, education } from "@/data/portfolio";

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section id="about" className="py-20 relative" ref={ref}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gradient mb-4">
              About Me
            </h2>
            <div className="w-20 h-1 bg-gradient-primary mx-auto" />
          </motion.div>

          {/* Summary */}
          <motion.div
            variants={itemVariants}
            className="max-w-3xl mx-auto mb-16"
          >
            <p className="text-lg text-gray-300 leading-relaxed text-center">
              {about.summary}
            </p>
          </motion.div>

          {/* Interests */}
          <motion.div variants={itemVariants} className="mb-16">
            <h3 className="text-2xl font-semibold text-center mb-8 text-gray-200">
              Areas of Interest
            </h3>
            <div className="flex flex-wrap justify-center gap-4">
              {about.interests.map((interest, index) => (
                <motion.div
                  key={index}
                  className="px-6 py-3 glass-effect rounded-full border border-primary/30 hover:glow-border transition-all cursor-default"
                  whileHover={{ scale: 1.05, y: -5 }}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: index * 0.1 }}
                >
                  <span className="text-gray-300">{interest}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Education Timeline */}
          <motion.div variants={itemVariants}>
            <h3 className="text-2xl font-semibold text-center mb-12 text-gray-200">
              Education
            </h3>
            <div className="max-w-4xl mx-auto space-y-8">
              {education.map((edu, index) => (
                <motion.div
                  key={index}
                  className="relative pl-8 border-l-2 border-primary/30"
                  initial={{ opacity: 0, x: -50 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: index * 0.2 }}
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-0 top-0 w-4 h-4 bg-primary rounded-full -translate-x-[9px] animate-glow" />

                  <div className="glass-effect p-6 rounded-lg hover:glow-border transition-all">
                    <div className="flex items-start justify-between flex-wrap gap-4 mb-3">
                      <div>
                        <h4 className="text-xl font-semibold text-gray-200 mb-2">
                          {edu.institution}
                        </h4>
                        <p className="text-primary font-medium flex items-center gap-2">
                          <GraduationCap size={18} />
                          {edu.degree}
                        </p>
                      </div>
                      <div className="text-right">
                        {edu.cgpa && (
                          <p className="text-gray-300 font-semibold mb-1">
                            CGPA: {edu.cgpa}
                          </p>
                        )}
                        {edu.score && (
                          <p className="text-gray-300 font-semibold mb-1">
                            Score: {edu.score}
                          </p>
                        )}
                      </div>
                    </div>
                    <div className="flex items-center gap-4 text-sm text-gray-400">
                      <span className="flex items-center gap-1">
                        <Calendar size={16} />
                        {edu.duration}
                      </span>
                      <span className="flex items-center gap-1">
                        <MapPin size={16} />
                        {edu.location}
                      </span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
