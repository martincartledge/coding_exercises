// https://leetcode.com/problems/reverse-string/

const reverseString = (s) => {
  let right = s.length - 1;
  let left = 0;
  let temp;

  while (left < right) {
    temp = s[left];
    s[left++] = s[right];
    s[right--] = temp;
  }

  return s;
};

// reverseString(["h","e","l","l","o"]); // ["o","l","l","e","h"]
// reverseString(["H","a","n","n","a","h"]); // ["h","a","n","n","a","H"]
