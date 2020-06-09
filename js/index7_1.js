'use strict';

// 7.1
/*
  Есть список категорий с классом categories (на вкладке HTML).
  
  Напишите код, который для каждого элемента li (первая вложенность) 
  в списке categories выведет в консоль:
  - Текст непосредственно в нём (название категории)
  - Количество всех вложенных в него элементов li
  
  К примеру:
    Категория: Животные
    Количество вложенных li: 4
*/

// const items = $qsa('.categories>li');
// items.forEach(item => {
//   console.log('Категория:', item.firstChild);
//   console.log(
//     'Количество вложеных li:',
//     item.firstElementChild.children.length,
//   );
// });

// 7,2

/*
  Дан список с классом .list
	- Найдите первого потомка списка и сделайте его текст красного цвета
	- Найдите последнего потомка списка и сделайте его текст синего цвета
*/
// const list = $qs('.list');
// const firstLine = list.firstElementChild;
// firstLine.classList.add('text-red');
// const lastLine = list.lastElementChild;
// lastLine.classList.add('text-blue');

// 7.3

/*
  Дан ul склассом .list и массив строк. 
  
  Вставьте элементы этого массива в ul так, чтобы каждый элемент стоял в своем li.
*/

// const elements = ['HTML', 'CSS', 'JavaScript', 'React', 'Node'];

// const list = $qs('.list');
// console.log(list);

// elements.forEach(item => {
//   const el = $cel('li');
//   el.textContent = item;
//   list.appendChild(el);
// });

// 7.4

/*
  Напишите скрипт для создания галлереи изображений. 
  
  - На вкладке HTML уже есть ul.gallery.
  - Используйте массив объектов для создания тегов img 
  вложенных в li
  - Оформление по вкусу, можно и не делать, достаточно чтобы каждое 
    изображение было 300px по ширине
  - Добавьте все элементы галлереи в ul.gallery
*/

// const galleryItems = [
//   {
//     url:
//       'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
//     alt: 'White and Black Long Fur Cat',
//   },
//   {
//     url:
//       'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
//     alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
//   },
//   {
//     url:
//       'https://images.pexels.com/photos/1216482/pexels-photo-1216482.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
//     alt: 'Two Brown Hen and One Red Rooster',
//   },
//   {
//     url:
//       'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
//     alt: 'Group of Horses Running',
//   },
//   {
//     url:
//       'https://images.pexels.com/photos/1316294/pexels-photo-1316294.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
//     alt: 'Macaw Birds',
//   },
//   {
//     url:
//       'https://images.pexels.com/photos/41178/africa-animal-big-carnivore-41178.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
//     alt: '2 Lion on Grass Field during Daytime',
//   },
// ];

// function createGalleryItem({ url = '', alt = 'description' }) {
//   const list_item = $cel('li');
//   list_item.classList.add('list_item');

//   const box = $cel('div');
//   box.classList.add('box');

//   const img = $cel('img');
//   img.classList.add('img_item');
//   img.setAttribute('src', url);
//   img.setAttribute('alt', alt);

//   box.appendChild(img);
//   list_item.appendChild(box);

//   return list_item;
// }
// function createGridGallery(arr) {
//   return arr.reduce((acc, el) => acc.concat(createGalleryItem(el)), []);
// }

// const gallery = $qs('.gallery');
// const elements = createGridGallery(galleryItems);
// gallery.append(...elements);
//

// 7.5
/*
  Есть список с классом .size-filter из произвольного 
  количества чекбоксов, каждый из которых содержит 
  размер одежды в фильтре.
  
  Напишите функцию collectInputData(inputs), которая
  принимает 1 параметр inputs - массив тех инпутов
  у которых состояние checked.
  
  Возвращает массив значений атрибута value.
*/

// function collectInputData(inputs) {
//   const size_filter = $qs(inputs);
//   const asArr = Array.from(size_filter.children);
//   const values = [];
//   asArr.forEach(item => {
//     const label = item.firstElementChild;
//     const input = label.firstElementChild;
//     if (input.hasAttribute('checked')) {
//       values.push(input.getAttribute('value'));
//     }
//   });
//   console.log(values);
// }

// const values = collectInputData('.size-filter');

// Задание 7.6

/*
  Создайте функцию createMovieCard(), которая 
  создает и возвращает DOM-узел карточки кинофильма.
  
  Разметка с классами есть на вкладке HTML.
  Стили на вкладке CSS.
  
  Используйте createElement для создания узлов.
  Добавьте классы и атрибуты.
*/
// function createMovieCard() {
//   const movie = $cel('div');
//   movie.classList.add('movie');

//   const movie__image = $cel('img');
//   movie__image.classList.add('movie__image');
//   movie__image.setAttribute(
//     'src',
//     'http://image.tmdb.org/t/p/w500/rPdtLWNsZmAtoZl9PK7S2wE3qiS.jpg',
//   );
//   movie__image.setAttribute('alt', 'movie image');

//   const movie__body = $cel('div');
//   movie__body.classList.add('movie__body');

//   const movie__title = $cel('h2');
//   movie__title.classList.add('movie__title');
//   movie__title.textContent = 'The Godfather';

//   const movie__description = $cel('p');
//   movie__description.classList.add('movie__description');
//   movie__description.textContent =
//     'Spanning the years 1945 to 1955, a chronicle of the fictional Italian-American Corleone crime family. When organized crime family patriarch, Vito Corleone barely survives an attempt on his life, his youngest son, Michael steps in to take care of the would-be killers, launching a campaign of bloody revenge.';

//   const movie__date = $cel('p');
//   movie__date.classList.add('movie__date');
//   movie__date.textContent = 'Released: 1972-03-14';

//   const movie__rating = $cel('p');
//   movie__rating.classList.add('movie__rating');
//   movie__rating.textContent = 'Rating: 8.6';

//   movie__body.append(
//     movie__title,
//     movie__description,
//     movie__date,
//     movie__rating,
//   );

//   movie.append(movie__image, movie__body);

//   const box = $qs('.movie__box');
//   box.appendChild(movie);
// }
// const movie1 = createMovieCard();

/* <div class="movie">
  <img class="movie__image" src="http://image.tmdb.org/t/p/w500/rPdtLWNsZmAtoZl9PK7S2wE3qiS.jpg" alt="movie image">
  
  <div class="movie__body">
    <h2 class="movie__title">The Godfather</h2>
    <p class="movie__description">Spanning the years 1945 to 1955, a chronicle of the fictional Italian-American Corleone crime family. When organized crime family patriarch, Vito Corleone barely survives an attempt on his life, his youngest son, Michael steps in to take care of the
      would-be killers, launching a campaign of bloody revenge.</p>

    <p class="movie__date">Released: 1972-03-14</p>
    <p class="movie__rating">Rating: 8.6</p>
  </div>
</div> */
