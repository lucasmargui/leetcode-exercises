/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
    var map = new Map();
    var number;
    var count = 0;
    var maximumSubsequence = 0;
    nums.forEach((num) => {
        map.set(num);
    });
    nums.forEach((num) => {
        if( !(map.has(num - 1))  ){
            number = num;
            count = 1;
            while(map.has(number + 1)){
                count++;
                number++;
            }
            maximumSubsequence = Math.max(maximumSubsequence, count);    
        }
    });
    return maximumSubsequence
};


/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
    if(nums.length === 0) return 0
    nums.sort((a,b) => a - b)
    let max = 1
    let currentMax = 1
    for(let i = 1; i < nums.length;i++){
        if(nums[i] !== nums[i-1]){
            if(nums[i-1] + 1 === nums[i]){
                currentMax += 1
            }else{
                currentMax = 1
            }
            max = Math.max(currentMax,max)
        }
        
    }
    return max
};