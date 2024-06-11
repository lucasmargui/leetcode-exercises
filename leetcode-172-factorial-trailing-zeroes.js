/**
 * @param {number} n
 * @return {number}
 */


// Primeira parte do método de recursão
// É preciso lembrar que você não terá apenas uma chamada, mas diversas chamadas "aninhadas"

// Cada chamada: num === "?"      	         num * factorialize(num - 1)
// 1ª chamada – factorialize(5) retornará    5  * factorialize(5 - 1) // factorialize(4)
// 2ª chamada – factorialize(4) retornará    4  * factorialize(4 - 1) // factorialize(3)
// 3ª chamada – factorialize(3) retornará    3  * factorialize(3 - 1) // factorialize(2)
// 4ª chamada – factorialize(2) retornará    2  * factorialize(2 - 1) // factorialize(1)
// 5ª chamada – factorialize(1) retornará    1  * factorialize(1 - 1) // factorialize(0)

// Segunda parte do método de recursão
// O método chega na condição do if, retorna 1, com o qual num será multiplicado
// A função sairá retornando o valor total

// A 5ª chamada retornará (5 * (5 - 1))     // num = 5 * 4
// A 4ª chamada retornará (20 * (4 - 1))    // num = 20 * 3
// A 3ª chamada retornará (60 * (3 - 1))    // num = 60 * 2
// A 2ª chamada retornará (120 * (2 - 1))   // num = 120 * 1
// A 1ª chamada retornará (120)             // num = 120

// Se somarmos todas as chamadas em uma linha, temos
// (5 * (5 - 1) * (4 - 1) * (3 - 1) * (2 - 1)) = 5 * 4 * 3 * 2 * 1 = 120


//Time Limit Exceeded ?
// function factorial(num){

//         if (num < 0) return -1;
//         if (num == 0) return 1; 

//         return BigInt(num) * BigInt(factorial(num - 1));
//     }


// var trailingZeroes = function(n) {

//     const result = factorial(n).toString();
//     const len = result.length - 1;
//     let count = 0;
//     let number = result[len];
//       while(number == '0' && len - count > 1){
//          count++;
//          number = result[len - count];  
//       }
//     return count;

// };



// function trailingZeroes(n) {
//     let res = 0;
//     while( n > 0 ){
//         n = Math.floor(n/5);
//         res += n;
//     }
//     return res;
// };

/**
 * @param {number} n
 * @return {number}
 */
var trailingZeroes = function(n) {
    if(n===0)
    return 0;
    
    let nFac = 1;
    nFac = BigInt(nFac);
    for (let i = 1; i <= n; i++) 
    nFac *= BigInt(i);

    const op=nFac.toString().split("").reverse();
    let count=0;
    for(let i=0;i<op.length;i++){
        if(op[i]==='0')
        count++;
        else
        break;
    }
    return count;
};

// Intuition:
// To find the number of trailing zeros in the factorial of a given number, we need to understand that trailing zeros appear when a multiple of 10 is present in the factorial. A multiple of 10 can be obtained by multiplying 5 and 2. So, we only need to count the number of 5's present in the prime factors of the factorial.

// Approach:
// Initialize a variable res to store the count of trailing zeros, initially set to 0.
// Use a while loop to calculate the number of 5's in the prime factors of n.
// In each iteration, update n by dividing it by 5 using Math.floor(n / 5) to count the number of 5's in the current iteration.
// Add the count of 5's to res.
// Continue the loop until n becomes less than or equal to 0.
// Finally, return the value of res, which represents the number of trailing zeros in n!.
// Complexity:
// Time complexity: The time complexity of this approach is O(log(n)) because in each iteration, we are reducing the value of n by dividing it by 5, and this process continues until n becomes less than 5.
// Space complexity: The space complexity is O(1) because we are using only a constant amount of extra space to store the res variable.