// 130. Surrounded Regions
// Solved
// Medium
// Topics
// Companies
// Given an m x n matrix board containing 'X' and 'O', capture all regions that are 4-directionally surrounded by 'X'.

// A region is captured by flipping all 'O's into 'X's in that surrounded region.

 

// Example 1:


// Input: board = [["X","X","X","X"],["X","O","O","X"],["X","X","O","X"],["X","O","X","X"]]
// Output: [["X","X","X","X"],["X","X","X","X"],["X","X","X","X"],["X","O","X","X"]]
// Explanation: Notice that an 'O' should not be flipped if:
// - It is on the border, or
// - It is adjacent to an 'O' that should not be flipped.
// The bottom 'O' is on the border, so it is not flipped.
// The other three 'O' form a surrounded region, so they are flipped.

/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solve = function(board) {

    const m = board.length;
    const n = board[0].length;

    var bfs = (row,col) => {
        if (row < 0 || row >= m || col < 0 || col >= n || board[row][col] !== 'O') {
            return;
        }

        board[row][col] = "W"
   
        let top = bfs(row - 1, col)
        let bottom = bfs(row + 1, col)
        let left = bfs(row, col - 1)
        let right = bfs(row, col + 1)
 

    } 
    
    for(let i = 0; i < m; i++){
        for(let j = 0; j < n; j++){
            if(board[i][j] == "O" && (i==0 || i==board.length-1 || j==0 || j==board[0].length-1)){

                bfs(i,j)
            }

        }
    }


    for(let i = 0; i < m; i++){
        for(let j = 0; j < n; j++){
            if(board[i][j] == "O"){
                board[i][j] =  "X";
            }
            if(board[i][j] == "W"){

                board[i][j] =  "O";

            }
        }
    }

};