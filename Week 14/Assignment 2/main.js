// تكليفات JavaScript Bootcamp من الدرس 102 إلى 110

// التكليف 02

function Second() {
  let popUp = document.createElement("div");
  popUp.setAttribute("class", "popup");
  let box = document.createElement("div");
  box.setAttribute("class", "box");
  let boxInBox = document.createElement("div");
  boxInBox.setAttribute("class", "box-in-box");
  let div1 = document.createElement("div");
  div1.setAttribute("class", "div1");
  let div1Text = document.createTextNode(`Welcom`);
  let x = document.createElement("span");
  x.setAttribute("class", "x");
  let xText = document.createTextNode(`x`);
  let div2 = document.createElement("div");
  div2.setAttribute("class", "div2");
  let div2Text = document.createTextNode(`Welcom To Elzero Web School`);
  popUp.appendChild(box);
  box.appendChild(boxInBox);
  boxInBox.appendChild(div1);
  div1.appendChild(div1Text);
  boxInBox.appendChild(div2);
  div2.appendChild(div2Text);
  boxInBox.appendChild(x);
  x.appendChild(xText);
  document.body.appendChild(popUp);
  popUp.style.position = "fixed";
  popUp.style.backgroundColor = "rgb(43 43 43 / 59%)";
  popUp.style.width = "100%";
  popUp.style.height = "100%";
  popUp.style.left = "0";
  popUp.style.top = "0";
  popUp.style.zIndex = "100";
  box.style.width = "350px";
  box.style.height = "350px";
  box.style.borderRadius = "10px";
  box.style.color = "#fff";
  box.style.backgroundColor = "#d01919";
  box.style.display = "flex";
  box.style.justifyContent = "center";
  box.style.alignItems = "center";
  box.style.fontSize = "20px";
  box.style.top = "50%";
  box.style.left = "50%";
  box.style.position = "fixed";
  box.style.transform = "translate(-50%, -50%)";
  boxInBox.style.textAlign = "center";
  div1.style.marginBottom = "10px";
  div1.style.fontSize = "25px";
  x.style.fontSize = "30px";
  x.style.color = "black";
  x.style.backgroundColor = "#fff";
  x.style.position = "absolute";
  x.style.top = "-15px";
  x.style.right = "-15px";
  x.style.borderRadius = "15px";
  x.style.width = "40px";
  x.style.height = "40px";
  x.style.display = "flex";
  x.style.justifyContent = "center";
  x.style.cursor = "pointer";

  x.onclick = function () {
    box.parentElement.style.visibility = "hidden";
  };
}

window.onload = function () {
  setTimeout(Second, 5000);
};
