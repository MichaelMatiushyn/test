'use strict';

// const guest = {
//   id: 3,
//   name: 'Mango',
//   age: 5,
//   ishappy: true,
//   friends: ['Poly', 'Ajax'],
// };

// const asJSON = JSON.stringify(guest);
// // const asJSON = JSON.stringify(guest, null, 2);
// console.log(asJSON);

// const asObj = JSON.parse(asJSON);
// console.log(asObj);

// =========================================================================
// пример использования fetch()
// console.log('qweqwe1');

// fetch('https://jsonplaceholder.typicode.com/todos/1', {
//   method: 'GET',
//   headers: {
//     'Content-Type': 'application/json',
//   },
// })
//   .then(response => {
//     if (response.ok) return response.json();

//     throw new Error('Error' + response.text);
//   })
//   .then(data => console.log(data))
//   .catch(err => console.log('Error' + err));

// console.log('qweqwe2');

// ================================
// const btn = $qs('#js-btn');
// const output = $qs('#js-output');

// const onClick = () => {
//   fetch('https://jsonplaceholder.typicode.com/todos/1')
//     .then(response => {
//       if (response.ok) return response.json();
//       throw new Error('Error fetching data');
//     })
//     .then(data => {
//       console.log('data inside then', data);
//       output.textContent = JSON.stringify(data);
//     })
//     .catch(error => console.error('Error:', error));
// };

// btn.addEventListener('click', onClick);

// ===================================================
// на метод POST
// const newPost = {
//   author: 'Mango',
//   body: 'CRUD is awesome',
// };

// const options = {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json',
//   },
//   body: JSON .stringify(newPost),
// };

// const url = 'https://jsonplaceholder.typicode.com/posts';
// fetch(url, options)
//   .then(res => {
//     if (res.ok) return res.json();
//     throw new Error('error');
//   })
//   .then(post => console.log(post));

// ------------------------------------------------
// на метод GET

// const getPostByID = id => {
//   fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
//     .then(response => response.json())
//     .then(data => console.log(data));
// };
// getPostByID(18);
// getPostByID(19);

// -------------------------------------------------------------------
// на метод UPDATE

// const posttoUpdate = {
//   body: 'CRUD is realy awesome',
// };
// fetch('https://jsonplaceholder.typicode.com/posts/1', {
//   method: 'PUT',
//   body: JSON.stringify(posttoUpdate),
//   headers: {
//     'Content-Type': 'application/json; charset=UTF-8',
//   },
// })
//   .then(res => res.json())
//   .then(data => console.log(data));

// ------------------------------------------------
// Метод DELETE
// const deletePostById = id =>
//   fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
//     method: 'DELETE',
//   }).catch(err => console.log('Error:', err));
// deletePostById(3).then(() => console.log('update ui'));
// ==================================================================================================

// Модуль 10.3
// Запись простой строки
// localStorage.setItem('my-app-1', 'persisteditem');
// const fromLS1 = localStorage.getItem('my-app-1');
// console.log(fromLS1);

// const userSettings = {
//   theme: 'light',
//   fontSize: 24,
// };
// // Запись в локал storage объекта.
// localStorage.setItem('my-app-2', JSON.stringify(userSettings));

// const fromLS = localStorage.getItem('my-app-2');
// console.log(fromLS);

// localStorage.removeItem('my-app');
// если нужно очисть весь сторедж
// localStorage.clear();

// const output = $qs('#js-output');
// const input = $qs('#js-input');
// const btn = $qs('#js-btn');

// const updateView = () => {
//   output.textContent = localStorage.getItem('fe-adv-module-10') || '';
// };
// const onClick = () => {
//   localStorage.setItem('fe-adv-module-10', input.value);
//   updateView();
// };
// updateView();
// btn.addEventListener('click', onClick);

// const LOCALSTORAGE = (w => {
//   if (!w) return;
//   const isActive = 'localStorage' in w;

