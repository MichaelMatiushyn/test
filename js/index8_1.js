'use strict';

// Задание 8.1

/*
  Напишите скрипт который реализует следующий функционал.
  
  Есть кнопка с классом button, текст которой отображает 
  кол-во раз которое по ней кликнули, обновляется при каждом клике.
*/

// const btn = $qs('.button');
// btn.addEventListener('click', addClick);
// function addClick(event) {
//   event.preventDefault();
//   let value = event.target.innerText;
//   let asNumber = Number(value);
//   let counter = asNumber + 1;
//   event.target.innerText = `${counter}`;
// }

// пункт 8.2

/*
  Даны 2 инпута, абзац и кнопка. По нажатию на кнопку 
  получите числа которые бьудут введены в инпуты и запишите их сумму в span.result.
*/
// const expression = $qs('.expression');
// const inputs = $qsa('input');
// const asArr = Array.from(inputs);
// const btn = $qs('button');
// const result = $qs('.result');

// btn.addEventListener('click', () => {
//   let total = asArr.reduce((acc, input) => acc + Number(input.value), 0);
//   return (result.textContent = `${total}`);
// });

// пункт 8.3

/*
  Есть счетчик (спан) и кнопки +1, -1, которые должны увеличивать и уменьшать значение счетчика на 1. 
  
  - Создайте класс Counter, который хранит одно поле value - текущее значение счетчика
  - Класс принимает один параметр - onChange, функцию для обновления интерфейса при изменении счетчика
  - Добавьте классу методы increment и decrement для увеличения и ументшение значения счетчика
  - Привяжите вызовы методов и значение счетчика к раметке
*/

// const btns = $qsa('.btn');
// const toArr = Array.from(btns);

// const btnSub = toArr.find(btn => btn.dataset.action === 'sub');
// const btnAdd = toArr.find(btn => btn.dataset.action === 'add');
// let value = $qs('.value');

// btnSub.addEventListener('click', () => {
//   let asNumber = Number(value.textContent);
//   let num = asNumber - 1;
//   return (value.textContent = `${num}`);
// });

// btnAdd.addEventListener('click', () => {
//   let asNumber = Number(value.textContent);
//   let num = asNumber + 1;
//   return (value.textContent = `${num}`);
// });

// ==================================================

// Для 8.4

/*
  Есть форма с набором радиокнопок. Пользователь выбирает вариант ответа, 
  после чего нажимает кнопку "Submit" и происходит отправка формы.
  
  При отправке формы:
    - не должна перезагружаться страница
    - необходимо получить выбранную опцию и вывести в параграф с классом .result
*/

// document.addEventListener('DOMContentLoaded', () => {
//   const form = $qs('.question-form');
//   const options = $qs('.options');
//   const inputs = options.querySelectorAll('input');
//   const result = $qs('.result');

//   form.addEventListener('submit', handleFormSubmit);

//   function handleFormSubmit() {
//     event.preventDefault();

//     inputs.forEach(input => {
//       if (input.checked) {
//         result.textContent += input.value;
//       }
//     });
//   }
// });

// =================================================================
// Для 8.5

/*
  Дан список изображений. Сделайте так, чтобы по клику на картинку 
  алертом выводился ее src. Обязательно используйте делегирование событий.
*/

// const images = $qs('.images');
// console.log(images);
// images.addEventListener('click', showSrc);

// function showSrc(event) {
//   const target = event.target;
//   const nodeName = event.target.nodeName;
//   if (nodeName !== 'IMG') return;
//   console.log(target.src);
// }

// ==========================================================================

// 8.6
/*
  Дан ul, а внутри него произвольное количество li с текстом и кнопкой. 
  Сделайте так, чтобы по нажатию на кнопку, удалялся тот li в котором
  она находится. Обязательно используйте делегирование событий.
*/

// document.addEventListener('DOMContentLoaded', () => {
//   const list = $qs('.list');
//   const items = list.querySelectorAll('li');
//   list.addEventListener('click', delItem);
//   function delItem({ target }) {
//     const nodeName = target.nodeName;
//     const parent = target.parentNode;

//     if (nodeName !== 'BUTTON') return;
//     parent.remove();
//   }
// });

// ===================================================================
// 8.7

/*
  Дан набор инпутов. Сделайте так, чтобы при потере фокуса все 
  инпуты проверяли свое содержимое на правильное количество символов. 
  
  - Сколько символов должно быть в инпуте, указывается в атрибуте data-length. 
  - Если введено подходящее количество, то outline инпута становится зеленым, 
    если неправильное - красным. Для добавления стилей, на вкладке CSS есть стили valid и invalid
*/

// document.addEventListener('DOMContentLoaded', () => {
//   const list = $qs('.input-list');
//   console.log(list);
//   const inputs = $qsa('input');

//   inputs.forEach(input => {
//     input.addEventListener('focus', setToNeutral);
//     input.addEventListener('focusout', () => {
//       if (input.value.length >= input.dataset.length) {
//         setToActive();
//       } else if (input.value.length === 0) {
//         setToNeutral();
//       } else {
//         setToInactive();
//       }
//     });

//     function setToActive() {
//       input.classList.add('valid');
//     }
//     function setToInactive() {
//       input.classList.add('invalid');
//     }
//     function setToNeutral() {
//       if (input.classList.contains('valid')) {
//         input.classList.remove('valid');
//       }
//       if (input.classList.contains('invalid')) {
//         input.classList.remove('invalid');
//       }
//     }
//   });
// });

// ==========================================================================

// Модуль 8.8

/*
  Напишите скрипт который:
    
    - При фокусе текстового поля, в p.message рендерит строку "Input is in focus!"
    - При наборе текста в инпуте (событие input), текущее его значение должно 
      отображаться в p.input-value 
*/
// const message = $qs('.message');
// const input = $qs('.input');
// const input__value = $qs('.input-value');

// input.addEventListener('focus', messageInFocus);
// input.addEventListener('focusout', noMessage);

// input.addEventListener('change', addText);

// function messageInFocus() {
//   message.textContent = 'Input is in focus';
// }
// function noMessage() {
//   message.textContent = '';
// }
// function addText() {
//   input__value.textContent += input.value;
// }

// =======================================================================================

// 8.9
/*
  На вкладках HTML и CSS уже готовая верстка модального окна.
  По умолчанию модальное окно скрыто классом modal-hidden.
  
  Напишите скрипт который реализует следующее поведение:
 
  - При клике на кнопке с надписью "Open Modal", модальное окно с классом modal, 
    должно появляться. Для этого необходимо убрать класс modal-hidden. 
    Для выбора модального окна используйте класс js-modal-backdrop
 
  - При открытом модальном окне, клик на кнопку с крестиком (data-action="close-modal")
    или на серый фон с прозрачностью (js-modal-backdrop), модальное окно должно закрываться.
*/

// document.addEventListener('DOMContentLoaded', () => {
//   const modal = $qs('.modal');
//   const modalBackdrop = $qs('.js-modal-backdrop');
//   const btnShow = $qs('.btn');
//   btnShow.addEventListener('click', showModal);
//   const btnCloseModal = $qs('.close-btn');
//   btnCloseModal.addEventListener('click', hideModal);
//   modalBackdrop.addEventListener('click', handleBackdropClick);

//   function showModal() {
//     if (modal.classList.contains('modal-hidden')) {
//       modal.classList.remove('modal-hidden');
//     }
//   }

//   function hideModal() {
//     modal.classList.add('modal-hidden');
//   }
//   function handleBackdropClick(event) {
//     if (this !== event.target) return;
//     hideModal();
//   }
// });
