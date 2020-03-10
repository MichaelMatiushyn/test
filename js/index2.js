'use strict';

// Модуль 2. Массивы и циклы

// const clients = ['Mango', 'Poly', 'Ajax'];
// console.log(clients[0]);
// console.log(clients[1]);

// clients[0] = 'Chelsey';

// console.log(clients);
// clients[3] = 'Alex';
// console.log(clients);
// console.log(clients.length);
// console.log(typeof clients.length);

// const message = "Welcome to Bahamas!"
// console.log(message.split(" "));

// const number = 10;
// for (let i = 0; i < number; i += 1) {
//   console.log(i);
// }

// for (let i = 0, max = 10; i < max; i += 1) {
//   console.log(`${max}%${i}`, max % i);
// }
// const clients = ['Mango', 'Ajax', 'Poly'];

// for (let i = 0; i < clients.length; i += 1) {
//   console.log(typeof clients[i]);
// }
// const numbers = [];
// for (let i = 0; i < 10; i += 1) {
//   numbers.push(`number-${i}`);
// }
// console.log(numbers);

// const arr = ['Mango', 'Poly', 3, true];
// console.log(arr);console.log(arr[1]);

// arr[0] = 'Chelsey';
// console.log(arr);

// if(arr.length === 0){
//   console.log('empty');
// }else{
//   console.log('not empty');
// }

// Методы массивов

// const users = ['Mango', 'Ajax', 'Poly'];

// const string = 'I love JS';
// console.log(string.split(' '));

// const asString = users.join('');

// const numbers = [0, 1, 2, 3];
// numbers.push(4, 5);
// console.log(numbers);
// numbers.pop();
// numbers.pop();
// console.log(numbers);

// const guests = ['Mango', 'Polly'];
// console.log(guests);
// const guestName = prompt('Введите ваше имя');
// guests.push(guestName);
// console.log(guests);

// Метод slice - метод копирования
// const a = [1, 2, 3, 4, 5];
// console.log(a.slice(1,3));
// console.log(a);
// const someNumb = a.slice(1,4);
// console.log(someNumb);

// Метод splice - швейцаарский нож

// const users = ['Mango', 'Ajax', 'Poly', 'Chelsey'];
// console.log(users);

// const deletedItem = users.splice(1, 1);
// console.log(users);
// console.log(deletedItem);
// const asString = users.join(' & ');
// console.log(asString);

// const idx = users.indexOf('Mango');
// console.log(idx);

// const hasUser = users.includes('Poly');
// console.log(hasUser);

// const someUsers = users.slice(1, 3);
// console.log(someUsers);
// console.log(users);
//
// // Замена элемента
// users.splice(1, 1, 'Kong');
// console.log(users);

// // Вставка элементов
// users.splice(2, 0, 'Alex', 'Singu');
// console.log(users);

// Найти элемент массива по значению и вырезать его
// const numbers = [3, 7, 8, 12];
// const idx = numbers.indexOf(8);
// console.log(idx);
// numbers.splice(idx, 1);
// console.log(numbers);

// Замена элементов массива

// const users = ['Mango', 'Ajax', 'Poly', 'Chelsey'];
// console.log(users);

// users.splice(1, 1, 'Alex');
// console.log(users);

// Удаляем пользователя по имени
// const users = ['Mango', 'Ajax', 'Poly', 'Chelsey'];
// const userName = prompt('Имя для удаления');

// if (userName !== null) {
//   const idx = users.indexOf(userName);
//   const hasName = users.includes(userName);
//   if (hasName) {
//     const idx = users.indexOf(userName);
//     console.log(idx);
//     users.splice(idx, 1);

//     console.log(`Элемент ${userName} удален:`, users);
//   } else {
//     console.log('Такого пользователя нет, ошибка');
//   }
// }

// =====================================================
// const a = [1, 2, 3];
// const b = [4, 5, 6];
// const c = a.concat(b);
// console.log('a', a);
// console.log('b', b);
// console.log('c', c);

// =====================================================
// // isArray
// const x = [1,2,3];
// console.log(Array.isArray(x));

// Деструктуризация массивов

// const clients = ['Mango', 'Poly', 'Ajax'];

