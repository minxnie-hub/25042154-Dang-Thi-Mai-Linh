import Link from "next/link";
import { Menu, Sparkles } from "lucide-react";
import { basePath } from "@/lib/paths";

export function SiteHeader() {
  return (
    <header className="site-header">
      <div className="site-header__inner">
        <Link href="/" className="brand-mark" aria-label="Trang chủ Portfolio Mai Linh">
          <span className="brand-mark__stamp">学</span>
          <span>
            <b>Mai Linh</b>
            <small>Study archive</small>
          </span>
        </Link>
        <nav className="desktop-nav" aria-label="Điều hướng chính">
          <Link href="/#gioi-thieu">Giới thiệu</Link>
          <Link href="/#hanh-trinh">Hành trình</Link>
          <Link href="/#bai-tap">Bài tập</Link>
          <Link href="/#tong-ket">Tổng kết</Link>
          <a href={`${basePath}/documents/thong-tin.pdf`} target="_blank" rel="noreferrer" className="nav-pill">
            <Sparkles size={15} /> Hồ sơ gốc
          </a>
        </nav>
        <details className="mobile-menu">
          <summary aria-label="Mở menu"><Menu size={22} /></summary>
          <div className="mobile-menu__panel">
            <Link href="/#gioi-thieu">Giới thiệu</Link>
            <Link href="/#hanh-trinh">Hành trình</Link>
            <Link href="/#bai-tap">Bài tập</Link>
            <Link href="/#tong-ket">Tổng kết</Link>
          </div>
        </details>
      </div>
    </header>
  );
}
