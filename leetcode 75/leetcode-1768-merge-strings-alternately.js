// /**
//  * @param {string} word1
//  * @param {string} word2
//  * @return {string}
//  */

// You are given two strings word1 and word2. Merge the strings by adding letters in alternating order, starting with word1. If a string is longer than the other, append the additional letters onto the end of the merged string.

// Return the merged string.

 

// Example 1:

// Input: word1 = "abc", word2 = "pqr"
// Output: "apbqcr"
// Explanation: The merged string will be merged as so:
// word1:  a   b   c
// word2:    p   q   r
// merged: a p b q c r
// Example 2:

// Input: word1 = "ab", word2 = "pqrs"
// Output: "apbqrs"
// Explanation: Notice that as word2 is longer, "rs" is appended to the end.
// word1:  a   b 
// word2:    p   q   r   s
// merged: a p b q   r   s

var mergeAlternately = function(word1, word2) {

    const len1 = word1.length;
    const len2 = word2.length;

    let word1Index = 0;
    let word2Index = 0;

    let str = '';

    while(word1Index < len1 && word2Index < len2){

        if(word1Index <= word2Index){
            str += word1[word1Index];
            word1Index++;
        }else{
            str += word2[word2Index];
            word2Index++;
        }

    }

    while(word1Index < len1){
        str += word1[word1Index];
        word1Index++; 
    }

    while(word2Index < len2){
        str += word2[word2Index];
        word2Index++; 
    }

    return str;
};