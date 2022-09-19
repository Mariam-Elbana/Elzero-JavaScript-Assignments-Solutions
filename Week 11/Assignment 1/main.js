//تكليفات JavaScript Bootcamp من الدرس 079 إلى 085

// التكليف 01

let member = {
  name: "Elzero",
  age: 38,
  country: "Egypt",
  fullDetails: function () {
    return `My Name Is Elzero, My Age Is 38, I Live in Egypt`;
  },
};

console.log(member.name); // Elzero
console.log(member.age); // 38
console.log(member.country); // Egypt
console.log(member.fullDetails());
// My Name Is Elzero, My Age Is 38, I Live in Egypt
