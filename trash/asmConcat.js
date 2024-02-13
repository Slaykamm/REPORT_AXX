import { makeArray } from "../utils/makeArray.js";

var heap = new ArrayBuffer(0x10000);
var heap32 = new Int32Array(heap);
var heapU32 = new Uint32Array(heap);
var heapF64 = new Float64Array(heap);

var heapBase = 0;

function allocateMemory(sizeInBytes) {
  var alignedSize = Math.ceil(sizeInBytes / 8) * 8;
  var oldHeapBase = heapBase;
  heapBase += alignedSize;
  return oldHeapBase;
}

function copyArrayElements(srcArray, destArray, srcIndex, destIndex, length) {
  for (var i = 0; i < length; i++) {
    destArray[destIndex + i] = srcArray[srcIndex + i];
  }
}

function asmConcat(arr1Ptr, arr1Length, arr2Ptr, arr2Length) {
  var newArrLength = arr1Length + arr2Length;
  var newArrayPtr = allocateMemory(newArrLength * 4);

  //   var newArray = Array.from(
  //     heap32.subarray(newArrayPtr / 4, (newArrayPtr + newArrLength * 4) / 4)
  //   );
  var newArray = heap32.subarray(
    newArrayPtr / 4,
    (newArrayPtr + newArrLength * 4) / 4
  );
  var arr1 =
    arr1Length > 0
      ? Array.from(heap32.subarray(arr1Ptr / 4, (arr1Ptr + arr1Length * 4) / 4))
      : [];
  var arr2 =
    arr2Length > 0
      ? Array.from(heap32.subarray(arr2Ptr / 4, (arr2Ptr + arr2Length * 4) / 4))
      : [];

  newArray.set(arr1, 0);
  newArray.set(arr2, arr1Length);

  var newArrayPtrFinal = allocateMemory(newArrLength * 4);
  heap32.set(newArray, newArrayPtrFinal / 4);

  return newArrayPtrFinal;
}

var concat = asmConcat;

var arr1 = makeArray();
var arr2 = makeArray();

const time1 = performance.now();

var arr1Ptr = allocateMemory(arr1.length * 4);
var arr2Ptr = allocateMemory(arr2.length * 4);
heap32.set(arr1, arr1Ptr / 4);
heap32.set(arr2, arr2Ptr / 4);
var resultPtr = concat(arr1Ptr, arr1.length, arr2Ptr, arr2.length);
var result = Array.from(
  heap32.subarray(
    resultPtr / 4,
    (resultPtr + (arr1.length + arr2.length) * 4) / 4
  )
);

const time2 = performance.now();

console.log("timeToWork", time2 - time1);
console.log("array #1 length", arr1.length);
console.log("array #2 length", arr2.length);
console.log("result array length", result.length);

// console.log(result); // Output: [1, 2, 3, 4, 5, 6]

// В данном примере используется ArrayBuffer для создания памяти, в которой хранятся данные массивов.
// Функция allocateMemory выделяет участок памяти заданного размера и возвращает указатель на начало этого участка.
// Функция copyArrayElements копирует элементы из одного массива в другой.

// Функция asmConcat принимает указатели на два массива и их длины. Она создает новый массив, выделяя под него память,
// копирует элементы из первого массива, а затем из второго массива, и возвращает указатель на начало нового массива.

// В примере создается массивы arr1 и arr2, выделяется память под их данные с помощью функции allocateMemory,
// и копируются элементы массивов в память с помощью heap32.set. Затем вызывается функция concat (была задана
// синонимом asmConcat), которая возвращает указатель на начало нового объединенного массива. И наконец, новый
// массив извлекается из памяти и выводится в консоль.
