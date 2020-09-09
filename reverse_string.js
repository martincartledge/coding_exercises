// es5 manual approach
function rev(str) {
  const arr = str.split("");
  const revArr = [];
  for (let i = 1; i < arr.length + 1; i++) {
    revArr.push(arr[arr.length - i]);
  }
  return revArr.join("");
}

// es6 manual approach
const rev = (str) => {
  const arr = str.split("");
  const revArr = [];
  for (let i = 1; i < arr.length + 1; i++) {
    revArr.push(arr[arr.length - i]);
  }
  return revArr.join("");
};

// es6 w/ js helper methods
const revStr = (input) => input.split("").reverse().join("");
