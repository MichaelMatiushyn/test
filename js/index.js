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

// ============================================================================================/

// const SIZE_SMALL = 0;
// const SIZE_MEDIUM = 1;
// const SIZE_LARGE = 2;

// const PRICE_SMALL = 50;
// const PRICE_MEDIUM = 100;
// const PRICE_LARGE = 150;

// const userInput = prompt('0-small, 1- medium, 2- large', 0);
// const coffeeSize = Number(userInput);
// const isValidInput = userInput !== null && !Number.isNaN(coffeeSize);

// console.log(isValidInput);
// if (isValidInput) {
//   let haveCoffee;
//   let size;
//   let price;

//   switch (coffeeSize) {
//     case SIZE_SMALL:
//       haveCoffee = true;
//       size = 'small';
//       price = PRICE_SMALL;
//       break;

//     case SIZE_MEDIUM:
//       haveCoffee = true;
//       size = 'medium';
//       price = PRICE_MEDIUM;
//       break;

//     case SIZE_LARGE:
//       haveCoffee = true;
//       size = 'large';
//       price = PRICE_LARGE;
//       break;

//     default:
//       console.log('такого кофе нет');
//       haveCoffee = false;
//   }

//   if (haveCoffee) {
//     const userCash = Number(prompt(`Заказан ${size}, с тебя ${price}`));
//     if (userCash >= price) {
//       let change = userCash - price;
//       alert(`Вот ваш ${size} кофе. Ваша сдача составила ${change} гривен`);
//     } else {
//       alert('А денег то не хватило!');
//     }
//   }
// } else {
//   alert('Ввод не валидный!');
// }

// ============== Домашнее задание ===============================================//

// Доп задания//

/*
 * - Объяви две переменные хранящие информацию о товаре: name и price
 * - Присвой переменным следующие характеристики товара (сразу при объявлении)
 *   - название: Генератор защитного поля
 *   - цена: 1000
 * - Присвой товару новую цену - 2000
 * - Используя шаблонную строку выведи в консоли информацию о товаре,
 *   получится "Выбран «Генератор защитного поля», цена за штуку 2000 кредитов"
 */

// let name = 'Генератор защитного поля';
// let price = 1000;
// price = 2000;
// console.log(`"Выбран «${name}», цена за штуку ${price} кредитов" `);
// =========================================

/*
  Есть три переменные содержащие составляющие даты: день, месяц, и год. 
  
  Создай переменную date, в которую запиши полную дату в формате день\месяц\год
  Создай переменную message, в которую запиши сообщение "Доброе утро, cегодня 17\10\2048, за бортом отличная погода!"
  
  PS: используя шаблонные строки.
*/

// const day = 17;
// const month = 10;
// const year = 2048;
// const date = `${day}\\${month}\\${year}`;
// const message = `"Доброе утро, сегодня ${date}, за бортом отличная погода!`;

// console.log(date); // 17\10\2048
// console.log(message); // "Доброе утро, cегодня 17\10\2048, за бортом отличная погода!"
// ==============================================

/*
  Есть три переменные name, date и roomType, содержащие имя гостя, 
  дату его прибытия на отдых и тип комнаты отеля.
  
  Создай переменную message и используя шаблонные строки запиши в нее сообщение формата:
  "имя гостя" прибывает на отдых "дата прибытия" в "тип комнаты".
*/

// const name = 'Mango';
// const date = '14/08/2137';
// const roomType = 'люкс';
// const message = `${name} прибывыает на отдых ${date} в ${roomType}`;
// console.log(message); // Mango прибывает на отдых 14/08/2137 в люкс

// =================================================================

/*
  Напиши скрипт который: 
  
  - При посещении страницы через prompt cпрашивает 'Введите пароль доступа'
  - Если введенное значение совпадает со значением переменной correctPassword, 
    показывать alert со сообщением 'Доступ в секретный бункер разрешен!'
  - Если был нажат Cancel в prompt, показывать alert с сообщением 'Была нажата отмена!'.
  - Если что-то другое — показывать alert с сообщением 'Неверный пароль, активирована система защиты!'
*/

