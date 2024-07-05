// Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.

 

// Example 1:

// Input: nums = [1,2,3,1]
// Output: true
// Example 2:

// Input: nums = [1,2,3,4]
// Output: false
// Example 3:

// Input: nums = [1,1,1,3,3,4,3,2,4,2]
// Output: true


/**
 * @param {number[]} nums
 * @return {boolean}
 */
 var containsDuplicate = function(nums) {

    var arraySort =  nums.sort();
    
    var i = 0;
    

    while (i < arraySort.length){
        
        if(arraySort[i] == arraySort[i + 1]){
            return true;
        }

        i++;
    }
    
    return false;
    
};