// Given an array of integers, return whether or not two numbers sum to a given target.

// es5
function twoSum(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === target) {
        return [`${arr[i]} + ${arr[j]}`, true];
      }
    }
  }
  return false;
}

// es6
const twoSum = (arr, target) => {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === target) {
        return [`${arr[i]} + ${arr[j]}`, true];
      }
    }
  }
  return false;
};

// twoSum([1, 3, 8, 2], 10); // true

// twoSum([3, 9, 13, 7], 8); // false

// twoSum([4, 2, 6, 5, 2], 4); // true
