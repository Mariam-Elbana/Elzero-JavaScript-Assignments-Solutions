// تكليفات JavaScript Bootcamp من الدرس 115 إلى 122

// التكليف 03

let arr1 = ["Ahmed", "Sameh", "Sayed"];
let arr2 = ["Mohamed", "Gamal", "Amir"];
let arr3 = ["Haytham", "Shady", "Mahmoud"];

// Play With Arrays To Prepare For Destructuring
let allArr = arr1.concat(arr2).concat(arr3);

// Write Your Destructuring Assignment Here
let [c, two, three, four, five, sex, seven, a, b] = allArr;

// My Best Friends: Shady, Mahmoud, Ahmed
console.log(`My Best Friends: ${a}, ${b}, ${c}`);
