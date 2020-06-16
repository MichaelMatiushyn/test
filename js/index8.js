'use strict';

// const btn = $qs('.js-btn');
// const btnAddListener = $qs('.js-add-listener');
// const btnRemoveListener = $qs('.js-remove-listener');

// btn.addEventListener('click', onBtnClick);

// btnAddListener.addEventListener('click', onAddListener);

// btnRemoveListener.addEventListener('click', onRemoveListener);

// function onAddListener() {
//   btn.addEventListener('click', onBtnClick);
// }
// function onRemoveListener() {
//   btn.removeEventListener('click', onBtnClick);
// }
// function onBtnClick() {
//   alert('Click!!!!!!!');
// }
// ============   THIS и addEventListener ============================

// const btn = $qs('.js-btn');

// const user = {
//   name: 'Mango',
//   showName() {
//     console.log(this);
//     console.log(`My name is ${this.name}`);
//   },
// };

// user.showName();
// btn.addEventListener('click', user.showName);
// btn.addEventListener('click', user.showName.bind(user));

// Объект события

// const btn = $qs('.js-btn');
// btn.addEventListener('click', () => {
//   console.log(this);
// });  ссылается на window

// btn.addEventListener('click', function () {
//   console.log(this);
// });  ссылается уже с контекстом на button

// const body = document.body;
// console.log(body);

// body.addEventListener('click', e => {
//   console.log('[Body]');
//   console.log('event.type:  ', e.type);
//   console.log('event.target:  ', e.target);
//   console.log('current.target:  ', e.currentTarget);
// });

// btn.addEventListener('click', e => {
//   e.stopPropagation();

//   console.log('[In button]');
//   console.log('event.type:  ', e.type);
//   console.log('event.target:  ', e.target);
//   console.log('current.target:  ', e.currentTarget);
// });

// ==================================================

// const gallery = $qs('.js-gallery');
// console.log(gallery);

// // const images = gallery.querySelectorAll('img');
// // console.log(images);
// // images.forEach(image => image.addEventListener('click', showImageSrc));

// gallery.addEventListener('click', onGalleryClick);

// function onGalleryClick(event) {
//   const target = event.target;
//   const nodeName = event.target.nodeName;

//   if (nodeName !== 'IMG') return;
//   console.log(target.src);
// }

// =======================================================

// document.addEventListener('DOMContentLoaded', () => {
//   const form = $qs('.js-form');
//   const list = $qs('.js-list');
//   const input = form.querySelector('input');
//   const inputVal = $qs('.js-input-val');

//   form.addEventListener('submit', handleFormSubmit);

//   list.addEventListener('click', handleListClick);
//   input.addEventListener('change', handleInputChange);
//   // input.addEventListener('keydown', handleInputChange);
//   // input.addEventListener('keyup', handleInputChange);

//   function handleFormSubmit() {
//     event.preventDefault();
//     console.log(input.value);
//     const listItem = createListItem(input.value);

//     list.appendChild(listItem);

//     // input.value = ''; или по правильному
//     this.reset();
//   }
//   function handleInputChange(event) {
//     console.log(event.target);
//   }
//   function handleListClick({ target }) {
//     const nodeName = target.nodeName;
//     const parent = target.parentNode;
//     const hasClass = target.classList.contains('js-btn-del');

//     if (nodeName !== 'BUTTON' || !hasClass) return;
//     parent.remove();
//   }
// });

// function createListItem(text) {
//   const li = $cel('li');
//   li.textContent = text;

//   const btnDel = $cel('button');
//   btnDel.classList.add('js-btn-del');
//   btnDel.textContent = 'Delete';

//   const btnX = $cel('button');
//   btnX.textContent = 'X';

//   li.append(btnDel, btnX);
//   return li;
// }

// ===========================================

// document.addEventListener('DOMContentLoaded', () => {
//   const modal = $qs('.modal');
//   const modalBackdrop = $qs('.js-modal-backdrop');

//   const btnShowModal = $qs('.js-open-modal');
//   const btnCloseModal = $qs('.js-close-modal');

