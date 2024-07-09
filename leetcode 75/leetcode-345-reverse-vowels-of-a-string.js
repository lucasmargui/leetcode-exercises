// Given a string s, reverse only all the vowels in the string and return it.

// The vowels are 'a', 'e', 'i', 'o', and 'u', and they can appear in both lower and upper cases, more than once.

 

// Example 1:

// Input: s = "hello"
// Output: "holle"
// Example 2:

// Input: s = "leetcode"
// Output: "leotcede"

/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function(s) {


    const vowels = "aeiouAEIOU";
    var sArray = s.split('')
    var left = 0;
    var right = s.length - 1;


    while(left < right){

        if(vowels.includes(sArray[left]) && vowels.includes(sArray[right])){

            let temp = sArray[left];
            sArray[left] = sArray[right];
            sArray[right] = temp;
            
            left++;
            right--;

        }else if(vowels.includes(sArray[left])){
            right--;
        }else if(vowels.includes(sArray[right])){
            left++;
        }else{
            left++;
            right--; 
        }
        

    }

    return sArray.join("");
};