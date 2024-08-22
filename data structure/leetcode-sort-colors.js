
// Given an array nums with n objects colored red, white, or blue, sort them in-place so that objects of the same color are adjacent, with the colors in the order red, white, and blue.

// We will use the integers 0, 1, and 2 to represent the color red, white, and blue, respectively.

// You must solve this problem without using the library's sort function.

 

// Example 1:

// Input: nums = [2,0,2,1,1,0]
// Output: [0,0,1,1,2,2]
// Example 2:

// Input: nums = [2,0,1]
// Output: [0,1,2]
 

var sortColors = function(nums) {
    // Initialize pointers (3 pointer)
    let low = 0;
    let mid = 0;
    let high = nums.length - 1;
    
    //Traverse the array with the mid pointer
    while (mid <= high) {
        // If the current element is 0, swap it with the element at low pointer
        if (nums[mid] === 0) {
            [nums[low], nums[mid]] = [nums[mid], nums[low]];
            low++;
            mid++;
        } else if (nums[mid] === 1) { // If the current element is 1, just move the mid pointer forward
            mid++;
        } else { //(nums[mid] === 2) If the current element is 2, swap it with the element at high pointer
            [nums[mid], nums[high]] = [nums[high], nums[mid]];
            high--;
        }
    }
};