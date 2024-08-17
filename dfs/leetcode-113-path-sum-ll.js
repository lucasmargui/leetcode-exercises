// 113. Path Sum II
// Solved
// Medium
// Topics
// Companies
// Given the root of a binary tree and an integer targetSum, return all root-to-leaf paths where the sum of the node values in the path equals targetSum. Each path should be returned as a list of the node values, not node references.

// A root-to-leaf path is a path starting from the root and ending at any leaf node. A leaf is a node with no children.

 


var pathSum = function (root, targetSum) {

    const res = []


    const backtrack = (node, sum, arr) => {
        if (!node) return res
        arr.push(node.val)
        if (!node.left && !node.right && node.val === sum) {
            res.push([...arr])
        } else {
            backtrack(node.left, sum - node.val, arr)
            backtrack(node.right, sum - node.val, arr)
        }
        arr.pop()
    }
    backtrack(root, targetSum, [])
    return res



};