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

// var rob = function(nums) {

//     //If only 1 element, just return it
//     if(nums.length < 2){
//         return nums[0];
//     }

//     //Create array to store the maximum loot at each index
//     var total_loot = new Array(nums.length).fill(0);

//     //Memoize maximum loots at first 2 indexes
//     total_loot[0] = nums[0];
//     total_loot[1] = Math.max(nums[0], nums[1]);

//     //Use them to fill complete array
//     for(let i = 2; i < nums.length; i++){
        
//         //Core logic
//         total_loot[i] = Math.max(total_loot[i-2] + nums[i], total_loot[i - 1])
//     }

//     return total_loot[nums.length - 1]

// }



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



    // var rob = function(nums) {

    //     const numsLen = nums.length;
        
    //     //Creating 2 additional spaces for base cases where initially the thief can decide to rob the house or jump to the next house
        
    //     //First base case
    //     //  When i == numsLen - 1 
    //     //      houserobbed = first house + 0;
    //     //      houseskipped = inexistent house
    //     //      dp[i] = totalsum is total amount from the first house 
    //     //Second base case
    //     //  When i == numslen - 2
    //     //      houserobbed = second house + 0;
    //     //      houseskipped = total sum if robbed the first house
    //     //      dp[i] = compare total sum houserobbed and houseskipped to determine which house will we rob first
    //     const dp = new Array(numsLen + 2).fill(0);
    
    
    //     for(let i = numsLen - 1; i >= 0; i--){
    
    //         let totalSum = 0;
    
    //         let houserobbed = nums[i] + dp[i + 2];
    //         let houseskipped = dp[i + 1];
    
    //         totalSum = Math.max(houserobbed,houseskipped) 
    
    //         dp[i] = totalSum;
    
    //     }
    
    
    
    //     return dp[0]
    
       
    
    
    // }
       


    var rob = function(nums) {

        const numsLen = nums.length;
    
        //Store indexes computed
        const memo = {};
    
    
        //1. Each house presents two possibilities
        //   (a) => the house was robbed so we have to jump to another house that is not adjacent 
        //   (b) => the house was not robbed so we have to jump to next house
        
        //  Each choice generates 2 more choices creating a tree and when we reach the end we generate the base cases
        var dfs = (index) => {
    
        //2. If index was computed return the max totalSum of this index
            if(index in memo){
                return memo[index];
            }
    
        //3. Base case, ending the loop 
            if(index >= numsLen){
                return 0;
            }
     
            let totalSum = 0;
        //4. Two possibilities
            var houserobbed = dfs(index + 2) + nums[index];
            var housepulled = dfs(index + 1);
    
        //5. Return two possibilities and choose the max
            totalSum = Math.max(houserobbed,housepulled);
    
        //6. Store the totalSum in the cache
            memo[index] = totalSum;
    
            return totalSum;
    
        }
    
        return dfs(0);
    
    
    }
    
    