
// Code
// Code
// Code Sample
// Testcase
// Testcase
// Test Result
// 118. Pascal's Triangle
// Solved
// Easy
// Topics
// Companies
// Given an integer numRows, return the first numRows of Pascal's triangle.

// In Pascal's triangle, each number is the sum of the two numbers directly above it as shown:


 

// Example 1:

// Input: numRows = 5
// Output: [[1],[1,1],[1,2,1],[1,3,3,1],[1,4,6,4,1]]
// Example 2:

// Input: numRows = 1
// Output: [[1]]
 

/**
 * @param {number} numRows
 * @return {number[][]}
 */
 var generate = function(numRows) {

    var pascalArray = [];
    var index = 0;

    while(index < numRows){

        if(index == 0){
            pascalArray.push([1]);
        }
        else if(index == 1){
            pascalArray.push([1,1]);
        }else{
            var subIndex = 0;
            var subArray = pascalArray[index - 1];
            var newSubArray = [];
            newSubArray.push(1);


            while(subIndex < subArray.length - 1){
                newSubArray.push(subArray[subIndex] + subArray[subIndex + 1])

                subIndex++;
            }


            newSubArray.push(1);
            pascalArray.push(newSubArray);

        }

        index++;


    }

    return pascalArray;


};