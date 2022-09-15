// تكليفات JavaScript Bootcamp من الدرس 071 إلى 078

// التكليف 03

let myArray = ["E", "l", "z", ["e", "r"], "o"];

let myFlaten = myArray
  .reduce(function (acc, current) {
    return `${acc}${current}`.split(",");
  })
  .join("");

console.log(myFlaten); // Elzero
