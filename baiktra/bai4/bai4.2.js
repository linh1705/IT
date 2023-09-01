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

// Tìm các đối tượng có địa chỉ là "Ha Noi"
var filteredPersons = persons.filter(function(person) {
return person.address === 'Ha Noi';
});

console.log("Các người ở Ha Noi:", filteredPersons);