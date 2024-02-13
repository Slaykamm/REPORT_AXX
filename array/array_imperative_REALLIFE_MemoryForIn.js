import { makeArray, makeStringArray } from "../utils/makeArray.js";
import { ARRAY_SIZE, ARRAY_SIZE_SMALL } from "../utils/consts.js";
import { performance } from "perf_hooks";

const arr1 = makeStringArray(ARRAY_SIZE_SMALL);
const arr2 = makeStringArray(ARRAY_SIZE_SMALL);

const time1 = performance.now();
for (let j = 0; j < ARRAY_SIZE_SMALL; j++) {
  const result = Array(ARRAY_SIZE_SMALL + ARRAY_SIZE_SMALL);
  for (const i in arr1) {
    result[i] = arr1[i];
  }
  for (const i in arr1) {
    result[i + ARRAY_SIZE_SMALL] = arr2[i];
  }
}

const time2 = performance.now();

console.log("timeToWork", time2 - time1);
