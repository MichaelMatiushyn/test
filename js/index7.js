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

// const list = document.querySelector('.list');

// const itemA = document.createElement('li');
// itemA.textContent = 'Git';
// itemA.classList.add('list-item');

// const itemB = document.createElement('li');
// itemB.textContent = 'React';

// // list.appendChild(itemA);
// // list.appendChild(itemB);

// list.append(itemB);
// list.prepend(itemA);

// // list.appendChild(item);
// // list.insertBefore(itemA, list.firstElementChild);
// // console.log(itemB);

// // list.before(itemA);    -  вставка перед блоком
// // list.after(itemB);     -  вставка после блока

// // list.replaceWith(itemA);  - полность заменить

// // list.parentNode.removeChild(list);  -   старый метод удаления элемента
// // list.remove();  - современный метод

// // console.log(list.innerHTML);

// // // Очень дорогостоящая операция
// const item = '<li>New position</li>';
// // list.innerHTML += item;

// // list.insertAdjacentHTML('beforebegin', item);
// // list.insertAdjacentHTML('afterbegin', item);
// // list.insertAdjacentHTML('beforeend', item);
// // list.insertAdjacentHTML('afterend', item);

// const clone = list.cloneNode(true);
// console.log(clone);
// document.body.appendChild(clone);
// =====================================================

// const list = document.querySelector('.list');
// const items = [];
// for (let i = 0; i < 100; i += 1) {
//   const item = document.createElement('li');
//   item.textContent = `item ${i}`;

//   items.push(item);
// }
// console.log(items);
// list.append(...items);

// do {
//   let userInput = prompt('Давай');

//   if (userInput === null) {
//     break;
//   }
// } while (true);
// ===============================================================================
// const grid = $qs('.notes-grid');
// // const note = createNote({
// //   text: 'Содержание заметки 1232123',
// //   date: '07/06/2018',
// // });

// // grid.appendChild(note);

// const notesList = [
//   { text: 'Заметка номер 1', date: getTimeStamp() },
//   { text: 'Заметка номер 2', date: getTimeStamp() },
//   { text: 'Заметка номер 3', date: getTimeStamp() },
//   { text: 'Заметка номер 4', date: getTimeStamp() },
//   { text: 'Заметка номер 5', date: getTimeStamp() },
// ];

// // const elements = createGridItem(notesList);
// // grid.append(...elements);

// const markup = createGridItemsMarkup(notesList);
// grid.innerHTML = markup;

// const onSuccess = position => {
//   const { latitude, longitude } = position.coords;

//   console.log(`Широта ${latitude}, Долгота: ${longitude}`);
// };
// const onError = error =>
//   console.log('Ошибка при определении положения:', error);
// navigator.geolocation.getCurrentPosition(onSuccess, onError);

// /*  ========   Helpers ======= */

// function createNote({ text = 'Содержание заметки', date = '07/06/2018' }) {
//   const note = $cel('div', { className: 'note' });

//   // const note = document.createElement('div');
//   // note.classList.add('note');

//   const noteContent = $cel('div', { className: 'note__content' });

//   // const noteContent = document.createElement('div');
//   // noteContent.classList.add('note__content');

//   const noteText = $cel('p', { className: 'note__text' }, text);
//   // const noteText = document.createElement('p');
//   // noteText.classList.add('note__text');
//   // noteText.textContent = text;

//   const noteDate = $cel(
//     'p',
//     { className: 'note__date', date },
//     `Создано ${date}`,
//   );
//   // const noteDate = document.createElement('p');
//   // noteDate.classList.add('note__date');
//   // noteDate.textContent = `Создано ${date}`;

//   const noteActions = $cel('div', { className: 'note__actions' });

//   // const noteActions = document.createElement('div');
//   // noteActions.classList.add('note__actions');
//   const editBtn = $cel('button', { className: 'button' }, 'Изменить');
//   // const editBtn = document.createElement('button');
//   // editBtn.classList.add('button');
//   // editBtn.textContent = 'Изменить';

//   const delBtn = $cel('button', { className: 'button' }, 'Удалить');
//   // const delBtn = document.createElement('button');
//   // delBtn.classList.add('button');
//   // delBtn.textContent = 'Удалить';

//   noteContent.append(noteText, noteDate);
//   noteActions.append(editBtn, delBtn);
//   note.append(noteContent, noteActions);

//   return note;
// }
// function createGridItem(arr) {
//   return arr.reduce((acc, el) => acc.concat(createNote(el)), []);

//   // const elements = [];
//   // arr.forEach(note => {
//   //   const el = createNote(note);
//   //   elements.push(el);
//   // }
//   // return elements;
// }
// function createNoteMarkup({ text, date }) {
//   return `
//  <div class="note">
//       <div class="note__content">
//         <p class="note__text">${text}</p>
//         <p class="note__date">Создано ${date}</p>
//       </div>
//       <div class="note__actions">
//         <button class="button">Изменить</button>
//         <button class="button">Удалить</button>
//       </div>
//     </div>
//   `;
// }
// function createGridItemsMarkup(arr) {
//   return arr.reduce((acc, obj) => acc + createNoteMarkup(obj), '');

//   // let markup = '';

//   // arr.forEach(note => {
//   //   const html = createNoteMarkup(note);
//   //   markup += html;
//   // });
//   // return markup;
// }
