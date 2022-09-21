//تكليفات JavaScript Bootcamp من الدرس 086 إلى 093

// التكليف 04

let length = document.body.childElementCount;
--length;
--length;
--length;
let divOne = document.querySelector(".one");
let divTwo = document.querySelector(".two");
let letterOne = document
  .querySelector(".one")
  .className[--length].toUpperCase();
let letterTwo = document.querySelector(".two").className[length].toUpperCase();

divOne.title = divOne.className;
divTwo.title = divTwo.className;
divOne.innerHTML = `${letterOne}${divOne.className.slice(++length)}`;
divTwo.innerHTML = `${letterTwo}${divTwo.className.slice(length)} 2`;

console.log(divOne);
console.log(divTwo);
