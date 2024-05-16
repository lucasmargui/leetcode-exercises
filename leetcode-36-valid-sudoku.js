
// 36. Valid Sudoku
// Solved
// Medium
// Topics
// Companies
// Determine if a 9 x 9 Sudoku board is valid. Only the filled cells need to be validated according to the following rules:

// Each row must contain the digits 1-9 without repetition.
// Each column must contain the digits 1-9 without repetition.
// Each of the nine 3 x 3 sub-boxes of the grid must contain the digits 1-9 without repetition.
// Note:

// A Sudoku board (partially filled) could be valid but is not necessarily solvable.
// Only the filled cells need to be validated according to the mentioned rules.
 

// Example 1:


// Input: board = 
// [["5","3",".",".","7",".",".",".","."]
// ,["6",".",".","1","9","5",".",".","."]
// ,[".","9","8",".",".",".",".","6","."]
// ,["8",".",".",".","6",".",".",".","3"]
// ,["4",".",".","8",".","3",".",".","1"]
// ,["7",".",".",".","2",".",".",".","6"]
// ,[".","6",".",".",".",".","2","8","."]
// ,[".",".",".","4","1","9",".",".","5"]
// ,[".",".",".",".","8",".",".","7","9"]]
// Output: true
// Example 2:

// Input: board = 
// [["8","3",".",".","7",".",".",".","."]
// ,["6",".",".","1","9","5",".",".","."]
// ,[".","9","8",".",".",".",".","6","."]
// ,["8",".",".",".","6",".",".",".","3"]
// ,["4",".",".","8",".","3",".",".","1"]
// ,["7",".",".",".","2",".",".",".","6"]
// ,[".","6",".",".",".",".","2","8","."]
// ,[".",".",".","4","1","9",".",".","5"]
// ,[".",".",".",".","8",".",".","7","9"]]
// Output: false
// Explanation: Same as Example 1, except with the 5 in the top left corner being modified to 8. Since there are two 8's in the top left 3x3 sub-box, it is invalid.

// /**
//  * @param {character[][]} board
//  * @return {boolean}
//  */


/**
 * @param {character[][]} board
 * @return {boolean}
 */
// var isValidSudoku = function(board) {
//     const rows = new Array(81).fill(false);
//     const cols = new Array(81).fill(false);
//     const squares = new Array(81).fill(false);

//     for (i = 0; i < 9; i++) {
//         for (j = 0; j < 9; j++) {
//             const val = board[i][j];
//             if (val == ".") continue;

//             const ii = 9*i+val-1
//             const jj = 9*j+val-1
//             const kk = (i - i%3 + Math.floor(j/3))*9 + val-1
//             if (rows[ii] ||
//                 cols[jj] ||
//                 squares[kk]
//             ) {
//                 return false
//             }
            
//             rows[ii] = true;
//             cols[jj] = true;
//             squares[kk] = true;
//         }
//     }

//     return true
// };


var isValidSudoku = function (board) {

    var map = new Map();
    var validSudoku = true;
    var row = 0;
    var column = 0;
 
 
  //FOR EACH COLUMN
  for(let i = 0; i < 9; i++){
         map = new Map();
         for(let j = 0; j < 9; j++){
             if(board[j][i] != "."){
                  if(map.has(board[j][i])){
                     validSudoku = false;
                  }else{
                     map.set(board[j][i])
                  }
             }
         }
    }
 
  //FOR EACH ROW
    for(let i = 0; i < 9; i++){
         map = new Map();
         for(let j = 0; j < 9; j++){
             if(board[i][j] != "."){
                  if(map.has(board[i][j])){
                     validSudoku = false;
                  }else{
                     map.set(board[i][j])
                  }
             }   
         }
    }
 
 //FOR EACH BLOCK
    for (let i = 0; i < 3; i++) {
       for (let block = 0; block < 3; block++) {
          map = new Map();
          row = i * 3;
          while (row < (i * 3 + 3)) {
             column = 0;
             while (column < 3) {
                let indexval = column + (block * 3);
                if (board[row][indexval] != ".") {
                   if (map.has(board[row][indexval])) {
                      validSudoku = false;
                   } else {
                      map.set(board[row][indexval])
                   }
                }
                column++;
             }
             row++;
          }
 ;
       }
    }
    return validSudoku;
 };