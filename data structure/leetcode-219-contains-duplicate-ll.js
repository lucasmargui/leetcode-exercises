// 19. Contains Duplicate II
// Solved
// Easy
// Topics
// Companies
// Given an integer array nums and an integer k, return true if there are two distinct indices i and j in the array such that nums[i] == nums[j] and abs(i - j) <= k.

// Example 1:

// Input: nums = [1,2,3,1], k = 3
// Output: true
// Example 2:

// Input: nums = [1,0,1,1], k = 1
// Output: true
// Example 3:

// Input: nums = [1,2,3,1,2,3], k = 2
// Output: false

// Constraints:

// 1 <= nums.length <= 105
// -109 <= nums[i] <= 109
// 0 <= k <= 105

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
// var containsNearbyDuplicate = function (nums, k) {
//   var mapNumbers = new Map();
//   var containsNearbyDuplicateBool = false;

//   nums.forEach((num, idx) => {
//     var getValue = mapNumbers.get(num);
//     if (getValue) {
//       getValue.push(idx);
//       mapNumbers.set(num, getValue);
//     } else {
//       mapNumbers.set(num, [idx]);
//     }
//   });

//   mapNumbers.forEach((arrayIndex) => {
//     let lengthArray = arrayIndex.length;
//     if (lengthArray > 1) {
//       let i = 0;

//       while (i < lengthArray) {
//         let x = i + 1;

//         while (x < lengthArray) {
//           if (arrayIndex[x] - arrayIndex[i] <= k) {
//             containsNearbyDuplicateBool = true;
//           }

//           x++;
//         }
//         i++;
//       }
//     }
//   });

//   return containsNearbyDuplicateBool;
// };

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function (nums, k) {
  let map = new Map();
  let j = 0;
  for (let i = 0; i < nums.length; i++) {
    if (i - j > k) {
      map.delete(nums[j]);
      j++;
    }
    if (map.has(nums[i])) {
      return true;
    }
    map.set(nums[i]);
  }
  return false;
};
