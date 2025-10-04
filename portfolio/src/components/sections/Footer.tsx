"use client";

import { motion } from "framer-motion";
import { ArrowUp, Linkedin, Github, Mail, Heart } from "lucide-react";
import { personalInfo } from "@/data/portfolio";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative py-12 border-t border-white/10 bg-gradient-to-b from-transparent to-black">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center md:text-left"
          >
            <h3 className="text-2xl font-bold text-gradient mb-2">
              SK<span className="text-primary">.</span>Manoj
            </h3>
            <p className="text-gray-400 text-sm">
              AI Engineer & Data Scientist
            </p>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="flex items-center gap-4"
          >
            <motion.a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 glass-effect rounded-lg hover:glow-border transition-all text-gray-400 hover:text-primary"
              whileHover={{ y: -5 }}
            >
              <Linkedin size={20} />
            </motion.a>
            <motion.a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 glass-effect rounded-lg hover:glow-border transition-all text-gray-400 hover:text-primary"
              whileHover={{ y: -5 }}
            >
              <Github size={20} />
            </motion.a>
            <motion.a
              href={`mailto:${personalInfo.email}`}
              className="p-3 glass-effect rounded-lg hover:glow-border transition-all text-gray-400 hover:text-primary"
              whileHover={{ y: -5 }}
            >
              <Mail size={20} />
            </motion.a>
          </motion.div>

          {/* Copyright */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-center md:text-right"
          >
            <p className="text-gray-400 text-sm flex items-center gap-2 justify-center md:justify-end">
              © 2025 S. K. Manoj | Designed with{" "}
              <Heart size={16} className="text-primary fill-primary" /> and AI
            </p>
          </motion.div>
        </div>

        {/* Scroll to Top Button */}
        <motion.button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 p-4 bg-gradient-primary rounded-full shadow-lg hover:shadow-xl transition-all z-50 group"
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <ArrowUp size={24} className="text-white group-hover:animate-bounce" />
        </motion.button>
      </div>
    </footer>
  );
}
