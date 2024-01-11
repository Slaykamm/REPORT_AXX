var array = [];
for (var i = 0; i < 100_000_000; i++) {
  array.push(i);
}

const lookingNumberStart = 1;
const lookingNumberMiddle = 50_000_000;
const lookingNumberEnd = 99_999_999;

const time1 = Date.now();
const result = array.indexOf(lookingNumberEnd);
console.log("Result is:", result);
const time2 = Date.now();
console.log("Execute time is: ", time2 - time1);