// const correctPassword = 'jqueryismyjam';
// const request = prompt('Введите пароль доступа');
// if (request !== null) {
//   if (request === correctPassword) {
//     alert('Доступ в секретный бункер разрешен!');
//   } else {
//     alert('Неверный пароль, активирована система защиты!');
//   }
// } else {
//   alert('Была нажата отмена!');
// }
// ==============================================

/*
  Необходимо написать скрипт проверки количества товаров на складе.
  Есть переменные total (количество товаров на складе) и ordered (единиц товара в заказе).
  
  Сравни эти значения и по результатам выведи:
  
    - Если в заказе указано число, превышающее количество товаров на складе, то выведи сообщение "На складе недостаточно твоаров!"
    - Если в заказе указано число товаров, равное количеству товара на складе, то выведи сообщение "Вы забираете весь товар cо склада!"
    - В иных случаях выводи сообщение "Заказ оформлен, с вами свяжется менеджер"
    
  Проверь работоспособность кода с разными значениями переменной ordered.
*/

// const total = 100;
// const ordered = 50;
// if (ordered > total) {
//   console.log('На складе недостаточно твоаров!');
// } else if (ordered === total) {
//   console.log('Вы забираете весь товар cо склада!');
// } else {
//   console.log('Заказ оформлен, с вами свяжется менеджер');
// }

// =================================================================

/*
  Напиши скрипт который: 
 
  - Через prompt cпрашивает 'Введите произвольное целое число'
  - Если пользователь нажал Cancel - показывать alert 'Ну и ладно, пока!'
  - Если посетитель вводит целое число - показывать alert со строкой 'Спасибо!'
  - Если посетитель вводит что либо другое — показывать alert 'Необходимо было ввести целое число!'
*/

// const request = prompt('Введите произвольное целое число');
// const asNumber = Number(request);
// const isInvalid = Number.isNaN(asNumber);

// if (request !== null) {
//   if (!isInvalid) {
//     alert('Спасибо');
//   } else {
//     alert('Необходимо было ввести целое число!');
//   }
// } else {
//   alert('Ну и ладно, пока!');
// }

// =====================================================

/* 
  В переменную value записывается случайное число.
  
  Объяви переменную type, в которую, используя ветвления запиши строку:  
    - "even" если value четное
    - "odd" если value не четное

  PS: используй тернарный оператор
*/

// const value = Number.parseInt(Math.random() * 100);
// let type = value % 2 !== 0 ? 'odd' : 'even';
// console.log(`${value} is ${type}`);
// ==============================================

/* 
  Создай скрипт поиска отелей, где пользователь с помощью prompt должен ввести число от 1 до 5.
  Проверять что пользователь может ввести что-то кроме 1-5 не нужно!
  
  Если пользователь нажал Cancel, то выведи alert с текстом 'Очень жаль, приходите еще!'
  В противном случае, используя switch, вывести alert с одной из строк:
  
    1 - "Каталог хостелов" 
    2 - "Каталог бюджетных отелей"
    3 - "Каталог отелей ***"
    4 - "Каталог отелей ****"
    5 - "Каталог лучших отелей"
*/

// const userAnswer = prompt('Введите тип отеля от 1 до 5');
// const asNumber = Number(userAnswer);

// if (userAnswer !== null) {
//   switch (asNumber) {
//     case 1:
//       alert('Каталог хостелов');
//       break;
//     case 2:
//       alert('Каталог бюджетных отелей');
//       break;
//     case 3:
//       alert('Каталог отелей ***');
//       break;
//     case 4:
//       alert('Каталог отелей ****');
//       break;
//     default:
//       alert('Каталог лучших отелей');
//       break;
//   }
// } else {
//   alert('Очень жаль, приходите еще!');
// }

// =============================================================

