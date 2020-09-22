/*
Given two integer arrays, return their intersection.
Note: the intersection is the set of elements that are common to both arrays.
*/

function findIntersection(arr1, arr2) {
  if (arr1.length === 0 || arr2.length === 0) {
    return [];
  }
  const lookup = new Map();

  const intersection = new Set();

  for (num1 of arr1) {
    if (!lookup.get(num1)) {
      lookup.set(num1, num1);
    }
  }

  for (num2 of arr2) {
    if (lookup.get(num2)) {
      intersection.add(num2);
    }
  }

  return Array.from(intersection);
}

const findIntersection = (arr1, arr2) => {
  if (arr1.length === 0 || arr2.length === 0) {
    return [];
  }
  const lookup = new Map();

  const intersection = new Set();

  for (num1 of arr1) {
    if (!lookup.get(num1)) {
      lookup.set(num1, num1);
    }
  }

  for (num2 of arr2) {
    if (lookup.get(num2)) {
      intersection.add(num2);
    }
  }

  return Array.from(intersection);
};

// findIntersection([1,2,3], [1,5,6]); // [1]

// findIntersection([2, 4, 4, 2], [2, 4]); // [2, 4]

// findIntersection([1, 2, 3, 3], [3, 3]); // [3]

// findIntersection([2, 4, 6, 8], [1, 3, 5, 7]); // []
