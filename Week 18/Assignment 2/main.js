// تكليفات JavaScript Bootcamp من الدرس 134 إلى 146

// التكليف 02

let specialNames = "Os10O OsO Os100O Osa100O Os1000 Os100m";
let specialNamesReg = /\bo\w(\d+)?o\b/gi;

console.log(specialNames.match(specialNamesReg));

// Output
// ['Os10O', 'OsO', 'Os100O']
