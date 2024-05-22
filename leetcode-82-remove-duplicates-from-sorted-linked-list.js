// Given the head of a sorted linked list, delete all nodes that have duplicate numbers, leaving only distinct numbers from the original list. Return the linked list sorted as well.

 

// Example 1:


// Input: head = [1,2,3,3,4,4,5]
// Output: [1,2,5]
// Example 2:


// Input: head = [1,1,1,2,3]
// Output: [2,3]
 

// Constraints:

// The number of nodes in the list is in the range [0, 300].
// -100 <= Node.val <= 100
// The list is guaranteed to be sorted in ascending order.


var deleteDuplicates = function(head) {
    if (!head) return null;
    let dummy = new ListNode();
    dummy.next = head;
    let prev = dummy;
    let curr = head;

    while (curr) {
        if (curr.next !== null && curr.val === curr.next.val) {
            while (curr.next !== null && curr.val === curr.next.val) {
                curr = curr.next;
            }
            prev.next = curr.next;
        } else {
            prev = prev.next;
        }
        curr = curr.next;
    } 

    return dummy.next;
};


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
var deleteDuplicates = function(head) {

    var dummy = new ListNode(0);
    var dummyHead = dummy;
    let numberRepeat;

    while(head){

        if(head.next != null){
              if(head.val == head.next.val || head.val == numberRepeat){
                    
                    numberRepeat = head.val
              }else{
                 
                 dummyHead.next = new ListNode(head.val);
                 dummyHead = dummyHead.next
              }
                 
        }else{
            if(head.val != numberRepeat){
                dummyHead.next = new ListNode(head.val);
                dummyHead = dummyHead.next
            }
            
        }
       
        head = head.next;

    }

    return dummy.next;
    
};