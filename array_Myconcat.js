import { makeArray } from "./utils/makeArray.js";

const arr1 = makeArray();
const arr2 = makeArray();

function myConcat(...args) {
  let length = 0;
  for (let i = 0; i < args.length; i++) {
    length += args[i].length || 0;
  }

  const arr3 = new Array(length);
  let index = 0;

  for (let i = 0; i < args.length; i++) {
    const array = args[i];
    if (Array.isArray(array)) {
      for (let j = 0; j < array.length; j++) {
        arr3[index++] = array[j];
      }
    } else {
      arr3[index++] = array;
    }
  }

  return arr3;
}

const time1 = performance.now();
const result = myConcat(arr1, arr2);
const time2 = performance.now();

console.log("array #1 length", arr1.length);
console.log("array #2 length", arr2.length);
console.log("result array length", result.length);

console.log("timeToWork", time2 - time1);
