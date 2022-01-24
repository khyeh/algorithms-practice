const minSubArrayLen = (list: number[], target: number): number => {
  let frontIndex = 1;
  let rearIndex = 0;
  let minLen = Infinity;

  let current = list[frontIndex] + list[rearIndex];

  /** A better solution would be to subtract the indices of front and rear to get the length
   *  of the min subarray instead of creating an entire subarray
   */
  const minList = [list[rearIndex], list[frontIndex]];

  while (frontIndex < list.length) {
    // console.log('min len', minLen)
    if (current < target) {
      frontIndex++;
      current += list[frontIndex];
      minList.push(list[frontIndex]);
    } else if (current === target) {
      minLen = Math.min(minList.length, minLen);
      frontIndex++;
      current += list[frontIndex];
      minList.push(list[frontIndex]);
    } else {
      // current > target
      minLen = Math.min(minList.length, minLen);
      current -= list[rearIndex];
      minList.splice(0, 1);
      rearIndex++;
    }
  }

  return minLen;
};

console.log(minSubArrayLen([2, 3, 1, 2, 4, 3], 7)); // 2 because only 2 numbers in the list are needed to add up to 7
console.log(minSubArrayLen([2, 1, 6, 5, 4], 9)); // 2 because only 2 numbers in the list are needed to add up to 9
console.log(minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 55)); // 5 because 5 numbers in the list are needed to add up to 9

// iterate over the array until sum meets or exceeds the target number
// iterate over the array again but set the starting index to be the size of the previous array
// add the next incoming number
// keep subtracting the front numbers until target is no longer met
// return the size of the subarray
