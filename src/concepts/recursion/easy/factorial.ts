// Input: Number
// Output: Factorial of the Number

const factorial = (input: number): number => {
  if (input <= 1) {
    return 1;
  }
  return input * factorial(input - 1);
};

console.log(factorial(1)); // 1
console.log(factorial(2)); // 2
console.log(factorial(4)); // 24
console.log(factorial(7)); // 5040
