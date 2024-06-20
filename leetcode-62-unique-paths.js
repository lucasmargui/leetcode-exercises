/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function(m, n) {

    //1. Create a grid with a extra row and column for base cases
    var grid = Array.from({length: m + 1}, e => Array(n + 1).fill(0));
    
    //2. Loop through each row starting from bottom to up
    for (let row = m - 1; row >= 0; row--){

    //3. Loop through each col starting from right to left    
        for (let col = n - 1; col >= 0; col--){

            // If we are at the end of the grid, we start with the base case value  
            if(row == m - 1 && col == n - 1){
                grid[row][col] = 1;
            }else{
            // Sum the value in the row below with the value in the column to the right
            // Obs:We added extra column and row for cases where there were no values ​​to the right or below, such as row + 1 > m and col + 1 > n
                grid[row][col] = grid[row + 1][col] + grid[row][col + 1];
            }
            
        }
    }
  
    return grid[0][0]
    
};