//تكليفات JavaScript Bootcamp من الدرس 123 إلى 133

// التكليف 06

let chars = ["A", "B", "C", "D", "E", 10, 15, 6];
// let chars = ["A", "B", "C", 20, "D", "E", 10, 15, 6];
// let chars = ["Z", "Y", "A", "D", "E", 10, 1];
let arrayOfNumbers = [];

for (i = 0; i < chars.length; i++) {
  if (typeof chars[i] === "number") {
    arrayOfNumbers.push(chars[i]);
  }
}
let newArr = [...arrayOfNumbers, ...chars.filter((e) => isNaN(parseInt(e)))];
console.log(
  newArr.copyWithin(0, arrayOfNumbers.length, arrayOfNumbers.length * 2)
);
