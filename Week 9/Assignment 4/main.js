// تكليفات JavaScript Bootcamp من الدرس 064 إلى 070

// التكليف 04

function specialMix(...data) {
  let result = 0;

  for (i = 0; i < data.length; i++) {
    if (isNaN(parseInt(data[i]))) {
      true;
    } else {
      result += parseInt(data[i]);
    }
  }
  if (result === 0) {
    return `All is String`;
  }
  return result;
}

console.log(specialMix("10Test", "Testing", "20Cool")); // 30
console.log(specialMix("Testing", "10Testing", "40Cool")); // 50
console.log(specialMix("Test", "Cool", "Test")); // All Is Strings
