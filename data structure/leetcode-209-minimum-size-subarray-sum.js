/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function (target, nums) {
    let answer = nums.length+1;
    let left  = 0;
    let sum = 0;

    for(let i = 0; i < nums.length; i++){
        sum += nums[i];
        while(sum >= target){
            console.log(answer)
            answer = Math.min(answer, i+1 - left);
            sum -= nums[left++];
        }
    }

    return answer <= nums.length ? answer : 0;
};