# Chỉnh sửa theo phản hồi khách hàng

Đã xử lý các yêu cầu trong file `chỉnh sửa.pdf`:

1. Di chuyển omamori khỏi vùng tên dưới ảnh đại diện; tên “Mai Linh” không còn bị che ở desktop, tablet và mobile.
2. Sắp xếp 6 bài tập thành lưới đồng đều:
   - Desktop: 3 cột × 2 hàng.
   - Tablet: 2 cột × 3 hàng.
   - Mobile: 1 cột.
   - Các card cùng chiều cao trong mỗi breakpoint, không còn offset hoặc dính vào nhau.
3. Xóa đoạn ghi chú nội bộ “Nội dung được giữ đúng theo file khách cung cấp...” khỏi trang hoàn thiện.
4. Build lại thư mục `docs/` với base path `/25042154-Dang-Thi-Mai-Linh` để deploy trực tiếp bằng GitHub Pages.

## Kiểm tra

- `npm ci`: đạt
- `npm run lint`: đạt
- Production static export: đạt
- 6 card hiển thị đúng số lượng
- Không còn đường dẫn tài nguyên bị thiếu
- Workflow GitHub Pages dùng bản prebuilt trong `docs/`, không chạy `npm ci` trên GitHub Actions
