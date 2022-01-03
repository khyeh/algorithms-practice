// Input: two strings: one long and short
// Output: count of how many short strings exist in the long string

const naiveSubstringSearch = (long: string, short: string): number => {
    let count = 0;
    for (let i = 0; i < long.length; i++) {
        for (let j = 0; j < short.length; j++) {
            if (long[i + j] !== short[j]) {
                break;
            }
            if (j === short.length - 1) {
                count++;
            }
        }
    }
    return count;
}

console.log(naiveSubstringSearch("lorie loled", "lol")); // 1
console.log(naiveSubstringSearch("lorie loled", "lo")); // 2