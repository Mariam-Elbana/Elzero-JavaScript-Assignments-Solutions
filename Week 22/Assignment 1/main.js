// تكليفات JavaScript Bootcamp من الدرس 179 إلى 188

// التكليف 01

const myData = new Promise((resolve, reject) => {
    let myRequest = new XMLHttpRequest();

    myRequest.onload = function () {
      if (this.readyState === 4 && this.status === 200) {
        let jsObject = JSON.parse(myRequest.responseText);
        jsObject.length = 5;
        resolve(jsObject);
      } else {
        reject(Error("Not Found"));
      }
    };
    myRequest.open("GET", "json-file.json");
    myRequest.send();
});

myData.then((result) => {
    for(i = 0; i < result.length; i++){
        let bigDiv = document.createElement("div");

        let h3 = document.createElement("h3");
        let textInH3 = document.createTextNode(`${result[i].title}`);
        h3.appendChild(textInH3);

        let p = document.createElement("p");
        let textInP = document.createTextNode(`${result[i].description}`);
        p.appendChild(textInP);

        bigDiv.appendChild(h3);
        bigDiv.appendChild(p);

        document.body.appendChild(bigDiv);
    }
});
