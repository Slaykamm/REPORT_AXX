import { getObject } from "./utils/getObject.js";

const obj1 = getObject("first");
const obj2 = getObject("second");

const time1 = performance.now();
const obj3 = JSON.parse(
  JSON.stringify(obj1).concat(JSON.stringify(obj2)).replace("}{", ",") // 1200
);
const time2 = performance.now();

console.log("object1 length", Object.keys(obj1).length);
console.log("object2 length", Object.keys(obj2).length);
console.log("Final object length", Object.keys(obj3).length);

console.log("Execute time", time2 - time1);
