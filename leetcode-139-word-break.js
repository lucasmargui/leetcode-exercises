/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */


var wordBreak = function(str, wordDict) {
    
    const len = str.length;
    const lenDict = wordDict.length;
 
    var recursive = (indexStr) => {
 
         if(indexStr === len ){
             return true
         }
         let ans = false;
         for(let i = 0; i < lenDict; i++){
             
             if(wordDict[i] === str.substr(indexStr, wordDict[i].length)){
      
                 ans = ans || recursive(indexStr + wordDict[i].length);
 
             }
 
         }
         return ans
    }
    //Starting index 0 for search
    return recursive(0);
 
 };