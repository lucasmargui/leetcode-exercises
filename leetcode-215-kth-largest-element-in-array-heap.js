// Given an integer array nums and an integer k, return the kth largest element in the array.

// Note that it is the kth largest element in the sorted order, not the kth distinct element.

// Can you solve it without sorting?

 

// Example 1:

// Input: nums = [3,2,1,5,6,4], k = 2
// Output: 5
// Example 2:

// Input: nums = [3,2,3,1,2,4,5,5,6], k = 4
// Output: 4
 

// Constraints:

// 1 <= k <= nums.length <= 105
// -104 <= nums[i] <= 104


/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function(nums, k) {
    class MaxHeap {
      constructor() {
          this.heap = []
      }
      
      swap(i,j){
          const temp = this.heap[i];
          this.heap[i] = this.heap[j];
          this.heap[j] = temp;
      }
      parent(i){
          return Math.floor((i-1)/2)
      }
      leftChild(i)
      {
          return 2*i+1
      }
      rightChild(i)
      {
          return 2*i+2
      }
      maxHeapify(i){
        const left = this.leftChild(i)
        const right = this.rightChild(i)
        let largest = i
        if(this.heap[left]>this.heap[largest] && left<this.heap.length){
              largest = left;
          }
        if(this.heap[right]>this.heap[largest] && right<this.heap.length){
              largest = right;
          }
        if(largest!==i){
              this.swap(largest,i)
              this.maxHeapify(largest)
          }
          
          
      }
      
      insert(value){
          this.heap.push(value);
          let i = this.heap.length - 1;
          while(i>0 && this.heap[this.parent(i)]<this.heap[i]){
              this.swap(i,this.parent(i));
              i = this.parent(i)
          }
      }
      
      delete(){
          if (this.heap.length===0){
              return null 
          }
          const max = this.heap[0]
          this.heap[0] = this.heap[this.heap.length-1]
          this.heap.pop();
          this.maxHeapify(0);
          return max
          
      }
      
      
  }
  const heap = new MaxHeap();
  for(let i = 0 ; i<nums.length;i++)
  { 
      heap.insert(nums[i])
  }  
   let count = 0
   let kthelement=0
   while(count<k)
   {
   count ++ 
   kthelement = heap.delete()
   }
   return kthelement
      
  };