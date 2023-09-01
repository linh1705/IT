<!DOCTYPE html>
<html>
<head>
    <title>Chuẩn hóa chuỗi và đếm kí tự</title>
    <script>
        function chuanHoaChuoiVaDem() {
            var input = document.getElementById("inputText");
            var inputValue = input.value;

            // Chuẩn hóa chuỗi ở đây
            var normalizedString = inputValue.trim();

            // Hiển thị chuỗi đã chuẩn hóa
            var output = document.getElementById("outputText");
            output.textContent = "Chuỗi đã chuẩn hóa: " + normalizedString;

            // Đếm số kí tự trong chuỗi
            var charCountOutput = document.getElementById("charCount");
            var charCount = normalizedString.length;
            charCountOutput.textContent = "Số kí tự: " + charCount;
        }
    </script>
</head>
<body>
    <h1>Chuẩn hóa chuỗi và đếm kí tự</h1>

    <input type="text" id="inputText" placeholder="Nhập chuỗi">
    <br><br>
    <button onclick="chuanHoaChuoiVaDem()">Chuẩn hóa và đếm</button>
    <br><br>
    <div id="outputText"></div>
    <div id="charCount"></div>
</body>
</html>
