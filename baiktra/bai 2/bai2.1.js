!DOCTYPE html>
<html>
<head>
    <title>Chuẩn hóa chuỗi</title>
    <script>
        function chuanHoaChuoi() {
            var input = document.getElementById("inputText");
            var inputValue = input.value;

            // Chuẩn hóa chuỗi ở đây
            var normalizedString = inputValue.trim();

            // Hiển thị chuỗi đã chuẩn hóa
            var output = document.getElementById("outputText");
            output.textContent = "Chuỗi đã chuẩn hóa: " + normalizedString;
        }
    </script>
</head>
<body>
    <h1>Chuẩn hóa chuỗi</h1>

    <input type="text" id="inputText" placeholder="Nhập chuỗi">
    <br><br>
    <button onclick="chuanHoaChuoi()">Chuẩn hóa</button>
    <br><br>
    <div id="outputText"></div>
</body>
</html>