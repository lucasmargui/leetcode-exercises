// 114. Flatten Binary Tree to Linked List
// Solved
// Medium
// Topics
// Companies
// Hint
// Given the root of a binary tree, flatten the tree into a "linked list":

// The "linked list" should use the same TreeNode class where the right child pointer points to the next node in the list and the left child pointer is always null.
// The "linked list" should be in the same order as a pre-order traversal of the binary tree.
 

// Example 1:


// Input: root = [1,2,5,3,4,null,6]
// Output: [1,null,2,null,3,null,4,null,5,null,6]
// Example 2:

// Input: root = []
// Output: []
// Example 3:

// Input: root = [0]
// Output: [0]
 


// var flatten = function(root) {
//     if (!root) {
//         return root;
//     }
    
//     const ptrList = [];
    
//     const preorder = (node) => {
//         if (!node) {
//             return;
//         }
        
//         ptrList.push(node);
//         preorder(node.left);
//         preorder(node.right);
//     }
    
//     preorder(root);
    
//     for(let i = 0; i < ptrList.length - 1; i++) {
//         ptrList[i].right = ptrList[i + 1];
//         ptrList[i].left = null;
//     }
    
//     const lastNode = ptrList.at(-1);
//     lastNode.left = null;
//     lastNode.right = null;
    
//     return ptrList[0];
// };

var flatten = function (root) {
    if (!root) return

    flatten(root.left)
    flatten(root.right)
    /// 1.finding last node of left child that will point right child
    if (root.left) {

      
        /// 2. Loop until find the depth right node
        /// Depth right node from the root.left = 3

        /// root = 2
        /// root.right = 4
        /// last = 3
 

        ///     2
        ///  3     4
        ///

        let last = root.left
        while (last.right) {
            last = last.right
        }

        //3.Switching the root.right from the depth right node from root.left

        last.right = root.right
        /// root = 2
        /// last = 3
        /// last.right = 4

         ///     2
         ///  3     
         ///     4

        //4. Switching the root.right for root.left
        root.right = root.left

         /// 
         ///     2
         ///        3     
         ///           4
        //5. Killing the left node
        root.left = null
    }


};