var gift = [
    'Bạn đen lắm',
    '10 coin',
    '20 coin',
    '30 coin',
    'Giải khuyến khích',
    'Giải nhì',
    'Giải nhất',
    'Giải đặc biệt (^.^)'
];

function spinWheel() {
    var randomIndex = Math.floor(Math.random() * gift.length); // Tạo chỉ số ngẫu nhiên từ 0 đến độ dài của mảng gift
    var randomGift = gift[randomIndex]; // Lấy giải thưởng tại chỉ số ngẫu nhiên

    console.log('Giải thưởng của bạn là: ' + randomGift);
}

spinWheel();