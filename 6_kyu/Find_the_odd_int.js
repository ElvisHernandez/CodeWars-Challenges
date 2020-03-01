// Given an array, find the integer that appears an odd number of times.
// There will always be only one integer that appears an odd number of times.

// the idea for this problem was to iterate through each element in the 
// array and compare it to every other element while incrementing a counter 
// each time a copy of that element was found. At the end of one iteration, 
// if an element appeared an odd number of times, then that was the odd integer. 
// This solution could probably made faster by deleting elements that appear an 
// even number of times throughout the iterations so as not to count the same 
// elements multiple times 

function findOdd(A) {
    //happy coding!
    for (let i = 0; i < A.length; i++) {
      let counter = 0;
      for (let j = 0; j < A.length; j++) {
        if (A[i] === A[j]) {
          counter++;
        };
      };
      if (counter%2 === 1) {
        return A[i]
      };
    };    
  };

// A =  [ 20, 1, -1, 2, -2, 3, 3, 5, 5, 1, 2, 4, 20, 4, -1, -2, 5 ]
// n =  5
// [ 20, 1, -1, 2, -2, 3, 3, 5, 5, 1, 2, 4, 20, 4, -1, -2, 5 ]

// A =  [ 1, 1, 2, -2, 5, 2, 4, 4, -1, -2, 5 ]
// n =  -1
// [ 1, 1, 2, -2, 5, 2, 4, 4, -1, -2, 5 ]

// A =  [ 20, 1, 1, 2, 2, 3, 3, 5, 5, 4, 20, 4, 5 ]
// n =  5
// [ 20, 1, 1, 2, 2, 3, 3, 5, 5, 4, 20, 4, 5 ]