// const [
//   first = 'new client',
//   second = 'new client',
//   third = 'new client',
//   fourth = 'new client',
// ] = clients;
// console.log(first);
// console.log(fourth);

// =============== Опаратор rest

// const clients = ['Mango', 'Poly', 'Ajax', 'Chelsey'];
// const [first, ...rest] = clients;
// console.log(first);
// console.log(rest);

// ========================

// const numbers = [1, 2, 3, 4, 5];

// const sum = numbers.reduce(function(acc, item) {
//   return acc + item;
// }, 0);
// console.log(sum);

// Методы массивов

// let counter = 0;
// while (counter < 10) {
//   console.log('counter: ',counter);
//   counter += 1;
// }

// ==========================
// const max = 10;
// const min = 1;
// let userInput;

// while (c) {
//   userInput = prompt(`Дай число от ${min} до ${max}`);
// }

// const numbers = [12, 58, 49, 68, 94, 13, 8];
// let i =0;
// while(i<numbers.length){
//   console.log(numbers[i]);
//   i +=1;
// }
// ====================================================
// const max = 10;
// const min = 1;
// let userInput;
// let num;
// let isInRange = false;
// do {
//   userInput = prompt(`Дай число от ${min} до ${max}`);

//   num = Number(userInput);
// } while (userInput !== null && isInRange);

// ================================

// const numbers = [12, 58, 49, 68, 94, 13, 8];
// const newNumbers = [];
// for (let i = 0, max = numbers.length; i < max; i += 1) {
//   if (numbers[i] < 50) {
//     newNumbers.push(numbers[i]);
//   }
// }
// console.log(newNumbers);

// ==========================
// Цикл for of

// const numbers = [12, 58, 49, 68, 94, 13, 8];
// const newNumbers = [];
// for (let item of numbers) {
//   if (item < 50) {
//     newNumbers.push(item);
//   }
// }
// console.log(numbers);
// console.log(newNumbers);

// =========================

// const numbers = [12, 58, 49, 68, 94, 13, 8];
// const userInput = Number(prompt('Давай число!'));
// let hasNumber = false;
// for (let i = 0, max = numbers.length; i < max; i += 1) {
//   if (numbers[i] === userInput) {
//     hasNumber = true;
//     break;
//   }
// }
// console.log(hasNumber);

// const message = hasNumber
// ? 'Есть такое число'
// : 'Нет такого числа';

// console.log(message);

// ========================

// const numbers = [
//   [12, 5, 7],
//   [18, 9, 14, 46],
//   [24, 8],
// ];
// const flatArr = [];
// for (let i = 0, max = numbers.length; i < max; i += 1) {
//   for (let j = 0, max = numbers[i].length; j < max; j += 1) {
//     flatArr.push(numbers[i][j]);
//   }
// }
// console.log(flatArr);

// =======================================================
// const numbers = [
//   [12, 5, 7],
//   [18, 9, 14, 46],
//   [24, 8],
// ];
// const flatArr = [];
// const arr = [];
// for (let i = 0, max = numbers.length; i < max; i += 1) {
//   for (let j = 0, max = numbers[i].length; j < max; j += 1) {
//     if (numbers[i][j] > 10) {
//       arr.push(numbers[i][j]);
//     }
//   }
// }
// console.log(arr);

// ============================================================

// const numbers = [
//   [12, 5, 7],
//   [18, 9, 14, 46],
//   [24, 8],
// ];
// let hasNumber = false;
// const value = 14;
// for (let i = 0, max = numbers.length; i < max; i += 1) {
//   if (hasNumber) {
//     break;
//   }
//   for (let j = 0, max = numbers[i].length; j < max; j += 1) {
//     if (numbers[i][j] === value) {
//       hasNumber = true;
//       break;
//     }
//     console.log('second for');
//   }
//   console.log('first for');
// }

// const message = hasNumber ? 'Есть такое число' : 'Такого числа нет';
// console.log(message);

// ====================

// const logins = ['mango', 'poly', 'ajax'];
// const min = 3;
// const max = 6;

// let userInput = prompt('Давай логин!');
// if (userInput !== null) {
//   const inRange = userInput.length >= min && userInput.length <= max;
//   if (inRange) {
//     userInput = userInput.toLowerCase();
//     let hasLogin = false;

