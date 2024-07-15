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

// 328. Odd Even Linked List
// Solved
// Medium
// Topics
// Companies
// Given the head of a singly linked list, group all the nodes with odd indices together followed by the nodes with even indices, and return the reordered list.

// The first node is considered odd, and the second node is even, and so on.

// Note that the relative order inside both the even and odd groups should remain as it was in the input.

// You must solve the problem in O(1) extra space complexity and O(n) time complexity.

 


var oddEvenList = function(head) {


    if (head === null || head.next === null) return head;
    
    var odd = new ListNode();
    var oddHead = odd;

    var even = new ListNode();
    var evenHead = even;

    let count = 0;

    while(head){

        if(count % 2 == 0){
            evenHead.next = new ListNode(head.val)
            evenHead = evenHead.next;
        }else{
            oddHead.next = new ListNode(head.val)
            oddHead = oddHead.next;
        }

        count ++;
        head = head.next;
    }

    evenHead.next = odd.next

    return even.next


}