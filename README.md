# The Natural Fibers — Web 2.0 Brand Website

> **Domain**: [https://the-natural-fibers.github.io/](https://the-natural-fibers.github.io/)  
> **Brand Type**: Independent Brand / Authority Botanical Material Encyclopedia  
> **Topic**: Natural Materials (Bamboo, Rattan, Jute, Seagrass, Hemp, Abaca)  
> **Constraint**: Hoàn toàn độc lập, không đề cập bất kỳ thông tin nào về thương hiệu IndochinaLight.

---

## 1. Bảng màu Tri-Element chủ đạo
- **Xanh dương đậm (Deep Ocean Blue - Nước / Water)**: `#0c2340`, `#14365d` — Đại diện cho nguồn nước, quá trình ngâm retting sợi tự nhiên và độ ẩm.
- **Nâu ấm (Warm Clay Brown - Đất / Earth)**: `#7c482b`, `#5c341e` — Đại diện cho thổ nhưỡng, hệ rễ cây lâu năm và chất liệu mộc mạc của mây, gai dầu.
- **Xanh lá cây (Canopy Forest Green - Lá / Leaves)**: `#2a5a46`, `#1b3d2f` — Đại diện cho tán lá quang hợp, tre trúc và sự tái sinh sinh học tuần hoàn.
- **Nền giấy mộc (Warm Linen Canvas)**: `#faf8f5`, `#ffffff` — Tạo cảm giác tạp chí nghiên cứu cao cấp, thân thiện với mắt đọc.

---

## 2. Cấu trúc trang (Pages & UX/UI)
1. **Homepage (`/`)**:
   - Hero banner với visual 3 nguyên tố (Nước, Đất, Lá).
   - The Tri-Element Philosophy section (Ý nghĩa màu sắc và triết lý thương hiệu).
   - Bộ lọc và xem thông số các loại vật liệu thực vật (Interactive Material Explorer).
   - Lưới hiển thị 6 bài viết nổi bật với link xem trọn bộ.
   - Field Guide CTA & Cam kết nghiên cứu độc lập.
2. **Trang Danh mục Blog (`/blog`)**:
   - Khung tìm kiếm thời gian thực theo từ khóa/tiêu đề.
   - Bộ lọc theo Category & Element (Water / Earth / Leaf).
   - Đầy đủ 9 bài viết thuộc mô hình TAS content plan.
3. **Trang Chi tiết Bài viết (`/blog/:slug`)**:
   - Breadcrumbs, Author badge, Reading time, Ngày xuất bản.
   - Executive Botanical Summary (Key Takeaways).
   - Mục lục tự động nhảy mục (Table of Contents).
   - Nội dung bài viết chuyên sâu dạng bài nghiên cứu học thuật, bảng so sánh và khuyến nghị.
   - Box cam kết tiêu chuẩn đạo đức nghiên cứu (Editorial Standards).
   - Bài viết liên quan (Related Articles).
4. **Trang Giới thiệu Entity (`/about`)**:
   - Giới thiệu thực thể The Natural Fibers, triết lý 3 nguyên tố.
   - 4 trụ cột đạo đức biên tập và cam kết độc lập.
5. **Trang Hướng dẫn Sử dụng (`/how-to-use`)**:
   - Bộ công cụ tương tác chọn loại sợi theo không gian sống (Phòng ăn, phòng ngủ, hiên có mái che, đèn thả).
   - 4 Quy tắc vàng bảo quản sợi thực vật (Hút bụi, thấm hút ngay khi đổ nước, duy trì độ ẩm 40-60%, dưỡng dầu thực vật).
   - Bảng ma trận độ bền, chịu ẩm và chịu mài mòn chi tiết.
6. **Trang Hỏi đáp FAQs (`/faqs`)**:
   - Accordion câu hỏi phân theo từng chủ đề: Sinh học, Độ bền & Chống mốc, Ứng dụng kiến trúc.
   - Bộ lọc và tìm kiếm câu hỏi nhanh.
7. **Trang Liên hệ (`/contact`)**:
   - Form gửi thắc mắc nghiên cứu, phân loại sợi, hợp tác xuất bản.
   - Cam kết phản hồi trong 24h làm việc.
8. **Trang Pháp lý & Uy tín Entity (`/privacy-policy`, `/terms-of-use`)**:
   - Tiêu chuẩn minh bạch thông tin và bảo vệ quyền riêng tư.

---

## 3. Bản đồ 9 bài viết theo TAS Content Plan
| Slug | Main Keyword | Volume | KD | Category |
|---|---|:---:|:---:|---|
| `/blog/natural-materials` | `natural materials` | 1,300 | 34% | Material Science |
| `/blog/what-is-rattan` | `what is rattan` | 1,900 | 25% | Botanical Profile |
| `/blog/what-is-bamboo` | `what is bamboo` | 1,300 | 38% | Botanical Profile |
| `/blog/rattan-vs-bamboo` | `rattan vs bamboo` | 210 | 9% | Comparative Study |
| `/blog/rattan-vs-wicker` | `rattan vs wicker` | 1,300 | 18% | Comparative Study |
| `/blog/what-is-jute` | `what is jute` | 3,600 | 29% | Botanical Profile |
| `/blog/seagrass-vs-jute` | `seagrass vs jute` | 20 | 0% | Comparative Study |
| `/blog/what-is-hemp-rope` | `what is hemp rope` | 90 | 13% | Bast Fiber & Cordage |
| `/blog/what-is-abaca` | `what is abaca` | 170 | 30% | Hard Leaf Fiber |

---

## 4. Hướng dẫn Chạy & Triển khai lên GitHub Pages
```bash
# 1. Chạy môi trường phát triển (Local preview)
npm run dev

# 2. Build dự án ra thư mục dist
npm run build

# 3. Đẩy lên repository GitHub "the-natural-fibers.github.io"
# Đã tích hợp sẵn file public/404.html để chống lỗi 404 khi người dùng refresh hoặc truy cập trực tiếp URL con trên GitHub Pages.
```