//     for (const login of logins) {
//       if (login === userInput) {
//         hasLogin = true;
//         break;
//       }
//     }
//     const message = hasLogin ? 'Есть такой логин' : 'Такого логина нет';
//     console.log(message);
//   } else {
//     console.log('Не в дипазоне!');
//   }
// } else {
//   console.log('Пока!');
// }

// //   ======== или ========
// // const hasLogin = logins.includes(userInput);

// // const message = hasLogin ? 'Есть такой логин' : 'Такого логина нет';
// // console.log(message);
// // 01:55

// Повтор 2 модуля с начала

// const users = ['Mango', 'Ajax', 'Poly'];
// // console.log(users.length);
// // console.log(users[2]);
// // console.log(users[3]);

// // users[3] = 'Chelsey';
// // console.log(users);

// // const string = 'I love js';
// // console.log(string.split(' '));

// // const userInput = prompt('Введите товары через запятую');
// // console.log(userInput);

// // const goods = userInput.split(', ');
// // console.log(goods);

// // const asString = users.join(' - ');
// // console.log(asString);

// const userInput = prompt('введите имя');

// // const user = users.indexOf(userInput);
// // console.log(user);

// const hasUser = users.includes(userInput);
// console.log(hasUser);

// const users = ['Mango', 'Ajax', 'Poly'];

// users.push('Chelsey');
// console.log(users);
// users.push('Kolia');
// console.log(users);

// const deletedEl = users.pop();
// console.log('Deleted element: ',deletedEl);
// console.log(users);

// const guests = ['Mango', 'Poly'];
// const guestName = prompt('Давай имя');
// console.log(guests);
// guests.push(guestName);

// console.log(guests);

// const users = ['Mango', 'Ajax', 'Poly', 'Chelsey'];

// const someUsers = users.slice(1,3);

// console.log('some users', someUsers);
// console.log(users);

// const users = ['Mango', 'Ajax', 'Poly', 'Chelsey'];
// console.log(users);

// // console.log(users.splice(2, 1));  просто вырезать!!!!!!!!!!

// console.log(users);

// Найти элемент массива по значению и вырезать его
// const numbers = [3, 7, 8, 12];
// console.log(numbers);

// const idx = numbers.indexOf(8);

// console.log(numbers.splice(idx, 1));
// console.log(numbers);

// const users = ['Mango', 'Ajax', 'Poly', 'Chelsey'];

// // users.splice(2, 0, 'Alex', 'Johny');
// // console.log(users);
// // console.log(users);
// // users.splice(1, 1, 'Alex');
// // console.log(users);

// const users = ['Mango', 'Ajax', 'Poly', 'Chelsey'];
// const userName = prompt('введите имя пользователя');

// if (userName !== null) {
//   const hasName = users.includes(userName);

//   if (hasName) {
//     const idx = users.indexOf(userName);

//     users.splice(idx, 1);
//     console.log(`Элемент ${userName} удален`, users);
//   } else {
//     console.log('такого пользователя нет, ошибка!');
//   }
// }

// console.log(Array.isArray(users));

// =================================================
// Метод concat

// const a = [1,2,3];
// const b = [4,5,6];

// const c = a.concat(b);
// console.log(c);

// Продолжить просмотр на 01:48

// =======================================================

// ДЕСТРУКТУРИЗАЦИЯ !!!!!!

// const clients = ['Mango', 'Poly', 'Ajax'];
// // const first = clients[0];

// // const [first, second, third, fourth] = clients;
// // console.log(first);
// // console.log(third);
// // console.log(fourth);

// // Значение по умолчанию / старая версия

// const [
//   first = 'client',
//   second = 'client',
//   third = 'client',
//   fourth = 'client',
// ] = clients;

// console.log(first);
// console.log(fourth);

// ===============   ОПРЕАТОР REST   ===================

// const clients = ['Mango', 'Poly', 'Ajax'];

// const [first, ...rest] = clients;

// console.log(rest);

// 2 часть

// const numbers = [1, 2, 3, 4, 5];
// const sum = numbers.reduce(function(acc, item) {
//   return acc + item;
// }, 0);;

// console.log(sum);

// ЦИКЛЫ

