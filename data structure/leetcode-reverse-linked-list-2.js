
// Given the head of a singly linked list and two integers left and right where left <= right, reverse the nodes of the list from position left to position right, and return the reversed list.

 

// Example 1:


// Input: head = [1,2,3,4,5], left = 2, right = 4
// Output: [1,4,3,2,5]
// Example 2:

// Input: head = [5], left = 1, right = 1
// Output: [5]
 

// Constraints:

// The number of nodes in the list is n.
// 1 <= n <= 500
// -500 <= Node.val <= 500
// 1 <= left <= right <= n
 

// Follow up: Could you do it in one pass?

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 */


// /**
//  * Definition for singly-linked list.
//  * function ListNode(val, next) {
//  *     this.val = (val===undefined ? 0 : val)
//  *     this.next = (next===undefined ? null : next)
//  * }
//  */
// /**
//  * @param {ListNode} head
//  * @param {number} left
//  * @param {number} right
//  * @return {ListNode}
//  */
// var reverseBetween = function(head, left, right) {
//     if (!head) return null;

//     let dummy = new ListNode(0, head);

//     let prev = dummy;
//     for (let i = 0; i < left - 1; i++) 
//         prev = prev.next;

//     let curr = prev.next;
//     let currNext = null;
//     for (let i = 0; i < right - left; i++) {
//         currNext = curr.next;
//         curr.next = currNext.next;
//         currNext.next = prev.next;
//         prev.next = currNext;
//     }

//     return dummy.next;
// };

var reverseBetween = function(head, left, right) {


    var array = [];
    let loopHead = head;

    let dummy = new ListNode(0);
    let dummyHead = dummy;

    var pos = 1;

    while(loopHead){
        array.push(loopHead.val);
        loopHead = loopHead.next
    }
    array = array.slice(left - 1 ,right).reverse();

     while(head){
         
         if(pos == left){
              for (let i = 0; i < array.length; i++){
                  dummyHead.next = new ListNode(array[i]);
                  dummyHead = dummyHead.next;
                  head = head.next;   
              }
         }else{
             dummyHead.next = new ListNode(head.val);
             dummyHead = dummyHead.next;
             head = head.next; 
         }
         pos++;
     }

    return dummy.next
    
};