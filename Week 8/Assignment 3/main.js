// Assignments تكليفات JavaScript Bootcamp من الدرس 057 إلى 063

// التكليف 03

function ageInTime(theAge) {
  let month = 12,
    week = 4,
    days = 30,
    hours = 24,
    minutes = 60,
    seconds = 60;

  if (theAge > 100 || theAge < 10) {
    console.log(`Your Age Out Of Range`);
  } else {
    console.log(`${theAge * month}`); // Months
    console.log(`${theAge * month * week}`); // Weeks
    console.log(`${theAge * month * week * days}`); // Days
    console.log(`${theAge * month * week * days * hours}`); // Hours
    console.log(`${theAge * month * week * days * hours * minutes}`); // Minutes
    console.log(
      `${theAge * month * week * days * hours * minutes * seconds}` // Seconds
    );
  }
}

// Needed Output
ageInTime(25); // Age Out Of Range
