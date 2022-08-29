// تكليفات JavaScript Bootcamp من الدرس 038 إلى 039

// التكليف 01

let day = "   friday   ".trim();
day = day[0].toUpperCase() + day.slice(1, day.length);

switch (day) {
  case "Saturday":
  case "Sunday":
  case "Friday":
    console.log(`In ${day} No Appointments Available`);
    break;

  case "Monday":
  case "Thursday":
    console.log(`In ${day} 10:00 AM To 5:00 PM`);
    break;

  case "Tuesday":
    console.log(`In ${day} From 10:00 AM To 6:00 PM`);
    break;

  case "Wednesday":
    console.log(`In ${day} From 10:00 AM To 7:00 PM`);
    break;

  default:
    console.log(`Its Not Valid Day`);
}
