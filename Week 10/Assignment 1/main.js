// تكليفات JavaScript Bootcamp من الدرس 071 إلى 078

// التكليف 01

let mix = [1, 2, 3, "E", 4, "l", "z", "e", "r", 5, "o"];

let mixMap = mix
  .map(function (element) {
    return isNaN(parseInt(element)) ? element : "";
  })
  .reduce(function (acc, current) {
    return `${acc}${current}`;
  });

console.log(mixMap); // Elzero
