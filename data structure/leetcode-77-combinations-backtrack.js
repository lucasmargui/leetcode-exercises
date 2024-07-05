/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function(n, k) {
    const res = [];
    const comb = [];


    var backtrack = (start) =>{

         if (comb.length === k) {
            res.push([...comb]);
            return;
        }
        //backtrack(1);
        ////for (let num = 1; 1 <= 4; num++)
        ////////backtrack(2) =>  comb.length === k => GOAL
        ////////backtrack(3) =>  comb.length === k => GOAL
        ////////backtrack(4) =>  comb.length === k => GOAL
        //backtrack(2);
        ////for (let num = 2; 2 <= 4; num++)
        ////////backtrack(3) =>  comb.length === k => GOAL
        ////////backtrack(4) =>  comb.length === k => GOAL
        //backtrack(3);
        ////for (let num = 3; 3 <= 4; num++)
        ////////backtrack(4) =>  comb.length === k => GOAL

        for (let num = start; num <= n; num++) {
            comb.push(num);
            backtrack(num + 1);
            comb.pop();

            //[]        FIRST LOOP
            ////[1]     =>  comb.push(num);
            ////[1,2]       =>  backtrack(1 + 1); => comb.push(num);
            ////[1]         =>  comb.pop();
            ////[1,3]       =>  backtrack(2 + 1); => comb.push(num);
            ////[1]         =>  comb.pop();
            ////[1,4]       =>  backtrack(3 + 1); => comb.push(num);
            ////[1]         =>  comb.pop();
            //          SECOND LOOP
            //[]        =>  comb.pop();
            ////[2]     =>  comb.push(num);
            ///////[2,3]    =>  backtrack(2 + 1); => comb.push(num);
            ////[2]         =>  comb.pop();
            ///////[2,4]    =>  backtrack(3 + 1); => comb.push(num);
            ////[2]         =>  comb.pop();
            //          THIRD LOOP
            //[]        =>  comb.pop();
            ////[3]     =>  comb.push(num);
            ///////[3,4]    =>  backtrack(3 + 1); => comb.push(num); 
            ////[3]         =>  comb.pop();
            //[]        =>  comb.pop();
        }

    }

   
    backtrack(1);
    return res;    
};