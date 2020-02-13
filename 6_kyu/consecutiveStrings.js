
// You are given an array strarr of strings and an integer k. Your task is to 
// return the first longest string consisting of k consecutive strings taken in the array.

// The idea for this problem was to push the length of every k
// consecutive group of strings into an array (strLengthArray) 
// and then to sort that array and compare the last value of the
// sorted array (the max) with every value of the originial until 
// the first match is found

function longestConsec(strarr, k) {
    // your code
    let n = strarr.length;
    let strLengthArray = [];
    if (n === 0 || k > n || k <= 0) {
      return "";
    };
    for (let i = 0; i < n-k+1; i++) {
      strLengthArray.push(strarr.slice(i,i+k).join('').length);
    };
    for (let i = 0; i < n-k+1; i++) {
      if (strLengthArray.slice().sort((a,b) => a-b)[n-k] === strLengthArray[i]) {
        return strarr.slice(i,i+k).join('');
      };
    };
  };


  // Example:
// longest_consec(["zone", "abigail", "theta", "form", "libe", "zas", "theta", "abigail"], 2) --> "abigailtheta"

// n being the length of the string array, if n = 0 or k > n or k <= 0 return "".

// Note
// consecutive strings : follow one after another without an interruption