'use strict';

// let a = 7;
// let b = 6;
// let result = a*b;

// console.log('Result is ', result);

// const isComing = confirm('Please confirm the hotel reservation');
// console.log(isComing);
// console.log(typeof isComing);

// let hotelName = prompt('Please enter the name of desired Hotel');
// console.log(hotelName);
// console.log(typeof hotelName);

// console.log(Number.parseInt(Math.random()*100));
// console.log(Number.parseInt(Math.random() * 100));
// console.log(Number.parseInt(Math.random() * 100));
// console.log(Number.parseInt(Math.random() * 100));

// let month = 'January'

// let season = month === 'January' ? 'summer' : 'winter';
// console.log(season);

//===========================================================//

// const monthName = "January";
// let season;

// switch (monthName) {
//   case 'June':
//     season = 'summer';
//     break;
//   case 'May':
//     season = 'spring';
//     break;
//   case 'September':
//     season = 'autumn';
//     break;
//   default:
//     season = 'winter';
// }

// console.log(season);

// ====================================================================

//  const userAge = prompt('Введите Ваш возраст', 18);
//  console.log(userAge);
//  console.log(typeof userAge);

// ===========================================================================

// const isGoing = confirm('Вы хотите поехать на шашлык?');
// console.log(isGoing);
// console.log(typeof isGoing);

// const str = Number('5');
// console.log(typeof str);

// const age = Number(prompt('get age', '18'));
// console.log(typeof age);

// const margin = '15px';
// console.log(Number.parseInt(margin));
// const padding = '15.4px';
// console.log(Number.parseInt(padding));
// console.log(Number.parseFloat(padding));

// //
// console.log(Number.parseInt(Math.random() * 10));

// console.log(Math.round(1.5));

// console.log(Math.floor(1.9));
// console.log(Math.ceil(1.2));
// console.log(Math.pow(2,3));

// const message = 'I\'m happy!';
// console.log(message);

// const name = 'Mango';
// const mood = 'happy';

// const message = name + ' is '+ mood;
// console.log(message );

// const  message = 'Welcome to Our Resort';
// console.log('Length of message is ', message.length, 'symbol');

// console.log(message.toLowerCase());
// console.log(message);

// const message = 'Welcome to Uman';
// console.log(message.includes('to'));
// console.log(message.includes('Paris'));
// console.log(message.indexOf('to'));

// const name = 'Mango';
// const age = 5;
// const mood = 'happy';

// const message = `My name is ${name}, I'm ${age} years old and very ${mood}.`;
// console.log(message);

// 2 часть

// const num = 15;

// const isInRange = num >=10 && num <=30;

// console.log(isInRange);

// const num = Number(prompt('Введите пожалуйста число до 10'));

// // if (num >= 10 && num <= 30) {
// //   console.log('Отлично все подходит');
// // } else {
// //   console.log('Все плохо! число не подходит');
// // }
// //  ===================================== или

// const isInRange = num >= 10 && num <= 30;

// if (isInRange) {
//   console.log('все супер');
// } else {
//   console.log('fuck');
// }

// Продаем кофе, разные размеры стаканы
// const SIZE_SMALL = 0;
// const SIZE_MEDIUM = 1;
// const SIZE_LARGE = 2;

// const input = Number(prompt('0-small, 1- medium, 2- large', 0));

// if (input === SIZE_SMALL) {
//   console.log('готовим маленький кофе');
// } else if (input === SIZE_MEDIUM) {
//   console.log('готовим средний кофе');
// } else if (input === SIZE_LARGE) {
//   console.log('готовим большой кофе');
// } else {
//   console.log('Ошибка');
// }

// Попросить у пользователя число, если больше 10, записать в message "ура больше 10", в противном случае все плохо

// const input = Number(prompt('введите число больше 10'));
// // let message;

// // if (input > 10) {
// //   message = 'ура, больше 10!';
// // } else {
// //   message = 'все плохо';
// // }
// // alert(message);

// let message = input >=10 ? 'ура больше 10' : 'все плохо!';
// alert(message);

const SIZE_SMALL = 0;
const SIZE_MEDIUM = 1;
const SIZE_LARGE = 2;

const PRICE_SMALL = 50;
const PRICE_MEDIUM = 100;
const PRICE_LARGE = 150;

const userInput = prompt('0-small, 1- medium, 2- large', 0);
const coffeeSize = Number(userInput);
const isValidInput = userInput !== null && !Number.isNaN(coffeeSize);

console.log(isValidInput);
if (isValidInput) {
  let haveCoffee;
  let size;
  let price;

  switch (coffeeSize) {
    case SIZE_SMALL:
      haveCoffee = true;
      size = 'small';
      price = PRICE_SMALL;
      break;

    case SIZE_MEDIUM:
      haveCoffee = true;
      size = 'medium';
      price = PRICE_MEDIUM;
      break;

    case SIZE_LARGE:
      haveCoffee = true;
      size = 'large';
      price = PRICE_LARGE;
      break;

    default:
      console.log('такого кофе нет');
      haveCoffee = false;
  }

  if (haveCoffee) {
    const userCash = Number(prompt(`Заказан ${size}, с тебя ${price}`));
    if (userCash >= price) {
      let change = userCash - price;
      alert(`Вот ваш ${size} кофе. Ваша сдача составила ${change} гривен`);
    } else {
      alert('А денег то не хватило!');
    }
  }
} else {
  alert('Ввод не валидный!');
}
