
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
// var sortList = function(head) {

//     var ordered = new ListNode(0);
//     var orderedHead = ordered;
//     var arr = [];

//     while(head){
//         arr.push(head.val);
//         head = head.next;
//     }

//     arr.sort((a,b) => a - b);

//      for (let i = 0; i < arr.length; i++){

//          orderedHead.next = new ListNode(arr[i]);
//          orderedHead = orderedHead.next;
//      }

//     return ordered.next

    

// };



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

    function sortList (head) {
        if(!head || !head.next) return head;
        
        // Middle of the linked list head
        let fast = head, slow = head;
        while(fast.next && fast.next.next) {
            fast = fast.next.next;
            slow = slow.next;
        }
        let middle = slow.next;
        slow.next = null;
        return merge(sortList(head), sortList(middle));
    }
    const merge = (o, t) => {
        let d = new ListNode(-1); //dummy and temp
        let tmp = d;
        while(o && t) {
            tmp.next = (o.val < t.val) ? o : t;
            tmp = tmp.next;
            if(o.val < t.val) o = o.next; else t = t.next;
        }
        if(o) tmp.next = o;
        if(t) tmp.next = t;
        return d.next;
    }
        
        
    };