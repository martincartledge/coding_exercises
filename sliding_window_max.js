const populate = (list, idx, size) => {
  let tempMax = 0;
  let tempList = [];
  let count = 0;
  while (count < size) {
    tempList.push(list[idx]);
    count++;
    idx++;
  }
  tempMax = Math.max(...tempList);
  return tempMax;
};

const maxSlidingWindow = (nums, k) => {
  // create an array that contains max sliding window values
  const maxSlidingValues = [];

  if (nums.length === 1) return nums;

  let current = 0,
    max = 0;

  while (current < nums.length) {
    max = populate(nums, current, k);
    maxSlidingValues.push(max);
    current++;
  }

  const cleanValues = maxSlidingValues.filter((n) => !Number.isNaN(n));

  // return array of max sliding window values
  return cleanValues;
};
