// 637. Average of Levels in Binary Tree
// Solved
// Easy
// Topics
// Companies
// Given the root of a binary tree, return the average value of the nodes on each level in the form of an array. Answers within 10-5 of the actual answer will be accepted.
 

// Example 1:


// Input: root = [3,9,20,null,null,15,7]
// Output: [3.00000,14.50000,11.00000]
// Explanation: The average value of nodes on level 0 is 3, on level 1 is 14.5, and on level 2 is 11.
// Hence return [3, 14.5, 11].
// Example 2:


// Input: root = [3,9,20,15,7]
// Output: [3.00000,14.50000,11.00000]


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
 * @return {number[]}
 */
var averageOfLevels = function(root) {

    if(root === null) return [];

    var queue = [root];
    var averageLevel = [];

    while(queue.length > 0){

        let size = queue.length;
        let average = 0; 

        for(let i = 0; i < size; i++){
            var node = queue.shift();
            average += node.val;
            if(node.left){queue.push(node.left)}
            if(node.right){queue.push(node.right)}
        }

        averageLevel.push(average/size)

    }

    return averageLevel;

    
};