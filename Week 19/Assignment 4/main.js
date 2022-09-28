// تكليفات JavaScript Bootcamp من الدرس 147 إلى 158

// التكليف 04

String.prototype.addLove = function (val) {
  return `I Love ${this} Web School`;
};

let myStr = "Elzero";
console.log(myStr.addLove()); // I Love Elzero Web School

//----------------------------------------------------------

// Another Solution

class Elzero {
  constructor(myString) {
    this.s = myString;
  }
  addLove() {
    return `I Love ${this.s} Web School`;
  }
}

let myStr1 = "Elzero";
let myStr = new Elzero(`${myStr1}`);
console.log(myStr.addLove()); // I Love Elzero Web School
