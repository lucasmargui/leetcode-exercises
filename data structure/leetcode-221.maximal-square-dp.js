
// 221. Maximal Square
// Solved
// Medium
// Topics
// Companies
// Given an m x n binary matrix filled with 0's and 1's, find the largest square containing only 1's and return its area.

 

// Example 1:


// Input: matrix = [["1","0","1","0","0"],["1","0","1","1","1"],["1","1","1","1","1"],["1","0","0","1","0"]]
// Output: 4

/**
 * @param {character[][]} matrix
 * @return {number}
 */
var maximalSquare = function(matrix) {
    //We need to add zeroes to the right edge
    for(let i=0;i<matrix.length;i++) matrix[i].push('0');
    //We need to add additional azis with zeroes on the bottom
    matrix.push(new Array(matrix[0].length).fill('0'));

    let maxSquare = 0;
    //traversing the matrix from the bottom right corner 
    for(let i = matrix.length-2; i>=0 ; i--)
        for(let j = matrix[0].length-2; j>=0 ; j--){
            if(matrix[i][j] !== '0'){
                //Samples:
                //11 - this is a square, so 21 - 2 is the side 
                //11                        11     of the square
                matrix[i][j] = Math.min(parseInt(matrix[i+1][j]), parseInt(matrix[i][j+1]), parseInt(matrix[i+1][j+1])) + 1;
                //calculate max area
                maxSquare = Math.max(maxSquare, matrix[i][j]*matrix[i][j]);
            }
        }
    return maxSquare;
};