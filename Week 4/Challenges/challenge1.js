// Challenge Lessson 26

let a = 1_00; //10000
let b = 2_00.5;
let c = 1e2;
let d = 2.4; 
let x = Math.min(a,b,c,d);


// Find Smallest Number In All Variables And Return Integer
console.log(Math.floor(Math.min(a,b,c,d))); // 2

// Use Variables a + d One Time To Get The Needed Output
console.log(Math.floor(d) * a**2 / 2); // 10000

// Get Integer "2" From d Variable With 4 Methods
console.log(Math.floor(d)); // 2
console.log(Math.trunc(d)); // 2
console.log(Math.floor(Math.min(a,b,c,d))); // 2
console.log(Math.round(d)); // 2

// Use Variables b + d To Get This Valus
console.log((Math.round(Math.floor(b) * Math.floor(d)) / 6).toFixed(2));  // 66.67 => String
console.log(Number((Math.round(Math.floor(b) * Math.floor(d)) / 6).toFixed(0))); // 67 => Number
