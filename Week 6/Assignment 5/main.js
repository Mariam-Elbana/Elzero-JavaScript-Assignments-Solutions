// التكليف 05

let needle = "JS";
let haystack = ["PHP", "JS", "Python"];

// Write 3 Solutions

if (haystack.includes(needle)) {
  console.log("Found");
} else {
  console.log("Not Found");
}

if (haystack[1] === needle) {
  console.log("Found");
} else {
  console.log("Not Found");
}

if (haystack.indexOf("JS") !== needle.indexOf("JS")) {
  console.log("Found");
} else {
  console.log("Not Found");
}
