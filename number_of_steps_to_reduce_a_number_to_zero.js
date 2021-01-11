//https://leetcode.com/problems/number-of-steps-to-reduce-a-number-to-zero/

var numberOfSteps = function (num) {
  // check for non-null, positive number
  // if num is not, return 0
  if (!num || num <= 0) return 0;
  // create counter variable that will store steps
  // to get num to 0. initialize with the value 0
  let steps = 0;
  // create a copy of num to avoid mutating a parameter
  // use let variable declaration because it will be reassigned
  let n = num;
  // need to iterate until n is 0
  while (n !== 0) {
    if (n % 2 === 0) {
      n = n / 2;
    } else {
      n -= 1;
    }
    steps++;
  }

  return steps;
};

// numberOfSteps(14); // 6
// numberOfSteps(8); // 4
// numberOfSteps(123); // 12
