'use strict';

// Модуль 7
// console.log(document);
// const body = document.body;
// console.log(body.childNodes);
// console.log(body.children);
// console.log('body.firstChild', body.firstChild);
// console.log('body.firstElementChild: ', body.firstElementChild);

// const list = body.firstElementChild;
// console.log(list);
// console.log(list.parentNode);
// console.log(list.children);
// const secondItem = list.children[1];
// console.log(secondItem);
// console.log(secondItem.children);
// console.log(secondItem.previousSibling);
// console.log(secondItem.previousElementSibling);

// const listItems = document.querySelectorAll('li');
// console.log(listItems);
// const bySelector = document.querySelectorAll('.list-item');
// console.log(bySelector);

// =================================================================
// const logo = document.querySelector('.site-logo');
// console.log(logo);
// logo.href = 'https://www.youtube.com/';
// console.log(logo.href);

// const text = document.getElementById('text');
// text.hidden = true;

// ==================================================================

// const list = document.querySelector('.list');
// console.log(list);
// console.log(list.innerHTML);
// console.log(list.textContent);

// const logo = document.querySelector('.site-logo');
// const hasClass = logo.classList.contains('site-logo--active');

// // if (hasClass) {
// //   logo.classList.remove('site-logo--active');
// // } else {
// //   logo.classList.add('site-logo--active');
// // }
// const toggleBtn = document.querySelector('.js-toggle');
// toggleBtn.addEventListener('click', () => {
//   logo.classList.toggle('site-logo--active');
// });

// const logo = document.querySelector('.site-logo');
// const hasClass = logo.classList.contains('site-logo--active');
// // console.log(logo.attributes);
// console.log(logo.href);

// console.log(logo.getAttribute('href'));

// const image = document.querySelector('.image');
// console.log(image);
// image.setAttribute('src', 'https://placeimg.com/640/480/tech');
// // ('src', 'https://placeimg.com/640/480/tech');
// image.removeAttribute('alt');

// const items = document.querySelectorAll('.list-item');
// console.log(items[0].dataset);
// // продолжить просмотр на 1.31
// console.log(items[0].dataset.id);
// console.log(items[0].dataset.value);

// ======================================================
// Создание новых элементов на странице через JS
// const root = document.querySelector('#root');

// const button = createButton({
//   text: 'Click me!!!',
//   className: 'btn',
// });
// // console.log(btn);
// root.appendChild(button);

// function createButton({ text = 'button', className = '' }) {
//   const btn = document.createElement('button');
//   btn.textContent = 'Click me!';
//   btn.classList.add(className);

//   return btn;
// }

// ===============================
// Собираем статью
// const root = document.querySelector('#root');

// function createArticle({
//   titleText = '',
//   articleText = '',
//   linkLabel = '',
//   linkClass = '',
//   linkURL = '#',
// }) {
//   const article = document.createElement('article');

//   const title = document.createElement('h2');
//   title.textContent = titleText;

//   const text = document.createElement('p');
//   text.textContent = articleText;

//   const link = document.createElement('a');
//   link.textContent = linkLabel;
//   link.setAttribute('href', linkURL);
//   link.classList.add(linkClass);

//   // article.appendChild(title);
//   // article.appendChild(text);
//   // article.appendChild(link);
//   article.append(title, text, link);

//   return article;
// }

// const article = createArticle({
//   titleText: 'Article Title',
//   articleText:
//     'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Blanditiis inventore fuga tempora quo nisi molestias nihil placeat velit harum, officia mollitia id iste, unde dolore delectus at, aperiam dicta fugit.Quidem, possimus accusamus molestiae aliquam a fuga eum quae ullam ipsum dicta at culpa cumque nulla fugit natus, suscipit inventore.',
//   linkLabel: 'Read more!',
//   linkClass: 'btn',
//   linkURL: 'www.google.com',
// });

// root.appendChild(article);

// const articles = [
//   {
//     title: 'Article title 1',
//     text:
//       'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Blanditiis inventore fuga tempora quo nisi molestias nihil placeat velit harum, officia mollitia id iste, unde dolor',
//     linkLabel: 'Read more',
//     linkURL: 'google.com',
//   },
//   {
//     title: 'Article title 2',
//     text:
//       'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Blanditiis inventore fuga tempora quo nisi molestias nihil placeat velit harum, officia mollitia id iste, unde dolor',
//     linkLabel: 'Read more',
//     linkURL: 'google.com',
//   },
//   {
//     title: 'Article title 3',
//     text:
//       'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Blanditiis inventore fuga tempora quo nisi molestias nihil placeat velit harum, officia mollitia id iste, unde dolor',
//     linkLabel: 'Read more',
//     linkURL: 'google.com',
//   },
// ];

// const articlesList = document.querySelector('.articles-list');
// const articleEls = [];
// articles.forEach(article => {
//   const el = createArticle({
//     titleText: article.title,
//     articleText: article.text,
//     linkLabel: article.linkLabel,
//     linkClass: 'btn',
//     linkURL: article.linkURL,
//   });

//   articleEls.push(el);
// });

// articlesList.append(...articleEls);
// // =================================================================
// // для задания 8.1
// const items = document.querySelectorAll('.categories>li');
// items.forEach(item => {
//   console.log('Категория: ', item.firstChild);
//   console.log('Кол-во вложеных li: ', item.firstElementChild.children.length);
// });
// // ==================================================================

// const list = Array.from(document.querySelectorAll('.list li'));
// console.log(list);
// =======================
// const img = document.querySelector('.img');
// console.log(img);
// // img.src = 'https://placeimg.com/300/300/any';
// console.log(img.getAttribute('src'));
// img.setAttribute('src', 'https://placeimg.com/300/300/any');
// img.setAttribute('alt', 'some picture');
// console.log(img.attributes);
// ============================================

const list = document.querySelector('.list');

const itemA = document.createElement('li');
itemA.textContent = 'Git';
itemA.classList.add('list-item');

const itemB = document.createElement('li');
itemB.textContent = 'React';

// list.appendChild(itemA);
// list.appendChild(itemB);

list.append(itemB);
list.prepend(itemA);

// list.appendChild(item);
// list.insertBefore(itemA, list.firstElementChild);
// console.log(itemB);

// продолжить 7.2 на 0.33