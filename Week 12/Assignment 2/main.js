//تكليفات JavaScript Bootcamp من الدرس 086 إلى 093

// التكليف 02

let imgsDiv = document.images;

for (i = 0; i < imgsDiv.length; i++) {
  imgsDiv[i].alt = "Elzero Logo";

  imgsDiv[i].setAttribute(
    "src",
    "https://elzero.org/wp-content/themes/elzero/imgs/logo.png"
  );

  console.log(imgsDiv[i]);
}
