
// Given two arrays a and b write a function comp(a, b) (compSame(a, b) in Clojure) that 
// checks whether the two arrays have the "same" elements, with the same multiplicities. "Same" 
// means, here, that the elements in b are the elements in a squared, regardless of the order.

// Remarks
// a or b might be [] (all languages except R, Shell). a or b might be nil or null or None or nothing (except in Haskell, Elixir, C++, Rust, R, Shell, PureScript).

// If a or b are nil (or null or None), the problem doesn't make sense so return false.

// If a or b are empty then the result is self-evident.

// The idea with this problem was to iterate through array 2 and then
// look for the index of the square root of the current element in array 
// 2 within array 1 (if no element is found then -1 is returned). The value
// of the index is pushed to a truth array. If there is no value in the
// truth array equal to -1 then are arrays are the "same". This doesn't 
// account for edge cases but those are straightforward to understand

function comp(array1, array2){
    //your code here
    let truthArray = []
    if (array1 === null || array2 === null) {
        return false;
    } else if (array1.length === 0 &&  array2.length === 0) {
      return true;
    } else if (array1.length === 0 || array2.length === 0) {
      return false;
    }
    for (let i = 0; i < array2.length; i++) {
      let indexOfSame = array1.indexOf(Math.sqrt(array2[i]));
      truthArray.push(indexOfSame);
      array1.splice(indexOfSame,1);
    };
    if (truthArray.every( value => value !== -1)) {
      return true;
    }
    else {
      return false;
    };
  }

//                                                                                      Valid arrays
//   a = [121, 144, 19, 161, 19, 144, 19, 11]  
//   b = [121, 14641, 20736, 361, 25921, 361, 20736, 361]
//   comp(a, b) returns true because in b 121 is the square of 11, 14641 is the square of 121, 20736 the square of 144, 361 the square of 19, 25921 the square of 161, and so on. It gets obvious if we write b's elements in terms of squares:
  
//   a = [121, 144, 19, 161, 19, 144, 19, 11] 
//   b = [11*11, 121*121, 144*144, 19*19, 161*161, 19*19, 144*144, 19*19]
  
//                                                                                       Invalid arrays
//   If we change the first number to something else, comp may not return true anymore:
  
//   a = [121, 144, 19, 161, 19, 144, 19, 11]  
//   b = [132, 14641, 20736, 361, 25921, 361, 20736, 361]
//   comp(a,b) returns false because in b 132 is not the square of any number of a.
  
//   a = [121, 144, 19, 161, 19, 144, 19, 11]  
//   b = [121, 14641, 20736, 36100, 25921, 361, 20736, 361]
//   comp(a,b) returns false because in b 36100 is not the square of any number of a.


