'use strict';

// Функциональные методы массивов

// Декларативная запись

// const numbers = [1, 2, 3, 4, 5];

// const newNumbers = numbers.filter(x => x > 2);
// console.log(newNumbers);

//  Императивный . старый метод
// const double = function (arr) {
//   const resultArray = [];
//   for (let i = 0, max = arr.length; i < max; i += 1) {
//     resultArray.push(arr[i] * 2);
//   }
//   return resultArray;
// };

// const doubledArr = double(numbers);
// console.log(numbers);
// console.log(doubledArr);
// const double = value => value * 2;
// const plusFive = value => value + 5;

// const map = function (arr, callback) {
//   const resultArr = [];
//   for (let i = 0, max = arr.length; i < max; i += 1) {
//     const element = arr[i];
//     const item = callback(element);
//     resultArr.push(item);
//   }
//   return resultArr;
// };
// const result = map(numbers, double);

// console.log('numbers: ', numbers);
// console.log('result: ', result);

// const usersDb = [
//   { id: '000', name: 'mango', posts: 218, isActive: true },
//   { id: '001', name: 'poly', posts: 179, isActive: false },
//   { id: '002', name: 'ajax', posts: 32, isActive: true },
//   { id: '003', name: 'chelsey', posts: 74, isActive: false },
// ];

// const getUserName = user => user.name;

// const userNames = map(userDb, getUserName);
// console.log(userNames);
// const userPostsCount = map(userDb, user => user.posts);
// console.log(userPostsCount);
// const toggleUserActiveState = user => ({
//   ...user,
//   isActive: !user.isActive,
// });

// const toggledUsers = map(usersDb, toggleUserActiveState);
// console.log(toggledUsers);
// console.log(usersDb);

// ===================================================================

// const usersDb = [
//   { id: '000', name: 'mango', posts: 218, isActive: true },
//   { id: '001', name: 'poly', posts: 179, isActive: false },
//   { id: '002', name: 'ajax', posts: 32, isActive: true },
//   { id: '003', name: 'chelsey', posts: 74, isActive: false },
// ];

// const userNames = map(usersDb, user => user.name);
// const fnUserNames = usersDb.map(user => user.name);
// console.log('fnUserNames: ', fnUserNames);

// const userPostsCount = map(usersDb, user => user.posts);
// const fnPosts = usersDb.map(user => user.posts);

// console.log('fnPosts: ', fnPosts);

// const toggledUsers = map(usersDb, user => ({
//   ...user,
//   isActive: !user.isActive,
// }));
// const fnToggle = usersDb.map(user => ({
//   ...user,
//   isActive: !user.isActive,
// }));
// console.log('fnToggle: ', fnToggle);

// const properChangedUser = usersDb.map(user =>
//   user.name === 'poly'
//     ? {
//         ...user,
//         name: 'abrakadabra',
//       }
//     : user,
// );

// console.log(properChangedUser);
// ==============================================================
// Функция   Filter

// const numbers = [1, 2, 3, 4, 5, 12, 25, 7];

// const filter = function (arr, callback) {
//   const resultArr = [];

//   for (let i = 0, max = arr.length; i < max; i += 1) {
//     const element = arr[i];
//     const passed = callback(element, i, arr);
//     if (passed) {
//       resultArr.push(element);
//     }
//   }
//   return resultArr;
// };

// const greaterThanFive = value => value > 7;
// const filteredNumbers = filter(numbers, greaterThanFive);
// console.log(filteredNumbers);

// const fnFilteredNumbers = numbers.filter(value => value > 5 && value < 20);
// console.log(fnFilteredNumbers);

// const usersDb = [
//   { id: '000', name: 'mango', posts: 218, isActive: true },
//   { id: '001', name: 'poly', posts: 179, isActive: false },
//   { id: '002', name: 'ajax', posts: 32, isActive: true },
//   { id: '003', name: 'chelsey', posts: 74, isActive: false },
// ];

// // const activeUsers = usersDb.filter(function (user) {
// //   return user.isActive;
// // });
// // console.log(activeUsers);

// const activeUsers = usersDb.filter(user => user.isActive);
// console.log('active users: ', activeUsers);

// const frequentPosters = usersDb.filter(user => user.posts >= 100);
// console.log('frequent posters', frequentPosters);

// ==========================================================================

// const usersDb = [
//   { id: '000', name: 'mango', posts: 218, isActive: true },
//   { id: '001', name: 'poly', posts: 179, isActive: false },
//   { id: '002', name: 'ajax', posts: 32, isActive: true },
//   { id: '003', name: 'chelsey', posts: 74, isActive: false },
// ];

