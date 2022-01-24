/** Given a sorted array of integers and a target average, determine if there is
 *  a pair of values in the array where the average matches the target average.
 */
const averagePair = (list: number[], average: number): boolean => {
  if (list.length < 2) {
    return false;
  }
  const target = average * 2;
  let startIndex = 0;
  let endIndex = list.length - 1;
  while (startIndex <= endIndex) {
    const computedValue = list[startIndex] + list[endIndex];
    if (computedValue === target) {
      return true;
    } else if (computedValue <= target) {
      startIndex++;
    } else {
      endIndex--;
    }
  }
  return false;
};

console.log(averagePair([1, 2, 3], 2.5)); // true
console.log(averagePair([1, 3, 3, 5, 6, 7, 10, 12, 19], 8)); // true
console.log(averagePair([-1, 0, 3, 4, 5, 6], 4.1)); // false
console.log(averagePair([], 4)); // false

/** Pseudocode
 * if length of list < 2 return false
 * (since list is sorted, we can use the double pointers method)
 * create a new value that is double that of the average
 * create a start pointer that starts from the beginning
 * create an end pointer that starts from the end
 * add the values of the two pointers together
 * while back pointer <= front pointer
 *   if value < target, increase back pointer
 *   if value > target, decrease front pointer
 *   if value == target, return true
 * return false after exiting the loop (no pair was found)
 */
