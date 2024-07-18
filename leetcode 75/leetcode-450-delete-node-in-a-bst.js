// /**
//  * Definition for a binary tree node.
//  * function TreeNode(val, left, right) {
//  *     this.val = (val===undefined ? 0 : val)
//  *     this.left = (left===undefined ? null : left)
//  *     this.right = (right===undefined ? null : right)
//  * }
//  */
// /**
//  * @param {TreeNode} root
//  * @param {number} key
//  * @return {TreeNode}
//  */


// 450. Delete Node in a BST
// Medium
// Topics
// Companies
// Given a root node reference of a BST and a key, delete the node with the given key in the BST. Return the root node reference (possibly updated) of the BST.

// Basically, the deletion can be divided into two stages:

// Search for a node to remove.
// If the node is found, delete the node.
 

// Example 1:


// Input: root = [5,3,6,2,4,null,7], key = 3
// Output: [5,4,6,2,null,null,7]
// Explanation: Given key to delete is 3. So we find the node with value 3 and delete it.
// One valid answer is [5,4,6,2,null,null,7], shown in the above BST.
// Please notice that another valid answer is [5,2,6,null,4,null,7] and it's also accepted.

var deleteNode = function(root, key) {


    var dfs = (node) => {

        if(!node) return null;


        if(key == node.val){

            if(!(node.left) && !(node.right)) return null

            if(node.left && node.right){

                let curr = node.right
                while(curr.left){
                    curr = curr.left
                }
                curr.left = node.left
                return node.right;
            }

            if(node.left && !(node.right)){
                return node.left
            }

           if(node.right && !(node.left)){
                return node.right
            }


        }



        if(key < node.val){
            node.left = dfs(node.left);
        }else{
            node.right = dfs(node.right);
        }
        
        

        return node;

    }

    

    const ans = dfs(root);

    return ans;
   
    
};