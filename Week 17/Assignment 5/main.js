//تكليفات JavaScript Bootcamp من الدرس 123 إلى 133

// التكليف 05

let theName = "Elzero";
let theNameArrayOne = [...theName];
let theNameArrayTwo = theName.split("");
let theNameArrayThree = Array.from(theName);
let theNameArrayFour = Object.assign([], theName);
let theNameArrayFive = theNameArrayOne.map((e) => e);

console.log(theNameArrayOne);
console.log(theNameArrayTwo);
console.log(theNameArrayThree);
console.log(theNameArrayFour);
console.log(theNameArrayFive);

// Needed Output
// ["E", "l", "z", "e", "r", "o"];
