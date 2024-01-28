/**
 * Делает массив, состоящий из number, string, object, undefined, null
 * размером 50 000 000 шт.
 */
export function makeArray() {
  const arr = [];
  for (let i = 0; i < 50_000_000; i++) {
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
    if (!(i % 10)) {
      arr.push(String(null));
      continue;
    }
    arr.push(undefined);
  }
  return arr;
}
