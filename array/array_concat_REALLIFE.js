import { makeRealObject } from "../utils/makeArray.js";
import { ARRAY_SIZE_SMALL } from "../utils/consts.js";
import { performance } from "perf_hooks";

const arr1 = makeRealObject(ARRAY_SIZE_SMALL);
const arr2 = makeRealObject(ARRAY_SIZE_SMALL);

const time1 = performance.now();
for (let j = 0; j < ARRAY_SIZE_SMALL; j++) {
  const result = arr1.concat(arr2);
}

const time2 = performance.now();

console.log("timeToWork", time2 - time1);
