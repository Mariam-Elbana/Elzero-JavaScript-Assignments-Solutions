// تكليفات JavaScript Bootcamp من الدرس 147 إلى 158

// التكليف 03

class UserSecond {
  #c;
  constructor(username, card) {
    this.u = username;
    this.#c = card;
  }

  cardValidate() {
    let cardString = typeof this.#c === "string" ? this.#c : this.#c.toString();
    let cardReg = /\d{4}/g;
    let result = cardString.match(cardReg);

    result = result
      .map((el, i) => {
        return i < result.length - 1 ? `${el}-` : el;
      })
      .join("");

    return result;
  }

  get showData() {
    return `Hello ${this.u} Your Credit Card Number Is ${this.cardValidate()}`;
  }
}

let userOne = new UserSecond("Osama", "1234-5678-1234-5678");
let userTwo = new UserSecond("Ahmed", "1234567812345678");
let userThree = new UserSecond("Ghareeb", 1234567812345678);

console.log(userOne.showData);
// Hello Osama Your Credit Card Number Is 1234-5678-1234-5678

console.log(userTwo.showData);
// Hello Ahmed Your Credit Card Number Is 1234-5678-1234-5678

console.log(userThree.showData);
// Hello Ghareeb Your Credit Card Number Is 1234-5678-1234-5678

console.log(userOne.c); // Undefined