//   btnShowModal.addEventListener('click', showModal);
//   btnCloseModal.addEventListener('click', hideModal);
//   modalBackdrop.addEventListener('click', handleBackdropClick);

//   function showModal() {
//     modal.classList.remove('modal--hiden');
//   }
//   function hideModal() {
//     modal.classList.add('modal--hiden');
//   }
//   function handleBackdropClick(event) {
//     if (this !== event.target) return;
//     hideModal();
//   }
// });

/*
  Ознакомьтесь с HTML и CSS.
  
  Есть меню навигации, необходимо написать скрипт, который
  при клике на пункт меню добавит ему класс active,
  таким образом выделив текущую (активную) ссылку,
  при этом убрав его у всех остальных элементов меню.
  
  Пунктов меню может быть произвольное количество, используйте
  прием делегирование событий. Учтите клик по самому ul, его
  необходимо игнорировать.
  
  При клике по ссылкам не должна перезагружаться страница!
*/

// const menu = $qs('.js-menu');
// const links = menu.querySelectorAll('.menu-link');
// menu.addEventListener('click', handleMenuClick);

// function handleMenuClick({ target }) {
//   const nodeName = target.nodeName;
//   event.preventDefault();
//   setActiveLink(links, target);
// }

// function setActiveLink(links, target) {
//   links.forEach(link => {
//     if (link !== target) {
//       link.classList.remove('active');
//     } else {
//       link.classList.add('active');
//     }
//   });
// }

// Обработчик местоположения мышки
// ((doc, win) => {
//   const input = doc.querySelector('.js-input');
//   // input.addEventListener('focusout', e => console.log(e));
//   // input.addEventListener('focus', e => console.log(e));
//   // input.focus();
//   // input.addEventListener('change', e => console.log(e.target.value));

//   // с 2018
//   input.addEventListener('input', e => console.log(e.target.value));

//   const winCoordsE1 = doc.querySelector('.js-win-coords');
//   const docCoordsE1 = doc.querySelector('.js-doc-coords');
//   updateCoords(0, 0, 0, 0);

//   insertSpacer();

//   win.addEventListener('mousemove', handleMouseMove);

//   // Для отслеживания только клавиш, которые выводят символ
//   // win.addEventListener('keypress', e => {
//   //   console.log(e);
//   // });
//   //
//   // win.addEventListener('keydown', e => {
//   //   console.log(e);
//   // });

//   function handleMouseMove({ clientX, clientY, pageX, pageY }) {
//     updateCoords(clientX, clientY, pageX, pageY);
//   }
//   function updateCoords(cx, cy, px, py) {
//     winCoordsE1.textContent = `Относительно окна: (clientX: ${cx}, clientY: ${cy}) `;
//     docCoordsE1.textContent = `Относительно документа: (pageX: ${px}, pageY: ${py})`;
//   }
//   function insertSpacer() {
//     const spacer = doc.createElement('div');
//     spacer.style.height = '2000px';
//     doc.body.appendChild(spacer);
//   }
// })(document, window);

// ((w, d) => {
//   const chattyValue = d.querySelector('.chatty-container');
//   let counter = 0;

//   w.addEventListener('mousemove', throttle(handleMouseMove, 200));

//   // w.addEventListener('mousemove', throttleWithRAF(handleMouseMove));

//   function handleMouseMove(event) {
//     counter += 1;
//     chattyValue.textContent = counter;
//   }

//   function throttle(fn, delay) {
//     let lastCall = 0;

//     return function (...args) {
//       const now = new Date().getTime();
//       if (now - lastCall < delay) {
//         return;
//       }
//       lastCall = now;

//       return fn(...args);
//     };
//   }
//   function throttleWithRAF(fn) {
//     let isFiring = false;

//     return function (...args) {
//       if (!isFiring) {
//         requestAnimationFrame(() => {
//           fn(...args);
//           isFiring = false;
//         });
//       }
//       isFiring = true;
//     };
//   }
// })(window, document);

