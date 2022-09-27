//تكليفات JavaScript Bootcamp من الدرس 123 إلى 133

// التكليف 07

let numsOne = [1, 2, 3];
let numsTwo = [4, 5, 6];

let allNumsOne = [...numsOne, ...numsTwo];

let allNumsTwo = numsOne.concat(numsTwo);

let allNumsThree = numsTwo.reduce((acc, curr) => {
  acc.push(curr);
  return acc;
}, numsOne);

let allNumsFour = function (num1, num2) {
  for (i = 0; i < num2.length; i++) {
    return num1;
  }
  num1.push(num2[i]);
};

console.log(allNumsOne);
console.log(allNumsTwo);
console.log(allNumsThree);
console.log(allNumsFour(numsOne, numsTwo));
