// 216. Combination Sum III
// Solved
// Medium
// Topics
// Companies
// Find all valid combinations of k numbers that sum up to n such that the following conditions are true:

// Only numbers 1 through 9 are used.
// Each number is used at most once.
// Return a list of all possible valid combinations. The list must not contain the same combination twice, and the combinations may be returned in any order.

 

// Example 1:

// Input: k = 3, n = 7
// Output: [[1,2,4]]
// Explanation:
// 1 + 2 + 4 = 7
// There are no other valid combinations.
// Example 2:

// Input: k = 3, n = 9
// Output: [[1,2,6],[1,3,5],[2,3,4]]
// Explanation:
// 1 + 2 + 6 = 9
// 1 + 3 + 5 = 9
// 2 + 3 + 4 = 9
// There are no other valid combinations.


/**
 * @param {number} k
 * @param {number} n
 * @return {number[][]}
 */
var combinationSum3 = function(k, n) {

    let smallest = Array(k).fill().map((_, i) => i + 1).reduce((accum, number) => accum + number);
    
    if(smallest > n ) return [];

    const result = [];
    const backtrack = (curr, start, sum) => {
        if (curr.length === k) {
            if (sum === n) {
                result.push([...curr]);
            }
            return;
        }
        for (let i = start;i <= 9;i++) {
            curr.push(i);
            sum += i;
            backtrack(curr, i + 1, sum);
            curr.pop()
            sum -= i;
        }
    }
    backtrack([], 1, 0);
    return result;
};