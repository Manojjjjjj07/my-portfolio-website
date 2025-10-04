"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Code, Layers, Wrench, Cloud, Database, Brain } from "lucide-react";
import { skills } from "@/data/portfolio";

import { LucideIcon } from "lucide-react";

const categoryIcons: Record<string, LucideIcon> = {
  "Programming Languages": Code,
  "Frameworks & Libraries": Layers,
  "Tools & Systems": Wrench,
  "Cloud Platforms": Cloud,
  "Databases": Database,
  "Expertise": Brain,
};

export default function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="py-20 relative bg-gradient-to-b from-transparent to-black/50" ref={ref}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gradient mb-4">
            Technical Skills
          </h2>
          <div className="w-20 h-1 bg-gradient-primary mx-auto" />
        </motion.div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {Object.entries(skills).map(([category, items], index) => {
            const Icon = categoryIcons[category] || Code;
            
            return (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="glass-effect p-6 rounded-lg hover:glow-border transition-all group"
                whileHover={{ y: -10 }}
              >
                {/* Category Header */}
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                    <Icon className="text-primary" size={24} />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-200">
                    {category}
                  </h3>
                </div>

                {/* Skills List */}
                <div className="flex flex-wrap gap-2">
                  {items.map((skill, skillIndex) => (
                    <motion.span
                      key={skillIndex}
                      className="px-3 py-1.5 bg-white/5 rounded-md text-sm text-gray-300 border border-white/10 hover:border-primary/50 hover:text-primary transition-all cursor-default"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={isInView ? { opacity: 1, scale: 1 } : {}}
                      transition={{ delay: (index * 0.1) + (skillIndex * 0.05) }}
                      whileHover={{ scale: 1.05 }}
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
