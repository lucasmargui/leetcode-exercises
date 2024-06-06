
// 148. Sort List
// Solved
// Medium
// Topics
// Companies
// Given the head of a linked list, return the list after sorting it in ascending order.

 

// Example 1:


// Input: head = [4,2,1,3]
// Output: [1,2,3,4]
// Example 2:


// Input: head = [-1,5,3,4,0]
// Output: [-1,0,3,4,5]
// Example 3:

// Input: head = []
// Output: []
 
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
var sortList = function(head) {

    var ordered = new ListNode(0);
    var orderedHead = ordered;
    var arr = [];

    while(head){
        arr.push(head.val);
        head = head.next;
    }

    arr.sort((a,b) => a - b);

     for (let i = 0; i < arr.length; i++){

         orderedHead.next = new ListNode(arr[i]);
         orderedHead = orderedHead.next;
     }

    return ordered.next

    
    
};