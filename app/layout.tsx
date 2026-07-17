import type { Metadata } from "next";
import "./globals.css";
import { SiteHeader } from "@/components/SiteHeader";

export const metadata: Metadata = {
  title: "Đặng Thị Mai Linh · Portfolio học tập",
  description: "Portfolio học phần Nhập môn Công nghệ số và Ứng dụng Trí tuệ nhân tạo.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="vi">
      <body>
        <SiteHeader />
        {children}
      </body>
    </html>
  );
}
