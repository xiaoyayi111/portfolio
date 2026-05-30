import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "肖雅尹 | AI产品经理",
  description: "AI产品经理个人简历网站 - 用AI技术为客服与售后业务实现降本增效",
  openGraph: {
    title: "肖雅尹 | AI产品经理",
    description: "用AI技术为客服与售后业务实现降本增效",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN" className={`${geistSans.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col font-sans">{children}</body>
    </html>
  );
}
