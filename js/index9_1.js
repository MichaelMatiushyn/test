'use strict';

/* Доп задания 1

 * Есть массив цветов в hex-формате и кнопки Start и Stop.
 *
 * Напиши скрипт, который после нажатия кнопки Start, раз в секунду
 * меняет цвет фона body на случайное значение из массива. Используй
 * инлайн-стиль для изменения background-color.
 *
 * При нажатии на кнопку Stop, изменении цвета фона должно останавливаться.
 *
 * Учти, что на кнопку Start можно нажать бесконечное количество раз.
 * Сделай так, чтобы пока изменение темы запушено, кнопка Start была не активна.
 */

// const colors = [
//   '#FFFFFF',
//   '#2196F3',
//   '#4CAF50',
//   '#FF9800',
//   '#009688',
//   '#795548',
// ];

// const body = $qs('body');
// let isActive = false;
// const btns = $qsa('.button');
// let btnStart;
// let btnStop;
// let timerId;

// console.log(btns);

// btns.forEach(btn => {
//   if (btn.dataset.action === 'start') {
//     btnStart = btn;
//   } else if (btn.dataset.action === 'stop') {
//     btnStop = btn;
//   }
// });

// btnStart.addEventListener('click', () => {
//   if (!isActive) {
//     timerId = setInterval(() => {
//       body.setAttribute('style', getRandomColor(colors));
//       isActive = true;
//     }, 1000);
//   }
// });

// btnStop.addEventListener('click', () => {
//   isActive = false;
//   clearInterval(timerId);
//   body.removeAttribute('style');
// });

// function getRandomColor(arr) {
//   const max = arr.length;
//   const min = 0;
//   const num = Number.parseInt(Math.random() * 10);
//   let currentColor = arr[num];
//   if (num >= 0 && num < arr.length && currentColor !== 'undefined') {
//     return `background-color : ${arr[num]}`;
//   } else {
//     return `background-color : ${arr[1]}`;
//   }
// }
// ===========================================================================
// Доп задания 2

/* 
  Напишите функцию getFormattedTime(time), которая 
  получает time - кол-во миллисекунд и возвращает 
  строку времени в формате xx:xx.x, 01:23.6, минуты:секунды.миллисекунды.
  
  Используйте возможности объекта Date для работы со временем.
  
  Из миллисекунд нам интересен только разряд с сотнями,
  то есть если сейчас 831мс то нам интересна исключительно цифра 8.
*/

// function getFormattedTime(time) {
//   let date = new Date(time);
//   let minutes = date.getMinutes();
//   let seconds = date.getSeconds();
//   let ms = Number.parseInt(date.getMilliseconds() / 100);
//   if (minutes < 10) {
//     minutes = `0${minutes}`;
//   }
//   if (seconds < 10) {
//     seconds = `0${seconds}`;
//   }

//   return `${minutes}:${seconds}.${ms}`;
// }

// console.log(getFormattedTime(1523621052858)); // 04:12.8

// console.log(getFormattedTime(1523621161159)); // 06:01.1

// console.log(getFormattedTime(1523621244239)); // 07:24.2

// =========================================================

// Задание 9.3

/* 
  Напишите скрипт, реализующий базовый функционал
  таймера, запуск отсчета времени и сброс счетчика
  в исходное состояние.
  
  Используйте возможности объекта Date для работы со временем.
  
  Создайте функцию startTimer, которая будет запускать
  отсчет времени с момента ее нажатия, она вызывается 
  при клике на кнопку с классом js-timer-start.
  
  Создайте функцию stopTimer, которая будет останавливать
  счетчик, она вызывается при клике на кнопку с классом js-timer-stop.
  
  Используйте вспомогательную функцию updateClockface 
  которая обновляет значение счетчика в интерфейсе. 
  Для составления строки времени в формате xx:xx.x, 
  исользуйте функцию getFormattedTime из задания номер 3.
  
  Подсказка: так как нам интересны исключительно сотни миллисекунд,
      нет смысла выполнять пересчет времени чаще чем каждые 100мс.
*/

// const clockface = document.querySelector('.js-clockface');
// const startBtn = document.querySelector('.js-timer-start');
// const stopBtn = document.querySelector('.js-timer-stop');

// const timer = {
//   startTime: null,
//   deltaTime: null,
//   id: null,
//   isActive: false,
//   startTimer() {
//     if (!this.isActive) {
//       this.isActive = true;
//       this.startTime = Date.now();
//       console.log('start');

//       this.id = setInterval(() => {
//         const currentTime = Date.now();
//         this.deltaTime = currentTime - this.startTime;
//         updateClockface(clockface, this.deltaTime);
//       }, 100);
//     }
//   },
//   stopTimer() {
//     if (this.isActive) {
//       console.log('stop');

//       clearInterval(this.id);
//       this.isActive = false;
//       this.id = null;
//     }
//   },
// };

// startBtn.addEventListener('click', timer.startTimer.bind(timer));
// stopBtn.addEventListener('click', timer.stopTimer.bind(timer));

// /*
//  * Вспомогательные функции
//  */

// /*
//  * Обновляет поле счетчика новым значением при вызове
//  * аргумент time это кол-во миллисекунд
//  */
// function updateClockface(elem, time) {
//   // Используйте функцию getFormattedTime из задания #1
//   elem.textContent = getFormattedTime(time);
// }

// /*
//  * Подсветка активной кнопки
//  */
// function setActiveBtn(target) {
//   if (target.classList.contains('active')) {
//     return;
//   }

//   startBtn.classList.remove('active');
//   stopBtn.classList.remove('active');

//   target.classList.add('active');
// }

// function getFormattedTime(time) {
//   let date = new Date(time);
//   let minutes = date.getMinutes();
//   let seconds = date.getSeconds();
//   let ms = Number.parseInt(date.getMilliseconds() / 100);
//   if (minutes < 10) {
//     minutes = `0${minutes}`;
//   }
//   if (seconds < 10) {
//     seconds = `0${seconds}`;
//   }
//   return `${minutes}:${seconds}.${ms}`;
// }
