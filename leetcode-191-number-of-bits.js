// 191. Number of 1 Bits
// Solved
// Easy
// Topics
// Companies
// Write a function that takes the binary representation of a positive integer and returns the number of 
// set bits
//  it has (also known as the Hamming weight).

 

// Example 1:

// Input: n = 11

// Output: 3

// Explanation:

// The input binary string 1011 has a total of three set bits.

// Example 2:

// Input: n = 128

// Output: 1

// Explanation:

// The input binary string 10000000 has a total of one set bit.

// Example 3:

// Input: n = 2147483645

// Output: 30

// Explanation:

// The input binary string 1111111111111111111111111111101 has a total of thirty set bits.

 

// Constraints:

// 1 <= n <= 231 - 1
 

// Follow up: If this function is called many times, how would you optimize it?

// Javascript
// /**
//  * @param {number} n
//  * @return {number}
//  */
// var hammingWeight = function(n) {
//     let count = 0;
//     while(n > 0){
//         if((n % 2) === 1) count++;
//         n = Math.floor(n / 2);
//     }
//     return count;
// };


// var hammingWeight = function(n) {
//   if(n < 2) return n;
//   return n%2 + hammingWeight(n>>1);
// };


// /**
//  * @param {number} n
//  * @return {number}
//  */
//  var hammingWeight = function(n) {




//   var arrayN = n.toString(2).split('');

//   const result = arrayN.filter((bit) => bit != '0');
  
//   return result.length;
// };



var hammingWeight = function(n) {
  if(n < 2) return n;
  //Shift number left to right in 1
  //binary >> remove last bit               hammingWeight(n>>1)
  //10011  >> shift 1                       hammingWeight(1001)  
  //1001   >> shift 1                       hammingWeight(100) 
  //100    >> shift 0                       hammingWeight(10) 
  //10     >> shift 0                       hammingWeight(1)
  //1      >> shift 1
  return n%2 + hammingWeight(n>>1);
};
