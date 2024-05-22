
// Code
// Code Sample
// Code Sample


// Testcase
// Testcase
// Test Result
// 19. Remove Nth Node From End of List
// Solved
// Medium
// Topics
// Companies
// Hint
// Given the head of a linked list, remove the nth node from the end of the list and return its head.

 

// Example 1:


// Input: head = [1,2,3,4,5], n = 2
// Output: [1,2,3,5]
// Example 2:

// Input: head = [1], n = 1
// Output: []
// Example 3:

// Input: head = [1,2], n = 1
// Output: [1]
 

// Constraints:

// The number of nodes in the list is sz.
// 1 <= sz <= 30
// 0 <= Node.val <= 100
// 1 <= n <= sz
 

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */


var removeNthFromEnd = function (head, n) {
    // track head with second list
    let dummy = new ListNode(0);
    dummy.next = head;
    let first = dummy;
    let second = dummy;
    // Advances first pointer so that the gap between first and second is n nodes apart
    for (let i = 1; i <= n + 1; i++) {
        first = first.next;
    }
    // Move first to the end, maintaining the gap
    while (first !== null) {
        first = first.next;
        second = second.next;
    }

    // because reader is at end, we'll skip given nth back
    second.next = second.next.next;
    return dummy.next;
};



var removeNthFromEnd = function(head, n) {


    var array = [];
    var removedlist = new ListNode(0);
    var removedlistHead = removedlist;
  
    while(head){
        array.push(head.val);
        head = head.next;
    }

    array.splice(array.length - n,1);

    array.forEach((element) => {
        removedlistHead.next = new ListNode(element);
        removedlistHead = removedlistHead.next;
    });

     

    return removedlist.next
    

    
};