type Input = string | number;

// frequency counter pattern
function areThereDuplicates1(...args: Input[]): boolean {
  let lookup: { [key: Input]: boolean } = {};
  for (let arg of args) {
    if (lookup[arg] === undefined) {
      lookup[arg] = true;
    } else {
      return true;
    }
  }
  return false;
}

// multiple pointers pattern
function areThereDuplicates2(...args: Input[]): boolean {
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

console.log(areThereDuplicates1("1", "2", "3", "4", "5"));
console.log(areThereDuplicates1("1", "2", "3", "4", "4"));
console.log(areThereDuplicates1("1", "2", "2", "3", "4"));
console.log(areThereDuplicates1("1", "2", "3", "2", "4"));
