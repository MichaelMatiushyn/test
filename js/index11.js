'use strict';

// Шаблонизация

// const poly = {
//   name: 'Poly',
//   age: 2,
//   img:
//     'https://upload.wikimedia.org/wikipedia/commons/3/38/Adorable-animal-cat-20787.jpg',
// };
// const root = $qs('#root');
// const source = $qs('#cat-card').innerHTML.trim();
// console.log(source);
// const template = Handlebars.compile(source);
// console.log(template);
// const markup = template(poly);
// console.log(markup);

// root.insertAdjacentHTML('afterbegin', markup);

// --------------------------------------------

// const cats = [
//   { name: 'Poly', age: 4, joyful: true, traits: ['fuzzy', 'cute'] },
//   { name: 'Spot', age: 2, joyful: false, traits: ['cute', 'cuddly'] },
//   { name: 'Frisky', age: 3, joyful: true, traits: ['sleepy', 'bites'] },
//   { name: 'Biscuit', age: 1, joyful: false, traits: ['fuzzy', 'sleepy'] },
// ];

// const list = document.querySelector('.cats-list');
// const source = $qs('#cats-list-tpl').innerHTML.trim();
// const template = Handlebars.compile(source);
// const markup = template(cats);
// console.log(markup);
// list.insertAdjacentHTML('afterbegin', markup);
//  ===============================================================

// const dishes = [
//   {
//     name: 'Baked Yak & Mushrooms',
//     image: 'https://placeimg.com/640/480/people:',
//     descr:
//       'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, aliquid temporibus quis atque distinctio error.',
//     price: '61.00',
//     available: true,
//   },
//   {
//     name: 'Roasted Oysters',
//     image: 'https://placeimg.com/640/480/people:',
//     descr:
//       'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, aliquid temporibus quis atque distinctio error.',
//     price: '32.00',
//     available: false,
//   },
//   {
//     name: 'Strawberry Pancakes',
//     image: 'https://placeimg.com/640/480/people:',
//     descr:
//       'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, aliquid temporibus quis atque distinctio error.',
//     price: '61.00',
//     available: true,
//   },
// ];

// const source = document.querySelector('#dish-card').innerHTML.trim();
// const template = Handlebars.compile(source);
// // const markup = template(dishes[1]);
// const markup = dishes.reduce((acc, dish) => acc + template(dish), '');
// console.log(markup);
// const grid = document.querySelector('.grid');
// grid.insertAdjacentHTML('afterbegin', markup);

// ================================
// 11.2;

// const reg1 = new RegExp();
// const reg = /hello/;

// const str = 'The quick brown fox jumps over the lazy dog';
// const pattern = /fox/;

// console.log(pattern.test(str));
// console.log(pattern.exec(str));

// console.log(str.search(pattern));

// const replaced = str.replace(pattern, 'wolf');
// console.log(replaced);

/*
/[0-9a-zA-Z_-]+\.mp3/g
file_01.mp3 file_02.mv file_03.mp3 file_04.waw file-05.mp3 File-06.mp3

/^\+[1-9]\([0-9]{3}\)[0-9]{3}-[0-9]{2}-[0-9]{2}$/
или с якорями
/^\+[1-9]\(\d{3}\)\d{3}-\d{2}-\d{2}$/
+5(022)345-90-24

*/

// const VALIDATOR = {
//   patterns: {
//     name: /^[a-zA-Z]{4,12}$/,
//     email: /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/,
//     password: /^[a-z0-9]{6,18}$/,
//   },
//   validate(formElement) {
//     const inputs = Array.from(formElement.querySelectorAll('input'));

// inputs.forEach(({ name, value }) => {
//   const valid = this.isValid(name, value);
//   console.group('group');
//   console.log('name', name);
//   console.log('value', value);
//   console.log('valid', valid);
//   console.groupEnd('group');
// });
// переберем его  reduce
//     const results = inputs.reduce((acc, { name, value }) => {
//       acc[name] = this.isValid(name, value);
//       console.group('group');
//       //   console.log('name', name);
//       //   console.log('value', value);
//       //   console.log('valid', valid);
//       //   console.groupEnd('group');
//       return acc;
//     }, {});

//     console.log(results);
//     const valid = Object.values(results).every(value => value);
//     console.log(valid);
//     return {
//       valid,
//       results,
//     };
//   },
//   isValid(patternKey, value) {
//     return this.patterns[patternKey].test(value);
//   },
// };

// const form = document.querySelector('.js-signup');
// form.addEventListener('submit', handleFormSubmite);

