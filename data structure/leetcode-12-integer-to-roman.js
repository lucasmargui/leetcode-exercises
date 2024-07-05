
// 12. Integer to Roman
// Solved
// Medium
// Topics
// Companies
// Seven different symbols represent Roman numerals with the following values:

// Symbol	Value
// I	1
// V	5
// X	10
// L	50
// C	100
// D	500
// M	1000
// Roman numerals are formed by appending the conversions of decimal place values from highest to lowest. Converting a decimal place value into a Roman numeral has the following rules:

// If the value does not start with 4 or 9, select the symbol of the maximal value that can be subtracted from the input, append that symbol to the result, subtract its value, and convert the remainder to a Roman numeral.
// If the value starts with 4 or 9 use the subtractive form representing one symbol subtracted from the following symbol, for example, 4 is 1 (I) less than 5 (V): IV and 9 is 1 (I) less than 10 (X): IX. Only the following subtractive forms are used: 4 (IV), 9 (IX), 40 (XL), 90 (XC), 400 (CD) and 900 (CM).
// Only powers of 10 (I, X, C, M) can be appended consecutively at most 3 times to represent multiples of 10. You cannot append 5 (V), 50 (L), or 500 (D) multiple times. If you need to append a symbol 4 times use the subtractive form.
// Given an integer, convert it to a Roman numeral.

 

// Example 1:

// Input: num = 3749

// Output: "MMMDCCXLIX"

// Explanation:

// 3000 = MMM as 1000 (M) + 1000 (M) + 1000 (M)
//  700 = DCC as 500 (D) + 100 (C) + 100 (C)
//   40 = XL as 10 (X) less of 50 (L)
//    9 = IX as 1 (I) less of 10 (X)
// Note: 49 is not 1 (I) less of 50 (L) because the conversion is based on decimal places
// Example 2:

// Input: num = 58

// Output: "LVIII"

// Explanation:

// 50 = L
//  8 = VIII
// Example 3:

// Input: num = 1994

// Output: "MCMXCIV"

// Explanation:

// 1000 = M
//  900 = CM
//   90 = XC
//    4 = IV
 
// var intToRoman = function (num) {
//   var m = new Map();
//   var symbol = "";
//   var arrayNumbers = Array.from(String(num), Number);
//   m.set(1, "I");
//   m.set(4, "IV");
//   m.set(5, "V");
//   m.set(9, "IX");
//   m.set(10, "X");
//   m.set(40, "XL");
//   m.set(50, "L");
//   m.set(90, "XC");
//   m.set(100, "C");
//   m.set(400, "CD");
//   m.set(500, "D");
//   m.set(900, "CM");
//   m.set(1000, "M");

//   while (arrayNumbers.length > 0) {
//     let tempSymbol = "";

//     if (arrayNumbers[0] != 0) {
//       for (let [key, value] of m) {
//         let tempval = arrayNumbers[0] * Math.pow(10, arrayNumbers.length - 1);
//         if (tempval >= key) {
//           tempSymbol = value;
//         }
//       }

//       if (arrayNumbers[0] == 4) {
//         arrayNumbers[0] -= 4;
//       } else if (arrayNumbers[0] == 5) {
//         arrayNumbers[0] -= 5;
//       } else if (arrayNumbers[0] == 9) {
//         arrayNumbers[0] -= 9;
//       } else {
//         if (arrayNumbers[0] > 5) {
//           arrayNumbers[0] -= 5;
//         } else {
//           arrayNumbers[0] -= 1;
//         }
//       }
//     } else {
//       arrayNumbers.splice(0, 1);
//     }

//     symbol += tempSymbol;
//   }

//   return symbol;
// };


const roman = {
    M: 1000,
    CM: 900,
    D: 500,
    CD: 400,
    C: 100,
    XC: 90,
    L: 50,
    XL: 40,
    X: 10,
    IX: 9,
    V: 5,
    IV: 4,
    I: 1,
}
var intToRoman = function (num) {
    let result = "";

    for (let i in roman) {
        let count = num/roman[i]; 
        console.log(count)
        if(count>0){
            result += i.repeat(count);
            num = num % roman[i]; 
        }
    }
    return result;
};

