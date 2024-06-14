/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */

/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */


var wordBreak = function(str, wordDict) {
    
    const len = str.length;
    const lenDict = wordDict.length;
 
    let memo = new Array(len + 1).fill(-1);
 
    var recursive = (indexStr) => {
 
         if(indexStr === len ){
             return true
         }
 
         if (memo[indexStr] !== -1) {
             return memo[indexStr] === 1;
         }
 
         let ans = false;
         for(let i = 0; i < lenDict; i++){
             
             if(wordDict[i] === str.substr(indexStr, wordDict[i].length)){
      
                 ans = ans || recursive(indexStr + wordDict[i].length);
 
             }
 
         }
         memo[indexStr] = ans ? 1 : 0;
         return ans
    }
    //Starting index 0 for search
    return recursive(0);
 
 };