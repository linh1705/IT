{
    fullName: 'Tran Anh Khoa',
    age: 18,
    address: 'Ha Noi'
},
{
    fullName: 'Nguyen Quang Hoc',
    age: 21,
    address: 'Bac Giang'
},
{
    fullName: 'Vu Thanh Dat',
    age: 20,
    address: 'Thai Binh'
},
{
    fullName: 'Dang Phuc Linh',
    age: 19,
    address: 'Ha Noi'
}
];

// Sắp xếp theo chiều tăng dần của thuộc tính age
var sortedAscending = persons.slice().sort(function(a, b) {
return a.age - b.age;
});
console.log("Mảng tăng dần theo age:", sortedAscending);

// Sắp xếp theo chiều giảm dần của thuộc tính age
var sortedDescending = persons.slice().sort(function(a, b) {
return b.age - a.age;
});
console.log("Mảng giảm dần theo age:", sortedDescending);