// Given a string, return whether or not it uses capitalization correctly. A string correctly uses capitalization if all letters are capitalized, no letters are capitalized, or only the first letter is capitalized.

// es5

function correctCap(str) {
  const arr = str.split("");

  let isValid = false;
  let midCap = false;

  for (let i = 0; i < arr.length; i++) {
    if (i === 0 && arr[i] === arr[i].toUpperCase()) {
      isValid = true;
    } else if (
      i > 0 &&
      arr[i] === arr[i].toUpperCase() &&
      arr[i - 1] === arr[i - 1].toUpperCase()
    ) {
      isValid = true;
    } else if (
      i > 0 &&
      arr[i] === arr[i].toUpperCase() &&
      arr[i - 1] !== arr[i].toUpperCase()
    ) {
      isValid = false;
    } else if (
      i > 1 &&
      arr[i] !== arr[i].toUpperCase() &&
      arr[i - 1] === arr[i - 1].toUpperCase()
    ) {
      isValid = false;
      midCap = true;
    } else if (
      !midCap &&
      i > 1 &&
      arr[i] !== arr[i].toUpperCase() &&
      arr[i - 1] !== arr[i - 1].toUpperCase()
    ) {
      isValid = true;
    }
  }
  return isValid;
}

// es6

const correctCap = (str) => {
  const arr = str.split("");

  let isValid = false;
  let midCap = false;

  for (const [index, value] of arr.entries()) {
    if (index === 0 && value === value.toUpperCase()) {
      isValid = true;
    } else if (
      index > 0 &&
      value === value.toUpperCase() &&
      arr[index - 1] === arr[index - 1].toUpperCase()
    ) {
      isValid = true;
    } else if (
      index > 0 &&
      value === value.toUpperCase() &&
      arr[index - 1] !== value.toUpperCase()
    ) {
      isValid = false;
    } else if (
      index > 1 &&
      value !== value.toUpperCase() &&
      arr[index - 1] === arr[index - 1].toUpperCase()
    ) {
      isValid = false;
      midCap = true;
    } else if (
      !midCap &&
      index > 1 &&
      value !== value.toUpperCase() &&
      arr[index - 1] !== arr[index - 1].toUpperCase()
    ) {
      isValid = true;
    }
  }
  return isValid;
};

// correctCap("USA"); // true

// correctCap("farT"); // false

// correctCap("hEy"); // false

// correctCap("MartIn"); // false

// correctCap("Martin"); // true

// correctCap("compUter"); // false

// correctCap("coding"); // true
