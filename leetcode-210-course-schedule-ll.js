// There are a total of numCourses courses you have to take, labeled from 0 to numCourses - 1. You are given an array prerequisites where prerequisites[i] = [ai, bi] indicates that you must take course bi first if you want to take course ai.

// For example, the pair [0, 1], indicates that to take course 0 you have to first take course 1.
// Return the ordering of courses you should take to finish all courses. If there are many valid answers, return any of them. If it is impossible to finish all courses, return an empty array.

 

// Example 1:

// Input: numCourses = 2, prerequisites = [[1,0]]
// Output: [0,1]
// Explanation: There are a total of 2 courses to take. To take course 1 you should have finished course 0. So the correct course order is [0,1].
// Example 2:

// Input: numCourses = 4, prerequisites = [[1,0],[2,0],[3,1],[3,2]]
// Output: [0,2,1,3]
// Explanation: There are a total of 4 courses to take. To take course 3 you should have finished both courses 1 and 2. Both courses 1 and 2 should be taken after you finished course 0.
// So one correct course order is [0,1,2,3]. Another correct ordering is [0,2,1,3].
// Example 3:

// Input: numCourses = 1, prerequisites = []
// Output: [0]


/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {number[]}
 */
var findOrder = function(numCourses, prerequisites) {

    //1. Create array with empty values  

    var indegrees = new Array(numCourses).fill(0);
    var graph =  Array.from({ length: numCourses }, () => [])
    var orderCourses = [];

    //2. Populate arrays
    
    // indegrees => each index represents a course and each value of this index represents how many courses require this course as a prerequisite
    //              Ex: [0,1,1,2,0]
    //              index 3 with value 2 there are 2 courses that use course 3 as a prerequisite
    //
    // graph =>  each index represents a course and each value of this index represents a list with courses as a prerequisite
    
    for (let i = 0; i < prerequisites.length; i++){
        let course = prerequisites[i][1];
        let prerequisite = prerequisites[i][0];
        indegrees[prerequisite] += 1;
        graph[course].push(prerequisite);
    }

    //3. Populate queue with each indegrees == 0, starting with courses that are not prerequisites on the list, cutting off

    var queue = [];
    for(let j = 0; j < indegrees.length; j++){
        if(indegrees[j] == 0){    
            queue.push(j)
        }
    }
    //4. BFS search
    var visited = 0;
    while(queue.length > 0){
        let node = queue.pop();
        orderCourses.push(node);
        visited += 1;
   
        let neighboors = graph[node]; //  prerequisites for that course
        for(let x = 0; x < neighboors.length; x++){
            //4.1 cutting off how many courses require this course as a prerequisite
            indegrees[neighboors[x]] -= 1;
            //4.2 if the node after decrementing has the value 0, then it is no longer a prerequisite of any node and is added to the queue
            if(indegrees[neighboors[x]] == 0){
                queue.push(neighboors[x]);
            }
        }
    }
    return visited == numCourses ? orderCourses : [] 
};