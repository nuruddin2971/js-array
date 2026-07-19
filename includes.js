const numbers = [12, 98, 77, 6, 23];
const numbers2 = [2, 3];
const players = ["abul", "babul", "cabul", "dabul", "kabul"];

const hasItem = numbers.includes(60);
// console.log(hasItem);

if (players.includes("babul")) {
  console.log("babul is playing");
}

const allNumbers = numbers.concat(numbers2);
// console.log(allNumbers);

const numbs = [1, 3, 5, 2, 8];
const joined = numbs.join(" ");
console.log(joined);

const position = numbs.indexOf(33);
console.log("position of 5", position);

console.log(Array.isArray(45));


