// تكليفات JavaScript Bootcamp من الدرس 064 إلى 070

// التكليف 01

function getDetails(zName, zAge, zCountry) {
  function namePattern(...zName) {
    let firstName, firstLetter;

    for (i = 0; i < zName.length; i++) {
      firstName = zName[0];
      firstLetter = zName[1][0].toUpperCase();
      return `${firstName} ${firstLetter}`;
    }
  }
  namePattern();

  function ageWithMessage(...zAge) {
    let age;

    for (i = 0; i < zAge.length; i++) {
      if (zAge[i] === "string") {
        continue;
      } else if (typeof zAge[i] === "number") {
        return `${(age = zAge[i])}`;
      }
    }
  }
  ageWithMessage();

  function countryTwoLetters(...zCountry) {
    let firstLetterCountary, secondLetterCountary;

    for (i = 0; i < zCountry.length; i++) {
      firstLetterCountary = zCountry[i][0].toUpperCase();
      secondLetterCountary = zCountry[i][1].toUpperCase();
    }

    return `${firstLetterCountary}${secondLetterCountary}`;
  }
  countryTwoLetters();

  function fullDetails() {
    return console.log(
      `Hello ${namePattern("Mariam", "amer")}.,Your Age Is ${ageWithMessage(
        "Is My Age",
        25
      )}, You Live In ${countryTwoLetters("Egypt")}`
    );
  }
  return fullDetails();
}

getDetails();
