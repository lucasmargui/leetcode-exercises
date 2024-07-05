// 91. Decode Ways
// Solved
// Medium
// Topics
// Companies
// A message containing letters from A-Z can be encoded into numbers using the following mapping:

// 'A' -> "1"
// 'B' -> "2"
// ...
// 'Z' -> "26"
// To decode an encoded message, all the digits must be grouped then mapped back into letters using the reverse of the mapping above (there may be multiple ways). For example, "11106" can be mapped into:

// "AAJF" with the grouping (1 1 10 6)
// "KJF" with the grouping (11 10 6)
// Note that the grouping (1 11 06) is invalid because "06" cannot be mapped into 'F' since "6" is different from "06".

// Given a string s containing only digits, return the number of ways to decode it.

// The test cases are generated so that the answer fits in a 32-bit integer.

 

// Example 1:

// Input: s = "12"
// Output: 2
// Explanation: "12" could be decoded as "AB" (1 2) or "L" (12).
// Example 2:

// Input: s = "226"
// Output: 3
// Explanation: "226" could be decoded as "BZ" (2 26), "VF" (22 6), or "BBF" (2 2 6).
// Example 3:

// Input: s = "06"
// Output: 0
// Explanation: "06" cannot be mapped to "F" because of the leading zero ("6" is different from "06").


/**
 * @param {string} s
 * @return {number}
 * 
 * 
 * 
 */


///DYNAMIC PROGRAMMING VERSION
// const sLen = s.length;

// var dp = {[sLen]:1};

// for (let i = sLen - 1; i >= 0; i-- ){

//     if(s[i] == '0'){
//         dp[i] = 0;
//     }else{
//         dp[i] = dp[i + 1];
//     }
//      if(i + 1 < sLen){
//         if(s[i] == '1'){
//                dp[i] += dp[i + 2];
//         }else if(s[i] == '2'){
//             if('0123456'.includes(s[i + 1] )){
//                 dp[i] += dp[i + 2];
//             }
//         }
//     }
// }

// return dp[0]



var numDecodings = function(s) {
    
     const sLen = s.length;

     let memo = { };  // var dp = {[sLen]:1};
    
     var dfs = (index) => { // for (let i = sLen - 1; i >= 0; i-- ){
    

        
        if(index in memo) return memo[index];
    
        // if(s[i] == '0'){
        if(s[index] == "0") return 0;
    
        if(index > sLen) return;
    
        if(index == sLen) return memo[index] = 1;
        

        var ans = dfs(index + 1); // dp[i] = dp[i + 1];
    
        
        if(index + 1 < sLen){ //if(i + 1 < sLen){
             
            if(s[index] == '1'){
                   ans += dfs(index + 2); //dp[i] += dp[i + 2];
            }else if(s[index] == '2'){
    
                if('0123456'.includes(s[index + 1] )){
                    ans += dfs(index + 2); //dp[i] += dp[i + 2];
                }
    
            }
    
        }
    
        memo[index] = ans;
    
        return ans;
    
     }
        return dfs(0);
    
    
    
    
    
    };