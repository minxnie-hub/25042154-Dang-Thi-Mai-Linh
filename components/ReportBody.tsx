import type { ReactNode } from "react";
import { asset } from "@/lib/paths";

function classify(line: string) {
  const value = line.trim();
  if (!value) return "blank";
  if (/^BÁO CÁO|^BÀI TẬP:/.test(value)) return "title";
  if (/^[IVX]+\./.test(value) || /^[IVX]+\s/.test(value)) return "h2";
  if (/^\d+\.\s/.test(value) || /^Tác vụ \d/.test(value)) return "h3";
  if (/^Prompt \d|^Prompt (Cơ bản|Cải tiến|Nâng cao)/.test(value)) return "h4";
  if (/^[●○•]|^-\s|^-\u200b|^\+\s/.test(value)) return "bullet";
  if (/^\[TABLE_SLOT\]/.test(value)) return "table";
  if (/^[A-ZÀ-Ỹ0-9 &/()\-–:]{18,}$/.test(value)) return "h2";
  return "text";
}

function normalizeText(raw: string) {
  const source = raw
    .replace(/\r/g, "")
    .replace(/[\u200b\ufeff]/g, "")
    .replace(/\s+$/gm, "")
    .split("\n");

  const out: string[] = [];
  let paragraph = "";
  const flush = () => {
    if (paragraph.trim()) out.push(paragraph.trim());
    paragraph = "";
  };

  for (const rawLine of source) {
    const line = rawLine.trim().replace(/\s+/g, " ");
    const kind = classify(line);
    if (kind === "blank") {
      flush();
      continue;
    }
    if (kind !== "text") {
      flush();
      out.push(line);
      continue;
    }
    paragraph = paragraph ? `${paragraph} ${line}` : line;
  }
  flush();
  return out;
}

export function ReportBody({
  text,
  table,
  slug,
  evidenceGroups = [],
}: {
  text: string;
  table?: ReactNode;
  slug: string;
  evidenceGroups?: Array<{ after: string; pages: string[]; caption: string }>;
}) {
  const lines = normalizeText(text);
  return (
    <div className="report-body">
      {lines.map((line, index) => {
        const kind = classify(line);
        const evidence = evidenceGroups.find((group) => line.startsWith(group.after));
        const content = (() => {
          if (kind === "table") return <div>{table}</div>;
          if (kind === "title") return <h1 className="report-title">{line}</h1>;
          if (kind === "h2") return <h2>{line}</h2>;
          if (kind === "h3") return <h3>{line}</h3>;
          if (kind === "h4") return <h4>{line}</h4>;
          if (kind === "bullet") {
            return <div className="report-bullet"><span>✦</span><p>{line.replace(/^[●○•+\-]+\s*/, "")}</p></div>;
          }
          return <p>{line}</p>;
        })();
        return (
          <div key={index} className="report-line">
            {content}
            {evidence && (
              <figure className={`inline-evidence inline-evidence--${Math.min(evidence.pages.length, 4)}`}>
                <div className="inline-evidence__images">
                  {evidence.pages.map((page, imageIndex) => (
                    <a href={asset(`/evidence/${slug}/${page}`)} target="_blank" rel="noreferrer" key={page}>
                      <img src={asset(`/evidence/${slug}/${page}`)} alt={`${evidence.caption} · ảnh ${imageIndex + 1}`} loading="lazy" />
                    </a>
                  ))}
                </div>
                <figcaption>{evidence.caption}</figcaption>
              </figure>
            )}
          </div>
        );
      })}
    </div>
  );
}
