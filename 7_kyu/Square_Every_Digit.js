// Welcome. In this kata, you are asked to square every digit of a number.

// For example, if we run 9119 through the function, 811181 will come out, because 92 is 81 and 12 is 1.

// Note: The function accepts an integer and returns an integer


// The idea with this problem was to turn the input number into a string
// which could then be split into individual digits with the string split
// method. The array map methods then squares the digits and the join
// methods returns the concatenation of the squares.

function squareDigits(num) {
    //may the code be with you
    let numArray = num.toString().split('').map(stringInt => {
        return parseInt(stringInt)*parseInt(stringInt);
    });
    return parseInt(numArray.join(''));
};

console.log(squareDigits(78));     // returns: 4964
console.log(squareDigits(32976));  // returns: 94814936
console.log(squareDigits(534));    // returns: 25916

