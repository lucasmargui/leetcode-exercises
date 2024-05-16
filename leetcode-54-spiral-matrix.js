
// Given an m x n matrix, return all elements of the matrix in spiral order.

 

// Example 1:


// Input: matrix = [[1,2,3],[4,5,6],[7,8,9]]
// Output: [1,2,3,6,9,8,7,4,5]
// Example 2:


// Input: matrix = [[1,2,3,4],[5,6,7,8],[9,10,11,12]]
// Output: [1,2,3,4,8,12,11,10,9,5,6,7]
 

// Constraints:

// m == matrix.length
// n == matrix[i].length
// 1 <= m, n <= 10
// -100 <= matrix[i][j] <= 100

var spiralOrder = function(matrix) {
    const res = []
    while(matrix.length){
      //TOP
      //add the first array and remove from the matrix
      const first = matrix.shift()
      res.push(...first)
  
      //looping
      for(const m of matrix){
  
       //RIGHT
       //for each array get the last value and remove from the array
        let val = m.pop()
        console.log(val)
        
        if(val != undefined)
          //add last value
          res.push(val)
  
          //reverse the array
          m.reverse()  
      }
      //reverse matrix and start the logic from beggining
      matrix.reverse()
      
  
    }
    return res
  };