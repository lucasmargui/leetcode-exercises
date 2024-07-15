
// 872. Leaf-Similar Trees
// Solved
// Easy
// Topics
// Companies
// Consider all the leaves of a binary tree, from left to right order, the values of those leaves form a leaf value sequence.



// For example, in the given tree above, the leaf value sequence is (6, 7, 4, 9, 8).

// Two binary trees are considered leaf-similar if their leaf value sequence is the same.

// Return true if and only if the two given trees with head nodes root1 and root2 are leaf-similar.

 

var leafSimilar = function(root1, root2) {

    var dfs = (root) => {

        if(!root){
            return [];
        }

        if(!root.left && !root.right){
            return [root.val];
             
        }
        var left = dfs(root.left)
        var right = dfs(root.right)
        var arr = [...left,...right];

        return arr;
    }

    var array1 = dfs(root1);
    var array2 = dfs(root2);

    return JSON.stringify(array1) == JSON.stringify(array2);
    
};