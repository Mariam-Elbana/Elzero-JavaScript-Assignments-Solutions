// تكليفات JavaScript Bootcamp من الدرس 071 إلى 078

// التكليف 02

let myString = "EElllzzzzzzzeroo";

let myStringFiltering = myString
  .split("")
  .filter(function (element, index, array) {
    return array.indexOf(element) == index;
  })
  .join("");

console.log(myStringFiltering); // Elzero
