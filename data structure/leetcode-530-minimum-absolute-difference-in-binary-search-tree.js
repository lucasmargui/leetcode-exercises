// 530. Minimum Absolute Difference in BST
// Solved
// Easy
// Topics
// Companies
// Given the root of a Binary Search Tree (BST), return the minimum absolute difference between the values of any two different nodes in the tree.

 

// Example 1:


// Input: root = [4,2,6,1,3]
// Output: 1
// Example 2:


// Input: root = [1,0,48,null,null,12,49]
// Output: 1
 

// Constraints:

// The number of nodes in the tree is in the range [2, 104].
// 0 <= Node.val <= 105

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */

// var getMinimumDifference = function(root) {
//     const DFS = (node, lo, hi) => {
//         if (!node) return hi - lo;
//         const left = DFS(node.left, lo, node.val);
//         const right = DFS(node.right, node.val, hi);
//         console.log('Teste',Math.min(left, right))
//         return Math.min(left, right);
//     };
//     return DFS(root, -Infinity, Infinity);
// };


var getMinimumDifference = function(root) {
    let min = Infinity
    let prev = null
    const dfs = (node) => {
        if(!node) return
        dfs(node.left)
        if(prev !== null) min = Math.min(min, node.val - prev)
        prev = node.val
        dfs(node.right)
        return min
    }
    return dfs(root) 
};