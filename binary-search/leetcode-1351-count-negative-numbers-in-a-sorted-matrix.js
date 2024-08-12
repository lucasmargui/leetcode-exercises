
// Given a m x n matrix grid which is sorted in non-increasing order both row-wise and column-wise, return the number of negative numbers in grid.

 

// Example 1:

// Input: grid = [[4,3,2,-1],[3,2,1,-1],[1,1,-1,-2],[-1,-1,-2,-3]]
// Output: 8
// Explanation: There are 8 negatives number in the matrix.
// Example 2:

// Input: grid = [[3,2],[1,0]]
// Output: 0

/**
 * @param {number[][]} grid
 * @return {number}
 */
var countNegatives = function(grid) {

    const rows = grid.length;
    const cols = grid[0].length;

    var negativeCount = 0;

    for (let i = 0; i < rows; i++){

        let left = 0;
        let right = grid[i].length - 1;

        if(grid[i][left] < 0){
            negativeCount += grid[i].length;
            continue;
        }

        while(left <= right){

            var mid = Math.floor((left + right) / 2);

            if(grid[i][mid] < 0){
                right = mid - 1;
            }else{
                left = mid + 1;
            } 

        }
 
        negativeCount += (grid[i].length - 1) - right;

    }

    return negativeCount

    
};