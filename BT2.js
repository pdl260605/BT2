function calculateRectangleArea() {
    // Hàm để kiểm tra xem giá trị nhập vào có phải là số dương hay không
    function isValidNumber(value) {
        return !isNaN(value) && Number(value) > 0;
    }

    // Yêu cầu người dùng nhập chiều dài và chiều rộng
    let length = prompt("Nhập chiều dài của hình chữ nhật:");
    let width = prompt("Nhập chiều rộng của hình chữ nhật:");

    // Kiểm tra xem giá trị nhập vào có hợp lệ không
    if (!isValidNumber(length) || !isValidNumber(width)) {
        console.log("Lỗi: Vui lòng nhập giá trị số dương cho chiều dài và chiều rộng.");
        return;
    }

    // Chuyển đổi giá trị nhập vào thành số
    length = parseFloat(length);
    width = parseFloat(width);

    // Tính diện tích hình chữ nhật
    const area = length * width;

    // Hiển thị kết quả
    console.log(`Diện tích của hình chữ nhật là: ${area}`);
}

// Gọi hàm để chạy chương trình
calculateRectangleArea();