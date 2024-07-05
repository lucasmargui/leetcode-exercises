
// Code
// Code Sample
// Code Sample
// Testcase
// Testcase
// Test Result
// 14. Longest Common Prefix
// Solved
// Easy
// Topics
// Companies
// Write a function to find the longest common prefix string amongst an array of strings.

// If there is no common prefix, return an empty string "".

 

// Example 1:

// Input: strs = ["flower","flow","flight"]
// Output: "fl"
// Example 2:

// Input: strs = ["dog","racecar","car"]
// Output: ""
// Explanation: There is no common prefix among the input strings.
 

// Constraints:

// 1 <= strs.length <= 200
// 0 <= strs[i].length <= 200
// strs[i] consists of only lowercase English letters.

/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
  var stringArrayBase = strs[0].split("");

  var i = 1;

  var stringConcat = "";

  while (i < strs.length) {
    var x = 0;
    var stringArrayI = strs[i].split("");

    if (stringArrayI.length > 0) {
      while (x < stringArrayBase.length && x < stringArrayI.length) {
        if (stringArrayBase[x] != stringArrayI[x]) {
          stringArrayBase = stringArrayBase.slice(0, x);
        }

        if (stringArrayBase.length > stringArrayI.length) {
          stringArrayBase = stringArrayBase.slice(0, stringArrayI.length);
        }

        x++;
      }
    } else {
      stringArrayBase = stringArrayBase.slice(0, 0);
    }

    i++;
  }

  if (stringArrayBase.length > 0) {
    stringConcat = stringArrayBase.reduce(
      (accumulator, currentValue) => accumulator + currentValue
    );
  }

  return stringConcat;
};
