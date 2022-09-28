// تكليفات JavaScript Bootcamp من الدرس 134 إلى 146

// التكليف 03

let phone = "+(995)-123 (4567)";
let phoneReg = /.\(\d{3}\).\d{3}\s\(\d{4}\)/gi;
console.log(phone.match(phoneReg));
