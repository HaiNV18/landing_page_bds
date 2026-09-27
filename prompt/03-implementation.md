Implementation Specification
1. Navbar

Tạo Header/Navbar ở đầu trang.

Navbar bao gồm:

Logo/Brand: Vinhomes

Trang chủ

Tiện ích

Về Vinhomes Grand Park

Liên hệ

Navbar phải responsive.

Trên mobile sử dụng hamburger menu của Bootstrap.

Navbar có thể sử dụng hiệu ứng đổi background khi người dùng scroll.

2. Hero Section

Hero là section nổi bật nhất của Landing Page.

Bố cục desktop:

------------------------------------------------
|                                              |
|  EYECATCHING TITLE        REAL ESTATE IMAGE  |
|                                              |
|  Short description                            |
|                                              |
|  [ ĐĂNG KÝ TƯ VẤN ]                          |
|                                              |
------------------------------------------------

Nội dung

Tạo headline hấp dẫn nhưng không đưa ra tuyên bố sai lệch.

Ví dụ phong cách:

Sống trọn chuẩn mực mới tại Vinhomes Grand Park

Có thể sử dụng subheadline:

Khám phá không gian sống hiện đại, hệ sinh thái tiện ích đa dạng và cộng đồng văn minh tại trung tâm mới phía Đông TP. Hồ Chí Minh.

CTA:

ĐĂNG KÝ TƯ VẤN


CTA là button nổi bật.

Hero image nằm bên phải trên desktop.

Có thể sử dụng hình ảnh liên quan tới:

Vinhomes Grand Park

Khu đô thị hiện đại

Biệt thự

Không gian nghỉ dưỡng

Vinschool

3. Features Section

Tạo section giới thiệu 3 điểm nổi bật.

Tiêu đề:

Giá trị khác biệt


Có 3 cards.

Card 1

Title:

Lối sống thượng lưu


Description ngắn mô tả không gian sống hiện đại, cảnh quan và cộng đồng.

Sử dụng một hình ảnh riêng.

Card 2

Title:

Tiện ích tối ưu


Description ngắn về hệ sinh thái tiện ích.

Có thể đề cập:

Công viên

Hồ bơi

Khu thể thao

Mua sắm

Giáo dục

Sử dụng một hình ảnh riêng.

Card 3

Title:

Pháp lý nhanh gọn


Description phải viết thận trọng, không cam kết pháp lý tuyệt đối.

Không sử dụng những câu như:

100% pháp lý hoàn chỉnh

nếu không có nguồn xác thực.

Có thể viết theo hướng:

Quy trình tư vấn và cung cấp thông tin dự án được trình bày rõ ràng, hỗ trợ khách hàng dễ dàng tìm hiểu trước khi đưa ra quyết định.

Sử dụng một hình ảnh riêng.

4. CTA Section & Chức năng Đăng ký tư vấn

Có thể tạo thêm một CTA section trước Footer và Modal đăng ký tư vấn.

Ví dụ:

Bạn đang tìm kiếm không gian sống lý tưởng?

Nhận thông tin dự án và được tư vấn theo nhu cầu của bạn.

[ ĐĂNG KÝ TƯ VẤN ]

Quy trình chức năng "Đăng ký tư vấn":

User sẽ nhập thông tin cá nhân vào form:
- Họ và tên (bắt buộc)
- Số điện thoại (bắt buộc)
- Email
- Nhu cầu quan tâm (căn hộ, biệt thự, nhà phố...)
- Ghi chú thêm (nếu có)

Popup phản hồi sau khi gửi:
- Khi user gửi form hợp lệ, một Popup Modal hiển thị thông báo:
  "Email đã được gửi cho admin. Chúng tôi sẽ liên hệ trong thời gian sớm nhất"
- Popup kèm theo 1 hình ảnh LIKE ngón tay cái.
- Có nút đóng/hoàn tất và tự động reset form sau khi gửi.

5. Footer

Footer cần bao gồm:

Vinhomes

Thông tin bản quyền

Thông tin liên hệ

Email

Hotline mẫu

Địa chỉ dự án hoặc khu vực

Không sử dụng thông tin liên hệ giả mạo dưới dạng thông tin chính thức.

Nếu chưa có dữ liệu thật, sử dụng placeholder rõ ràng:

Hotline: 0xxx xxx xxx
Email: contact@example.com

6. JavaScript

JavaScript thuần.

Có thể triển khai:

Smooth scrolling.

Navbar thay đổi khi scroll.

Scroll reveal nhẹ.

Chức năng "Đăng ký tư vấn":
- Validate thông tin cá nhân phía frontend (họ tên, số điện thoại hợp lệ).
- Xử lý sự kiện submit form không reload trang.
- Hiển thị Popup Modal: "Email đã được gửi cho admin. Chúng tôi sẽ liên hệ trong thời gian sớm nhất".
- Hiển thị 1 hình ảnh LIKE ngón tay cái trong popup.
- Reset dữ liệu form sau khi gửi thành công.

CTA click interaction (mở modal tư vấn hoặc cuộn mượt đến form).

Không cần xây dựng backend xử lý form.

7. Bootstrap

Bootstrap phải được import thông qua CDN.

Sử dụng các thành phần Bootstrap khi phù hợp:

Container

Grid

Navbar

Button

Card

Utilities

Responsive breakpoints

Không cần tải Bootstrap về local.

8. Accessibility

Phải đảm bảo:

Tất cả hình ảnh có alt.

Button có text rõ ràng.

Link có nội dung dễ hiểu.

Màu chữ đủ tương phản.

Có semantic headings.

Form field có label nếu có form.

9. SEO cơ bản

index.html phải có:

<title>

<meta name="description">

<meta name="viewport">

Open Graph meta tags cơ bản nếu phù hợp.

Title gợi ý:

Vinhomes Grand Park | Không gian sống hiện đại tại TP. Thủ Đức


Description phải ngắn gọn, tự nhiên và liên quan tới Landing Page.

10. Performance

Không sử dụng thư viện JavaScript không cần thiết.

Hình ảnh sử dụng loading="lazy" cho các ảnh không nằm trong viewport ban đầu.

Hero image có thể load bình thường để tránh ảnh xuất hiện chậm.

Hạn chế animation nặng.