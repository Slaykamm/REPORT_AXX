import { makeRealObject } from "../utils/makeArray.js";
import { ARRAY_SIZE_SMALL } from "../utils/consts.js";
import { performance } from "perf_hooks";

const arr1 = makeRealObject(ARRAY_SIZE_SMALL);
const arr2 = makeRealObject(ARRAY_SIZE_SMALL);

const time1 = performance.now();
for (let j = 0; j < ARRAY_SIZE_SMALL; j++) {
  const result = Array(ARRAY_SIZE_SMALL + ARRAY_SIZE_SMALL);
  for (let i = 0; i < arr1.length; i++) {
    result[i] = arr1[i];
  }
  for (let i = 0; i < arr1.length; i++) {
    result[i + ARRAY_SIZE_SMALL] = arr2[i];
  }
}

const time2 = performance.now();

console.log("timeToWork", time2 - time1);
