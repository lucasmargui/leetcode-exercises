// <!-- 56. Merge Intervals
// Solved
// Medium
// Topics
// Companies
// Given an array of intervals where intervals[i] = [starti, endi], merge all overlapping intervals, and return an array of the non-overlapping intervals that cover all the intervals in the input.

 

// Example 1:

// Input: intervals = [[1,3],[2,6],[8,10],[15,18]]
// Output: [[1,6],[8,10],[15,18]]
// Explanation: Since intervals [1,3] and [2,6] overlap, merge them into [1,6].
// Example 2:

// Input: intervals = [[1,4],[4,5]]
// Output: [[1,5]]
// Explanation: Intervals [1,4] and [4,5] are considered overlapping. -->
 

 /**
 * @param {number[][]} intervals
 * @return {number[][]}
 */


/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
    intervals.sort((a, b) => a[0] - b[0]);
    let ans = [intervals[0]]
    for(let i=1;i<intervals.length;i++){
        last = ans[ans.length -1];
        curr = intervals[i];
        if(last[1]>=curr[0]){
            last[1]=Math.max(last[1],curr[1])
        }
        else{
            ans.push(curr)
        }
    }
    return ans;
};


var merge = function(intervals) {

    var reduce = true;

    var i = 0;
    var j = 0;


    while(reduce){
        reduce = false;
        i = 0;
        while (i < intervals.length){
            j = 0;
            while(j < intervals.length){
                    if(intervals[i][1] >= intervals[j][0] && i != j && intervals[i][0] <= intervals[j][1] ){
                         intervals[i][1] = Math.max(intervals[j][1],intervals[i][1]);
                         intervals[i][0] = Math.min(intervals[j][0],intervals[i][0]); 
                         intervals.splice(j, 1);
                         reduce = true;
                         break;
                    }
                    j++;
                }
                i++;
            } 

        }
     
     return intervals;


    
    
};