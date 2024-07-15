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

// Given a binary tree root, a node X in the tree is named good if in the path from root to X there are no nodes with a value greater than X.

// Return the number of good nodes in the binary tree.

 

// Example 1:



// Input: root = [3,1,4,3,null,1,5]
// Output: 4
// Explanation: Nodes in blue are good.
// Root Node (3) is always a good node.
// Node 4 -> (3,4) is the maximum value in the path starting from the root.
// Node 5 -> (3,4,5) is the maximum value in the path
// Node 3 -> (3,1,3) is the maximum value in the path.

var goodNodes = function(root) {

   
    var count = 0;

    var dfs = (node,maximumNumber) => {

        if(!node) return;

        if(node.val >= maximumNumber){
            count++;
        }

        maximumNumber = Math.max(node.val, maximumNumber)

        let left = dfs(node.left,maximumNumber);
        let right = dfs(node.right,maximumNumber);


    }

    dfs(root, -Infinity)

    return count;
    
};