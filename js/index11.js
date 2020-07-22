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

const dishes = [
  {
    name: 'Baked Yak & Mushrooms',
    image: 'https://placeimg.com/640/480/people:',
    descr:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, aliquid temporibus quis atque distinctio error.',
    price: '61.00',
    available: true,
  },
  {
    name: 'Roasted Oysters',
    image: 'https://placeimg.com/640/480/people:',
    descr:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, aliquid temporibus quis atque distinctio error.',
    price: '32.00',
    available: false,
  },
  {
    name: 'Strawberry Pancakes',
    image: 'https://placeimg.com/640/480/people:',
    descr:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, aliquid temporibus quis atque distinctio error.',
    price: '61.00',
    available: true,
  },
];

const source = document.querySelector('#dish-card').innerHTML.trim();
const template = Handlebars.compile(source);
// const markup = template(dishes[1]);
const markup = dishes.reduce((acc, dish) => acc + template(dish), '');
console.log(markup);
const grid = document.querySelector('.grid');
grid.insertAdjacentHTML('afterbegin', markup);
