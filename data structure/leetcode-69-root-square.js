// Given a non-negative integer x, return the square root of x rounded down to the nearest integer. The returned integer should be non-negative as well.

// You must not use any built-in exponent function or operator.

// For example, do not use pow(x, 0.5) in c++ or x ** 0.5 in python.
 

// Example 1:

// Input: x = 4
// Output: 2
// Explanation: The square root of 4 is 2, so we return 2.
// Example 2:

// Input: x = 8
// Output: 2
// Explanation: The square root of 8 is 2.82842..., and since we round it down to the nearest integer, 2 is returned.
 


/**
 * @param {number} x
 * @return {number}
 */
 var mySqrt = function(x) {

  let i=1; //variable to increment

  while((i*i)<=x){ 

      if((i*i)%x==0) //checking if 'i' square modulo x is equal to 0
      {
          return(i); // if yes then return 'i'
      
      }
      i+=1; //incrementing 'i'
  }
  return(i-1); // return 'i-1' as it holds the last whole number
  // using this method we do not have to worry about decimal values

};