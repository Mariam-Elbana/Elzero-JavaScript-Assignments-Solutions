// Challenge Lesson 56

let myAdmins = ["Ahmed", "Osama", "Sayed", "Stop", "Samera"];
let myEmployees = [
  "Amgad",
  "Samah",
  "Ameer",
  "Omar",
  "Othman",
  "Amany",
  "Samia",
];

document.write(`<div>We Have ${myAdmins.indexOf("Stop")} Admins</div>`);
document.write(`<hr>`);

let teamNumber = 0;
let workerNumber = 0;

for (i = 0; i < myAdmins.length; i++) {
  if (myAdmins[i] === "Stop") {
    break;
  }

  document.write(
    `<div>The Admain For Team ${++teamNumber} is ${myAdmins[i]}</div>`
  );

  document.write(`<h3>Team Members:</h3>`);

  let letter = myAdmins[i][0];

  for (worker = 0; worker < myEmployees.length; worker++) {
    if (myEmployees[worker].startsWith(letter)) {
      document.write(`<p> ${++workerNumber}- ${myEmployees[worker]}</p>`);
    }
  }

  workerNumber = 0;
  document.write(`<hr>`);
}
