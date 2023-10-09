const originalArray = ["Cholatrek", "FrontEnd", "BackEnd", "ProductDesign", "DataScience"];

function reverseArray(arr) {
  const reversed = [];

  // Iterate through the input array in reverse order
  for (let i = arr.length - 1; i >= 0; i--) {
    reversed.push(arr[i]); // Add each element to the new array in reverse order
  }

  return reversed; // Return the reversed array
}

const reversedArray = reverseArray(originalArray);

console.log(reversedArray);


// Time Complexity Explanation:
/* The time complexity of this solution is O(n), where n is the number of elements in the input array.
This is because we perform a single pass through the input array, copying each element into the new reversed array.
Since we visit each element once, the time complexity is linear with respect to the input size.*/
