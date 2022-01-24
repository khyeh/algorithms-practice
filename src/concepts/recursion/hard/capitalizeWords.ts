// input: array of strings
// output: array of string, but capitalized

const capitalizeWords = (input: string[]): string[] => {
  if (input.length === 1) {
    return [input[0].toUpperCase()];
  }
  let result = capitalizeWords(input.slice(0, -1));
  result.push(...capitalizeWords(input.slice(-1)));
  return result;
};

let words = ["i", "am", "learning", "recursion"];
console.log(capitalizeWords(words)); // ['I', 'AM', 'LEARNING', 'RECURSION']
