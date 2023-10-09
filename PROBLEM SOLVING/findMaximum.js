const numberArray = [12, 45, 67, 99, 23, 9, 18, 56];

function findMaximum(arr) {
  if (arr.length === 0) {
    return undefined; // Return undefined for an empty array
  }

  let max = arr[0]; // Initialize max with the first element

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i]; // Update max if a greater value is found
    }
  }

  return max; // Return the maximum value
}

const maxNumber = findMaximum(numberArray);

console.log(maxNumber);

// Time Complexity Explanation:
/* The time complexity of this solution is O(n), where n is the number of elements in the input array.
This is because we perform a single pass through the input array, copying each element into the new reversed array.
Since we visit each element once, the time complexity is linear with respect to the input size.*/
