type Memo = {
    [key: number]: number
}
  
function climbStairs(n: number, memo: Memo = {}): number {
    if (memo[n] != undefined) {
        return memo[n];
    }
    if (n === 0) {
        return 1;
    }
    if (n <= 0) {
        return 0;
    }
    memo[n] = climbStairs(n - 1, memo) + climbStairs(n - 2, memo);
    return memo[n];
};

// array is guaranteed to be sorted
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
}

// console.log(countUniqueNumbers([1, 1, 1, 1, 1, 2])); // 2
// console.log(countUniqueNumbers([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13])); // 7

// solution 1: use a hash and a variable to keep track of the unique number count;
// solution 2: double pointer method?

// create a counter and set it to 0
// create 2 pointers with indices set to index 0
// iterate over the sorted array
  // if value of 2 pointers match, increase back pointer
  // else set front pointer index to back pointer index and increment counter by 1
// return the counter

const sameIntegerFrequence = (number1: number, number2: number): boolean => {
    let lookup: {[key: string]: number} = {};
    const former = number1.toString();
    const latter = number2.toString();
    if (former.length !== latter.length) {
        return false;
    }
    for (let letter of former) {
        lookup[letter] ? lookup[letter] += 1 : lookup[letter] = 1;
    }
    for (let letter of latter) {
        if (lookup[letter]) {
            lookup[letter] -= 1;
            if (lookup[letter] < 0) {
                return false;
            }
        } else {
            return false;
        }
    }
    return true;
}

// if the digit lengths of the two digits are not the same, return false
// iterate over the first number digit by digit
  // log the occurrence of each digit into a hash
// iterate over the second number digit by digit
  // if digit occurrence is less than 0 after decrement, return false
  // decrement the occurrence of each digit
// return true

// console.log(sameIntegerFrequence(13324, 33241))
// console.log(sameIntegerFrequence(1324, 3341));
// console.log(sameIntegerFrequence(1334, 33241));

type Input = string | number;
// frequency counter pattern
// function areThereDuplicates (...args: Input[]): boolean {
//     let lookup: {[key: Input]: boolean} = {};
//     for (let arg of args) {
//         if (lookup[arg] === undefined) {
//             lookup[arg] = true;
//         }
//         else {
//             return true;
//         }
//     };
//     return false;
// }

// multiple pointers pattern
function areThereDuplicates (...args: Input[]): boolean {
    if (args.length < 2) {
        return false;
    }
    let frontIndex = 1;
    let rearIndex = 0;
    while (frontIndex <= args.length) {
        if (args[frontIndex] === args[rearIndex]) {
            return true;
        } else {
            frontIndex++;
            rearIndex++;
        }
    }
    return false;
}

// console.log(areThereDuplicates("1", "2", "3", "4", "5"));
// console.log(areThereDuplicates("1", "2", "3", "4", "4"));
// console.log(areThereDuplicates("1", "2", "2", "3", "4"));
// console.log(areThereDuplicates("1", "2", "3", "2", "4"));

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
            endIndex --;
        }
    }
    return false;
}

// console.log(averagePair([1, 2, 3], 2.5)); // true
// console.log(averagePair([1, 3, 3, 5, 6, 7, 10, 12, 19], 8)); // true
// console.log(averagePair([-1, 0, 3, 4, 5, 6], 4.1)); // false
// console.log(averagePair([], 4)); // false

// if length of list < 2 return false
// (since list is sorted, we can use the double pointers method)
// create a new value that is double that of the average
// create a start pointer that starts from the beginning
// create an end pointer that starts from the end
// add the values of the two pointers together
// while back pointer <= front pointer
  // if value < target, increase back pointer
  // if value > target, decrease front pointer
  // if value == target, return true
// return false after exiting the loop (no pair was found)

