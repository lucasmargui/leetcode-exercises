// Write an algorithm to determine if a number n is happy.

// A happy number is a number defined by the following process:

// Starting with any positive integer, replace the number by the sum of the squares of its digits.
// Repeat the process until the number equals 1 (where it will stay), or it loops endlessly in a cycle which does not include 1.
// Those numbers for which this process ends in 1 are happy.
// Return true if n is a happy number, and false if not.

// Example 1:

// Input: n = 19
// Output: true
// Explanation:
// 12 + 92 = 82
// 82 + 22 = 68
// 62 + 82 = 100
// 12 + 02 + 02 = 1
// Example 2:

// Input: n = 2
// Output: false

// Constraints:

// /**
//  * @param {number} n
//  * @return {boolean}

var isHappy = function (n) {
  const dictionary = {};
  while (n !== 1 && !dictionary[n]) {
    dictionary[n] = true;
    const digits = n.toString().split("").map(Number);
    const squared = digits.map((digit) => digit * digit);
    n = squared.reduce((sum, digit) => sum + digit, 0);
  }

  return n === 1;
};

// /**
//  * @param {number} n
//  * @return {boolean}
//  */
// var isHappy = function (n) {
//   var numbers = new Map();

//   return helper(n, numbers);
// };

// function helper(n, numbers) {
//   var sum = 0;

//   var index = 0;

//   const arr = [...n.toString()].map(Number);

//   while (index < arr.length) {
//     sum += Math.pow(arr[index], 2);

//     index++;
//   }

//   n = sum;

//   if (numbers.get(sum)) {
//     return false;
//   } else {
//     if (n == 1) {
//       return true;
//     }

//     numbers.set(n, true);
//   }

//   return helper(n, numbers);
// }
