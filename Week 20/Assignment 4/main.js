// تكليفات JavaScript Bootcamp من الدرس 159 إلى 168

// التكليف 04

let myBirthDate1 = new Date("Augast 3, 1997");
console.log(myBirthDate1); // First

let myBirthDate2 = new Date("0:0:0:0");
myBirthDate2.setFullYear(1997, 7, 3);
console.log(myBirthDate2); // Second

let myBirthDate3 = new Date(Date.parse("3 Aug 1997"));
console.log(myBirthDate3); // Third

// Needed Output
("Mon Oct 25 1982 00:00:00 GMT+0200 (Eastern European Standard Time)");
("Mon Oct 25 1982 00:00:00 GMT+0200 (Eastern European Standard Time)");
("Mon Oct 25 1982 00:00:00 GMT+0200 (Eastern European Standard Time)");
