// Question 1: Array Reversal
//  Write a JavaScript function to reverse an array without using the built-in `reverse()` method. Explain the time complexity of your solution.
const array = [2, 4, 6, 8, 10, 1];

for (let i = array.length - 1; i >= 0; i--) {
  console.log(array[i]);
}






// Question 2: Find the Maximum
//  Given an array of numbers, write a JavaScript function to find the maximum value in the array. Explain whether your solution has a linear or constant time complexity.
// const array2 = [2, 401, 600, 22, 4, 100, 6, 8,2023, 10, 1, 60];

// *** --- USING FUNCTION DECLARATION
// let max = 0;
// function maxValue(arr) {
//   for (let i = 0; i < array2.length; i++) {
//     if (array2[i] > max) {
//       max = array2[i];
//     }
//   }
// }

// maxValue();
// console.log(max);

// *** --- USING FUNCTION EXPRESSION
const maxValue = function (arr) {
  let max = 0;
  for (let i = 0; i < array2.length; i++) {
    if (array2[i] > max) {
      max = array2[i];
    }
  }
  return max;
};
console.log(maxValue(array2));







// Question 3: Palindrome Check
//  Create a JavaScript function that checks if a given string is a palindrome (reads the same forwards and backwards). Describe how you would optimize this function to reduce time complexity.
let word = 'bob';
const checkPalindrome = function (str) {

  // for (let i = 0; i < word.length; i++) {
  //   console.log(word[i]);
  // }

  // for (let i = word.length - 1; i >= 0; i--) {
  //   console.log(word[i]);
  // }
};

console.log(checkPalindrome(word));
