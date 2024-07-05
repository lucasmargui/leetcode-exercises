// 79. Word Search
// Medium
// Topics
// Companies
// Given an m x n grid of characters board and a string word, return true if word exists in the grid.

// The word can be constructed from letters of sequentially adjacent cells, where adjacent cells are horizontally or vertically neighboring. The same letter cell may not be used more than once.

 

// Example 1:


// Input: board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "ABCCED"
// Output: true
// Example 2:


// Input: board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "SEE"
// Output: true
// Example 3:


// Input: board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "ABCB"
// Output: false


/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function(board, word) {

    let rowBase = board.length;
    let colBase = board[0].length;
    let letter;

    
    var search = (row,col,indexword) => { 
        if(row < 0 || row >= rowBase  || col < 0 || col >= colBase){
            return false
        }

        if( board[row][col] != word[indexword] || board[row][col] === '*'){
            return false
        }

        if (indexword === word.length - 1){
            return true;
        }
            
        const cache = board[row][col];

        board[row][col] = '*';

        let top = search(row - 1,col,indexword + 1);
        let bottom = search(row + 1,col,indexword + 1);
        let left = search(row,col - 1,indexword + 1);
        let right = search(row,col + 1,indexword + 1);

        const isExist = top || bottom || left || right;

        board[row][col] = cache;

        return isExist;
     
    }



    for(let i = 0; i < rowBase; i++){
        for(let j = 0; j < colBase; j++){
            if(search(i,j,0)){
                return true;
            };
        }
    }

   return false
    
};