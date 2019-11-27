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

const clients = ['Mango', 'Poly', 'Ajax', 'Chelsey'];
const [first, ...rest] = clients;
console.log(first);
console.log(rest);
