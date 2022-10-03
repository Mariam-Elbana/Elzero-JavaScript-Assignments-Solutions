// تكليفات JavaScript Bootcamp من الدرس 169 إلى 178

// التكليف 02

let jsonObject = new XMLHttpRequest();
jsonObject.open("GET", "articles.json");
jsonObject.send();

jsonObject.onreadystatechange = function () {
  if (this.readyState === 4 && this.status === 200) {
    console.log(this.responseText);
    console.log("Data Loaded");
  }
};
