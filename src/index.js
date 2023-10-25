// import { fetchBreeds, fetchCatByBreed } from './cat-api.js';

const selectCat = document.querySelector('.breed-select');
const catCard = document.querySelector('.cat-info');
// const loader = document.querySelector('.loader');

// При завантажені сторінки, запит на сервер за колекцією порід, і створення списку в Select
// fetchBreeds().then(data => createOptions(data));

// selectCat.addEventListener('change', selectBreed);

// function createOptions(arr) {
//   // loader.hidden = true;
//   selectCat.hidden = false;
//   const options = arr.map(({ id, name }) => {
//     return `<option value=${id}>${name}</option>`;
//   });

//   selectCat.innerHTML = options.join('');
// }

// function selectBreed(evt) {
//   catCard.innerHTML = '';
//   // loader.hidden = false;
//   let breedId = evt.currentTarget.value;
//   fetchCatByBreed(breedId).then(data => renderCatCard(data[0]));
// }

// function renderCatCard({ url, breeds }) {
//   const temperament = breeds[0].temperament;
//   const name = breeds[0].name;
//   const description = breeds[0].description;

//   const catInfo = `<img src="${url}" alt="${name}" width=400/>
//   <div>
//   <h2>${name}</h2>
//   <P>${description}</P>
//   <p>Temperament: ${temperament}</p>
//   </div>`;

//   catCard.innerHTML = catInfo;
// }

// ------------------------Пробую створити класс для роботи з АРІ---------------------------

import ApiService from './cat-api.js';
// створюємо екземпляр класу
const ApiService = new ApiService();
console.log(ApiService);
ApiService.fetchBreeds();
// -----------Застрягла------------

// ApiService.fetchBreeds().then(data => createOptions(data));

// selectCat.addEventListener('change', selectBreed);

function createOptions(arr) {
  // loader.hidden = true;
  selectCat.hidden = false;
  const options = arr.map(({ id, name }) => {
    return `<option value=${id}>${name}</option>`;
  });

  selectCat.innerHTML = options.join('');
}

function selectBreed(evt) {
  catCard.innerHTML = '';
  // loader.hidden = false;
  let breedId = evt.currentTarget.value;
  fetchCatByBreed(breedId).then(data => renderCatCard(data[0]));
}

function renderCatCard({ url, breeds }) {
  const temperament = breeds[0].temperament;
  const name = breeds[0].name;
  const description = breeds[0].description;

  const catInfo = `<img src="${url}" alt="${name}" width=400/>
  <div>
  <h2>${name}</h2>
  <P>${description}</P>
  <p>Temperament: ${temperament}</p>
  </div>`;

  catCard.innerHTML = catInfo;
}