//   const get = key => {
//     try {
//       const serializedState = localStorage.getItem(key);
//       return serializedState === null ? undefined : JSON.parse(serializedState);
//     } catch (err) {
//       console.error('Get state error: ', err);
//     }
//   };
//   const set = (key, value) => {
//     try {
//       const serializedState = JSON.stringify(value);
//       localStorage.setItem(key, serializedState);
//     } catch (err) {
//       console.error('Get state error: ', err);
//     }
//   };
//   const publicAPI = {
//     isActive,
//     get,
//     set,
//   };
//   return publicAPI;
// })(window);

// ============================================
// const btn = $qs('#js-btn');
// const tBody = $qs('#js-tbody');
// const htmlTPL = $qs('#table-row').textContent.trim();
// const compiled = _.template(htmlTPL);
// const updateView = currencies => {
//   let htmlString = '';
//   currencies.forEach(currency => {
//     htmlString += compiled(currency);
//   });
//   tBody.innerHTML = htmlString;
// };
// const getCurrencyRates = () => {
//   fetch(' https://api.privatbank.ua/p24api/pubinfo?exchange&json&coursid=11')
//     .then(response => {
//       if (response.ok) return response.json();
//       throw new Error('Error fetching data');
//     })
//     .catch(err => {
//       console.log('Error: ', err);
//     });
// };
// const onClick = () => {
//   getCurrencyRates().then(currencies => {
//     updateView(currencies);
//   });
// };

// btn.addEventListener('click', onClick);

// ==================================

// fetch(
//   'http://api.weatherstack.com/forecast?access_key=88d6561994d070d739cbacafb8dc39fd&query=Киев&days=7&hourly = 1',
// )
//   .then(response => response.json())
//   .then(data => console.log(data));
// // Продовжити 0,52 часть 3

// =======================================

// const grid = $qs('.grid');
// const form = $qs('.form');
// const input = $qs('.input');
// const API_KEY = '563492ad6f91700001000001fc4ae933327a48ea88ce517765a14c0e';
// const spinner = $qs('.spinner-overlay');

// const toggleSpinner = () => spinner.classList.toggle('visible');

// const fetchImages = (query, count) => {
//   const url = `https://api.pexels.com/v1/search?query=${query}&per_page=${count}`;
//   const headers = { Authorization: API_KEY };

//   return fetch(url, { headers })
//     .then(res => {
//       if (res.ok) return res.json();
//       throw new Error('error' + res.statusText);
//     })
//     .then(data => data.photos)
//     .catch(err => console.log(err));
// };

// const createGridItem = items =>
//   items.reduce(
//     (markup, item) =>
//       markup +
//       `<div class='grid-item'><img src=${item.src.large} alt=${item.photographer}></div>`,
//     '',
//   );

// const updateGrid = photos => {
//   const markup = createGridItem(photos);
//   grid.innerHTML = markup;
// };

// const handleFormSubmit = e => {
//   e.preventDefault();
//   toggleSpinner();
//   fetchImages(input.value, 12).then(photos => {
//     updateGrid(photos);
//     toggleSpinner();
//   });
//   e.target.reset();
// };

// form.addEventListener('submit', handleFormSubmit);

// ==============================================================
// const getUserIP = () => {
//   fetch('https://api.ipify.org?format=json')
//     .then(response => {
//       if (response.ok) return response.json();
//       throw new Error('Error while fetching' + response.statusText);
//     })
//     .then(data => {
//       console.log(data.ip);
//       const onSuccess = position => {
//         const { latitude, longitude } = position.coords;

//         console.log(`Широта ${latitude}, Долгота: ${longitude}`);
//       };
//       const onError = error =>
//         console.log('Ошибка при определении положения:', error);
//       navigator.geolocation.getCurrentPosition(onSuccess, onError);
//     })
//     .catch(err => console.log(err));
// };

// const getWeather = () => {
//   fetch(
//     'https://api.ipify.org?format=json&apiKey=at_UATjeAAFUvMF7ryJs93bEBDRNhcRU',
//   )
//     .then(response => {
//       if (response.ok) return response.json();
//       throw new Error('Error while fetching' + response.statusText);
//     })
//     .then(data => {
//       console.log(data.ip);

