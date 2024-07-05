// Given a circular integer array nums of length n, return the maximum possible sum of a non-empty subarray of nums.

// A circular array means the end of the array connects to the beginning of the array. Formally, the next element of nums[i] is nums[(i + 1) % n] and the previous element of nums[i] is nums[(i - 1 + n) % n].

// A subarray may only include each element of the fixed buffer nums at most once. Formally, for a subarray nums[i], nums[i + 1], ..., nums[j], there does not exist i <= k1, k2 <= j with k1 % n == k2 % n.

 

// Example 1:

// Input: nums = [1,-2,3,-2]
// Output: 3
// Explanation: Subarray [3] has maximum sum 3.
// Example 2:

// Input: nums = [5,-3,5]
// Output: 10
// Explanation: Subarray [5,5] has maximum sum 5 + 5 = 10.
// Example 3:

// Input: nums = [-3,-2,-3]
// Output: -2
// Explanation: Subarray [-2] has maximum sum -2.
 

function maxSubarraySumCircular(nums) {
    let totalSum = 0;
    let maxSum = -Infinity;
    let currentMax = 0;
    let minSum = Infinity;
    let currentMin = 0;
    
    for (let num of nums) {
        totalSum += num;

        //Maximum subarray
        currentMax = Math.max(currentMax + num, num);
        maxSum = Math.max(maxSum, currentMax);
        //Minimum subarray
        currentMin = Math.min(currentMin + num, num);
        minSum = Math.min(minSum, currentMin);
    }
    
    if (maxSum < 0) {
        return maxSum;
    }
   
   // If maximum subarray is part of circular sum [5,-3,5] => ..5],-3,[5.. Subarray [5,5] has maximum sum 5 + 5 = 10.
        //When returning the smallest subarray and subtracting from the totalSum, the result will be the sum of the elements of
        //a maximum subarray, but this does not mean that it is the maximum subarray, just that it fits the rule of Kadane's algorithm.
   // If maximum subarray is inside the nums  [1,-2,[3,7],-2] Subarray [3,7] has maximum sum 3 + 7 = 10.
    
    
    return Math.max(maxSum, totalSum - minSum);
}