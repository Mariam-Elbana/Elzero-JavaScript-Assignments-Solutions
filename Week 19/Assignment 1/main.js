// تكليفات JavaScript Bootcamp من الدرس 147 إلى 158

// التكليف 01

class Car {
  constructor(name, model, price) {
    this.n = name;
    this.m = model;
    this.p = price;
  }
  run() {
    return `Car Is Running Now`;
  }
  stop() {
    return `Car Is Stopped`;
  }
}

let carOne = new Car("MG", 2022, 420000);
let carTwo = new Car("Sedan", 2023, 30000);
let carThree = new Car("BMW", 2024, 40000);

console.log(
  `Car One Name Is ${carOne.n} And Model Is ${carOne.m} And Price Is ${carOne.p}`
);
console.log(carTwo.run());

//-------------------------------------------------------------------------------------

// Another Solution With Inheritance

class Car {
  constructor(name, model, price) {
    this.n = name;
    this.m = model;
    this.p = price;
  }
  run() {
    return `Car Is Running Now`;
  }
  stop() {
    return `Car Is Stopped`;
  }
}

class MG extends Car {
  constructor(name, model, price) {
    super(name, model, price);
  }
}

class Sedan extends Car {
  constructor(name, model, price) {
    super(name, model, price);
  }
}

class BMW extends Car {
  constructor(name, model, price) {
    super(name, model, price);
  }
}

let carOne = new MG("MG", 2022, 420000);
let carTwo = new Sedan("Sedan", 2023, 30000);
let carThree = new BMW("BMW", 2024, 40000);

console.log(
  `Car One Name Is ${carOne.n} And Model Is ${carOne.m} And Price Is ${carOne.p}`
);
console.log(carTwo.run());

//   "Car One Name Is MG And Model Is 2022 And Price Is 420000"
//   "Car Is Running Now"
