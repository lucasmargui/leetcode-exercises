// 74. Search a 2D Matrix
// Solved
// Medium
// Topics
// Companies
// You are given an m x n integer matrix matrix with the following two properties:

// Each row is sorted in non-decreasing order.
// The first integer of each row is greater than the last integer of the previous row.
// Given an integer target, return true if target is in matrix or false otherwise.

// You must write a solution in O(log(m * n)) time complexity.

 

// Example 1:


// Input: matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]], target = 3
// Output: true
// Example 2:


// Input: matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]], target = 13
// Output: false


/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
    let start = 0, end = matrix.length * matrix[0].length - 1;
    //console.log(start, end)

    while (start <= end) {
        let mid = Math.floor((end + start) / 2);
        let midRow = Math.floor(mid / matrix[0].length);
        let midCol = Math.floor(mid % matrix[0].length);
        //console.log(`start: ${start}, end: ${end}, mid: ${mid}, midRow: ${midRow}, midCol: ${midCol}`)

        if (matrix[midRow][midCol] === target) return true;

        if (matrix[midRow][midCol] > target) {
            end = mid - 1;
        } else {
            start = mid + 1;
        }
    }

    //console.log(start, end);

    return false;
};


/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {

    var rowBase = matrix.length;
    var colBase = matrix[0].length;

    var search = (arr) => {

        
        let middle = Math.floor(arr.length / 2);
        let middleArr = arr[middle];
        let newArr;

        if(target < middleArr[0]){
            newArr = arr.slice(0, middle)
        }
        if(target > middleArr[colBase - 1]){
            newArr = arr.slice(middle + 1)
        }
        if(target >= middleArr[0] && target <= middleArr[colBase - 1]){
              return middleArr.includes(target);
          }
          
        if(newArr.length > 0){
            return search(newArr)
        }else{
            return false;
        }
    }

    if(target >= matrix[0][0] && target <= matrix[rowBase - 1][colBase - 1]){
       return search(matrix);
    }
    return false;
};