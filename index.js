// EXAMPLE 1 - Count the words in a String using JavaScript

function countWords(str) {
  const arr = str.split(' ');

  return arr.filter(word => word !== '').length;
}

console.log(countWords('bobby hadz com')); // 👉️ 3
console.log(countWords('This   is   a long string')); // 👉️ 5

// ------------------------------------------------------------------

// // EXAMPLE 2 - Count the words in a String using `String.trim()`

// function countWords(str) {
//   return str.trim().split(/\s+/).length;
// }

// console.log(countWords('bobby hadz com')); // 👉️ 3
// console.log(countWords('This   is   a long string')); // 👉️ 5

// ------------------------------------------------------------------

// // EXAMPLE 3 - Count the Spaces in a String in JavaScript

// const str = 'bobby hadz com';

// const spacesCount = str.split(' ').length - 1;
// console.log(spacesCount); // 👉️ 2

// ------------------------------------------------------------------

// // EXAMPLE 4 - Defining a reusable function

// function countSpaces(str) {
//   return str.split(' ').length - 1;
// }

// const str = 'bobby hadz com';

// console.log(countSpaces(str)); // 👉️ 2

// ------------------------------------------------------------------

// // EXAMPLE 5 - Count the Spaces in a String using `String.replaceAll()`

// const str = 'bobby hadz com';

// const spacesCount = str.length - str.replaceAll(' ', '').length;
// console.log(spacesCount); // 👉️ 2

// ------------------------------------------------------------------

// // EXAMPLE 6 - Count the Spaces in a String using `String.match()`

// function countSpaces(str) {
//   return str.match(/\s/g)?.length || 0;
// }

// console.log(countSpaces('bobby hadz com')); // 👉️ 2
// console.log(countSpaces('abc')); // 👉️ 0
// console.log(countSpaces('a bc')); // 👉️ 1
