"use client";

export default function Footer() {
  return (
    <footer className="py-8 bg-[var(--primary)] text-white">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-white/70">
            &copy; {new Date().getFullYear()} 肖雅尹. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a
              href="/resume.pdf"
              download
              className="text-sm text-white/70 hover:text-white transition-colors"
            >
              下载简历
            </a>
            <a
              href="#"
              className="text-sm text-white/70 hover:text-white transition-colors"
            >
              返回顶部
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
