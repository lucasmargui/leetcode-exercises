// 171. Excel Sheet Column Number
// Solved
// Easy
// Topics
// Companies
// Given a string columnTitle that represents the column title as appears in an Excel sheet, return its corresponding column number.

// For example:

// A -> 1
// B -> 2
// C -> 3
// ...
// Z -> 26
// AA -> 27
// AB -> 28 
// ...
 

// Example 1:

// Input: columnTitle = "A"
// Output: 1
// Example 2:

// Input: columnTitle = "AB"
// Output: 28
// Example 3:

// Input: columnTitle = "ZY"
// Output: 701


// /**
//  * @param {string} columnTitle
//  * @return {number}
//  */
//  const titleToNumber = function(columnTitle) {
//     const columnObj = {
//         "A": 1,
//         "B": 2,
//         "C": 3,
//         "D": 4,
//         "E": 5,
//         "F": 6,
//         "G": 7,
//         "H": 8,
//         "I": 9,
//         "J": 10,
//         "K": 11,
//         "L": 12,
//         "M": 13,
//         "N": 14,
//         "O": 15,
//         "P": 16,
//         "Q": 17,
//         "R": 18,
//         "S": 19,
//         "T": 20,
//         "U": 21,
//         "V": 22,
//         "W": 23,
//         "X": 24,
//         "Y": 25,
//         "Z": 26,
//     }

//     if (columnTitle.length == 1) return columnObj[columnTitle]
//     let sum = 0
//     const n = columnTitle.length
//     for(let i = 0; i < n;i++){
//         //Example AAA = 703
//         //noticed 1st A we use 26^2 = 676
//         //2nd A is 26^1 =              26
//         //3rd A is just 1 in the obj  + 1
//         //                    total:  703
//         const currChar = columnTitle[i]
//         const formula = columnObj[currChar] * (Math.pow(26,n - i - 1) || 1)
//         sum += formula
//     }
//     return sum
// }


/**
 * @param {string} columnTitle
 * @return {number}
 */
 var titleToNumber = function(columnTitle) {

    let result = 0;
    let length = columnTitle.length;
    for(let i = 0; i < length; i++){

        //AB
        //1 * Math.pow(26, 2 - (0 + 1)) = 1 * 26
        //2 * Math.pow(26, 2 - (1 + 1)) = 2 * 1

        //AAA
        //1 * Math.pow(26, 3 - (0 + 1)) = 1 * 676
        //1 * Math.pow(26, 3 - (1 + 1)) = 2 * 26
        //1 * Math.pow(26, 3 - (2 + 1)) = 1 * 1


        result += (columnTitle.charCodeAt(i) - 64) * Math.pow(26, length - (i + 1));
    }
    return result;
};