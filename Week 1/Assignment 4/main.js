// التكليف 04

console.group("Group 1");
console.log("Message 1");
console.log("Message 2");
console.groupCollapsed("Child");
console.log("Message 1");
console.log("Message 2");
console.groupCollapsed("GrandChild");
console.log("message 1");
console.log("message 2");
console.groupEnd();
console.groupEnd();
console.groupEnd();

console.group("Group 2");
console.log("message 1");
console.log("message 2");
console.groupEnd;