// // const user = usersDb.filter(user => user.name === 'mango');
// // console.log(user);

// const find = (arr, callback) => {
//   for (let i = 0, max = arr.length; i < max; i += 1) {
//     const element = arr[i];
//     const passed = callback(element, i, arr);
//     if (passed) {
//       return element;
//     }
//   }
// };
// // const getUserByName = user => user.name === 'mango';
// // const user = find(usersDb, getUserByName);
// // console.log(user);

// const fnUser = usersDb.find(user => user.name === 'mango');
// console.log(fnUser);

// const getUserByName = (arr, name) => arr.find(x => x.name === name);
// const user = getUserByName(usersDb, 'ajax');
// console.log(user);

// ======================================================

// Метод Reduce
// const numbers = [1, 2, 3, 4, 5];
// const sum = numbers.reduce(function (acc, element, idx) {
//   return acc + element;
// }, 0);
// console.log(sum);

// УПРОЩАЕМ

// const numbers = [1, 2, 3, 4, 5, 6];
// const callback = (acc, elem) => acc + elem;
// const sum = numbers.reduce(callback, 0);
// console.log(sum);

// ================================================

// const usersDb = [
//   { id: '000', name: 'mango', posts: 218, isActive: true },
//   { id: '001', name: 'poly', posts: 179, isActive: false },
//   { id: '002', name: 'ajax', posts: 32, isActive: true },
//   { id: '003', name: 'chelsey', posts: 74, isActive: false },
// ];

// const callback = function (acc, user) {
//   return acc + user.posts;
// };
// const postCount = usersDb.reduce(callback, 0);
// console.log(postCount);

// в стрелочной функции

// const postCount = usersDb.reduce((acc, user) => acc + user.posts, 0);
// console.log(postCount);

// ===================================
// const callback = (acc, user) => {
//   acc[user.name] = user.posts;
//   return acc;
// };
// const sidebarInfo = usersDb.reduce(callback, {});
// console.log(sidebarInfo);

// =======================================================================

// const numbers = [1, 2, 3, 4, 5];

// const addNumberIfUnique = (arr, num) => {
//   const value = arr.find(x => x === num);
//   if (!value) {
//     arr.push(num);
//   }
// };
// более правильно

// const addNumberIfUnique = (arr, num) => {
//   const hasValue = arr.includes(num);

//   if (!hasValue) {
//     arr.push(num);
//   }
// };

// addNumberIfUnique(numbers, 3);
// console.log(numbers);

// const result = numbers
//   .map(x => x * 2)
//   .filter(y => y > 5)
//   .reduce((acc, z) => acc + z, 0);
// console.log(result);

// Пример
// const x = arr
//   .filter(user => user.name.includes('o') || user.name.includes('p'))
//   .reduce((acc, user) => acc + user.posts, 0);

// ============================================
// FOR EACH

// const numbers = ['a', 'b', 'c', 'd', 'e'];

// numbers.forEach((elem, idx, arr) => {
//   console.log('element: ', elem);
//   console.log('idx: ', idx);
// });

// ================================

// Практика
// const usersDb = [
//   { id: '000', name: 'mango', posts: 218, isActive: true },
//   { id: '001', name: 'poly', posts: 179, isActive: false },
//   { id: '002', name: 'ajax', posts: 32, isActive: true },
//   { id: '003', name: 'chelsey', posts: 74, isActive: false },
// ];

// const getUserNames = users => users.map(user => user.name);
// const userNames = getUserNames(usersDb);
// console.log(userNames);

// const getActiveUsers = users => users.filter(user => user.isActive);
// const activeUsers = getActiveUsers(usersDb);
// console.log(activeUsers);

// const getUserById = (users, id) => users.find(user => user.id === id);
// const user = getUserById(usersDb, '002');
// console.log(user);

// const getUserPostsCount = (users, userName) =>
//   users.find(user => user.name === userName).posts;
// const postCount = getUserPostsCount(usersDb, 'poly');
// console.log('post count: ', postCount);

// const getActiveUsersPostsCount = users =>
//   users
//     .filter(user => user.isActive)
//     .reduce((acc, user) => acc + user.posts, 0);

// const postsCount = getActiveUsersPostsCount(usersDb);
// console.log(postsCount);

// // если только редюсом

// const getActiveUsersPostsCountWithReduce = users =>
//   users.reduce((acc, user) => (user.isActive ? acc + user.posts : acc), 0);

