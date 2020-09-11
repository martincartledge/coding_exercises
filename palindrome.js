// Given a string, return whether or not it forms a palindrome ignoring case and non-alphabetical characters.
// Note: a palindrome is a sequence of characters that reads the same forwards and backwards.

// es5
function pali(input) {
  const arr = input.split("");
  const revArr = [];
  for (let i = 1; i < arr.length + 1; i++) {
    revArr.push(arr[arr.length - i]);
  }
  const reversed = revArr.join("");
  const rev = reversed.replace(/[^0-9a-zA-Z]/g, "").toLowerCase();
  const inp = input.replace(/[^0-9a-zA-Z]/g, "").toLowerCase();
  return inp === rev;
}

// es6
const pali = (input) => {
  const arr = input.split("");
  const revArr = [];
  for (let i = 1; i < arr.length + 1; i++) {
    revArr.push(arr[arr.length - i]);
  }
  const reversed = revArr.join("");
  const rev = reversed.replace(/[^0-9a-zA-Z]/g, "").toLowerCase();
  const inp = input.replace(/[^0-9a-zA-Z]/g, "").toLowerCase();
  return inp === rev;
};

pali("level");
pali("algorithm");
pali("A man, a plan, a canal: Panama.");
