//تكليفات JavaScript Bootcamp من الدرس 094 إلى 101

// التكليف 05

let d = document.getElementsByClassName("d")[0];
let s = document.getElementsByClassName("s")[0];
let p = document.getElementsByClassName("p")[0];
let a = document.getElementsByClassName("a")[0];
let s2 = document.getElementsByClassName("s2")[0];

d.addEventListener("click", function () {
  console.log(d.constructor.name);
});
s.addEventListener("click", function () {
  console.log(s.constructor.name);
});
p.addEventListener("click", function () {
  console.log(p.tagName);
});
a.addEventListener("click", function () {
  console.log(a.nodeName);
});
s2.addEventListener("click", function () {
  console.log(s2.nodeName);
});
