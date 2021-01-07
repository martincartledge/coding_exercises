// https://leetcode.com/problems/how-many-numbers-are-smaller-than-the-current-number/

var smallerNumbersThanCurrent = function (nums) {
  if (!nums || !nums.length) return [];
  if (nums.length < 2) return [1];

  let sortedNums = [...nums].sort((a, b) => a - b);

  let cache = new Map();

  let smallerCollection = nums.map((n) => {
    if (!cache.has(n)) {
      cache.set(n, sortedNums.indexOf(n));
    }
    return cache.get(n);
  });

  return smallerCollection;
};

// smallerNumbersThanCurrent([99]) // [1]
// smallerNumbersThanCurrent([8,1,2,2,3]); // [4,0,1,1,3]
// smallerNumbersThanCurrent([6,5,4,8]); // [2,1,0,3]
// smallerNumbersThanCurrent([7,7,7,7]); // [0,0,0,0]
