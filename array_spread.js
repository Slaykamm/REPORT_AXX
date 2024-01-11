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

const result = [...arr1, ...arr2];

console.log("result", result.length);

const time2 = Date.now();

console.log("timeToWork", time2 - time1);
