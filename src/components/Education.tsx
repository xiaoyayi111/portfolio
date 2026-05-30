"use client";

import { motion } from "framer-motion";
import { HiAcademicCap } from "react-icons/hi";

export default function Education() {
  return (
    <section id="education" className="py-24 md:py-32">
      <div className="max-w-[1200px] mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-[var(--primary)] mb-4">
            教育背景
          </h2>
          <div className="w-16 h-1 bg-[var(--accent)] rounded-full" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          whileHover={{ y: -4 }}
          className="max-w-lg bg-white rounded-xl p-8 shadow-[0_4px_6px_rgba(0,0,0,0.1)] hover:shadow-[0_10px_15px_rgba(0,0,0,0.15)] transition-all duration-300 border border-gray-100"
        >
          <div className="flex items-start gap-4">
            <div className="w-14 h-14 bg-blue-50 rounded-xl flex items-center justify-center flex-shrink-0">
              <HiAcademicCap className="text-[var(--accent)] text-2xl" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-[var(--primary)]">
                华中科技大学
              </h3>
              <p className="text-base text-[var(--gray-dark)] mt-1">
                硕士研究生
              </p>
              <p className="text-sm text-[var(--gray)] mt-1">
                人工智能实验室
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-blue-50 text-[var(--accent)] text-xs font-medium rounded-full">
                  人工智能
                </span>
                <span className="px-3 py-1 bg-blue-50 text-[var(--accent)] text-xs font-medium rounded-full">
                  NLP
                </span>
                <span className="px-3 py-1 bg-blue-50 text-[var(--accent)] text-xs font-medium rounded-full">
                  985高校
                </span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
