# Bản sửa triển khai GitHub Pages

Bản này deploy trực tiếp thư mục `docs/` đã được static export sẵn, nên GitHub Actions **không chạy `npm ci`** và không còn phụ thuộc vào registry/npm trong lúc deploy.

## Cách cập nhật repository đang có

1. Giải nén gói source mới.
2. Chép đè toàn bộ nội dung vào repository `25042154-Dang-Thi-Mai-Linh`.
3. Bắt buộc phải có hai phần sau trên GitHub:
   - thư mục `docs/`
   - file `.github/workflows/deploy.yml`
4. Commit và push lên nhánh `main`.
5. Trong **Settings → Pages → Build and deployment → Source**, chọn **GitHub Actions**.

Workflow mới chỉ kiểm tra và upload bản static có sẵn. Source Next.js vẫn được giữ trong repository để chỉnh sửa về sau.

## Nguyên nhân lỗi cũ

`package-lock.json` cũ chứa các URL registry nội bộ của môi trường tạo file. GitHub runner không truy cập được các URL đó, khiến `npm ci` treo rồi báo `Exit handler never called`. File lock đã được thay sang `https://registry.npmjs.org/`, nhưng workflow mới không còn cần npm khi deploy.