//       const checkWeather = loc => {
//         fetch(
//           `http://api.weatherstack.com/current?access_key=6bc5f9b6661366dbe2f32ff97ab746e4&query=${loc}`,
//         )
//           .then(response => response.json())
//           .then(data => {
//             console.log(data);
//             console.log(data.current.temperature);
//             console.log(data.location.name);
//           });
//       };
//       checkWeather(data.ip);
//     })
//     .catch(err => console.log(err));
// };

// getWeather();

// ==================================================

// getUserIP()
//   .then(checkWeather)
//   .then(data => console.log(data));

// fetch(
//   'http://api.weatherstack.com/current?access_key = 88d6561994d070d739cbacafb8dc39fd&query=Киев',
// )
//   .then(res => res.json())
//   .then(data => console.log(data));

// повторение
// localStorage.setItem('my-app', 'persisted stuff');
// const fromLS = localStorage.getItem('my-app');
// console.log(fromLS);
// // не сохранит объект, нужно превратить его  в строку
// const userSettings = {
//   theme: 'light',
//   fontSize: 24,
// };

// localStorage.setItem('my-app', JSON.stringify(userSettings));
// const fromLS1 = JSON.parse(localStorage.getItem('my-app'));
// console.log(fromLS1);

// localStorage.setItem('my-app', 'check this file');
// console.log(localStorage.getItem('my-app'));

// const form = $qs('.form');
// const input = $qs('.input');
// const sale = $qs('.sale');
// const buy = $qs('.buy');

// const handleFormSubmit = e => {
//   e.preventDefault();
//   const req = input.value.toUpperCase();
//   const getValue = () => {
//     try {
//       fetch('https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5')
//         .then(res => res.json())
//         .then(data =>
//           data.map(item => {
//             if (item.ccy === req) {
//               buy.textContent = Number.parseFloat(item.buy).toFixed(2);
//               sale.textContent = Number.parseFloat(item.sale).toFixed(2);
//             }
//           }),
//         );
//     } catch (err) {
//       console.log(err);
//     }
//   };
//   getValue();

//   console.log(req);
//   e.target.reset();
// };

// form.addEventListener('submit', handleFormSubmit);

// Модуль 10 доп задания

/*

10.1
  Написать функцию fetchCountryData, которая использует
  API_URL + текущее значение input для составления запроса.
  
  Формат полного url таков:
    https://restcountries.eu/rest/v2/name/имя-страны
    
  С помощью fetch сделать запрос по составленому адресу. 
  Обязательно обработать вариант с ошибкой запроса используя catch. 
  
  
  Все необходимые данные есть в ответе от API.
  
  PS: при отправке формы перезагружается страница,
  решите эту задачу вспомнив о том, как остановить
  поведение по умолчанию.
*/

// const input = document.querySelector('input');
// const form = document.querySelector('.search-form');
// const result = document.querySelector('.result');
// const API_URL = 'https://restcountries.eu/rest/v2/name/';

// form.addEventListener('submit', fetchCountryData);

// /*
//   @param {FormEvent} evt
// */
// function fetchCountryData(evt) {
//   evt.preventDefault();
//   try {
//     fetch(`${API_URL}${input.value}`)
//       .then(res => res.json())
//       .then(data => {
//         const country = data[0];

//         result.innerHTML = `
// <div> Counrty name : ${country.name} </div>
// <div> Counrty capital : ${country.capital} </div>
// <div> Main currency: ${country.currencies[0].name} </div>
// <div class="flag"><img src="${country.flag}" alt='national flag'></div>
// `;
//         console.log(country);
//       });
//   } catch (error) {
//     console.log(error);
//   }
// }

// =======================================================

// 10.2

/*
  Написать функцию fetchUserData, которая использует
  API_URL + текущее значение input для составления запроса.
  
  Формат полного url таков:
    https://api.github.com/users/имя-пользователя
    
  Документация по Git API:
    https://developer.github.com/v3/
    
  С помощью fetch сделать запрос по составленому адресу. 
  Обязательно обработать вариант с ошибкой запроса используя catch. 
  
  Результат запроса вывести в поле result в формате:
    Avatar: аватартка 
    Username: логин
    Bio: описание профиля
    Public repos: кол-во открытых репозиториев
  
  Все необходимые данные есть в ответе от API.
*/

// const input = document.querySelector("input");
// const form = document.querySelector(".search-form");
// const result = document.querySelector(".result");
// const API_URL = "";

