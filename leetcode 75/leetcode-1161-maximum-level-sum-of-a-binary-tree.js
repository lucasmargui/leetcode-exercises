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
// 1161. Maximum Level Sum of a Binary Tree
// Solved
// Medium
// Topics
// Companies
// Hint
// Given the root of a binary tree, the level of its root is 1, the level of its children is 2, and so on.

// Return the smallest level x such that the sum of all the values of nodes at level x is maximal.

 

// Example 1:


// Input: root = [1,7,0,7,-8,null,null]
// Output: 2
// Explanation: 
// Level 1 sum = 1.
// Level 2 sum = 7 + 0 = 7.
// Level 3 sum = 7 + -8 = -1.
// So we return the level with the maximum sum which is level 2.


var maxLevelSum = function(root) {

    var queue = [root];
    var maxSum = -Infinity;
    var level = 0; 
    var levelTarget = 0;
    while(queue.length > 0){
        level++;
        const size = queue.length;
        let sum = 0;
        for(let i = 0; i < size; i++){
            let node = queue.shift();
            sum += node.val;
            if(node.left) queue.push(node.left);
            if(node.right) queue.push(node.right);
        }

         if(sum > maxSum){
            maxSum = Math.max(sum,maxSum);
            levelTarget = level;
         }

    }
    
    return levelTarget;
};