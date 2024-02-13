import pkg from "lodash";
import { ARRAY_SIZE } from "../utils/consts.js";
import { makeArray } from "../utils/makeArray.js";
const { concat } = pkg;

const arr1 = makeArray(ARRAY_SIZE);
const arr2 = makeArray(ARRAY_SIZE);

const time1 = performance.now();

const result = concat(arr1, arr2);

const time2 = performance.now();

console.log("array #1 length", arr1.length);
console.log("array #2 length", arr2.length);
console.log("result array length", result.length);

console.log("timeToWork", time2 - time1);
