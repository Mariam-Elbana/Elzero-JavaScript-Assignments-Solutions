//تكليفات JavaScript Bootcamp من الدرس 094 إلى 101

// التكليف 03

let p = document.getElementsByTagName("P")[0];
let div = document.getElementsByClassName("our-element")[0];
let divStart = document.createElement("div");
let divStartText = document.createTextNode("Start");
divStart.appendChild(divStartText);
divStart.setAttribute("title", "Start Element");
divStart.setAttribute("class", "Start");
divStart.setAttribute("data-value", "Start");
let divEnd = document.createElement("div");
let divEndText = document.createTextNode("End");
divEnd.appendChild(divEndText);
divEnd.setAttribute("title", "End Element");
divEnd.setAttribute("class", "end");
divEnd.setAttribute("data-value", "end");

p.remove();
div.before(divStart);
div.after(divEnd);
