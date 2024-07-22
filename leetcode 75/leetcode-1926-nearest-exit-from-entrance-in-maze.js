// 1926. Nearest Exit from Entrance in Maze
// Attempted
// Medium
// Topics
// Companies
// Hint
// You are given an m x n matrix maze (0-indexed) with empty cells (represented as '.') and walls (represented as '+'). You are also given the entrance of the maze, where entrance = [entrancerow, entrancecol] denotes the row and column of the cell you are initially standing at.

// In one step, you can move one cell up, down, left, or right. You cannot step into a cell with a wall, and you cannot step outside the maze. Your goal is to find the nearest exit from the entrance. An exit is defined as an empty cell that is at the border of the maze. The entrance does not count as an exit.

// Return the number of steps in the shortest path from the entrance to the nearest exit, or -1 if no such path exists.

 

// Example 1:


// Input: maze = [["+","+",".","+"],[".",".",".","+"],["+","+","+","."]], entrance = [1,2]
// Output: 1
// Explanation: There are 3 exits in this maze at [1,0], [0,2], and [2,3].
// Initially, you are at the entrance cell [1,2].

const nearestExit = function (maze, entrance) {
    const rows = maze.length;
    const columns = maze[0].length;

    const queue = [[entrance[0], entrance[1], 0]];
    const visited = new Set();
    visited.add(`${entrance[0]},${entrance[1]}`);

    const directions = [[1, 0], [-1, 0], [0, 1], [0, -1]];

    while (queue.length > 0) {
        const [row, col, steps] = queue.shift();

        if ((row === 0 || row === rows - 1 || col === 0 || col === columns - 1) &&
            !(row === entrance[0] && col === entrance[1])
        ) {
            return steps;
        }

        for (const [dr, dc] of directions) {
            const newRow = row + dr;
            const newCol = col + dc;

            if (newRow >= 0 && newRow < rows && newCol >= 0 && newCol < columns
                && (!visited.has(`${newRow},${newCol}`)) && (maze[newRow][newCol] === '.')) {
                queue.push([newRow, newCol, steps + 1]);
                visited.add(`${newRow},${newCol}`);
            }
        }

    }

    return -1;
};