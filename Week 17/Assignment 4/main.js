//تكليفات JavaScript Bootcamp من الدرس 123 إلى 133

// التكليف 04

let theNumber = 100020003000;

console.log(Number([...new Set(theNumber.toString())].sort().join("")));

// Another Solution
let setTheNumber = new Set(theNumber.toString());
setTheNumber.delete("0");
console.log(Number([...setTheNumber].join("")));

// Needed Output
// 123
