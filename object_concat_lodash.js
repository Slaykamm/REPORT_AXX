import pkg from "lodash";
const { merge } = pkg;

function getObject(name) {
  let obj = {};
  for (let i = 0; i < 300_000; i++) {
    Object.assign(obj, { [String(name) + i]: { id: i, name: String(i) } });
  }
  return obj;
}

const obj1 = getObject("first");
const obj2 = getObject("second");

const time1 = Date.now();
const obj3 = merge({}, obj1, obj2);
const time2 = Date.now();

console.log("object1 length", Object.keys(obj1).length);
console.log("object2 length", Object.keys(obj2).length);
console.log("Final object length", Object.keys(obj3).length);

console.log("Execute time", time2 - time1);

// О Лодаше
// var users = {
//   data: [{ user: "barney" }, { user: "fred" }],
// };

// var ages = {
//   data: [{ age: 36 }, { age: 40 }, { age: 52 }],
// };
// console.log("test3", merge({}, users, ages));
// console.log("test1", users);
// console.log("test2", ages);

// test3
// {
//   data: [{ user: "barney", age: 36 }, { user: "fred", age: 40 }, { age: 52 }];
// }
// test1 { data: [ { user: 'barney' }, { user: 'fred' } ] }
// test2 { data: [ { age: 36 }, { age: 40 }, { age: 52 } ] }
