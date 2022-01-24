// Input: An object or nested object of objects
// Output: The sum of all values in the object that are even

const nestedEvenSum = (input: any): number => {
  let sum = [0];
  Object.keys(input).forEach(key => {
    traverseObject(input, key, sum);
  });
  return sum[0];
};

const traverseObject = (object: any, key: any, sum: number[] = [0]) => {
  if (typeof object[key] === "number" && object[key] % 2 === 0) {
    sum[0] += object[key];
    return;
  } else if (typeof object[key] === "object") {
    const nestedObject = object[key];
    Object.keys(nestedObject).forEach(key => {
      traverseObject(nestedObject, key, sum);
    });
    return;
  } else {
    return;
  }
};

// base case
// if values of object is an even number, return value
// if value of object is not an even number, return
// if value of object is another object, keep iterating

const obj1 = {
  outer: 2,
  obj: {
    inner: 2,
    otherObj: {
      superInner: 2,
      notANumber: true,
      alsoNotANumber: "yup",
    },
  },
};

const obj2 = {
  a: 2,
  b: { b: 2, bb: { b: 3, bb: { b: 2 } } },
  c: { c: { c: 2 }, cc: "ball", ccc: 5 },
  d: 1,
  e: { e: { e: 2 }, ee: "car" },
};

console.log(nestedEvenSum(obj1)); // 6
console.log(nestedEvenSum(obj2)); // 10
