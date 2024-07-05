
// You are climbing a staircase. It takes n steps to reach the top.

// Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?

 

// Example 1:

// Input: n = 2
// Output: 2
// Explanation: There are two ways to climb to the top.
// 1. 1 step + 1 step
// 2. 2 steps
// Example 2:

// Input: n = 3
// Output: 3
// Explanation: There are three ways to climb to the top.
// 1. 1 step + 1 step + 1 step
// 2. 1 step + 2 steps
// 3. 2 steps + 1 step
 

// /**
//  * @param {number} n
//  * @return {number}
//  */
//  const climbStairs = (n) => {
//     const methods = [1, 2];
//     // like fibonacci just need the first two to begin
//     for (let i = 2; i < n; i++){
//         methods[i] = methods[i-1] + methods[i-2]
//     }

//     return methods[n-1];
// };

/**
 * @param {number} n
 * @return {number}
 */
 var climbStairs = function(n) {

    var arraySteps = [];
    var i = 1;
    var ans;
    
    while(i <= n){
        
        if(i == 1){
            arraySteps.push(1);
        }else if(i == 2){
            arraySteps.push(2);
        }else{
         
    
           //get the last 2 values from arraySteps
           var lastValue = arraySteps.length;
           arraySteps.push(arraySteps[lastValue - 1] + arraySteps[lastValue - 2]);
        }
         i++;
    }
    
    ans = arraySteps.pop();

   return ans;
};