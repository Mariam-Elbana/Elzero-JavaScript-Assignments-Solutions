//تكليفات JavaScript Bootcamp من الدرس 048 إلى 053

// التكليف 01

let start = 10;
let end = 100;
let exclude = 40;

for (i = start; i <= end; i += start) {
  if (i === exclude) {
    continue;
  }
  console.log(i);
}

// Output
// 10
// 20
// 30
// 50
// 60
// 70
// 80
// 90
// 100