//تكليفات JavaScript Bootcamp من الدرس 123 إلى 133

// التكليف 01

let setOfNumbers = new Set([10]);
setOfNumbers.add(20).add(2);

console.log(setOfNumbers);

let keysOfSet = setOfNumbers.keys();
keysOfSet.next().value;
keysOfSet.next().value;

console.log(keysOfSet.next().value);
