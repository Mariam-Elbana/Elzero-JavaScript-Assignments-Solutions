// Challenge Lesson

let n1 = [10, 30, 10, 20];
let n2 = [30, 20, 10];

// Out Put
console.log(
  new Set([...n1]).size * new Array(...n1, ...n2).length * Math.min(...n1)
);
console.log(Math.max(...n2) * new Array(...n1, ...n2).length);
console.log([...n1, ...n2].length * Math.max(...n2));
console.log([...n1, ...n2].length * new Set(n2).size * Math.min(...n1));
