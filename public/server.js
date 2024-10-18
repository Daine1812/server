// Import các thư viện cần thiết
const express = require('express');
const path = require('path');

// Tạo ứng dụng Express
const app = express();
const PORT = 3000;

// Cấu hình thư mục để phục vụ file tĩnh
app.use(express.static(path.join('C:', 'Users', 'acer', 'save user', 'public'))); // Đường dẫn đến thư mục public

// Cấu hình route cho trang chính
app.get('/', (req, res) => {
    res.sendFile(path.join('C:', 'Users', 'acer', 'save user', 'public', 'index.html')); // Đường dẫn đến index.html
});

// Khởi động máy chủ
app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});
