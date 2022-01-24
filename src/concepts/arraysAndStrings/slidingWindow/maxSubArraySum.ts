/** Given a size, return the sum of the largest consecutive list of elements of that list */
const maxSubArraySum = (list: number[], size: number): number | null => {
  let largestSum = 0;
  let currentSum = 0;
  if (list.length < size) {
    return null;
  }
  for (let index = 0; index < size; index++) {
    largestSum += list[index];
  }
  currentSum = largestSum;
  for (let index = size; index < list.length; index++) {
    currentSum = currentSum - list[index - size] + list[index];
    largestSum = Math.max(currentSum, largestSum);
  }
  return largestSum;
};

console.log(maxSubArraySum([100, 200, 300, 400], 2)); // 700
console.log(maxSubArraySum([14, 2, 10, 23, 3, 1, 0, 20], 4)); // 39
