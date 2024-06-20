// 72. Edit Distance
// Medium
// Topics
// Companies
// Given two strings word1 and word2, return the minimum number of operations required to convert word1 to word2.

// You have the following three operations permitted on a word:

// Insert a character
// Delete a character
// Replace a character
 

// Example 1:

// Input: word1 = "horse", word2 = "ros"
// Output: 3
// Explanation: 
// horse -> rorse (replace 'h' with 'r')
// rorse -> rose (remove 'r')
// rose -> ros (remove 'e')
// Example 2:

// Input: word1 = "intention", word2 = "execution"
// Output: 5
// Explanation: 
// intention -> inention (remove 't')
// inention -> enention (replace 'i' with 'e')
// enention -> exention (replace 'n' with 'x')
// exention -> exection (replace 'n' with 'c')
// exection -> execution (insert 'u')
 
/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var minDistance = function(word1, word2) {

    const row = word1.length;
    const col = word2.length;

    const dp = Array.from({ length: row + 1 }, () => Array(col + 1).fill(Infinity));
    
    for (let i = 0; i <= row; i++){
        dp[i][col] = row - i;
    }
    for (let j = 0; j <= col; j++){
        dp[row][j] = col - j;
    }
 
    for (let i = row - 1; i >= 0 ; i--){
        for (let j = col - 1; j >= 0 ; j--){
            if(word1[i] == word2[j]){
                dp[i][j] = dp[i + 1][j + 1];
            }else{
                dp[i][j] = 1 + Math.min(dp[i + 1][j], dp[i][j + 1], dp[i + 1][j + 1]);
            }
        }
    }
    
   
    return dp[0][0];

    


};