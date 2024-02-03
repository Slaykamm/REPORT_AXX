/**
 * my custom concat
 */
export default function myConcatCustom(arr1, arr2) {
  // let length = 0;
  // for (let i = 0; i < args.length; i++) {
  //   length += args[i].length || 0;
  // }

  // const result = new Array(length);
  // const fromArr1 = Array.from(args[0]);
  // const fromArr2 = Array.from(args[1]);
  // result[0] = fromArr1;
  // return result;
  //////////////////////
  // let length = arr1.length + arr2.length;
  // // for (let i = 0; i < args.length; i++) {
  // //   length += args[i].length || 0;
  // // }

  // const result = new Array(length);
  // // console.log("length", length);
  // // var result = [];
  // for (var i = 0; i < arr1.length; i++) {
  //   // result[i] = arr1[i];
  //   {[i]: arr1[i]}
  // }
  // // for (var j = 0; j < arr2.length; j++) {
  // //   result[arr1.length - 1 + j] = arr1[j];
  // // }
  // return result;
  /////////////////////////
  const result = Array.from(arr1);
  // const result1 = Array.from(arr2);

  arr2.forEach((item) => result.push(item));

  // for (let item = 0; item < arr2.length; item++) {
  //   result.push(arr2[item]);
  // }

  return []; //.concat(arr2);
}
