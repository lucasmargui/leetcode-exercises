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
// 1372. Longest ZigZag Path in a Binary Tree
// Solved
// Medium
// Topics
// Companies
// Hint
// You are given the root of a binary tree.

// A ZigZag path for a binary tree is defined as follow:

// Choose any node in the binary tree and a direction (right or left).
// If the current direction is right, move to the right child of the current node; otherwise, move to the left child.
// Change the direction from right to left or from left to right.
// Repeat the second and third steps until you can't move in the tree.
// Zigzag length is defined as the number of nodes visited - 1. (A single node has a length of 0).

// Return the longest ZigZag path contained in that tree.
var longestZigZag = function(root) {

    var maxLength = 0;

    var dfs = (node,left,right,count) => {

        if(!node) return;

        maxLength = Math.max(maxLength, count)

        if(left){
           dfs(node.left,false,true,count + 1);
           dfs(node.right,true,false,1); 
        }

        if(right){
            dfs(node.right,true,false,count + 1);
            dfs(node.left,false,true,1);
         }

    } 

     dfs(root.left,false,true,1);
     dfs(root.right,true,false,1);

     return maxLength;
 
};