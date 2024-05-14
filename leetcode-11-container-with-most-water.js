// Given a 1-indexed array of integers numbers that is already sorted in non-decreasing order, find two numbers such that they add up to a specific target number. Let these two numbers be numbers[index1] and numbers[index2] where 1 <= index1 < index2 <= numbers.length.

// Return the indices of the two numbers, index1 and index2, added by one as an integer array [index1, index2] of length 2.

// The tests are generated such that there is exactly one solution. You may not use the same element twice.

// Your solution must use only constant extra space.

 

// Example 1:

// Input: numbers = [2,7,11,15], target = 9
// Output: [1,2]
// Explanation: The sum of 2 and 7 is 9. Therefore, index1 = 1, index2 = 2. We return [1, 2].
// Example 2:

// Input: numbers = [2,3,4], target = 6
// Output: [1,3]
// Explanation: The sum of 2 and 4 is 6. Therefore index1 = 1, index2 = 3. We return [1, 3].
// Example 3:

// Input: numbers = [-1,0], target = -1
// Output: [1,2]
// Explanation: The sum of -1 and 0 is -1. Therefore index1 = 1, index2 = 2. We return [1, 2].

/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */


var twoSum = function(numbers, target) {
    let left = 0;
    let right = numbers.length - 1;
    
    while(left < right){
        let total = numbers[left] + numbers[right];
        if(total == target){
            return [left + 1, right + 1]
        } else if (total > target){
            right -=1
        } else{
            left += 1
        }
    }
};

// var twoSum = function(numbers, target) {


//     var index = 0;
//     var findSum = 0;

//     var startSubArray;
//     var finalSubArray;
//     var middleSubArray;
//     var logIndex;

//     var log = Math.floor(Math.log2(numbers.length));
    


//     while(index < numbers.length){
        
//         findSum = target - numbers[index];
//         startSubArray = 0;
//         finalSubArray = numbers.length;
//         middleSubArray = Math.floor((startSubArray + finalSubArray) / 2);
//         logIndex = 0;

//         while(logIndex <= log){
         
//             if(findSum < numbers[middleSubArray]){
//                 finalSubArray = middleSubArray;
//                 middleSubArray = Math.floor((startSubArray + finalSubArray) / 2);

//             }else if(findSum > numbers[middleSubArray]){
//                 startSubArray = middleSubArray;
//                 middleSubArray = Math.floor((startSubArray + finalSubArray) / 2);
                
//             }else if(findSum == numbers[middleSubArray]){
                
                
//                 return numbers[index] != numbers[middleSubArray] ? [(index + 1), (middleSubArray + 1)] : [(index + 1), (index + 2)]
//             }

           

//             logIndex++;
//         }

        
//         index++;

//     }
    
// };