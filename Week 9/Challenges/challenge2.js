// Challenge Lesson 70

//Arrow Function

let myNumbers = [20, 50, 10, 60];

let calc = (one, two, ...nums) => one + two + nums++;

console.log(calc(myNumbers[2], myNumbers[0], myNumbers[1])); //80

// Regular Function

let myNumbers2 = [20, 50, 10, 60];

let calc2 = function (one, two, ...nums) {
  return one + two + nums++;
};

console.log(calc2(myNumbers2[2], myNumbers2[0], myNumbers2[1])); //80
