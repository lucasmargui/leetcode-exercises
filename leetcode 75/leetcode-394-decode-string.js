// Given an encoded string, return its decoded string.

// The encoding rule is: k[encoded_string], where the encoded_string inside the square brackets is being repeated exactly k times. Note that k is guaranteed to be a positive integer.

// You may assume that the input string is always valid; there are no extra white spaces, square brackets are well-formed, etc. Furthermore, you may assume that the original data does not contain any digits and that digits are only for those repeat numbers, k. For example, there will not be input like 3a or 2[4].

// The test cases are generated so that the length of the output will never exceed 105.

 

// Example 1:

// Input: s = "3[a]2[bc]"
// Output: "aaabcbc"

/**
 * @param {string} s
 * @return {string}
 */
const decodeString = s => {
    const stack = [];
    for (const char of s) {
      if (char !== "]") { stack.push(char); continue; }
      let cur = stack.pop();
      let str = '';
      while (cur !== '[') {
        str = cur + str;
        cur = stack.pop();
      }
      let num = '';
      cur = stack.pop();
      while (!Number.isNaN(Number(cur))) {
        num = cur + num;
        cur = stack.pop();
      }
      stack.push(cur);
      stack.push(str.repeat(Number(num)));
    }
    return stack.join('');
  };