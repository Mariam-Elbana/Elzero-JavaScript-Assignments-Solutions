//تكليفات JavaScript Bootcamp من الدرس 079 إلى 085

// التكليف 02

// Method One

let objMethodOne = {
  property: function () {
    return `Method One`;
  },
};

console.log(objMethodOne.property()); // "Method One"

// Method Two

let objMethodTwo = new Object();

objMethodTwo.property = function () {
  return `Method Two`;
};

console.log(objMethodTwo.property()); // "Method Two"

// Method Three

let objMethodThree = Object.create({});

objMethodThree.property = function () {
  return `Method Three`;
};

console.log(objMethodThree.property()); // "Method Three"

// Method Four

let objMethodFour = Object.assign(
  {},
  {
    property: function () {
      return `Method Four`;
    },
  }
);

console.log(objMethodFour.property()); // "Method Four"
