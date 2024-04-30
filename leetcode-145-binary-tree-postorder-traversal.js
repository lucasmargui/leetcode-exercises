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
 var preorderTraversal = function(root) {
    var arrayNodes = [];
        
    helper(root,arrayNodes);

    return arrayNodes;
};

function helper(root,arrayNodes){

    if(root !== null){
        
        helper(root.left,arrayNodes);
        helper(root.right,arrayNodes);
        arrayNodes.push(root.val);
    }


}