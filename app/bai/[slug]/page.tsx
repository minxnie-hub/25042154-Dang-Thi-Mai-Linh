import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, Download, ExternalLink } from "lucide-react";
import { DataTable } from "@/components/DataTable";
import { Decor } from "@/components/Decor";
import { EvidenceGallery } from "@/components/EvidenceGallery";
import { ReportBody } from "@/components/ReportBody";
import { asset } from "@/lib/paths";
import { getReportText, getWork, sourceTables, works } from "@/lib/works";

export function generateStaticParams() {
  return works.map((work) => ({ slug: work.slug }));
}

export default async function WorkPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const work = getWork(slug);
  if (!work) notFound();

  const reportText = getReportText(work);
  const tableData = work.table ? sourceTables[work.table] : undefined;
  const currentIndex = works.findIndex((item) => item.slug === work.slug);
  const previous = currentIndex > 0 ? works[currentIndex - 1] : undefined;
  const next = currentIndex < works.length - 1 ? works[currentIndex + 1] : undefined;

  return (
    <main className="work-page">
      <section className="work-hero">
        <Decor name="sakura" className="work-hero-sakura" />
        <Decor name={work.slug === "bai-5" ? "fan" : work.slug === "bai-6" ? "omamori" : "crane"} className="work-hero-decor" />
        <div className="shell work-hero__inner">
          <Link href="/" className="back-link"><ArrowLeft size={17} /> Trở về trang chủ</Link>
          <span className="work-number">{work.number}</span>
          <span className="section-kicker">{work.eyebrow}</span>
          <h1>{work.title}</h1>
          <p>{work.summary}</p>
          <div className="work-tags">
            {work.skills.map((skill) => <span key={skill}>{skill}</span>)}
          </div>
          <div className="work-actions">
            <a className="button button--primary" href={asset(`/documents/${work.slug}.pdf`)} target="_blank" rel="noreferrer">
              <ExternalLink size={17} /> Mở PDF gốc
            </a>
            <a className="button button--ghost" href={asset(`/documents/${work.slug}.pdf`)} download>
              <Download size={17} /> Tải báo cáo
            </a>
          </div>
        </div>
      </section>

      <div className="work-layout shell">
        <aside className="work-toc">
          <div className="toc-note">
            <span>読む順番</span>
            <b>Thứ tự đọc</b>
          </div>
          <a href="#noi-dung">01 · Nội dung báo cáo</a>
          {tableData && <a href="#bang-du-lieu">02 · Bảng trình bày lại</a>}
          <a href="#minh-chung">{tableData ? "03" : "02"} · Minh chứng gốc</a>
          <a href={asset(`/documents/${work.slug}.pdf`)} target="_blank" rel="noreferrer">PDF nguyên bản ↗</a>
        </aside>

        <article className="work-content" id="noi-dung">
          <div className="content-intro">
            <span>NỘI DUNG ĐƯỢC GIỮ NGUYÊN</span>
            <p>
              Báo cáo dưới đây được trình bày lại theo cấu trúc web để dễ theo dõi. Không thay đổi luận điểm, số liệu hay nội dung cốt lõi trong file gốc.
            </p>
          </div>
          <ReportBody
            text={reportText}
            slug={work.slug}
            evidenceGroups={work.evidenceGroups}
            table={tableData ? (
              <div id="bang-du-lieu">
                <DataTable headers={tableData.headers} rows={tableData.rows} caption="Bảng được kẻ lại từ báo cáo gốc" />
              </div>
            ) : undefined}
          />
        </article>
      </div>

      <div id="minh-chung" className="shell">
        <EvidenceGallery slug={work.slug} pages={work.pages} />
      </div>

      <nav className="work-pagination shell" aria-label="Điều hướng bài tập">
        {previous ? (
          <Link href={`/bai/${previous.slug}`} className="pagination-card pagination-card--prev">
            <ArrowLeft size={20} />
            <span><small>Bài trước</small><b>{previous.shortTitle}</b></span>
          </Link>
        ) : <div />}
        {next ? (
          <Link href={`/bai/${next.slug}`} className="pagination-card pagination-card--next">
            <span><small>Bài tiếp theo</small><b>{next.shortTitle}</b></span>
            <ArrowRight size={20} />
          </Link>
        ) : <div />}
      </nav>
    </main>
  );
}
