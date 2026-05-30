"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { HiMenu, HiX } from "react-icons/hi";

const navLinks = [
  { name: "关于我", href: "#about" },
  { name: "项目展示", href: "#projects" },
  { name: "能力画像", href: "#skills" },
  { name: "教育背景", href: "#education" },
  { name: "联系我", href: "#contact" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      const sections = navLinks.map((link) => link.href.replace("#", ""));
      for (const section of sections.reverse()) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 150) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/90 backdrop-blur-md shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-[1200px] mx-auto px-6 py-4 flex items-center justify-between">
        <a
          href="#"
          className="text-xl font-bold text-[var(--primary)]"
        >
          肖雅尹
        </a>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`text-sm font-medium transition-colors duration-200 ${
                activeSection === link.href.replace("#", "")
                  ? "text-[var(--accent)]"
                  : "text-[var(--gray-dark)] hover:text-[var(--accent)]"
              }`}
            >
              {link.name}
            </a>
          ))}
          <a
            href="/resume.pdf"
            download
            className="px-4 py-2 bg-[var(--accent)] text-white text-sm font-medium rounded-lg hover:bg-[var(--accent-light)] transition-colors duration-200"
          >
            下载简历
          </a>
        </div>

        {/* Mobile menu toggle */}
        <button
          className="md:hidden text-[var(--gray-dark)]"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <HiX size={24} /> : <HiMenu size={24} />}
        </button>
      </div>

      {/* Mobile nav */}
      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-white/95 backdrop-blur-md border-t"
        >
          <div className="px-6 py-4 flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-sm font-medium text-[var(--gray-dark)] hover:text-[var(--accent)]"
              >
                {link.name}
              </a>
            ))}
            <a
              href="/resume.pdf"
              download
              className="px-4 py-2 bg-[var(--accent)] text-white text-sm font-medium rounded-lg text-center hover:bg-[var(--accent-light)] transition-colors duration-200"
            >
              下载简历
            </a>
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
}
