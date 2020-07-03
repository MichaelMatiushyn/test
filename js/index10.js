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
//   body: JSON.stringify(newPost),
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


const grid = $qs('.grid');
const form = $qs('.form');
const input = $qs('.input');
const API_KEY = '563492ad6f91700001000001fc4ae933327a48ea88ce517765a14c0e';
const spinner = $qs('.spinner-overlay');

const toggleSpinner = () => spinner.classList.toggle('visible');

const fetchImages = (query, count) => {
  const url = `https://api.pexels.com/v1/search?query=${query}&per_page=${count}`;
  const headers = { Authorization: API_KEY };

  return fetch(url, { headers })
    .then(res => {
      if (res.ok) return res.json();
      throw new Error('error' + res.statusText);
    })
    .then(data => data.photos)
    .catch(err => console.log(err));
};

const createGridItem = items =>
  items.reduce(
    (markup, item) =>
      markup +
      `<div class='grid-item'><img src=${item.src.large} alt=${item.photographer}></div>`,
    '',
  );

const updateGrid = photos => {
  const markup = createGridItem(photos);
  grid.innerHTML = markup;
};

const handleFormSubmit = e => {
  e.preventDefault();
  toggleSpinner();
  fetchImages(input.value, 12).then(photos => {
    updateGrid(photos);
    toggleSpinner();
  });
  e.target.reset();
};

form.addEventListener('submit', handleFormSubmit);

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

// const checkWeather = loc => {
//   fetch(
//     `http://api.weatherstack.com/current.json?access_key=88d6561994d070d739cbacafb8dc39fd & query = ${loc}`,
//   )
//     .then(response => response.json())
//     .then(data => console.log(data));
// };

// const getUserIP = () => {
//   fetch('https://api.ipify.org?format=json')
//     .then(response => {
//       if (response.ok) return response.json();
//       throw new Error('Error while fetching' + response.statusText);
//     })
//     .then(data => {
//       console.log(data.ip);
//     })
//     .catch(err => console.log(err));
// };
// getUserIP()
//   .then(checkWeather)
//   .then(data => console.log(data));

// fetch(
//   'http://api.weatherstack.com/current?access_key = 88d6561994d070d739cbacafb8dc39fd&query=Киев',
// )
//   .then(res => res.json())
//   .then(data => console.log(data));
