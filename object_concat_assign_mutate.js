function getObject(name) {
  let obj = {};
  for (let i = 0; i < 300_000; i++) {
    // obj = { ...obj, ...{ id: i, name: String(i) } };
    Object.assign(obj, { [String(name) + i]: { id: i, name: String(i) } });
  }
  return obj;
}

const obj1 = getObject("first");
const obj2 = getObject("second");

const time1 = Date.now();
const obj3 = Object.assign(obj1, obj2);
const time2 = Date.now();

console.log("object1 length", Object.keys(obj1).length);
console.log("object2 length", Object.keys(obj2).length);
console.log("Final object length", Object.keys(obj3).length);

console.log("Execute time", time2 - time1);
