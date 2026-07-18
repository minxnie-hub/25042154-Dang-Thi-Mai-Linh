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
  evidenceGroups?: Array<{
    after: string;
    assets: string[];
    caption: string;
    columns?: number;
    contain?: boolean;
  }>;
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
    pages: [
      "page-1.png",
      "page-2.png",
      "page-3.png",
      "page-4.png",
      "page-5.png",
      "page-6.png",
      "page-7.png",
    ],
    evidenceGroups: [
      {
        after: "1. Mở File Explorer",
        assets: ["image-000.png"],
        caption: "Mở File Explorer từ thanh tác vụ.",
        columns: 1,
      },
      {
        after: "2. Truy cập ổ đĩa/thư mục",
        assets: ["image-001.png"],
        caption: "Truy cập This PC và ổ đĩa D: theo đúng bước thực hành.",
        columns: 1,
      },
      {
        after: "3. Tạo thư mục mới",
        assets: ["image-002.png"],
        caption: "Thư mục ThucHanh_DangThiMaiLinh sau khi được tạo.",
        columns: 1,
      },
      {
        after: "5. Tạo tệp tin văn bản",
        assets: ["image-003.png"],
        caption: "Tệp GhiChu.txt được tạo trong thư mục thực hành.",
        columns: 1,
      },
      {
        after: "6. Đổi tên tệp tin",
        assets: ["image-004.png", "image-005.png"],
        caption:
          "Thao tác Rename và kết quả đổi tên thành GhiChuQuanTrong.txt.",
        columns: 2,
      },
      {
        after: "7. Tạo thư mục con",
        assets: ["image-006.png"],
        caption: "Tạo thư mục con TaiLieu.",
        columns: 1,
      },
      {
        after: "8. Sao chép tệp tin",
        assets: ["image-007.png", "image-008.png"],
        caption: "Chọn Copy và dán bản sao vào thư mục TaiLieu.",
        columns: 2,
      },
      {
        after: "9. Di chuyển tệp tin",
        assets: ["image-009.png", "image-010.png"],
        caption: "Cut tệp DiChuyen.txt và chuyển tệp sang thư mục TaiLieu.",
        columns: 2,
      },
      {
        after: "10. Xóa tệp tin",
        assets: ["image-011.png"],
        caption: "Xóa GhiChuQuanTrong.txt vào Recycle Bin.",
        columns: 1,
      },
      {
        after: "11. Xóa vĩnh viễn",
        assets: ["image-012.png"],
        caption: "Hộp thoại xác nhận xóa vĩnh viễn bằng Shift + Delete.",
        columns: 1,
      },
      {
        after: "12. Khôi phục từ Thùng rác",
        assets: ["image-013.png", "image-014.png"],
        caption:
          "Khôi phục tệp từ Recycle Bin và kiểm tra tệp tại vị trí ban đầu.",
        columns: 2,
      },
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
    pages: Array.from(
      { length: 12 },
      (_, i) => `page-${String(i + 1).padStart(2, "0")}.png`,
    ),
    table: "prompts",
    cuts: [["III. BẢNG SO SÁNH", "IV. PHÂN TÍCH LÝ DO"]],
    evidenceGroups: [
      {
        after: '● Prompt Cơ bản: "Hãy tóm tắt lại bài nghiên cứu',
        assets: ["image-000.png"],
        caption: "Kết quả thử nghiệm Prompt cơ bản của tác vụ 1.",
        columns: 1,
      },
      {
        after: '● Prompt Cải tiến: "Hãy tóm tắt bài nghiên cứu dưới đây',
        assets: ["image-001.png", "image-002.png"],
        caption:
          "Kết quả Prompt cải tiến: đầu ra bắt đầu có trọng tâm và cấu trúc rõ hơn.",
        columns: 2,
      },
      {
        after: "3. Hạn chế hoặc hướng phát triển",
        assets: ["image-003.png", "image-004.png"],
        caption: "Kết quả Prompt nâng cao của tác vụ tóm tắt tài liệu.",
        columns: 2,
      },
      {
        after: '● Prompt Cơ bản: "Giải thích cho tôi về Cơ chế chú ý',
        assets: ["image-005.png", "image-006.png", "image-007.png"],
        caption: "Kết quả Prompt cơ bản cho khái niệm Attention Mechanism.",
        columns: 2,
      },
      {
        after: "● Prompt Cải tiến: \"Giải thích khái niệm 'Cơ chế chú ý",
        assets: ["image-008.png", "image-009.png"],
        caption: "Kết quả Prompt cải tiến có ví dụ và phép ẩn dụ trực quan.",
        columns: 2,
      },
      {
        after: "○ Ý nghĩa cốt lõi",
        assets: ["image-010.png", "image-011.png", "image-012.png"],
        caption: "Kết quả Prompt nâng cao kết hợp role, few-shot và analogy.",
        columns: 2,
      },
      {
        after: '● Prompt Cơ bản: "Tạo cho tôi một bộ câu hỏi trắc nghiệm',
        assets: ["image-013.png"],
        caption: "Bộ câu hỏi từ Prompt cơ bản của tác vụ 3.",
        columns: 1,
      },
      {
        after: '● Prompt Cải tiến: "Tạo 5 câu hỏi trắc nghiệm',
        assets: ["image-014.png", "image-015.png"],
        caption: "Bộ câu hỏi từ Prompt cải tiến, có phạm vi và đáp án rõ ràng.",
        columns: 2,
      },
      {
        after: "3. Cấp độ Phân tích/Vận dụng",
        assets: ["image-016.png", "image-017.png"],
        caption: "Kết quả Prompt nâng cao theo Bloom's Taxonomy.",
        columns: 2,
      },
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
    pages: [
      "page-1.png",
      "page-2.png",
      "page-3.png",
      "page-4.png",
      "page-5.png",
    ],
    evidenceGroups: [
      {
        after: "- Công cụ soạn thảo tài liệu cộng tác",
        assets: ["image-000.png"],
        caption: "Minh chứng chỉnh sửa nội dung trên Google Docs.",
        columns: 1,
      },
      {
        after: "- Công cụ lưu trữ và chia sẻ tệp",
        assets: ["image-001.png"],
        caption: "Thư mục và tài liệu được tổ chức trên Google Drive.",
        columns: 1,
      },
      {
        after: "- Công cụ giao tiếp nhóm",
        assets: [
          "image-002.png",
          "image-003.png",
          "image-004.png",
          "image-005.png",
        ],
        caption:
          "Trao đổi công việc trên Zalo và minh chứng phân công, tiến độ của nhóm.",
        columns: 2,
      },
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
      {
        after: "○ Google Gemini",
        assets: ["image-000.png"],
        caption: "Đầu ra của Gemini khi tóm tắt và lập dàn ý nội dung.",
        columns: 1,
      },
      {
        after: "○ ChatGPT",
        assets: ["image-001.png"],
        caption: "Đầu ra của ChatGPT với nội dung kỹ thuật chi tiết hơn.",
        columns: 1,
      },
      {
        after: "● Kết quả nhận được: Canva AI",
        assets: [
          "image-002.png",
          "image-003.png",
          "image-004.png",
          "image-005.png",
        ],
        caption:
          "Bốn phương án infographic được trình bày đúng theo thứ tự trong báo cáo.",
        columns: 2,
        contain: true,
      },
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
      {
        after: "V. Infographic minh họa",
        assets: ["image-000.png"],
        caption:
          "Infographic “Sử dụng AI có trách nhiệm trong học thuật” ở cuối báo cáo.",
        columns: 1,
        contain: true,
      },
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
    headers: [
      "STT",
      "Tên tài liệu",
      "Tác giả & Cơ quan xuất bản",
      "Phương pháp nghiên cứu",
      "Tính cập nhật",
      "Đánh giá chung",
      "Xếp hạng",
    ],
    rows: [
      [
        "1",
        "Phân tích lỗi sai khi dịch thuật ngữ kinh tế của sinh viên ngành Ngôn ngữ Nhật",
        "Nguyễn, T. M. (ĐH Ngoại ngữ)",
        "Thực nghiệm, phân tích lỗi (Error Analysis)",
        "2024 (Rất mới)",
        "Dữ liệu thực tế từ sinh viên, có tính ứng dụng cao cho việc học.",
        "5/5",
      ],
      [
        "2",
        "The impact of AI on Japanese-English Business Translation",
        "Sato & Tanaka (ĐH Tokyo)",
        "Định lượng, so sánh kết quả dịch của AI và người.",
        "2025 (Chuyên sâu)",
        "Nguồn học thuật quốc tế uy tín, phương pháp hiện đại.",
        "5/5",
      ],
      [
        "3",
        "Lý thuyết biên dịch",
        "Đào, T. T. (NXB ĐHQG)",
        "Hệ thống hóa lý thuyết kinh điển.",
        "2021 (Ổn định)",
        "Nhà xuất bản uy tín, nội dung nền tảng vững chắc.",
        "4/5",
      ],
      [
        "4",
        "Cẩm nang JETRO",
        "Tổ chức JETRO (Chính phủ Nhật)",
        "Tổng hợp thực tiễn từ chuyên gia.",
        "2024 (Thực tiễn)",
        "Độ chính xác thuật ngữ tuyệt đối nhưng thiếu tính hàn lâm.",
        "4/5",
      ],
      [
        "5",
        "Evaluating Neural Machine Translation for Vietnamese-Japanese Business Contexts",
        "Yamamoto, S. (CiNii)",
        "Phân tích thuật toán và dữ liệu lớn.",
        "2026 (Mới nhất)",
        "Nguồn từ CSDL học thuật hàng đầu Nhật Bản, độ tin cậy tối cao.",
        "5/5",
      ],
    ],
  },
  prompts: {
    headers: [
      "Tiêu chí",
      "Prompt Cơ bản",
      "Prompt Cải tiến",
      "Prompt Nâng cao",
    ],
    rows: [
      [
        "Độ dài & Định dạng",
        "Ngắn, text thuần, không chia bố cục rõ ràng.",
        "Có độ dài vừa phải, bắt đầu xuất hiện các gạch đầu dòng.",
        "Bố cục chuẩn chỉnh (Bolding, Bullet points, Tiêu đề phụ rõ ràng).",
      ],
      [
        "Độ chính xác / Tập trung",
        "Chung chung, đôi khi chứa thông tin lan man không cần thiết.",
        "Đi trúng trọng tâm yêu cầu nhưng còn thiếu chiều sâu.",
        "Tập trung 100% vào mục tiêu, loại bỏ thông tin rác.",
      ],
      [
        "Giá trị học tập",
        "Thấp. Người học mất thời gian tự hệ thống lại thông tin.",
        "Trung bình. Giúp nắm nhanh ý chính nhưng chưa kích thích tư duy.",
        "Cao nhất. Cung cấp cả góc nhìn chuyên gia, ẩn dụ dễ nhớ và tư duy từng bước (CoT).",
      ],
    ],
  },
  tools: {
    headers: [
      "Tiêu chí",
      "Công cụ A (Gemini / Midjourney)",
      "Công cụ B (ChatGPT / DALL-E 3)",
      "Đánh giá lựa chọn cuối cùng",
    ],
    rows: [
      [
        "Tạo văn bản",
        "Gemini: Văn phong mượt mà, hợp đại chúng, bắt trend tốt.",
        "ChatGPT: Sâu sắc về kỹ thuật, cấu trúc chặt chẽ nhưng hơi khô.",
        "Dùng khung của Gemini, bổ sung chi tiết của ChatGPT.",
      ],
      [
        "Tạo hình ảnh",
        "Midjourney: Nghệ thuật, ánh sáng xuất sắc, độ phân giải cao. Bị lỗi chữ.",
        "DALL-E 3: Bám sát prompt, bố cục rõ ràng. Chất ảnh hơi giống hoạt hình.",
        "Chọn Midjourney làm ảnh Cover vì cần yếu tố thu hút thị giác (Visual).",
      ],
    ],
  },
  analytics: {
    headers: [
      "Nhóm sinh viên",
      "Click/tuần",
      "Hoàn thành video",
      "Quiz trung bình",
      "Dự báo tuần 5",
      "Kết quả cuối kỳ",
    ],
    rows: [
      [
        "Nhóm A · Tích cực",
        "> 150 lần",
        "85%–100%",
        "8.5 / 10",
        "Hoàn thành xuất sắc",
        "92% đạt điểm A/B",
      ],
      [
        "Nhóm B · Thụ động",
        "50–120 lần",
        "40%–70%",
        "6.0 / 10",
        "An toàn nhưng rủi ro nhẹ",
        "75% đạt điểm C/D",
      ],
      [
        "Nhóm C · Nguy cơ",
        "< 20 lần",
        "< 20%",
        "3.2 / 10",
        "Cảnh báo nguy cơ trượt",
        "80% bỏ học hoặc trượt",
      ],
    ],
  },
};
