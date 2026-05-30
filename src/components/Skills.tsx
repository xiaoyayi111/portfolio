"use client";

import { motion } from "framer-motion";
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  ResponsiveContainer,
} from "recharts";

const skillData = [
  { subject: "技术理解与落地", value: 9, fullMark: 10 },
  { subject: "数据驱动", value: 9, fullMark: 10 },
  { subject: "复杂项目管理", value: 8, fullMark: 10 },
  { subject: "用户体验导向", value: 8, fullMark: 10 },
  { subject: "跨部门协同", value: 9, fullMark: 10 },
];

const skillDescriptions = [
  {
    title: "技术理解与落地",
    description: "深入理解NLP与大模型技术，成功转化为产品方案",
    score: 9,
  },
  {
    title: "数据驱动与量化思维",
    description: "注重用数据说话，持续追踪与优化",
    score: 9,
  },
  {
    title: "复杂项目管理",
    description: "有效管理多部门、多环节的复杂项目",
    score: 8,
  },
  {
    title: "用户体验导向",
    description: "关注用户体验，缩短进线时间、提升满意度",
    score: 8,
  },
  {
    title: "跨部门协同",
    description: "建立沟通机制，推动项目按时高质量交付",
    score: 9,
  },
];

const workStyleTags = ["极简高效", "数据驱动", "绝对执行"];

export default function Skills() {
  return (
    <section id="skills" className="py-24 md:py-32 bg-[var(--gray-light)]">
      <div className="max-w-[1200px] mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-[var(--primary)] mb-4">
            能力画像
          </h2>
          <div className="w-16 h-1 bg-[var(--accent)] rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Radar chart */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="w-full h-[350px] md:h-[400px]"
          >
            <ResponsiveContainer width="100%" height="100%">
              <RadarChart data={skillData} cx="50%" cy="50%" outerRadius="75%">
                <PolarGrid stroke="#e5e7eb" />
                <PolarAngleAxis
                  dataKey="subject"
                  tick={{ fill: "#333", fontSize: 12 }}
                />
                <PolarRadiusAxis
                  angle={90}
                  domain={[0, 10]}
                  tick={{ fill: "#9ca3af", fontSize: 10 }}
                />
                <Radar
                  name="能力"
                  dataKey="value"
                  stroke="#3B82F6"
                  fill="#3B82F6"
                  fillOpacity={0.2}
                  strokeWidth={2}
                />
              </RadarChart>
            </ResponsiveContainer>
          </motion.div>

          {/* Skills list */}
          <div>
            <div className="space-y-4 mb-8">
              {skillDescriptions.map((skill, i) => (
                <motion.div
                  key={skill.title}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  className="flex items-start gap-3"
                >
                  <div className="flex-shrink-0 w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center">
                    <span className="text-sm font-bold text-[var(--accent)]">
                      {skill.score}
                    </span>
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-[var(--gray-dark)]">
                      {skill.title}
                    </h4>
                    <p className="text-xs text-[var(--gray)]">
                      {skill.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Work style tags */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.6 }}
            >
              <h4 className="text-sm font-semibold text-[var(--gray-dark)] mb-3">
                工作风格
              </h4>
              <div className="flex flex-wrap gap-2">
                {workStyleTags.map((tag) => (
                  <span
                    key={tag}
                    className="px-4 py-1.5 bg-[var(--primary)] text-white text-sm font-medium rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
