//تكليفات JavaScript Bootcamp من الدرس 086 إلى 093

// التكليف 03

let input = document.querySelector("[type = 'number']");
let result = document.querySelector("[class='result']");

input.onkeyup = function () {
  return (result.innerHTML = `{${input.value}} USD Dollar = {${Number(
    input.value * 15.6
  ).toFixed(2)}} Egyptian Pound`);
};
