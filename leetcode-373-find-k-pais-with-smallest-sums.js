// Medium
// Topics
// Companies
// You are given two integer arrays nums1 and nums2 sorted in non-decreasing order and an integer k.

// Define a pair (u, v) which consists of one element from the first array and one element from the second array.

// Return the k pairs (u1, v1), (u2, v2), ..., (uk, vk) with the smallest sums.

 

// Example 1:

// Input: nums1 = [1,7,11], nums2 = [2,4,6], k = 3
// Output: [[1,2],[1,4],[1,6]]
// Explanation: The first 3 pairs are returned from the sequence: [1,2],[1,4],[1,6],[7,2],[7,4],[11,2],[7,6],[11,4],[11,6]
// Example 2:

// Input: nums1 = [1,1,2], nums2 = [1,2,3], k = 2
// Output: [[1,1],[1,1]]
// Explanation: The first 2 pairs are returned from the sequence: [1,1],[1,1],[1,2],[2,1],[1,2],[2,2],[1,3],[1,3],[2,3]
 


class MinHeap {
    constructor() {
      this.heap = [];
    }
  
    push(val) {
      this.heap.push(val);
      this._bubbleUp(this.heap.length - 1);
    }
  
    pop() {
      const min = this.heap[0];
      const end = this.heap.pop();
      if (this.heap.length > 0) {
        this.heap[0] = end;
        this._sinkDown(0);
      }
      return min;
    }
  
    _bubbleUp(index) {
      let element = this.heap[index];
      while (index > 0) {
        let parentIndex = Math.floor((index - 1) / 2);
        let parent = this.heap[parentIndex];
        if (element[0] >= parent[0]) break;
        this.heap[index] = parent;
        index = parentIndex;
      }
      this.heap[index] = element;
    }
  
    _sinkDown(index) {
      let length = this.heap.length;
      let element = this.heap[index];
      while (true) {
        let leftChildIdx = 2 * index + 1;
        let rightChildIdx = 2 * index + 2;
        let leftChild, rightChild;
        let swap = null;
  
        if (leftChildIdx < length) {
          leftChild = this.heap[leftChildIdx];
          if (leftChild[0] < element[0]) {
            swap = leftChildIdx;
          }
        }
        if (rightChildIdx < length) {
          rightChild = this.heap[rightChildIdx];
          if (
            (swap === null && rightChild[0] < element[0]) ||
            (swap !== null && rightChild[0] < leftChild[0])
          ) {
            swap = rightChildIdx;
          }
        }
        if (swap === null) break;
        this.heap[index] = this.heap[swap];
        index = swap;
      }
      this.heap[index] = element;
    }
  }
  
  var kSmallestPairs = function(nums1, nums2, k) {
    let result = [];
    if (nums1.length === 0 || nums2.length === 0 || k === 0) return result;
  
    let minHeap = new MinHeap();
  
    for (let i = 0; i < Math.min(k, nums1.length); i++) {
      minHeap.push([nums1[i] + nums2[0], i, 0]);
    }
  
    while (result.length < k && minHeap.heap.length > 0) {
      let [sum, i, j] = minHeap.pop();
      result.push([nums1[i], nums2[j]]);
      if (j + 1 < nums2.length) {
        minHeap.push([nums1[i] + nums2[j + 1], i, j + 1]);
      }
    }
  
    return result;
  };
  
  // Example usage:
  console.log(kSmallestPairs([1, 7, 11], [2, 4, 6], 3));  // Output: [[1, 2], [1, 4], [1, 6]]
  console.log(kSmallestPairs([1, 1, 2], [1, 2, 3], 2));  // Output: [[1, 1], [1, 1]]