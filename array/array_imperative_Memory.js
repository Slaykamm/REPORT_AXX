import { makeArray } from "../utils/makeArray.js";
import { ARRAY_SIZE } from "../utils/consts.js";
import { performance } from "perf_hooks";

const arr1 = makeArray(ARRAY_SIZE);
const arr2 = makeArray(ARRAY_SIZE);

const time1 = performance.now();

const result = Array(ARRAY_SIZE + ARRAY_SIZE);
for (let i = 0; i < arr1.length; i++) {
  result[i] = arr1[i];
}
for (let i = 0; i < arr1.length; i++) {
  result[i + ARRAY_SIZE] = arr2[i];
}

const time2 = performance.now();

console.log("array #1 length", arr1.length);
console.log("array #2 length", arr2.length);
console.log("result array length", result.length);

console.log("timeToWork", time2 - time1);