const isSubsequence = (subSequence: string, sequence: string): boolean => {
    if (subSequence.length > sequence.length) {
        return false;
    }
    let subIndex = 0;
    let seqIndex = 0;
    while (seqIndex < sequence.length) {
        const subLetter = subSequence[subIndex];
        const seqLetter = sequence[seqIndex];
        if (subLetter === seqLetter) {
            subIndex++;
            seqIndex++;
            if (subIndex === subSequence.length) {
                return true;
            }
        } else {
            seqIndex++;
        }
    }
    return false;
}

// console.log(isSubsequence("hello", "hello world")) // true
// console.log(isSubsequence("sing", "sting")) // true

/** Given a size, return the sum of the largest consecutive list of elements of that list */
const maxSubArraySum = (list: number[], size: number): number | null => {
    let largestSum = 0;
    let currentSum = 0;
        if (list.length < size) {
        return null;
    }
    for (let index = 0; index < size; index ++) {
        largestSum += list[index];
    }
    currentSum = largestSum;
    for (let index = size; index < list.length; index++) {
        currentSum = currentSum - list[index - size] + list[index];
        largestSum = Math.max(currentSum, largestSum)
    }
    return largestSum;
}

// console.log(maxSubArraySum([100, 200, 300, 400], 2)) // 700
// console.log(maxSubArraySum([14, 2, 10, 23, 3, 1, 0, 20], 4)) // 39

const minSubArrayLen = (list: number[], target: number): number => {
let frontIndex = 1;
let rearIndex = 0;
let minLen = Infinity;

let current = list[frontIndex] + list[rearIndex];

/** A better solution would be to subtract the indices of front and rear to get the length
 *  of the min subarray instead of creating an entire subarray 
 */ 
const minList = [list[rearIndex], list[frontIndex]]

while (frontIndex < list.length) {
    // console.log('min len', minLen)
    if (current < target) {
        frontIndex++;
        current += list[frontIndex];
        minList.push(list[frontIndex]);
    }
    else if (current === target) {
        minLen = Math.min(minList.length, minLen);
        frontIndex++;
        current += list[frontIndex];
        minList.push(list[frontIndex]);
    }
    else { // current > target
        minLen = Math.min(minList.length, minLen);
        current -= list[rearIndex];
        minList.splice(0, 1);
        rearIndex++;
    }
}

return minLen;
}

// console.log(minSubArrayLen([2, 3, 1, 2, 4, 3], 7)) // 2 because only 2 numbers in the list are needed to add up to 7
// console.log(minSubArrayLen([2, 1, 6, 5, 4], 9)) // 2 because only 2 numbers in the list are needed to add up to 9
// console.log(minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 55)) // 5 because 5 numbers in the list are needed to add up to 9

// iterate over the array until sum meets or exceeds the target number
// iterate over the array again but set the starting index to be the size of the previous array
  // add the next incoming number
  // keep subtracting the front numbers until target is no longer met
// return the size of the subarray

const findLongestSubstring = (input: string): number => {
    const setList = new Set();
    let rearIndex = 0;
    let longestSub = 0;

    for (let frontIndex = 0; frontIndex < input.length; frontIndex++) {
        const element = input[frontIndex];
        if (!setList.has(element)) {
            setList.add(element);
            longestSub = Math.max(longestSub, setList.size);
        } 
        else { // element is in set list
            /** Using an object instead of a set to avoid having to use a while loop. 
             *  Storing the index in the object will allow for instant access */ 
            while (input[rearIndex] !== input[frontIndex]) {
                setList.delete(input[rearIndex]);
                rearIndex++;
            }
            setList.delete(input[rearIndex])
            rearIndex++;
            setList.add(input[frontIndex]);
            setList.add(input[rearIndex]);
        }
    }
    return longestSub;
}

type Lookup = {
    [key: string]: number
}

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
}

// console.log(findLongestSubstring('')) // 0
// console.log(findLongestSubstring('rithmschool')) // 7
// console.log(findLongestSubstring('thisisawesome')) // 6
