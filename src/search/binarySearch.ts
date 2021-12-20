// Input: array of sorted numbers and a target
// Output: index of where target was found in array , -1 if target isn't found

// time complexity must be O(log n)

const binarySearch = (list: number[], target: number) => {
    let frontIndex = 0;
    let backIndex = list.length - 1;

    while (frontIndex <= backIndex) {
        const middleIndex = Math.floor((frontIndex + backIndex) / 2);
        if (target < list[middleIndex]) {
            backIndex = middleIndex - 1;
        }
        else if (target > list[middleIndex]) {
            frontIndex = middleIndex + 1;
        }
        else {
            return middleIndex;
        }
    }
    return -1;
}

console.log(binarySearch([1, 2, 3, 4, 5], 2)); // 1
console.log(binarySearch([1, 2, 3, 4, 5], 3)); // 2
console.log(binarySearch([1, 2, 3, 4, 5], 5)); // 4
console.log(binarySearch([1, 2, 3, 4, 5], 6)); // -1
