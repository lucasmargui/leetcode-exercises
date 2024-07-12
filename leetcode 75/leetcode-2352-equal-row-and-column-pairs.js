// Given a 0-indexed n x n integer matrix grid, return the number of pairs (ri, cj) such that row ri and column cj are equal.

// A row and column pair is considered equal if they contain the same elements in the same order (i.e., an equal array).

 

// Example 1:


// Input: grid = [[3,2,1],[1,7,6],[2,7,7]]
// Output: 1
// Explanation: There is 1 equal row and column pair:
// - (Row 2, Column 1): [2,7,7]

var equalPairs = function(grid) {

    const mep = new Map();
    let count = 0;
    for(let row = 0 ; row < grid.length ; row ++){
        const currentRow = JSON.stringify(grid[row])
        mep.set(currentRow, 1 + (mep.get(currentRow) || 0 ))
    }

    for(let col = 0 ; col < grid.length ; col ++){
        
        const currentCol = JSON.stringify(grid.map(row => row[col]))
        count += (mep.get(currentCol) || 0)
    }
    return count;

    
};