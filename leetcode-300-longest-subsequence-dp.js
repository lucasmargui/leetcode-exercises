
// Given an integer array nums, return the length of the longest strictly increasing 
// subsequence
// .

 

// Example 1:

// Input: nums = [10,9,2,5,3,7,101,18]
// Output: 4
// Explanation: The longest increasing subsequence is [2,3,7,101], therefore the length is 4.
// Example 2:

// Input: nums = [0,1,0,3,2,3]
// Output: 4
// Example 3:

// Input: nums = [7,7,7,7,7,7,7]
// Output: 1
 

// var lengthOfLIS = function(nums) {
//     var recursive = (curr, prev) => {

//        if(curr >= nums.length){
//             return 0;
//        }
//         let include = 0;
//         if(prev == -1 || nums[curr] > nums[prev]){
//             include = 1 + recursive(curr + 1, curr);
//         }

//         let exclude = recursive(curr + 1, prev);
//         let ans = Math.max(include, exclude);
//         return ans;

//     }

//     return recursive(0,-1)
    
// };


var lengthOfLIS = function(nums) {

    let LIS = new Array(nums.length).fill(1);
  
      for (let i = nums.length - 1; i >= 0; i--) {
          for (let j = i + 1; j < nums.length; j++) {
              if (nums[i] < nums[j]) {
                  LIS[i] = Math.max(LIS[i], 1 + LIS[j]);
              }
          }
      }
  
      return Math.max(...LIS);
  }
  