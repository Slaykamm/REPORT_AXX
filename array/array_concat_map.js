import { performance } from "perf_hooks";
import { ARRAY_SIZE } from "../utils/consts.js";
import { makeArray } from "../utils/makeArray.js";

const arr1 = makeArray(ARRAY_SIZE);
const arr2 = makeArray(ARRAY_SIZE);

const time1 = performance.now();

const arr2New = arr2.map((item) => item);

const result = arr1.concat(arr2New);

const time2 = performance.now();

console.log("array #1 length", arr1.length);
console.log("array #2 length", arr2.length);
console.log("result array length", result.length);

console.log("timeToWork", time2 - time1);
