// Medium
// Topics
// Companies
// You are given a 0-indexed array of integers nums of length n. You are initially positioned at nums[0].

// Each element nums[i] represents the maximum length of a forward jump from index i. In other words, if you are at nums[i], you can jump to any nums[i + j] where:

// 0 <= j <= nums[i] and
// i + j < n
// Return the minimum number of jumps to reach nums[n - 1]. The test cases are generated such that you can reach nums[n - 1].

// Example 1:

// Input: nums = [2,3,1,1,4]
// Output: 2
// Explanation: The minimum number of jumps to reach the last index is 2. Jump 1 step from index 0 to 1, then 3 steps to the last index.
// Example 2:

// Input: nums = [2,3,0,1,4]
// Output: 2

// Constraints:

// 1 <= nums.length <= 104
// 0 <= nums[i] <= 1000

// It's guaranteed that you can reach nums[n - 1].

/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function (nums) {
  let jumps = 0;
  let cur_end = 0;
  let farthest = 0;

  for (let i = 0; i < nums.length - 1; ++i) {
    //nums = [2,3,1,1,4]

    //i == 0;

    // get the longest index value
    // farthest = 0
    // i + nums[i] --> 0 + 2
    // farthest = Math.max(0, 2)
    // farthest = 2;

    // i == 1;

    // get the longest jump value
    // farthest = 2
    // i + nums[i] --> 1 + 3
    // farthest = Math.max(2, 4)
    // farthest = 4;

    farthest = Math.max(farthest, i + nums[i]);

    //i == 0;

    //if (0 === 0) -> true
    //++jumps;
    ////when i == cur_end means the minimum steps required
    //cur_end = farthest

    if (i === cur_end) {
      ++jumps;
      cur_end = farthest;
    }
  }

  return jumps;
};
