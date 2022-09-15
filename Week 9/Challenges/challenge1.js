// Challenge Lessons 70

// Regular Function
let names = function (...arguments) {
  return `String [${arguments.join("], [")}] => Done !`;
};

console.log(names("Osama", "Mohamed", "Ali", "Ibrahim"));

// Arrwo Function
let names2 = (...arguments) => `String [${arguments.join("], [")}] => Done !`;

console.log(names2("Osama", "Mohamed", "Ali", "Ibrahim"));

// String [Osama], [Mohamed], [Ali], [Ibrahim] => Done !
