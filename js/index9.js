'use strict';

// console.log('1');

// setTimeout(() => {
//   console.log('2');
// }, 1000);

// console.log('3');

// const timerId1 = setTimeout(() => {
//   console.log('hello1');
// }, 2000);
// const timerId2 = setTimeout(() => {
//   console.log('hello2');
// }, 2000);

// console.log(timerId1);
// console.log(timerId2);

// clearTimeout(timerId1);

// let counter = 0;
// const clock = setInterval(() => {
//   counter += 1;
//   console.log(counter);
// }, 1000);

// const clockface = $qs('.js-clockface');
// const startBtn = $qs('.js-start');
// const stopBtn = $qs('.js-stop');

// const timer = {
//   value: 0,
//   timerid: 0,
//   isActive: false,

//   start(onStart) {
//     console.log(onStart);
//     if (!this.isActive) {
//       console.log('start');
//       this.isActive = true;
//       this.timerId = setInterval(() => {
//         this.value += 1;
//         onStart(this.value);
//       }, 500);
//     }
//   },
//   stop(onStop) {
//     console.log('stop');
//     this.isActive = false;
//     clearInterval(this.timerId);
//     this.timerId = null;
//     this.value = 0;
//     onStop(this.value);
//   },
// };

// startBtn.addEventListener('click', timer.start.bind(timer, updateClockface));
// stopBtn.addEventListener('click', timer.stop.bind(timer, updateClockface));

// или через конструктор

// class Timer {
//   constructor({ startValue = 0, delay = 1000, onTick = () => null }) {
//     this.value = startValue;
//     this.timerid = null;
//     this.isActive = false;
//     this.delay = delay;

//     this.onTick = onTick;
//   }
//   start() {
//     if (!this.isActive) {
//       console.log('start');
//       this.isActive = true;
//       this.timerId = setInterval(() => {
//         this.value += 1;
//         this.onTick(this.value);
//       }, this.delay);
//     }
//   }
//   stop() {
//     console.log('stop');
//     this.isActive = false;
//     clearInterval(this.timerId);
//     this.timerId = null;
//     this.value = 0;
//     this.onTick(this.value);
//   }
// }

// const timer = new Timer({
//   startValue: 0,
//   delay: 700,
//   onTick: updateClockface,
// });

// startBtn.addEventListener('click', timer.start.bind(timer, updateClockface));
// stopBtn.addEventListener('click', timer.stop.bind(timer, updateClockface));

// function updateClockface(val) {
//   clockface.textContent = val;
// }

// ===============================================================

// const date = new Date('April 10, 2048');
// const date = new Date(101, 0, 1, 14, 30, 0, 0);
// console.log(date);

// const d = new Date(0);
// console.log(d);

// ======================================

// setInterval(() => {
//   console.log(new Date());
// }, 1000);

// const date = new Date();
// console.log(date);
// console.log('get date', date.getDate());
// console.log('get day', date.getDay());
// console.log('get month', date.getMonth());
// console.log('get time:', date.getTime());

// console.log('get hours', date.getHours());
// console.log('get minutes', date.getMinutes());
// console.log('get seconds', date.getSeconds());

// const counter = 0;
// let startTime = Date.now();
// let deltaTime = 0;

// let minutes;
// let seconds;
// let milliseconds;

// setInterval(() => {
//   const currentTime = Date.now();
//   deltaTime = currentTime - startTime;

//   const time = new Date(deltaTime);
//   seconds = time.getSeconds();
//   minutes = time.getMinutes();
//   milliseconds = Number.parseInt(time.getMilliseconds() / 100);

//   clockface.textContent = `${minutes} : ${seconds} : ${milliseconds}`;
// }, 100);

// const clockface = $qs('.js-clockface');
// const startBtn = $qs('.js-start');
// const stopBtn = $qs('.js-stop');

// ====================================================================

// const clockface = $qs('.js-clockface');
// const startBtn = $qs('.js-start');
// const stopBtn = $qs('.js-stop');

// class Timer {
//   constructor({ onTick }) {
//     this.startTime = null;
//     this.delayTime = null;
//     this.timerid = null;
//     this.isActive = false;
//     this.onTick = onTick;
//     this.pauseTime = 0;
//   }
//   start() {
//     if (!this.isActive) {
//       console.log('start');
//       this.isActive = true;
//       this.startTime = Date.now();
//       // this.startTime = Date.now() + this.pauseTime;

//       this.timerId = setInterval(() => {
//         const currentTime = Date.now();
//         this.deltaTime = currentTime - this.startTime;

//         const time = new Date(this.deltaTime);
//         const min = time.getMinutes();
//         const sec = time.getSeconds();
//         const ms = Number.parseInt(time.getMilliseconds() / 100);
//         this.onTick({ min, sec, ms });
//       }, 100);
//     }
//   }
//   stop() {
//     console.log('stop');
//     this.isActive = false;
//     clearInterval(this.timerId);
//     this.timerId = null;
//     this.startTime = 0;
//     this.deltaTime = 0;
//     this.onTick({ min: 0, sec: 0, ms: 0 });
//   }
// }

// const timer = new Timer({
//   onTick: updateClockface,
// });

// startBtn.addEventListener('click', timer.start.bind(timer, updateClockface));
// stopBtn.addEventListener('click', timer.stop.bind(timer, updateClockface));

// function updateClockface({ min, sec, ms }) {
//   clockface.textContent = `${min} : ${sec} : ${ms}`;
// }

// console.log(new Date());

// ===========================================================
// модуль 9.2

