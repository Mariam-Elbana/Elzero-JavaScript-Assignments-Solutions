//Challenge Lesson 63

// First Way To Solve The Challenge

function showDetails(...params) {
  let one, two, three;

  document.write(`<div>`);

  for (i = 0; i < params.length; i++) {
    let f = typeof params[i];

    switch (f) {
      case "string":
        one = params[i];
        break;

      case "boolean":
        if (params[i] === true) {
          three = "Your Available for Hire";
        } else {
          three = "Your Not Available for Hire";
        }
        break;

      case "number":
        two = params[i];
        break;
    }
  }
  document.write(
    `<p>Hello ${one}, Your Age Is ${two}, Your Status Is ${three}</p>`
  );
  document.write(`</div>`);
}

showDetails("Mariam", 24, true);
showDetails(24, false, "Mariam");
showDetails(true, "Mariam", 24);

//---------------------------------------------------------------------------

// Second Way To Solve The Challenge

function showDetails(...params) {
  let d, e, f;

  for (i = 0; i < params.length; i++) {
    typeof params[i] == "string"
      ? (d = params[i])
      : typeof params[i] == "number"
      ? (e = params[i])
      : params[i] === true
      ? (f = "Your Available For Hire")
      : (f = `Your Not Available For Hire`);
  }

  document.write(`<p>Hello ${d}, Your Age Is ${e}, Your Status Is ${f}`);
  document.write(`<hr>`);
}

showDetails("Mariam", 24, true);
showDetails(24, false, "Mariam");
showDetails(true, "Mariam", 24);
