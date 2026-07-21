// Task-1 & Task-2
// const arr = ["ami", "tumi", "she"];
// console.log(arr);
// console.log(arr.length);

// Task-3
// const arr0 = arr[0];
// const arr2 = arr[2];
// console.log(arr0);
// console.log(arr2);

// Task-4
// arr[1] = "tui";
// console.log(arr);

// Task-5
// arr.push("tora sobai");
// console.log(arr);

// Task-6
// const firstOut = arr.pop();
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
// const players = ["jamir", "khamir", "namir", "damir"];
// const hasItem = players.includes("khamir");
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
// const numbers = [12, 45, 145, 25, 78, 89, 94];
// let i = 0;
// while (i < numbers.length) {
//   console.log("index value", i);
//   const item = numbers[i];
//   console.log(item);
//   i++;
// }

// --------------------------------------------------

// Task-1
// const fruits1 = ["mango"];
// const fruits2 = ["jackfruit"];
// const allFruits = fruits1.concat(fruits2);
// console.log(allFruits);

// Task-2
// const numbers = [12, 45, 145, 25, 78, 89, 94];
// const slice = numbers.slice(2, 6);
// console.log(slice);
// console.log(numbers);

// Task-3
// const sentences = ["word", "word", "word"];
// const singleSentence = sentences.join(" ");
// console.log(singleSentence);

// Task-4
// const fruits = ["mango"];
// const number = 25;
// console.log(Array.isArray(fruits));
// console.log(Array.isArray(number));

// Task-5
// const numbers = [87, 54, 12, 63, 41, 7, 51];
// const reversed = numbers.reverse();
// console.log(reversed);

// Task-6
// const fruits = ["mango", "jackfruit", "guava", "papaya", "banana"];
// const sorted = fruits.sort();
// console.log(sorted);

// Task-7
// const ascendingNumber = [3, 5, 7, 1, 2, 9, 4, 6, 8, 0];
// const sorted = ascendingNumber.sort();
// console.log(sorted);

// Task-8
// const numbers = [87, 54, 1, 2, 9, 12, 63, 41, 7, 51, 3, 5, 7, 4, 6, 8, 0, 12];
// for (let i = 0; i < numbers.length; i++) {
//   if (numbers[i] > 10) {
//     console.log(numbers[i]);
//   }
// }

// Task-9
// const numbers = [87, 54, 1, 2, 9, 12, 63, 41, 7, 51, 3, 5, 7, 4, 6, 8, 0];

// let total = 0;

// for (let i = 0; i < numbers.length; i++) {
// total = total + numbers[i]
// }

// console.log("Total result ", total)

// ------------------------------------------------

// Task-1
// const numbers = [87, 87, 9, 9, 87, 1, 63, 63, 12, 51, 3, 9, 7, 4, 6, 54, 0];
// const uniqueNumber = [];

// for (let i = 0; i < numbers.length; i++) {
//   if (uniqueNumber.includes(numbers[i])) {
//     continue;
//   }
//   uniqueNumber.push(numbers[i]);
// }
// console.log(uniqueNumber);

// Task-2
// const fruits = ["mango", "jackfruit", 12, 51];
// const numbers = [];
// const strings = [];

// for (let i = 0; i < fruits.length; i++) {
//   if (typeof fruits[i] === "number") {
//     numbers.push(fruits[i]);
//   } else {
//     strings.push(fruits[i]);
//   }
// }
// console.log(strings);
// console.log(numbers);

// Task-3
// const numbers = [87, 54, 1, 2, 9, 12, 63, 41, 7, 51, 3, 5, 7, 4, 6, 8];
// let largest = numbers[0];
// let smallest = numbers[0];
// for (let i = 0; i < numbers.length; i++) {
//   if (largest < numbers[i]) {
//     // largest.push(numbers[i]);
//     largest = numbers[i];
//   } else if (smallest > numbers[i]) {
//     smallest = numbers[i];
//   }
// }
// console.log(largest);
// console.log(smallest);

// eta otirikto advance. 
// Task-4
// const arr = [1, [2, 3], [4, [5, 6]]];
// const arr = [1, [2, 3]];
// const result = [];

// for (let i = 0; i < arr.length; i++) {
//   if (Array.isArray(arr[i])) {
//     for (let j = 0; j < arr[i].length; j++) {
//       if (Array.isArray(arr[i][j])) {
//         for (let k = 0; k < arr[i].length; k++) {
//           result.push(arr[i][j][k]);
//         }
//       } else {
//         result.push(arr[i][j]);
//       }
//     }
//   } else {
//     result.push(arr[i]);
//   }
// }
// const result1 = arr.flat();

// console.log(result1.flat());
