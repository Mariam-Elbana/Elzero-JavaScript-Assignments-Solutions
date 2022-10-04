// تكليفات JavaScript Bootcamp من الدرس 179 إلى 188

// التكليف 02

fetch("json-file.json")
  .then((result) => {
    let myResult = result.json();

    return myResult;
  })
  .then((myResult) => {
    myResult.length = 5;
    return myResult;
  })
  .then((myResult) => {
    for (i = 0; i < myResult.length; i++) {
      let bigDiv = document.createElement("div");

      let h3 = document.createElement("h3");
      let textInH3 = document.createTextNode(`${myResult[i].title}`);
      h3.appendChild(textInH3);

      let p = document.createElement("p");
      let textInP = document.createTextNode(`${myResult[i].description}`);
      p.appendChild(textInP);

      bigDiv.appendChild(h3);
      bigDiv.appendChild(p);

      document.body.appendChild(bigDiv);
    }
  });
