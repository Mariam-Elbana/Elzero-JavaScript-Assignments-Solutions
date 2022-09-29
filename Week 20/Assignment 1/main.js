// تكليفات JavaScript Bootcamp من الدرس 159 إلى 168

// التكليف 01

let theDate = new Date();
let myBirthday = Date.parse("3 Aug 1997");

let diffrent = theDate - myBirthday;
let seconds = diffrent / 1000;
let minutes = seconds / 60;
let hours = minutes / 60;
let days = hours / 24;
let months = days / 30;
let years = months / 12;

console.log(`${Math.round(seconds)} Seconds`);
console.log(`${Math.round(minutes)} Minutes`);
console.log(`${Math.round(hours)} Hours`);
console.log(`${Math.round(days)} Days`);
console.log(`${Math.round(months)} Months`);
console.log(`${Math.round(years)} Years`);

// Needed Output
// "782926262 Seconds"
// "13048771 Minutes"
// "217480 Hours"
// "9062 Days"
// "302 Months"
// "25 Years"
