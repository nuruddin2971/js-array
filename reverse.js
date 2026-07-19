const numbers = [87, 54, 12, 63, 41, 7, 51];

const reversed = numbers.reverse();
// console.log(reversed);

const friends = ["abul", "babul", "cabul", "dabul"];
const afterReverse = [];
for (const friend of friends) {
  console.log(friend);
  afterReverse.unshift(friend);
  console.log(afterReverse);
}
