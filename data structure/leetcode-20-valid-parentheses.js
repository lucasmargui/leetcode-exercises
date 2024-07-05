// Online Javascript Editor for free
// Write, Edit and Run your Javascript code using JS Online Compiler
function teste() {
    var s = "([)]";
    
    
 let stk = []; // Initialize an empty stack to store opening parentheses
 // Iterate through each character in the string
 for (const c of s) {
     
      console.log(stk);
     
     // If the character is an opening parenthesis, push it onto the stack
     if (c == '(' || c == '{' || c == '[') {
         stk.push(c);
       
     }  
     else if(match(stk[stk.length - 1], c)) {
         // If there's a match, pop the corresponding opening parenthesis from the stack
         stk.pop();
         
     } else if (stk.length == 0 || !match(stk[stk.length - 1], c)) {
         // If the character is a closing parenthesis, check if it matches the top of the stack
         // If the stack is empty or there's no match, return false
         console.log(false);
     } 
 }
 // After processing all characters, the stack should be empty if all parentheses are balanced
 console.log(stk.length == 0);
};


function match(l, r) {
 return (l == '(' && r == ')') || (l == '[' && r == ']') || (l == '{' && r == '}');
}

teste();