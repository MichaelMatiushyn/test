'use strict';

// Функциональные методы массивов

// Декларативная запись

const numbers = [1, 2, 3, 4, 5];

const newNumbers = numbers.filter(x => x > 2);
console.log(newNumbers);

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

const map = function (arr, callback) {
  const resultArr = [];
  for (let i = 0, max = arr.length; i < max; i += 1) {
    const element = arr[i];
    const item = callback(element);
    resultArr.push(item);
  }
  return resultArr;
};
// const result = map(numbers, double);

// console.log('numbers: ', numbers);
// console.log('result: ', result);

const usersDb = [
  { id: '000', name: 'mango', posts: 218, isActive: true },
  { id: '001', name: 'poly', posts: 179, isActive: false },
  { id: '002', name: 'ajax', posts: 32, isActive: true },
  { id: '003', name: 'chelsey', posts: 74, isActive: false },
];

const getUserName = user => user.name;

// const userNames = map(userDb, getUserName);
// console.log(userNames);
// const userPostsCount = map(userDb, user => user.posts);
// console.log(userPostsCount);
const toggleUserActiveState = user => ({
  ...user,
  isActive: !user.isActive,
});

const toggledUsers = map(usersDb, toggleUserActiveState);
console.log(toggledUsers);
console.log(usersDb);

// Продолжить просмотр 5 часть на 40 минуте
