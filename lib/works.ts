import fs from "node:fs";
import path from "node:path";

export type Work = {
  slug: string;
  number: string;
  title: string;
  shortTitle: string;
  eyebrow: string;
  summary: string;
  skills: string[];
  pages: string[];
  featured?: boolean;
  optional?: boolean;
  table?: "sources" | "prompts" | "tools" | "analytics";
  cuts?: Array<[string, string]>;
  evidenceGroups?: Array<{ after: string; pages: string[]; caption: string }>;
};

export const works: Work[] = [
  {
    slug: "bai-1",
    number: "01",
    title: "Thao tác cơ bản với tệp tin và thư mục",
    shortTitle: "Quản lý tệp và thư mục",
    eyebrow: "Nền tảng kỹ năng số",
    summary:
      "Thực hành tuần tự 12 thao tác trên Windows: tạo, đổi tên, sao chép, di chuyển, xóa và khôi phục tệp tin/thư mục.",
    skills: ["File Explorer", "Copy & Paste", "Cut & Paste", "Recycle Bin"],
    pages: ["page-1.png", "page-2.png", "page-3.png", "page-4.png", "page-5.png", "page-6.png", "page-7.png"],
    evidenceGroups: [
      { after: "1. Mở File Explorer", pages: ["page-1.png", "page-2.png"], caption: "Mở File Explorer, truy cập ổ đĩa và tạo thư mục thực hành." },
      { after: "6. Đổi tên tệp tin", pages: ["page-3.png", "page-4.png", "page-5.png"], caption: "Đổi tên, tạo thư mục con và sao chép tệp tin." },
      { after: "9. Di chuyển tệp tin", pages: ["page-6.png", "page-7.png"], caption: "Di chuyển, xóa và khôi phục tệp tin theo đúng trình tự." },
    ],
  },
  {
    slug: "bai-2",
    number: "02",
    title: "Tìm kiếm và đánh giá tài liệu học thuật",
    shortTitle: "Tài liệu học thuật",
    eyebrow: "Biên–phiên dịch Nhật–Việt",
    summary:
      "Khảo sát 10 nguồn về thuật ngữ kinh tế Nhật–Việt trong chuyển đổi số, đánh giá độ tin cậy và trình bày tài liệu tham khảo Harvard.",
    skills: ["Google Scholar", "Đánh giá nguồn", "Harvard", "Gairaigo"],
    pages: ["page-1.png", "page-2.png", "page-3.png", "page-4.png"],
    table: "sources",
    cuts: [["III. BẢNG TỔNG HỢP", "IV. PHÂN TÍCH CHI TIẾT"]],
    evidenceGroups: [
      { after: "I. LỰA CHỌN CHỦ ĐỀ", pages: ["page-1.png"], caption: "Chủ đề, lý do lựa chọn và phạm vi tìm kiếm." },
      { after: "II. DANH MỤC TÀI LIỆU", pages: ["page-2.png", "page-3.png"], caption: "Danh mục 10 nguồn và bảng đánh giá độ tin cậy." },
      { after: "IV. PHÂN TÍCH CHI TIẾT", pages: ["page-4.png"], caption: "Phân tích một nguồn điển hình và danh mục Harvard." },
    ],
  },
  {
    slug: "bai-3",
    number: "03",
    title: "Phát triển kỹ năng viết prompt hiệu quả trong học tập",
    shortTitle: "Prompt Engineering",
    eyebrow: "Cơ bản → Cải tiến → Nâng cao",
    summary:
      "Thử nghiệm 3 cấp độ prompt cho ba tác vụ học tập, so sánh đầu ra và tổng hợp công thức C-R-I-S-P.",
    skills: ["Role prompting", "Constraints", "Few-shot", "Bloom"],
    pages: Array.from({ length: 12 }, (_, i) => `page-${String(i + 1).padStart(2, "0")}.png`),
    table: "prompts",
    cuts: [["III. BẢNG SO SÁNH", "IV. PHÂN TÍCH LÝ DO"]],
    evidenceGroups: [
      { after: "Tác vụ 1:", pages: ["page-01.png", "page-02.png", "page-03.png", "page-04.png"], caption: "Ba cấp độ prompt cho tác vụ tóm tắt tài liệu." },
      { after: "Tác vụ 2:", pages: ["page-05.png", "page-06.png"], caption: "Thử nghiệm giải thích khái niệm Attention Mechanism." },
      { after: "Tác vụ 3:", pages: ["page-07.png", "page-08.png"], caption: "Tạo bộ câu hỏi ôn tập theo mức độ nhận thức." },
      { after: "IV. PHÂN TÍCH LÝ DO", pages: ["page-09.png", "page-10.png", "page-11.png", "page-12.png"], caption: "Bảng so sánh, phân tích hiệu quả và công thức C-R-I-S-P." },
    ],
  },
  {
    slug: "bai-4",
    number: "04",
    title: "Hiệu quả sử dụng công cụ trực tuyến cho dự án nhóm",
    shortTitle: "Cộng tác trực tuyến",
    eyebrow: "Google Docs · Drive · Zalo · Canva",
    summary:
      "Mô tả vai trò cá nhân, công cụ sử dụng, hai thách thức khi cộng tác và quy trình khắc phục bằng Suggesting, Version History và lưu trữ Drive.",
    skills: ["Google Docs", "Google Drive", "Zalo", "Canva"],
    pages: ["page-1.png", "page-2.png", "page-3.png", "page-4.png", "page-5.png"],
    evidenceGroups: [
      { after: "1. Nhiệm vụ trong nhóm", pages: ["page-1.png"], caption: "Vai trò cá nhân và nhiệm vụ viết nội dung, làm slide." },
      { after: "2. Công cụ sử dụng", pages: ["page-2.png", "page-3.png"], caption: "Google Docs, Google Drive và Zalo trong quá trình cộng tác." },
      { after: "3. Thách thức", pages: ["page-4.png", "page-5.png"], caption: "Thách thức và giải pháp được trình bày theo đúng báo cáo." },
    ],
  },
  {
    slug: "bai-5",
    number: "05",
    title: "Sáng tạo nội dung số bằng công cụ AI tạo sinh",
    shortTitle: "AI tạo sinh",
    eyebrow: "Gemini · ChatGPT · Midjourney · DALL-E · Canva AI",
    summary:
      "Xây dựng pipeline chuyển kiến thức học thuật về AI trong chẩn đoán hình ảnh y khoa thành bài viết, ảnh concept và infographic.",
    skills: ["AI tạo văn bản", "AI tạo hình", "Canva AI", "Biên tập đầu ra"],
    pages: Array.from({ length: 9 }, (_, i) => `page-${i + 1}.png`),
    featured: true,
    table: "tools",
    cuts: [["III. BẢNG SO SÁNH", "IV. PHÂN TÍCH VAI TRÒ"]],
    evidenceGroups: [
      { after: "I. MỤC TIÊU DỰ ÁN", pages: ["page-1.png"], caption: "Mục tiêu kỹ thuật và mục tiêu nội dung của dự án." },
      { after: "1. Giai đoạn 1:", pages: ["page-2.png", "page-3.png"], caption: "Lên ý tưởng, viết nội dung và so sánh Gemini với ChatGPT." },
      { after: "2. Giai đoạn 2:", pages: ["page-4.png", "page-5.png"], caption: "Tạo ảnh minh họa bằng Midjourney và DALL-E 3." },
      { after: "3. Giai đoạn 3:", pages: ["page-6.png", "page-7.png"], caption: "Thiết kế infographic và tích hợp nội dung trong Canva AI." },
      { after: "IV. PHÂN TÍCH VAI TRÒ", pages: ["page-8.png", "page-9.png"], caption: "So sánh công cụ và phân tích vai trò, hạn chế, đạo đức." },
    ],
  },
  {
    slug: "bai-6",
    number: "06",
    title: "Sử dụng AI có trách nhiệm và đạo đức trong học thuật",
    shortTitle: "AI có trách nhiệm",
    eyebrow: "Minh bạch · Xác thực · Liêm chính",
    summary:
      "Phân tích chính sách, thực hành tổng hợp tài liệu với AI, làm rõ ranh giới hỗ trợ–gian lận và xây dựng 5 nguyên tắc cá nhân.",
    skills: ["Liêm chính học thuật", "Double-check", "Trích dẫn AI", "Đạo đức"],
    pages: ["page-1.png", "page-2.png", "page-3.png", "page-4.png"],
    evidenceGroups: [
      { after: "I. Phân tích chính sách", pages: ["page-1.png"], caption: "Ba trụ cột: minh bạch, trách nhiệm giải trình và ranh giới gian lận." },
      { after: "II. Thực hành", pages: ["page-2.png"], caption: "Nhật ký prompt, đầu ra, đánh giá và tích hợp." },
      { after: "III. Phân tích các vấn đề", pages: ["page-3.png"], caption: "Ranh giới hỗ trợ–gian lận, sở hữu trí tuệ và tác động kỹ năng." },
      { after: "IV. Bộ nguyên tắc", pages: ["page-4.png"], caption: "Năm nguyên tắc cá nhân về sử dụng AI có trách nhiệm." },
    ],
  },
  {
    slug: "bai-7",
    number: "+1",
    title: "Nghiên cứu mở rộng: Learning Analytics trong giáo dục đại học",
    shortTitle: "Learning Analytics",
    eyebrow: "Nghiên cứu mở rộng",
    summary:
      "Phân tích dữ liệu học tập, mô hình dự báo rủi ro và kế hoạch ứng dụng AI có trách nhiệm tại trường đại học Việt Nam.",
    skills: ["K-Means", "Random Forest", "Apriori", "Quyền riêng tư"],
    pages: Array.from({ length: 6 }, (_, i) => `page-${i + 1}.png`),
    optional: true,
    table: "analytics",
    cuts: [["3. Trực quan hóa kết quả phân tích", "II. CƠ SỞ LÝ LUẬN"]],
  },
];

