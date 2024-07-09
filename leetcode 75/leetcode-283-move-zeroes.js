/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
// var moveZeroes = function(nums) {

//     var numsLen = nums.length;

//     var indexSwitch;

//     for(let i = numsLen - 2; i >= 0; i--){

//         if(nums[i] == 0){

//             indexSwitch = i;

//             while (indexSwitch < numsLen - 1){

//                 if(nums[indexSwitch + 1] == 0) break;

//                 let temp = nums[indexSwitch];
//                 nums[indexSwitch] = nums[indexSwitch + 1]
//                 nums[indexSwitch + 1] = temp;
//                 indexSwitch ++;

//             }

//         }

        

//     }
    
// };

var moveZeroes = function(nums) {
    let left = 0;
    for(let i = 0; i < nums.length; i++){
       
        if(nums[i] !== 0){
            nums[left] = nums[i]
            left++;
        }


    }

    for(left; left < nums.length; left++){
        nums[left] = 0;
    }

    return nums;
};
