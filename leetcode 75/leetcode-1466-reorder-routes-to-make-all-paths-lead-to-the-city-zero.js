
// 1466. Reorder Routes to Make All Paths Lead to the City Zero
// Solved
// Medium
// Topics
// Companies
// Hint
// There are n cities numbered from 0 to n - 1 and n - 1 roads such that there is only one way to travel between two different cities (this network form a tree). Last year, The ministry of transport decided to orient the roads in one direction because they are too narrow.

// Roads are represented by connections where connections[i] = [ai, bi] represents a road from city ai to city bi.

// This year, there will be a big event in the capital (city 0), and many people want to travel to this city.

// Your task consists of reorienting some roads such that each city can visit the city 0. Return the minimum number of edges changed.

// It's guaranteed that each city can reach city 0 after reorder

var minReorder = function(n, connections) {


    var edges = new Set(connections.map(([a,b]) => `${a},${b}` ))
    var neighbors = new Array(n).fill().map(() => []);


    for(let [a,b] of connections){
        neighbors[a].push(b)
        neighbors[b].push(a)
    }

        let visit = new Set();
        let changes = 0;
        
        // Define DFS function
        function dfs(city) {
            for (let neighbor of neighbors[city]) {
                if (!visit.has(neighbor)) {
                    // Check if neighbor can reach city
                    if (!edges.has(`${neighbor},${city}`)) {
                        changes++;
                    }
                    visit.add(neighbor);
                    dfs(neighbor);
                }
            }
        }
        
        visit.add(0);
        dfs(0);
        
        return changes;


};