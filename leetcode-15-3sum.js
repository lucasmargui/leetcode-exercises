// Medium
// Topics
// Companies
// Hint
// Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.

// Notice that the solution set must not contain duplicate triplets.

 

// Example 1:

// Input: nums = [-1,0,1,2,-1,-4]
// Output: [[-1,-1,2],[-1,0,1]]
// Explanation: 
// nums[0] + nums[1] + nums[2] = (-1) + 0 + 1 = 0.
// nums[1] + nums[2] + nums[4] = 0 + 1 + (-1) = 0.
// nums[0] + nums[3] + nums[4] = (-1) + 2 + (-1) = 0.
// The distinct triplets are [-1,0,1] and [-1,-1,2].
// Notice that the order of the output and the order of the triplets does not matter.
// Example 2:

// Input: nums = [0,1,1]
// Output: []
// Explanation: The only possible triplet does not sum up to 0.
// Example 3:

// Input: nums = [0,0,0]
// Output: [[0,0,0]]
// Explanation: The only possible triplet sums up to 0.
 

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
// var threeSum = function (nums) {
//   nums.sort((a, b) => a - b);
//   const result = [];
//   const n = nums.length;

//   for (let i = 0; i < n; i++) {
//       if (i > 0 && nums[i] === nums[i - 1]) continue;
//       let left = i + 1;
//       let right = n - 1;
//       while (left < right) {
//           let sum = nums[left] + nums[right] + nums[i];
//           if (sum === 0) {
//               result.push([nums[i], nums[left], nums[right]]);

//               while (left < right && nums[left + 1] === nums[left]) left++;
//               while (left < right && nums[right - 1] === nums[right]) right--;
//               left++;
//               right--;
//           } else if (sum < 0) left++;
//           else right--;
//       }
//   }
//   return result;
// };



var threeSum = function(nums) {
  
  nums.sort(function(a, b) {
      return a - b
  })
  
  var map = new Map();
  var left = 0;
  var length = nums.length;
  var right = length - 1;
  var log;
  var arrayTriplets = [];
  var startSearch;
  var finalSearch;
  var middleSearch;
  var logIndex;



  while (left + 1 < right) {
      if(nums[left] == 0 && nums[right] == 0){
          arrayTriplets.push([0,0,0]);
          break;
      }
      while (right > left + 1) {
          
         
          let findSum = (nums[left] + nums[right]) * (-1);        
          log = Math.floor(Math.log2(right - left));
          startSearch = left;
          finalSearch = right;
          middleSearch = Math.floor((startSearch + finalSearch) / 2);
          logIndex = 0;
          while (logIndex <= log){
              if (findSum == nums[middleSearch] && middleSearch != left && middleSearch != right ){
                  let value = [nums[left], nums[middleSearch], nums[right]];
                  let stringfy = JSON.stringify(value);
                  if( !(map.has(stringfy)) ){
                      map.set(stringfy)
                      arrayTriplets.push(value);
                  }
                  
                  break;
               }else if(findSum < nums[middleSearch]){
                   finalSearch = middleSearch;
                   middleSearch = Math.floor((startSearch + finalSearch) / 2);
               }else if (findSum > nums[middleSearch]){
                  startSearch = middleSearch;
                  middleSearch = Math.floor((startSearch + finalSearch) / 2);
               }
               logIndex ++;
          }
          right--;
      }

      right = length - 1;
      left++;
  }

  return arrayTriplets;
};