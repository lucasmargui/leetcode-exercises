// 1657. Determine if Two Strings Are Close
// Solved
// Medium
// Topics
// Companies
// Hint
// Two strings are considered close if you can attain one from the other using the following operations:

// Operation 1: Swap any two existing characters.
// For example, abcde -> aecdb
// Operation 2: Transform every occurrence of one existing character into another existing character, and do the same with the other character.
// For example, aacabb -> bbcbaa (all a's turn into b's, and all b's turn into a's)
// You can use the operations on either string as many times as necessary.

// Given two strings, word1 and word2, return true if word1 and word2 are close, and false otherwise.

 

// Example 1:

// Input: word1 = "abc", word2 = "bca"
// Output: true
// Explanation: You can attain word2 from word1 in 2 operations.
// Apply Operation 1: "abc" -> "acb"
// Apply Operation 1: "acb" -> "bca"
// Example 2:

// Input: word1 = "a", word2 = "aa"
// Output: false
// Explanation: It is impossible to attain word2 from word1, or vice versa, in any number of operations.
// Example 3:

// Input: word1 = "cabbba", word2 = "abbccc"
// Output: true
// Explanation: You can attain word2 from word1 in 3 operations.
// Apply Operation 1: "cabbba" -> "caabbb"
// Apply Operation 2: "caabbb" -> "baaccc"
// Apply Operation 2: "baaccc" -> "abbccc"


/**
 * @param {string} word1
 * @param {string} word2
 * @return {boolean}
 */
var closeStrings = function(word1, word2) {

    const lenWord1 = word1.length;
    const lenWord2 = word2.length;

    if(lenWord1 !== lenWord2) return false;

    var map1 = {};
    var map2 = {};

    for(let i = 0; i < word1.length; i++){
        map1[word1[i]] = map1[word1[i]] + 1 || 1
    }
    for(let i = 0; i < word2.length; i++){
        map2[word2[i]] = map2[word2[i]] + 1 || 1
    }
    
    var keys1 = Object.keys(map1).sort();
    var keys2 = Object.keys(map2).sort();

    if(String(keys1) !== String(keys2)){
        return false;
    }

    var values1 = Object.values(map1).sort((a,b) => a - b);
    var values2 = Object.values(map2).sort((a,b) => a - b);

    
    return String(values1) === String(values2);

    
};