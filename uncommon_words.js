/*
Given two strings representing sentences, return the words that are not common to both strings 
(i.e. the words that only appear in one of the sentences).
*/

function findUncommon(str1, str2) {
  if (str1.split(" ").length === 0 || str2.split(" ").length === 0) {
    return [];
  }

  const firstSet = new Set();
  const secondSet = new Set();
  const uncommonSet = new Set();

  for (one of str1.split(" ")) {
    if (!firstSet.has(one)) {
      firstSet.add(one);
    }
  }

  for (two of str2.split(" ")) {
    if (!secondSet.has(two)) {
      secondSet.add(two);
    }
  }

  for (entry of firstSet.keys()) {
    if (firstSet.has(entry) && !secondSet.has(entry)) {
      uncommonSet.add(entry);
    }
  }

  for (entry of secondSet.keys()) {
    if (secondSet.has(entry) && !firstSet.has(entry)) {
      uncommonSet.add(entry);
    }
  }

  return Array.from(uncommonSet);
}

const findUncommon = (str1, str2) => {
  if (str1.split(" ").length === 0 || str2.split(" ").length === 0) {
    return [];
  }

  const firstSet = new Set();
  const secondSet = new Set();
  const uncommonSet = new Set();

  for (one of str1.split(" ")) {
    if (!firstSet.has(one)) {
      firstSet.add(one);
    }
  }

  for (two of str2.split(" ")) {
    if (!secondSet.has(two)) {
      secondSet.add(two);
    }
  }

  for (entry of firstSet.keys()) {
    if (firstSet.has(entry) && !secondSet.has(entry)) {
      uncommonSet.add(entry);
    }
  }

  for (entry of secondSet.keys()) {
    if (secondSet.has(entry) && !firstSet.has(entry)) {
      uncommonSet.add(entry);
    }
  }

  return Array.from(uncommonSet);
};

// findUncommon("the quick", "brown fox"); // ["the", "quick", "brown", "fox"]

// findUncommon("the tortoise beat the haire", "the tortoise lost to the haire"); // ["beat", "to", "lost"]

// findUncommon("copper coffee pot", "hot coffee pot"); // ["copper", "hot"]
