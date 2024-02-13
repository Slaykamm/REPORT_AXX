import { makeRealObject } from "../utils/makeArray.js";
import { ARRAY_SIZE_SMALL } from "../utils/consts.js";
import { performance } from "perf_hooks";

const arr1 = makeRealObject(ARRAY_SIZE_SMALL);
const arr2 = makeRealObject(ARRAY_SIZE_SMALL);

const time1 = performance.now();
for (let j = 0; j < ARRAY_SIZE_SMALL; j++) {
  const result = [];
  for (let i = 0; i < arr1.length; i++) {
    result.push(arr1[i]);
  }
  for (let i = 0; i < arr2.length; i++) {
    result.push(arr2[i]);
  }
}

const time2 = performance.now();

console.log("timeToWork", time2 - time1);
