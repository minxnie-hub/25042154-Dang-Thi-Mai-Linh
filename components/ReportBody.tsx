import type { CSSProperties, ReactNode } from "react";
import { asset } from "@/lib/paths";

type Kind = "blank" | "title" | "h2" | "h3" | "h4" | "bullet" | "table" | "text";

type EvidenceGroup = {
  after: string;
  assets: string[];
  caption: string;
  columns?: number;
  contain?: boolean;
};

function classify(line: string, slug: string): Kind {
  const value = line.trim();
  if (!value) return "blank";
  if (/^BÁO CÁO|^BÀI TẬP:/.test(value)) return "title";
  if (/^\[TABLE_SLOT\]/.test(value)) return "table";
  if (/^[IVX]+\./.test(value) || /^[IVX]+\s/.test(value)) return "h2";
  if (/^Tác vụ \d/.test(value)) return "h3";
  if (/^Prompt \d|^Prompt (Cơ bản|Cải tiến|Nâng cao)/.test(value)) return "h4";
  if (/^[●○•]|^-\s|^-\u200b|^\+\s/.test(value)) return "bullet";

  if (/^\d+\.\s/.test(value)) {
    if (
      slug === "bai-3" &&
      /^(1\. Một câu|2\. Danh sách|3\. Hạn chế|1\. Cấp độ|2\. Cấp độ|3\. Cấp độ)/.test(value)
    ) {
      return "bullet";
    }
    return "h3";
  }

  if (/^[A-ZÀ-Ỹ0-9 &/()\-–:]{18,}$/.test(value)) return "h2";
  return "text";
}

function normalizeText(raw: string, slug: string) {
  const source = raw
    .replace(/\r/g, "")
    .replace(/[\u200b\ufeff]/g, "")
    .replace(/\s+$/gm, "")
    .split("\n");

  const out: Array<{ kind: Kind; text: string }> = [];
  let current: { kind: Kind; text: string } | null = null;

  const flush = () => {
    if (current?.text.trim()) out.push({ ...current, text: current.text.trim() });
    current = null;
  };

  for (const rawLine of source) {
    const line = rawLine.trim().replace(/\s+/g, " ");
    const kind = classify(line, slug);

    if (kind === "blank") {
      flush();
      continue;
    }

    if (kind === "text") {
      if (current && (current.kind === "text" || current.kind === "bullet" || (slug === "bai-1" && current.kind === "h3"))) {
        current.text = `${current.text} ${line}`;
      } else if (current && (current.kind === "title" || current.kind === "h2") && /^[A-ZÀ-Ỹ0-9 &/()\-–:]+$/.test(line)) {
        current.text = `${current.text} ${line}`;
      } else {
        flush();
        current = { kind, text: line };
      }
      continue;
    }

    flush();
    current = { kind, text: line };
  }

  flush();
  return out;
}

function Evidence({ slug, group }: { slug: string; group: EvidenceGroup }) {
  const style = { "--inline-cols": group.columns ?? Math.min(group.assets.length, 2) } as CSSProperties;
  return (
    <figure className={`inline-evidence${group.contain ? " inline-evidence--contain" : ""}`} style={style}>
      <div className="inline-evidence__images">
        {group.assets.map((image, imageIndex) => {
          const src = asset(`/evidence-assets/${slug}/${image}`);
          return (
            <a href={src} target="_blank" rel="noreferrer" key={image}>
              <img src={src} alt={`${group.caption} · ảnh ${imageIndex + 1}`} loading="lazy" />
            </a>
          );
        })}
      </div>
      <figcaption>{group.caption}</figcaption>
    </figure>
  );
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
  evidenceGroups?: EvidenceGroup[];
}) {
  const blocks = normalizeText(text, slug);

  return (
    <div className={`report-body report-body--${slug}`}>
      {blocks.map((block, index) => {
        const matchingEvidence = evidenceGroups.filter((group) => block.text.startsWith(group.after));
        const content = (() => {
          if (block.kind === "table") return <div>{table}</div>;
          if (block.kind === "title") return <h1 className="report-title">{block.text}</h1>;
          if (block.kind === "h2") return <h2>{block.text}</h2>;
          if (block.kind === "h3") return <h3>{block.text}</h3>;
          if (block.kind === "h4") return <h4>{block.text}</h4>;
          if (block.kind === "bullet") {
            return (
              <div className="report-bullet">
                <span aria-hidden="true">✦</span>
                <p>{block.text.replace(/^[●○•+\-]+\s*/, "")}</p>
              </div>
            );
          }
          return <p>{block.text}</p>;
        })();

        return (
          <div key={`${index}-${block.text.slice(0, 24)}`} className={`report-line report-line--${block.kind}`}>
            {content}
            {matchingEvidence.map((group) => (
              <Evidence key={`${group.after}-${group.assets.join("-")}`} slug={slug} group={group} />
            ))}
          </div>
        );
      })}
    </div>
  );
}
