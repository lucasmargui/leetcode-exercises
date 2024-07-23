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
    const cols = maze[0].length;

    const startRow = entrance[0];
    const startCol = entrance[1];

    var visited = new Set();
    

    var queue = [[startRow, startCol, 0]];


    while(queue.length > 0){

        //1. Get position in queue
        const [currRow, currCol, currSteps] = queue.shift();

        //2. Key to check if it has already been visited
        const key = `${currRow},${currCol}`;

        //3. Checks if the position is outside the bounds of the array
        if(currRow < 0 || currRow >= rows || currCol < 0 || currCol >= cols ){
            continue;
        }
        //4. Check if you found a wall
        if(maze[currRow][currCol] == "+"){
            continue;
        }
        //5. If you have reached the limits of the array and if it is different from your initial position, 
        //    it means that you have reached an exit, as we are working with a queue, 
        //    the first exit found is the one with the lowest number of steps.
        if( (currRow == 0 || currRow == rows - 1 || currCol == 0 || currCol == cols - 1) && !(currRow == startRow && currCol == startCol) ){
            return currSteps;
        }

        //6. If none of the above conditions are met. 
        //   it means that we are inside the array and we must add more positions to the left, right, top and bottom
        if( !(visited.has(key)) ){

            visited.add(key);

            const leftPosition = [currRow, currCol - 1, currSteps + 1];
            const rightPosition = [currRow, currCol + 1, currSteps + 1];
            const topPosition = [currRow - 1, currCol, currSteps + 1]; 
            const bottomPosition = [currRow + 1, currCol, currSteps + 1];

            queue.push(leftPosition,rightPosition,topPosition,bottomPosition);

        }

    }


    return -1;

};