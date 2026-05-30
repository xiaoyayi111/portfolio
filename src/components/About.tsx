"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";

interface StatCardProps {
  label: string;
  value: string;
  suffix: string;
  description: string;
  delay: number;
}

function AnimatedNumber({ value, suffix }: { value: string; suffix: string }) {
  const [displayValue, setDisplayValue] = useState("0");
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;

    const numericValue = parseFloat(value.replace(/,/g, ""));
    const duration = 2000;
    const startTime = Date.now();

    const animate = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = numericValue * eased;

      if (value.includes(",")) {
        setDisplayValue(Math.floor(current).toLocaleString());
      } else if (value.includes(".")) {
        setDisplayValue(current.toFixed(1));
      } else {
        setDisplayValue(Math.floor(current).toString());
      }

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        setDisplayValue(value);
      }
    };

    requestAnimationFrame(animate);
  }, [isInView, value]);

  return (
    <span ref={ref} className="text-3xl md:text-4xl font-bold text-[var(--primary)]">
      {displayValue}
      <span className="text-xl">{suffix}</span>
    </span>
  );
}

function StatCard({ label, value, suffix, description, delay }: StatCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ y: -4, boxShadow: "0 10px 15px rgba(0,0,0,0.15)" }}
      className="bg-white rounded-xl p-6 shadow-[0_4px_6px_rgba(0,0,0,0.1)] border border-gray-100 transition-all duration-300"
    >
      <AnimatedNumber value={value} suffix={suffix} />
      <p className="text-sm font-semibold text-[var(--gray-dark)] mt-2">{label}</p>
      <p className="text-xs text-[var(--gray)] mt-1">{description}</p>
    </motion.div>
  );
}

export default function About() {
  const ref = useRef(null);

  return (
    <section id="about" ref={ref} className="py-24 md:py-32 bg-[var(--gray-light)]">
      <div className="max-w-[1200px] mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-[var(--primary)] mb-4">
            关于我
          </h2>
          <div className="w-16 h-1 bg-[var(--accent)] rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Left: Text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p className="text-base leading-relaxed text-[var(--gray-dark)]">
              我是一名AI产品经理，目前在小米科技集团信息技术部AI应用中心工作，主要负责智能客服相关产品线以及内部AI助手&ldquo;龙虾&rdquo;的核心模块优化。
            </p>
            <p className="text-base leading-relaxed text-[var(--gray-dark)] mt-4">
              我的核心职责是运用NLP和大模型技术，为中国区服务部的客服与售后业务实现降本增效和用户口碑提升。我在热线机器人、一线人工接待和投诉分析等环节推进了AI的应用和落地。
            </p>
            <p className="text-base leading-relaxed text-[var(--gray-dark)] mt-4">
              我拥有华中科技大学人工智能实验室的硕士背景，擅长将复杂的技术能力转化为具体的产品方案，并通过跨部门协同推动落地，最终用数据证明产品价值。
            </p>
          </motion.div>

          {/* Right: Stats cards */}
          <div className="grid grid-cols-2 gap-4">
            <StatCard
              label="核心项目"
              value="7"
              suffix="个"
              description="主导或深度参与"
              delay={0.1}
            />
            <StatCard
              label="累计降本"
              value="1,264"
              suffix="万+"
              description="年化降本金额"
              delay={0.2}
            />
            <StatCard
              label="搜索准确率"
              value="87.5"
              suffix="%"
              description="超越行业标杆"
              delay={0.3}
            />
            <StatCard
              label="投诉识别"
              value="9"
              suffix="大品类"
              description="AI准确率81.75%"
              delay={0.4}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
