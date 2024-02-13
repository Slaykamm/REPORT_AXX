function makeArray() {
  const arr = [];
  for (let i = 0; i < 10; i++) {
    arr.push({ id: i, name: i, age: i });
  }
  return arr;
}

function makeArrayNumber() {
  const arr = [];
  for (let i = 0; i < 100_000_000; i++) {
    arr.push(i);
  }
  return arr;
}




const arr1 = makeArrayNumber();
const arr2 = makeArrayNumber();

const time1 = Date.now();

// const result = [...arr1, ...arr2];

arr2.forEach((item) => {
  arr1.push(item);
});
const result = arr1;

// const result2 = arr2.reduce((acc, i) => {
//   if (i.id % 2 === 0) {
//     acc.push(i.id);
//   }
//   return acc;
// }, []);

// const arr3 = arr2
//   .filter((i) => {
//     return i.id % 2 === 0;
//   })
//   .map((item) => item.id);

// const result = arr1.concat(result2);
// arr2.unshift("huy");

console.log("result", result.length);
const time2 = Date.now();
console.log("timeToWork", time2 - time1);
