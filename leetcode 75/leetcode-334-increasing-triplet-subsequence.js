// Given an integer array nums, return true if there exists a triple of indices (i, j, k) such that i < j < k and nums[i] < nums[j] < nums[k]. If no such indices exists, return false.

 

// Example 1:

// Input: nums = [1,2,3,4,5]
// Output: true
// Explanation: Any triplet where i < j < k is valid.
// Example 2:

// Input: nums = [5,4,3,2,1]
// Output: false
// Explanation: No triplet exists.
// Example 3:

// Input: nums = [2,1,5,0,4,6]
// Output: true
// Explanation: The triplet (3, 4, 5) is valid because nums[3] == 0 < nums[4] == 4 < nums[5] == 6.



/**
 * @param {number[]} nums
 * @return {boolean}
 */
// var increasingTriplet = function(nums) {


//    const numsLen = nums.length;

//    var dp = new Array(numsLen).fill(1);
 
    

//    for (let i = numsLen - 2; i >= 0; i-- ){

//         for(let x = i + 1; x < numsLen; x++){
              
//                 if(nums[i] < nums[x]){
//                     dp[i] = Math.max(dp[i], 1 + dp[x])
//                     if(dp[i] >= 3){
//                         return true;
//                     }
//                 }

//         }

//    }

//   return false;
    
// };


var increasingTriplet = function(nums) {
    let first = Infinity;
    let second = Infinity;

    for (let num of nums) {
        if (num <= first) {
            first = num;  // Atualiza o menor número
        } else if (num <= second) {
            second = num; // Atualiza o segundo menor número
        } else {
            // Se chegarmos aqui, significa que encontramos um número maior que first e second
            return true;
        }
    }

    return false;
};