
const array2 = [2, 401, 600, 22, 4, 100, 6, 8, 2023, 10, 1, 60];

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


// Time Complexity Explanation:
/* The time complexity of this solution is O(n), where n is the number of elements in the input array.
This is because we perform a single pass through the input array, copying each element into the new reversed array.
Since we visit each element once, the time complexity is linear with respect to the input size.*/