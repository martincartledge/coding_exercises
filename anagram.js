// Given two strings s and t return whether or not s is an anagram of t.

// Note: An anagram is a word formed by reordering the letters of another word.

function anagram(firstStr, secondStr) {
  if (firstStr.length !== secondStr.length) {
    return false;
  }

  const firstMap = {};
  const secondMap = {};

  for (const first of firstStr) {
    firstMap[first] = (firstMap[first] || 0) + 1;
  }

  for (const second of secondStr) {
    secondMap[second] = (secondMap[second] || 0) + 1;
  }

  for (const entry in firstMap) {
    if (!secondMap[entry]) {
      return false;
    }
  }
  return true;
}

const anagram = (firstStr, secondStr) => {
  if (firstStr.length !== secondStr.length) {
    return false;
  }

  const firstMap = {};
  const secondMap = {};

  for (const first of firstStr) {
    firstMap[first] = (firstMap[first] || 0) + 1;
  }

  for (const second of secondStr) {
    secondMap[second] = (secondMap[second] || 0) + 1;
  }

  for (const entry in firstMap) {
    if (!secondMap[entry]) {
      return false;
    }
  }
  return true;
};

// anagram("cat", "tac"); // true

// anagram("listen", "silent"); // true

// anagram("program", "function"); // false
