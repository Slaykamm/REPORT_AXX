import { makeArray } from "./utils/makeArray.js";

const arr1 = makeArray();
const arr2 = makeArray();

// function myConcat(...args) {
//   let length = 0;
//   for (let i = 0; i < args.length; i++) {
//     length += args[i].length || 0;
//   }

//   const arr3 = new Array(length);
//   let index = 0;

//   for (let i = 0; i < args.length; i++) {
//     const array = args[i];
//     if (Array.isArray(array)) {
//       for (let j = 0; j < array.length; j++) {
//         arr3[index++] = array[j];
//       }
//     } else {
//       arr3[index++] = array;
//     }
//   }

//   return arr3;
// }

/** 2890 ms via push */
// function myConcat(arr1, arr2) {
//   var result = [];
//   for (var i = 0; i < arr1.length; i++) {
//     result.push(arr1[i]);
//   }
//   for (var j = 0; j < arr2.length; j++) {
//     result.push(arr2[j]);
//   }
//   return result;
// }

/**  6396 ms */
// function myConcat(arr1, arr2) {
//   return [...arr1, ...arr2];
// }

/**  26 848 ms */
// function myConcat(arr1, arr2) {
//   var result = [];
//   for (var element of arr1) {
//     result.push(element);
//   }
//   for (var element of arr2) {
//     result.push(element);
//   }
//   return result;
// }

/**  5 219 ms  mutate!!!!!!!!!*/
// function myConcat(arr1, arr2) {
//   return arr1.reduce(function (result, current) {
//     result.push(current);
//     return result;
//   }, arr2);
// }

/** 25 171 ms */
// function myConcat(arr1, arr2) {
//   const result = [];
//   for (let el of arr1) {
//     result.push(el);
//   }
//   for (let el of arr2) {
//     result.push(el);
//   }
//   return result;
// }

/** 5907 ms */
// function myConcat(arr1, arr2) {
//   const result = arr1.slice();
//   for (let el of arr2) {
//     result.push(el);
//   }
//   return result;
// }

/** 2 683 ms */
// function myConcat(arr1, arr2) {
//   const result = [];
//   for (let i = 0; i < arr1.length; i++) {
//     result.push(arr1[i]);
//   }
//   for (let i = 0; i < arr2.length; i++) {
//     result.push(arr2[i]);
//   }
//   return result;
// }

/** 1 500 ms MUTATE */
// function myConcat(arr1, arr2) {
//   for (let i = 0; i < arr2.length; i++) {
//     arr1.push(arr2[i]);
//   }
//   return arr1;
// }

/** 4252 ms */
// function myConcat(arr1, arr2) {
//   const result = Array.from(arr1);
//   for (let i = 0; i < arr2.length; i++) {
//     result.push(arr2[i]);
//   }
//   return result;
// }

/** 5616 мс */
// function myConcat(arr1, arr2) {
//   const result = Array.from(arr1);
//   while (!!arr2.length) {
//     result.push(arr2.pop());
//   }
//   return result;
// }

/** 3062 мс */
// function myConcat(arr1, arr2) {
//   const result = [];
//   for (let i = 0; i < arr1.length; i++) {
//     result[i] = arr1[i];
//   }
//   for (let i = 0; i < arr2.length; i++) {
//     result[arr1.length + i] = arr2[i];
//   }
//   return result;
// }

/** 8483 ms */
// function myConcat(arr1, ...args) {
//   const result = arr1.slice();
//   for (let arr of args) {
//     for (let el of arr) {
//       result.push(el);
//     }
//   }
//   return result;
// }

/** 26 302 ms */
// function myConcat(arr1, ...args) {
//   const result = [];
//   for (let el of arr1) {
//     result.push(el);
//   }
//   for (let arr of args) {
//     for (let el of arr) {
//       result.push(el);
//     }
//   }
//   return result;
// }

/** 2927 ms */
// function myConcat(arr1, arr2) {
//   const result = [];
//   for (let i = 0; i < arguments.length; i++) {
//     for (let j = 0; j < arguments[i].length; j++) {
//       result.push(arguments[i][j]);
//     }
//   }
//   return result;
// }

/** 3822 ms */
// function myConcat() {
//   const result = [];
//   Array.prototype.forEach.call(arguments, function (arr) {
//     Array.prototype.forEach.call(arr, function (el) {
//       result.push(el);
//     });
//   });
//   return result;
// }

// function myConcat(...args) {
//   let length = 0;
//   for (let i = 0; i < args.length; i++) {
//     length += args[i].length || 0;
//   }

//   const result = new Array(length);
//   const fromArr1 = Array.from(args[0]);
//   const fromArr2 = Array.from(args[1]);
//   // result[0] = fromArr1;
//   return default result;
// }

// function myConcat() {
//   const result = [];
//   Array.prototype.forEach.call(arguments, (arr) => {
//     Array.prototype.push.apply(result, arr);
//   });
//   return result;
// }

/** 2500 ms */
// function myConcat(arr1, arr2) {
//   const result = Array.from(arr1);
//   // arr2.forEach((item) => result.push(item));

//   return result;
// }

// LONG
// function myConcat(arr1, arr2) {
//   var arr = [];
//   Array.prototype.push.apply(arr, arr1);
//   Array.prototype.push.apply(arr, arr2);
//   return Object.create(Array.prototype, Object.getOwnPropertyDescriptors(arr));
// }

// function* myConcat(arr1, arr2) {
//   const result = Array.from(arr1);
//   arr2.forEach((item) => result.push(item));

//   yield result;
// }
// const result = myConcat(arr1, arr2).next().value;

// function myConcat(arr1, arr2) {
//   const arr = Array.from(arr1);
//   // const result = Array.from(arr1);
//   const result = [...arr1, ...arr2];
//   return result;
// }
// yield()

// 2100 ms
// function myConcat(arr1, arr2) {
//   var combinedArray = Array.from(arr1);
//   for (var i = 0; i < arr2.length; i++) {
//     combinedArray.push(arr2[i]);
//   }
//   return combinedArray;
// }

function myConcat(arr1, arr2) {
  const result = Array(arr1.length + arr2.length);
  // const result = [];
  for (let i = 0; i < arr1.length; i++) {
    result[i] = arr1[i];
  }
  for (let i = 0; i < arr2.length; i++) {
    result[i + arr1.length] = arr2[i];
  }

  return result;
}

const time1 = performance.now();
const result = myConcat(arr1, arr2);
//3 long
// const result2 = result.flat();
//1 long
// const result2 = result.flatMap((item) => item);
//2 3000 ms
// const result2 = [];
// for (let i = 0; i < result.length; i++) {
//   for (let j = 0; j < result[i].length; j++) {
//     result2.push(result[i][j]);
//   }
// }

// const result2 = result.flat(1);

const time2 = performance.now();

console.log("timeToWork", time2 - time1);
console.log("array #1 length", arr1.length);
console.log("array #2 length", arr2.length);
console.log("result array length", result.length); //
// console.log("result2 array length", result2.length); //
