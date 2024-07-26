/**
 * @param {number[]} cost
 * @return {number}
 */
var minCostClimbingStairs = function(cost) {

    const costLen = cost.length;

    for (let i = 2; i < costLen; i++) {
        cost[i] += Math.min(cost[i-1], cost[i-2])
    }

    return Math.min(cost[costLen - 1], cost[costLen - 2])

    
};