// تكليفات JavaScript Bootcamp من الدرس 115 إلى 122

// التكليف 06

let chosen = 1;

let myFriends = [
  { title: "Osama", age: 39, available: true, skills: ["HTML", "CSS"] },
  { title: "Ahmed", age: 25, available: false, skills: ["Python", "Django"] },
  { title: "Sayed", age: 33, available: true, skills: ["PHP", "Laravel"] },
];

// Write Your Code Here

if (chosen === 1) {
  let {
    title,
    age,
    available,
    skills: [, two],
  } = myFriends[0];
  console.log(title);
  console.log(age);
  available ? console.log(`Available`) : console.log(`Not Available`);
  console.log(`${two}`);
} else if (chosen === 2) {
  let {
    title,
    age,
    available,
    skills: [, two],
  } = myFriends[1];
  console.log(title);
  console.log(age);
  available ? console.log(`Available`) : console.log(`Not Available`);
  console.log(`${two}`);
} else {
  let {
    title,
    age,
    available,
    skills: [, two],
  } = myFriends[2];
  console.log(title);
  console.log(age);
  available ? console.log(`Available`) : console.log(`Not Available`);
  console.log(`${two}`);
}

// If chosen === 1

// "Osama"
// 39
// "Available"
// "CSS"

// If chosen === 2

// "Ahmed"
// 25
// "Not Available"
// "Django"

// If chosen === 3

// "Sayed"
// 33
// "Available"
// "Laravel"
