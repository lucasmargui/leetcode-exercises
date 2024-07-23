// 994. Rotting Oranges
// Solved
// Medium
// Topics
// Companies
// You are given an m x n grid where each cell can have one of three values:

// 0 representing an empty cell,
// 1 representing a fresh orange, or
// 2 representing a rotten orange.
// Every minute, any fresh orange that is 4-directionally adjacent to a rotten orange becomes rotten.

// Return the minimum number of minutes that must elapse until no cell has a fresh orange. If this is impossible, return -1.


/**
 * @param {number[][]} grid
 * @return {number}
 */
var orangesRotting = function(grid) {


    const rows = grid.length;
    const cols = grid[0].length;

    if(rows <= 0) return -1;
    if(cols <= 0) return -1;

    var visited = new Set();
    var maxMinutes = 0;

    var queue = [];

    for(let i = 0; i < rows; i++){
        for (let j = 0; j < cols; j++){
            const cell = grid[i][j];
            if(cell === 2){
                queue.push([i,j,0]);
            }
        }
    }


    while(queue.length > 0){

        const size = queue.length;

        for(let i = 0; i < size; i++){
            
            const [rottenRow,rottenCol,rottenMinutes] = queue.shift();

            const key = `${rottenRow},${rottenCol}`;

            if(rottenRow < 0 || rottenRow >= rows || rottenCol < 0 || rottenCol >= cols) continue;
            
            if(grid[rottenRow][rottenCol] == 0) continue;


            if(!(visited.has(key))){

                maxMinutes = Math.max(rottenMinutes,maxMinutes); 

                visited.add(key);

                var rottenLeft = [rottenRow, rottenCol - 1, rottenMinutes + 1];
                var rottenRight = [rottenRow, rottenCol + 1, rottenMinutes + 1];
                var rottenTop = [rottenRow - 1, rottenCol, rottenMinutes + 1];
                var rottenBottom = [rottenRow + 1, rottenCol, rottenMinutes + 1];

                grid[rottenRow][rottenCol] = 2;

                queue.push(rottenLeft,rottenRight,rottenTop,rottenBottom);
            }    

           
        } 

    }

    for(let i = 0; i < rows; i++){
        for (let j = 0; j < cols; j++){
            const cell = grid[i][j];
            if(cell === 1){
               return -1
            }
        }
    }

    return maxMinutes;


    
};