// تكليفات JavaScript Bootcamp من الدرس 169 إلى 178

// التكليف 04

let jsonObject = new XMLHttpRequest();
jsonObject.open("GET", "articles.json");
jsonObject.send();

jsonObject.onreadystatechange = function () {
  if (this.readyState === 4 && this.status === 200) {
    let mainData = JSON.parse(this.responseText);

    let bigDiv = document.createElement("div");
    bigDiv.setAttribute("id", "data");
    for (i = 0; i < mainData.length; i++) {
      let smallDiv = document.createElement("div");
      bigDiv.appendChild(smallDiv);

      let h2 = document.createElement("h2");
      smallDiv.appendChild(h2);

      let p1 = document.createElement("p");
      smallDiv.appendChild(p1);

      let p2 = document.createElement("p");
      smallDiv.appendChild(p2);

      let p3 = document.createElement("p");
      smallDiv.appendChild(p3);

      let textInH2 = document.createTextNode(`${mainData[i].Title}`);
      h2.appendChild(textInH2);

      let textInP1 = document.createTextNode(`${mainData[i].Body}`);
      p1.appendChild(textInP1);

      let textInP2 = document.createTextNode(`Author: ${mainData[i].Author}`);
      p2.appendChild(textInP2);

      let textInP3 = document.createTextNode(
        `Category: ${mainData[i].Category}`
      );
      p3.appendChild(textInP3);
    }
    document.body.appendChild(bigDiv);
  }
};
