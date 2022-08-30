// Assignments تكليفات JavaScript Bootcamp من الدرس 057 إلى 063

// التكليف 06

function multiply(...numbers) {
  let n1 = 1;

  for (i = 0; i < numbers.length; i++) {
    if (typeof numbers[i] === "number") {
      n1 = n1 * Number.parseInt(numbers[i]);
    }
  }

  console.log(n1);
}

//Out Put
multiply(10, 20); // 200
multiply("A", 10, 30); // 300
multiply(100.5, 10, "B"); // 1000
