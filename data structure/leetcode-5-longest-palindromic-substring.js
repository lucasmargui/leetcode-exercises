// Given a string s, return the longest 
// palindromic
 
// substring
//  in s.

 

// Example 1:

// Input: s = "babad"
// Output: "bab"
// Explanation: "aba" is also a valid answer.
// Example 2:

// Input: s = "cbbd"
// Output: "bb"
 

// Constraints:

// 1 <= s.length <= 1000
// s consist of only digits and English letters.

/**
 * @param {string} s
 * @return {string}
 */
// var longestPalindrome = function(s) {
    
//     let res = "";
//     let resLen = 0;
    
//     for (let i = 0; i < s.length; i++) {
//         // odd length palindrome
//         let left = i, right = i;
//         while (left >= 0 && right < s.length && s[left] === s[right]) {
//             if ((right - left + 1) > resLen) {
//                 res = s.slice(left, right + 1);
//                 resLen = right - left + 1;
//             }
//             left--;
//             right++;
//         }
        
//         // even length palindrome
//         left = i, right = i + 1;
//         while (left >= 0 && right < s.length && s[left] === s[right]) {
//             if ((right - left + 1) > resLen) {
//                 res = s.slice(left, right + 1);
//                 resLen = right - left + 1;
//             }
//             left--;
//             right++;
//         }
//     }
    
//     return res;
           
// };


/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    
    if (!s) return "";

    var expandAroundCenter = (left, right) => {
         while (left >= 0 && right < s.length && s[left] === s[right]) {
            left--;
            right++;
        }
        return right - left - 1;
    }
    
    let start = 0;
    let end = 0;
    for (let i = 0; i < s.length; i++) {
        let odd = expandAroundCenter(i, i);
        let even = expandAroundCenter(i, i + 1);
        let maxLen = Math.max(odd, even);
        if (maxLen > end - start) {
            start = i - Math.floor((maxLen - 1) / 2);
            end = i + Math.floor(maxLen / 2);
        }
    }

    return s.substring(start, end + 1);

}