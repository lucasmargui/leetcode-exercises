/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
  var arr = x;
  var arrReversed = arr.toString().split("").reverse();

  const sumWithInitial = parseInt(
    arrReversed.reduce(
      (accumulator, currentValue) => accumulator + currentValue
    )
  );

  if (x < 0) {
    return false;
  } else if (x == sumWithInitial) {
    return true;
  } else {
    return false;
  }
};
