// import { data as array } from "./assets/objdata.js";

var array = [];
for (let i = 1; i < 65_000_000; i++) {
  array.push({ id: i, item: i });
}

const lookingNumberStart = 2;
const lookingNumberMiddle = 32_500_000;
const lookingNumberEnd = 64_999_998;
const time1 = Date.now();

const binarySearch = (lookingNumber) => {
  let firstPointer = 0;
  let secondPointer = array.length;
  let length = !!(secondPointer - firstPointer);
  while (length) {
    length = !!(secondPointer - firstPointer);
    let nextSize =
      Math.floor((secondPointer - firstPointer) / 2) + firstPointer;

    if (array[nextSize].id === lookingNumber) {
      console.log(`Index of ${lookingNumber} is  ${nextSize}`);
      return Date.now();
    }
    if (secondPointer - firstPointer <= 1) {
      console.log("Данного числа нет в массиве");
      return Date.now();
    }
    if (array[nextSize].id < lookingNumber) {
      firstPointer = nextSize;

      continue;
    }
    secondPointer = nextSize;
  }
};

console.log("length", array.length);
const time2 = binarySearch(lookingNumberEnd);
console.log("Execute time is2: ", time2 - time1);
