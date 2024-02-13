// Создание пустого объекта и выделение памяти
var buffer = new ArrayBuffer(500 * 1024);
export var asmModule = (function (stdlib, foreign, buffer) {
  "use asm";

  var heap = new stdlib.Uint8Array(buffer);

  // Функция для установки значения объекту по индексу
  function setProperty(index, value) {
    index = index | 0;
    value = value | 0;
    heap[index] = value;
  }

  // Функция для получения значения объекта по индексу
  function getProperty(index) {
    index = index | 0;
    return heap[index] | 0;
  }

  return {
    setProperty: setProperty,
    getProperty: getProperty,
  };
})(global, null, buffer);

// Использование объекта
// asmModule.setProperty(0, 42);
// console.log(asmModule.getProperty(0)); // Выводит 42
