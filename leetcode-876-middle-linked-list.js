// Intuition
// Just imagine you are climbing stairs with your friend
// you both start together from bottom of stairs
// you are taking one step at a time and your friend is taking two step at time
// when he reach to top of stairs where will you be
// Approach
// Initialization: Start with two pointers, fast and slow, both pointing to the head of the list.

// Traversal: Move the fast pointer two steps at a time and the slow pointer one step at a time. This ensures that when the fast pointer reaches the end of the list, the slow pointer will be at the middle node.

// Find the Middle Node: After traversal, the slow pointer will be at the middle node of the list.

// Edge Case Handling: Check if the list is empty or contains only one node. In such cases, the middle node is the head itself.

// Return: Return the node pointed to by the slow pointer as the middle node.

// Example for odd nodes
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var middleNode = function(head) {
    let slowPointer = head;
    let fastPointer = head;

    while (fastPointer !== null && fastPointer.next !== null) {
        slowPointer = slowPointer.next;
        fastPointer = fastPointer.next.next;
    }

    return slowPointer;
};