// Assignments تكليفات JavaScript Bootcamp من الدرس 057 إلى 063

// التكليف 01

function sayHello(theName, theGender = "") {
  if (theGender == "Male") {
    document.write(`<p>Hello Mr ${theName}</p>`);
  } else if (theGender === "") {
    document.write(`<p>Hello ${theName}</p>`);
  } else {
    document.write(`<p>Hello Miss ${theName}</p>`);
  }
}

// Needed Output
sayHello("Osama", "Male"); // "Hello Mr Osama"
sayHello("Eman", "Female"); // "Hello Miss Eman"
sayHello("Sameh"); // "Hello Sameh"