// Для скрола
// ((win, doc) => {
//   const offsetE1 = doc.querySelector('.js-page-y-offset');
//   const paragraphs = Array.from(doc.querySelectorAll('.js-text'));
//   const offsets = collectVerticalOffsets(paragraphs);
//   // const unique = doc.querySelector('.unique');

//   // console.log('offsetWidth: ', offsetE1.offsetWidth);
//   // console.log('offsetHeight: ', offsetE1.offsetHeight);

//   // const coordinates = unique.getBoundingClientRect();
//   // console.log(coordinates);
//   updateOffsetValue(0);

//   win.addEventListener('scroll', handleScroll);

//   function handleScroll(event) {
//     updateOffsetValue(pageYOffset);
//     setActiveParagraph(pageYOffset);
//   }

//   function setActiveParagraph(currentWindowScroll) {
//     Object.keys(offsets).forEach(key => {
//       if (offsets[key] <= currentWindowScroll) {
//         setActiveItem(paragraphs, key);
//       }
//     });
//   }

//   function setActiveItem(items, idx) {
//     const prevActiveItem = doc.querySelector('.js-text.current');

//     if (prevActiveItem) {
//       prevActiveItem.classList.remove('current');
//     }
//     const currActiveItem = items[idx];
//     currActiveItem.classList.add('current');
//   }

//   function collectVerticalOffsets(elements) {
//     return elements.reduce((offsets, el, idx) => {
//       offsets[idx] = el.offsetTop;
//       return offsets;
//     }, {});
//   }

//   function updateOffsetValue(val) {
//     offsetE1.textContent = `pageYOffset: ${Math.round(val)}`;
//   }
// })(window, document);

// ============= Пример использования =======

// const nav = document.querySelector('.nav');
// const list = document.querySelector('.nav > ul');
// const toTopLink = document.querySelector('.to-top-link');
// const navCoords = nav.getBoundingClientRect();

// window.addEventListener('scroll', function () {
//   if (pageYOffset >= navCoords.top) {
//     document.body.style.paddingTop = nav.offsetHeight + 'px';
//     nav.classList.add('nav-fixed');
//   } else {
//     document.body.style.paddingTop = '';
//     nav.classList.remove('nav-fixed');
//   }
// });

// list.addEventListener('click', function (evt) {
//   const target = evt.target;

//   if (target === this || target.nodeName === 'LI') return;

//   evt.preventDefault();

//   const href = target.getAttribute('href');
//   const el = document.querySelector(href);

//   const top =
//     el.getBoundingClientRect().top + window.pageYOffset - nav.offsetHeight;

//   window.scrollTo({ top: top, behavior: 'smooth' });
// });

// toTopLink.addEventListener('click', function (evt) {
//   evt.preventDefault();

//   window.scrollTo({ top: 0, behavior: 'smooth' });
// });

// ===========================================

// const sections = $qsa('.section');
// const navContainerHeight = $qs('.page-header').offsetHeight;

// const verticalOffsets = collectVerticalOffsets(sections);
// setTopBodyPadding(navContainerHeight);

// window.addEventListener(
//   'scroll',
//   handleWindowScroll.bind(null, verticalOffsets),
// );

// function setTopBodyPadding(val) {
//   document.body.style.paddingTop = val + 'px';
// }

// function collectVerticalOffsets(elements) {
//   const obj = {};

//   elements.forEach(el => {
//     obj[el.id] = el.offsetTop;
//   });
//   return obj;
// }

// function handleWindowScroll(offsets) {
//   const scrollPos =
//     document.documentElement.scrollTop || document.body.scrollTop;

//   Object.keys(offsets).forEach(key => {
//     if (offsets[key] <= scrollPos) {
//       setActiveItem(key);
//     }
//   });
// }
// function setActiveItem(id) {
//   const prevActiveItem = $qs('.site-nav a.active');
//   prevActiveItem.classList.remove('active');

//   const curActiveItem = $qs(`.site-nav a[href*='${id}']`);
//   curActiveItem.classList.add('active');
// }
