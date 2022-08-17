// التكليف 03

let num = "10";

// Solution One
console.log(+num * (true + true)); // 20

// Solution Two
console.log(++num * (true + true) - (true + true)); // 20

// Solution Three
console.log(--num + num); // 20

// Solution Four
console.log(--num * (true + true) + (true + true)); // 20

// Solution Five
console.log(num + ++num + false + true); // 20
