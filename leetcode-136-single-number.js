// Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.

// You must implement a solution with a linear runtime complexity and use only constant extra space.

 

// Example 1:

// Input: nums = [2,2,1]
// Output: 1
// Example 2:

// Input: nums = [4,1,2,1,2]
// Output: 4
// Example 3:

// Input: nums = [1]
// Output: 1
 

// Constraints:

// 1 <= nums.length <= 3 * 104
// -3 * 104 <= nums[i] <= 3 * 104
// Each element in the array appears twice except for one element which appears only once.


// /**
//  * @param {number[]} nums
//  * @return {number}
//  */
//  var singleNumber = function(nums) {
//     for(let num of nums) {
//         if(nums.indexOf(num) === nums.lastIndexOf(num)) return num;
//     }
// };


// /**
//  * @param {number[]} nums
//  * @return {number}
//  */
//  const singleNumber = (nums) => nums.reduce((acc, num) => acc ^ num, 0);


// /**
//  * @param {number[]} nums
//  * @return {number}
//  */
//  var singleNumber = function(nums) {
//     let result = 0;

//     for (const num of nums) {
//         result ^= num;
//     }

//     return result;
// };


// /**
//  * @param {number[]} nums
//  * @return {number}
//  */
//  var singleNumber = function(nums) {
//     return nums[nums.findIndex(num => nums.filter(el => el === num).length === 1)]
// };

var singleNumber = function (nums) {
  nums.sort();

  var index = 0;

  if (nums.length == 1) {
    return nums[0];
  }

  if (index == 0 && nums[index] != nums[index + 1]) {
    return nums[index];
  }

  if (nums[nums.length - 2] != nums[nums.length - 1]) {
    return nums[nums.length - 1];
  }

  while (index < nums.length) {
    if (nums[index] != nums[index + 1] && nums[index] != nums[index - 1]) {
      return nums[index];
    }

    index++;
  }
};
