function makeArrayNumber() {
  const arr = [];
  for (let i = 0; i < 50_000_000; i++) {
    arr.push(i);
  }
  return arr;
}
const arr1 = makeArrayNumber();
const arr2 = makeArrayNumber();

const time1 = Date.now();

const result = [];

for (const item of arr1) {
  result.push(item);
}
for (const item of arr2) {
  result.push(item);
}

console.log("result", result.length);

const time2 = Date.now();

console.log("timeToWork", time2 - time1);
