// array is guaranteed to be sorted
// double pointer method
const countUniqueNumbers = (list: number[]): number => {
  if (!list.length) {
    return 0;
  }
  let uniqueCount = 1;
  let leadIndex = 0;
  let rearIndex = 0;
  while (leadIndex < list.length) {
    if (list[leadIndex] === list[rearIndex]) {
      leadIndex++;
    } else {
      rearIndex = leadIndex;
      uniqueCount++;
    }
  }
  return uniqueCount;
};

console.log(countUniqueNumbers([1, 1, 1, 1, 1, 2])); // 2
console.log(countUniqueNumbers([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13])); // 7

/** Double Pointer Method Pseudocode */
// create a counter and set it to 0
// create 2 pointers with indices set to index 0
// iterate over the sorted array
// if value of 2 pointers match, increase back pointer
// else set front pointer index to back pointer index and increment counter by 1
// return the counter

// Alternate Solution: use a hash and a variable to keep track of the unique number count;
