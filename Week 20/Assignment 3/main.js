// تكليفات JavaScript Bootcamp من الدرس 159 إلى 168

// التكليف 03

let dateNow = new Date();
dateNow.setDate(0); // The Last Day From The Last Month
let TheNameOfMonth = dateNow.toLocaleString("en", { month: "long" });

console.log(dateNow);
console.log(
  `Previous Month Is ${TheNameOfMonth} And Last Day Is ${dateNow.getDate()}`
);

// Needed Output
// "Sat Apr 30 2022 18:13:20 GMT+0200 (Eastern European Standard Time)"
// "Previous Month Is April And Last Day Is 30"
