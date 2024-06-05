// 22. Generate Parentheses
// Solved
// Medium
// Topics
// Companies
// Given n pairs of parentheses, write a function to generate all combinations of well-formed parentheses.

 

// Example 1:

// Input: n = 3
// Output: ["((()))","(()())","(())()","()(())","()()()"]
// Example 2:

// Input: n = 1
// Output: ["()"]
 

// Constraints:

// 1 <= n <= 8





var generateParenthesis = function(n) {
    function backtrack(S='', left=0, right=0) {
        //console.log(S,'Left',left,'Right', right)
        if (S.length === 2 * n) {
            
            result.push(S);
            return;
        }
        if (left < n) {
            backtrack(S + '(', left + 1, right);
        }
        if (right < left) {
            backtrack(S + ')', left, right + 1);
        }
      
    }

    let result = [];
    backtrack();
    return result;
};

//  Left 0 Right 0
// ( Left 1 Right 0
// (( Left 2 Right 0
// ((( Left 3 Right 0
// ((() Left 3 Right 1
// ((()) Left 3 Right 2
// ((())) Left 3 Right 3
// (() Left 2 Right 1
// (()( Left 3 Right 1
// (()() Left 3 Right 2
// (()()) Left 3 Right 3
// (()) Left 2 Right 2
// (())( Left 3 Right 2
// (())() Left 3 Right 3
// () Left 1 Right 1
// ()( Left 2 Right 1
// ()(( Left 3 Right 1
// ()(() Left 3 Right 2
// ()(()) Left 3 Right 3
// ()() Left 2 Right 2
// ()()( Left 3 Right 2
// ()()() Left 3 Right 3