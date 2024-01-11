// const array = [
//   0,
//   1,
//   2,
//   4,
//   5,
//   7,
//   10,
//   11,
//   12,
//   13,
//   14,
//   15, //12
// ]; //12

var array = [];
for (var i = 1; i < 100_000_000; i++) {
  // const newNumber = Math.floor(Math.random() * 100001);
  // if (!arr.includes(newNumber)) arr.push(newNumber);
  array.push(i);
}

const time1 = Date.now();
console.log("length array", array.length);

// const initarray = arr.sort((a, b) => a - b);

// console.log(
//   "arr",
//   arr.sort((a, b) => a - b)
// );

const enumObj = {
  BINARY: 1,
  INDEXOF: 2,
  FINDINDEX: 3,
  FIND: 4,
};

const lookingNumber = 50_000_000;
let firstPointer = 0;
let secondPointer = array.length;
let offset = 0;
let length = !!(secondPointer - firstPointer);
const version = enumObj.BINARY;

if (version === 1) {
  while (length) {
    length = !!(secondPointer - firstPointer);
    let nextSize =
      Math.floor((secondPointer - firstPointer) / 2) + firstPointer;

    if (array[nextSize] === lookingNumber) {
      console.log(`Index of ${lookingNumber} is  ${nextSize}`);
      const time2 = Date.now();
      console.log("Execute time is: ", time2 - time1);
      length = 0;
      // return;
    }
    if (secondPointer - firstPointer <= 1) {
      console.log("Данного числа нет в массиве");
      const time3 = Date.now();
      console.log("Execute time is: ", time3 - time1);
      length = 0;
      // return;
    }
    if (array[nextSize] < lookingNumber) {
      firstPointer = nextSize;

      continue;
    }
    secondPointer = nextSize;
  }
} else if (version === 2) {
  const res = array.indexOf(lookingNumber);
  console.log(`Index of ${lookingNumber} is  ${array[res]}`);
  const time5 = Date.now();
  console.log("Execute indexOf time is: ", time5 - time1);
} else if (version === 3) {
  const rez = array.findIndex((value) => value === lookingNumber);
  console.log(`Index of ${lookingNumber} is  ${rez}`);
  const time6 = Date.now();
  console.log("Execute findIndex time is: ", time6 - time1);
} else if (version === 4) {
  const rez = array.find((item) => item === lookingNumber);
  console.log(`Index of ${lookingNumber} is  ${rez}`);
  const time7 = Date.now();
  console.log("Execute FIND time is: ", time7 - time1);
}