// const postsCount1 = getActiveUsersPostsCountWithReduce(usersDb);
// console.log(postsCount1);

//   еще один пример

// const Shop = function (products) {
//   this.products = products;

//   this.getProductNames = () => {
//     return console.log(this.products.map(product => product.name));
//   };

//   this.addProduct = productName => this.products.push(productName);
//   this.removeProduct = productName =>
//     (this.products = this.products.filter(
//       product => product.name !== productName,
//     ));
// };

// const shop = new Shop([
//   { name: 'apples', price: 20 },
//   { name: 'grapes', price: 30 },
//   { name: 'bananas', price: 40 },
// ]);

// shop.getProductNames();
// shop.addProduct({ name: 'wine', price: 100 });

// console.log(shop);
// shop.removeProduct('apples');
// console.log(shop);

// продолжить на 5.3

// const guests = [
//   { name: 'Mango', age: 20, isActive: true },
//   { name: 'Poly', age: 18, isActive: false },
//   { name: 'Ajax', age: 30, isActive: true },
//   { name: 'Chelsey', age: 45, isActive: false },
// ];

// const guestsNames = guests.map(user => user.name);
// console.log(guestsNames);

// ==========================================
//    Debugging / Дебаг

// const checkLoginVAlidity = login => {
//   if (login.length > 4 && login.length < 16) {
//     return true;
//   }
//   return false;
// };
// const valid = checkLoginVAlidity('qweqwe');
// console.log(valid);

// =====================================================

const usersDb = [
  { id: 0, login: 'mango', email: 'mango@gmail.com', active: true },
  { id: 1, login: 'poly', email: 'poly@gmail.com', active: true },
  { id: 2, login: 'ajax', email: 'ajax@gmail.com', active: false },
];

// const getActiveUsers = users => {
//   const activeUsers = [];

//   for (const user of users) {
//     if (user.active) {
//       activeUsers.push(user);
//     }
//   }
//   return activeUsers;
// };

// const activeUsers = getActiveUsers(usersDb);
// console.log('[active users]: ', activeUsers);

// const getActiveUsers = users => users.filter(user => user.active);
// console.log(getActiveUsers(usersDb));

// const active = usersDb.filter(user => user.active);
// const names = active.map(u => u.login);
// console.log(names);

// let users = usersDb.map(user => {
//   if (user.active) {
//     return {
//       ...user,
//       login: `${user.login}-active`,
//     };
//   }
//   return user;
// });

// либо короче

// const users = usersDb.map(user =>
//   user.active ? { ...user, login: `${user.login}-active` } : user,
// );

// console.log(users);

// ========================================

// const titleCase = function (str) {
//   const arr = str.split(' ');
//   for (let i = 0, max = arr.length; i < max; i += 1) {
//     const elem = arr[i];
//     const firstLetter = elem[0].toUpperCase();
//     const rest = elem.slice(1).toLowerCase();

//     arr[i] = firstLetter + rest;
//     console.log(arr[i]);
//   }
//   const result = arr.join(' ');
//   return result;
// };

// console.log(titleCase("I'm a little tea pot"));

// ====================================

// const users = [
//   { name: 'Poly', age: 7, mood: 'happy' },
//   { name: 'Mango', age: 4, mood: 'blissful' },
//   { name: 'Ajax', age: 3, mood: 'tired' },
// ];

// const getAllPropValues = prop => {
//   for (const user of users) {
//     console.log(user);
//   }
// };

// getAllPropValues('name');

// =========================================================

// const guests = [
//   { name: 'Mango', inActiveDays: 15, isActive: true },
//   { name: 'Poly', inActiveDays: 8, isActive: false },
//   { name: 'Ajax', inActiveDays: 32, isActive: false },
//   { name: 'Chelsey', inActiveDays: 85, isActive: true },
// ];

// const setGuestsState = (arr,prop)

// console.log(setGuestsState(users,10));

// const getId = () => '-' + Math.random().toString(36).substr(2, 9);
// console.log(getId());

// function SocialBook(users = [], posts = {}) {
//   this.users = users;
//   this.posts = posts;

//   this.addPost = (userId, post) => {
//     this.posts[userId].push(post);
//   };
//   this.addPostLike = (userId, postId) => {
//     this.posts[userId] = this.posts[userId].map(post => {
//       if (post.id === postId) {
//         return {
//           ...post,
//           likes: post.likes + 1,
//         };
//       }
//       return post;
//     });
//   };
// }

// const book = new SocialBook();
// console.log(book);
