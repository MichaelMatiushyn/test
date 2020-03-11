'use strict';

// Моодуль 3

// Функции

// const multiply = function(a, b) {
//   const result = a * b;
//   return result;
// };

// const z = multiply(2, 3);
// console.log(z);
// =========================
// const show = function() {
//   console.log('inside show');
// };
// show();

// const findNumbers = function(arr,value) {
// const numbers = [];

//   for (let item of arr) {
//   if (item > value) {
//     numbers.push(item);
//   }
// }
// return numbers;
// };

// const arr1 = [12, 5, 46, 78];
// const arr2 = [17, 15, 146, 278, 890];

// const newArr1 = findNumbers(arr1, 15);
// const newArr2 = findNumbers(arr2, 25);

// console.log(newArr1);
// console.log(newArr2);
// =================================================

// Обявление функции   может использоваться до обявления

// console.log(multiply(2, 3));

// function multiply(x, y) {
//   return x * y;
// }

// =================================================
// Значения по умолчанию

// const multiply2 = function(x = 2, y = 3) {
//   return x * y;
// };
// console.log(multiply2(5));

// ===============================================

// function greet(name) {
//   console.log(`Привет ${name}`);
// }

// greet('Mango');

// ==========================================
// const findLargestNumber = function(arr) {
//   let largestNumber = arr[0];

//   for (let i = 1, max = arr.length; i < max; i += 1) {
//     const elem = arr[i];
//     if (largestNumber < elem) {
//       largestNumber = elem;
//     }
//   }
//   return largestNumber;
// };

// const numbers = [28, 6, 34, 4, 56, 9, 12, 22];
// const result = findLargestNumber(numbers);

// console.log(result);
// // let largestNumber = numbers[0];

// // for (let i = 1, max = numbers.length; i < max; i += 1) {
// //   const elem = numbers[i];
// //   if (largestNumber < elem) {
// //     largestNumber = elem;
// //   }
// // }

// // console.log(largestNumber);

// ==================================

// const findLargestNumber = function(arr) {
//   let largestNumber = arr[0];

//   for (let i = 1, max = arr.length; i < max; i += 1) {
//     const elem = arr[i];
//     if (largestNumber < elem) {
//       largestNumber = elem;
//     }
//   }
//   return largestNumber;
// };

// const transformArray = function(arr) {
//   const newArr = [];
//   for (let item of arr) {
//     newArr.push(Number(item));
//   }
//   return newArr;
// };

// const getUserInput = function() {
//   const input = prompt('Введите числа через запятую!');

//   if (input === null) {
//     return;
//   }
//   const arr = input.split(',');
//   const transformedArr = transformArray(arr);
//   return transformedArr;
// };

// const userInput = getUserInput();
// const num = findLargestNumber(userInput);

// console.log(num);
// ==============================================================

// Псевдомассив и превращение его в массив

// const summ = function(...args) {
//   let result = 0;
//   // const args = Array.from(arguments);
//   // или
//   // const args = [...arguments];

//   // или указывая (...args) распыляем аргументы в массив args

//   for (let item of args) {
//     result += item;
//   }
//   return result;
// };
// console.log(summ(1, 2, 3, 4, 5));

// ================================================================

// Область видимости
// const greet = function(name) {
//   const message = `Good day to you, ${name}`;

//   console.log(message);
// };
// greet('Mango');

// ================================================================

// const a = 20;
// const b = 10;

// const add = function() {
//   const a = 5;
//   return a + b;
// };

// console.log(add());
// =======================================================

// let x = 10;

// function foo() {
//   let y = 20;

//   function bar() {
//     let z = 15;
//     return x + y + z;
//   }
//   return bar();
// }

// console.log(foo());
// =======================================================

// Стрелочные функции

// const add = function(a, b, c) {
//   return a + b + c;
// };
//  можно записать как

// const add = (a, b, c) => a + b + c;
// console.log(add(1, 2, 3));

// const fn = (...args) => {
//   console.log(args);
// };
// fn(1, 2, 3, 4);

// const hasEl = (arr, el) => {
//   const result = arr.includes(el);
//   return result;
// };
// const x = hasEl([1, 2, 3], 3);
// console.log(x);

// const hasEl = (arr, el) => arr.includes(el);

// const x = hasEl([1, 2, 3], 5);
// console.log(x);

// ===================================================

// Функции обратного вызова

// const logger = function(val) {
//   console.log('Logger output: ', val);
// };
// const findNumber = function(arr, num, log) {
//   const hasNumber = arr.includes(num);
//   if (hasNumber) {
//     log('нашли');
//   } else {
//     log('не нашли');
//   }
// };

// const numbers = [1, 2, 3, 4, 5];
// findNumber(numbers, 5, logger);
// =======================================================

// const showSuccess = () => console.log('SUCCESS!');
// const showError = () => console.log('ERROR!');
// const showGoodbye = () => console.log('Goodbye!');

// const getNumber = function(onCancel, onError, onSuccess) {
//   const input = prompt('Давай число от 1 до 5');

//   if (input === null) {
//     onCancel();
//     return;
//   }
//   if (input < 1 || input > 5) {
//     onError();
//     return;
//   }
//   onSuccess();
// };

// getNumber(showGoodbye, showError, showSuccess);

// ==============================================================

// IIFE  Самовызывающаяся функция
// для создания закрытой области видимости
// let a = 5;
// console.log(a + 5);

// let a = 10;
// console.log(a + 10);
// ========

// let a = 5;

// (function() {
//   let a = 10;
//   console.log(a);
// })();
// console.log(a);

// ====  можно как стрелочную функцию

// (() =>{

// } )()

const x = (function(a, b, c) {
  return a + b + c;
})(5, 1, 3);

console.log(x);
// =========== ппродолжить просмотр на 3 части модуль 3
