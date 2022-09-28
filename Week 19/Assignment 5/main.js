// تكليفات JavaScript Bootcamp من الدرس 147 إلى 158

// التكليف 05

const myObj = {
  username: "Elzero",
  id: 100,
  score: 1000,
  country: "Egypt",
};

// Write Your Code Here

Object.defineProperties(myObj, {
  score: {
    writable: false,
    enumerable: true,
    configurable: false,
  },

  id: {
    writable: false,
    enumerable: false,
    configurable: true,
  },

  country: {
    enumerable: false,
  },
});

myObj.score = 500;

for (let prop in myObj) {
  console.log(`${prop} => ${myObj[prop]}`);
}

delete myObj.country;

console.log(myObj);

// Needed Output
("username => Elzero");
("score => 1000");
