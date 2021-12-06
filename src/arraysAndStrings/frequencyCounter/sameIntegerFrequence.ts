const sameIntegerFrequence = (number1: number, number2: number): boolean => {
    let lookup: { [key: string]: number } = {};
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
/** Pseudocode
 *  if the digit lengths of the two digits are not the same, return false
 *  iterate over the first number digit by digit
 *      log the occurrence of each digit into a hash
 *  iterate over the second number digit by digit
 *      if digit occurrence is less than 0 after decrement, return false
 *      decrement the occurrence of each digit
 *  return true
 */


console.log(sameIntegerFrequence(13324, 33241))
console.log(sameIntegerFrequence(1324, 3341));
console.log(sameIntegerFrequence(1334, 33241));