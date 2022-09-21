//تكليفات JavaScript Bootcamp من الدرس 086 إلى 093

// التكليف 06

let inputNumber = document.querySelector("[name ='elements']");
let inputText = document.querySelector("[name ='texts']");
let selectBox = document.querySelector("select");
let theResult = document.querySelector(".results");

document.forms[0].onsubmit = function (e) {
  e.preventDefault();

  theResult.innerHTML = "";

  for (i = 1; i <= inputNumber.value; i++) {
    let element = document.createElement(`${selectBox.value}`);
    let textIn = document.createTextNode(`${inputText.value}`);
    element.appendChild(textIn);
    element.setAttribute("class", "box");
    element.setAttribute("title", "Element");
    element.setAttribute("id", `id-${i}`);
    theResult.appendChild(element);

    element.style.color = "#fff";
    element.style.backgroundColor = "#e91e63";
    element.style.width = "150px";
    element.style.padding = "10px";
    element.style.borderRadius = "5px";
    element.style.textAlign = "center";
    element.style.display = "inline-block";
    element.style.margin = "10px";
  }
};
