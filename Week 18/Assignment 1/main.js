// تكليفات JavaScript Bootcamp من الدرس 134 إلى 146

// التكليف 01

let ip = "2001:db8:3333:4444:5555:6666:7777:8888";
let ipReg = /\d+.\w+.\d+.\d+.\d+.\d+.\d+.\d+/gi;
console.log(ip.match(ipReg));
