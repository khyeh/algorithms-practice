const findLongestSubstring1 = (input: string): number => {
  const setList = new Set();
  let rearIndex = 0;
  let longestSub = 0;

  for (let frontIndex = 0; frontIndex < input.length; frontIndex++) {
    const element = input[frontIndex];
    if (!setList.has(element)) {
      setList.add(element);
      longestSub = Math.max(longestSub, setList.size);
    } else {
      // element is in set list
      /** Using an object instead of a set to avoid having to use a while loop.
       *  Storing the index in the object will allow for instant access */
      while (input[rearIndex] !== input[frontIndex]) {
        setList.delete(input[rearIndex]);
        rearIndex++;
      }
      setList.delete(input[rearIndex]);
      rearIndex++;
      setList.add(input[frontIndex]);
      setList.add(input[rearIndex]);
    }
  }
  return longestSub;
};

type Lookup = {
  [key: string]: number;
};

const findLongestSubstring2 = (input: string): number => {
  let rearIndex = 0;
  let longestSub = 0;
  const lookup: Lookup = {};

  for (let frontIndex = 0; frontIndex < input.length; frontIndex++) {
    const element = input[frontIndex];

    if (lookup[element]) {
      rearIndex = Math.max(rearIndex, lookup[element]);
    }

    longestSub = Math.max(longestSub, frontIndex - rearIndex + 1);
    lookup[element] = frontIndex + 1;
  }

  return longestSub;
};

console.log(findLongestSubstring1("")); // 0
console.log(findLongestSubstring1("rithmschool")); // 7
console.log(findLongestSubstring1("thisisawesome")); // 6
