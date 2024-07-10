// You are given an integer array nums and an integer k.

// In one operation, you can pick two numbers from the array whose sum equals k and remove them from the array.

// Return the maximum number of operations you can perform on the array.

 

// Example 1:

// Input: nums = [1,2,3,4], k = 5
// Output: 2
// Explanation: Starting with nums = [1,2,3,4]:
// - Remove numbers 1 and 4, then nums = [2,3]
// - Remove numbers 2 and 3, then nums = []
// There are no more pairs that sum up to 5, hence a total of 2 operations.
// Example 2:

// Input: nums = [3,1,3,4,3], k = 6
// Output: 1
// Explanation: Starting with nums = [3,1,3,4,3]:
// - Remove the first two 3's, then nums = [1,4,3]
// There are no more pairs that sum up to 6, hence a total of 1 operation.


// /**
//  * @param {number[]} nums
//  * @param {number} k
//  * @return {number}
//  */
// var maxOperations = function(nums, k) {

//     var left = 0;
//     var right = nums.length - 1;
//     nums.sort((a,b) => a - b)
//     let operations = 0;

//     while(left < right){
//         let sum = nums[left] + nums[right]
//         if(sum > k){
//             right--;
//         }else if(sum < k){
//             left++;
//         }else{
//             operations++;
//             right--;
//             left++;
//         }

//     }
   

//     return operations
    
// };



/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maxOperations = function(nums, k) {

    let count = new Map();
    let operations = 0;
  
    for (const num of nums) {
      let complement = k - num;
  
      if (count.has(complement) && count.get(complement) > 0) {
        operations += 1;
        count.set(complement, count.get(complement) - 1);
      } else {
        count.set(num, (count.get(num) || 0) + 1);
      }
    }
  
    return operations;
  };