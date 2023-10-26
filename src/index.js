import ApiService from './cat-api.js';
import LoadingStatus from './loading.js';

const selectCat = document.querySelector('.breed-select');
const catCard = document.querySelector('.cat-info');
const loader = document.querySelector('.loader');
const error = document.querySelector('.error');
// створюємо екземпляри класу, назва екземпляру з маленької букви
const apiService = new ApiService();
const loadingStatus = new LoadingStatus(loader, error);

// При завантажені сторінки, запит на сервер за колекцією порід, і створення списку в Select

apiService
  .fetchBreeds()
  .then(data => {
    createOptions(data);
    loadingStatus.download();
  })
  .catch(() => loadingStatus.failure());

// Прослуховувач на селектCat
selectCat.addEventListener('change', selectBreed);

function createOptions(arr) {
  // loader.hidden = true;
  selectCat.hidden = false;
  const options = arr.map(({ id, name }) => {
    return `<option value=${id}>${name}</option>`;
  });

  selectCat.innerHTML = options.join('');
}

function selectBreed(evt) {
  // показуэмо завантаження
  loadingStatus.loading();
  // очищаємо розмітку
  catCard.innerHTML = '';

  let breedId = evt.currentTarget.value;
  // робимо запит за котиком
  apiService
    .fetchCatByBreed(breedId)
    .then(data => {
      renderCatCard(data);
      loadingStatus.download();
    })
    .catch(() => loadingStatus.failure());
}

function renderCatCard({ url, breeds }) {
  const temperament = breeds[0].temperament;
  const name = breeds[0].name;
  const description = breeds[0].description;

  const catInfo = `<img src="${url}" alt="${name}" class='image'/>
  <div class='info'>
  <h2>${name}</h2>
  <P>${description}</P>
  <p>Temperament: ${temperament}</p>
  </div>`;

  catCard.innerHTML = catInfo;
}
