/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function (rowIndex) {
  var pascalArray = [];
  var index = 0;

  while (index <= rowIndex) {
    if (index == 0) {
      pascalArray.push([1]);
    } else if (index == 1) {
      pascalArray.push([1, 1]);
    } else {
      var subIndex = 0;
      var subArray = pascalArray[index - 1];
      var newSubArray = [];
      newSubArray.push(1);

      while (subIndex < subArray.length - 1) {
        newSubArray.push(subArray[subIndex] + subArray[subIndex + 1]);

        subIndex++;
      }

      newSubArray.push(1);
      pascalArray.push(newSubArray);
    }

    index++;
  }

  return pascalArray[rowIndex];
};
