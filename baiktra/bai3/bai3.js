number = [2,5,12,4,99,8];

Sử dụng sort để sắp xếp mảng tăng dần, giảm dần
var numbers = [2, 5, 12, 4, 99, 8];

// Sắp xếp mảng tăng dần
var sortedAscending = numbers.slice().sort(function(a, b) {
  return a - b;
});
console.log("Mảng tăng dần:", sortedAscending); // [2, 4, 5, 8, 12, 99]

// Sắp xếp mảng giảm dần
var sortedDescending = numbers.slice().sort(function(a, b) {
  return b - a;
});
console.log("Mảng giảm dần:", sortedDescending); // [99, 12, 8, 5, 4, 2]