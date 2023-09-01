function Person(firstName, lastName, age, address, score) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.address = address;
    this.score = score;
}

var Nam = new Person('Nam', 'Nguyen', 20, 'Hanoi', 75);
var Hoa = new Person('Hoa', 'Tran', 22, 'Ho Chi Minh City', 80);
var Mai = new Person('Mai', 'Le', 24, 'Da Nang', 90);
var Dung = new Person('Dung', 'Pham', 21, 'Hai Phong', 85);
var Hanh = new Person('Hanh', 'Vu', 23, 'Can Tho', 88);

console.log(Nam);
console.log(Hoa);
console.log(Mai);
console.log(Dung);
console.log(Hanh);