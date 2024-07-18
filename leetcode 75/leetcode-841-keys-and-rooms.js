
// 841. Keys and Rooms
// Solved
// Medium
// Topics
// Companies
// There are n rooms labeled from 0 to n - 1 and all the rooms are locked except for room 0. Your goal is to visit all the rooms. However, you cannot enter a locked room without having its key.

// When you visit a room, you may find a set of distinct keys in it. Each key has a number on it, denoting which room it unlocks, and you can take all of them with you to unlock the other rooms.

// Given an array rooms where rooms[i] is the set of keys that you can obtain if you visited room i, return true if you can visit all the rooms, or false otherwise.

 

// Example 1:

// Input: rooms = [[1],[2],[3],[]]
// Output: true
// Explanation: 
// We visit room 0 and pick up key 1.
// We then visit room 1 and pick up key 2.
// We then visit room 2 and pick up key 3.
// We then visit room 3.
// Since we were able to visit every room, we return true.
// Example 2:

// Input: rooms = [[1,3],[3,0,1],[2],[0]]
// Output: false
// Explanation: We can not enter room number 2 since the only key that unlocks it is in that room.

var canVisitAllRooms = function(rooms) {
    let visited = new Array(rooms.length).fill(false);
    let stack = [0];  // Start from room 0
    visited[0] = true;  // Mark room 0 as visited

    while (stack.length > 0) {
        let room = stack.pop();
        for (let key of rooms[room]) {
            if (!visited[key]) {
                visited[key] = true;  // Mark this room as visited
                stack.push(key);  // Add this room to the stack to visit later
            }
        }
    }

    // Check if all rooms are visited
    for (let i = 0; i < visited.length; i++) {
        if (!visited[i]) {
            return false;
        }
    }

    return true;
};


var canVisitAllRooms = function(rooms) {

    var keys = new Set();

    keys.add(0);
    

    var dfs = (index) => {

       if(rooms[index].length == 0) return;

       if(rooms[index].length > 0){

            let keysInRoom = rooms[index].slice();
            keys.add(...keysInRoom);
            rooms[index] = []

            for(let i = 0; i < keysInRoom.length; i++){
                    
                    dfs(keysInRoom[i]);
            }
            
       }

    

    }

    dfs(0);

  
     for(let i = 0; i < rooms.length; i++){

        if(rooms[i].length > 0) return false;

     }

    return true;
};