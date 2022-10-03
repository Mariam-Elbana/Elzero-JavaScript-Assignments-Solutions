// تكليفات JavaScript Bootcamp من الدرس 169 إلى 178

// التكليف 03

let jsonObject = new XMLHttpRequest();
jsonObject.open("GET", "articles.json");
jsonObject.send();

jsonObject.onreadystatechange = function () {
  if (this.readyState === 4 && this.status === 200) {
    let mainData = JSON.parse(this.responseText);
    for (let i = 0; i < mainData.length; i++) {
      mainData[i].Category = "All";
    }
    console.log(mainData);

    let updatedData = JSON.stringify(mainData);
    console.log(updatedData);
  }
};
