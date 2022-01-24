/** Input: a base and an exponent (positive integers only)
 *  Output: the power of the base to the exponent
 *  Function mimics the functionality of Math.pow()
 */

const power = (base: number, exponent: number): number => {
  if (exponent === 0) {
    return 1;
  }
  if (exponent === 1) {
    return base;
  }
  return base * power(base, exponent - 1);
};

console.log(power(2, 0)); // 1
console.log(power(2, 2)); // 4
console.log(power(2, 4)); // 16
