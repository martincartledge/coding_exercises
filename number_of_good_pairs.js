// https://leetcode.com/problems/number-of-good-pairs/

const numIdenticalPairs = (nums) => {
  if (!nums || nums.length === 0) return 0;

  let numGoodPairs = 0;
  let current = 0;
  let next = 1;

  while (current < nums.length) {
    if (nums[current] === nums[next]) {
      numGoodPairs++;
    }
    if (next > nums.length - 1) {
      current++;
      next = current;
    }
    next++;
  }

  return numGoodPairs;
};
