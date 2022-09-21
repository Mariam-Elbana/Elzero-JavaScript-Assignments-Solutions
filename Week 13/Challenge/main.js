// Challenge Leeson 101

// Body
let body = document.getElementsByTagName("body")[0];
body.style.backgroundColor = "rgba(236, 236, 236)";
body.style.margin = "0";

// Header
let header = document.createElement("header");
header.setAttribute("class", "header");
header.style.display = "flex";
header.style.backgroundColor = "rgba(255, 255, 255)";
header.style.padding = "20px";
header.style.justifyContent = "space-between";
header.style.alignItems = "center";
document.body.appendChild(header);

// Logo In Header
let headerLogo = document.createElement("span");
headerLogo.setAttribute("class", "logo");
let headerLogoText = document.createTextNode("Elzero");
header.appendChild(headerLogo);
headerLogo.appendChild(headerLogoText);
headerLogo.style.color = "rgba(35, 169, 110, 1)";
headerLogo.style.fontWeight = "bold";

// Links
let links = ["Home", "About", "Service", "Contact"];
let ul = document.createElement("ul");
ul.setAttribute("class", "menu");
ul.style.display = "flex";
ul.style.justifyContent = "flex-end";
for (i = 0; i < links.length; i++) {
  let li = document.createElement("li");
  let liText = document.createTextNode(`${links[i]}`);
  li.style.listStyle = "none";
  li.style.marginRight = "4%";
  li.style.fontSize = "14px";
  li.style.fontWeight = "bold";
  li.style.color = "rgb(104 99 99)";
  li.appendChild(liText);
  ul.appendChild(li);
  header.appendChild(ul);
}

// Content
let mainDiv = document.createElement("div");
mainDiv.setAttribute("class", "main-content");
mainDiv.style.boxSizing = "border-box";
mainDiv.style.padding = "20px";
mainDiv.style.display = "flex";
mainDiv.style.flexWrap = "wrap";
mainDiv.style.justifyContent = "center";
mainDiv.style.gap = "20px";
document.body.appendChild(mainDiv);

// Product
for (i = 0; i < 15; i++) {
  let product = document.createElement("div");
  product.setAttribute("class", "product");
  let productNumberDiv = document.createElement("div");
  let productNumber = document.createTextNode(`${i + 1} \n`);
  let productWordDiv = document.createElement("div");
  let productWord = document.createTextNode(`Product`);
  product.style.backgroundColor = "rgba(255, 255, 255)";
  product.style.padding = "20px";
  product.style.border = "1px solid rgba(221, 221, 221)";
  product.style.boxSizing = "border-box";
  product.style.textAlign = "center";
  product.style.borderRadius = "6px";
  product.style.color = "rgba(136, 136, 136)";
  product.style.width = "calc((100% - 40px) / 3)";
  productWordDiv.style.fontSize = "11px";
  productNumberDiv.style.fontSize = "25px";
  productNumberDiv.style.fontWeight = "bold";
  productNumberDiv.style.color = "rgb(51 44 44)";
  product.appendChild(productNumberDiv);
  productNumberDiv.appendChild(productNumber);
  product.appendChild(productWordDiv);
  productWordDiv.appendChild(productWord);
  mainDiv.appendChild(product);
}

// Footer
let footer = document.createElement("div");
footer.setAttribute("class", "footer");
let footerTextDiv = document.createElement("span");
let footerText = document.createTextNode("Copyright 2022");
footer.style.padding = "20px";
footer.style.backgroundColor = "rgba(35, 169, 110, 1)";
footer.style.display = "flex";
footer.style.justifyContent = "center";
footerTextDiv.style.color = "#fff";
footer.appendChild(footerTextDiv);
footerTextDiv.appendChild(footerText);
document.body.appendChild(footer);
