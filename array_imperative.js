import { makeArray } from "./utils/makeArray";

const arr1 = makeArray();
const arr2 = makeArray();

const time1 = performance.now();

const result = [];

for (const item of arr1) {
  result.push(item);
}
for (const item of arr2) {
  result.push(item);
}

const time2 = performance.now();

console.log("array #1 length", arr1.length);
console.log("array #2 length", arr2.length);
console.log("result array length", result.length);

console.log("timeToWork", time2 - time1);
