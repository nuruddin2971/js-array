// Task-1 & Task-2
const arr = ["ami", "tumi", "she"];
// console.log(arr);
// console.log(arr.length);

// Task-3
const arr0 = arr[0];
const arr2 = arr[2];
// console.log(arr0);
// console.log(arr2);

// Task-4
arr[1] = "tui";
// console.log(arr);

// Task-5
arr.push("tora sobai");
// console.log(arr);

// Task-6
const firstOut = arr.pop();
// console.log(arr);
// console.log(firstOut);

// Task-7
// const numbers = [12, 45, 145, 25, 78, 89, 94];
// console.log(numbers);
// numbers.unshift(500);
// console.log(numbers);

// Task-8
// const numbs = [12, 45, 145, 25, 78, 89, 94];
// console.log(numbs);
// const removeValue = numbs.shift();
// console.log(numbs);
// console.log(removeValue);

// Task-9
const players = ["jamir", "khamir", "namir", "damir"];
const hasItem = players.includes("khamir");
// console.log(hasItem);
// console.log(Array.isArray(players));

// Task-10
// const numbers = [12, 45, 145, 25, 78, 89, 94];
// const position = numbers.indexOf(145);
// console.log("position of 145", position);

// Task-11
// const numbers = [12, 45, 145, 25, 78, 89, 94];
// for (let i = 0; i < numbers.length; i++) {
//   console.log("index value", i);
//   const item = numbers[i];
//   console.log(item);
// }

// Task-12
const numbers = [12, 45, 145, 25, 78, 89, 94];
let i = 0;
while (i < numbers.length) {
  console.log("index value", i);
  const item = numbers[i];
  console.log(item);
  i++;
}
