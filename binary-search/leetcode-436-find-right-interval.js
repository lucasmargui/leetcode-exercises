
// Code
// Testcase
// Test Result
// Test Result
// 436. Find Right Interval
// Solved
// Medium
// Topics
// Companies
// You are given an array of intervals, where intervals[i] = [starti, endi] and each starti is unique.

// The right interval for an interval i is an interval j such that startj >= endi and startj is minimized. Note that i may equal j.

// Return an array of right interval indices for each interval i. If no right interval exists for interval i, then put -1 at index i.

 

// Example 1:

// Input: intervals = [[1,2]]
// Output: [-1]
// Explanation: There is only one interval in the collection, so it outputs -1.
// Example 2:

// Input: intervals = [[3,4],[2,3],[1,2]]
// Output: [-1,0,1]
// Explanation: There is no right interval for [3,4].
// The right interval for [2,3] is [3,4] since start0 = 3 is the smallest start that is >= end1 = 3.
// The right interval for [1,2] is [2,3] since start1 = 2 is the smallest start that is >= end2 = 2.
// Example 3:

// Input: intervals = [[1,4],[2,3],[3,4]]
// Output: [-1,2,-1]
// Explanation: There is no right interval for [1,4] and [3,4].
// The right interval for [2,3] is [3,4] since start2 = 3 is the smallest start that is >= end1 = 3.

var findRightInterval = function(intervals) {
    let ans = [];
    let n = intervals.length;
    const indexedIntervals = intervals.map((interval, index) => ({ interval, index }));
     indexedIntervals.sort((a, b) => a.interval[0] - b.interval[0]);

    const result = new Array(intervals.length).fill(-1);

    for (const { interval, index } of indexedIntervals) {
        const end = interval[1];
        
        // Binary search for the smallest starting point that is >= end
        let left = 0;
        let right = indexedIntervals.length - 1;
        while (left <= right) {
            const mid = Math.floor((left + right) / 2);
            if (indexedIntervals[mid].interval[0] >= end) {
                result[index] = indexedIntervals[mid].index;
                right = mid - 1; // try to find a smaller valid interval
            } else {
                left = mid + 1;
            }
        }
    }

    return result;
}