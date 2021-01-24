// https://leetcode.com/problems/single-number/

const singleNumber = (nums) => {
  if (!nums) return [];

  const table = {};

  let notRepeated;

  for (let n of nums) {
    table[n] = (table[n] || 0) + 1;
  }

  for (let num in table) {
    if (table[num] === 1) {
      notRepeated = num;
      break;
    }
  }
  return notRepeated;
};
