// Reverse a string recursively

const reverse = (input: string): string => {
    if (input.length === 1) {
        return input;
    }
    /** Example: "hello"
     *  return "o".concat("hell")
     *  return "ol".concat("hel")
     *  return "oll".concat("he")
     *  ...
     *  return "olleh"
     */
    return input.slice(input.length - 1).concat(reverse(input.substring(0, input.length - 1)));
}

console.log(reverse('awesome')); // 'emosewa'
console.log(reverse('rithmschool')) // 'loohcsmhtir'

const reverseIteratively = (input: string) => {
    let reversedInput = "";
    for (let index = input.length - 1; index >= 0; index--) {
        reversedInput += input[index];
    }
    return reversedInput;
}

console.log(reverseIteratively('awesome')); // 'emosewa'
console.log(reverseIteratively('rithmschool')) // 'loohcsmhtir'