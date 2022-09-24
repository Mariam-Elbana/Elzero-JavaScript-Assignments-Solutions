// Challenge Lesson 122

let chosen = 1;

let myFriends = [
  { title: "Mariam", age: 24, availabel: true, skills: ["HTML", "CSS"] },
  { title: "Amr", age: 25, availabel: true, skills: ["Python", "Django"] },
  { title: "Eman", age: 50, availabel: false, skills: ["PHP", "Laravel"] },
];

if (chosen === 1) {
  let {
    title,
    age,
    availabel,
    skills: [, two],
  } = myFriends[0];
  console.log(title);
  console.log(age);
  availabel ? console.log(`Availabel`) : console.log(`Not Availabel`);
  console.log(`${two}`);
} else if (chosen === 2) {
  let {
    title,
    age,
    availabel,
    skills: [, two],
  } = myFriends[1];
  console.log(title);
  console.log(age);
  availabel ? console.log(`Availabel`) : console.log(`Not Availabel`);
  console.log(`${two}`);
} else {
  let {
    title,
    age,
    availabel,
    skills: [, two],
  } = myFriends[2];
  console.log(title);
  console.log(age);
  availabel ? console.log(`Availabel`) : console.log(`Not Availabel`);
  console.log(`${two}`);
}
