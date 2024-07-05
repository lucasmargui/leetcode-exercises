/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {

    // backtrack([])
    // loop i = 0
    //       result.push(1);
    //       backtrack([1])
    //       loop i = 0 => nums[i] includes in result, dont loop
    //       loop i = 1
    //           result.push(2);
    //           backtrack([1,2])
    //           loop i = 0 => nums[i] includes in result, dont loop
    //           loop i = 1 => nums[i] includes in result, dont loop
    //           loop i = 2 
    //               result.push(3);
    //               backtrack([1,2,3])
    //                     GOAL   
    //       loop i = 2
    //           result.push(3);
    //           backtrack([1,3]);
    //           loop i = 0 => nums[i] includes in result, dont loop
    //           loop i = 1 
    //               result.push(2);
    //               backtrack([1,3,2])
    //                     GOAL 
    //           loop i = 2 => nums[i] includes in result, dont loop
    // loop i = 1
    //       result.push(2); SAME LOGIC
    // loop i = 2
    //       result.push(3); SAME LOGIC
 
     var ans = [];
     var len = nums.length;
 
     var backtrack = (result) => {
         
         if(result.length == len){
             ans.push(result.slice())
             return
         }
   
         for(let i = 0; i < len; i++){
             if(!(result.includes(nums[i]))){
                 result.push(nums[i]);
                 backtrack(result);
                 result.pop();
             }
             
         }
     } 
 
     backtrack([]);  
     return ans;
     
 };