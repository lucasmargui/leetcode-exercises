/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
///RECURSIVE 
 var mergeTwoLists = function(l1, l2) {
  if (l1 === null) return l2;
  if (l2 === null) return l1;

  if (l1.val < l2.val) {
      l1.next = mergeTwoLists(l1.next, l2);
      return l1;
  } else {
      l2.next = mergeTwoLists(l1, l2.next);
      return l2;
  }
};



 var mergeTwoLists = function(l1, l2) {
  let tempNode = new ListNode(0, null);
  let currentNode = tempNode;
  


  while (l1 && l2) {

   console.log("L1: " + l1.val   + " L2: "+ l2.val  );
   
      if(l1.val < l2.val) {
          currentNode.next = l1;
          l1 = l1.next
          
      } else {
          currentNode.next = l2;
          l2 = l2.next
      }
      currentNode = currentNode.next;
  }
  currentNode.next = l1 || l2;
  
  return tempNode.next;
};