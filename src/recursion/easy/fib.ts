// Recursive Solution of fib without any memoization
// Input: number
// Output: nth number of fibonacci sequence

const fib = (n: number): number => {
  if (n <= 2) {
    return 1;
  }
  return fib(n - 1) + fib(n - 2);
};

type MemoFib = {
  [key: number]: number;
};
const fibWithMemo = (n: number, memo: MemoFib = {}) => {
  if (n in memo) {
    return memo[n];
  }
  if (n <= 2) {
    return 1;
  }
  memo[n] = fibWithMemo(n - 1, memo) + fibWithMemo(n - 2, memo);
  return memo[n];
};

// 0, 1, 1, 2, 3
// console.log(fib(4)) // 3
// console.log(fib(10)) // 55
// console.log(fib(28)) // 317811
// console.log(fib(35)) // 9227465

console.log(fibWithMemo(4)); // 3
console.log(fibWithMemo(10)); // 55
console.log(fibWithMemo(28)); // 317811
console.log(fibWithMemo(35)); // 9227465
console.log(fibWithMemo(135)); // 7.308805952221445e+27
