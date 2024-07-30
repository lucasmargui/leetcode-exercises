/**
 * @param {number[]} prices
 * @param {number} fee
 * @return {number}
 */


var maxProfit = function(prices, fee, memo = {}) {

    var dfs = (index, buying) => {

        const key = `${index},${buying}`;

        if(index == prices.length){
            return 0;
        }
        if(key in memo){
            return memo[key]
        }
        if(buying){
             let ifBuying = -prices[index] + dfs(index + 1, false);
             let ifBuyingNextDays = dfs(index + 1, true);
             memo[key] = Math.max(ifBuying,ifBuyingNextDays);
             return memo[key] 
        }else{
             let ifSelling = +prices[index] - fee  + dfs(index + 1, true, );
             let ifSellingNextDays = dfs(index + 1, false);
             memo[key] = Math.max(ifSelling,ifSellingNextDays)
             return memo[key] 
        } 

    }

    const profit = dfs(0, true, 0)
    
    return profit;
};