//تكليفات JavaScript Bootcamp من الدرس 123 إلى 133

// التكليف 03

let myInfo = {
  username: "Osama",
  role: "Admin",
  country: "Egypt",
};

let myInfoMap = new Map();
myInfoMap.set("username", "Osama");
myInfoMap.set("role", "Admin");
myInfoMap.set("country", "Egypt");

console.log(myInfoMap);
console.log(myInfoMap.size);
console.log(myInfoMap.has("role"));

// Needed Output
//   Map(3) {'username' => 'Osama', 'role' => 'Admin', 'country' => 'Egypt'}
//   3
//   true
