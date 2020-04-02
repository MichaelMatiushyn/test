'use strict';
//  Модуль 4

// const user = {
//   name: 'Mango',
//   age: 10,
//   friends: 300,
//   status: 'happy',
//   isActive: true,
// };

// console.log(user.name);
// console.log(user['name']);

// ========================

// const name = 'Alex';

// const user = {
//   name,
// };
// console.log(user);
// ========================

// const user = {
//   name: 'Mango',
//   age: 10,
//   friends: 300,
//   status: 'happy',
//   isActive: true,
//   prop: 123,
// };
// // console.log(user);
// // delete user.isActive;
// // console.log(user);
// // console.log('prop' in user);
// // console.log(user.hasOwnProperty('prop'));

// const getPropValue = (obj, prop) => {
//   console.log(obj[prop]);
// };
// getPropValue(user, 'status');

// ======================================================

// const user = {
//   name: 'Mango',
//   age: 10,
//   friends: 300,
//   status: 'happy',
//   isActive: true,
//   prop: 123,
//   // старый метод написания
//   sayHi: function() {
//     console.log('HI!');
//   },
//   // новая форма записи
//   sayHello() {
//     console.log('Hello');
//   },
//   addFriends(val) {
//     user.friends += val;
//   },
// };
// user.sayHi();
// user.sayHello();
// user.addFriends(50);
// console.log(user.friends);
//   Присвоение по значению

// let a = 5;
// let b = 10;
// console.log('a', a);
// console.log('b', b);

// let a = { num: 5 };
// let b = a;
// console.log('a', a);
// console.log('b', b);
// a.num = 10;
// console.log('a', a);
// console.log('b', b);

// =========================
// передача по значению
// let x = 5;
// function changeValue(val) {
//   val = 10;
// }

// changeValue(x);
// console.log(x);

// =========================
//  передача по ссылке
// const numbers = [1, 2, 3];
// function addToArray(arr) {
//   arr.push(4);
// }
// addToArray(numbers);
// console.log(numbers);
// ===================================

// Перебор объекта
// const user = {
//   name: 'Mango',
//   age: 10,
//   friends: 300,
//   status: 'happy',
//   isActive: true,
//   prop: 123,
//   // старый метод написания
//   sayHi: function() {
//     console.log('HI!');
//   },
//   // новая форма записи
//   sayHello() {
//     console.log('Hello');
//   },
//   addFriends(val) {
//     user.friends += val;
//   },
// };

// for (let key in user) {
//   const hasKey = user.hasOwnProperty(key);
//   if (hasKey) {
//     console.log(`${key}: ${user[key]}`);
//   }
// }

// использование конструктора Object

// const keys = Object.keys(user);
// console.log(keys);

// for (let key of keys) {
//   console.log(`${key}: ${user[key]}`);
// }
// const values = Object.values(user);
// console.log(values);

// const entries = Object.entries(user);

// // for (const entry of entries) {
// //   // const key = entry[0];
// //   // const value = entry[1];
// //   const [key, value] = entry;
// //   console.log(`${key}: ${value}`);
// // }

// // или проще

// for (const [key, value] of entries) {
//   // const key = entry[0];
//   // const value = entry[1];
//   console.log(`${key}: ${value}`);
// }

// ====================================================
// Пример. делаем магазин
// const shop = {
//   products: [
//     { name: 'apples', amount: 100, price: 30 },
//     { name: 'grapes', amount: 150, price: 40 },
//     { name: 'bananas', amount: 200, price: 50 },
//   ],
//   addProduct(product) {
//     shop.products.push(product);
//   },
//   getProductInfo(productName) {
//     for (const elem of shop.products) {
//       if (elem.name === productName) {
//         return elem;
//       }
//     }
//   },
//   addProductAmount(productName, num) {
//     console.log(`Adding ${num} ${productName}`);
//     for (let elem of shop.products) {
//       if (elem.name === productName) {
//         elem.amount += num;
//       }
//     }
//   },
//   subtractProductAmount(productName, num) {
//     console.log(`Selling ${num} ${productName}`);
//     for (let elem of shop.products) {
//       if (elem.name === productName) {
//         elem.amount -= num;
//       }
//     }
//   },
//   getAllProducts() {
//     return shop.products;
//   },
// };

// shop.addProduct({
//   name: 'mango',
//   amount: 300,
//   price: 100,
// });

// const info = shop.getProductInfo('grapes');
// shop.addProductAmount('bananas', 150);
// shop.subtractProductAmount('apples', 50);
// console.log(shop);
// const products = shop.getAllProducts();
// console.log(products);
// ===========================================================

// Слияние объектов   Object.assign()

// const x = {
//   name: 'Alex',
//   age: 10,
// };
// x.name = 'Ага, щас!';
// console.log(x);

// const a = { x: 10, y: 'hello' };
// const b = { z: 25 };
// const c = { x: 25, prop: 'qweqwe' };

// Object.assign(a, b, c);

// console.log('a', a);
// console.log('b', b);
// ==================   Пример  ===========

// const defaultSettings = {
//   name: 'user',
//   isActive: false,
//   mail: '',
//   theme: 'light',
//   isAdmin: false,
// };
// const userSettings = {
//   name: 'Mango',
//   mail: 'mango@gmail.com',
//   theme: 'dark',
// };

// const settings = Object.assign({}, defaultSettings, userSettings);
// console.log(settings);
// console.log(defaultSettings);

// // либо через оператор spread
// const settings = { ...defaultSettings, ...userSettings };

// ==================================================
// Деструктуризация объекта

// const user = {
//   name: 'Mango',
//   age: 10,
//   friends: 300,
//   status: 'happy',
//   isActive: true,
//   prop: 123,
//   // старый метод написания
//   sayHi: function() {
//     console.log('HI!');
//   },
//   // новая форма записи
//   sayHello() {
//     console.log('Hello');
//   },
//   addFriends(val) {
//     user.friends += val;
//   },
// };

// // const {
// //   age: userAge, // можно присвоить для переменной, ставим после : и пишем имя переменной
// //   isActive: active,
// //   name: userName = 'user', // после имя переменной можно поставить значение по умолчанию - после знака =
// // } = user;
// // console.log(userName);
// // console.log(userAge);
// // console.log(active);

// const { name, age, ...rest } = user;
// console.log(name);
// console.log(age);
// console.log(rest);

// ===========================================================
// End of part 4.1