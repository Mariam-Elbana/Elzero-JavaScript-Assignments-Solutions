// تكليفات JavaScript Bootcamp من الدرس 071 إلى 078

// التكليف 05

let nums = [2, 12, 11, 5, 10, 1, 99];

let numsReducing = nums.reduce(function (acc, current) {
  return current % 2 === 0 ? acc * current : acc + current;
}, 1);

console.log(numsReducing); // 500
