// 86. Partition List
// Solved
// Medium
// Topics
// Companies
// Given the head of a linked list and a value x, partition it such that all nodes less than x come before nodes greater than or equal to x.

// You should preserve the original relative order of the nodes in each of the two partitions.

 

// Example 1:


// Input: head = [1,4,3,2,5,2], x = 3
// Output: [1,2,2,4,3,5]
// Example 2:

// Input: head = [2,1], x = 2
// Output: [1,2]

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} x
 * @return {ListNode}
 * 
 * 
 * 
 */

var partition = function(head, x) {
    let lessDummy = new ListNode()
    let largeDummy = new ListNode()

    let small = lessDummy;
    let big = largeDummy;
    
    let curr = head;

    while(curr){
        if(curr.val < x){
            small.next = curr
            small = small.next;
        }else{
            big.next = curr
            big = big.next;
        }

        curr = curr.next;
    }
    
    big.next = null;
    small.next = largeDummy.next;
    
    return lessDummy.next;
};


var partition = function(head, x) {
    
    let loopHead = head;
    let dummy = new ListNode(0);
    let dummyHead = dummy;

    while(loopHead){
        if(loopHead.val < x ){
            dummyHead.next = new ListNode(loopHead.val); 
            dummyHead = dummyHead.next;
        }  
        loopHead = loopHead.next;
    } 
     while(head){
        if(head.val >= x ){
            dummyHead.next = new ListNode(head.val); 
            dummyHead = dummyHead.next;
        }  
        head = head.next;
    } 
    return dummy.next;
};



