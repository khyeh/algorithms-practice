// Input: Array of Numbers
// Output: Product of every element in array
// Must be done recursively

const productOfArray = (list: number[]): number => {
    if (!list.length) {
        return 0;
    }
    if (list.length === 1) {
        return list[0]
    }
    return list[0] * productOfArray(list.slice(1));
}

console.log(productOfArray([1, 2, 3])) // 6
console.log(productOfArray([1, 2, 3, 10])) // 60