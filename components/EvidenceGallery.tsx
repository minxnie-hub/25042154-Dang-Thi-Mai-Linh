import { asset } from "@/lib/paths";

export function EvidenceGallery({ slug, pages }: { slug: string; pages: string[] }) {
  return (
    <section className="evidence-section" aria-labelledby="evidence-title">
      <div className="section-heading compact">
        <span className="section-kicker">MINH CHỨNG</span>
        <h2 id="evidence-title">Trang báo cáo gốc theo đúng thứ tự</h2>
        <p>Ảnh được giữ nguyên để đối chiếu; nội dung và bảng biểu phía trên đã được trình bày lại bằng HTML để dễ đọc trên mọi thiết bị.</p>
      </div>
      <div className="evidence-grid">
        {pages.map((page, index) => (
          <a
            key={page}
            className="evidence-card"
            href={asset(`/evidence/${slug}/${page}`)}
            target="_blank"
            rel="noreferrer"
            aria-label={`Mở trang minh chứng ${index + 1}`}
          >
            <img src={asset(`/evidence/${slug}/${page}`)} alt={`Minh chứng ${index + 1} của ${slug}`} loading="lazy" />
            <span>Trang {index + 1}</span>
          </a>
        ))}
      </div>
    </section>
  );
}
