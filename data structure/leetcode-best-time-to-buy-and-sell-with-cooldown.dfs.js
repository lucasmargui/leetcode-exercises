// 309. Best Time to Buy and Sell Stock with Cooldown
// Solved
// Medium
// Topics
// Companies
// You are given an array prices where prices[i] is the price of a given stock on the ith day.

// Find the maximum profit you can achieve. You may complete as many transactions as you like (i.e., buy one and sell one share of the stock multiple times) with the following restrictions:

// After you sell your stock, you cannot buy stock on the next day (i.e., cooldown one day).
// Note: You may not engage in multiple transactions simultaneously (i.e., you must sell the stock before you buy again).

 

// Example 1:

// Input: prices = [1,2,3,0,2]
// Output: 3
// Explanation: transactions = [buy, sell, cooldown, buy, sell]
// Example 2:

// Input: prices = [1]
// Output: 0
 

// Constraints:

// 1 <= prices.length <= 5000
// 0 <= prices[i] <= 1000


/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {

    const pricesLen = prices.length;
    
    //Cache     
    const memo = {};
    
    
    var dfs = (index,buying) => {

        //1. Define main base case for the end of recursive
        if(index >= pricesLen){
            return 0;
        }

        //2. Search in cache if this index and state has computed
        const key = `${index},${buying}`
        
        if(key in memo){
            return memo[key];
        }

        //Store maximum value from recursive call
        let total_sum = 0;
        

        //3.There are 2 possible states with 2 options

        ////3.1 Buying a stock => Compare the result of recursion when buying the stock or waiting 1 day to buy returning the max profit
        if(buying){
            let buy = dfs(index + 1, false) - prices[index];
            let cooldown = dfs(index + 1, true);

            total_sum = Math.max(buy, cooldown);
            //store in cache the maximum profit of this index and state
            memo[key] = total_sum;

        ////3.2 Selling a stock => Compare the result of recursion when selling the stock or waiting 1 day to sell returning the max profit     
        }else{
            let sell = dfs(index + 2, true) + prices[index];
            let cooldown = dfs(index + 1, false);

            total_sum = Math.max(sell, cooldown);
            //store in cache the maximum profit of this index and state
            memo[key] = total_sum;
        }
        
        return total_sum

    }

    
    return dfs(0,true);


    
};