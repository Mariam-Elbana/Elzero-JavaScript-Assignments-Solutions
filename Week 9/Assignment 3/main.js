// تكليفات JavaScript Bootcamp من الدرس 064 إلى 070

// التكليف 03

let checker = (zName) => (status) => (salary) =>
  status === "Avaliable"
    ? `${zName} My Salary Is ${salary}`
    : `Iam Not Avaliable`;
console.log(checker("Osama")("Avaliable")(4000)); // My Salary Is 4000
console.log(checker("Ahmed")("Not Available")()); // Iam Not Avaialble