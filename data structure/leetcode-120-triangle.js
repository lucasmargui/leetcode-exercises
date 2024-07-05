// 120. Triangle
// Solved
// Medium
// Topics
// Companies
// Given a triangle array, return the minimum path sum from top to bottom.

// For each step, you may move to an adjacent number of the row below. More formally, if you are on index i on the current row, you may move to either index i or index i + 1 on the next row.

 

// Example 1:

// Input: triangle = [[2],[3,4],[6,5,7],[4,1,8,3]]
// Output: 11
// Explanation: The triangle looks like:
//    2
//   3 4
//  6 5 7
// 4 1 8 3
// The minimum path sum from top to bottom is 2 + 3 + 5 + 1 = 11 (underlined above).
// Example 2:

// Input: triangle = [[-10]]
// Output: -10

/**
 * @param {number[][]} triangle
 * @return {number}
 */


var minimumTotal = function(triangle) {

    for (let i = triangle.length - 2; i >= 0; i--){
        for (let j = 0; j < triangle[i].length; j++){
            let leftAdj = triangle[i + 1][j];
            let rightAdj = triangle[i + 1][j + 1];
            let current = triangle[i][j];
            triangle[i][j] = Math.min(current + leftAdj,current + rightAdj) 
        }
    }
    
    return triangle[0][0]
    
    }