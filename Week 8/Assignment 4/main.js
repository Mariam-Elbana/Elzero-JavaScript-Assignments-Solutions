// Assignments تكليفات JavaScript Bootcamp من الدرس 057 إلى 063

// التكليف 04

function checkStatus(...element) {
  let a, b, c;
  for (i = 0; i < element.length; i++) {
    let typeElement = typeof element[i];

    switch (typeElement) {
      case "string":
        a = element[i];
        break;

      case "number":
        b = element[i];
        break;

      case "boolean":
        if (element[i] === true) {
          c = `You Are Available For Hire`;
        } else {
          c = `You Are Not Available For Hire`;
        }
        break;
    }
  }
  document.write(`<p>Hello ${a}, Your Age Is ${b}, ${c}</p>`);
}
document.write(`<hr>`);

// Needed Output
checkStatus("Osama", 38, true); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
checkStatus(38, "Osama", true); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
checkStatus(true, 38, "Osama"); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
checkStatus(false, "Osama", 38); // "Hello Osama, Your Age Is 38, You Are Not Available For Hire"
