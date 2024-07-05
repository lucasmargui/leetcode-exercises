// 127. Word Ladder
// Solved
// Hard
// Topics
// Companies
// A transformation sequence from word beginWord to word endWord using a dictionary wordList is a sequence of words beginWord -> s1 -> s2 -> ... -> sk such that:

// Every adjacent pair of words differs by a single letter.
// Every si for 1 <= i <= k is in wordList. Note that beginWord does not need to be in wordList.
// sk == endWord
// Given two words, beginWord and endWord, and a dictionary wordList, return the number of words in the shortest transformation sequence from beginWord to endWord, or 0 if no such sequence exists.

 

// Example 1:

// Input: beginWord = "hit", endWord = "cog", wordList = ["hot","dot","dog","lot","log","cog"]
// Output: 5
// Explanation: One shortest transformation sequence is "hit" -> "hot" -> "dot" -> "dog" -> cog", which is 5 words long.
// Example 2:

// Input: beginWord = "hit", endWord = "cog", wordList = ["hot","dot","dog","lot","log"]
// Output: 0
// Explanation: The endWord "cog" is not in wordList, therefore there is no valid transformation sequence.
 

/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {number}
 */
var ladderLength = function(beginWord, endWord, wordList) {

    var setWordList = new Set(wordList);
    const alphabet = [...'abcdefghijklmnopqrstuvwxyz'];
    
    var queue = [[beginWord,0]];

    var i,j,word,minimumVariation;

    if( !setWordList.has(endWord) ) return 0;

    while(queue.length > 0){

        [word,minimumVariation] = queue.shift();
        if( word == endWord ) return minimumVariation + 1;

         for( i=0; i < word.length; i++ ) {
            for( j=0; j < alphabet.length; j++ ) {
                if( word[i] == alphabet[j] ) continue;
                var wordVariation = word.slice(0,i) + alphabet[j] + word.slice(i+1);
                if( setWordList.has(wordVariation) ) {
                    queue.push([wordVariation,minimumVariation+1]);
                    setWordList.delete(wordVariation);
                }
            }
         }
        


    }
    
    return 0;
    
};