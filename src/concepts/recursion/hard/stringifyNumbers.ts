// Input: nested object
// Output: object with any values as numbers converted to strings

const stringifyNumbers = (old: any) => {
  const output: any = {};
  Object.keys(old).forEach(field => {
    if (typeof old[field] === "number") {
      output[field] = old[field].toString();
    } else if (typeof old[field] === "object" && !Array.isArray(old[field])) {
      output[field] = stringifyNumbers(old[field]);
    } else {
      output[field] = old[field];
    }
  });
  return output;
};

// In place solution with arrays modified as well
const stringifyNumbersMutate = (old: any) => {
  Object.keys(old).forEach(field => {
    if (typeof old[field] === "number") {
      old[field] = old[field].toString();
    }
    if (typeof old[field] === "object") {
      stringifyNumbersMutate(old[field]);
    }
  });
  return old;
};

let obj = {
  num: 1,
  test: [1, 2, 3, 4],
  data: {
    val: 4,
    info: {
      isRight: true,
      random: 66,
    },
  },
};

console.log(stringifyNumbers(obj));

/*
{
    num: "1",
    test: [],
    data: {
        val: "4",
        info: {
            isRight: true,
            random: "66"
        }
    }
}
*/
