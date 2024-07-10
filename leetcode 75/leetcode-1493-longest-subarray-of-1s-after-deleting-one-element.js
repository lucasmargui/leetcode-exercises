// 1493. Longest Subarray of 1's After Deleting One Element
// Solved
// Medium
// Topics
// Companies
// Hint
// Given a binary array nums, you should delete one element from it.

// Return the size of the longest non-empty subarray containing only 1's in the resulting array. Return 0 if there is no such subarray.

 

// Example 1:

// Input: nums = [1,1,0,1]
// Output: 3
// Explanation: After deleting the number in position 2, [1,1,1] contains 3 numbers with value of 1's.
// Example 2:

// Input: nums = [0,1,1,1,0,1,1,0,1]
// Output: 5
// Explanation: After deleting the number in position 4, [0,1,1,1,1,1,0,1] longest subarray with value of 1's is [1,1,1,1,1].
// Example 3:

// Input: nums = [1,1,1]
// Output: 2
// Explanation: You must delete one element.


/**
 * @param {number[]} nums
 * @return {number}
 */
var longestSubarray = function(nums) {

    var leftWindow  = 0;
    const k = 1;
 
    var numZeroes = 0;
    var sumTotal = -Infinity;

    for(let rightWindow = 0; rightWindow < nums.length; rightWindow++){

        if(nums[rightWindow] == 0){
            numZeroes++;
        }

        while(numZeroes > k){
            if(nums[leftWindow] == 0){
                numZeroes--;
            }
            leftWindow++;
        }

        let sum = rightWindow - leftWindow;

        sumTotal = Math.max(sumTotal, sum)

    }

    return sumTotal;
    
};