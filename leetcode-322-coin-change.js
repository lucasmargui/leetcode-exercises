
// You are given an integer array coins representing coins of different denominations and an integer amount representing a total amount of money.

// Return the fewest number of coins that you need to make up that amount. If that amount of money cannot be made up by any combination of the coins, return -1.

// You may assume that you have an infinite number of each kind of coin.

 

// Example 1:

// Input: coins = [1,2,5], amount = 11
// Output: 3
// Explanation: 11 = 5 + 5 + 1
// Example 2:

// Input: coins = [2], amount = 3
// Output: -1
// Example 3:

// Input: coins = [1], amount = 0
// Output: 0
 

// Constraints:

// 1 <= coins.length <= 12
// 1 <= coins[i] <= 231 - 1
// 0 <= amount <= 104
/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */

// var coinChange = function(coins, amount) {
//     const dp = new Array(amount+1).fill(amount+1);
//     dp[0]=0;
//     for (let coin of coins)
//         for (let i=coin; i<=amount; ++i)
//             dp[i]=Math.min(dp[i], dp[i-coin]+1)
//     return dp[amount]!=amount+1 ? dp[amount]: -1;
// };

var coinChange = function(coins, amount) { 
    let result = countCoinChange(coins, amount)
    return result === Infinity ? -1 : result
};

const countCoinChange = (coins, amount, memo={}) => {
    if(amount === 0) return 0
    if(amount < 0) return Infinity
    if(memo[amount] !== undefined) return memo[amount]

    let min = Infinity 

    for(let coin of coins) {
        const restAmount = amount - coin 
        let value = countCoinChange(coins, restAmount, memo) + 1;
        min = Math.min(value, min) 
    
    }
    memo[amount] = min
    return memo[amount] 
}