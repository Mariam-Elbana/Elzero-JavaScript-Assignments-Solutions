// تكليفات JavaScript Bootcamp من الدرس 102 إلى 110

// التكليف 03

let counter = document.getElementsByClassName("counter")[0];

function countDown() {
  counter.innerHTML -= 1;

  if (counter.innerHTML === "0") {
    clearInterval(handler);
  }
}
let handler = setInterval(countDown, 1000);
