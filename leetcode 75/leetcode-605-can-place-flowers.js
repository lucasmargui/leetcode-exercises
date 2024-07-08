// You have a long flowerbed in which some of the plots are planted, and some are not. However, flowers cannot be planted in adjacent plots.

// Given an integer array flowerbed containing 0's and 1's, where 0 means empty and 1 means not empty, and an integer n, return true if n new flowers can be planted in the flowerbed without violating the no-adjacent-flowers rule and false otherwise.

 

// Example 1:

// Input: flowerbed = [1,0,0,0,1], n = 1
// Output: true
// Example 2:

// Input: flowerbed = [1,0,0,0,1], n = 2
// Output: false


/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
var canPlaceFlowers = function(flowerbed, n) {

    var memo = {};

    for(let i = 0; i< flowerbed.length; i++){

        if(flowerbed[i] == 1){
               if(i - 1 >= 0){
                flowerbed[i - 1] = -1
               }
               if(i + 1 < flowerbed.length){
                flowerbed[i + 1] = -1
               }
        }

    }

    var dfs = (index,flowers, memo = {}) => {

        if(flowers == 0){ return true; }

        if(index > flowerbed.length){
            return false;
        }

        if(index in memo){
            return memo[index];
        }

        var result = false;

        if(flowerbed[index] == 1){

            result = result || dfs(index + 2,flowers, memo)

        }

        if(flowerbed[index] == - 1){

           result = result ||  dfs(index + 1,flowers, memo)

        }

        if(flowerbed[index] == 0){

           result = result ||  dfs(index + 2,flowers - 1, memo)
           result = result ||  dfs(index + 1,flowers, memo)
          
        }
        
        memo[index] = result;
        return result;

    } 

    let ans = dfs(0,n);
    return ans
  
};