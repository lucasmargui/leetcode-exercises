// The Question
// For this article we will be covering Leetcode's '208. Implement Trie (Prefix Tree)' question.

// Question:

// A trie (pronounced as "try") or prefix tree is a tree data structure used to efficiently store and retrieve keys in a dataset of strings. There are various applications of this data structure, such as autocomplete and spellchecker.

// Implement the Trie class:

// Trie() Initializes the trie object.
// void insert(String word) Inserts the string word into the trie.
// boolean search(String word) Returns true if the string word is in the trie (i.e., was inserted before), and false otherwise.
// boolean startsWith(String prefix) Returns true if there is a previously inserted string word that has the prefix prefix, and false otherwise.
// Example:
// Example

// Input
// ["Trie", "insert", "search", "search", "startsWith", "insert", "search"]
// [[], ["apple"], ["apple"], ["app"], ["app"], ["app"], ["app"]]
// Output
// [null, null, true, false, true, null, true]
// Explaining The Question
// This Question is rated Medium. Which is for the most part accurate. But this is ONLY Medium if you have already know what a Trie / prefix tree is.

// What we're being asked is to implement a Trie data structure. Which I am going to call a Prefix Tree. See below for what one is.

// What is a Trie?
// A Trie is a tree data structure that is used to efficiently store and retrieve keys in a dataset of strings. There are various applications of this data structure, such as autocomplete and spellchecker. How do you think Google is so fast with giving you suggestions on what you are looking for? How do spellchecks have any idea of what you are looking for?

// The answer is that they have a Trie (Prefix Tree). What this mean's is there is a tree structure that holds all the prefix for all the words you're looking for. See the image below:

// Example

// Notice how App and Apple are on the same tree path. All thats different is that the App is a prefix of Apple and thus the end of App is marked as red as that represents the end of a word. Same with the E as thats the end of Apple. A prefix tree creates a tree for each and every prefix of a word.

// So why is this so special?
// Because it's so unbelievably fast. On each character you're looking for you're eliminating a lot of words. So if you're looking for a word that starts with the letter A you're going to be eliminating all the words that DONT start with A.

// It also gives us the ability to query a word and their prefixes which is often used in Dynamic Programming to solve string related issues.

// Recommended Knowledge
// Trees
// Trie
// JS Object Oriented
// What do we know?
// We need to create a Prefix Tree
// We need to be able to create one, insert a word, search for a word, and search for a prefix.
// How we're going to do it:
// Firstly we're going to define a TrieNode, as this will be the key to implementing the Trie.

// class TrieNode {
//     constructor(children = {}, end_of_word = false) {
//         // Our child is a hashmap of chars.
//         // Which we will use to ask.
//         // -  "Does this node have a child with this char?" and
//         // -  "Is this the end of a word?"

//         this.children    = children;
//         this.end_of_word = end_of_word;
//     }
// }
// See how we have a children property. This is a hashmap. Each node will contain a hashmap of children. Meaning, at each node we can ask 'Does this node have a child?'. We also have a end_of_word property. This is a boolean. We will use this to determine if we have reached the end of a word. So when we insert a word we will set the end_of_word property to true on the last node.

// For initializing the Trie we will use the TrieNode constructor. This gives us a this.root which is a TrieNode. This will act as the head of the entire tree.
// We will start with the insertion of a word. We break the word into a char array. We then ask the current node 'Do you have a child with this char?' If so we move to it, if not we create a new node and add it to the children. Once we have reached the end of the word we set the end_of_word property to true.
// For searching we will do something similar to insertion. We break the word into a char array. We then ask the current node 'Do you have a child with this char?' If so we move to it, if not we return false. Once we have reached the end of the word we ask 'Now we're at the end of the word, am I really at the end of the word?' If so we return true. We do this by asking the node if it's node property is true.
// The SearchWith function is the same as .3, but instead of asking the end node we just return true otherwise we return false if a char did not exist
// Big O Notation:
// Time Complexity: O(c) | Where c is the number of chars in the word. As we will have to travel through the tree for each char. Arguably, it's O(n) as we have to traverse the entire tree for each char in the event that the tree only has 1 word.
// Space Complexity: O(b) | Where b is the number of chars in the word. As in the worst case we will have to create a new node for each char in the word.


// // 208. Implement Trie (Prefix Tree)
// // Solved
// Medium
// Topics
// Companies
// A trie (pronounced as "try") or prefix tree is a tree data structure used to efficiently store and retrieve keys in a dataset of strings. There are various applications of this data structure, such as autocomplete and spellchecker.

// Implement the Trie class:

// Trie() Initializes the trie object.
// void insert(String word) Inserts the string word into the trie.
// boolean search(String word) Returns true if the string word is in the trie (i.e., was inserted before), and false otherwise.
// boolean startsWith(String prefix) Returns true if there is a previously inserted string word that has the prefix prefix, and false otherwise.
 

// Example 1:

// Input
// ["Trie", "insert", "search", "search", "startsWith", "insert", "search"]
// [[], ["apple"], ["apple"], ["app"], ["app"], ["app"], ["app"]]
// Output
// [null, null, true, false, true, null, true]

// Explanation
// Trie trie = new Trie();
// trie.insert("apple");
// trie.search("apple");   // return True
// trie.search("app");     // return False
// trie.startsWith("app"); // return True
// trie.insert("app");
// trie.search("app");     // return True


class TrieNode {
    constructor(child = {}, end = false) {

        // Our child is a hashmap of chars.
        // Which we will use to ask.
        // -  "Does this node have a child with this char?" and
        // -  "Is this the end of a word?"
        this.child = child;
        this.end   = end;
    }
}

var Trie = function () {

    // Set root node, just like Binary Trees
    this.root = new TrieNode();
};

Trie.prototype.insert = function (word) {

    // Get a handle on the root node
    // As we're inserting a word, we'll need to traverse the tree
    let current = this.root;

    // Fancy for loop, go over each word,
    // if it already exists, traverse it, if not
    // create it. 
    for (const char of word) {
        if (!current.child[char]) {
            current.child[char] = new TrieNode();
        }
        current = current.child[char];
    }

    current.end = true;
};

Trie.prototype.search = function (word) {

    // Get a handle on the root node
    let current = this.root;

    // Fancy for loop, go over each word,
    // if it already exists, traverse it, if not return false
    for (const char of word) {
        if (current.child[char]) {
            current = current.child[char];
        } else {
            return false;
        }
    }

    // Is this the end of a word?
    return current.end;
};

Trie.prototype.startsWith = function (prefix) {

    // Get a handle on the root node
    let current = this.root;

    // Fancy for loop, go over each word,
    // if it already exists, traverse it, if not return false
    for (const char of prefix) {
        if (current.child[char]) {
            current = current.child[char];
        } else {
            return false;
        }
    }

    // Well we made it this far, so it must be true. :D
    return true;
};