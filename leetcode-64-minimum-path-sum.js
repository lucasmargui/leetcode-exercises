// Given a m x n grid filled with non-negative numbers, find a path from top left to bottom right, which minimizes the sum of all numbers along its path.

// Note: You can only move either down or right at any point in time.

 

// Example 1:


// Input: grid = [[1,3,1],[1,5,1],[4,2,1]]
// Output: 7
// Explanation: Because the path 1 → 3 → 1 → 1 → 1 minimizes the sum.
// Example 2:

// Input: grid = [[1,2,3],[4,5,6]]
// Output: 12

/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function(grid) {

    let row = grid.length;
    let col = grid[0].length;
    //Ex: [[1,3,1],[1,5,1],[4,2,1]]


    
    //1.Sum each value from the last array in the grid from right to left
        //Last array = [4,2,1]
        //[xxx,xxx,[7,3,1]]
    for(let i = col - 2; i >= 0; i--){
        grid[row - 1][i] = grid[row - 1][i] + grid[row - 1][i + 1];
    }
    //2.Sum each value from the last element in each array from bottom to up
        //Last array = [[x,x,1],[x,x,1],[x,x,1]]
        //[[x,x,3],[x,x,2],[x,x,1]]
     for(let i = row - 2; i >= 0; i--){
        grid[i][col - 1] = grid[i][col - 1] + grid[i + 1][col - 1]; 
     }

   

  
    //3.Compare the sum of the current element with the element below and the element to the right and keep the smallest value
     for(let i = row - 2; i >= 0; i--){

        for(let j = col - 2; j >= 0; j--){

            let current = grid[i][j];
            let bottomAdj = grid[i + 1][j];
            let rightAdj = grid[i][j + 1];
            
            grid[i][j] = Math.min(current + bottomAdj, current + rightAdj);

        }

     }

return grid[0][0]

};