// Input: n
// Output: sum of all numbers from 0 to n

const recursiveRange = (n: number): number => {
  if (n === 0) {
    return 0;
  }
  return n + recursiveRange(n - 1);
};

console.log(recursiveRange(6)); // 21
console.log(recursiveRange(10)); // 55