/* 
  Пользователь может оформить доставку товара к себе в страну, 
  указав ее в переменной country, но доставка есть не везде.
  
  Напиши скрипт который выводит сообщение о стоимости доставки в указанную страну.
  Сообщение выглядит так: "Доставка в <<тут страна>> будет стоить <<тут цена>>"
  
  Ниже приведен список стран и стоимость доставки.
  
    Китай - 100 кредитов
    Южная Америка - 250 кредитов
    Австралия - 170 кредитов
    Индия - 80 кредитов
    Ямайка - 120 крдитов
  
  Если названия нет в списке, то выводи в консоль сообщение "В вашей стране доставка не доступна".
  Протестируй работоспособность кода подставив разные значения в переменную country.
  
  PS: используй switch
*/

// const country = 'Индия';
// let price;
// let isCountry;
// switch (country) {
//   case 'Китай':
//     price = 100;
//     isCountry = true;
//     break;
//   case 'Южная Америка':
//     price = 250;
//     isCountry = true;
//     break;
//   case 'Австралия':
//     price = 170;
//     isCountry = true;
//     break;
//   case 'Индия':
//     price = 80;
//     isCountry = true;
//     break;
//   case 'Ямайка':
//     price = 120;
//     isCountry = true;
//     break;
//   default:
//     isCountry = false;
// }

// if (isCountry) {
//   console.log(`Доставка в ${country} будет стоить ${price} кредитов.`);
// } else {
//   console.log('В вашей стране доставка не доступна.');
// }

// =======================================================================

/* 
  Создай скрипт поиска отелей, где пользователь 
  с помощью prompt должен ввести число от 1 до 5
  
  Проверить что пользователь ввел именно цифру от 1 до 5
  
  Если пользователь нажал Cancel, то выведи alert с текстом 'Очень жаль, приходите еще!'
  
  Если было введено что либо кроме чисел 1-5, вывести alert с текстом 'Неверный ввод, возможные варианты 1-5!'
  
  Если же пользовател ввел валидное число, используя switch, вывести alert с одной из строк:
  
    1 - "Каталог хостелов" 
    2 - "Каталог бюджетных отелей"
    3 - "Каталог отелей ***"
    4 - "Каталог отелей ****"
    5 - "Каталог лучших отелей"
*/
// =====================
// const request = prompt('Введите категорию отелей от 1 до 5');
// const asNumber = Number(request);
// const isValidNumber = !Number.isNaN(asNumber);

// if (request !== null) {
//   if (asNumber >= 1 && asNumber <= 5) {
//     let typeOfHotel;
//     switch (asNumber) {
//       case 1:
//         typeOfHotel = 'Каталог хостелов';
//         break;
//       case 2:
//         typeOfHotel = 'Каталог бюджетных отелей';
//         break;
//       case 3:
//         typeOfHotel = 'Каталог отелей ***';
//         break;
//       case 4:
//         typeOfHotel = 'Каталог отелей ****';
//         break;
//       default:
//         typeOfHotel = 'Каталог лучших отелей';
//     }
//     alert(`${typeOfHotel}`);
//   } else {
//     alert('Неверный ввод, возможные варианты 1-5!');
//   }
// } else {
//   alert('Очень жаль, приходите еще!');
// }

// =========================================================================================
// Домашнее задание
// ====================================================================

/*
  Напишите скрипт имитирующий авторизацию администратора в панели управления.
  
  При загрузке страницы у посетителя запрашивается логин через prompt:
  
    - Если посетитель нажал Cancel — показывать alert с текстом 'Отменено пользователем!'
    - Если было введено что либо другое, что не совпадает со значением константы adminLogin, 
       показывать alert с текстом 'Доступ запрещен, неверный логин!'   
    - Если был введен логин совпадающий со значением константы adminLogin, 
      спрашивать пароль через prompt.
    
  При вводе пароля:
  
      - Если нажали Cancel, показывать alert с текстом 'Отменено пользователем!'
      - Если введен пароль который не совпадает со значением константы adminPassword,
        показывать alert с текстом 'Доступ запрещен, неверный пароль!'        
      - Если введён пароль который совпадает со значением константы adminPassword, 
        показывать alert с текстом 'Добро пожаловать!'
        
  🔔 PS: для удобства и чистоты кода сохраните в переменные сообщения отображаемые в alert
*/

