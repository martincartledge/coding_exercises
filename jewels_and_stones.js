// Given a string representing your stones and another string representing a list of jewels, return the number of stones that you have that are also jewels.

function compareJewelsAndStones(jewels, stones) {
  const jewelCollection = new Map();
  const stoneCollection = new Map();

  let count = 0;

  for (const jewel of jewels.split("")) {
    let jOcc = 1;
    if (jewelCollection.has(jewel)) {
      jewelCollection.set(jewel, (jOcc += 1));
    } else {
      jewelCollection.set(jewel, jOcc);
    }
  }
  for (const stone of stones.split("")) {
    let sOcc = 1;
    if (stoneCollection.has(stone)) {
      stoneCollection.set(stone, (sOcc += 1));
    } else {
      stoneCollection.set(stone, sOcc);
    }
  }

  const [first, second] =
    jewelCollection.size >= stoneCollection.size
      ? [jewelCollection, stoneCollection]
      : [stoneCollection, jewelCollection];

  for (const value of first.keys()) {
    const v = first.get(value);
    if (second.has(value) && v > 1) {
      count = count + v;
    } else if (second.has(value)) {
      count++;
    }
  }

  return count;
}

// compareJewelsAndStones("abc", "ac"); // 2

// compareJewelsAndStones("Af", "AaaddfFf"); // 3

// compareJewelsAndStones("AYOPD", "ayopd"); // 0
