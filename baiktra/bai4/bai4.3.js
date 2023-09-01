var persons = [
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

// Viết hoa tên toàn bộ các person
var capitalizedPersons = persons.map(function(person) {
    return {
        fullName: person.fullName.toUpperCase(),
        age: person.age,
        address: person.address
    };
});

console.log("Mảng mới với tên viết hoa:", capitalizedPersons);