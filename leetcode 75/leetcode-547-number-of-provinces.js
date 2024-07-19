// 547. Number of Provinces
// Solved
// Medium
// Topics
// Companies
// There are n cities. Some of them are connected, while some are not. If city a is connected directly with city b, and city b is connected directly with city c, then city a is connected indirectly with city c.

// A province is a group of directly or indirectly connected cities and no other cities outside of the group.

// You are given an n x n matrix isConnected where isConnected[i][j] = 1 if the ith city and the jth city are directly connected, and isConnected[i][j] = 0 otherwise.

// Return the total number of provinces.


var findCircleNum = function(isConnected) {

    var queue = [];
    var visited = new Array(isConnected.length).fill(false);
    var countVisited = 0;

    for(let i = 0; i < isConnected.length; i++){
        
        let visitedCityStatus = visited[i];

        if(visitedCityStatus === false){
            queue.push(i);
            countVisited++;
        }

        while(queue.length > 0){
    
            let city = queue.shift();

            let cityQueueStatus = visited[city];

            if(cityQueueStatus === false){

                for(let cityAdj = 0; cityAdj < isConnected[city].length; cityAdj++){

                    let cityConnected = isConnected[city][cityAdj];
                  
                    if(cityConnected == 1 && visited[cityAdj] === false){
                        queue.push(cityAdj);              
                    }
                }
                
                visited[city] = true;   
            }
            
         }

    }

    return countVisited
    
};