// while (условие){
// тело цикла;
// }

// пример
// let counter = 0;

// while (counter < 10) {
//   console.log('counter: ', counter);
//   counter += 1;
// }

// =======================================

// const max = 10;
// const min = 1;

// let userInput;
// while (userInput !== null) {
//   console.log(userInput);
//   userInput = prompt(`Дай число от ${min} до ${max}`);
// };

// ===============================

// const numbers = [12, 75, 90, 7, 23, 14];
// let i = 0;
// while (i < numbers.length) {
//   console.log(numbers[i]);
//   i += 1;
// }

// ===============================================
// Цикл do while (condition) {

// // }
// const max = 10;
// const min = 1;
// let userInput;
// let num;
// let inRange = false;

// do {
//   userInput = prompt(`Дай число от ${min} до ${max}`);

//   num = Number(userInput);
//   inRange = num >= min && num <= max;
//   console.log(userInput);
// } while (userInput !== null && !inRange);

// const numbers = [12, 75, 90, 7, 23, 14];
// for (let i = 0, max = numbers.length; i < max; i += 1) {
//   if (numbers[i] < 50) {
//     console.log(numbers[i]);
//   }
// }
// =========================================================
// const numbers = [12, 75, 90, 7, 23, 14];
// const newNumbers = [];
// for (let i = 0, max = numbers.length; i < max; i += 1) {
//   if (numbers[i] < 50) {
//     newNumbers.push(numbers[i]);
//   }
// }
// console.log(newNumbers);
// ===========================================================
// const numbers = [12, 75, 90, 7, 23, 14];
// const newNumbers = [];
// for (let item of numbers) {
//   if (item < 50) {
//     newNumbers.push(item);
//   }
// }
// console.log(newNumbers);
// ================================================================
// const numbers = [12, 75, 90, 7, 23, 14];
// const userInput = Number(prompt('Давай число'));
// let hasNumber = false;

// for (let i = 0, max = numbers.length; i < max; i += 1) {
//   if (numbers[i] === userInput) {
//     hasNumber = true;
//     break;
//   }
// }
// const message = hasNumber ? 'Есть такое число!' : 'Такого числа нет!';
// console.log(message);
// =============================

// const numbers = [
//   [12, 5, 7],
//   [18, 9, 14, 46],
//   [24, 8],
// ];
// const flatArr = [];

// for (let i = 0, max = numbers.length; i < max; i += 1) {
//   for (let j = 0, max = numbers[i].length; j < max; j += 1) {
//     if (numbers[i][j] > 10) {
//       flatArr.push(numbers[i][j]);
//     }
//   }
// }

// console.log(flatArr);

// продолжить просмотр 2 часть 01:22

// ==========================================

// const numbers = [
//   [12, 5, 7],
//   [18, 9, 14, 46],
//   [24, 8],
// ];
// const value = 14;
// let hasNumber = false;

// for (let i = 0, max = numbers.length; i < max; i += 1) {
//   if (hasNumber) {
//     break;
//   }
//   for (let j = 0, max = numbers[i].length; j < max; j += 1) {
//     if (value === numbers[i][j]) {
//       hasNumber = true;
//     }
//     console.log('second for');
//   }
//   console.log('first for');
// }

// const message = hasNumber ? 'Есть такое число' : 'Такого числа нет';

// console.log(message);

// ===============================================================

// const logins = ['Mango', 'Poly', 'Ajax'];
// const min = 3;
// const max = 6;

// const userInput = prompt('Давай login');

// if (userInput !== null) {
//   const inRange = userInput.length >= min && userInput.length <= max;
//   if (inRange) {
//     // const hasLogin = logins.includes(userInput);

//     // const message = hasLogin ? 'Есть такое имя' : 'Такого имени нет';
//     // console.log(message);

//     // или

//     let hasLogin = false;
//     for (const login of logins) {
//       if (login === userInput) {
//         hasLogin = true;
//       }
//     }
//     const message = hasLogin ? 'Есть  такой логин' : 'Такого логина нет';
//     console.log(message);
//   } else {
//     console.log(`к-во символов не входит в промежуток от ${min} до ${max}`);
//   }
// } else {
//   console.log('ну ладно пока');
// }
