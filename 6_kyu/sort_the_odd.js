// You have an array of numbers.
// Your task is to sort ascending odd numbers but even numbers must be on their places.

// Zero isn't an odd number and you don't need to move it. If you have an empty array, you need to return it.

// Example

// sort_array([5, 3, 2, 8, 1, 4]) == [1, 3, 2, 8, 5, 4]
// sort_array([5, 3, 2, 8, 1, 4]) == [1, 3, 2, 8, 5, 4]

// Explanation

function sortArray(array) {
  // Return a sorted array.
  let indexObj = {};
  let oddNumArray = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 === 1) {
      indexObj[i] = array[i];
      oddNumArray.push(array[i]);
    }
  }
  let index = 0;
  for (const x in indexObj) {
    array[x] = oddNumArray.sort((a, b) => a - b)[index];
    index++;
  }
  return array;
}
