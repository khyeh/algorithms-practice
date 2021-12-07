// Input: Array of numbers and a callback function
// Output: Return true if any element in array returns true if passed to the callback (boolean)

const isOdd = (val: number) => val % 2 !== 0;

const someRecursive = (list: number[], callback: (val: number) => boolean): boolean => {
    if (list.length === 1) {
        return callback(list[0]);
    }
    return callback(list[0]) || someRecursive(list.slice(1), callback);
}

console.log(someRecursive([1, 2, 3, 4], isOdd)) // true
console.log(someRecursive([4, 6, 8, 9], isOdd)) // true
console.log(someRecursive([4, 6, 8], isOdd)) // false
console.log(someRecursive([4, 6, 8], val => val > 10)); // false