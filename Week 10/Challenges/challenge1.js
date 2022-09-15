// Challenge Lesson 78

let myString = "1,2,3,EE,l,z,e,r,o,,_,W,e,b,_,S,c,h,o,o,l,2,0,z";

let solution = myString
  .split(",")
  .filter(function (element) {
    return isNaN(parseInt(element)) ? element : "";
  })
  .map(function (ele) {
    return ele === "_" ? " " : ele;
  })
  .reduce(function (acc, current, index, array) {
    array.length = array.length--;

    return acc === current ? `${acc}` : `${acc}${current}`;
  })
  .slice(true);
console.log(solution);
