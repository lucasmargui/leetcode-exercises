var rob = function(nums) {

    const numsLen = nums.length;

    if(numsLen == 1){
        return nums[0]
    }

    var dfs = (index,limitIndex, memo = {}) => {

        if(index in memo){
            return memo[index];
        }

  
        if(index >= limitIndex){
            return 0;
        }
 
        let totalSum = 0;

        var houserobbed = dfs(index + 2, limitIndex, memo) + nums[index];
        var housepulled = dfs(index + 1, limitIndex, memo);

  
        totalSum = Math.max(houserobbed,housepulled);


        memo[index] = totalSum;

        return totalSum;

    }

    const robbery1 = dfs(0,numsLen - 1);
    const robbery2 = dfs(1,numsLen);

    return Math.max(robbery1,robbery2);


}
