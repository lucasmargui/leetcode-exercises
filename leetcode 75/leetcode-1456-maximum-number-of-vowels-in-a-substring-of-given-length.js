// Given a string s and an integer k, return the maximum number of vowel letters in any substring of s with length k.

// Vowel letters in English are 'a', 'e', 'i', 'o', and 'u'.

 

// Example 1:

// Input: s = "abciiidef", k = 3
// Output: 3
// Explanation: The substring "iii" contains 3 vowel letters.
// Example 2:

/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var maxVowels = function(s, k) {

    var leftWindow = 0;

    const vowels = 'aeiou';
    var sum = 0;
    var sumTotal = -Infinity;

    for(let rightWindow = 0; rightWindow < s.length; rightWindow++ ){

            if(vowels.includes(s[rightWindow])){
                sum += 1;
            }

        if(rightWindow - leftWindow + 1 === k){

            sumTotal = Math.max(sumTotal, sum)

            if(vowels.includes(s[leftWindow])){
                sum -= 1;
            }
            
            leftWindow++;
        }

    }

    return sumTotal;
    
};