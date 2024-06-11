// Implement pow(x, n), which calculates x raised to the power n (i.e., xn).

 

// Example 1:

// Input: x = 2.00000, n = 10
// Output: 1024.00000
// Example 2:

// Input: x = 2.10000, n = 3
// Output: 9.26100
// Example 3:

// Input: x = 2.00000, n = -2
// Output: 0.25000
// Explanation: 2-2 = 1/22 = 1/4 = 0.25


/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */

var myPow = function(x, n) {
    
    var helper = (pow) =>{

        if(pow == 0) return 1;

        //If the square root is even, we can divide it in half
        if (pow % 2 === 0) {
            let halfPower = helper( pow / 2);
            return halfPower * halfPower;
        }else{
            return x * helper(pow - 1);
        }
        
    }

    const result = n > 0 ? (helper(Math.abs(n))) : (1 / helper(Math.abs(n)))

    return result
};