// Reverse bits of a given 32 bits unsigned integer.

// Note:

// Note that in some languages, such as Java, there is no unsigned integer type. In this case, both input and output will be given as a signed integer type. They should not affect your implementation, as the integer's internal binary representation is the same, whether it is signed or unsigned.
// In Java, the compiler represents the signed integers using 2's complement notation. Therefore, in Example 2 above, the input represents the signed integer -3 and the output represents the signed integer -1073741825.
 

// Example 1:

// Input: n = 00000010100101000001111010011100
// Output:    964176192 (00111001011110000010100101000000)
// Explanation: The input binary string 00000010100101000001111010011100 represents the unsigned integer 43261596, so return 964176192 which its binary representation is 00111001011110000010100101000000.
// Example 2:

// Input: n = 11111111111111111111111111111101
// Output:   3221225471 (10111111111111111111111111111111)
// Explanation: The input binary string 11111111111111111111111111111101 represents the unsigned integer 4294967293, so return 3221225471 which its binary representation is 10111111111111111111111111111111.



//  /// use only the bitwise operators:
// function reverseBits(n) {
//   let result = 0;

//   for (let i = 0; i < 32; i++) {
//     // find the last bit of n
//     const lastBit = n & 1;

//     // shift the last bit of n to the left
//     const reversedLastBit = lastBit << (31 - i);

//     // insert the reversed last bit of n into the result
//     result |= reversedLastBit;

//     // the last bit of n is already taken care of, so we need to drop it
//     n >>>= 1;
//   }

//   // convert the result to an unsigned 32-bit integer
//   return result >>> 0;
// }

//https://www.digitalocean.com/community/tutorials/using-bitwise-operators-in-javascript


var reverseBits = function(n) {
  var result = 0;
  var count = 32;

  while (count--) {
    result *= 2;
    result += n & 1;
    n = n >> 1;
  }
  return result;
};