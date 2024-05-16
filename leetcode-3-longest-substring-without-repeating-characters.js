
// 3. Longest Substring Without Repeating Characters
// Solved
// Medium
// Topics
// Companies
// Hint
// Given a string s, find the length of the longest 
// substring
//  without repeating characters.

 

// Example 1:

// Input: s = "abcabcbb"
// Output: 3
// Explanation: The answer is "abc", with the length of 3.
// Example 2:

// Input: s = "bbbbb"
// Output: 1
// Explanation: The answer is "b", with the length of 1.
// Example 3:

// Input: s = "pwwkew"
// Output: 3
// Explanation: The answer is "wke", with the length of 3.
// Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.

var lengthOfLongestSubstring = function(s) {
    let i = 0;
    let res = 0;
    const map = new Map();

    for (let j=0;j<s.length;j++) {
        const index = map.get(s[j]);
        if(index !== undefined && index >= i) {
            i = index + 1;
        }
        res = Math.max(res, j-i+1);
        map.set(s[j], j);
    }
    
    return res;
};


/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {

    var left = 0;
    var right = 0;
    var sArray = s.split('');
    var map = new Map();
    var maxLength = 0;


    while(left < sArray.length){

        right = left;
        map = new Map();
        let count = 0;
        while(right < sArray.length){
          
            if(map.has(sArray[right])){
                break;
            }
            
            map.set(sArray[right])
            count++;
            right++;

        }  
        maxLength = Math.max(maxLength, count);
        left++;
    }

    return maxLength;
    
};