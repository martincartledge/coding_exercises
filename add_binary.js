/*
Given two binary strings (strings containing only 1s and 0s) return their sum (also as a binary string).
Note: neither binary string will contain leading 0s unless the string itself is 0

"100" + "1", return "101"
"11" + "1", return "100"
"1" + "0", return  "1"
*/

function add(str1, str2) {
  const lookup = {
    1: 1,
    2: 2,
    3: 4,
    4: 8,
    5: 16,
    6: 32,
    7: 64,
    8: 128,
  };

  const isOne = (value) => value === "1";

  let oneSum = 0;
  let oneLength = str1.length;

  for (one of str1.split("")) {
    if (isOne(one)) {
      oneSum += lookup[oneLength];
    }
    oneLength--;
  }

  let twoSum = 0;
  let twoLength = str2.length;

  for (two of str2.split("")) {
    if (isOne(two)) {
      twoSum += lookup[twoLength];
    }
    twoLength--;
  }

  return convert(oneSum + twoSum);
}

function convert(sum) {
  const lookup = {
    1: 128,
    2: 64,
    3: 32,
    4: 16,
    5: 8,
    6: 4,
    7: 2,
    8: 1,
  };
  let binaryArr = [];
  let total = sum;
  for (const [_, value] of Object.entries(lookup)) {
    if (total >= value) {
      binaryArr.push("1");
      total = total - value;
    } else {
      binaryArr.push("0");
    }
  }
  return binaryArr.join("");
}

// add("100", "1"); // 5 // return "101"
// add("11", "1"); // 4 // return "100"
// add("1", "0"); // 1 // return  "1"
