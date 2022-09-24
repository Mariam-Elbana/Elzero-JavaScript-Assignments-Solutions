//تكليفات JavaScript Bootcamp من الدرس 111 إلى 114

// التكليف 02

let inputs = document.querySelectorAll(".my-people input");
let peopleSelectBox = document.querySelector("[name ='in-people']");

// Name Input
inputs[0].onblur = function () {
  window.sessionStorage.setItem("input-value1", this.value);
};

if (window.sessionStorage.getItem("input-value1")) {
  inputs[0].value = window.sessionStorage.getItem("input-value1");
}

// Email Input
inputs[1].onblur = function () {
  window.sessionStorage.setItem("input-value2", this.value);
};

if (window.sessionStorage.getItem("input-value2")) {
  inputs[1].value = window.sessionStorage.getItem("input-value2");
}

// Password Input
inputs[2].onblur = function () {
  window.sessionStorage.setItem("input-value3", this.value);
};

if (window.sessionStorage.getItem("input-value2")) {
  inputs[2].value = window.sessionStorage.getItem("input-value2");
}

// Select Box
peopleSelectBox.addEventListener("change", (e) => {
  window.sessionStorage.setItem("select-box", e.currentTarget.value);
});

if (window.sessionStorage.getItem("select-box")) {
  peopleSelectBox.value = window.sessionStorage.getItem("select-box");
}
