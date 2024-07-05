class TrieNode {
    constructor(child = {}, end = false) {
        this.child = child;
        this.end   = end;
    }
}

var WordDictionary = function() {
    this.root = new TrieNode();
};

WordDictionary.prototype.addWord = function(word) {
    let current = this.root;
    for (let i=0;i<word.length;i++) {
        if (current.child[word[i]]==null) current.child[word[i]] = new TrieNode();
        current = current.child[word[i]];
    }
    current.end = true;  
};

WordDictionary.prototype.search = function(word) {
    return this.dfs(word, 0, this.root);
};

WordDictionary.prototype.dfs = function(word, index, node) {
    if (index == word.length) return node.end == true;
    
    if (word[index] == '.') {
        for (let key in node.child) {
            if (this.dfs(word, index + 1, node.child[key])) return true;
        }
        
    } else {
        if (node.child[word[index]]!=null) {
            return this.dfs(word, index + 1, node.child[word[index]]);
        }
    }
    return false;
}