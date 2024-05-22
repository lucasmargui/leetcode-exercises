

// Code
// Code Sample
// Code Sample
// Testcase
// Testcase
// Test Result
// 61. Rotate List
// Solved
// Medium
// Topics
// Companies
// Given the head of a linked list, rotate the list to the right by k places.

 

// Example 1:


// Input: head = [1,2,3,4,5], k = 2
// Output: [4,5,1,2,3]
// Example 2:


// Input: head = [0,1,2], k = 4
// Output: [2,0,1]
 

// Constraints:

// The number of nodes in the list is in the range [0, 500].
// -100 <= Node.val <= 100
// 0 <= k <= 2 * 109

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
// var rotateRight = function(head, k) {

//     let nums = [];
//     var dummy = new ListNode(0);
//     var dummyHead = dummy;

//     while(head){
//         nums.push(head.val);
//         head = head.next;
//     }

//     const tmp = nums.slice();

//     for (let i = 0; i < nums.length; ++i) {
//         const next = (i + k) % nums.length
//         nums[next] = tmp[i]  
//     }

//     for (let i = 0; i < nums.length; ++i) {
//         dummyHead.next = new ListNode(nums[i]);
//         dummyHead = dummyHead.next;
//     }


//     return dummy.next
 
    
// };


var rotateRight = function (head, k) {
	if (!head) return head;
	let count = 0,
		ptr = head;

	//Step 1 of the algo, count list nodes
	while (ptr) {
		count++;
		ptr = ptr.next;
	}

	//Ste 2: Number of rotations are now restricted within limit
	k = k % count;
	let prev = head;
	ptr = head;

	//Step 3: Moving one pointer k positions ahead
	while (k--) {
		ptr = ptr.next;
	}

	//Step 4: The actual magic, explained above
	while (ptr.next) {
		prev = prev.next;
		ptr = ptr.next;
	}
    
	//Step 5: Simply modifying the head and last node
	ptr.next = head;
	head = prev.next;
	prev.next = null;
	return head;
};