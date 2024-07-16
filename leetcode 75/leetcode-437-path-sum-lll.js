// Given the root of a binary tree and an integer targetSum, return the number of paths where the sum of the values along the path equals targetSum.

// The path does not need to start or end at the root or a leaf, but it must go downwards (i.e., traveling only from parent nodes to child nodes).

 

// Example 1:


// Input: root = [10,5,-3,3,2,null,11,3,-2,null,1], targetSum = 8
// Output: 3
// Explanation: The paths that sum to 8 are shown.

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
 * @param {number} targetSum
 * @return {number}
 */
var pathSum = function(root, targetSum) {

    if(!root) return 0;

    var queue = [root];
    var count = 0;

    var dfs = (nodeDfs, sum) => {
       
        if(!nodeDfs) return;

        sum += nodeDfs.val;

        if(sum == targetSum){
            count += 1;
        }

    
        dfs(nodeDfs.left, sum)
        dfs(nodeDfs.right, sum)




    }

    while(queue.length > 0){

        let size = queue.length;

        for(let i = 0; i < size; i++){
            let node = queue.shift();

            dfs(node,0);
            if(node.left){
              queue.push(node.left);  
            }
            if(node.right){
              queue.push(node.right);  
            }
           
        }
        

    }

    return count;
    
};