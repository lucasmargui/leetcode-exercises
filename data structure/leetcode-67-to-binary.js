// Given two binary strings a and b, return their sum as a binary string.

 

// Example 1:

// Input: a = "11", b = "1"
// Output: "100"
// Example 2:

// Input: a = "1010", b = "1011"
// Output: "10101"


/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
//  var addBinary = function(a, b) {
//     let sum = BigInt(`0b${a}`) + BigInt(`0b${b}`);
//     return sum.toString(2);
// };


// /**
//  * @param {string} a
//  * @param {string} b
//  * @return {string}
//  */
//  var addBinary = function(a, b) {
//     let result = '';
//     let carry = 0;
//     let i = a.length - 1;
//     let j = b.length - 1;

//     // Iterate over both strings from right to left
//     while (i >= 0 || j >= 0) {
//         // Convert characters to integers
//         const digitA = i >= 0 ? parseInt(a[i]) : 0;
//         const digitB = j >= 0 ? parseInt(b[j]) : 0;

//         // Calculate the sum of the current digits and the carry
//         const sum = digitA + digitB + carry;

//         // Update the carry for the next iteration
//         carry = Math.floor(sum / 2);

//         // Update the result string with the current sum
//         result = (sum % 2) + result;

//         // Move to the next digits in both strings
//         i--;
//         j--;
//     }

//     // If there's still a carry after iterating over both strings, add it to the result
//     if (carry > 0) {
//         result = carry + result;
//     }

//     return result;
// };


var addBinary = function(a, b) {


    let ans = '';
    let carry = 0;
    let i = a.length - 1;
    let j = b.length - 1;

    while (i >= 0 || j >= 0 || carry) {
      if (i >= 0){
        carry += parseInt(a[i--]);
        
      }
      if (j >= 0){
         carry += parseInt(b[j--]);
   
      }

      ans += carry % 2;
      carry = Math.floor(carry / 2);
    }

 
   
   return ans.split('').reverse().join('');
    
};