export function getWork(slug: string) {
  return works.find((work) => work.slug === slug);
}

export function getReportText(work: Work) {
  const file = path.join(process.cwd(), "content", `${work.slug}.txt`);
  let text = fs.readFileSync(file, "utf8");
  text = text.replace(/\f/g, "\n").replace(/\u200b/g, "");
  for (const [start, end] of work.cuts ?? []) {
    const startIndex = text.indexOf(start);
    const endIndex = text.indexOf(end);
    if (startIndex >= 0 && endIndex > startIndex) {
      text = `${text.slice(0, startIndex)}\n[TABLE_SLOT]\n${text.slice(endIndex)}`;
    }
  }
  return text;
}

export const sourceTables = {
  sources: {
    headers: ["STT", "Tài liệu", "Tác giả & cơ quan", "Phương pháp", "Cập nhật", "Đánh giá", "Xếp hạng"],
    rows: [
      ["1", "Phân tích lỗi sai khi dịch thuật ngữ kinh tế của sinh viên ngành Ngôn ngữ Nhật", "Nguyễn, T. M. (ĐH Ngoại ngữ)", "Thực nghiệm, phân tích lỗi", "2024 · Rất mới", "Dữ liệu thực tế từ sinh viên, có tính ứng dụng cao cho việc học.", "5/5"],
      ["2", "The impact of AI on Japanese-English Business Translation", "Sato & Tanaka (ĐH Tokyo)", "Định lượng, so sánh kết quả dịch của AI và người", "2025 · Chuyên sâu", "Nguồn học thuật quốc tế uy tín, phương pháp hiện đại.", "5/5"],
      ["3", "Lý thuyết và kỹ thuật biên dịch Nhật–Việt", "Đào, T. T. (NXB ĐHQG)", "Hệ thống hóa lý thuyết kinh điển", "2021 · Ổn định", "Nhà xuất bản uy tín, nội dung nền tảng vững chắc.", "4/5"],
      ["4", "Cẩm nang thuật ngữ kinh tế và đầu tư Nhật–Việt", "Tổ chức JETRO · Chính phủ Nhật", "Tổng hợp thực tiễn từ chuyên gia", "2024 · Thực tiễn", "Độ chính xác thuật ngữ cao nhưng thiếu tính hàn lâm.", "4/5"],
      ["5", "Evaluating Neural Machine Translation for Vietnamese-Japanese Business Contexts", "Yamamoto, S. (CiNii)", "Phân tích thuật toán và dữ liệu lớn", "2026 · Mới nhất", "Nguồn từ CSDL học thuật Nhật Bản, độ tin cậy cao.", "5/5"],
    ],
  },
  prompts: {
    headers: ["Tiêu chí", "Prompt cơ bản", "Prompt cải tiến", "Prompt nâng cao"],
    rows: [
      ["Độ dài & định dạng", "Ngắn, text thuần, không chia bố cục rõ ràng.", "Độ dài vừa phải, bắt đầu có gạch đầu dòng.", "Bố cục chuẩn chỉnh: in đậm, bullet points và tiêu đề phụ."],
      ["Độ chính xác / tập trung", "Chung chung, đôi khi chứa thông tin lan man.", "Đi đúng trọng tâm nhưng còn thiếu chiều sâu.", "Tập trung vào mục tiêu, loại bỏ thông tin không cần thiết."],
      ["Giá trị học tập", "Thấp; người học phải tự hệ thống lại thông tin.", "Trung bình; giúp nắm nhanh ý chính.", "Cao nhất; có góc nhìn chuyên gia, ẩn dụ dễ nhớ và tư duy từng bước."],
    ],
  },
  tools: {
    headers: ["Hạng mục", "Công cụ A", "Công cụ B", "Lựa chọn cuối cùng"],
    rows: [
      ["Tạo văn bản", "Gemini: văn phong mượt mà, hợp đại chúng, bắt trend tốt.", "ChatGPT: sâu về kỹ thuật, cấu trúc chặt nhưng hơi khô.", "Dùng khung Gemini, bổ sung chi tiết của ChatGPT."],
      ["Tạo hình ảnh", "Midjourney: nghệ thuật, ánh sáng tốt, độ phân giải cao nhưng lỗi chữ.", "DALL-E 3: bám prompt, bố cục rõ; chất ảnh ít điện ảnh hơn.", "Chọn Midjourney làm ảnh cover vì cần sức hút thị giác."],
      ["Thiết kế infographic", "Canva AI: đề xuất 4 layout dọc, bảng màu xanh–trắng phù hợp y tế.", "Icon mặc định còn chung chung, text là placeholder.", "Chọn layout tốt nhất rồi tự thay nội dung và tạo icon riêng."],
    ],
  },
  analytics: {
    headers: ["Nhóm sinh viên", "Click/tuần", "Hoàn thành video", "Quiz trung bình", "Dự báo tuần 5", "Kết quả cuối kỳ"],
    rows: [
      ["Nhóm A · Tích cực", "> 150 lần", "85%–100%", "8.5 / 10", "Hoàn thành xuất sắc", "92% đạt điểm A/B"],
      ["Nhóm B · Thụ động", "50–120 lần", "40%–70%", "6.0 / 10", "An toàn nhưng rủi ro nhẹ", "75% đạt điểm C/D"],
      ["Nhóm C · Nguy cơ", "< 20 lần", "< 20%", "3.2 / 10", "Cảnh báo nguy cơ trượt", "80% bỏ học hoặc trượt"],
    ],
  },
};
