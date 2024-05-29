// There are a total of numCourses courses you have to take, labeled from 0 to numCourses - 1. You are given an array prerequisites where prerequisites[i] = [ai, bi] indicates that you must take course bi first if you want to take course ai.

// For example, the pair [0, 1], indicates that to take course 0 you have to first take course 1.
// Return true if you can finish all courses. Otherwise, return false.

 

// Example 1:

// Input: numCourses = 2, prerequisites = [[1,0]]
// Output: true
// Explanation: There are a total of 2 courses to take. 
// To take course 1 you should have finished course 0. So it is possible.
// Example 2:

// Input: numCourses = 2, prerequisites = [[1,0],[0,1]]
// Output: false
// Explanation: There are a total of 2 courses to take. 
// To take course 1 you should have finished course 0, and to take course 0 you should also have finished course 1. So it is impossible.
 

// Constraints:

// 1 <= numCourses <= 2000
// 0 <= prerequisites.length <= 5000
// prerequisites[i].length == 2
// 0 <= ai, bi < numCourses
// All the pairs prerequisites[i] are unique.



/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var canFinish = function(numCourses, prerequisites) {

    let indegrees = new Array(numCourses).fill(0);
    let graph = Array.from({ length: numCourses }, () => []);
    for(let i = 0; i < prerequisites.length; i++){
        let course = prerequisites[i][1];
        let prerequisite = prerequisites[i][0];
        indegrees[prerequisite] += 1;
        graph[course].push(prerequisite)
    }
    var queue = [];
    for(let j = 0; j < indegrees.length; j++){
        if(indegrees[j] == 0){
            queue.push(j);
        }
    }
    var visited = 0;
    while(queue.length > 0){
        let node = queue.pop();
        visited += 1;
        let neighboors = graph[node];
        for(let x = 0; x < neighboors.length; x++){
            indegrees[neighboors[x]] -= 1;
            if(indegrees[neighboors[x]] == 0){
                queue.push(neighboors[x]);
            }
        }      
    }
 return numCourses == visited

};