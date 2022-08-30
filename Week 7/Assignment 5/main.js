//تكليفات JavaScript Bootcamp من الدرس 048 إلى 053

// التكليف 05

let friends = ["Ahmed", "Sayed", "Eman", "Mahmoud", "Ameer", "Osama", "Sameh"];
let letter = "a".toUpperCase();

for (i = letter.length; i < friends.length; i++) {
  if (friends[i].startsWith(letter)) {
    friends.splice(friends[i], letter.length);
  }
  console.log(`"${i + --letter.length} => ${friends[i]}"`);
}

// Output
// ("1 => Sayed");
// ("2 => Eman");
// ("3 => Mahmoud");
// ("4 => Osama");
// ("5 => Sameh");
