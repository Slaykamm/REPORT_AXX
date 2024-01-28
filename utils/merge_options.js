/**
 * Функция мерджа массива объектов через ключи
 * @param {Object} obj1
 * @param {Object} obj2
 * @returns {Object} obj3
 */

export function merge_options(obj1, obj2) {
  let obj3 = {};
  for (const attrname in obj1) {
    obj3[attrname] = obj1[attrname];
  }
  for (const attrname in obj2) {
    obj3[attrname] = obj2[attrname];
  }
  return obj3;
}
