// Given two strings s and t, determine if they are isomorphic.

// Two strings s and t are isomorphic if the characters in s can be replaced to get t.

// All occurrences of a character must be replaced with another character while preserving the order of characters. No two characters may map to the same character, but a character may map to itself.

 

// Example 1:

// Input: s = "egg", t = "add"
// Output: true
// Example 2:

// Input: s = "foo", t = "bar"
// Output: false
// Example 3:

// Input: s = "paper", t = "title"
// Output: true


// /**
//  * @param {string} s
//  * @param {string} t
//  * @return {boolean}
//  */
//  var isIsomorphic = function(s, t) {

//     const mapS = new Map();
//     const mapT = new Map();
//     var sArray = s.split('');
//     var tArray = t.split('');
//     var index = 0;

//     while(index < sArray.length && index < tArray.length){    

//         var getValueMapS = mapS.get(sArray[index]);
//         var getValueMapT = mapT.get(tArray[index]);
//         if(getValueMapS && getValueMapT){
//             if(getValueMapS != tArray[index] || getValueMapT != sArray[index]){
//                 return false
//             }

//         }else if(getValueMapS || getValueMapT){
//             return false        
//         }else{
//             mapS.set(sArray[index],tArray[index]);
//             mapT.set(tArray[index],sArray[index]);
//         }

//         index++;
//     }
//     return true;
   
    
    
// };



