The string "PAYPALISHIRING" is written in a zigzag pattern on a given number of rows like this: (you may want to display this pattern in a fixed font for better legibility)

P   A   H   N
A P L S I I G
Y   I   R
And then read line by line: "PAHNAPLSIIGYIR"

Write the code that will take a string and make this conversion given a number of rows:

string convert(string s, int numRows);
 

Example 1:

Input: s = "PAYPALISHIRING", numRows = 3
Output: "PAHNAPLSIIGYIR"
Example 2:

Input: s = "PAYPALISHIRING", numRows = 4
Output: "PINALSIGYAHRPI"
Explanation:
P     I    N
A   L S  I G
Y A   H R
P     I
Example 3:

Input: s = "A", numRows = 1
Output: "A"
 


/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
    let k=0,j,diagonal;
    let diff=numRows*2-2;
    let finalArray=[];
    let size=s.length;
    if(numRows==1)
    {
        return s;
    }
    for(i=0;i<numRows;i++)
    {
        j=i;
        diagonal=diff-i;
        while(j<size || diagonal<size)
        {
            if(j<size)
            {
                finalArray[k++]=s[j];
            }
            if(diagonal%diff!=0 && diagonal<size && diagonal!=j)
            {
                finalArray[k++]=s[diagonal];
            }
            diagonal+=diff;
            j+=diff;
        }
    }
    return finalArray.join("");
};