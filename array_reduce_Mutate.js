import { makeArray } from "./utils/makeArray.js";

const arr1 = makeArray();
const arr2 = makeArray();

const time1 = performance.now();

const result = arr2.reduce((acc, item) => {
  acc.push(item);
  return acc;
}, arr1);

const time2 = performance.now();

console.log("array #1 length", arr1.length);
console.log("array #2 length", arr2.length);
console.log("result array length", result.length);

console.log("timeToWork", time2 - time1);
