//leetcode.com/problems/license-key-formatting/

https: var licenseKeyFormatting = function (S, K) {
  let result = new Array();
  let count = 0;
  let pointer = S.length - 1;
  let current;

  while (pointer >= 0) {
    current = S.charAt(pointer).toUpperCase();
    if (current === "-") {
      pointer--;
    } else if (count !== 0 && count % K === 0) {
      result.unshift("-");
      count = 0;
    } else {
      result.unshift(current);
      count++;
      pointer--;
    }
  }
  return result.join("");
};
