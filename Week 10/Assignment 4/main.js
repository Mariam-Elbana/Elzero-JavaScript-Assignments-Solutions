// التكليف 04

let numsAndStrings = [1, 10, -10, -20, 5, "A", 3, "B", "C"];

// First Way
let numsAndStringsFilter1 = numsAndStrings
  .map(function (element) {
    return !isNaN(parseInt(element)) ? -element : "";
  })
  .filter(function (el) {
    return el;
  });

console.log(numsAndStringsFilter1); // [-1, -10, 10, 20, -5, -3]
