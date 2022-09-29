// تكليفات JavaScript Bootcamp من الدرس 159 إلى 168

// التكليف 05

let start = performance.now().toFixed(0);

for (i = 0; i < 99999; i++) {
  console.log(`${i}`);
}

let end = performance.now().toFixed(0);

console.log(`Loop Took ${end - start} Milliseconds`);

// Needed Output
("Loop Took 1921 Milliseconds.");
