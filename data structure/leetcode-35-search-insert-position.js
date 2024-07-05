/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
 var searchInsert = function(nums, target) {

    var searchInitial = 0;
    var searchFinal = nums.length;
    var searchComparation = Math.floor(searchInitial + searchFinal / 2);
    var tableLength = nums.length;
    var insertIndex;
  
    while (tableLength > 0) {
        
      if (target == nums[searchComparation]) {
        insertIndex = searchComparation;
        break;
      } else if (target > nums[searchComparation]) {
        searchInitial = searchComparation;
        searchComparation = Math.floor((searchInitial + searchFinal) / 2);
      } else if (target < nums[searchComparation]) {
        searchFinal = searchComparation;
        searchComparation = Math.floor((searchInitial + searchFinal) / 2);
      }
  
      tableLength = Math.floor(tableLength / 2);
    }
  
    if (insertIndex != undefined) {
      return insertIndex;
    } else {
     return searchFinal;
    }
      
  };