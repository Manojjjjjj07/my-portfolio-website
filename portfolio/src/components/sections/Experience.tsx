"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Briefcase, MapPin, Calendar, CheckCircle2 } from "lucide-react";
import { experience } from "@/data/portfolio";

export default function Experience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="py-20 relative" ref={ref}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gradient mb-4">
            Work Experience
          </h2>
          <div className="w-20 h-1 bg-gradient-primary mx-auto" />
        </motion.div>

        {/* Experience Timeline */}
        <div className="max-w-4xl mx-auto">
          {experience.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              className="relative pl-8 border-l-2 border-primary/30 pb-12 last:pb-0"
            >
              {/* Timeline Dot */}
              <div className="absolute left-0 top-0 w-4 h-4 bg-primary rounded-full -translate-x-[9px] animate-glow" />

              {/* Content Card */}
              <motion.div
                className="glass-effect p-8 rounded-lg hover:glow-border transition-all"
                whileHover={{ y: -5 }}
              >
                {/* Header */}
                <div className="mb-6">
                  <div className="flex items-start justify-between flex-wrap gap-4 mb-3">
                    <div>
                      <h3 className="text-2xl font-semibold text-gray-200 mb-2 flex items-center gap-2">
                        <Briefcase className="text-primary" size={24} />
                        {exp.title}
                      </h3>
                      <p className="text-xl text-primary font-medium">
                        {exp.company}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 text-sm text-gray-400 flex-wrap">
                    <span className="flex items-center gap-1">
                      <Calendar size={16} />
                      {exp.duration}
                    </span>
                    <span className="flex items-center gap-1">
                      <MapPin size={16} />
                      {exp.location}
                    </span>
                  </div>
                </div>

                {/* Highlights */}
                <div className="space-y-3">
                  {exp.highlights.map((highlight, hIndex) => (
                    <motion.div
                      key={hIndex}
                      initial={{ opacity: 0, x: -20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ delay: (index * 0.2) + (hIndex * 0.1) }}
                      className="flex items-start gap-3 group"
                    >
                      <CheckCircle2
                        className="text-primary flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform"
                        size={18}
                      />
                      <p className="text-gray-300 leading-relaxed">
                        {highlight}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
