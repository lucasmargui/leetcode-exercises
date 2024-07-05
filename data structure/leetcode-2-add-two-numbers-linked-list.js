// 2. Add Two Numbers
// Solved
// Medium
// Topics
// Companies
// You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.

// You may assume the two numbers do not contain any leading zero, except the number 0 itself.

 

// Example 1:


// Input: l1 = [2,4,3], l2 = [5,6,4]
// Output: [7,0,8]
// Explanation: 342 + 465 = 807.
// Example 2:

// Input: l1 = [0], l2 = [0]
// Output: [0]
// Example 3:

// Input: l1 = [9,9,9,9,9,9,9], l2 = [9,9,9,9]
// Output: [8,9,9,9,0,0,0,1]


/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {

var number = 0;
var sum;

//Creating a listNode
let dummy = new ListNode(0);

// Storing head to be able to access
let dummyHead = dummy;

     while(l1 || l2){
            if(l1 && l2){
                sum = l1.val + l2.val + number; 
            }else if(l1 && !(l2)){
                sum = l1.val + number;
            }else if(!(l1) && l2){ 
                sum = l2.val + number;
            }
            if(l1){l1 = l1.next;}
            if(l2){l2 = l2.next;}
            number = Math.floor(sum / 10);
            //Next node to be linked
            dummyHead.next = new ListNode(sum % 10);
            //Jumping to next linked node
            dummyHead = dummyHead.next;
            
        }

    if(number > 0){
        //Next node to be linked
        dummyHead.next = new ListNode(number);
        //Jumping to next linked node
        dummyHead = dummyHead.next;
    }

    return dummy.next;
    
};

