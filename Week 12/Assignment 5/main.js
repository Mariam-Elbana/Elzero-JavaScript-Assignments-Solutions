//تكليفات JavaScript Bootcamp من الدرس 086 إلى 093

// التكليف 05

let allImages = document.images;

for (i = 0; i < allImages.length; i++) {
  if (allImages[i].hasAttribute("alt")) {
    allImages[i].alt = "Old";
  } else {
    allImages[i].alt = "Elzero New";
  }
  console.log(allImages[i]);
}
