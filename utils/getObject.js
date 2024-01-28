export function getObject(name) {
  let obj = {};
  for (let i = 0; i < 300_000; i++) {
    Object.assign(obj, { [String(name) + i]: { id: i, name: String(i) } });
  }
  return obj;
}
