// You are a professional robber planning to rob houses along a street. Each house has a certain amount of money stashed, the only constraint stopping you from robbing each of them is that adjacent houses have security systems connected and it will automatically contact the police if two adjacent houses were broken into on the same night.

// Given an integer array nums representing the amount of money of each house, return the maximum amount of money you can rob tonight without alerting the police.

 

// Example 1:

// Input: nums = [1,2,3,1]
// Output: 4
// Explanation: Rob house 1 (money = 1) and then rob house 3 (money = 3).
// Total amount you can rob = 1 + 3 = 4.
// Example 2:

// Input: nums = [2,7,9,3,1]
// Output: 12
// Explanation: Rob house 1 (money = 2), rob house 3 (money = 9) and rob house 5 (money = 1).
// Total amount you can rob = 2 + 9 + 1 = 12.
 


// O(n) time | O(n) space
// var rob = function(nums, idx = 0, memo = {}) {
    
//     if (idx in memo) {
//         return memo[idx];
//     }
    
//     if (idx >= nums.length) {
//         return 0;
//     }
    
//     const sumIfSkipped = rob(nums, idx + 1, memo);
 
//     const sumIfRobbed = nums[idx] + rob(nums, idx + 2, memo);

//     return memo[idx] = Math.max(sumIfSkipped, sumIfRobbed);
// };

var rob = function(nums) {

    //If only 1 element, just return it
    if(nums.length < 2){
        return nums[0];
    }

    //Create array to store the maximum loot at each index
    var total_loot = new Array(nums.length).fill(0);

    //Memoize maximum loots at first 2 indexes
    total_loot[0] = nums[0];
    total_loot[1] = Math.max(nums[0], nums[1]);

    //Use them to fill complete array
    for(let i = 2; i < nums.length; i++){
        
        //Core logic
        total_loot[i] = Math.max(total_loot[i-2] + nums[i], total_loot[i - 1])
    }

    return total_loot[nums.length - 1]

}



//houses = [2,7,3,1,4,2,1,8]

//total loot at house (n) = max(total_loot[n-2] + houses[n], total_loot[n-1])

//i = 2
    //total_loot = [2,7]
    //total_loot[i] = max(total_loot[i-2] + houses[i], total_loot[i-1])
    //total_loot[i] = max(2 + 3, 7)
    //total_loot = [2,7,7] 

//i = 3
    //total_loot = [2,7,7]
    //total_loot[i] = max(total_loot[i-2] + houses[i], total_loot[i-1])
    //total_loot[i] = max(7 + 1, 7)
    //total_loot = [2,7,7,8] 
//i = 4
    //total_loot = [2,7,7,8]
    //total_loot[i] = max(total_loot[i-2] + houses[i], total_loot[i-1])
    //total_loot[i] = max(11, 7)
    //total_loot = [2,7,7,8,11]
