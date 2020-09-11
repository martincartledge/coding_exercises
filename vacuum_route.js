// Given a string representing the sequence of moves a robot vacuum makes, return whether or not it will return to its original position. The string will only contain L, R, U, and D characters, representing left, right, up, and down respectively.

// es5

function vac(str) {
  const arr = str.split("");
  const moves = {
    L: 0,
    R: 0,
    U: 0,
    D: 0,
  };
  for (let i = 0; i < arr.length; i++) {
    // checking L
    if (arr[i] === "L") {
      moves.L++;
    }

    // checking R
    if (arr[i] === "R") {
      moves.R++;
    }

    // checking U
    if (arr[i] === "U") {
      moves.U++;
    }

    // checking D
    if (arr[i] === "D") {
      moves.D++;
    }
  }

  const hasLeftAndRight = moves.L > 0 && moves.R > 0;
  const hasTopAndBottom = moves.U > 0 && moves.D > 0;
  const hasAll = moves.L > 0 && moves.R > 0 && moves.U > 0 && moves.D > 0;
  const valueCheck = moves.L;
  const allValues = Object.values(moves).every((v) => v === valueCheck);

  if (hasAll && allValues) {
    return true;
  }

  if (hasLeftAndRight && moves.L === moves.R) {
    return true;
  }

  if (hasTopAndBottom && moves.U === moves.D) {
    return true;
  }
  return false;
}

const vac = (str) => {
  const arr = str.split("");
  const moves = {
    L: 0,
    R: 0,
    U: 0,
    D: 0,
  };
  for (move of arr) {
    // checking L
    if (move === "L") {
      moves.L++;
    }

    // checking R
    if (move === "R") {
      moves.R++;
    }

    // checking U
    if (move === "U") {
      moves.U++;
    }

    // checking D
    if (move === "D") {
      moves.D++;
    }
  }

  const hasLeftAndRight = moves.L > 0 && moves.R > 0;
  const hasTopAndBottom = moves.U > 0 && moves.D > 0;
  const hasAll = moves.L > 0 && moves.R > 0 && moves.U > 0 && moves.D > 0;
  const valueCheck = moves.L;
  const allValues = Object.values(moves).every((v) => v === valueCheck);

  if (hasAll && allValues) {
    return true;
  }

  if (hasLeftAndRight && moves.L === moves.R) {
    return true;
  }

  if (hasTopAndBottom && moves.U === moves.D) {
    return true;
  }
  return false;
};

// es6

var vac = (str) => {
  const arr = str.split("");
  const moves = {
    L: 0,
    R: 0,
    U: 0,
    D: 0,
  };
  for (move of arr) {
    // checking L
    if (move === "L") {
      moves.L++;
    }

    // checking R
    if (move === "R") {
      moves.R++;
    }

    // checking U
    if (move === "U") {
      moves.U++;
    }

    // checking D
    if (move === "D") {
      moves.D++;
    }
  }

  const hasLeftAndRight = moves.L > 0 && moves.R > 0;
  const hasTopAndBottom = moves.U > 0 && moves.D > 0;
  const hasAll = moves.L > 0 && moves.R > 0 && moves.U > 0 && moves.D > 0;
  const valueCheck = moves.L;
  const allValues = Object.values(moves).every((v) => v === valueCheck);

  if (hasAll && allValues) {
    return true;
  }

  if (hasLeftAndRight && moves.L === moves.R) {
    return true;
  }

  if (hasTopAndBottom && moves.U === moves.D) {
    return true;
  }
  return false;
};

// vac('LLRR'); // true

// vac('URURD'); // false

// vac('RUULLDRD'); // true
