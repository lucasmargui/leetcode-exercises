// Given two strings s and t, return true if t is an anagram of s, and false otherwise.

// An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

 

// Example 1:

// Input: s = "anagram", t = "nagaram"
// Output: true
// Example 2:

// Input: s = "rat", t = "car"
// Output: false
 

// Constraints:

// 1 <= s.length, t.length <= 5 * 104
// s and t consist of lowercase English letters.
 

// Follow up: What if the inputs contain Unicode characters? How would you adapt your solution to such a case?

// /**
//  * @param {string} s
//  * @param {string} t
//  * @return {boolean}
//  */
//  var isAnagram = function(s, t) {

//     const mapS = new Map();
//     const mapT = new Map();

//     var sArray = s.split('');
//     var tArray = t.split('');

//     var index = 0;


//     if(sArray.length != tArray.length){
//         return false;
//     }

//     while(index < sArray.length && index < tArray.length){

//         var checkValueS = mapS.get(sArray[index]);
//         var checkValueT = mapT.get(tArray[index]);
 
        
//         if(checkValueS){
//             console.log(checkValueS);
//             mapS.set(sArray[index], checkValueS + 1);

//         }else{
//             mapS.set(sArray[index],1);
     
//         }

//         if(checkValueT){

//             mapT.set(tArray[index], checkValueT + 1);
//         }else{
//             mapT.set(tArray[index],1);
//         }

//         index++;
//     }

   

//     return compareMaps(mapS,mapT);
    
// };


// function compareMaps(map1, map2) {
//     let testVal;
//     if (map1.size !== map2.size) {
//         return false;
//     }
//     for (let [key, val] of map1) {
//         testVal = map2.get(key);
//         // in cases of an undefined value, make sure the key
//         // actually exists on the object so there are no false positives
//         if (testVal !== val || (testVal === undefined && !map2.has(key))) {
//             return false;
//         }
//     }
//     return true;
// }

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    s = s.split('').sort().join('')  
    t = t.split('').sort().join('')  

    return s === t
};