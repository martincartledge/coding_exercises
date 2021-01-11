// https://leetcode.com/problems/backspace-string-compare/

var backspaceCompare = function (S, T) {
  function build(str) {
    let strBuilder = [];
    for (let value of str) {
      if (value !== "#") strBuilder.push(value);
      else if (value) strBuilder.pop();
    }
    return strBuilder.join("");
  }

  return build(S) === build(T);
};

// backspaceCompare("ab#c", "ad#c"); // true
// backspaceCompare("ab##", "c#d#"); // true
// backspaceCompare("a##c", "#a#c"); // true
// backspaceCompare("a#c", "b"); // false
// backspaceCompare("xywrrmp", "xywrrmu#p") // true
