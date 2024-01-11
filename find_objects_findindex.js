var array = [];
for (let i = 1; i < 65_000_000; i++) {
  array.push({ id: i, item: i });
}

const lookingNumberStart = 2;
const lookingNumberMiddle = 32_500_000;
const lookingNumberEnd = 64_999_998;

const time1 = Date.now();
const result = array.findIndex((value) => value.id === lookingNumberEnd);
console.log("Result is:", array[result]);
const time2 = Date.now();
console.log("Execute time is: ", time2 - time1);
