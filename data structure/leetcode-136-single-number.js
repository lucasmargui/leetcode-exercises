/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {

  // If you analyze the truth table of XOR, also known as "Exclusive Or", 
  // you will see that the output is true only when the inputs are different.

  // input a | input b | 
  //   false | flase   | false
  //   false | true    | true
  //   true  | false   | true
  //   true  | true    | false

  // 4    10 | 0
  // ---------------
  // 1    00 | 1  |    this columns all return zero because   
  // 2    01 | 0  |    duplicates binary 0: 0 ^ 0 => 0
  // 1    00 | 1  |    duplicates binary 1: 1 ^ 1 => 0
  // 2    01 | 0  |    0 ^ 0 => 0
  // ---------------


  // results in binary comparation for unique number for 0

   // Initialize the unique number...
   let uniqNum = 0;
   // TRaverse all elements through the loop...
   for (let idx = 0; idx < nums.length; idx++) {
       // Concept of XOR...
       uniqNum = uniqNum ^ nums[idx];
   } return uniqNum;       // Return the unique number...
};