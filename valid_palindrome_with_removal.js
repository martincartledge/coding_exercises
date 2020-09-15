// Given a string and the ability to delete at most one character, return whether or not it can form a palindrome.

function validPalindrome(str) {
  const arr = str.split("");
  const ogArr = [];
  const revArr = [];
  let count = 0;
  let ogStr = "";
  let revStr = "";

  for (let i = 1; i < arr.length + 1; i++) {
    ogArr.push(arr[i - 1]);
    revArr.push(arr[arr.length - i]);
    revStr = revArr
      .join("")
      .replace(/[^0-9a-zA-Z]/g, "")
      .toLowerCase();
    ogStr = ogArr
      .join("")
      .replace(/[^0-9a-zA-Z]/g, "")
      .toLowerCase();
    if (revStr !== ogStr && count < 2) {
      if (revStr.length > ogStr.length) {
        revArr.pop();
        count++;
      } else {
        ogArr.pop();
        count++;
      }
    }
    return ogStr === revStr;
  }
}

const validPalindrome = (str) => {
  const arr = str.split("");
  const ogArr = [];
  const revArr = [];
  let count = 0;
  let ogStr = "";
  let revStr = "";

  for (let i = 1; i < arr.length + 1; i++) {
    ogArr.push(arr[i - 1]);
    revArr.push(arr[arr.length - i]);
    revStr = revArr
      .join("")
      .replace(/[^0-9a-zA-Z]/g, "")
      .toLowerCase();
    ogStr = ogArr
      .join("")
      .replace(/[^0-9a-zA-Z]/g, "")
      .toLowerCase();
    if (revStr !== ogStr && count < 2) {
      if (revStr.length > ogStr.length) {
        revArr.pop();
        count++;
      } else {
        ogArr.pop();
        count++;
      }
    }
    return ogStr === revStr;
  }
};

// validPalindrome("abcba"); // true

// validPalindrome("foobof"); // true

// validPalindrome("abccab") // false
