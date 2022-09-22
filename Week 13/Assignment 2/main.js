//تكليفات JavaScript Bootcamp من الدرس 094 إلى 101

// التكليف 02
let addClass = document.getElementsByClassName("classes-to-add")[0];
let removeClass = document.getElementsByClassName("classes-to-remove")[0];
let currentDiv = document.querySelector("[title = 'Current']");
let result = document.querySelectorAll(".classes-list div")[0];
let noClass = document.getElementById("no-class");

addClass.onblur = function () {
  let valueIn = addClass.value.toLowerCase().split(" ").sort();

  for (i = 0; i < valueIn.length; i++) {
    if (valueIn[i] === "") {
      continue;
    } else {
      noClass.innerHTML = "";
      currentDiv.classList.add(`${valueIn[i]}`);
      let span = document.createElement("span");
      let spanText = document.createTextNode(`${valueIn[i]}`);
      span.appendChild(spanText);
      result.appendChild(span);
      addClass.value = "";
    }
  }
};

removeClass.onblur = function () {
  let valueOut = removeClass.value.toLowerCase().split(" ").sort();
  let spanInDiv = document.querySelectorAll(".classes-list div span");

  for (i = 0; i < valueOut.length; i++) {
    if (currentDiv.classList.contains(`${valueOut[i]}`)) {
      currentDiv.classList.remove(valueOut[i]);
    }

    for (n = 0; n < spanInDiv.length; n++) {
      if (valueOut[i] === spanInDiv[n].innerHTML) {
        spanInDiv[n].remove();
      }
    }
    removeClass.value = "";
  }
};
