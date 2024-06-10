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


// var searchRange = (nums,target) => {
//     let left = 0;
//     let right = nums.length - 1;
//     let first = -1;
//     while(left <= right){
//         let mid = Math.floor((left + right) / 2);

//         if(nums[mid] === target){
//             first = mid;
//             right = mid - 1;
//         }else if(nums[mid] < target){
//             left = mid + 1
//         }else{
//             right = mid - 1
//         }
//     }

//     left = 0;
//     right = nums.length - 1;
//     let last = -1;
//     while(left <= right){
//         let mid = Math.floor((left + right) / 2);

//         if(nums[mid] === target){
//             last = mid;
//             left = mid + 1;
//         }else if(nums[mid] < target){
//             left = mid + 1;
//         }else{
//             right = mid - 1
//         }
//     }
//     return [first,last];
// }


var searchRange = (nums,target) => {

    let left = 0
    let leftFirst = left;
    let leftLast = left;
    let right = nums.length - 1;
    let rightFirst = right;
    let rightLast = right;

    let first = -1;
    let last = -1;

    while(leftFirst <= rightFirst || leftLast <= rightLast){


        let mid = Math.floor((left+right)/2);

        //1.Binary search until you find the target
      
        if(nums[mid] == target){

           //2. When finding the value, perform 2 binary for the First and the Last 

            let midFirst = Math.floor((leftFirst + rightFirst) / 2);
            let midLast = Math.floor((leftLast + rightLast) / 2);

            //Search first target in array
            if(nums[midFirst] == target){
                first = midFirst;
                rightFirst = midFirst - 1;
            }else{
                leftFirst = midFirst + 1;
            }

            //Search first last target in array
            if(nums[midLast] == target){
                last = midLast;
                leftLast = midLast + 1;
            }else{
                rightLast = midLast - 1;
            }


        }else if(target < nums[mid]){

            right = mid - 1;
            rightFirst = right;
            rightLast = right;

        }else{
            left = mid + 1;
            leftFirst = left;
            leftLast = left;
        }
        


    }

    return [first,last]

}