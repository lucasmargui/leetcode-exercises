// Given two strings ransomNote and magazine, return true if ransomNote can be constructed by using the letters from magazine and false otherwise.

// Each letter in magazine can only be used once in ransomNote.

 

// Example 1:

// Input: ransomNote = "a", magazine = "b"
// Output: false
// Example 2:

// Input: ransomNote = "aa", magazine = "ab"
// Output: false
// Example 3:

// Input: ransomNote = "aa", magazine = "aab"
// Output: true
 

// Constraints:

// 1 <= ransomNote.length, magazine.length <= 105
// ransomNote and magazine consist of lowercase English letters.

// /**
//  * @param {string} ransomNote
//  * @param {string} magazine
//  * @return {boolean}
//  */
//  var canConstruct = function(ransomNote, magazine) {
//     let result
//      let Arr = [...magazine]
//      for (let index = 0; index < ransomNote.length; index++) {
//        const element = ransomNote[index];
//        if (Arr.includes(element)) {
//          Arr.splice(Arr.indexOf(element),1)
//          result = true
//        }else{
//          result = false
//          break
//        }
//      }
 
//      return result
//  };


/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
 var canConstruct = function(ransomNote, magazine) {


    var ransomNoteArray = ransomNote.split('');
    var magazineArray = magazine.split('');


    var index = 0;
    while(index < ransomNoteArray.length){

        searchIndex = magazineArray.indexOf(ransomNoteArray[index]);

        if(searchIndex == -1){
            return false;
        }

        magazineArray.splice(searchIndex, 1)

        
        index++;
    }

        return true;
    
};