
// 289. Game of Life
// Solved
// Medium
// Topics
// Companies
// According to Wikipedia's article: "The Game of Life, also known simply as Life, is a cellular automaton devised by the British mathematician John Horton Conway in 1970."

// The board is made up of an m x n grid of cells, where each cell has an initial state: live (represented by a 1) or dead (represented by a 0). Each cell interacts with its eight neighbors (horizontal, vertical, diagonal) using the following four rules (taken from the above Wikipedia article):

// Any live cell with fewer than two live neighbors dies as if caused by under-population.
// Any live cell with two or three live neighbors lives on to the next generation.
// Any live cell with more than three live neighbors dies, as if by over-population.
// Any dead cell with exactly three live neighbors becomes a live cell, as if by reproduction.
// The next state is created by applying the above rules simultaneously to every cell in the current state, where births and deaths occur simultaneously. Given the current state of the m x n grid board, return the next state.

 

/**
 * @param {number[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */

const gameOfLife = function(board) {
    const countLiveNeighbors = (row, col) => {
        const directions = [[1, 0], [0, 1], [-1, 0], [0, -1], [1, 1], [-1, -1], [1, -1], [-1, 1]];
        let count = 0;

        //Iterate over each direction
        for (const [dr, dc] of directions) {
            //Calculate new row and column indices
            const r = row + dr;
            const c = col + dc;

            //Check if the new indices are within the bounds of the board and if the cell is alive.
            //We use Math.abs because we want to accpet both 1 and -1 as indicators of a live cell.
            //Later, we mark a live cell with -1 if it's dead in the next state. However, when we calculate
            //live neighbors, we want to consider the original state. Therefore, we treat it as a live cell.
            if (r >= 0 && r < board.length && c >= 0 && c < board[0].length && Math.abs(board[r][c]) === 1) {
                count++;
            }
        }

        return count;
    }

    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[0].length; j++) {
            //Count live neighbors for the current cell
            const neighbors = countLiveNeighbors(i, j);

            //Apply the rules of the Game of Life to update the cell's next state
            if (board[i][j] === 1) {
                if (neighbors < 2 || neighbors > 3) {
                    //Cell dies due to underpopulation or overpopulation
                    board[i][j] = -1;
                }
            } else {
                if (neighbors === 3) {
                    //Cell becomes alive due to reproduction
                    board[i][j] = 2;
                }
            }
        }
    }

    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[0].length; j++) {
            //Update dead cells
            if (board[i][j] === -1) {
                board[i][j] = 0;
            } else if (board[i][j] === 2) {
                //Update live cells
                board[i][j] = 1;
            }
        }
    }
};