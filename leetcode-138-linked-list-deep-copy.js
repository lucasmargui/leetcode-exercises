
// A linked list of length n is given such that each node contains an additional random pointer, which could point to any node in the list, or null.

// Construct a deep copy of the list. The deep copy should consist of exactly n brand new nodes, where each new node has its value set to the value of its corresponding original node. Both the next and random pointer of the new nodes should point to new nodes in the copied list such that the pointers in the original list and copied list represent the same list state. None of the pointers in the new list should point to nodes in the original list.

// For example, if there are two nodes X and Y in the original list, where X.random --> Y, then for the corresponding two nodes x and y in the copied list, x.random --> y.

// Return the head of the copied linked list.

// The linked list is represented in the input/output as a list of n nodes. Each node is represented as a pair of [val, random_index] where:

// val: an integer representing Node.val
// random_index: the index of the node (range from 0 to n-1) that the random pointer points to, or null if it does not point to any node.
// Your code will only be given the head of the original linked list.

 

// Example 1:


// Input: head = [[7,null],[13,0],[11,4],[10,2],[1,0]]
// Output: [[7,null],[13,0],[11,4],[10,2],[1,0]]
// Example 2:


// Input: head = [[1,1],[2,1]]
// Output: [[1,1],[2,1]]
// Example 3:



// Input: head = [[3,null],[3,0],[3,null]]
// Output: [[3,null],[3,0],[3,null]]
 

// Constraints:

// 0 <= n <= 1000
// -104 <= Node.val <= 104
// Node.random is null or is pointing to some node in the linked list.


// Solution #1: Hash Map Method
// Intuition and Logic Behind the Solution
// The basic idea is to traverse the list twice. In the first pass, we create a new node for each node in the original list and store the mapping in a hash map. In the second pass, we set the next and random pointers for each new node based on the hash map.

// Step-by-step Explanation
// Initialization:

// Create an empty hash map, old_to_new, to store the mapping from old nodes to new nodes.
// First Pass - Node Creation:

// Traverse the original list and for each node, create a corresponding new node.
// Store the mapping in old_to_new.
// Second Pass - Setting Pointers:

// Traverse the original list again.
// For each node, set its corresponding new node's next and random pointers based on the hash map.
// Complexity Analysis
// Time Complexity: O(n)O(n)O(n) — Each node is visited twice.
// Space Complexity: O(n)O(n)O(n) — To store the hash map.
// Solution #2: Interweaving Nodes Method
// Intuition and Logic Behind the Solution
// The crux of this method is to interweave the nodes of the original and copied lists. This interweaving allows us to set the random pointers for the new nodes without needing additional memory for mapping.

// Step-by-step Explanation
// Initialization and Interweaving:

// Traverse the original list.
// For each node, create a corresponding new node and place it between the current node and the current node's next.
// Setting Random Pointers:

// Traverse the interweaved list.
// For each old node, set its corresponding new node's random pointer.
// Separating Lists:

// Traverse the interweaved list again to separate the old and new lists.
// Complexity Analysis
// Time Complexity: O(n)O(n)O(n) — Each node is visited multiple times but it's still linear time.
// Space Complexity: O(1)O(1)O(1) — No additional memory is used for mapping; we only allocate nodes for the new list.
// Both methods provide a deep copy of the original list but differ in their use of additional memory. The choice between them would depend on the specific requirements of your application.





/**
 * @param {Node} head
 * @return {Node}
 */
var copyRandomList = function(head) {
    if (!head) return null;
    
    const oldToNew = new Map();
    
    let curr = head;
    while (curr) {
        oldToNew.set(curr, new Node(curr.val));
        curr = curr.next;
    }
    
    curr = head;
    while (curr) {
        oldToNew.get(curr).next = oldToNew.get(curr.next) || null;
        oldToNew.get(curr).random = oldToNew.get(curr.random) || null;
        curr = curr.next;
    }
    
    return oldToNew.get(head);
};