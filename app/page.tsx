import Link from "next/link";
import {
  ArrowUpRight,
  BookOpenCheck,
  BrainCircuit,
  FileArchive,
  FolderKanban,
  Languages,
  ShieldCheck,
  Sparkles,
  UsersRound,
} from "lucide-react";
import { Decor } from "@/components/Decor";
import { asset } from "@/lib/paths";
import { works } from "@/lib/works";

const iconMap = {
  "bai-1": FileArchive,
  "bai-2": BookOpenCheck,
  "bai-3": BrainCircuit,
  "bai-4": UsersRound,
  "bai-5": Sparkles,
  "bai-6": ShieldCheck,
  "bai-7": FolderKanban,
};

export default function Home() {
  const coreWorks = works.filter((work) => !work.optional);
  const extended = works.find((work) => work.optional)!;

  return (
    <main>
      <section className="hero" id="gioi-thieu">
        <Decor name="sakura" className="hero-sakura" />
        <Decor name="fan" className="hero-fan" />
        <Decor name="crane" className="hero-crane" />
        <div className="hero__grid shell">
          <div className="hero__copy">
            <div className="eyebrow"><Languages size={17} /> 学びの記録 · Study archive</div>
            <h1>Đặng Thị<br /><em>Mai Linh</em></h1>
            <p className="hero__lead">Học ngôn ngữ bằng tư duy số.</p>
            <p className="hero__body">
              Mình là sinh viên năm nhất ngành Ngôn ngữ Nhật tại Trường Đại học Ngoại ngữ – ĐHQGHN. Portfolio này lưu lại quá trình làm quen với công nghệ số, AI và cách ứng dụng chúng vào việc học chuyên ngành.
            </p>
            <div className="hero__meta">
              <span>MSSV · 25042154</span>
              <span>Ngôn ngữ Nhật</span>
              <span>ULIS · ĐHQGHN</span>
            </div>
            <div className="hero__actions">
              <a href="#bai-tap" className="button button--primary">Khám phá 6 bài tập <ArrowUpRight size={18} /></a>
              <a href={asset("/documents/thong-tin.pdf")} target="_blank" rel="noreferrer" className="button button--ghost">Xem hồ sơ gốc</a>
            </div>
          </div>

          <div className="hero__portrait-wrap">
            <div className="washi-tape" />
            <div className="hero__portrait">
              <img src={asset("/avt.jpg")} alt="Ảnh chân dung Đặng Thị Mai Linh trong trang phục yukata" />
              <div className="portrait-caption">
                <b>Mai Linh</b>
                <span>日本語を勉強しています。</span>
              </div>
            </div>
            <Decor name="omamori" className="portrait-omamori" />
            <Decor name="hiragana" className="portrait-hiragana" />
          </div>
        </div>
      </section>

      <section className="intro-section shell">
        <div className="intro-grid">
          <div className="section-heading">
            <span className="section-kicker">ABOUT · 私について</span>
            <h2>Một hành trình học tập được lưu lại có hệ thống</h2>
          </div>
          <div className="intro-copy">
            <p>
              Mục tiêu của học phần là luyện tập các kỹ năng số phục vụ chuyên ngành: quản lý tệp, tìm kiếm và đánh giá thông tin, viết prompt, cộng tác trực tuyến và sử dụng AI hiệu quả, có trách nhiệm.
            </p>
            <p>
              Portfolio được xây dựng để hệ thống hóa tiến trình học tập, lưu trữ minh chứng thực hành và giúp người xem theo dõi rõ cách mỗi kỹ năng được hình thành qua từng bài.
            </p>
          </div>
          <Decor name="notebook" className="intro-notebook" />
        </div>
      </section>

      <section className="journey-section" id="hanh-trinh">
        <div className="shell">
          <div className="section-heading centered">
            <span className="section-kicker">LEARNING JOURNEY</span>
            <h2>6 chặng chính · một mạch phát triển</h2>
            <p>Từ thao tác nền tảng đến tư duy phản biện và liêm chính học thuật.</p>
          </div>
          <div className="journey-line" aria-label="Các chặng học tập">
            {coreWorks.map((work, index) => (
              <div className="journey-node" key={work.slug}>
                <span>{work.number}</span>
                <b>{work.shortTitle}</b>
                <small>{index === 0 ? "Bắt đầu" : index === coreWorks.length - 1 ? "Trách nhiệm" : "Phát triển"}</small>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="projects-section shell" id="bai-tap">
        <div className="section-heading projects-heading">
          <span className="section-kicker">SELECTED COURSEWORK</span>
          <h2>6 bài tập · trình bày lại từ báo cáo gốc</h2>
        </div>

        <div className="projects-grid">
          {coreWorks.map((work) => {
            const Icon = iconMap[work.slug as keyof typeof iconMap];
            return (
              <article className={`project-card ${work.featured ? "project-card--featured" : ""}`} key={work.slug}>
                <div className="project-card__top">
                  <span className="project-number">{work.number}</span>
                  <Icon size={26} />
                </div>
                <div>
                  <span className="project-eyebrow">{work.eyebrow}</span>
                  <h3>{work.shortTitle}</h3>
                  <p>{work.summary}</p>
                </div>
                <div className="project-tags">
                  {work.skills.slice(0, 3).map((skill) => <span key={skill}>{skill}</span>)}
                </div>
                <Link href={`/bai/${work.slug}`} className="project-link">Đọc bài đầy đủ <ArrowUpRight size={18} /></Link>
              </article>
            );
          })}
        </div>

        <aside className="extended-card">
          <div>
            <span className="project-number">+1</span>
            <span className="project-eyebrow">Nghiên cứu mở rộng</span>
            <h3>{extended.shortTitle}</h3>
            <p>{extended.summary}</p>
          </div>
          <Link href={`/bai/${extended.slug}`} className="button button--ghost">Xem nội dung mở rộng <ArrowUpRight size={18} /></Link>
          <Decor name="crane" className="extended-crane" />
        </aside>
      </section>

      <section className="reflection-section" id="tong-ket">
        <div className="shell reflection-grid">
          <div className="reflection-title">
            <span className="section-kicker">REFLECTION · 振り返り</span>
            <h2>Điều mình mang theo sau học phần</h2>
            <Decor name="stamp" className="reflection-stamp" />
          </div>
          <div className="reflection-card">
            <span>01</span>
            <h3>Kiến thức & kỹ năng</h3>
            <p>Quản lý tài liệu, đánh giá nguồn học thuật, viết prompt hiệu quả, cộng tác trực tuyến và biết điều chỉnh đầu ra do AI tạo ra.</p>
          </div>
          <div className="reflection-card">
            <span>02</span>
            <h3>Khó khăn</h3>
            <p>Chọn lọc nguồn đáng tin cậy, đặt prompt đủ rõ, kiểm chứng nội dung và giữ liêm chính học thuật trong quá trình sử dụng AI.</p>
          </div>
          <div className="reflection-card">
            <span>03</span>
            <h3>Kết quả</h3>
            <p>Phát triển kỹ năng làm việc nhóm, tư duy hệ thống và khả năng làm chủ công cụ AI thay vì phụ thuộc vào công cụ.</p>
          </div>
        </div>
      </section>

      <footer className="site-footer">
        <div className="shell footer-inner">
          <div>
            <b>Đặng Thị Mai Linh</b>
            <p>Portfolio học phần Nhập môn Công nghệ số và Ứng dụng Trí tuệ nhân tạo.</p>
          </div>
          <div className="footer-jp">一歩ずつ、前へ。</div>
        </div>
      </footer>
    </main>
  );
}
