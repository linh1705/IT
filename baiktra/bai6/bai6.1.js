// Khởi tạo đối tượng Date
var today = new Date();

// Lấy thông tin ngày, tháng, năm
var day = today.getDate();
var month = today.getMonth() + 1; // Lưu ý: Tháng trong đối tượng Date bắt đầu từ 0
var year = today.getFullYear();

// Định dạng ngày tháng
if (day < 10) {
  day = '0' + day; // Thêm số 0 phía trước nếu ngày chỉ có một chữ số
}
if (month < 10) {
  month = '0' + month; // Thêm số 0 phía trước nếu tháng chỉ có một chữ số
}

// In ra màn hình
console.log(day + '-' + month + '-' + year);