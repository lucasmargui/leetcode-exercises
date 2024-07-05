// /**
//  * @param {string} pattern
//  * @param {string} s
//  * @return {boolean}
//  */

//  290. Word Pattern
//  Solved
//  Easy
//  Topics
//  Companies
//  Given a pattern and a string s, find if s follows the same pattern.
 
//  Here follow means a full match, such that there is a bijection between a letter in pattern and a non-empty word in s.
 
  
 
//  Example 1:
 
//  Input: pattern = "abba", s = "dog cat cat dog"
//  Output: true
//  Example 2:
 
//  Input: pattern = "abba", s = "dog cat cat fish"
//  Output: false
//  Example 3:
 
//  Input: pattern = "aaaa", s = "dog cat cat dog"
//  Output: false
  
 
//  Constraints:
 
//  1 <= pattern.length <= 300
//  pattern contains only lower-case English letters.
//  1 <= s.length <= 3000
//  s contains only lowercase English letters and spaces ' '.
//  s does not contain any leading or trailing spaces.
//  All the words in s are separated by a single space.

 var wordPattern = function(pattern, s) {

    const mapS = new Map();
    const mapT = new Map();
    var sArray = pattern.split('');
    var tArray = s.split(' ');
    var index = 0;

    if(sArray.length !=  tArray.length){
        return false;
    }

    while(index < sArray.length && index < tArray.length){    

        var getValueMapS = mapS.get(sArray[index]);
        var getValueMapT = mapT.get(tArray[index]);
        if(getValueMapS && getValueMapT){
            if(getValueMapS != tArray[index] || getValueMapT != sArray[index]){
                return false
            }

        }else if(getValueMapS || getValueMapT){
            return false        
        }else{
            mapS.set(sArray[index],tArray[index]);
            mapT.set(tArray[index],sArray[index]);
        }

        index++;
    }
    return true;
};