//تكليفات JavaScript Bootcamp من الدرس 111 إلى 114

// التكليف 01

let firstSelectBox = document.querySelector("#fonts");
let secondSelectBox = document.querySelector("#colors");
let thirdSelectBox = document.querySelector("#sizes");

// Font Select Box
firstSelectBox.addEventListener("change", (e) => {
  // Change Font Family On The Body
  document.body.style.fontFamily = e.currentTarget.value;

  window.localStorage.setItem("font-family", e.currentTarget.value);
});

if (window.localStorage.getItem("font-family")) {
  document.body.style.fontFamily = window.localStorage.getItem("font-family");
  firstSelectBox.value = window.localStorage.getItem("font-family");
}

//Colors Select Box
secondSelectBox.addEventListener("change", (e) => {
  // Change Color On The Body
  document.body.style.backgroundColor = e.currentTarget.value;

  window.localStorage.setItem("background-color", e.currentTarget.value);
});

if (window.localStorage.getItem("background-color")) {
  document.body.style.backgroundColor =
    window.localStorage.getItem("background-color");
  secondSelectBox.value = window.localStorage.getItem("background-color");
}

// Size Select Box
for (i = 16; i <= 30; i++) {
  let option = document.createElement("option");
  optionText = document.createTextNode(`${i}`);
  option.appendChild(optionText);
  thirdSelectBox.appendChild(option);
  option.setAttribute("value", `${i}px`);
}

thirdSelectBox.addEventListener("change", (e) => {
  // Change Font Size On The Body
  document.body.style.fontSize = e.currentTarget.value;

  window.localStorage.setItem("font-size", e.currentTarget.value);
});

if (window.localStorage.getItem("font-size")) {
  document.body.style.fontSize = window.localStorage.getItem("font-size");
  thirdSelectBox.value = window.localStorage.getItem("font-size");
}
