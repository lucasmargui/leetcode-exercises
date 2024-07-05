// Given an integer array nums, return an array answer such that answer[i] is equal to the product of all the elements of nums except nums[i].

// The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.

// You must write an algorithm that runs in O(n) time and without using the division operation.

 

// Example 1:

// Input: nums = [1,2,3,4]
// Output: [24,12,8,6]
// Example 2:

// Input: nums = [-1,1,0,-3,3]
// Output: [0,0,9,0,0]
 

// Constraints:

// 2 <= nums.length <= 105
// -30 <= nums[i] <= 30
// The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.
 

// Follow up: Can you solve the problem in O(1) extra space complexity? (The output array does not count as extra space for space complexity analysis.)


/**
 * @param {number[]} nums
 * @return {number[]}
 */
 var productExceptSelf = function(nums) {

    const n = nums.length;
    const answer = [];

    const left = new Array(n).fill(1);
    const right = new Array(n).fill(1);


    //nums = [1,2,3,4]
    //Output: [24,12,8,6]


    //The first element in the left is 1 because no elements in left side for product calculation
    //The last element in the right is 1 because no elements in right side for product calculation
   

    // Calculate the product of all elements to the left 
    //of each element


    // Because the first element in left is 1, index i starts in 1

    // [ 1, 1, 1, 1 ]
    //

    // i == 1
    // left = left[i] = left[0] * nums[0]

    // [ 1, 1, 1, 1 ]

    // i == 2
    // left = left[i] = left[1] * nums[1]

    // [ 1, 1, 2, 1 ]

    // i == 3
    // left = left[i] = left[2] * nums[2]

    // [ 1, 1, 2, 6 ]


    for (let i = 1; i < n; i++) {
        left[i] = left[i - 1] * nums[i - 1];
        
    }


    // Calculate the product of all elements to the right 
    //of each element

    // Because the last element is 1, index i starts in n - 2
    
    // i = 2
    // right[i] = right[3] * nums[3];

    // right = [ 1, 1, 4, 1 ]

    // i = 1
    // right[i] = right[2] * nums[2];

    // right = [ 1, 12, 4, 1 ]

    // i = 0
    // right[i] = right[1] * nums[1];

    // right = [ 24, 12, 4, 1 ]

    for (let i = n - 2; i >= 0; i--) {
        right[i] = right[i + 1] * nums[i + 1];
        console.log(right);
    }


    // Left
    
    // [ 1, 1, 2, 6 ]

    // Right

    // [ 24, 12, 4, 1 ]

    for (let i = 0; i < n; i++) {
        answer[i] = left[i] * right[i];
    }

    return answer;

    
};