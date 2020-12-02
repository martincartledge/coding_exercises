function main() {
  // Write your code here. Read input using 'readLine()' and print output using 'console.log()'.
  const PI = Math.PI;
  const r = readLine();
  // Print the area of the circle:
  const area = PI * (r * r);
  console.log(area);
  // Print the perimeter of the circle:
  const perimeter = 2 * PI * r;
  console.log(perimeter);
  try {
    // Attempt to redefine the value of constant variable PI
    PI = 0;
    // Attempt to print the value of PI
    console.log(PI);
  } catch (error) {
    console.error("You correctly declared 'PI' as a constant.");
  }
}

function getGrade(score) {
  let grade;
  // Write your code here
  if (score <= 30 && score > 25) {
    grade = "A";
  } else if (score <= 25 && score > 20) {
    grade = "B";
  } else if (score <= 20 && score > 15) {
    grade = "C";
  } else if (score <= 15 && score > 10) {
    grade = "D";
  } else if (score <= 10 && score > 5) {
    grade = "E";
  } else if (score <= 5 && score >= 0) {
    grade = "F";
  }
  return grade;
}

function getLetter(s) {
  let letter;
  // Write your code here
  const first = s && s[0] && s[0].toLowerCase();
  switch (first) {
    case "a": {
      letter = "A";
      break;
    }
    case "b": {
      letter = "B";
      break;
    }
    case "h": {
      letter = "C";
      break;
    }
    case "n": {
      letter = "D";
      break;
    }
    case "z": {
      letter = "D";
      break;
    }
  }
  return letter;
}

function vowelsAndConsonants(s) {
  const vowels = {
    a: "a",
    e: "e",
    i: "i",
    o: "o",
    u: "u",
  };

  const strArr = s.split("");

  for (let i = 0; i < strArr.length; i++) {
    if (vowels[strArr[i]]) {
      console.log(strArr[i]);
    }
  }
  for (let i = 0; i < strArr.length; i++) {
    if (!vowels[strArr[i]]) {
      console.log(strArr[i]);
    }
  }
}
