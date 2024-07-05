
// Given the root of a binary tree, check whether it is a mirror of itself (i.e., symmetric around its center).

 

// Example 1:


// Input: root = [1,2,2,3,4,4,3]
// Output: true
// Example 2:


// Input: root = [1,2,2,null,3,null,3]
// Output: false
 

// Constraints:

// The number of nodes in the tree is in the range [1, 1000].
// -100 <= Node.val <= 100

// /**
//  * @param {TreeNode} root
//  * @return {boolean}
//  */
//  var isSymmetric = function(root) {
//     if(!root) return true
//     return isMirror(root.left, root.right)
// };

// var isMirror = function(node1, node2){
//     if(!node1 && !node2) return true
//     if(!node1 || !node2) return false
//     return node1.val === node2.val && isMirror(node1.left, node2.right) && isMirror(node1.right, node2.left)
// }


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
 var isSymmetric = function(root) {

    var p = root.left;
    var q = root.right;


    if (p === null && q === null) {
        return true;
    }
    if (p === null || q === null) {
        return false;
    }
    if (p.val !== q.val) {
        return false;
    }
    
    const rightIsSame = isSymmetricTree(p.right, q.left); 
    const leftIsSame = isSymmetricTree(p.left, q.right);
    
    return rightIsSame && leftIsSame;


};

 var isSymmetricTree = function(p, q) {
    if (p === null && q === null) {
        return true;
    }
    if (p === null || q === null) {
        return false;
    }
    if (p.val !== q.val) {
        return false;
    }
    
    const rightIsSame = isSymmetricTree(p.right, q.left); 
    const leftIsSame = isSymmetricTree(p.left, q.right);
    return rightIsSame && leftIsSame;
    
};