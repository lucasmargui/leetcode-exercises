// 98. Validate Binary Search Tree
// Solved
// Medium
// Topics
// Companies
// Given the root of a binary tree, determine if it is a valid binary search tree (BST).

// A valid BST is defined as follows:

// The left 
// subtree
//  of a node contains only nodes with keys less than the node's key.
// The right subtree of a node contains only nodes with keys greater than the node's key.
// Both the left and right subtrees must also be binary search trees.
 

// Example 1:


// Input: root = [2,1,3]
// Output: true
// Example 2:


// Input: root = [5,1,4,null,null,3,6]
// Output: false
// Explanation: The root node's value is 5 but its right child's value is 4.

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
 * @return {boolean}
 */
// var isValidBST = function(root) {

//     var array = [];
//     var isValid = true;

//     var bst = (node) => {
//         if(!node) return null;
//         bst(node.left);
//         array.push(node.val);
//         bst(node.right);
//     }
//     bst(root);

//     for (let i = 0; i < array.length; i++){
//         if(array[i] >= array[i+1]){
//             isValid = false;
//         }
//     }
    
//     return isValid;
    
// };

var isValidBST = function(root) {
    return helper(root, -Infinity, Infinity);
};

var helper = function(root, l, r){
    if(root == null) return true;
    if(root.val <=l || root.val >= r) return false;
    return helper(root.left, l, root.val) && helper(root.right, root.val, r);   
}