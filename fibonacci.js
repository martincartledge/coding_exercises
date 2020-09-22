// write a function that accepts a number
// and returns the nth number in the fibonacci sequence

// fibonacci:
// 1, 1, 2, 3, 5, 8, 13

// non-recursive
function fib(num) {
  let prev = 1;
  let curr = 1;
  for (let i = 2; i < num; i++) {
    const next = prev + curr;
    prev = curr;
    curr = next;
  }
  return curr;
}

// -------- CALL STACK ------------//
// fib(3) = fib(2) + fib(1) = 1 + 1 = 2
// fib(3) = fib(2) + fib(1) = 1 + 1 = 2
// fib(4) = fib(3) + fib(2) = 2 + 1 = 3
// fib(5) = fib(4) + fib(3) = 3 + 2 = 5
// --------------------------------//

// recursive
function fib(num) {
  if (num < 3) return 1;
  return fib(num - 1) + fib(num - 2);
}

fib(5); //5

fib(4); //3

fib(10); //55
