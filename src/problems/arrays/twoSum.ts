/**
 * Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
 *
 * You may assume that each input would have exactly one solution, and you may not use the same element twice.
 * You can return the answer in any order.
 * Constraints:
 *   2 <= nums.length <= 104
 *  -109 <= nums[i] <= 109
 *  -109 <= target <= 109
 *  Only one valid answer exists.
 */

type Lookup = {
  [key: number]: number;
};

const twoSum = (nums: number[], target: number) => {
  const lookup: Lookup = {};
  let solution = null;
  for (let index = 0; index < nums.length; index++) {
    const value = nums[index];
    if (lookup[value] === undefined) {
      lookup[value] = index;
    }
    if (index > 0) {
      const difference = target - value;
      if (lookup[difference] !== undefined && lookup[difference] !== index) {
        solution = [lookup[difference], index];
      }
    }
  }
  return solution;
};

export default twoSum;
