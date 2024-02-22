/**
 * Делает массив, состоящий из number, string, object, undefined, null
 * заданного размера
 */
export function makeArray(size) {
  const arr = [];
  for (let i = 0; i < size; i++) {
    if (!(i % 2)) {
      arr.push(i);
      continue;
    }
    if (!(i % 3)) {
      arr.push(String(i));
      continue;
    }
    if (!(i % 5)) {
      arr.push(true);
      continue;
    }
    if (!(i % 7)) {
      arr.push({ id: i });
      continue;
    }
    arr.push(undefined);
  }
  return arr;
}

/**
 * Делает массив, string
 * заданного размера
 */
export function makeRealObject(size) {
  const arr = Array(size);
  for (let i = 0; i < size; i++) {
    arr[i] = { [String(i)]: { [String(i)]: String(i) } };
  }
  return arr;
}

export function makeStringArray(size) {
  const arr = Array(size);
  for (let i = 0; i < size; i++) {
    arr[i] = String(i);
  }
  return arr;
}
