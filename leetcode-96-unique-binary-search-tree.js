// Medium
// Topics
// Companies
// Given an integer n, return the number of structurally unique BST's (binary search trees) which has exactly n nodes of unique values from 1 to n.

 

// Example 1:


// Input: n = 3
// Output: 5
// Example 2:

// Input: n = 1
// Output: 1

var numTrees = function(n) {

    // Initialize numTree array with 1s
    let numTree = Array(n + 1).fill(1);

    // Iterate over the number of nodes from 2 to n
    for (let nodes = 2; nodes <= n; nodes++) {
        let total = 0;
        // Iterate over each root from 1 to nodes
        for (let root = 1; root <= nodes; root++) {

           
            let left = root - 1;
            let right = nodes - root;

            total += numTree[left] * numTree[right];
        }
        numTree[nodes] = total;
    }
   
    return numTree[n];
 }