// const adminLogin = 'admin';
// const adminPassword = 'm4ngo1zh4ackz0r';
// const onCancel = 'Отменено пользователем';
// const wrongLogin = 'Доступ запрещен, неверный логин!';
// const wrongPassword = 'Доступ запрещен, неверный пароль!';
// const wellcome = 'Добро пожаловать';

// const userRequest = prompt('Введите логин');
// if (userRequest !== null) {
//   if (userRequest === adminLogin) {
//     const password = prompt('Введите пароль!');

//     if (password !== null) {
//       if (password === adminPassword) {
//         alert(wellcome);
//       } else {
//         alert(wrongPassword);
//       }
//     } else {
//       alert(onCancel);
//     }
//   } else {
//     alert(wrongLogin);
//   }
// } else {
//   alert(onCancel);
// }

/*
  ⚠️ ДОПОЛНИТЕЛЬНОЕ ЗАДАНИЕ - ВЫПОЛНЯТЬ ПО ЖЕЛАНИЮ
  
  Создайте скрипт турагенства, продающего поездки в 3-х группах: sharm, hurgada и taba.
  Кол-во мест в группах ограничено (создайте переменные для хранения мест в группах): 
    * sharm - 15
    * hurgada - 25
    * taba - 6.
  Когда пользователь посещает страницу, ему необходимо предложить ввести число необходимых мест,
  результат сохранить в переменную.
  Необходимо проверить являются ли введенные данные целым положительным числом. 
  
    - В случае неверного ввода от пользователя, скрипт показывает alert с текстом 
      "Ошибка ввода" и больше ничего не делает.
    - Если пользователь нажал Cancel, скрипт показывает alert с текстом "Нам очень жаль, приходите еще!".
    - В случае верного ввода, последовательно проверить кол-во мест в группах, 
      и кол-во необходимых мест введенных пользователем.
  Если была найдена группа в которой количество мест больше либо равно необходимому, 
  вывести сообщение через confirm, что есть место в группе такой-то, согласен ли 
  пользоваетель быть в этой группе?
    * Если ответ да, показать alert с текстом 'Приятного путешествия в группе <имя группы>'
    * Если ответ нет, показать alert с текстом 'Нам очень жаль, приходите еще!'
  
  Если мест нигде нет, показать alert с сообщением 'Извините, столько мест нет ни в одной группе!'
*/

// const sharm = 15;
// const hurgada = 25;
// const taba = 6;
// const wrongInput = 'Ошибка ввода';
// const onCancel = 'Нам очень жаль, приходите еще!';
// let tourName;

// const reqNumber = prompt('Введите число необходимых мест');
// const asNumber = Number.parseInt(reqNumber);

// if (reqNumber !== null) {
//   if (!Number.isNaN(asNumber) && asNumber >= 1) {
//     if (asNumber <= hurgada) {
//       let confirmTour = confirm(
//         'В группе Хургада достаточно мест. Желаете присоидениться?',
//       );
//       if (confirmTour) {
//         tourName = 'Хургада';
//       } else if (asNumber < sharm) {
//         confirmTour = confirm(
//           'Вгруппе Шарм достаточно мест. Желаете присоидениться?',
//         );
//         if (confirmTour) {
//           tourName = 'Шарм';
//         } else if (asNumber < taba) {
//           confirmTour = confirm(
//             'В группе Таба достаточно мест. Желаете присоидениться?',
//           );
//           if (confirmTour) {
//             tourName = 'Таба';
//           }
//         }
//       }

//       alert(`Приятного путешествия в группе ${tourName}.`);
//     } else {
//       alert('Извините, столько мест нет ни в одной группе!');
//     }
//   } else {
//     alert(wrongInput);
//   }
// } else {
//   alert(onCancel);
// }
