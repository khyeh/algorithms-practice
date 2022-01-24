// Using recursion, determine if input is a palindrome or not
const isPalindrome = (input: string): boolean => {
  if (input.length === 1) {
    return true;
  }
  if (input.length === 2) {
    return input[0] === input[1];
  }
  if (input[0] === input.slice(-1)) {
    return isPalindrome(input.slice(1, input.length - 1));
  }
  return false;
};

console.log(isPalindrome("awesome")); // false
console.log(isPalindrome("foobar")); // false
console.log(isPalindrome("tacocat")); // true
console.log(isPalindrome("amanaplanacanalpanama")); // true
console.log(isPalindrome("amanaplanacanalpandemonium")); // false

/** Notes */

// const input = "hello"
// input.substring(0, 1) is equivalent to input[0]

// Ways to get the last letter of a string,
// Option 1: input.substring(input.length - 1)
// Option 2: input.slice(-1) <-- EASIEST METHOD
// Option 3: input.slice(input.length - 1)
