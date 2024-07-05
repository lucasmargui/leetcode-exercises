
// Given the roots of two binary trees p and q, write a function to check if they are the same or not.

// Two binary trees are considered the same if they are structurally identical, and the nodes have the same value.

 

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
//  var isSameTree = function(p, q) {
//     if (p === null && q === null) {
//         return true;
//     }
//     if (p === null || q === null) {
//         return false;
//     }
//     if (p.val !== q.val) {
//         return false;
//     }
    
//     const rightIsSame = isSameTree(p.right, q.right); 
//     const leftIsSame = isSameTree(p.left, q.left);
//     return rightIsSame && leftIsSame;
// };

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
 var isSameTree = function(p, q) {

    pArray = [];
    qArray = [];
    helper(p, pArray);
    helper(q, qArray);

    return JSON.stringify(pArray) == JSON.stringify(qArray);
    
};


function helper(root, arrayRoot) {
    if (root !== null) {

        arrayRoot.push(root.val);
        helper(root.left, arrayRoot);
        helper(root.right, arrayRoot);
    }else{
        arrayRoot.push(null);
    }
}