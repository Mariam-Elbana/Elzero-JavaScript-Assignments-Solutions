//تكليفات JavaScript Bootcamp من الدرس 048 إلى 053

// التكليف 04

let index = 10;
let jump = 2;
let end = 0;

let x = index;
for (;;) {
  console.log(x);
  if (x <= jump ** jump) {
    break;
  }
  x -= jump;
}

// Output
// 10
// 8
// 6
// 4
