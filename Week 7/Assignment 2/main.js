//تكليفات JavaScript Bootcamp من الدرس 048 إلى 053

// التكليف 02

let start = 10;
let end = 0;
let stop = 3;

for (i = start; i > end; i--) {
  if (i < start) {
    console.log(`0${i}`);

    if (i === stop) {
      break;
    }
  } else {
    console.log(i);
  }
}

// Output
// 10
// 09
// 08
// 07
// 06
// 05
// 04
// 03
