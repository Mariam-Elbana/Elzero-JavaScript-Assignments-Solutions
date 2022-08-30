//تكليفات JavaScript Bootcamp من الدرس 048 إلى 053

// التكليف 06

let start = 0;
let swappedName = "elZerO";
let string = "";

for (let i = start; i < swappedName.length; i++) {
  let character = swappedName[i];

  if (character === character.toLowerCase()) {
    string += character.toUpperCase();
  } else {
    string += character.toLowerCase();
  }
}
if (string.length === swappedName.length) {
  console.log(string);
}
// Output
// "ELzERo"