
// 1143. Longest Common Subsequence
// Solved
// Medium
// Topics
// Companies
// Hint
// Given two strings text1 and text2, return the length of their longest common subsequence. If there is no common subsequence, return 0.

// A subsequence of a string is a new string generated from the original string with some characters (can be none) deleted without changing the relative order of the remaining characters.

// For example, "ace" is a subsequence of "abcde".
// A common subsequence of two strings is a subsequence that is common to both strings.

 

// Example 1:

// Input: text1 = "abcde", text2 = "ace" 
// Output: 3  
// Explanation: The longest common subsequence is "ace" and its length is 3.
// Example 2:

// Input: text1 = "abc", text2 = "abc"
// Output: 3
// Explanation: The longest common subsequence is "abc" and its length is 3.
// Example 3:

// Input: text1 = "abc", text2 = "def"
// Output: 0
// Explanation: There is no such common subsequence, so the result is 0.

var longestCommonSubsequence = function(text1, text2) {
    const row = text1.length;
    const col = text2.length;

    // Cria a matriz dp com (row + 1) x (col + 1)
    const dp = new Array(row + 1).fill().map(() => Array(col + 1).fill(0));

    // Preenche a matriz dp de forma bottom-up
    for (let i = row - 1; i >= 0; i--) {
        for (let j = col - 1; j >= 0; j--) {
            if (text1[i] === text2[j]) {
                // Se os caracteres são iguais, incrementa o valor
                dp[i][j] = 1 + dp[i + 1][j + 1];
            } else {
                // Caso contrário, pega o máximo valor entre a célula à direita e a célula abaixo
                dp[i][j] = Math.max(dp[i + 1][j], dp[i][j + 1]);
            }
        }
    }

    // O valor no topo esquerdo é a resposta
    return dp[0][0];
};
