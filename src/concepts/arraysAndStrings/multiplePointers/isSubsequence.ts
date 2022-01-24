const isSubsequence = (subSequence: string, sequence: string): boolean => {
  if (subSequence.length > sequence.length) {
    return false;
  }
  let subIndex = 0;
  let seqIndex = 0;
  while (seqIndex < sequence.length) {
    const subLetter = subSequence[subIndex];
    const seqLetter = sequence[seqIndex];
    if (subLetter === seqLetter) {
      subIndex++;
      seqIndex++;
      if (subIndex === subSequence.length) {
        return true;
      }
    } else {
      seqIndex++;
    }
  }
  return false;
};

console.log(isSubsequence("hello", "hello world")); // true
console.log(isSubsequence("sing", "sting")); // true
