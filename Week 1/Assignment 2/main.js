// التكليف 02

let elzeroElement = document.createElement("h1");
let elzeroElementText = document.createTextNode("Elzero");
elzeroElement.setAttribute("class", "elzero");
elzeroElement.appendChild(elzeroElementText);
document.body.appendChild(elzeroElement);

elzeroElement.style.color = "blue";
elzeroElement.style.fontSize = "80px";
elzeroElement.style.fontWeight = "bold";
elzeroElement.style.textAlign = "center";
elzeroElement.style.fontFamily = "Arial";

// التكليف 02
// Another Solution

document.write("<h1> Elzero </h1>");

document.querySelector("h1").style.color ="blue";
document.querySelector("h1").style.fontSize = "80px";
document.querySelector("h1").style.fontWeight ="bold";
document.querySelector("h1").style.textAlign ="center";
document.querySelector("h1").style.fontFamily ="Arial";