// function handleFormSubmite(e) {
//   e.preventDefault();

//   const validationResults = VALIDATOR.validate(form);
//   if (!validationResults.valid) {
//     alert('Ohh, something is wrong');
//     return;
//   }
//   alert('Everything is fine! Go on!');
//   form.reset();
// }

// console.log('14-21-57'.replace(/-/g, ':')); // 14:21:57
// const str = `1758-1982-7841-2275`;
// const pattern = /-/g;

// const show = str.split(pattern);
// console.log(show);

// Задания модуль 11

/*
 * К pen уже подключен Handlebars.
 * Используй встроенные шаблоны и метод Handlebars.compile
 *
 * Создай шаблон элемента списка указаного на вкладке HTML.
 * Отрендери список в DOM по данным из массива products.
 */

// const products = [
//   { name: 'Apples', quantity: 50 },
//   { name: 'Grapes', quantity: 44 },
//   { name: 'Cheese', quantity: 128 },
//   { name: 'Milk', quantity: 93 },
// ];

// const prods = document.querySelector('.products');
// const source = document.querySelector('.prod-tpl').innerHTML.trim();
// const template = Handlebars.compile(source);
// const markup = template(products);
// console.log(markup);
// prods.insertAdjacentHTML('afterbegin', markup);

// Задание 11.2

/*
 * К pen уже подключен Handlebars.
 * Используй встроенные шаблоны и метод Handlebars.compile
 *
 * Создай шаблон поста указаного на вкладке HTML.
 * Отрендери список постов в DOM по данным из массива posts.
 *
 * Если в объекте поле favourite=true, в посте должна быть
 * разметка иконки избранного поста, в противном случае,
 * разметки иконки быть не должно.
 */

// const posts = [
//   {
//     title: 'Phasellus volutpat metus',
//     text:
//       'Vestibulum purus quam, scelerisque ut, mollis sed, nonummy id, metus. Pellentesque egestas, neque sit amet convallis pulvinar, justo nulla eleifend augue, ac auctor orci leo non est. Ut leo.',
//     favourite: true,
//   },
//   {
//     title: 'Nulla consequat massa',
//     text:
//       'Maecenas ullamcorper, dui et placerat feugiat, eros pede varius nisi, condimentum viverra felis nunc et lorem. Etiam sollicitudin, ipsum eu pulvinar rutrum, tellus ipsum laoreet sapien, quis venenatis ante odio sit amet eros. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.',
//     favourite: false,
//   },
//   {
//     title: 'In enim justo',
//     text:
//       'Curabitur ligula sapien, tincidunt non, euismod vitae, posuere imperdiet, leo. Suspendisse eu ligula. Praesent metus tellus, elementum eu, semper a, adipiscing nec, purus.',
//     favourite: true,
//   },
//   {
//     title: 'Vestibulum ante ipsum',
//     text:
//       'Vestibulum suscipit nulla quis orci. Praesent venenatis metus at tortor pulvinar varius. Nulla sit amet est. Suspendisse eu ligula sollicitudin, ipsum eu pulvinar rutrum, tellus ipsum laoreet sapien.',
//     favourite: false,
//   },
// ];

// const postgroup = document.querySelector('.posts');
// const source = document.querySelector('#posts').innerHTML.trim();
// const template = Handlebars.compile(source);
// const markup = posts.reduce((acc, post) => acc + template(post), '');
// console.log(markup);
// postgroup.insertAdjacentHTML('afterbegin', markup);

// ===============================================

// 11/3

/* 
  Напишите функцию validate которая проверяет поля формы 
  firstname и lastname и возвращает результат в виде 
  обьекта со свойствами 'first name' и 'last name'.
  
  Кроме того, формат объекта: в свойства записывается буль-флаг 
  уведомляющий о статусе прохождения валидации для каждого поля.
  {
    'first name': true или false,
    'last name': true или false,
  }
  
  Критерии валидации:
  1)Имя. Допускается не более 2-х слов, разделенных пробелами
  или дефисом. Слова должны состоять только из букв.
  
  2)Фамилия. Допускается не более 2-х слов, разделенных пробелами
  или дефисом. Слова должны состоять только из букв.
  
  При клике на кнопку submit должна происходить проверка.
  Результат проверки, объект, выводить в консоль.
*/

// const firstname = document.getElementById("first_name");
// const lastname = document.getElementById("last_name");
// const submitBtn = document.getElementById("submit-btn");

// submitBtn.addEventListener("click", validate);

// function validate(evt) {}


// Модуль 12