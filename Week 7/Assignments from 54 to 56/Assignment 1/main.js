//تكليفات JavaScript Bootcamp من الدرس 054 إلى 056

let friends = ["Ahmed", "Sayed", "Ali", 1, 2, "Mahmoud", "Amany"];
let index = 0;
let counter = 0;
let theLetter = friends[counter][counter];

for (i = 0; i < friends.length; i++) {
  if (typeof friends[i] === "number") {
    continue;
  } else if (friends[i].startsWith(theLetter)) {
    continue;
  } else {
    console.log(`${++counter} => ${friends[i]}`);
  }
}

// Output
// ("1 => Sayed")
// ("2 => Mahmoud")
