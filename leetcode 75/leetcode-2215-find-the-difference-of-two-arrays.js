
// Given two 0-indexed integer arrays nums1 and nums2, return a list answer of size 2 where:

// answer[0] is a list of all distinct integers in nums1 which are not present in nums2.
// answer[1] is a list of all distinct integers in nums2 which are not present in nums1.
// Note that the integers in the lists may be returned in any order.

 

// Example 1:

// Input: nums1 = [1,2,3], nums2 = [2,4,6]
// Output: [[1,3],[4,6]]
// Explanation:
// For nums1, nums1[1] = 2 is present at index 0 of nums2, whereas nums1[0] = 1 and nums1[2] = 3 are not present in nums2. Therefore, answer[0] = [1,3].
// For nums2, nums2[0] = 2 is present at index 1 of nums1, whereas nums2[1] = 4 and nums2[2] = 6 are not present in nums2. Therefore, answer[1] = [4,6].
// Example 2:

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[][]}
 */



var findDifference = function(nums1, nums2) {
    const set1 = new Set(nums1);
    const set2 = new Set(nums2);

    const diff12 = nums1.filter((num) => !set2.has(num));
    const diff21 = nums2.filter((num) => !set1.has(num));

    return [Array.from(new Set(diff12)), Array.from(new Set(diff21))]
};



// var findDifference = function(nums1, nums2) {


//     var hashmap1 = new Set([...nums1]);
//     var hashmap2 = new Set([...nums2]);

//     let distinct1 = [];
//     let distinct2 = [];

//     let i ;

//     for(i = 0; i < nums1.length; i++){
//         if(!(hashmap2.has(nums1[i]))){
//             if(!(distinct1.includes(nums1[i]))){
//                 distinct1.push(nums1[i]);
//             }
            
//         }
//     }
//     for(i = 0; i < nums2.length; i++){
//         if(!(hashmap1.has(nums2[i]))){
//             if(!(distinct2.includes(nums2[i]))){
//                  distinct2.push(nums2[i]);
//             }   
//         }
//     }

//     return [distinct1,distinct2]
    
// };