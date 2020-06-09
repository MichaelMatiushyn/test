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
//   // e.stopPropagation();

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

const menu = $qs('.js-menu');
const links = menu.querySelectorAll('.menu-link');
menu.addEventListener('click', handleMenuClick);

function handleMenuClick({ target }) {
  const nodeName = target.nodeName;
  event.preventDefault();
  setActiveLink(links, target);
}

function setActiveLink(links, target) {
  links.forEach(link => {
    if (link !== target) {
      link.classList.remove('active');
    } else {
      link.classList.add('active');
    }
  });
}
