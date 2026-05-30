"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { HiMail, HiExternalLink } from "react-icons/hi";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In production, integrate with Formspree or similar
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
    setFormData({ name: "", email: "", company: "", message: "" });
  };

  return (
    <section id="contact" className="py-24 md:py-32 bg-[var(--gray-light)]">
      <div className="max-w-[1200px] mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-[var(--primary)] mb-4">
            联系我
          </h2>
          <div className="w-16 h-1 bg-[var(--accent)] rounded-full" />
          <p className="text-[var(--gray)] mt-4">
            期待与您的交流，欢迎留言或通过社交媒体联系我
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact form */}
          <motion.form
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            onSubmit={handleSubmit}
            className="space-y-5"
          >
            <div>
              <label className="block text-sm font-medium text-[var(--gray-dark)] mb-1.5">
                姓名 <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                required
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[var(--accent)] focus:border-transparent transition-all"
                placeholder="您的姓名"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-[var(--gray-dark)] mb-1.5">
                邮箱 <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                required
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[var(--accent)] focus:border-transparent transition-all"
                placeholder="your@email.com"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-[var(--gray-dark)] mb-1.5">
                公司
              </label>
              <input
                type="text"
                value={formData.company}
                onChange={(e) =>
                  setFormData({ ...formData, company: e.target.value })
                }
                className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[var(--accent)] focus:border-transparent transition-all"
                placeholder="您所在的公司（选填）"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-[var(--gray-dark)] mb-1.5">
                留言 <span className="text-red-500">*</span>
              </label>
              <textarea
                required
                rows={4}
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
                className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[var(--accent)] focus:border-transparent transition-all resize-none"
                placeholder="请留下您想说的话..."
              />
            </div>

            <button
              type="submit"
              className="w-full px-6 py-3.5 bg-[var(--accent)] text-white font-medium rounded-lg hover:bg-[var(--accent-light)] transition-colors duration-200 shadow-lg shadow-blue-500/25"
            >
              {isSubmitted ? "提交成功！" : "发送留言"}
            </button>
          </motion.form>

          {/* Social links */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col justify-center"
          >
            <div className="space-y-6">
              <div className="flex items-center gap-4 p-4 bg-white rounded-xl border border-gray-100 shadow-sm">
                <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center">
                  <HiMail className="text-[var(--accent)] text-xl" />
                </div>
                <div>
                  <p className="text-sm font-medium text-[var(--gray-dark)]">
                    邮箱
                  </p>
                  <a
                    href="mailto:contact@example.com"
                    className="text-sm text-[var(--accent)] hover:underline"
                  >
                    contact@example.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 bg-white rounded-xl border border-gray-100 shadow-sm">
                <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center">
                  <HiExternalLink className="text-[var(--accent)] text-xl" />
                </div>
                <div>
                  <p className="text-sm font-medium text-[var(--gray-dark)]">
                    LinkedIn
                  </p>
                  <a
                    href="#"
                    className="text-sm text-[var(--accent)] hover:underline"
                  >
                    linkedin.com/in/xiaoyayin
                  </a>
                </div>
              </div>
            </div>

            <div className="mt-8 p-6 bg-gradient-to-br from-[var(--primary)] to-[var(--primary-light)] rounded-xl text-white">
              <h4 className="font-semibold mb-2">期待合作</h4>
              <p className="text-sm text-white/80 leading-relaxed">
                我对AI在B端业务场景的应用有浓厚的兴趣和实践经验。如果您有合适的机会或想要交流AI产品相关话题，欢迎随时联系！
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
