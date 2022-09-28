// تكليفات JavaScript Bootcamp من الدرس 134 إلى 146

// التكليف 05

let date1 = "25/10/1982";
let date2 = "25 - 10 - 1982";
let date3 = "25 10 1982";
let date4 = "25 10 82";

let re2 = /\d+\s?.?\s?\d+\s?.?\s?\d+/g; // Write Pattern Here

console.log(date1.match(re2)); // "25/10/1982"
console.log(date2.match(re2)); // "25 - 10 - 1982"
console.log(date3.match(re2)); // "25 10 1982"
console.log(date4.match(re2)); // "25 10 82"
