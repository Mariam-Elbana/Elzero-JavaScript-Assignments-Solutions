//تكليفات JavaScript Bootcamp من الدرس 048 إلى 053

// التكلف 03

let start = 1;
let end = 6;
let breaker = 2;

for (let i = start; i <= end; i++) {
  console.log(i);

  for (let x = breaker; x <= breaker * breaker; x += breaker) {
    console.log(`-- ${x}`);
  }
}

// Output
// 1
// -- 2
// -- 4
// 2
// -- 2
// -- 4
// 3
// -- 2
// -- 4
// 4
// -- 2
// -- 4
// 5
// -- 2
// -- 4
// 6
// -- 2
// -- 4
