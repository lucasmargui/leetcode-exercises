// 17. Letter Combinations of a Phone Number
// Solved
// Medium
// Topics
// Companies
// Given a string containing digits from 2-9 inclusive, return all possible letter combinations that the number could represent. Return the answer in any order.

// A mapping of digits to letters (just like on the telephone buttons) is given below. Note that 1 does not map to any letters.


 

// Example 1:

// Input: digits = "23"
// Output: ["ad","ae","af","bd","be","bf","cd","ce","cf"]
// Example 2:

// Input: digits = ""
// Output: []
// Example 3:

// Input: digits = "2"
// Output: ["a","b","c"]
 

// Constraints:

// 0 <= digits.length <= 4
// digits[i] is a digit in the range ['2', '9'].


/**
 * @param {string} digits
 * @return {string[]}
 */
const lettersMap = {'2':"abc",'3':"def",'4':"ghi",'5':"jkl",
     '6':"mno",'7':"pqrs",'8':"tuv",'9':"wxyz"}

var letterCombinations = function(digits) {
    let len = digits.length 
    let ans = [];


    if (!len) return []

    const dfs = (position, str) => {

        //Goal
        // position = 2  ==  digits = 2 = > add combination str to answer
        if (position === len) ans.push(str)

        //Backtracking

        //dfs(0,"")
        //for (let i = 0; i < letters.length; i++)
        // Position 0 Letra a = > dfs(1,a)
            // Position 1 Letra d  = > dfs(2,ad) 
            // Position 1 Letra e  = > dfs(2,ae)
            // Position 1 Letra f  = > dfs(2,af)
        // Position 0 Letra b = > dfs(1,b)
            // Position 1 Letra d  = > dfs(2,ba)
            // Position 1 Letra e  = > dfs(2,be)
            // Position 1 Letra f  = > dfs(2,bf)
        // Position 0 Letra c = > dfs(1,c)
            // Position 1 Letra d  = > dfs(2,cd)
            // Position 1 Letra e  = > dfs(2,ce)
            // Position 1 Letra f  = > dfs(2,cf)

        else {
            let letters = lettersMap[digits[position]]
            for (let i = 0; i < letters.length; i++){
                dfs(position+1,str+letters[i])
                }

        }
    }

    dfs(0,"")
    return ans
};
