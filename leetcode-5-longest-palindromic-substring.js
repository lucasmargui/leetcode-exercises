/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    
    let res = "";
    let resLen = 0;
    
    for (let i = 0; i < s.length; i++) {
        // odd length palindrome
        let left = i, right = i;
        while (left >= 0 && right < s.length && s[left] === s[right]) {
            if ((right - left + 1) > resLen) {
                res = s.slice(left, right + 1);
                resLen = right - left + 1;
            }
            left--;
            right++;
        }
        
        // even length palindrome
        left = i, right = i + 1;
        while (left >= 0 && right < s.length && s[left] === s[right]) {
            if ((right - left + 1) > resLen) {
                res = s.slice(left, right + 1);
                resLen = right - left + 1;
            }
            left--;
            right++;
        }
    }
    
    return res;
           
};