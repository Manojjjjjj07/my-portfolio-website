"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Code, Layers, Wrench, Cloud, Database, Brain,} from "lucide-react";
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

// Skill proficiency levels for visual representation
const skillLevels: Record<string, Record<string, number>> = {
  "Programming Languages": { Python: 95, "C++": 85, SQL: 90, JavaScript: 88, HTML: 92, CSS: 90 },
  "Frameworks & Libraries": { Django: 90, Flask: 88, TensorFlow: 85, React: 87, "Next.js": 90 },
  "Tools & Systems": { Docker: 88, Kubernetes: 85, Jenkins: 82, "Apache Kafka": 80, Git: 95, "Unix/Linux": 90 },
  "Cloud Platforms": { "Google Cloud Platform": 85, "AWS (SageMaker, EC2, EMR, S3)": 88 },
  "Databases": { PostgreSQL: 90, MySQL: 88, "AWS S3": 85 },
  "Expertise": { "Distributed Systems": 87, "Machine Learning": 92, AI: 90, NLP: 88, "Web Development": 90, "Networking (TCP/IP)": 82 },
};

export default function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [hoveredCategory, setHoveredCategory] = useState<string | null>(null);
  const [selectedSkill, setSelectedSkill] = useState<string | null>(null);

  return (
    <section id="skills" className="py-20 relative overflow-hidden" ref={ref}>
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-black/50" />
      
      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-primary/30 rounded-full"
            initial={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.2, 0.5, 0.2],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header with Enhanced Animation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={isInView ? { scale: 1 } : {}}
            transition={{ duration: 0.5, type: "spring" }}
            className="inline-flex items-center gap-2 mb-4"
          >
            
            <h2 className="text-4xl md:text-5xl font-bold text-gradient">
              Technical Skills
            </h2>
          </motion.div>
          <motion.div
            initial={{ width: 0 }}
            animate={isInView ? { width: 80 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="h-1 bg-gradient-primary mx-auto rounded-full"
          />
          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.5 }}
            className="mt-4 text-gray-400 text-lg"
          >
            Hover over categories to explore my expertise
          </motion.p>
        </motion.div>

        {/* Hexagonal Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {Object.entries(skills).map(([category, items], index) => {
            const Icon = categoryIcons[category] || Code;
            const isHovered = hoveredCategory === category;
            
            return (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 50, rotateX: -15 }}
                animate={isInView ? { opacity: 1, y: 0, rotateX: 0 } : {}}
                transition={{
                  delay: index * 0.15,
                  duration: 0.7,
                  type: "spring",
                  stiffness: 100,
                }}
                onHoverStart={() => setHoveredCategory(category)}
                onHoverEnd={() => setHoveredCategory(null)}
                className="group relative"
                style={{ perspective: 1000 }}
              >
                {/* Glassmorphic Card */}
                <motion.div
                  className="relative glass-effect p-8 rounded-2xl border border-white/10 overflow-hidden"
                  whileHover={{
                    y: -15,
                    scale: 1.02,
                    borderColor: "rgba(255, 106, 0, 0.5)",
                  }}
                  transition={{ duration: 0.3 }}
                >
                  {/* Gradient Glow Effect */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    initial={false}
                    animate={isHovered ? { scale: 1.5, rotate: 45 } : { scale: 1, rotate: 0 }}
                  />

                  {/* Animated Border */}
                  <motion.div
                    className="absolute inset-0 rounded-2xl"
                    initial={false}
                    animate={isHovered ? {
                      boxShadow: "0 0 30px rgba(255, 106, 0, 0.6), inset 0 0 20px rgba(255, 106, 0, 0.1)"
                    } : {}}
                    transition={{ duration: 0.3 }}
                  />

                  {/* Content */}
                  <div className="relative z-10">
                    {/* Category Header with Hexagon Icon Container */}
                    <div className="flex items-center gap-4 mb-6">
                      <motion.div
                        className="relative p-4 rounded-xl bg-gradient-to-br from-primary/20 to-primary/5 group-hover:from-primary/30 group-hover:to-primary/10"
                        whileHover={{ rotate: 360, scale: 1.1 }}
                        transition={{ duration: 0.6 }}
                      >
                        {/* Hexagon Border Effect */}
                        <div className="absolute inset-0 rounded-xl border-2 border-primary/30 group-hover:border-primary/60 transition-colors" />
                        <Icon className="text-primary relative z-10" size={28} />
                      </motion.div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-200 group-hover:text-gradient transition-all">
                          {category}
                        </h3>
                        <p className="text-sm text-gray-500">{items.length} skills</p>
                      </div>
                    </div>

                    {/* Skills with Progress Indicators */}
                    <div className="space-y-3">
                      {items.map((skill, skillIndex) => {
                        const proficiency = skillLevels[category]?.[skill] || 80;
                        const isSelected = selectedSkill === `${category}-${skill}`;
                        
                        return (
                          <motion.div
                            key={skillIndex}
                            initial={{ opacity: 0, x: -20 }}
                            animate={isInView ? { opacity: 1, x: 0 } : {}}
                            transition={{
                              delay: (index * 0.1) + (skillIndex * 0.05),
                              duration: 0.4,
                            }}
                            className="relative"
                          >
                            {/* Skill Badge with Progress Bar */}
                            <motion.div
                              className="relative overflow-hidden rounded-lg border border-white/10 bg-white/5 hover:bg-white/10 cursor-pointer group/skill"
                              whileHover={{ scale: 1.05, x: 5 }}
                              whileTap={{ scale: 0.98 }}
                              onClick={() => setSelectedSkill(isSelected ? null : `${category}-${skill}`)}
                            >
                              {/* Animated Progress Bar Background */}
                              <motion.div
                                className="absolute inset-0 bg-gradient-to-r from-primary/20 to-transparent"
                                initial={{ width: 0 }}
                                animate={isInView ? { width: `${proficiency}%` } : {}}
                                transition={{
                                  delay: (index * 0.1) + (skillIndex * 0.1),
                                  duration: 1,
                                  ease: "easeOut",
                                }}
                              />
                              
                              {/* Skill Name */}
                              <div className="relative z-10 px-4 py-2.5 flex items-center justify-between">
                                <span className="text-sm font-medium text-gray-300 group-hover/skill:text-primary transition-colors">
                                  {skill}
                                </span>
                                
                                {/* Proficiency Badge */}
                                <motion.span
                                  className="text-xs font-bold text-primary opacity-0 group-hover/skill:opacity-100 transition-opacity"
                                  initial={{ scale: 0 }}
                                  animate={isSelected ? { scale: 1 } : {}}
                                >
                                  {proficiency}%
                                </motion.span>
                              </div>

                              {/* Shimmer Effect */}
                              <motion.div
                                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"
                                initial={{ x: "-100%" }}
                                animate={{ x: "200%" }}
                                transition={{
                                  duration: 2,
                                  repeat: Infinity,
                                  repeatDelay: 3,
                                  ease: "linear",
                                }}
                              />
                            </motion.div>
                          </motion.div>
                        );
                      })}
                    </div>

                    {/* Category Stats */}
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={isHovered ? { opacity: 1, height: "auto" } : { opacity: 0, height: 0 }}
                      className="mt-4 pt-4 border-t border-white/10"
                    >
                      <div className="flex items-center justify-between text-xs text-gray-400">
                        <span>Proficiency Level</span>
                        <motion.span
                          className="font-bold text-primary"
                          initial={{ scale: 0 }}
                          animate={isHovered ? { scale: 1 } : { scale: 0 }}
                          transition={{ delay: 0.2 }}
                        >
                          Expert
                        </motion.span>
                      </div>
                    </motion.div>
                  </div>

                  {/* Corner Accent */}
                  <motion.div
                    className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-primary/20 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity"
                    initial={false}
                    animate={isHovered ? { scale: 1.5, rotate: 90 } : {}}
                  />
                </motion.div>

                {/* Floating Particles around Card */}
                {isHovered && (
                  <>
                    {[...Array(5)].map((_, i) => (
                      <motion.div
                        key={i}
                        className="absolute w-1 h-1 bg-primary rounded-full"
                        initial={{
                          x: "50%",
                          y: "50%",
                          scale: 0,
                        }}
                        animate={{
                          x: `${50 + Math.cos(i * 72 * Math.PI / 180) * 100}%`,
                          y: `${50 + Math.sin(i * 72 * Math.PI / 180) * 100}%`,
                          scale: [0, 1, 0],
                        }}
                        transition={{
                          duration: 1,
                          repeat: Infinity,
                          delay: i * 0.2,
                        }}
                      />
                    ))}
                  </>
                )}
              </motion.div>
            );
          })}
        </div>

        {/* Skill Summary Footer */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1, duration: 0.6 }}
          className="mt-16 text-center"
        >
          <div className="inline-flex items-center gap-8 glass-effect px-8 py-4 rounded-full border border-primary/30">
            <div className="text-center">
              <p className="text-3xl font-bold text-gradient">{Object.keys(skills).length}</p>
              <p className="text-sm text-gray-400">Categories</p>
            </div>
            <div className="w-px h-12 bg-white/20" />
            <div className="text-center">
              <p className="text-3xl font-bold text-gradient">
                {Object.values(skills).reduce((acc, curr) => acc + curr.length, 0)}
              </p>
              <p className="text-sm text-gray-400">Technologies</p>
            </div>
            <div className="w-px h-12 bg-white/20" />
            <div className="text-center">
              <p className="text-3xl font-bold text-gradient">5+</p>
              <p className="text-sm text-gray-400">Years Experience</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