// form.addEventListener("submit", fetchUserData);

// /*
//   @param {FormEvent} evt
// */
// function fetchUserData(evt) {}

// fetch('https://api.github.com/users/')
//   .then(res => res.json())
//   .then(data => console.log(data));

// на потом

// 10.3

/*
  Документация API: https://jsonplaceholder.typicode.com/

  Просмотр всех пользователей: https://jsonplaceholder.typicode.com/users/ 

  Написать функцию fetchUsers, которая посылает get запрос.
  Результатом fetch будет массив объектов.
  
  В таблицу .user-table добавить строки для каждого пользователя.
  Каждая строка состоит из 5-ти столбцов указанного формата.
  Кол-во строк будет такое как и кол-во объектов пользователей в ответе.
  
    Имя | Почта | Город | Вебсайт | Компания
    Имя | Почта | Город | Вебсайт | Компания
    и так далее для каждого пользователя...
*/

// const form = document.querySelector('.search-form');
// const userTable = document.querySelector('.user-table');

// form.addEventListener('submit', fetchUsers);

// // @param {FormEvent} evt

// function createTableHead() {
//   console.log(userTable);
//   userTable.innerHTML = `

//   <tr>
//   <th>Имя</th>
//   <th>Почта</th>
//   <th>Город</th>
//   <th>Вебсайт</th>
//   <th>Компания</th>

//   </tr>

//   `;
// }
// function createUserInfo(user) {
//   const tableLine = `
//   <tr>
//   <td>${user.name}</td>
//   <td>${user.email}</td>
//   <td>${user.address.city}</td>
//   <td>${user.website}</td>
//   <td>${user.company.name}</td>

//   <tr>

//   `;
//   return tableLine;
// }
// function fetchUsers(evt) {
//   evt.preventDefault();
//   try {
//     createTableHead();
//     fetch('https://jsonplaceholder.typicode.com/users/')
//       .then(res => res.json())
//       .then(data =>
//         data.map(user => {
//           console.log(user);
//           userTable.innerHTML += createUserInfo(user);
//         }),
//       );
//   } catch (err) {
//     console.log(err);
//   }
// }

// 10.4

/*
  Документация API: https://jsonplaceholder.typicode.com/users/

  Написать функцию getUserById, которая посылает запрос 
  на получение информации о пользоватеьте с id (число) введенным в input. 
  Не забывайте что значение input это строка.
 
  Объект что придет в ответе используйте для вывода информации
  о пользователе в элементе .result
  
  Если пользователя с таким идентификатором в базе данных нет,
  в элемент .result вывести строку "Ошибка! Пользователя с таким id не существует"
*/

// const input = document.querySelector('input');
// const form = document.querySelector('.search-form');
// const result = document.querySelector('.result');

// form.addEventListener('submit', getUserById);

// function getUserById(evt) {
//   evt.preventDefault();
//   try {
//     fetch('https://jsonplaceholder.typicode.com/users/')
//       .then(res => res.json())
//       .then(data => {
//         if (!input.value) {
//           input.value = '';
//           input.placeholder = 'New search';
//           result.innerHTML = '';
//           return console.log('Ошибка! Не введено id');
//         }

//         const notNumber = Number.isNaN(Number(input.value));
//         if (notNumber) {
//           input.value = '';
//           input.placeholder = 'New search';
//           result.innerHTML = '';
//           return console.log('Вы ввели не число!');
//         }
//         const asNumber = Number(input.value);

//         data.map(user => {
//           if (user.id === asNumber) {
//             const loc = user.address;
//             result.innerHTML = `
//             <div>Name: ${user.name}</div>
//             <div>User ID:  ${user.id}</div>
//             <div>User Phone:  ${user.phone}</div>
//             <div>User Nickname: ${user.username}</div>
//             <div>User Adress: ${loc.suite}, ${loc.street},  ${loc.zipcode} ${loc.city}, </div>
//             <div>User Website: ${user.website}</div>

//             `;
//           }
//         });
//         input.value = '';
//         input.placeholder = 'New search';
//       });
//   } catch (error) {
//     console.log(err);
//   }
// }
