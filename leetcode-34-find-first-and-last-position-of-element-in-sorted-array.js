// Given an array of integers nums sorted in non-decreasing order, find the starting and ending position of a given target value.

// If target is not found in the array, return [-1, -1].

// You must write an algorithm with O(log n) runtime complexity.

 

// Example 1:

// Input: nums = [5,7,7,8,8,10], target = 8
// Output: [3,4]
// Example 2:

// Input: nums = [5,7,7,8,8,10], target = 6
// Output: [-1,-1]
// Example 3:

// Input: nums = [], target = 0
// Output: [-1,-1]
 

// Constraints:

// 0 <= nums.length <= 105
// -109 <= nums[i] <= 109
// nums is a non-decreasing array.
// -109 <= target <= 109

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {

    var startNum, endNum;

    var left = 0;
    var leftStart = 0;
    var leftEnd = 0;
    var right = nums.length - 1;
    var rightStart = nums.length - 1;
    var rightEnd = nums.length - 1;

    var mid;
    var midStart;
    var midEnd;

    while(left <= right){

        mid = Math.floor(left + right / 2)

        if(nums[mid] == target){

            midStart = Math.floor(leftStart + rightStart / 2)
            midEnd = Math.floor(leftEnd + rightEnd / 2)

            startNum = midStart;
            endNum = midEnd;

            if(nums[midStart - 1] == target){
                rightStart = midStart - 1
                startNum = midStart - 1;
            }

            if(nums[midEnd + 1] == target){
                leftEnd = midEnd + 1
                startEnd = midEnd + 1;
            }



        }else if(target < nums[mid]){
             right = mid - 1; 
        }else{
             left = mid + 1;
        }

        



    }

    
};