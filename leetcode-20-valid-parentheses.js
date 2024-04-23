// Online Javascript Editor for free
// Write, Edit and Run your Javascript code using JS Online Compiler
/**
 * @param {string} s - The input string containing parentheses
 * @return {boolean} - Returns true if the parentheses are valid, otherwise false
 */
 var isValid = function (s) {
  let stk = []; // Initialize an empty stack to store opening parentheses
  // Iterate through each character in the string
  for (const c of s) {
      // If the character is an opening parenthesis, push it onto the stack
      if (c == '(' || c == '{' || c == '[') {
          stk.push(c);
      } else if (stk.length == 0 || !match(stk[stk.length - 1], c)) {
          // If the character is a closing parenthesis, check if it matches the top of the stack
          // If the stack is empty or there's no match, return false
          return false;
      } else {
          // If there's a match, pop the corresponding opening parenthesis from the stack
          stk.pop();
      }
  }
  // After processing all characters, the stack should be empty if all parentheses are balanced
  return stk.length == 0;
};

/**
* @param {string} l - The left parenthesis
* @param {string} r - The right parenthesis
* @return {boolean} - Returns true if l and r form a matching pair of parentheses, otherwise false
*/
function match(l, r) {
  return (l == '(' && r == ')') || (l == '[' && r == ']') || (l == '{' && r == '}');
}