// تكليفات JavaScript Bootcamp من الدرس 115 إلى 122

// التكليف 05

const game = {
  title: "YS",
  developer: "Falcom",
  releases: {
    "Oath In Felghana": ["USA", "Japan"],
    "Ark Of Napishtim": { US: "20 USD", JAP: "10 USD" },
    Origin: "30 USD",
  },
};

// Write Your Destructuring Assignment/s Here
let {
  title: t,
  developer: d,
  releases: { Origin: or },
} = game;

console.log(`My Favourite Games Style Is ${t} Style`);
// My Favourite Games Style Is YS Style

console.log(`And I Love ${d} Games`);
// And I Love Falcom Games

let o = Object.keys(game.releases)[0];
let u = Object.values(game.releases)[0][0];
let j = Object.values(game.releases)[0][1];

console.log(`My Best Release Is ${o} It Released in ${u} & ${j}`);
// My Best Release Is Oath In Felghana It Released in USA & Japan

//---------------------------------------------------

let a = Object.keys(game.releases)[1];

console.log(`Although I Love ${a}`);
// Although I Love Ark Of Napishtim

//---------------------------------------------------

let u_price = Object.values(game.releases)[1].US;

console.log(`${a} Price in USA Is ${u_price}`);
// Ark Of Napishtim Price in USA Is 20 USD

//---------------------------------------------------

let j_price = Object.values(game.releases)[1].JAP;

console.log(`${a} Price in USA Is ${j_price}`);
// Ark Of Napishtim Price in USA Is 10 USD

//---------------------------------------------------

console.log(`Origin Price Is ${or}`);
// Origin Price Is 30 USD

//-------------------------------------------------------------------------------------

// Another Solution

const game = {
  title: "YS",
  developer: "Falcom",
  releases: {
    "Oath In Felghana": ["USA", "Japan"],
    "Ark Of Napishtim": { US: "20 USD", JAP: "10 USD" },
    Origin: "30 USD",
  },
};

let arrayOfKeys = Object.keys(game.releases);
let arrayOfValues = Object.values(game.releases);

// Write Your Destructuring Assignment/s Here
let {
  title: t,
  developer: d,
  releases: { Origin: or },
} = game;

console.log(`My Favourite Games Style Is ${t} Style`);
console.log(`And I Love ${d} Games`);

// Destructuring
let [o, a] = arrayOfKeys;
let [[u, j], { US: u_price, JAP: j_price }] = arrayOfValues;

console.log(`My Best Release Is ${o} It Released in ${u} & ${j}`);
console.log(`Although I Love ${a}`);
console.log(`${a} Price in USA Is ${u_price}`);
console.log(`${a} Price in USA Is ${j_price}`);
console.log(`Origin Price Is ${or}`);
