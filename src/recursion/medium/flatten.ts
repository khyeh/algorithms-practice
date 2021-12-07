// Input: Nested Array
// Output: Flattened Array

const flatten = (oldArray: any[]): number[] => {
    let newArray: number[] = [];
    for (let index = 0; index < oldArray.length; index++) {
        if (Array.isArray(oldArray[index])) {
            newArray = newArray.concat(flatten(oldArray[index]));
        } else {
            newArray.push(oldArray[index]);
        }
    }
    return newArray;
}

console.log(flatten([1, 2, 3, [4, 5]])) // [1, 2, 3, 4, 5]
console.log(flatten([1, [2, [3, 4], [[5]]]])) // [1, 2, 3, 4, 5]
console.log(flatten([[1], [2], [3]])) // [1, 2, 3]
console.log(flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]])) // [1, 2, 3]

/** Notes
 *  - concat returns a separate copy. (immutable)
 */