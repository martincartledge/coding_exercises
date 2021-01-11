// https://leetcode.com/problems/two-sum/

var twoSum = function (nums, target) {
  let currentIdx = 0;
  let nextIdx = 1;

  let pairSum = [];

  while (currentIdx < nums.length) {
    if (nums[currentIdx] + nums[nextIdx] === target) {
      pairSum.push(currentIdx, nextIdx);
      break;
    }
    if (nextIdx >= nums.length) {
      currentIdx++;
      nextIdx = currentIdx + 1;
    } else {
      nextIdx++;
    }
  }
  return pairSum;
};

// twoSum([2,7,11,15], 9); // [0, 1]
// twoSum([3,2,4], 6); // [1, 2]
// twoSum([3,3], 6); // [0, 1]
// twoSum([3,2,3], 6) // [0, 2]
// twoSum([3,2,4], 6) // [1, 2]
