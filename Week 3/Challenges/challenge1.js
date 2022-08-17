// Challenge 1 Lesson 22

let a = 10;
let b = "20";
let c = 80;

console.log(++a + +b++ + +c++ - +a++); //100
console.log(11 + 20 + 80 - 11); //100

console.log(++a + -b + +c++ - -a++ + +a); //100
console.log(13 + -21 + 81 - -13 + 14); //100

console.log(--c + +b + --a * +b++ - +b * a + --a - +true); //100
console.log(81 + 21 + 13 * 21 - 22 * 13 + 12 - 1); //100

/*
    Solution :-
          [++a] [+] [+b++] [+] [+c++] [-] [+a++]
  - Value: 11    +    20    +    80    -     10

  - Explain :-
    [++a]   Pre increment
    [+]     Addition Operator
    [+b++]  Unary plus, post increment
    [+]     Addition Operator
    [+c++]  Unary plus, post increment
    [-]     Minus operator
    [+a++]  Unary plus, post increment
*/

/*
    Solution :-
            [++a] [+] [-b] [+] [+c++] [-] [-a++] [+] [+a]
   - Value:   11   +  -20   +    80    -   -10    +   10 = 91

    - Explain:-
    [++a]   Pre increment
    [+]     Addition Operator
    [-b]    Unary Negation
    [+]     Adition Operator
    [+c++]  Unary plus, post increment
    [-]     Minus operator
    [-a++]  Negative number, post increment
    [+]     Addition operator
    [+a]    Unary plus
*/

/*
    Solution :-
             [--c] [+] [+b] [+] [--a] [*] [+b++] [-] [+b] [*] [a] [+] [--a] [-] [+true]
    -Value:    81   +   21   +    13   *    21    -   22   *  13   +    12   -    1

    - Explain:-
    [--c]   Pre Decrement
    [+]     Addition Operator
    [+b]    Unary Plus
    [+]     Addition Operator
    [--a]   Pre Decrement
    [*]     Multiply Operator
    [+b++]  Unary Plus Operator, Post Increment
    [-]     Minus operator
    [+b]    Unary Plus
    [*]     Multiply Operator
    [a]     Normal Number
    [+]     Addition Operator
    [--a]   Pre Decrement
    [-]     Minus Operator
    [+true] [+] Unary Plus [true] = 1
*/
