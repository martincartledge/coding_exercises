// https://leetcode.com/problems/running-sum-of-1d-array/

var runningSum = function (nums) {
  let currentTotal = 0;

  const result = [];

  for (let i = 0; i < nums.length; i++) {
    currentTotal += nums[i];
    result.push(currentTotal);
  }

  return result;
};

// runningSum([1,2,3,4]); // [1,3,6,10]
// runningSum([1,1,1,1,1]); // [1,2,3,4,5]
// runningSum([3,1,2,10,1]); // [3,4,6,16,17]
