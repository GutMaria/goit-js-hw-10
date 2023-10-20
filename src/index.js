import { fetchBreeds, fetchCatByBreed } from './cat-api.js';

const selectCat = document.querySelector('.breed-select');
const catCard = document.querySelector('.cat-info');

function createOptions(arr) {
  const options = arr.map(
    ({ id, name }) => `<option value=${id}>${name}</option>`
  );

  selectCat.innerHTML = options.join('');
}

fetchBreeds().then(data => createOptions(data));

let breedId;

selectCat.addEventListener('change', selectBreed);

function selectBreed(evt) {
  breedId = evt.currentTarget.value;
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
<p>Temperament:${temperament}</p>
</div>`;

  catCard.innerHTML = catInfo;
}
