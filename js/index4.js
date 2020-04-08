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
// Модуль 4.2
// const user = {
//   name: 'alex',
//   age: 1,
// };

// const x = 'name';
// // const value = user.name;
// const value = user[x];
// console.log(value);

// const a = { x: 5 };
// const b = a;

// console.log(a);
// console.log(b);

// a.x = 10;
// console.log(a);
// console.log(b);
//
// ================================================

// const user = {
//   name: 'alex',
//   age: 2,
//   showName() {
//     console.log(this.name);
//   },
// };

// user.showName();

// Магазин плюс контекст

// const shop = {
//   products: [
//     { name: 'apples', amount: 100, price: 30 },
//     { name: 'grapes', amount: 150, price: 40 },
//     { name: 'bananas', amount: 200, price: 50 },
//   ],
//   addProduct(product) {
//     this.products.push(product);
//   },
//   findProduct(productName) {
//     for (const elem of this.products) {
//       if (elem.name === productName) {
//         return elem;
//       }
//     }
//   },
//   addProductAmount(productName, num) {
//     console.log(`Adding ${num} ${productName}`);
//     const product = this.findProduct(productName);
//     product.amount += num;
//   },
//   subtractProductAmount(productName, num) {
//     console.log(`Selling ${num} ${productName}`);
//     const product = this.findProduct(productName);
//     product.amount -= num;
//   },
//   getAllProducts() {
//     return this.products;
//   },
// };

// shop.addProduct({
//   name: 'mango',
//   amount: 300,
//   price: 100,
// });

// console.log(shop.getAllProducts());

// ========================
// Сначала как метод, а потом в глобальном контексте
// const obj = {
//   param: 'obj param',
//   showThis() {
//     console.log('this', this);
//   },
// };
// obj.showThis();
// const fn = obj.showThis;
// console.log(fn);
// fn();
// ----------------------------------
// Сначала как функция, а потом как метод
// const showThis = function() {
//   console.log('this: ', this);
// };
// showThis();

// const user = {
//   name: 'Alex',
// };
// user.fn = showThis;
// console.log(user.fn);

// user.fn();
// ======================
// this в стрелочной функции
// const obj = {
//   param: 'obj param',
//   showThis: () => {
//     console.log('this', this);
//   },
// };
// obj.showThis();

// const fn = () => {
//   console.log('this', this);
// };

// fn();
// const obj = {
//   name: 'alex',
// };
// obj.x = fn;
// obj.x();

// ============================
// this  в локальной области видимости
// const hotel = {
//   name: 'hello',
//   showThis() {
//     console.log('this in showThis', this);

//     const fn = () => {
//       console.log('this in fn', this);
//     };
//     console.log(fn());
//   },
// };
// hotel.showThis();
// ====================================================
// this в callback
//
// const hotel = {
//   name: 'Resort Hotel',
//   showThis() {
//     console.log(this);
//   },
// };

// const fn = function(callback) {
//   console.log('this в fn', this);
//   console.log('callback:', callback);
//   callback();
// };

// hotel.newFn = fn;

// hotel.newFn(hotel.showThis);

// ===================================

// const userA = {
//   name: 'userA',
//   showName() {
//     console.log(this.name);
//   },
// };

// const userB = {
//   name: 'userB',
// };

// userA.showName();
// ------------------

// const showName = function() {
//   console.log(this.name);
// };
// const userA = {
//   name: 'userA',
//   showName() {
//     console.log(this.name);
//   },
// };

// const userB = {
//   name: 'userB',
// };

// userA.showName = showName;
// userB.showName = showName;
// console.log(userA);

// userA.showName();

// ==================

// Методы объектов
// Call

// const showName = function(arr) {
//   console.log('this.name: ', this.name);
//   // console.log('a+b: ', a + b);
//   console.log('arr:', arr);
// };
// const userA = {
//   name: 'userA',
// };

// const userB = {
//   name: 'userB',
// };
// // showName.call(userB, 5, 10);
// // showName.apply(userA, [5, 10, 123]);

// const array = [1, 2, 3, 4, 5];

// // showName.call(userA, array);
// // showName.apply(userB, array);

// const boundShowName = showName.bind(userA, [1, 2, 3, 4, 5]);
// console.log(boundShowName);
// boundShowName();

// =================================================
// фиксим callback

// const hotel = {
//   name: 'Resort Hotel',
//   showThis() {
//     console.log('this в callback', this);
//   },
// };

// const fn = function(callback) {
//   console.log('this в fn', this);
//   callback();
// };
// const boundShowThis = hotel.showThis.bind(hotel);
// fn(boundShowThis);

// =====================================================
// Конструктор

// const user = {
//   name: 'alex',
//   age: 20,
//   isActive: true,
// };

// function User({
//   friendsCount = 0,
//   name = 'user',
//   age = 18,
//   isAdmin = false,
//   isActive = false,
// }) {
//   const message = 'Hello';
//   this.name = name;
//   this.age = age;
//   this.isActive = isActive;
//   this.friendsCount = friendsCount;
//   this.isAdmin = isAdmin;
//   this.showName = function() {
//     console.log(message + ' ' + this.name);
//   };
//   this.addAge = function(val) {
//     this.age += val;
//   };
// }
// const mango = new User({
//   name: 'mango',
//   age: 2,
//   friendsCount: 15,
//   isAdmin: true,
// });

// const alex = new User({
//   name: 'Alex',
//   age: 2,
//   isActive: true,
//   friendsCount: 10,
// });

// const poly = new User({
//   name: 'poly',
//   age: 5,
//   friendsCount: 100,
// });

// console.log(poly);
// console.log(mango.isAdmin);

// Расширяем магазин конструкторами
// function Shop({ products = [], managers = [] }) {
//   this.products = products;
//   this.managers = managers;

//   this.addProduct = function(product) {
//     this.products.push(product);
//   };
//   this.addManager = function(params) {
//     const manager = new Manager(params);
//     this.managers.push(manager);
//   };
//   this.findProduct = function(productName) {
//     for (const elem of this.products) {
//       if (elem.name === productName) {
//         return elem;
//       }
//     }
//   };
//   this.addProductAmount = function(productName, num) {
//     console.log(`Adding ${num} ${productName}`);
//     const product = this.findProduct(productName);
//     product.amount += num;
//   };
//   this.subtractProductAmount = function(productName, num) {
//     console.log(`Selling ${num} ${productName}`);
//     const product = this.findProduct(productName);
//     product.amount -= num;
//   };
//   this.getAllProducts = function() {
//     return this.products;
//   };
//   this.makeSale = function(managerName, productName) {
//     for (const manager of this.managers) {
//       if (manager.name === managerName) {
//         manager.sell(productName, this.products);
//       }
//     }
//   };
// }

// function Manager({ name = 'manager', salesCount = 0 }) {
//   this.name = name;
//   this.salesCount = salesCount;
//   this.sell = function(productName, products) {
//     console.log('inside Manager.sell, product name', productName);
//     console.log('inside Manager.sell, products ', products);
//     console.log(`Selling ${productName}`);
//   };
// }
// const products = [
//   { name: 'apples', amount: 100, price: 30 },
//   { name: 'grapes', amount: 150, price: 40 },
//   { name: 'bananas', amount: 200, price: 50 },
// ];
// const shopA = new Shop({
//   products: products,
// });

// shopA.addProduct({
//   name: 'mango',
//   amount: 300,
//   price: 100,
// });
// shopA.addManager({ name: 'mango', salesCount: 10 });
// shopA.addManager({ name: 'poly', salesCount: 20 });
// shopA.makeSale('mango', 'apples');
