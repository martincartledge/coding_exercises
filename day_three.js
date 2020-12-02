// https://www.hackerrank.com/challenges/js10-arrays/problem

/**
 *   Return the second largest number in the array.
 *   @param {Number[]} nums - An array of numbers.
 *   @return {Number} The second largest number in the array.
 **/
function getSecondLargest(nums) {
  let highest;
  let secondHighest;
  for (let i = 0; i < nums.length; i++) {
    if (!highest) highest = nums[i];
    if (!secondHighest) secondHighest = nums[i];
    if (highest < nums[i]) highest = nums[i];
    if (secondHighest < nums[i] && highest !== nums[i]) {
      secondHighest = nums[i];
    } else if (
      secondHighest < nums[i - 1] &&
      highest !== nums[i - 1] &&
      highest > nums[i - 1]
    ) {
      secondHighest = nums[i - 1];
    } else if (
      secondHighest < nums[i + 1] &&
      highest !== nums[i + 1] &&
      highest > nums[i + 1]
    ) {
      secondHighest = nums[i + 1];
    }
  }
  return secondHighest;
}

// https://www.hackerrank.com/challenges/js10-try-catch-and-finally/problem

/*
 * Complete the reverseString function
 * Use console.log() to print to stdout.
 */
function reverseString(s) {
  let rev;
  try {
    rev = s.split("").reverse().join("");
  } catch (err) {
    console.log(err.message);
    rev = s;
  } finally {
    console.log(rev);
  }
}

// https://www.hackerrank.com/challenges/js10-throw/problem

/*
 * Complete the isPositive function.
 * If 'a' is positive, return "YES".
 * If 'a' is 0, throw an Error with the message "Zero Error"
 * If 'a' is negative, throw an Error with the message "Negative Error"
 */
function isPositive(a) {
  if (a > 0) {
    return "YES";
  }
  if (a === 0) {
    throw new Error("Zero Error");
  }
  if (a < 0) {
    throw new Error("Negative Error");
  }
}
