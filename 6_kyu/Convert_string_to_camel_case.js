// Complete the method/function so that it converts dash/underscore delimited words 
// into camel casing. The first word within the output should be capitalized only if 
// the original word was capitalized (known as Upper Camel Case, also often referred to 
// as Pascal case).


// The idea for this problem was to split the string into an array 
// of individual words and to first check whether the delimiters are 
// dashes or underscores. If the string is dash delimited and you split 
// with the underscore delimiter then an array with the original string
// will be returned and vice versa for underscore to dash. The array is
// then iterated through with the reduce method while concatenating the individual
// words and uppercasing the first letter of every word after the first.

function toCamelCase(str){
    let strArray;
    if (str.split('-')[0] === str) {
      strArray = str.split('_');
    }
    else {
      strArray = str.split('-');
    };
    let camelString = strArray.reduce((acc,val) => {
      val = val[0].toUpperCase() + val.substring(1);
      return acc + val;
    });
    return camelString;
  } 

// Examples

// toCamelCase("the-stealth-warrior") // returns "theStealthWarrior"
// toCamelCase("The_Stealth_Warrior") // returns "TheStealthWarrior"