var array = [];
for (var i = 1; i < 100_000_000; i++) {
  array.push(i);
}

const lookingNumberStart = 2;
const lookingNumberMiddle = 50_000_000;
const lookingNumberEnd = 99_999_999;
const time1 = Date.now();

const binarySearch = (lookingNumber) => {
  let firstPointer = 0;
  let secondPointer = array.length;
  let length = !!(secondPointer - firstPointer);
  while (length) {
    length = !!(secondPointer - firstPointer);
    let nextSize =
      Math.floor((secondPointer - firstPointer) / 2) + firstPointer;

    if (array[nextSize] === lookingNumber) {
      console.log(`Index of ${lookingNumber} is  ${nextSize}`);
      return Date.now();
    }
    if (secondPointer - firstPointer <= 1) {
      console.log("Данного числа нет в массиве");
      return Date.now();
    }
    if (array[nextSize] < lookingNumber) {
      firstPointer = nextSize;

      continue;
    }
    secondPointer = nextSize;
  }
};

const time2 = binarySearch(lookingNumberStart);
console.log("Execute time is2: ", time2 - time1);
