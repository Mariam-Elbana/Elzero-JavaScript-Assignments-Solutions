// تكليفات JavaScript Bootcamp من الدرس 102 إلى 110

// التكليف 01

let promp = prompt("Print Number From – To", "Example: 5-20");
let prompArray = promp.split("-").map((element) => Number(element));

if (prompArray[0] < prompArray[1]) {
  for (i = prompArray[0]; i <= prompArray[1]; i++) {
    document.write(`<h1> ${i} </h1>`);
  }
} else if (!parseInt(prompArray)) {
  alert("Only Numbers");
  prompt("Print Number From – To", "Example: 5-20");
} else {
  for (i = prompArray[1]; i <= prompArray[0]; i++) {
    document.write(`<h1> ${i} </h1>`);
  }
}
